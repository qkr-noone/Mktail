<template>
  <div id="paysuccess">
    <checkoutCounter class="header"></checkoutCounter>
    <div class="py-container">
      <div class="paysuccess">
        <i class="el-icon-circle-check"></i>
        <p>购买成功</p>
        <p>我们将尽快为您处理</p>
        <div class="pay-suc-tip">
          <p>重要提示：平台及销售商不会以订单异常、系统升级为由，要求您点击任何链接进行退款。</p>
        </div>
      </div>
      <payRecom></payRecom>
    </div>
    <regFooter class="footer"></regFooter>
  </div>
</template>
<script>
import regFooter from '@/components/regFooter'
import checkoutCounter from '@/components/checkoutCounter'
import payRecom from '@/components/payRecom'
export default {
  data () {
    return {}
  },
  components: { regFooter, checkoutCounter, payRecom }
}

</script>
<style scoped>
  #paysuccess {
    background-image: url(/static/img/mk_success_bg.jpg);
    background-size: cover;
    background-repeat: no-repeat;
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
  }
/* 成功*/
  .paysuccess {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 390px;
    font-size: 43px;
    font-weight: bolder;
    color: #3FD09E;
    box-shadow:0px 4px 10px 0px rgba(83,83,83,0.22);
    background-color: #fff;
    padding-top: 30px;
  }
  .paysuccess  i {
    font-size: 58px;
  }
  .paysuccess>p {
    margin-top: 10px;
  }
  .pay-suc-tip {
    border-top: 1px solid #000;
    font-size: 16px;
    font-weight: 400;
    color: #5C5C5C;
    height: 137px;
    width: 1009px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
  }
</style>
