<template>
<<<<<<< HEAD
  <div id="pay">
=======
  <div>
>>>>>>> remotes/origin/master
    <div class="pay-title">
      <div class="pay-logo">
        <a href="javascript:;"><img src="static/img/mk_logo_addorder.png"></a>
        <h5>收银台</h5>
      </div>
      <div class="pay-help">
        <router-link :to="{path: '/home'}" href="javascript:;">
          <span>返回首页</span>
        </router-link>
<<<<<<< HEAD
        <router-link :to="{path: '/user'}" href="javascript:;">
          <span>{{$cookies.get('user-key')}}</span>
        </router-link>
        <router-link :to="{path: '/user/userOrder'}" href="javascript:;">
          <span>我的订单</span>
        </router-link>
=======
        <a href="javascript:;">
          <span>90835991</span>
        </a>
        <a href="javascript:;">
          <span>我的订单</span>
        </a>
>>>>>>> remotes/origin/master
        <a href="javascript:;">
          <span>支付帮助</span>
        </a>
      </div>
    </div>
    <div class="py-container">
      <!--主内容-->
<<<<<<< HEAD
      <div class="checkout py-container  pay" v-if="running">
        <div class="checkout-tit">
          <h4 class="tit-txt"><span  class="success-info">订单提交成功，请尽快付款！订单号：{{orderIdList}}</span></h4>
          <span class="pay-price"><em>应付金额</em><em  class="money">{{totalFee}}</em>元</span>
        </div>
        <div class="checkout-steps">
          <div class="weixin">
            <span v-if="payStyle === 'weChat'">微信支付</span>
            <span v-else-if="payStyle === 'alipay'">支付宝</span>
            <span v-else>支付</span>
            <p class="red" v-if="TIME">距离二维码过期还剩<em class="second">{{TIME}}</em>秒，过期后请刷新页面重新获取二维码。</p>
            <p class="red over" v-else>二维码已过期，<span class="reload" @click="getCode()">刷新</span>页面重新获取二维码。</p>
          </div>
          <div class="sao">
            <div class="code">
              <!-- <div class="code-wrap" ref="qrcode"><img src="static/img/mk_pay_erweima.png"></div> -->
              <vue-qr class="code-wrap" ref="qrcode" :dotScale="1" logoSrc="static/img/mk_qr_logo2.jpg" :text="code" :size="333"></vue-qr>
=======
      <div class="checkout py-container  pay">
        <div class="checkout-tit">
          <h4 class="tit-txt"><span  class="success-info">订单提交成功，请尽快付款！订单号：82786356759</span></h4>
          <span class="pay-price"><em>应付金额</em><em  class="money">{{totalFee}}</em>元</span>
        </div>
        <div class="checkout-steps">
          <div class="weixin" @click="payOrder">
            <span v-if="payStyle === 'weChat'">微信支付</span>
            <span v-else-if="payStyle === 'alipay'">支付宝</span>
            <span v-else>支付</span>
            <p class="red" v-if="true">距离二维码过期还剩<em class="second">49</em>秒，过期后请刷新页面重新获取二维码。</p>
            <p class="red over" v-else>二维码已过期，刷新页面重新获取二维码。</p>
          </div>
          <div class="sao">
            <div class="code">
              <div class="code-wrap"><img src="static/img/mk_pay_erweima.png"></div>
>>>>>>> remotes/origin/master
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
<<<<<<< HEAD
            <!-- <a href="javascript:;">选择其他支付方式....</a> -->
            <el-popover
              placement="right"
              title=""
              width="150"
              trigger="hover">
              <div class="pay_title" v-if="payStyle !== 'alipay'" @click="changePay('alipay')">支付宝支付</div>
              <div class="pay_title" v-if="payStyle !== 'weChat'" @click="changePay('weChat')">微信支付</div>
              <!-- <div class="pay_title" @click="changePay('bank')">银行卡支付</div> -->
              <el-button slot="reference" class="other_pay">选择其他支付方式</el-button>
            </el-popover>
          </p>
        </div>
      </div>
      <div class="checkout py-container  pay" v-else>
        <div class="checkout-steps">
          <div class="order_mistake">
            <i class="el-icon-info"></i>
            <span>{{errorDesc || '订单有误'}}</span>
          </div>
        </div>
      </div>
    </div>
    <regFooter class="pay_footer"></regFooter>
  </div>
</template>
<script>
import regFooter from '@/components/regFooter'
import VueQr from 'vue-qr'
export default {
  data () {
    return {
      running: true,
      errorDesc: '',
      totalFee: '',
      payStyle: '',
      TIME: 60,
      code: '',
      myInterval: '',
      pollingTradeNo: '',
      orderIdList: '',
      fromOrder: false
    }
  },
  components: { regFooter, VueQr },
  mounted () {
    this.payStyle = this.$route.query.payStyle || ''
    this.orderIdList = this.$route.query.orderIdList
    this.$route.query.from ? this.fromOrder = true : this.fromOrder = false
    if (!this.orderIdList) this.running = false
    this.getCode()
  },
  destroyed () { clearInterval(this.myInterval) },
  methods: {
    // 切换支付方式
    changePay (style) {
      this.payStyle = style
      let loading = this.$loading({
        spinner: 'el-icon-loading',
        background: 'rgba(255, 255, 255, 1)'
      })
      setTimeout(() => {
        loading.close()
      }, 1000)
      this.$router.push({ path: '/pay', query: Object.assign(this.$route.query, { payStyle: this.payStyle }) })
    },
    // 倒计时
    reduceTime () {
      this.TIME = 60
      let clock = window.setInterval(() => {
        this.TIME--
        if (this.TIME === 0) {
          window.clearInterval(clock)
          setTimeout(() => {
            clearInterval(this.myInterval)
          }, 2000)
        }
      }, 1000)
    },
    // 轮询订单支付状态
    polling () {
      this.myInterval = window.setInterval(() => {
        setTimeout(() => {
          this.API.payOrderPolling({ outTradeNo: this.pollingTradeNo }).then(res => {
            if (res === 'USERPAYING') this.$message.warning('用户支付中...')
            else if (res === 'SUCCESS') this.$router.push('/paysuccess')
            else if (res === 'CLOSED') {
              this.$message.warning('订单在规定时间内未支付, 已关闭')
              clearInterval(this.myInterval)
            } else if (res === 'PAYERROR') { // 订单支付失败
              this.$router.push({ path: '/payfail', query: this.$route.query })
            }
          })
        }, 0)
      }, 2000)
    },
    getCode () {
      clearInterval(this.myInterval)
      let pickLink = 'getPayCode'
      if (this.fromOrder) pickLink = 'getPayCodeOtherWay'
      this.API[pickLink](this.orderIdList).then(res => {
        if (res.success === false) {
          this.running = false
          this.errorDesc = res.message
          return false
        }
        this.totalFee = (res.totalFee / 100).toFixed(2)
        this.pollingTradeNo = res.outTradeNo
        this.code = res.url
        this.reduceTime()
        this.polling()
      })
=======
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
      payStyle: '',
      paySuccess: false
    }
  },
  components: { pageFooter },
  mounted () {
    this.payStyle = this.$route.query.payStyle || ''
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
>>>>>>> remotes/origin/master
    }
  }
}

</script>
<style scoped>
<<<<<<< HEAD
@import '../../assets/css/cart/pay.css';
=======
@import '../../assets/css/cart/pay.css'
>>>>>>> remotes/origin/master
</style>
