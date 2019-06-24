<template>
  <div>
    <div class="pay-title">
      <div class="pay-logo">
        <a href="javascript:;"><img src="static/img/mk_logo_addorder.png"></a>
        <h5>收银台</h5>
      </div>
      <div class="pay-help">
        <router-link :to="{path: '/home'}" href="javascript:;">
          <span>返回首页</span>
        </router-link>
        <a href="javascript:;">
          <span>{{$cookies.get('user-key')}}</span>
        </a>
        <a href="javascript:;">
          <span>我的订单</span>
        </a>
        <a href="javascript:;">
          <span>支付帮助</span>
        </a>
      </div>
    </div>
    <div class="py-container">
      <!--主内容-->
      <div class="checkout py-container  pay">
        <div class="checkout-tit">
          <h4 class="tit-txt"><span  class="success-info">订单提交成功，请尽快付款！订单号：{{orderInfo.outTradeNo}}</span></h4>
          <span class="pay-price"><em>应付金额</em><em  class="money">{{totalFee}}</em>元</span>
        </div>
        <div class="checkout-steps">
          <div class="weixin">
            <span v-if="payStyle === 'weChat'">微信支付</span>
            <span v-else-if="payStyle === 'alipay'">支付宝</span>
            <span v-else>支付</span>
            <p class="red" v-if="TIME">距离二维码过期还剩<em class="second">{{TIME}}</em>秒，过期后请刷新页面重新获取二维码。</p>
            <p class="red over" v-else>二维码已过期，<span class="reload" @click="reCode()">刷新</span>页面重新获取二维码。</p>
          </div>
          <div class="sao">
            <div class="code">
              <!-- <div class="code-wrap" ref="qrcode"><img src="static/img/mk_pay_erweima.png"></div> -->
              <vue-qr class="code-wrap" ref="qrcode" :dotScale="1" logoSrc="static/img/mk_qr_logo2.jpg" :text="code" :size="333"></vue-qr>
              <div class="saosao">
                <p v-if="payStyle === 'weChat'">请使用微信扫一扫</p>
                <p v-else-if="payStyle === 'alipay'">请使用支付宝扫一扫</p>
                <p v-else>请使用对应支付方式</p>
                <p>扫描二维码支付</p>
              </div>
            </div>
            <div class="phone">
              <img v-if="payStyle === 'weChat'" src="static/img/mk_pay_wechatpay.png">
              <img v-else-if="payStyle === 'alipay'" src="static/img/mk_pay_alipay.png">
            </div>
          </div>
          <p class="other-pay">
            <i class="el-icon-arrow-left"></i>
            <a @click="changePay()">选择其他支付方式</a>
          </p>
        </div>
      </div>
    </div>
    <pageFooter></pageFooter>
  </div>
</template>
<script>
import pageFooter from '@/components/pageFooter'
import VueQr from 'vue-qr'
export default {
  data () {
    return {
      orderInfo: '',
      totalFee: '',
      payStyle: '',
      paySuccess: false,
      TIME: 60,
      code: '',
      myInterval: ''
    }
  },
  components: { pageFooter, VueQr },
  mounted () {
    this.payStyle = this.$route.query.payStyle || ''
    this.code = this.$route.query.upsval || ''
    this.reduceTime()
    this.API.payPageInfo({userName: this.$cookies.get('user-key')}).then(rtn => {
      if (rtn.success === false) return false
      this.orderInfo = rtn
      console.log(rtn)
      this.totalFee = (rtn.totalFee / 100).toFixed(2)
    })
    // 创建支付链接
    // this.API.payCreate({userName: this.$cookies.get('user-key')}).then(rtn => {
    //   console.log(rtn, 'create')
    // })
  },
  destroyed () { clearInterval(this.myInterval) },
  methods: {
    payOrder () {
      // this.API.payOrder().then(rtn => {
      //   console.log(rtn)
      // })
    },
    changePay () {
      this.$router.go(-1)
    },
    reduceTime () {
      this.TIME = 60
      this.myInterval = window.setInterval(() => {
        this.TIME--
        if (this.TIME === 0) window.clearInterval(this.myInterval)
        setTimeout(() => {
          // this.API.polling().then(res => {})
          console.log(10)
        }, 0)
      }, 1000)
    },
    reCode () {}
  },
  watch: {
    paySuccess (newState) {
      if (newState) this.$router.push('/paysuccess')
      else this.$router.push('/payfail')
    }
  }
}

</script>
<style scoped>
@import '../../assets/css/cart/pay.css'
</style>
