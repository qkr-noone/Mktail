<template>
  <div id="paysuccess">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <shortcutHeader></shortcutHeader>
    <div class="py-container">
      <div class="paysuccess">
        <div class="success">
          <h3><i class="el-icon-success"></i>恭喜您，支付成功啦！</h3>
          <div class="paydetail">
            <p>支付方式：微信支付</p>
            <p>支付金额：￥17482.00元</p>
            <p class="button">
              <a href="" class="sui-btn btn-xlarge btn-danger">查看订单</a>
              &nbsp;&nbsp;&nbsp;&nbsp;<a href="" class="sui-btn btn-xlarge ">继续购物</a></p>
          </div>
        </div>
      </div>
    </div>
    <pageFooter></pageFooter>
  </div>
</template>
<script>
import shortcutHeader from '../../components/shortcutHeader'
import pageFooter from '../../components/pageFooter'
export default {
  data () {
    return {}
  },
  components: { shortcutHeader, pageFooter }
}

</script>
<style scoped>
@import "../../assets/css/cart/paysuccess.css"
</style>
