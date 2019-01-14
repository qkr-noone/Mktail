<template>
  <div id="test-index">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <shortcutHeader></shortcutHeader>
    <div class="py-container">
      <!--主内容-->
      <div class="checkout py-container  pay">
        <div class="checkout-tit">
          <h4 class="tit-txt"><span class="success-icon"></span><span  class="success-info">订单提交成功，请您及时付款！</span></h4>
          <span class=""><em class="sui-lead">应付金额：</em><em  class="orange money">￥{{totalFee}}</em>元</span>
        </div>
        <div class="checkout-steps">
          <div class="weixin" @click="payOrder">微信支付</div>
          <div class="sao">
            <div class="code">
              <p class="red">二维码已过期，刷新页面重新获取二维码。</p>
              <img src="static/img/erweima.png" alt="">
              <div class="saosao">
                <p>请使用微信扫一扫</p>
                <p>扫描二维码支付</p>
              </div>
            </div>
            <div class="phone">
            </div>
          </div>
          <div class="clearfix"></div>
          <p class="other-pay">
            <router-link :to="{ path:'/paysuccess' }" target="_blank">支付成功时</router-link>
            <router-link :to="{ path:'/payfail' }" target="_blank">支付失败时</router-link>
          </p>
        </div>
      </div>
    </div>
    <pageFooter></pageFooter>
  </div>
</template>
<script>
import shortcutHeader from '../../components/shortcutHeader'
import pageFooter from '../../components/pageFooter'
import { apiAxios } from '../../common/utils'
import { api } from '../../common/api'
export default {
  data () {
    return {
      orderInfo: '',
      totalFee: ''
    }
  },
  components: { shortcutHeader, pageFooter },
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
    }
  }
}

</script>
<style scoped>
@import '../../assets/css/cart/pay.css'
</style>
