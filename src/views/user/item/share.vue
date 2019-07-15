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
<<<<<<< HEAD
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
  }
  .title a {
    border:1px solid rgba(244,244,244,1);
    padding: 7px 20px;
    font-size: 24px;
    line-height: 24px;
    color: #000000;
  }
  .con-item {
    margin-left: 40px;
    font-weight: 400;
  }
=======
  @import '../../../assets/css/user/user-set.css';
>>>>>>> remotes/origin/master
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
<<<<<<< HEAD
    display: inline;
=======
>>>>>>> remotes/origin/master
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
