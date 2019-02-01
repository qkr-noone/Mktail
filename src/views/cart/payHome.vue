<template>
  <div class="pay-home">
    <checkoutCounter></checkoutCounter>
    <div class="py-container">
      <!--主内容-->
      <div class="checkout py-container  pay">
        <div class="checkout-tit">
          <h4 class="tit-txt">
            <span  class="success-info">订单提交成功，请尽快付款！订单号：{{orderInfo.outTradeNo}}</span>
            <span>请您在<em class="pay-info-tip">24小时</em>内完成支付，否则订单会被自动取消（库存紧俏订单请参见详情页时限）</span>
          </h4>
          <span class="pay-price"><em>应付金额</em><em  class="money">{{totalFee}}</em>元</span>
        </div>
      </div>
      <div class="pay-h-main">
        <div class="pay-h-title">
          <div class="pay-h-t-tip">
            <img src="static/img/mk_logo_login.png">
            <span>零钱支付</span>
          </div>
          <img class="pay-h-t-img" src="static/img/mk_pay_h_tip.png">
        </div>
        <div class="pay-h-box">
          <div class="pay-h-box-1">
            <input type="checkbox" name="" v-model="isChecked">
            <img src="static/img/mk_pay_h_box.png">
            <span>MKTail零钱</span>
          </div>
          <div class="pay-h-box-2">
            <span>可消费余额{{cash}}元</span>
            <a href="javascript:;"><i class="el-icon-plus"></i><span>余额充值</span></a>
          </div>
          <div class="pay-h-box-3">支付<em>{{totalFee}}</em>元</div>
        </div>
        <div class="pay-h-submit">
          <h5>请输入支付密码 <a href="javascript:;">忘记支付密码？</a></h5>
          <div class="pya-h-submit-tip"><input type="password" maxlength="18" v-model="password" autocomplete="off"><span v-if="isPassword"><i class="el-icon-circle-close"></i><span>密码有误</span></span></div>
          <a href="javascript:;" class="sub" @click="pay" :class="{'no-choose': isChecked === false}">立即支付</a>
        </div>
      </div>
      <div class="switch">
        <ul class="switch-ul">
          <li class="switch-li">
            <a href="javascript:;" class="switch-box bank">
              <span>中国银联</span>
            </a>
          </li>
          <li class="switch-li">
            <router-link :to="{path: '/pay', query:{payStyle: 'weChat'}}" class="switch-box">
              <img src="static/img/mk_pay_h_wechat.png">
              <span>微信支付</span>
            </router-link>
          </li>
          <li class="switch-li">
            <router-link :to="{path: '/pay', query:{payStyle: 'alipay'}}" class="switch-box">
              <img src="static/img/mk_pay_h_alipay.png">
              <span>支付宝支付</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer">
      <p>MKtail公司版权所有-粤ICP备 <span><img src="static/img/reg/reg_ghs1.png"></span> 京公网安备11010820220134号-京ICP证110507</p>
    </div>
  </div>
