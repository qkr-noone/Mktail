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
  .con-wrap {
    position: relative;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .con-de {
    border: 1px solid #F4F4F4;
    flex-grow: 1;
    position: relative;
  }
  .title {
    height:41px;
    line-height: 41px;
    display: flex;
    margin-top: 10px;
  }
  .title a {
    border:1px solid rgba(244,244,244,1);
    padding: 7px 20px;
    font-size: 24px;
    line-height: 24px;
    font-weight:bold;
    color: #000000;
  }
  .con-item {
    text-align: left;
    font-size:14px;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(97,97,97,1);
    margin-left: 40px;
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
