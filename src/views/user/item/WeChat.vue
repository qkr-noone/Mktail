<template>
  <div class="con-wrap">
    <div class="title">
      <a>微信绑定</a>
    </div>
    <div class="con-de" v-on:click="hidePanel" v-show="isbinding===false">
      <div class="con-item">
        <h3 class="no-binding">您尚未绑定微信账号</h3>
        <button class="btn-binding" @click="change">立即绑定</button>
      </div>
      <div class="con-item binding">
        <h2 class="why-binding">为什么要绑定微信</h2>
        <hr class="hr-binding">
        <p class="info-binding">保障账户中重要的信息，在付款，收款的时候都可通过微信进行操作</p>
      </div>
      <div class="elastic-frame" v-if=" panelShow === true"  id="myPanel">
        <form>
          <p>请输入您要绑定的微信账号</p>
          <div class="group">
            <img src="static/img/user/user_number1.png">
            <input type="text" placeholder="请输入您的微信账户" v-model="WeChat"/>
          </div>
          <div class="group">
            <img src="static/img/user/user_password1.png">
            <input type="password" placeholder="请输入您的微信登陆密码" v-model="password"/>
          </div>
          <button class="btn" @click="bindingMicroblog()">绑定微信账户</button>
        </form>
      </div>
    </div>
    <div class="con-de bindinged" v-show="isbinding===true">
      <div class="con-item">
        <p class="text">您正在使用的京东账号正在关联 一个微信账号</p>
        <hr>
      </div>
      <div class="con-item">
        <p class="state">当前状态：<span>已绑定</span></p>
        <div class="group">
          <img src="static/img/user/user_WeChat.png">
          <span class="wechat-info">微信账号：<span>159*****16</span></span>
          <a>解除绑定</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      WeChat: '',
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
      if (!this.WeChat) {
        this.$message.error('请输入微信账号！')
      } else if (this.WeChat && this.password && !reg.test(this.WeChat)) {
        alert('请输入正确的微信账号')
      } else if (!this.password) {
        this.$message.error('请输入微信密码！')
      } else if (!this.WeChat && !this.password) {
        this.$message.error('请输入微信账号密码！')
      } else {
        this.isbinding = true
        this.panelShow = false
      }
    }
  }
}
</script>
<style scoped>
  @import '../../../assets/css/user/user-set.css';
  .con-de{
    position: relative;
  }
  .elastic-frame{
    position: absolute;
    top:45px;
    left:296px;
  }
  .elastic-frame .btn{
    background:rgba(254,133,4,1);
  }
  .bindinged .text{
    margin:29px 0 29px 0;
    font-size:14px;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(100,100,100,1);
  }
  .bindinged hr{
    color:#D2D2D2;
    width:1040px !important;
    opacity: 0.4;
  }
  .bindinged .state{
    margin:68px 0 26px 0;
    font-size:14px;
    font-family:SimHei;
    font-weight:400;
    color:rgba(255,70,6,1);
  }
  .bindinged .group{
    text-align: left;
    width:1000px;
    height:35px;
    background:rgba(244,244,244,1);
    border:2px solid rgba(227,227,227,1);
    line-height: 35px;
    padding-left: 12px;
  }
  .bindinged .group .wechat-info{
    font-size:14px;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(135,135,135,1);
    margin:0 338px 0 90px;
  }
  .bindinged .group a{
    font-size:14px;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(131,159,224,1);
  }
</style>
