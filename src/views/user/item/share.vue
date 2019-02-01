<template>
  <div class="con-wrap">
    <div class="title">
      <a>分享绑定</a>
    </div>
    <div class="con-de" >
      <div class="con-item">
        <p>绑定社交网站账号，可以让您快速、便捷地分享在京东的购物乐趣！</p>
      </div>
      <div class="con-item ">
        <div class="group">
          <img src="static/img/user/user_valve1.png">
          <span>豆瓣</span>
          <button>立即绑定</button>
        </div>
        <div class="group">
          <img src="static/img/user/user_knowAbout1.png">
          <span>知乎</span>
          <button>立即绑定</button>
        </div>
        <div class="group">
        <img src="static/img/user/user_renrenNet1.png">
        <span>人人网</span>
        <button>立即绑定</button>
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
    margin-top: 25px;
    font-size:14px;
    font-family:SourceHanSansCN-Normal;
    font-weight:400;
    color:rgba(94,94,94,1);
    line-height:16px;
  }
  .con-item .group{
    margin-bottom: 20px;
    color:rgba(127,127,127,1);
    line-height:7px;
    position: relative;
  }
  .con-item .group img{
    margin-right: 20px;
  }
  .con-item .group button{
    width:80px;
    height:30px;
    background:rgba(244,244,244,1);
    border:1px solid rgba(227,227,227,1);
    position: absolute;
    right:51px;
  }

</style>
