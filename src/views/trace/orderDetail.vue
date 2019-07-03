<template>
  <div class="order-detail">
    <shortcut></shortcut>
    <userNav></userNav>
    <section class="order">
      <section class="crumbs Left-Center">
        <span @click="goUser">我的MKTail</span><i class="el-icon-arrow-right"></i><span @click="goOrder">订单中心</span><i class="el-icon-arrow-right"></i><span>订单详情</span>
      </section>
      <section class="content">
        <ul class="status Center" v-if="orderInfo.status>=3 &&orderInfo.status<=5">
          <li class="Top-Center">
            <img src="static/img/user/user-order-detail-1.png">
            <span class="status-0" :class="{'status-1': flowInfo.State==='0'}">待揽件</span>
          </li>
          <span class="line"></span>
          <li class="Top-Center">
            <img src="static/img/user/user-order-detail-2.png">
            <span class="status-0" :class="{'status-1': flowInfo.State==='2'}">运输中</span>
          </li>
          <span  class="line"></span>
          <li class="Top-Center">
            <img src="static/img/user/user-order-detail-3.png">
            <span class="status-0" :class="{'status-1': false}">派送中</span>
          </li>
          <span  class="line"></span>
          <li class="Top-Center">
            <img src="static/img/user/user-order-detail-4.png">
            <span class="status-0" :class="{'status-1': flowInfo.State==='3'}">已签收</span>
          </li>
        </ul>
        <section class="data" v-if="orderInfo.status>=3 &&orderInfo.status<=5">
          <h5 class="data-title" v-if="flowInfo.State==='0'">待揽件</h5>
          <h5 class="data-title" v-else-if="flowInfo.State==='2'">运输中</h5>
          <h5 class="data-title" v-else-if="flowInfo.State==='3'">已签收</h5>
          <section class="flow-list">
            <ul class="flow-ul">
              <li class="flow-li Left" v-for="item in flowInfo.Traces" :key="item.AcceptTime">
                <span class="date">{{item.AcceptTime.split(" ")[0]}}</span>
                <!-- <span class="week">周一</span> -->
                <span class="time">{{item.AcceptTime.split(" ")[1]}}</span>
                <span class="data-desc">{{item.AcceptStation}}</span>
              </li>
              <li class="flow-li Left" v-if="flowInfo.Traces && !flowInfo.Traces.length">
                <span class="data-desc">等待快递揽件</span>
              </li>
            </ul>
          </section>
        </section>
        <section class="order_other_status" v-if="orderInfo.status<3 || orderInfo.status>5" data-attr="待付款  已取消  已退款">
          <div class="order_other_box">
            <div class="order_other_con">
              <span class="order_other_icon" href="javascript:;"><img src="static/img/user/trace_edit.png"></span>
              <span class="order_other_cur">当前订单状态：&nbsp;</span><span v-if="orderInfo.status===1">待付款</span><span v-if="orderInfo.status===2">已取消</span><span v-if="orderInfo.status===6">已退款</span><span>&nbsp;（买家操作）</span>
            </div>
          </div>
        </section>
        <ul class="order-info Left">
          <li class="order-li">
            <h5 class="item-title">收货人信息</h5>
            <div class="item Left">
              <span class="label">收货人：</span><div class="item-info">{{orderReceiverInfo.receiver}}</div>
            </div>
            <div class="item Left">
              <span class="label">地址：</span><div class="item-info">{{orderReceiverInfo.receiverAreaName}}</div>
            </div>
            <div class="item Left">
              <span class="label">手机号码：</span><div class="item-info" v-if="orderReceiverInfo.reciverMobile">{{orderReceiverInfo.reciverMobile.replace(/(\d{3})(\d{4})/, '$1****')}}</div>
            </div>
          </li>
          <li class="order-li">
            <h5 class="item-title">配送信息</h5>
            <div class="item Left">
              <span class="label">配送方式：</span><div class="item-info">普通快递</div>
            </div>
            <div class="item Left">
              <span class="label">运费：</span><div class="item-info">￥{{shippingInfo.shippingPrice}}</div>
            </div>
            <div class="item Left">
              <span class="label">运单号码：</span><div class="item-info">{{shippingInfo.shippingCode}}</div>
            </div>
            <div class="item Left">
              <span class="label">物流公司：</span><div class="item-info">{{shippingInfo.shippingName}}</div>
            </div>
          </li>
          <!-- <li class="order-li">
            <h5 class="item-title">发票信息</h5>
            <div class="item Left">
              <span class="label">发票类型：</span><div class="item-info">电子普通发票</div>
            </div>
            <div class="item Left">
              <span class="label">发票抬头：</span><div class="item-info">个人</div>
            </div>
            <div class="item Left">
              <span class="label">发票内容：</span><div class="item-info">商品明细</div>
            </div>
            <span class="ticket">电子发票与纸质发票具有同等法律效力，可作为用户维权、保修的有效凭据</span>
            <div class="load-ticket">下载电子发票</div>
          </li> -->
        </ul>
      </section>
      <section class="goods">
        <!-- <h5 class="seller">胜天门业</h5> -->
        <el-row class="row">
          <el-col :span="10">商品</el-col>
          <el-col :span="4">商品编号</el-col>
          <el-col :span="3">单价</el-col>
          <el-col :span="3">商品数量</el-col>
          <el-col :span="4">操作</el-col>
        </el-row>
        <el-row class="nest" v-for="list in orderItemList" :key="list.id">
          <el-col :span="3">
            <router-link :to="{path: '/detail', query:{goodsId: list.goodsId}}" href="javascript:;" class="a_box">
              <img class="img" :src="list.picPath">
            </router-link>
          </el-col>
          <el-col :span="7">
            <div class="nest-desc">
              <router-link :to="{path: '/detail', query:{goodsId: list.goodsId}}" href="javascript:;">
                <span class="nest-desc-one">{{list.title}}</span>
              </router-link>
              <span>规格: {{list.spec}}</span>
            </div>
          </el-col>
          <el-col :span="4"><span>{{list.goodsId}}</span></el-col>
          <el-col :span="3"><span>¥ {{list.price}}</span></el-col>
          <el-col :span="3"><span>{{list.num}}</span></el-col>
          <el-col :span="4" class="Top">
            <!-- <a class="btn" href="javascript:;">再次购买</a>
            <a class="btn" href="javascript:;">确认收货</a> -->
          </el-col>
        </el-row>
        <div class="replace_btn Top">
          <router-link class="btn" v-if="orderInfo.status === 1" :to="{path:'/pay', query: {payStyle: 'weChat', orderIdList: $route.query.orderId, from: Date.parse(new Date())}}">立即付款</router-link>
          <a class="btn" href="javascript:;" v-if="orderInfo.status === 2 || orderInfo.status > 4" @click="buyAgain(orderItemList)">再次购买</a>
          <a class="btn" href="javascript:;" v-if="orderInfo.status === 3">申请退款</a>
          <a class="btn" href="javascript:;" v-if="orderInfo.status === 4" @click="orderBtnVal=$route.query.orderId">确认收货</a>
        </div>
      </section>
      <!-- <div class="recommend">
        <div class="recommend-top">
          <span>为您推荐</span>
          <hr>
          <div class="page-turning">
            <el-pagination small layout="prev, pager, next" :total="50"></el-pagination>
          </div>
        </div>
        <div>
          <youRecom></youRecom>
        </div>
      </div> -->
    </section>
    <Box :orderBtnVal="orderBtnVal" @btnOrder="btnOrder()" @quitBtnVal="orderBtnVal=''"></Box>
    <pageFooter class="footer"></pageFooter>
  </div>
