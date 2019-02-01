<template>
  <div class="con-wrap">
    <div :class="{point :panelShow === true}">
    </div>
    <div class="title">
      <a>支付宝绑定</a>
    </div>
    <div class="con-de" v-on:click="hidePanel" v-show="isbinding===false">
      <div class="con-item">
        <h3 class="no-binding">您尚未绑定支付宝账号</h3>
        <button class="btn-binding" @click="change()">立即绑定</button>
      </div>
      <div class="con-item binding">
        <h2 class="why-binding">为什么要绑定支付宝</h2>
        <hr class="hr-binding">
        <p class="info-binding">保障账户中重要的信息，在付款，收款的时候都需要通过支付宝进行操作</p>
      </div>
      <div class="elastic-frame" v-if=" panelShow === true"  id="myPanel">
        <form>
          <p>请输入您要绑定的支付宝账号</p>
          <div class="group">
            <img src="static/img/user/user_number1.png">
            <input type="text" placeholder="请输入您的支付宝账户" v-model="alipay"/>
          </div>
          <div class="group">
            <img src="static/img/user/user_password1.png">
            <input type="password" placeholder="请输入您的支付宝登陆密码" v-model="password"/>
          </div>
          <button class="btn" @click="bindingAlipay()">绑定支付宝账户</button>
        </form>
      </div>
   </div>
    <div class="con-de" v-show="isbinding===true">
      <div class="con-item bindinged" >
        <img src="static/img/user/user_binding1.png">
        <p>您的支付宝账号：<span>159*******96</span> <a>解绑</a></p>
        <hr>
      </div>
      <div class="con-item account">
        <p>账户类型 <span>个人账户</span></p>
        <p>实名认证 <span>陆**|**************3已认证</span> <a>查看</a></p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      panelShow: false,
      alipay: '',
      password: '',
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
    bindingAlipay () {
      let reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/
      if (!this.alipay) {
        this.$message.error('请输入支付宝账号！')
      } else if (this.alipay && this.password && !reg.test(this.alipay)) {
        alert('请输入正确的支付宝账号')
      } else if (!this.password) {
        this.$message.error('请输入支付宝密码！')
      } else if (!this.alipay && !this.password) {
        this.$message.error('请输入付宝支账号密码！')
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
  .con-de a{
    color:#829FDF;
    margin-left:15px;
  }
  .elastic-frame{
    position: absolute;
    top:116px;
    left:301px;
  }
  .point{
    position: fixed;
    right: 0;
    left: 0;
    height: 83vh;
    background-color: #E5E5E5;
    opacity: 0.5;
  }
  .bindinged{
    text-align: left;
  }
  .bindinged p{
    display: inline-block;
    margin:50px 0 38px 10px;
    font-size:18px;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(53,53,53,1);
    color: #353535;
  }
  .bindinged hr{
    width:988px;
    color:#D9D9D9;
    opacity: 0.4;
    margin-bottom: 10px;
  }
  .account p{
    font-size:14px;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(135,135,135,1);
    margin-top: 28px;
  }
  .account p span{
    margin-left: 300px;
    margin-right: 122px;
    line-height:7px;
  }
</style>
