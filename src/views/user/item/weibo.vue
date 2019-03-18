<template>
  <div class="con-wrap">
    <div class="title">
      <a>微博绑定</a>
    </div>
    <div class="con-de" v-on:click="hidePanel">
      <div class="con-item">
        <p>绑定微博帐号，可以方便地将您在淘宝中看到的内容分享给微博上的朋友们。</p>
        <p>绑定成功，您还可以在微博上发现更多宝贝，快速购买哦！</p>
      </div>
      <div class="con-item " v-show="isbinding===false">
        <button class="btn" @click="change"> 立即绑定</button>
      </div>
      <div class="con-item bindinged" v-show="isbinding===true">
        <p class="state">当前状态：<span>已绑定</span></p>
        <p>
          <img src="static/img/user/user_fengmei.png">
          <span class="nickname">微博昵称：<span>凤妹</span></span><br>
          <span class="account-info"> 微博账号：<span>103******@qq.com</span> <a>解除绑定</a></span>
        </p>
      </div>
      <div class="elastic-frame" v-if=" panelShow === true"  id="myPanel">
        <form>
          <p>请输入您要绑定的微博账号</p>
          <div class="group">
            <img src="static/img/user/user_number1.png">
            <input type="text" placeholder="请输入您的微博账户" v-model="microblog"/>
          </div>
          <div class="group">
            <img src="static/img/user/user_password1.png">
            <input type="password" placeholder="请输入您的微博登陆密码" v-model="password"/>
          </div>
          <button class="btn" @click="bindingMicroblog()">绑定微博账户</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      microblog: '',
      password: '',
      panelShow: false,
      isbinding: false
    }
  },
  methods: {
    change () {
      this.panelShow = true
    },
    hidePanel () {
      let sp = document.getElementById('myPanel')
      if (sp) {
        if (!sp.contains(event.target)) {
          this.panelShow = false
        }
      }
    },
    bindingMicroblog () {
      let reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/
      if (!this.microblog) {
        this.$message.error('请输入微博账号！')
      } else if (this.microblog && this.password && !reg.test(this.microblog)) {
        alert('请输入正确的微博账号')
      } else if (!this.password) {
        this.$message.error('请输入微博密码！')
      } else if (!this.microblog && !this.password) {
        this.$message.error('请输入微博账号密码！')
      } else {
        this.isbinding = true
        this.panelShow = false
      }
    }
  }
}
</script>
<style scoped>
  .con-wrap {
    position: relative;
    font-family: "SimHei";
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
  .con-de{
    position: relative;
  }
  .con-item{
    text-align: left;
    font-size:14px;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:#5E5E5E;
  }
  .con-item p{
    margin:20px 0 0px 0;
  }
  .con-item .btn{
    width:105px;
    height:30px;
    background:rgba(254,133,4,1);
    border-radius:3px;
    margin-top: 43px;
  }
  .elastic-frame {
    position: absolute;
    top:53px;
    left:296px;
  }
  .elastic-frame .btn{
    background:rgba(254,133,4,1);
  }
  .elastic-frame{
    position: absolute;
    top:116px;
    left:301px;
    width:500px;
    height:400px;
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 9px 0px rgba(0, 0, 0, 0.13);
    display: flex;
    flex-direction: column;
    align-items: center;;
  }
  .elastic-frame p {
    margin: 81px 0 51px 30px;
    font-size: 14px;
    font-family: SourceHanSansCN-Regular;
    font-weight: 400;
    color: rgba(135,135,135,1);
    line-height: 7px;
  }
  .elastic-frame .group {
    background: rgba(255,255,255,1);
    border: 2px solid rgba(227,227,227,1);
    text-align: left;
    margin-bottom: 37px;
  }
  .elastic-frame img {
    display: inline-block;
    margin-top: -2px;
  }
  .elastic-frame .group input {
    border: none;
    height: 30px;
    width: 220px;
    margin-left: -8px;
    padding-left: 5px;
  }
  .elastic-frame .btn{
    width: 150px;
    height: 30px;
    font-size: 14px;
    font-family: SourceHanSansCN-Regular;
    font-weight: 400;
    color: rgba(255,255,255,1);
    background:rgba(254,133,4,1);
  }
  .bindinged .text{
    margin:29px 0 29px 0;
    font-size:14px;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(100,100,100,1);
  }
  .bindinged .state{
    font-size:14px;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(255,70,6,1);
    margin:57px 0 26px 0;
  }
  .bindinged img{
    margin-right: 39px;
  }
  .bindinged p{
    position: relative;
  }
  .bindinged a{
    color:#839FE0;
    margin-left: 84px;
  }
  .bindinged .account-info{
    position: absolute;
    left:124px;
    top:50px;
  }
  .bindinged .nickname{
    position: absolute;
    top:15px;
  }
</style>
