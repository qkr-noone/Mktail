<template>
  <div class="con-wrap">
    <p class="userPageTitle">退款维权</p>
    <p class="userPageTab">
      <span class="pageTabActive">举报管理</span>
    </p>
    <div class="content">
      <img src="static/img/user/user_monkey1.png">
      <span>您尚未对任何商品发起举报，欢迎您继续关注和监督平台商品~</span>
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
  @import "../../../assets/css/user/user-homePage.css";
  .con-wrap{
    height:1124px;
    font-size:16px;
    font-weight:400;
    color:rgba(135,135,135,1);
  }
  .content{
    padding-top: 40px;
  }
  .content>img{
    margin-right: 20px;
  }

</style>
