<template>
  <div>
    <div class="pay-title">
      <div class="pay-logo">
        <router-link :to="{path: '/home'}"><img src="static/img/mk_logo_addorder.png"></router-link>
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
  </div>
</template>
<script>
export default {
  data () {
    return {}
  }
}

</script>
<style scoped>
/* 支付页面头部*/
  .pay-title{
    width: 1226px;
    margin: 0 auto;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
  }
  .pay-logo{
    display: flex;
    align-items: flex-end;
    color: #4A4A4A;
  }
  .pay-logo h5 {
    font-size: 33px;
    margin-left: 17px;
  }
  .pay-help {
    display: flex;
    align-items: flex-end;
    font-size: 14px;
  }
  .pay-help a {
    color: #4A4A4A;
    padding: 0 10px;
    line-height: 11px;
  }
  .pay-help a +a{
    border-left: 1px solid #BEBEBE;
  }
</style>
