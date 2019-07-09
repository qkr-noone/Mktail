<template>
  <div class="con-wrap">
    <div >
      <ul class="top">
        <li class="comment-quantity border">
          <p>待评商品</p>
          <p class="quantity">{{evaluateCount.initial}}</p>
        </li>
        <li class="comment-quantity  evaluated">
          <p>已评商品</p>
          <p class="quantity">{{evaluateCount.through}}</p>
        </li>
        <li class="comment-tip border">
          <span>发评价，得云钻，积少成多换礼品<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;评价数量已超过0%的用户啦</span>
        </li>
        <li class="comment-tip">
          <p class="tip">评价小贴士</p>
          <span>发表评价就有机会获得云钻云钻详细规则带图或者被评为精华的图片有机会获得更多的云钻手机发表评价更方便</span>
        </li>
      </ul>
    </div>
    <div class="tab">
      <div class="tab-title" :class="{tabTitleActive: statusEvaluation===1}" @click="statusEvaluation=1">待评商品</div>
      <div class="tab-title tab-titleActive" :class="{tabTitleActive:statusEvaluation===2}" @click="statusEvaluation=2">已评商品</div>
      <!-- <div class="recovery orientate">
        <img src="static/img/user/user_delete1.png">
        <span>回收订单</span>
      </div> -->
    </div>
    <div class="assess-wares" v-if="statusEvaluation===1&&orderList.total">
      <el-row class="com_title">
        <el-col :span="12">订单详情</el-col>
        <el-col :span="4">收货人</el-col>
        <el-col :span="4">金额</el-col>
        <el-col :span="4">操作</el-col>
      </el-row>
      <div class="com_con" v-for="(list, index) in orderList.rows" :key="index">
        <el-row class="com_con_title">
          <el-col :span="4">{{orderTime(list.createTime)}}</el-col>
          <el-col :span="6">订单号：{{list.orderId}}</el-col>
        </el-row>
        <el-row class="com_con_desc">
          <el-col :span="12">
            <div class="com_con_desc_item">
              <el-col :span="18" class="com_con_desc_item">
                <router-link :to="{path: '/detail', query:{goodsId: list.goodsId}}" class="a_box">
                  <img class="nest_img" :src="list.picPath">
                </router-link>
                <div class="nest-desc">
                  <router-link :to="{path: '/detail', query:{goodsId: list.goodsId}}">
                    <span class="nest-desc-one">{{list.title}}</span>
                  </router-link>
                </div>
              </el-col>
              <el-col :span="6"  class="com_desc_num"><span>X {{list.num}}</span></el-col>
            </div>
          </el-col>
          <el-col :span="4">{{list.receiver}}</el-col>
          <el-col :span="4">{{list.payment}}元</el-col>
          <el-col :span="4" class="com_handle">
            <router-link :to="{path: '/trace/orderDetail', query:{orderId: list.orderId}}" class="com_order_more">订单详情</router-link>
            <button class="com_order_handle" @click="evaluatGoods.push(list)">评价</button>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="assess-wares" v-if="statusEvaluation===2&&orderList.total">
      <div class="com_con com_assess" v-for="(list, index) in orderList.rows" :key="index">
        <el-row class="com_con_title already_assess">
          <el-col :span="13">订单详情</el-col>
          <el-col :span="7">状态</el-col>
          <el-col :span="4">操作</el-col>
        </el-row>
        <el-row class="com_con_desc">
          <el-col :span="13">
            <div class="com_con_desc_item">
              <el-col :span="18" class="com_con_desc_item">
                <router-link :to="{path: '/detail', query:{goodsId: list.goodsId}}" class="a_box">
                  <img class="nest_img" :src="list.picPath">
                </router-link>
                <div class="nest-desc">
                  <router-link :to="{path: '/detail', query:{goodsId: list.goodsId}}">
                    <span class="nest-desc-one">{{list.title}}</span>
                  </router-link>
                </div>
              </el-col>
              <el-col :span="6"  class="com_desc_num"><span>X {{list.num}}</span></el-col>
            </div>
          </el-col>
          <el-col :span="7">{{orderTime(list.evaluateTime)}}</el-col>
          <el-col :span="4" class="com_handle">
            <router-link :to="{path: '/trace/orderDetail', query:{orderId: list.orderId}}" class="com_order_more">订单详情</router-link>
            <router-link :to="{path: '/trace/orderDetail', query:{orderId: list.orderId}}" class="assess_active">查看评价</router-link>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="no-order" v-if="!orderList.total">
      <p>您现在还没有{{statusEvaluation===1?'未':'已'}}评价商品</p>
    </div>
    <el-pagination  v-if="orderList.total"
      :current-page.sync="page"
      :page-size="rows"
      layout="prev, pager, next, jumper"
      :total="orderList.total">
    </el-pagination>
    <Box
      :evaluatGoods="evaluatGoods"
      @btnEvaluate="btnEvaluate()"
      @quitEvaluate="evaluatGoods=[]">
    </Box>
  </div>
