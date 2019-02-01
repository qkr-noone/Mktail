<template>
  <div class="con-wrap">
    <div class="title">
      <a>应用绑定</a>
    </div>
    <div class="con-de" >
      <div class="con-item">
        <span class="title">您已授权的应用<span>(0)</span></span>
      </div>
      <div class="con-item ">
        <div class="group">
          <img src="static/img/user/user_alipay1.png"/>
          <span>进入</span>
          <a>解除绑定</a>
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
  @import '../../../assets/css/user/user-set.css';
  .con-item {
    text-align: left;
    font-size:14px;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(97,97,97,1);
  }
  .con-item .title{
    margin: 45px 0 25px 0;
  }
  .group{
    position: relative;
    line-height: 50px;
  }
  .group span{
    position: absolute;
    right:144px;
  }
  .group a{
    color:#839FE0;
    position:absolute;
    right:61px;
  }
</style>
