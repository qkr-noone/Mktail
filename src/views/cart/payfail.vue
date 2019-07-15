<template>
  <div id="paysuccess">
    <checkoutCounter class="header"></checkoutCounter>
    <div class="py-container">
      <div class="paysuccess">
        <i class="el-icon-circle-close"></i>
        <p>无法完成付款</p>
<<<<<<< HEAD
        <!-- <p>余额不足，请选择其他方式付款。</p> -->
        <div class="other-pay">
          <!-- <router-link :to="{path: '/payHome'}">选择其他方式付款</router-link> -->
          <!-- <a href="javascript:;">找他人代付</a> -->
          <el-popover
            placement="right"
            title=""
            width="150"
            trigger="hover">
            <div class="pay_title" @click="changePay('alipay')">支付宝支付</div>
            <div class="pay_title" @click="changePay('weChat')">微信支付</div>
            <!-- <div class="pay_title" @click="changePay('bank')">银行卡支付</div> -->
            <el-button slot="reference" class="other_pay">选择其他支付方式</el-button>
          </el-popover>
=======
        <p>余额不足，请选择其他方式付款。</p>
        <div class="other-pay">
          <router-link :to="{path: '/payHome'}">选择其他方式付款</router-link>
          <a href="javascript:;">找他人代付</a>
>>>>>>> remotes/origin/master
        </div>
        <div class="pay-suc-tip">
          <p><em>重要提示：</em>平台及销售商不会以订单异常、系统升级为由，要求您点击任何链接进行退款。</p>
        </div>
      </div>
<<<<<<< HEAD
      <!-- <payRecom></payRecom> -->
=======
      <payRecom></payRecom>
>>>>>>> remotes/origin/master
    </div>
    <regFooter class="footer"></regFooter>
  </div>
</template>
<script>
<<<<<<< HEAD
import regFooter from '@/components/regFooter'
import checkoutCounter from '@/components/checkoutCounter'
import payRecom from '@/components/payRecom'
=======
import regFooter from '../../components/regFooter'
import checkoutCounter from '../../components/checkoutCounter'
import payRecom from '../../components/payRecom'
>>>>>>> remotes/origin/master
export default {
  data () {
    return {}
  },
<<<<<<< HEAD
  components: { regFooter, checkoutCounter, payRecom },
  methods: {
    changePay (style) {
      this.$router.push({ path: '/pay', query: Object.assign(this.$route.query, { payStyle: style }) })
    }
  }
=======
  components: { regFooter, checkoutCounter, payRecom }
>>>>>>> remotes/origin/master
}

</script>
<style scoped>
  #paysuccess {
    background-image: url(/static/img/mk_success_bg.jpg);
    background-size: cover;
    background-repeat: no-repeat;
<<<<<<< HEAD
    display: flex;
    flex-direction: column;
    min-height: 100vh;
=======
>>>>>>> remotes/origin/master
  }
  .py-container{
    width: 1125px;
    margin: 47px auto 40px auto;
  }
  .header {
    background-color: #fff;
  }
  .footer {
    padding-top: 40px;
    border-top: 1px solid #919293;
<<<<<<< HEAD
    margin-top: auto;
=======
>>>>>>> remotes/origin/master
  }
/* 成功*/
  .paysuccess {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 43px;
    font-weight: bolder;
    color: #454545;
    box-shadow:0px 4px 10px 0px rgba(83,83,83,0.22);
    background-color: #fff;
<<<<<<< HEAD
    padding: 30px 0;
    border-radius: 8px;
=======
    padding-top: 30px;
>>>>>>> remotes/origin/master
  }
  .paysuccess  i {
    color: #DD4343;
    font-size: 58px;
  }
  .paysuccess> p {
    margin-top: 10px;
  }
  .other-pay {
    display: flex;
    align-items: center;
    margin-top: 65px;
    font-size: 16px;
  }
  .other-pay a {
    font-weight: normal;
    color: #00AAEE;
  }
  .other-pay a + a {
    margin-left: 20px;
    padding-left: 20px;
    border-left: 1px solid #eee;
  }
  .pay-suc-tip {
    border-top: 1px solid #000;
<<<<<<< HEAD
    font-size: 14px;
=======
    font-size: 16px;
>>>>>>> remotes/origin/master
    font-weight: 400;
    color: #5C5C5C;
    height: 40px;
    width: 1009px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
  }
  .pay-suc-tip p em {
    color: #FF4D4D;
    font-style: normal;
  }
<<<<<<< HEAD
  .pay_title {
    cursor: pointer;
    color: #FF4D4D;
  }
  .pay_title:hover {
    text-decoration: underline;
  }
  .other_pay {
    font-size: 16px;
    border: none;
    color: #FF4D4D;
  }
=======
>>>>>>> remotes/origin/master
</style>