</template>
<script>
import { formatDate } from '@/common/utils'
import Box from '@/views/user/children/order/box'
export default {
  data () {
    return {
      username: this.$cookies.get('user-key'),
      orderList: {},
      page: 1,
      rows: 15,
      statusEvaluation: 1,
      evaluateCount: {
        initial: 0,
        through: 0
      },
      evaluatGoods: []
    }
  },
  components: { Box },
  mounted () {
    this.getData()
    this.getCount()
  },
  watch: {
    statusEvaluation (evaluate) {
      this.page = 1
      this.getData()
    },
    page () {
      this.getData()
    }
  },
  methods: {
    getData () { // 1：待评价，2：已评价
      this.API.getOrderEvaluation({ page: this.page, rows: this.rows, status: this.statusEvaluation, userName: this.username }).then(res => {
        this.orderList = res
      })
    },
    getCount () { // 1：待评价，2：已评价
      this.API.getEvaluationCount({status: 1, userName: this.username}).then(res => {
        this.$set(this.evaluateCount, 'initial', res)
      })
      this.API.getEvaluationCount({status: 2, userName: this.username}).then(res => {
        this.$set(this.evaluateCount, 'through', res)
      })
    },
    orderTime (time) {
      return formatDate(new Date(time))
    },
    btnEvaluate () {
      this.evaluatGoods = []
    }
  }
}
</script>
<style scoped>
/* 结构 */
  ul,ul>li,img,.recovery{
    display: inline-block;
  }
  div,ul,ul>li{
    box-sizing: border-box;
    user-select: none;
  }
  .con-wrap{
    font-size:14px;
    font-family:SourceHanSansCN-Light;
    font-weight:300;
    text-align: left;
  }
  /**/
  .top{
    height:118px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(231,231,231,1);
    margin: -4px 0 10px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color:#484848;
  }
  .top>li{
    margin-left: -50px;
  }
  .top .comment-quantity{
    width:150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height:56px;
  }
  .top .comment-tip{
    width:260px;
    text-align: left;
    height:66px;
  }
  .top .evaluated{
    width:60px;
    margin-left: -105px;
  }
  .top .quantity{
    font-size:32px;
    font-family:SimHei;
    font-weight:400;
    color:rgba(255,153,0,1);
    margin-top: 10px;
  }
  .border{
    border-right: 1px solid #C2C2C2;
  }
  .top .tip{
    font-weight:500;
    color:#181818;
    margin:-15px 0 10px -20px;
  }
  .top .tip:before{
    content: '*';
    color:#E71600;
  }
  .tab{
    height:56px;
    background:rgba(244,244,244,1);
    border:1px solid rgba(224,224,224,1);
    padding-left: 18px;
    padding-top: 12px;
    text-align: left;
    font-size:20px;
    font-family:SimSun;
    font-weight:bold;
    position:relative ;
  }
  .tab-title{
    width:158px;
    height:44px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    display: inline-block;
    line-height: 44px;
    text-align: center;
    color:#454545;
    border: none;
    background: none;
    cursor: pointer;
  }
  .tab .orientate{
    position: absolute;
    top:18px;
    right:18px;
    color:rgba(98,98,98,1) !important;
    font-weight:300;
  }
  .tabTitleActive{
    border:1px solid rgba(224,224,224,1);
    color:rgba(255,153,0,1);
    border-bottom: 1px solid #FFFFFF;
    background:rgba(255,255,255,1);
  }
  .recovery{
    width:93px;
    height:22px;
    border:1px solid rgba(231,231,231,1);
    border-radius:4px;
    line-height: 20px;
    text-align: center;
    margin-left:650px;
    font-size:13px;
    color:rgba(98,98,98,1);
  }
  .recovery img{
    margin-top: -5px;
  }
  .no-order{
    height:345px;
    border:1px solid rgba(231,231,231,1);
    background:#FFFFFF url('../../../../static/img/user/user_logoBack.png') no-repeat center;
    line-height: 345px;
  }
  .no-order p{
    font-size:18px;
    font-weight:400;
    color:rgba(52,52,52,1);
    text-align: center;
  }
  .assess-wares{
    min-height: 345px;
    border:1px solid rgba(224,224,224,1);
    background: #FFFFFF;
    border-top: none;
  }
