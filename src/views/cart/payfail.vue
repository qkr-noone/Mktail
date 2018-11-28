<template>
  <div id="payfail">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <div class="py-container">
      <div class="payfail">
        <div class="fail">
          <h3><i class="el-icon-error"></i>支付失败，请稍后再试</h3>
          <div class="fail-text">
            <p>失败原因：不能使用金币购买！</p>
            <p>您可以先去<a href="" class="home" target="_blank">猴尾巴首页</a>逛逛</p>
            <p class="button"><router-link :to="{ path: '/pay' }" href="" class="sui-btn btn-xlarge btn-danger">重新支付</router-link></p>
          </div>
        </div>
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
@import '../../assets/css/cart/payfail.css'
</style>
