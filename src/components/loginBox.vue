<template>
  <div class="loginform">
    <div class="title">
      <p @click="accountNumber()" :class="{active:account === true }">账号登陆</p>
      <!-- <p>|</p>
      <p @click="sweepCode()" :class="{active:account === false }">扫码登陆</p> -->
    </div>
    <section v-show="account === true">
      <input type="text" placeholder="用户名" v-model="username" @keyup.enter="userLogin()"/>
      <input type="password" placeholder="密码" v-model="password" @keyup.enter="userLogin()" />
      <input type="button" value="登陆" class="btn" @click="userLogin()" />
      <p class="reg">
        <!-- <span class="sort">
          <a>手机短信登陆</a>/
          <a>注册</a>
        </span> -->
        <router-link :to="{path:'/register'}">立即注册</router-link>&nbsp;|&nbsp;
        <a>忘记密码</a>
      </p>
    </section>
    <!-- <section v-show="account === false">
      <img src="static/img/log/log_scan1.png" style="height: 174px; width: 174px;">
      <p class="openAPP">打开 <router-link :to="{}">猴尾巴商城APP</router-link>扫一扫登陆</p>
    </section> -->
    <div class="otherLogin">
      <!-- <p>_____________<span class="text">其他登陆方式</span>_____________</p>
      <span>
        <a><img src="static/img/log/log_qq1.png"></a>
        <a><img src="static/img/log/log_WeiBo1.png"></a>
        <a><img src="static/img/log/log_WeChat1.png"></a>
        <a><img src="static/img/log/log_pay1.png"></a>
      </span> -->
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      username: '',
      password: '',
      account: true
    }
  },
  methods: {
    accountNumber () {
      this.account = true
    },
    sweepCode () {
      this.account = false
    },
    userLogin () {
      if (!this.username || !this.password) {
        this.$message.warning('请输入用户名和密码')
        return false
      }
      let data = {
        username: this.username,
        password: this.password
      }
      this.$store.dispatch('USER_LOGIN', data).then(async res => {
        this.password = ''
        await this.$store.dispatch('USER_INFO')
        await this.$store.dispatch('CART')
        this.$emit('loginAfter')
      })
    }
  }
}

</script>
<style scoped>
  input[type="button"]{
    -webkit-appearance: none;
  }
  section, div, a, p, input:focus {
    outline: none;
  }
  input:hover {
    outline: none;
  }
 .loginform{
   display: inline;
   width:350px;
   height:423px;
   background:rgba(255,255,255,1);
 }
 .loginform p{
   font-size:16px;
   font-family:SimHei;
   font-weight:400;
   color:rgba(135,135,135,1);
   margin-top: 20px;
   cursor:pointer;
  }
  .reg {
    display: flex;
    justify-content: flex-end;
    padding: 0 16px;
  }
  .loginform .reg a{
    font-size:12px;
    font-family:SimHei;
    font-weight:400;
    /*color:rgba(135,135,135,1);*/
    color: #6b6b6b;
  }
 .active{
   color:#FFD704 !important
 }
 .loginform .title {
   height:50px;
   display: flex;
   align-items: center;
   justify-content: space-around;
 }
  .loginform .title p{
    transition: all .2s cubic-bezier(.645,.045,.355,1);
    display:inline;
    font-size:25px;
    font-family:SimHei;
    font-weight:400;
    color:rgba(135,135,135,1);
  }
  .otherLogin .text{
    margin-top: 10px;
  }
  .loginform input{
    width:319px;
    height:44px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(227,227,227,1);
    margin-top: 23px;
    font-size:16px;
    font-family:SimHei;
    font-weight:400;
    color:rgba(192,192,192,1);
  }
  .loginform .sort {
    color: #FFD704 !important;
    margin: 0 10px 0 10px;
  }
  .sort a{
    color: #FFD704 !important;
  }
  .loginform .btn{
    font-size:19px;
    color:rgba(53,53,53,1);
    background:rgba(255,215,4,1);
    cursor: pointer;
  }
  .loginform .otherLogin p{
    margin: 30px  0 0 15px;
  }
  .loginform .otherLogin a{
    margin: 15px 10px 0 10px;
  }
  .loginform section img{
    margin-top: 30px;
  }
  .loginform section .openAPP{
    font-size:17px;
    font-family:SimHei;
    font-weight:400;
    color:rgba(135,135,135,1);
    text-align: center;
  }
  .loginform section .openAPP a{
    color:#FF4606;
    margin:0 5px  0 5px;
  }
  .bottom{
    height:165px;
    padding-top:55px;
  }
</style>
