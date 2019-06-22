<template>
  <div class="con-wrap">
    <div >
      <ul class="top">
        <li class="comment-quantity border">
          <p>待评商品</p>
          <p class="quantity">0</p>
        </li>
        <li class="comment-quantity  evaluated">
          <p>已评商品</p>
          <p class="quantity">0</p>
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
      <div class="tab-title" :class="{tabTitleActive:assessCommodity===false}" @click="tabTitleChange(false)">待评商品</div>
      <div class="tab-title tab-titleActive" :class="{tabTitleActive:assessCommodity===true}" @click="tabTitleChange(true)">已评商品</div>
      <div class="recovery orientate"  v-show="assessCommodity===true">
        <img src="static/img/user/user_delete1.png">
        <span>回收订单</span>
      </div>
    </div>
    <div class="order-tab" v-show="assessCommodity===false">
      <ul>
        <li class="order-item order-itemActive">全部订单</li>
        <li class="order-item">线上订单</li>
        <li class="order-item">门店订单</li>
      </ul>
      <div class="recovery">
        <img src="static/img/user/user_delete1.png">
        <span>回收订单</span>
      </div>
    </div>
    <div class="assess-wares" v-show="assessCommodity===true">
      <ul  v-for="item in unevaluatedorders" :key="item.skuId" class="wares-list">
        <li class="wares-item">
          <div class="item-title">
            <ul>
              <li>订单详情</li>
              <li>状态</li>
              <li>操作</li>
            </ul>
          </div>
          <div>
            <ul class="item-info">
              <img src="static/img/user/user_demo1.png">
              <li class="info-title">{item.title}}</li>
              <li class="info-num">X1</li>
              <li>未评价</li>
              <li>
                <a>订单详情</a><br>
                <a  @click="dialogTableVisible = true" class="textBlue">添加评价</a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div class="no-order" v-show="noorder===true">
      <p>您现在还没有未评价订单</p>
    </div>
    <div  class="assess-wares" v-show="assessCommodity1===true">
      <ul class="wares-list">
        <li v-for="item in evaluatedorders" :key="item.skuId" class="wares-item">
          <div class="item-title">
            <ul>
              <li>订单详情</li>
              <li>状态</li>
              <li>操作</li>
            </ul>
          </div>
          <div>
            <ul class="item-info">
              <img src="static/img/user/user_demo1.png">
              <li class="info-title">{{item.title}}</li>
              <li class="info-num">X1</li>
              <li><i class="el-icon-warning"></i></li>
              <li>
                <a>订单详情</a><br>
                <a @click="amendcomment" class="textBlue">修改评价</a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div class="no-order" v-show="order===true">
      <p>您现在还没有已评价订单</p>
    </div>
    <div class="dialog">
    <el-button type="text" @click="dialogTableVisible = true">打开嵌套表格的 Dialog</el-button>

    <el-dialog title="收货地址" :visible.sync="dialogTableVisible">
      <el-table :data="gridData">
        <el-table-column property="date" label="日期" width="150"></el-table-column>
        <el-table-column property="name" label="姓名" width="200"></el-table-column>
        <el-table-column property="address" label="地址"></el-table-column>
      </el-table>
    </el-dialog>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      assessCommodity: false, // 未评价商品显示
      assessCommodity1: false, // 已评价商品显示
      order: false, // 没有已评价订单
      noorder: true, // 没有未评价订单
      loginName: '',
      unevaluatedorders: [], // 未评价商品列表
      evaluatedorders: [], // 已评价商品列表
      dialogTableVisible: false
    }
  },
  mounted () {
    // 获取登录用户名称
    this.API.getUsername().then(rtn => {
      this.loginName = rtn.loginName
      // 查询未评价商品列表
      this.API.Unevaluatedorders({userName: rtn.loginName}).then(rtn => {
        if (rtn.code === 2000) {
          console.log(rtn.code)
          this.unevaluatedorders = rtn.data
          this.noorder = false
          this.assessCommodity = true
        } else {
          this.noorder = true
          this.assessCommodity = false
        }
        console.log(rtn)
      })
      // 查询评价商品列表
      // this.API.Evaluatedorders({userName: rtn.loginName}).then(res => {
      //   console.log(res)
      // })
    })
  },
  methods: {
    tabTitleChange (val) {
      if (val === false) {
        // 查询评价商品列表
        this.API.Evaluatedorders({userName: this.loginName}).then(rtn => {
          if (rtn.code === 2000) {
            this.evaluatedorders = rtn.data
            this.noorder = false
            this.order = false
            this.assessCommodity1 = true
            alert('查询已评价商品列表')
          } else if (rtn.code === 5000) {
            this.noorder = true
            this.order = false
            this.assessCommodity1 = false
          }
        })
      } else {
        // 查询未评价商品列表
        this.API.Unevaluatedorders({userName: this.loginName}).then(rtn => {
          if (rtn.code === 2000) {
            this.unevaluatedorders = rtn.data
            this.noorder = false
            this.order = false
            alert('查询未评价商品列表')
          } else {
            this.noorder = true
            this.assessCommodity = false
          }
          console.log(rtn)
        })
      }
    },
    amendcomment () {
    }
  }
}
</script>
<style scoped>
  ul,ul>li,img,.recovery{
    display: inline-block;
  }
  div,ul,ul>li{
    box-sizing: border-box;
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
  /**/
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
  .order-tab{
    height:56px;
    background:#FFFFFF;
    border:1px solid rgba(224,224,224,1);
    border-top: none;
    line-height: 56px;
    margin-bottom: 5px;
  }
  .order-item{
    width:79px;
    height:25px;
    margin-left: 26px;
    line-height: 25px;
    text-align: center;
    font-size:15px;
    color:#424242;
  }
  .order-itemActive{
    color:#FF9900;
    border:1px solid #FF9900;
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
    height:404px;
    border:1px solid rgba(224,224,224,1);
    background: #FFFFFF;
    border-top: none;
  }
  .wares-list{
    display: flex;
    flex-direction: column;
    padding:34px 20px 0 20px;
  }
  .assess-wares .wares-item{
    height:152px;
    border:1px solid #E7E7E7;
    color:#686868;
    margin-bottom: 17px;
  }
  .wares-item .item-title{
    height:41px;
    background:rgba(244,244,244,1);
    line-height: 41px;
  }
  .wares-item .item-title li:first-child{
    margin:0 356px 0 227px;
  }
  .wares-item .item-title li:nth-child(2){
    margin-right: 210px;
  }
  .wares-item .item-info{
    height:111px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 100px 0 17px;
    color:#676767;
  }
  .wares-item .item-info .info-title{
    width:248px;
    margin-left: -80px;
  }
  .wares-item .item-info li a{
    color:#686868;
    margin-bottom: 5px;
  }
  .textBlue{
    color:#3D8AEA !important;
  }
  .wares-item .item-info .info-num{
    margin-left: -100px;
  }
</style>