</template>
<script>
import shortcut from '@/components/shortcutHeader'
import userNav from '@/components/userNav'
import youRecom from '@/components/youRecom'
import pageFooter from '@/components/pageFooter'
import Box from '@/views/user/children/order/box'
export default {
  data () {
    return {
      orderReceiverInfo: {},
      shippingInfo: {},
      orderItemList: [],
      orderInfo: {},
      flowInfo: {},
      orderBtnVal: ''
    }
  },
  components: { shortcut, userNav, youRecom, pageFooter, Box },
  mounted () {
    this.dataInit()
  },
  methods: {
    dataInit () {
      this.API.orderDetail({ orderId: this.$route.query.orderId }).then(res => {
        this.orderReceiverInfo = res.orderReceiverInfo
        this.shippingInfo = res.shippingInfo
        this.orderItemList = res.orderItemList
        this.orderInfo = res.orderInfo
        this.$nextTick(() => {
          this.API.findFlow({ LogisticCode: this.shippingInfo.shippingCode, shipperCode: this.shippingInfo.shippingEncoded }).then(rtn => {
            this.flowInfo = rtn.result
          })
        })
      })
    },
    goOrder () {
      this.$router.push('/user/userOrder/statu-z')
    },
    goUser () {
      this.$router.push('/user')
    },
    buyAgain (series) {
      series.forEach(item => {
        this.API.addToCart({ itemId: item.itemId, num: item.num, name: this.$cookies.get('user-key') }).then(res => {})
        this.$router.push('/cart')
      })
    },
    btnOrder () {
      this.API.orderBtnObtain({ orderIds: this.orderBtnVal }).then(res => {
        this.orderBtnVal = ''
        if (res.success === false) {
          this.$message.warning('提交异常')
          return false
        }
        this.$message.success('交易已成功')
        this.dataInit()
      })
    }
  }
}
</script>
<style scoped>
/* 简写 */
  .Center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .Left {
    display: flex;
  }
  .Left-Center {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .Top {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .Top-Left {
    display: flex;
    flex-direction: column;
  }
  .Top-Center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .hidden {
    visibility: hidden;
  }
/* 内容 */
  .order-detail {
    background-color: #F4F4F4;
    font-family: SourceHanSansCN-Light;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  .order {
    width: 1226px;
    margin: 0 auto;
  }
  .crumbs {
    height: 48px;
    font-size: 14px;
    color: #414141;
  }
  .crumbs>span:nth-child(n) {
    cursor: pointer;
  }
  .content {
    background-color: #FFFFFF;
    padding: 55px 73px 38px 73px;
    border-top: 4px solid #E71600;
  }
/* 阶段状态 */
  ul.status li:last-child {
    align-self: flex-end;
    margin-left: 6px;
  }
  .line {
    width: 170px;
    border-top: 3px dotted #FF724E;
    align-self: flex-end;
    margin-bottom: 15px
  }
  .status-0 {
    margin-top: 17px;
    width:113px;
    height:36px;
    line-height: 36px;
    text-align: center;
    border-radius:18px;
    background-color: #FFEC85;
    font-size: 22px;
    color: #403F44;
  }
  .status-1 {
    background-color: #FF952E;
    color: #FFFFFF;
  }
/* 物流信息读取 */
  .data {
    margin-top: 28px;
    background-color: #F6F6F6;
    border-radius:5px;
    color: #5C5C5C;
    padding: 0 12px;
  }
  .data .data-title {
    font-weight: 300px;
    font-size: 22px;
    line-height: 46px;
    text-align: left;
    padding-left: 16px;
    border-bottom: 1px solid #D3D3D3;
  }
  .flow-list {
    overflow: hidden;
    padding-bottom: 30px;
  }
  .flow-ul {
    margin: 50px 0 0 70px;
  }
  .flow-li {
    align-items: flex-start;
    border-left: 2px solid #D3D3D3;
    min-height: 40px;
  }
  .flow-li:before {
    content: '';
    border: 3px solid #f3f3f3;
    background-color: #B0B0B0;
    width: 10px;
    height: 10px;
    border-radius: 10px;
    margin-left: -9px;
    margin-right: 10px;
    margin-top: 3px;
    flex-shrink: 0;
  }
  li.flow-li:last-child:before{
    background-color: #fe4300;
    border-color: #f8e9e4;
  }
  li.flow-li>:nth-child(n):not(:last-child) {
    flex-shrink: 0
  }
  li.flow-li:last-child {
    border: none;
    margin-left: 2px;
  }
  .date {
    width: 90px;
    font-weight: 700;
    margin-right: 8px;
    font-family: Arial;
    line-height: 24px;
  }
  .week {
    width: 35px;
    font-weight: 700;
    line-height: 24px;
  }
  .time {
    width: 80px;
    margin-right: 28px;
    margin-left: 5px;
    line-height: 24px;
  }
  .data-desc {
    font-size: 14px;
    line-height: 24px;
    text-align: left;
  }
/* 配送信息 */
  .order-info{
    color: #403F44;
    font-size: 14px;
    background-color: #fff;
    margin-top: 24px;
    justify-content: space-between;
    border-top: 1px solid #DEDEDE;
  }
  .order-li {
    overflow: hidden;
    text-align: left;
    margin-top: 8px;
  }
  li.order-li:nth-child(n+2) {
    border-left: 1px solid #D7D7D7;
    padding-left: 48px;
  }
  li.order-li>:nth-child(n) {
    text-align: left;
  }
  div.item:nth-child(n+2) {
    margin-top: 15px;
  }
  h5.item-title {
    font-size: 18px;
    font-family:SourceHanSansCN-Regular;
    font-weight: 400;
  }
  .item {
    flex-wrap: nowrap;
  }
  .label {
    width: 80px;
    flex-shrink: 0;
  }
  .item-info {
    width: 220px;
  }
  .ticket {
    color: #B4B4B4;
    margin-top: 10px;
    width: 260px;
    text-align: left;
    font-size: 13px;
    line-height: 16px;
  }
  li.order-li div.load-ticket {
    margin: 10px auto;
    width:93px;
    height:20px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(191,191,191,1);
    border-radius:5px;
    text-align: center;
    color: #4C4C4C;
    font-size: 13px;
  }
/* 商品信息 */
  .goods {
    font-size: 13px;
    margin-top: 20px;
    position: relative;
  }
  .seller {
    color: #737373;
    height: 30px;
    line-height: 30px;
    text-align: left;
    margin-left: 5px;
  }
  .row {
    height: 32px;
    line-height: 32px;
    background-color: #F0FBFF;
  }
  .nest {
    height: 132px;
    background-color: #FFFFFF;
    border-bottom: 1px solid #F4F4F4;
    padding: 28px 0 22px 0;
  }
  .nest .a_box {
    width: 81px;
    height: 81px;
    overflow: hidden;
  }
  .nest .img {
    max-width: 81px;
    max-height: 81px;
    font-size: 81px;
  }
  .el-col{
    height: 100%;
  }
  .nest-desc {
    box-sizing: border-box;
    height: 100%;
    padding: 4px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }
  .nest-desc-one {
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    color: rgb(53, 53, 53);
    height: 35px;
  }
  .replace_btn {
    box-sizing: border-box;
    position: absolute;
    background-color: #fff;
    border-left: 1px solid #F4F4F4;
    top: 32px;
    right: 0;
    height: calc(100% - 33px);
    width: calc(100% * 1/6);
    justify-content: center;
  }
  .btn {
    width: 100px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    color: #202020;
    border: 1px solid #D3D3D3;
    border-radius: 5px;
  }
  a.btn + a{
    margin-top: 8px;
  }
/* 为你推荐 */
  .recommend{
    width:1185px;
    height:312px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(220,220,220,1);
    margin-top: 30px;
    padding: 14px 16px 27px 23px;
  }
  .recommend .recommend-top{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 37px;
  }
  .recommend hr{
    flex-grow: 1;
    color:#D8D8D8;
    opacity: 0.4;
    margin-left:40px;
  }
  .footer {
    padding-top: 80px;
    margin-top: auto;
  }
/* 取消订单 */
  .can_order_box {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0, 0.1);
    z-index: 1000;
    overflow-y: hidden;
  }
  .can_order {
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width:660px;
    height:437px;
    background:rgba(255,255,255,1);
    border:10px solid rgba(142, 142, 142, 0.35);
    border-radius: 10px;
  }
  .init{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    list-style: none;
    font-style: normal;
    text-decoration: none;
    font-family: "Helvetica Neue", "Microsoft Yahei";
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
  }
  textarea:hover, textarea:focus, select:hover, select:focus, button:hover, button:focus, input:focus, input:hover, label:hover, label:focus, option:focus, option:hover{
    outline: none;
  }
  select:hover, select {
    border: 1px solid #8E8E8E;
  }
  select::-ms-expand{ display: none; }
  input[type="button"], input[type="submit"], input[type="search"], input[type="reset"], textarea {
    -webkit-appearance: none;
  }
  table, tr, td {
    border-spacing: 0;
  }
  .can_con {
    display: flex;
    flex-direction: column;
    height: 100%;
    font-size: 15px;
    color: #3D3D3D;
    padding: 24px 21px 15px 37px;
  }
  .can_title {
    display: flex;
  }
  .can_title_logo {
    max-width: 70px;
    max-height: 40px;
  }
  .can_title_head {
    color: #4E4E4E;
    font-size: 24px;
    vertical-align: bottom;
    margin-left: 20px;
    align-self: flex-end;
  }
  .can_item {
    margin-top: 36px;
  }
  .can_tip {
    color: #E53031;
    margin-bottom: 10px;
  }
  .can_select_box {
    height: 32px;
    line-height: 32px;
  }
  .can_select {
    font-size: 15px;
    border-radius: 4px;
    border:1px solid rgba(135,135,135,1);
    box-shadow:0px 0px 8px 0px rgba(126,123,124,0.4);
  }
  .can_other {
    margin-top: 25px;
    border-radius: 4px;
    width: 516px;
    font-size: 13px;
    font-family: "Microsoft Yahei";
    height: 60px;
  }
  .can_close {
    position: absolute;
    top: 8px;
    right: 8px;
    font-size: 20px;
    color: #4E4E4E;
    cursor: pointer;
  }
  .can_pick {
    display: flex;
    justify-content: flex-end;
    padding: 17px 21px;
    box-sizing: border-box;
    margin-top: auto;
  }
  .can_btn{
    padding: 6px 15px;
    border-radius: 4px;
    cursor: pointer;
  }
  .btn_sub_set {
    background-color: #D73331;
    color: #FFFFFF;
    margin-right: 10px;
  }
/* 确认收货 */
  .btn_order {
    height: 258px;
  }
  .btn_tip { font-size: 24px; }
  .btn_tip_back { color: #4E4E4E; font-size: 14px; }
/* 待付款 已取消 已退款 */
  .order_other_status {
    box-sizing: border-box;
    height:173px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(173,173,173,1);
    box-shadow:0px 0px 6px 3px rgba(0, 0, 0, 0.1);
    border-radius:5px;
  }
  .order_other_box {
    padding: 27px 62px;
  }
  .order_other_con {
    font-size: 18px;
    color: #3F3F3F;
    text-align: left;
  }
  .order_other_cur {
    color: #E53031
  }
  .order_other_handler {
    color: #8A8A8A;
  }
  .order_other_icon {
    margin-bottom: -5px;
  }
</style>