/* 主体内容 */
  .com_title {
    height: 55px;
    text-align: center;
    color: #686868;
    font-size: 14px;
    padding: 0 20px;
    box-sizing: border-box;
    border-bottom: 4px solid #F4F4F4;
  }
  .com_title >div{
    height: 100%;
    line-height: 55px;
  }
  .com_con {
   font-size: 13px;
   color: #676767;
   padding: 20px;
   width: 100%;
   padding-bottom: 0;
  }
  .com_con + .com_con {
    padding-top: 0;
  }
  .com_con:last-child {
    padding-bottom: 20px;
  }
  .com_con_title {
   height: 41px;
   background-color: #F4F4F4;
   box-sizing: border-box;
   padding-left: 12px;
   border: 1px solid #E7E7E7;
   border-top: none;
   border-bottom: none;
  }
  .com_con_title >div {
   height: 100%;
   line-height: 41px;
  }
  .com_con_desc {
   padding-left: 12px;
   /*height: 68px;*/
   display: flex;
   border: 1px solid #E7E7E7;
   border-top: none;
   box-sizing: border-box;
  }
  .com_con_desc >div{
    padding: 22px 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .com_con_desc >div:first-child{
    flex-direction: column;
    justify-content: initial;
    align-items: initial;
  }
  .com_con_desc_item {
    display: flex;
  }
  .com_con_item_box {
    display: flex;
  }
  .com_con_desc >div:nth-child(n+2){
    border-left: 1px solid #E7E7E7;
  }
  .com_con_desc .com_desc_num {
    justify-content: flex-start;
    display: flex;
    align-items: center;
  }
  .a_box {
    width: 81px;
    height: 81px;
    margin-right: 20px;
    overflow: hidden;
    flex-shrink: 0;
  }
  .nest_img {
    max-width: 81px;
    max-height: 81px;
    font-size: 81px;
  }
  .nest-desc {
    box-sizing: border-box;
    height: 100%;
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: calc(100% - 102px);
  }
  .nest-desc-one {
    width: 100%;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap:break-word;
    color: rgb(53, 53, 53);
    height: 36px;
  }
  .nest-desc-one:hover {
    text-decoration: underline;
    color: #E53031;
  }
  .com_handle {
    flex-direction: column;
  }
  .com_order_more {
    color: #686868;
    margin-bottom: 5px;
  }
  .com_order_handle {
    padding: 7px 45px;
    border: 1px solid rgba(183,183,183,1);
    border-radius: 6px;
    background:rgba(242,242,242,1);
    margin-top: 5px;
    cursor: pointer;
  }
  .com_assess {
    padding-bottom: 20px;
  }
  .already_assess>div{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .assess_active{
    color: #3D8AEA;
  }
  .el-pagination {
    display: flex;
    justify-content: flex-end;
    padding-right: 20px;
    margin-top: 20px;
    background-color: #FFFFFF;
    border-radius: 4px;
  }
</style>
