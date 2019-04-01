<template>
  <div id="login">
    <div class="log-top">
      <div class="py-container top">
        <div class="top_left">
          <refHeader></refHeader>
          <p class="title">欢迎登陆</p>
        </div>
        <div class="top_right">为确保您账户的安全及正常使用，依《网络安全法》相关要求，6月1日起会员账户需绑定手机。如您还未绑定，请尽快完成，感谢您的理解及支持！</div>
        <div class="opinion">
          <img src="static/img/log/log_ opinion1.png"><a>我想对"登陆"提意见</a>
        </div>
      </div>
    </div>
    <div class="log-middle">
      <div class="py-container">
        <div class="middle">
          <div class="middle_left">
            <a href="javascript:;"></a>
          </div>
          <div class="loginform">
            <div class="title">
              <p @click="accountNumber()" :class="{active:account === true }">账号登陆</p>
              <p>|</p>
              <p @click="sweepCode()" :class="{active:account === false }">扫码登陆</p>
            </div>
            <section v-show="account === true">
              <input type="text" placeholder="邮箱/手机号码" v-model="username" />
              <input type="password" placeholder="密码" v-model="password" />
              <input type="button" value="登陆" class="btn" @click="userLogin" />
              <p class="reg">
                <span class="sort">
                  <a>手机短信登陆</a>/
                  <a>注册</a>
                </span>
                <router-link :to="{path:'/register'}">立即注册</router-link>&nbsp;|
                <a>忘记密码</a>
              </p>
            </section>
            <section v-show="account === false">
              <img src="static/img/log/log_scan1.png">
              <p class="openAPP">打开 <router-link :to="{}">猴尾巴商城APP</router-link>扫一扫登陆</p>
            </section>
            <div class="otherLogin">
              <p>_____________<span class="text">其他登陆方式</span>_____________</p>
              <span>
                <a><img src="static/img/log/log_qq1.png"></a>
                <a><img src="static/img/log/log_WeiBo1.png"></a>
                <a><img src="static/img/log/log_WeChat1.png"></a>
                <a><img src="static/img/log/log_pay1.png"></a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <regFooter></regFooter>
  </div>
</template>
<script>
import regFooter from '@/components/regFooter'
import refHeader from '@/components/regHeader'
export default {
  data () {
    return {
      username: '',
      password: '',
      account: true
    }
  },
  components: {regFooter, refHeader},
  methods: {
    accountNumber () {
      this.account = true
    },
    sweepCode () {
      this.account = false
    },
    userLogin () {
      if (this.$cookies.get('user-key')) {
        this.$message.error('当前设备已登陆，切换用户需先退出当前用户')
        return false
      }
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
        await this.$store.dispatch('USER_INFO', data.username)
        await this.$store.dispatch('CART')
        this.$router.push(this.$route.query.back)
      })
    }
  }
}

</script>
<style scoped>
  #login{
    min-height: 100vh;
    background-color: #F4F4F4;
  }
  .py-container{
    width: 1226px;
    margin: 0 auto;
  }
  img{
    display: inline;
  }
 .top{
    height:90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    font-size:12px;
    font-family:SimHei;
    font-weight:400;
    color:rgba(135,135,135,1);
  }
  .top_left{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .top .title{
    height:31px;
    font-size:32px;
    font-family:SourceHanSansCN-Regular;
    color:rgba(74,74,74,1);
    line-height:25px;
    margin-left:8px;
  }
  .top .top_right{
    width:800px;
    height:30px;
    line-height:30px;
    background:rgba(255,252,237,1);
    border:1px solid rgba(255,215,4,1);
    position: absolute;
    right:70px;
    top:19px;
  }
 .top .opinion img,.top .opinion a{
   display: inline;
 }
  .top .opinion{
    width:150px;
    height:20px;
    position: absolute;
    top:59px;
    right:58px;
  }
  .log-top{
    background: #F4F4F4;
  }
  .log-middle{
    background: url(/static/img/mk_logo_bg.png) center no-repeat;
    background-size: cover;
  }
  .log-bottom{
    background: #F4F4F4;
  }
 .middle{
   box-sizing:border-box;
   height:600px;
   padding:89px 70px 88px 71px;
   position: relative;
 }
  .middle .middle_left{
    float: left;
  }
  .middle .middle_left a{
    width:600px;
    height:423px;
  }
 .middle .loginform{
   position: absolute;
   display: inline;
   width:350px;
   height:423px;
   background:rgba(255,255,255,1);
   right:70px;
 }
 .loginform p{
   font-size:16px;
   font-family:SimHei;
   font-weight:400;
   color:rgba(135,135,135,1);
   margin-top: 20px;
   cursor:pointer;
  }
  .loginform .reg a{
    font-size:16px;
    font-family:SimHei;
    font-weight:400;
    color:rgba(135,135,135,1);
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