</template>
<script>
import pageFooter from '../../components/pageFooter'
import checkoutCounter from '../../components/checkoutCounter'
import { apiAxios } from '../../common/utils'
import { api } from '../../common/api'
export default {
  data () {
    return {
      orderInfo: '',
      totalFee: '',
      isPassword: false,
      isChecked: true,
      password: '',
      once: true,
      cash: 0
    }
  },
  components: { pageFooter, checkoutCounter },
  mounted () {
    apiAxios.AxiosG({
      url: api.payPageInfo,
      params: {userName: this.$cookies.get('user-key')}
    }, rtn => {
      if (rtn.data.success) {
        this.orderInfo = rtn.data.data
        console.log(this.orderInfo)
        this.totalFee = (rtn.data.data.totalFee / 100).toFixed(2)
      }
    })
    apiAxios.AxiosG({
      url: api.payUserCash,
      params: {userName: this.$cookies.get('user-key')}
    }, rtn => {
      if (rtn.data.success) {
        this.cash = rtn.data.data
      }
    })
  },
  methods: {
    pay () {
      let time = new Date().getTime()
      let limit = 24 * 1000 * 60 * 60
      if (time >= this.orderInfo.createTime + limit) {
        this.notify.warning({
          title: '订单取消',
          message: '未在24小时内完成支付，订单已取消'
        })
        return false
      }
      if (this.once) {
        this.once = false
        if (this.isChecked) {
          if (this.password.length > 5) {
            apiAxios.AxiosG({
              url: api.payMkWallet,
              params: {userName: this.$cookies.get('user-key'), paymentPassword: this.password, orderId: this.orderInfo.orderList}
            }, res => {
              // Q. 支付状态 密码错误
              if (res.data.success) {
                console.log('支付成功', res)
                this.$router.push({path: '/paysuccess'})
              } else {
                this.$notify.error({
                  title: '失败',
                  message: '支付失败'
                })
                this.$router.push({path: '/payfail'})
              }
            })
          } else this.isPassword = true
        } else this.$message.warning('请勾选钱包')
        this.once = true
      }
    }
  }
}
</script>
<style scoped>
  .pay-home {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .footer {
    flex-grow: 1;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }
  div.footer p{
    text-align: center;
    margin: 140px auto 31px auto;
    font-size: 15px;
    color: #585858;
  }
  div.footer p span{
    margin-bottom: -5px;
  }
  .py-container {
    width: 1226px;
    margin: 0 auto;
  }
/* 支付页面头部*/
  .checkout h5 {
    font-weight: 700;
    margin: 0
  }
  .checkout {
    margin: 20px 0
  }
  .pay .money {
    font-size: 16px;
    color: #E50B0B;
    font-family:SourceHanSansCN-Light;
  }
  .pay .paymark {
    overflow: hidden;
    line-height: 26px;
    text-indent: 38px
  }
  .pay .success-icon {
    width: 30px;
    height: 30px;
    display: inline-block;
    background: url(/static/img/success-icon.png);
    background-position: 0 0
  }
  .pay .success-info {
    line-height: 30px;
    vertical-align: top;
    text-align: left;
  }
  .pay .checkout-tit {
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
  }
  .checkout-tit>span>em { font-style: normal; }
  .tit-txt {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    font-size: 14px;
    color: #4A4A4A;
  }
  .pay-info-tip{
    color: #EC1919;
    font-style: normal;
  }
  .pay-price{
    font-size: 14px;
    color: #4A4A4A;
    display: flex;
    align-items: center;
  }
  .pay-price {
    padding: 0 10px;
  }
/* 支付内容*/
  .pay-h-main{
    width:1226px;
    height:425px;
    background:rgba(255,255,255,1);
    margin: 0 auto;
    box-shadow:0px 0px 13px 0px rgba(83,83,83,0.18);
    overflow: hidden;
  }
  .pay-h-title {
    display: flex;
    align-items: center;
    margin-top: 13px;
    margin-bottom: 38px;
  }
  .pay-h-t-tip{
    display: flex;
    align-items: center;
    width: 132px;
    height: 31px;
    background:rgba(243,56,56,1);
    border-radius: 0 31px 31px 0;
  }
  .pay-h-t-tip img {
    margin-left: 7px;
    margin-right: 9px;
    width: 41px;
  }
  .pay-h-t-tip span {
    font-size:13px;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(255,255,255,1);
  }
  .pay-h-t-img {
    width: 182px;
    margin-left: 18px;
  }
  .pay-h-box{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    height: 121px;
    width: 1087px;
    padding: 0 40px;
    box-shadow:0px 0px 8px 0px rgba(0, 0, 0, 0.15);
  }
  .pay-h-box-1 {
    display: flex;
    align-items: center;
  }
  .pay-h-box-1 >input[type="checkbox"]{
    width:20px;
    height:20px;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    line-height: 18px;
    position: relative;
  }
  .pay-h-box-1 >input[type="checkbox"]::before{
    content: "";
    position: absolute;
    top: 0;left: 0;
    background: #fff;
    width: 100%;
    height: 100%;
    border: 1px solid #ddd;
  }
  .pay-h-box-1 >input[type="checkbox"]:checked::before{
    content: "\2713";
    background-color: #fff;
    position: absolute;top: 0;left: 0;
    width:100%;
    border: 1px solid #FF7674;
    color: #FF7674;
    font-size: 32px;
    font-weight: bold;
  }
  .pay-h-box-1 > img{
    width: 45px;
    margin: 0 8px 0  14px;
  }
  .pay-h-box-1 > span{
    font-size:24px;
    font-family:SourceHanSansCN-Medium;
    font-weight:500;
    color:rgba(0,0,0,1);
  }
  .pay-h-box-2 {
    width: 410px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size:17px;
    color: #585858;
  }
  .pay-h-box-2 span {
  }
  .pay-h-box-2 a {
    width:194px;
    height:31px;
    border:1px solid rgba(160,160,160,1);
    border-radius:16px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #E81616;
    font-size: 12px;
    font-weight: bolder;
  }
  .pay-h-box-3 {
    font-size: 17px;
    color:rgba(62,61,61,1);
  }
  .pay-h-box-3 em {
    font-style: normal;
    font-size: 18px;
    color: #E81616;
    font-weight: 500;
  }
  .pay-h-submit {
    display: flex;
    padding-left: 55px;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 46px;
  }
  .pay-h-submit h5{
    font-size:15px;
    font-family:SourceHanSansCN-Light;
    font-weight:300;
    color:rgba(128,128,128,1);
  }
  .pay-h-submit>h5>a{
    font-size: 12px;
    color: #67a4ff;
    margin-left: 43px;
  }
  .pay-h-submit input{
    padding: 0 10px;
    width:220px;
    height:45px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(209,209,209,1);
    box-shadow:0px 0px 4px 0px rgba(200,199,204,1);
    border-radius:3px;
    margin: 13px 0 19px 0;
  }
  .pya-h-submit-tip span, .pya-h-submit-tip i{
    padding-left: 10px;
    color: #FF7674;
    font-size: 14px;
  }
  .pay-h-submit a.sub{
    width:207px;
    height:55px;
    border:1px solid rgba(137,137,137,1);
    background:linear-gradient(180deg,rgba(225,0,25,1) 0%,rgba(250,98,115,1) 17%,rgba(225,0,25,1) 100%);
    border-radius:5px;
    text-shadow:0px 0px 2px rgba(0, 0, 0, 0.36);
    font-size: 29px;
    line-height: 55px;
    color: #fff;
  }
  .pay-h-submit a.no-choose {
    background: #b5b5b5;
    border-color: #b5b5b5;
  }
/* 支付方式*/
  .switch {
    display: flex;
    align-items: center;
    width:1227px;
    height:115px;
    background:rgba(255,255,255,1);
    box-shadow:0px 1px 9px 0px rgba(0, 0, 0, 0.14);
    margin-top: 27px;
    margin-bottom: 27px;
  }
  .switch-ul {
    display: flex;
    align-items: center;
    padding-left: 18px;
  }
  .switch-li {}
  .switch-box {
    display: flex;
    align-items: center;
    font-size: 21px;
    color: #231815;
    width: 194px;
    height: 16px;
    justify-content: center;
    margin: 0 10px;
  }
  li.switch-li + li.switch-li a.switch-box {
    border-left: 1px solid #ddd;
  }
  .switch-box span{
    margin-left: 18px;
  }
  .bank {
    height: 50px;
    background-image: url(/static/img/mk_pay_h_bank.png);
    background-size: cover;
    background-repeat: no-repeat;
  }
  .bank>span{
    margin-left: 85px;
  }
</style>
