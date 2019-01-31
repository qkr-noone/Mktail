<template>
  <div class="con-wrap invoice">
    <p class="userPageTitle">我的发票</p>
    <p class="userPageTab">
      <span @click="changeTabActive(0)" :class="{pageTabActive:invoiceActive===0}">补开发票</span>
      <span @click="changeTabActive(1)" :class="{pageTabActive:invoiceActive===1}">电子发票</span>
      <span @click="changeTabActive(2)" :class="{pageTabActive:invoiceActive===2}">纸质发票</span>
    </p>
    <div class="content supplement" v-show="invoiceActive===0">
      <div class="tip">
        <p>温馨提示</p>
        <p class="tip-text">一、商品发票配送规则：纸质发票将在您收货完成且在订单确认收货后的3-5个工作日内
          &nbsp; &nbsp; &nbsp; &nbsp;寄出，电子发票一般会在订单完成支付后48小时内为您开具</p>
        <p class="tip-text">二、增值税专用发票资质维护入口：个人中心-开票信息-增值税专用发票资质</p>
      </div>
      <div class="invoice-supplement">
        <ul class="supplement-title">
          <li>订单详情</li>
          <li>发票类型</li>
          <li>状态</li>
          <li>操作</li>
        </ul>
        <ul class="invoice-list">
          <li class="invoice-item">
            <div class="invoice-item-title">
              <span>2018-12-05 20:59:00</span>
              <span>订单号: 300382019621354414</span>
              <span>飞科旗舰店 <img src="static/img/user/user_part.png"></span>
            </div>
            <div class="invoice-item-info">
              <img src="static/img/user/user_demo2.png">
              <span class="info-title">
                飞科(FLYCO)电吹风机家用FH6232大功率吹风筒  2000W
                <br><span class="color-type">颜色分类：01</span>
              </span>
              <span class="info-num">1</span>
              <span class="info-applyContact">
                <a class="apply">发票申请</a><br>
                <a class="contact">联系卖家</a>
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="content electronic" v-show="invoiceActive===1">
      <div class="electronic-invoice">
        <div class="Invoicing">开票中</div>
        <p>发票类型:电子增值税普通发票</p>
        <p>抬头:个人</p>
        <p>销售方:爱之美电器旗舰店</p>
        <p>价税合计:29.80 元</p>
        <p class="detailed">
          <a>发票明细</a>
          <a>订单明细</a>
        </p>
      </div>
    </div>
    <div class="content" v-show="invoiceActive===2">
      <ul class="invoice-list">
        <li class="invoice-item">
          <div class="invoice-item-title">
            <span>2018-12-05 20:59:00</span>
            <span>订单号: 300382019621354414</span>
            <span>飞科旗舰店 <img src="static/img/user/user_part.png"></span>
          </div>
          <div class="invoice-item-info">
            <img src="static/img/user/user_demo2.png">
            <span class="info-title">
                飞科(FLYCO)电吹风机家用FH6232大功率吹风筒  2000W
                <br><span class="color-type">颜色分类：01</span>
              </span>
            <span class="info-num">1</span>
            <span class="info-applyContact">
                <a class="apply">发票申请</a><br>
                <a class="contact">联系卖家</a>
              </span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      invoiceActive: 0
    }
  },
  methods: {
    changeTabActive (val) {
      this.invoiceActive = val
    }
  }
}

</script>
<style scoped>
  @import "../../../assets/css/user/user-homePage.css";
  .con-wrap{
    margin-left: -2px;
    height:800px;
    font-weight:400;
  }
  .content{
    padding-left: 30px;
    text-align: left;
    margin-top: 25px;
  }
  .supplement .tip{
    width:1023px;
    height:134px;
    background:rgba(255,250,238,1);
    margin: 20px 0  23px 0;
    padding:19px 542px 0 14px;
    font-size: 12px;
  }
  .supplement .tip p{
    color:#E71600;
    margin-bottom: 16px;
  }
  .supplement .tip .tip-text{
    color:#F16F61!important;
  }
  .supplement .supplement-title{
    width:1023px;
    height:30px;
    background:rgba(244,244,244,1);
    line-height: 30px;
    font-size:14px;
    color:rgba(135,135,135,1);
  }
  .supplement .supplement-title>li:first-child{
    margin:0 230px 0 231px;
  }
  .supplement .supplement-title>li:not(:first-child){
    margin-left: 100px;
  }
  .invoice-item{
  }
 .invoice-item{
    width:1023px;
    height:134px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(227,227,227,1);
    margin-top: 20px;
    font-size: 12px;
  }
 .invoice-item-title{
    width:1021px;
    height:31px;
    background:rgba(244,244,244,1);
    font-size:13px;
    font-weight:300;
    color:rgba(135,135,135,1);
    padding-left: 24px;
    line-height: 31px;
    margin-bottom: 9px;
  }
  .invoice-item-title>span{
    margin-right: 53px;
  }
 .invoice-item-info{
    display: flex;
    justify-content: space-between;
    padding: 0 26px 0 12px;
  }
 .invoice-item-info .info-title{
    width:260px;
    color:#353535;
    margin-left: -480px;
  }
 .invoice-item-info .info-num{
    color:#353535;
    margin-left:-450px;
  }
  .invoice-item .info-title .color-type{
    color:#A3A3A3;
  }
  .invoice-item .info-applyContact{
    color:#878787;
    width:60px;
    height:20px;
    text-align: center;
  }
  .invoice-item .info-applyContact .apply{
    border:1px solid rgba(255,70,6,1);
    border-radius:2px;
    color:#FF4606;
    margin-bottom: 10px;
  }
  .electronic .electronic-invoice{
    width:400px;
    height:241px;
    border:2px solid rgba(243,243,243,1);
    font-size:14px;
    font-weight:300;
    color:rgba(135,135,135,1);
  }
  .electronic  .Invoicing{
    height:40px;
    background:rgba(232,232,232,1);
    line-height: 40px;
    text-align: right;
    padding-right: 20px;
    color:#FF4606;
  }
  .electronic p{
    margin:10px 0 0 20px;
  }
  .electronic p>a{
    width:70px;
    height:30px;
    border:1px solid rgba(204,204,204,1);
    line-height: 30px;
    text-align: center;
    margin-right: 10px;
  }
  .electronic .detailed{
    text-align: right;
    padding-right: 15px;
  }
</style>
