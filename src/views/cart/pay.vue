<template>
  <div id="test-index">
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
          <span>90835991</span>
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
          <h4 class="tit-txt"><span  class="success-info">订单提交成功，请尽快付款！订单号：82786356759</span></h4>
          <span class="pay-price"><em>应付金额</em><em  class="money">{{totalFee}}</em>元</span>
        </div>
        <div class="checkout-steps">
          <div class="weixin" @click="payOrder">
            <span>微信支付</span>
            <p class="red" v-if="true">距离二维码过期还剩<em class="second">49</em>秒，过期后请刷新页面重新获取二维码。</p>
            <p class="red over" v-else>二维码已过期，刷新页面重新获取二维码。</p>
          </div>
          <div class="sao">
            <div class="code">
              <div class="code-wrap"><img src="static/img/mk_pay_erweima.png"></div>
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
import pageFooter from '../../components/pageFooter'
import { apiAxios } from '../../common/utils'
import { api } from '../../common/api'
export default {
  data () {
    return {
      orderInfo: '',
      totalFee: '',
      payStyle: 'alipay',
      paySuccess: false
    }
  },
  components: { pageFooter },
  activated () {},
  deactivated () {
    this.$destroy()
  },
  mounted () {
    apiAxios.AxiosG({
      url: api.payPageInfo,
      params: {userName: this.$cookies.get('user-key')}
    }, rtn => {
      if (rtn.data.success) {
        this.orderInfo = rtn.data.data
        this.totalFee = (rtn.data.data.totalFee / 100).toFixed(2)
      }
    })
    apiAxios.AxiosG({
      url: api.payCreate,
      params: {userName: this.$cookies.get('user-key')}
    }, rtn => {
      if (rtn.data.success) {
        console.log(rtn)
      }
    })
  },
  methods: {
    payOrder () {
      apiAxios.AxiosP({
        url: api.payOrder,
        data: {}
      }, rtn => {
        console.log(rtn.data)
      })
    },
    changePay () {
      this.$router.go(-1)
    }
  },
  watch: {
    paySuccess (newState) {
      if (newState) {
        this.$router.push('/paysuccess')
      } else {
        this.$router.push('/payfail')
      }
    }
  }
}

</script>
<style scoped>
@import '../../assets/css/cart/pay.css'
</style>
