<template>
  <div id="login">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <div class="py-container">
      <div class="top">
          <div class="top_left">
            <div class="h-logo" ref='logoIsCursor'>
              <router-link :to="{path: isHome}" ><img src="static/img/log/log_logo1.png"></router-link>
            </div>
            <p class="title">欢迎登陆</p>
          </div>
          <div class="top_right">为确保您账户的安全及正常使用，依《网络安全法》相关要求，6月1日起会员账户需绑定手机。如您还未绑定，请尽快完成，感谢您的理解及支持！</div>
          <div class="opinion">
            <img src="static/img/log/log_ opinion1.png">
            <a>我想对"登陆"提意见</a>
          </div>
      </div>
      <div class="middle">
          <div class="middle_left">
            <img src="static/img/log/log_christmas1.png">
          </div>
          <div class="loginform">
            <div class="title">
              <p @click= "accountNumber()" :class="{active:account == true }">账号登陆</p>|
              <p @click= "sweepCode()" :class="{active:account == false }">扫码登陆</p>
            </div>
            <section v-show="account === true" >
              <input type="text" placeholder="邮箱/手机号码"/>
              <input type="text" placeholder="密码"/>
              <input type="button" value="登陆" class="btn"/>
              <p>
                <span class="sort">
                  <a>手机短信登陆</a>/
                  <a>注册</a>
                </span>
                 <a>立即注册</a>&nbsp;|
                 <a>忘记密码</a>
              </p>
            </section>
            <section v-show="account === false" >
              <p>这是扫码扫码登陆</p>
            </section>
            <div class="otherLogin">
              <p>_______________其他登陆方式________________</p>
              <span>
                <a><img src="static/img/log/log_qq1.png"></a>
                <a><img src="static/img/log/log_WeiBo1.png"></a>
                <a><img src="static/img/log/log_WeChat1.png"></a>
                <a><img src="static/img/log/log_pay1.png"></a>
              </span>
            </div>
          </div>
      </div>
      <div class="bottom">
        <regFooter></regFooter>
      </div>
    </div>
  </div>
</template>
<script>
import regFooter from '../../components/regFooter'
import { apiAxios } from '../../common/utils'
import { api } from '../../common/api'
export default {
  data () {
    return {
      username: '',
      password: '',
      account: true
    }
  },
  components: {regFooter},
  created () {
    let curRoute = this.$route.path
    this.isHome = (curRoute === '/home' ? '' : '/home')
    // curRoute === '/shops' ? this.isShops = true : this.isShops = false
  },
  mounted () {
    if (!this.isHome) {
      this.$refs.logoIsCursor.children[0].style.cursor = 'default'
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
      if (this.$cookies.get('user-key')) {
        this.$message.error('当前设备已登陆，切换用户需先退出当前用户')
        return false
      }
      if (!this.username || !this.password) {
        this.$message.warning('请输入用户名和密码')
        return false
      }
      apiAxios.AxiosG({
        url: api.login,
        params: {name: this.username, password: this.password}
      }, rtn => {
        if (rtn.data.success) {
          this.$message.success('登陆成功')
          this.$cookies.set('user-key', this.username)
          this.$cookies.set('userInfo', (rtn.data.data))
          this.password = ''
          this.$router.push({path: '/home'})
        } else {
          this.$message.error(rtn.data.message)
          this.password = ''
        }
      })
      // if (getCookie('userId')) {
      //   this.$router.replace({path: this.$route.query.back})
      // }
    }
  }
}

</script>
<style scoped>
  .py-container{
    width: 1260px;
    margin: 0 auto;
  }
  img{
    display: inline;
  }
 .top{
    height:90px;
    background: #F4F4F4;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    font-size:12px;
    font-family:SimHei;
    font-weight:400;
    color:rgba(135,135,135,1);
  }
<<<<<<< HEAD
  span.loginname {
    background: url(/static/img/user.png);
    background-position: center;
    background-size: 35px;
    background-repeat: no-repeat;
=======
  .top .top_left img{
    margin-left:70px;
    margin-bottom:14px;
>>>>>>> 9027b4a562b12fa8cfb9aa4cc848b0ad036ff67c
  }
  .top_left{
    display: flex;
    justify-content: center;
    align-items: center;
  }
<<<<<<< HEAD
  .sui-form .input-prepend .add-on {
    background-color: #cfcdcd;
    width: 45px;
    height: 45px;
  }
  .sui-form input[type=text],
  .sui-form input[type=password] {
      height: 45px
  }
  .sui-form input.span2 {
    width: 284px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
  }
  .loginpwd {
    background: url(/static/img/password.png);
    background-position: center;
    background-size: 35px;
    background-repeat: no-repeat;
  }
  .loginmanage {
    height: 500px;
    width: 1920px;
    background: url(/static/img/bg_head.png);
    vertical-align: middle;
    display: table-cell
  }
  .btn-danger {
    background-color: #c81623;
    padding: 6px;
    border-radius: 0;
    font-size: 16px;
    font-family: 微软雅黑;
    word-spacing: 4px;
    width: 318px;
    text-align: center;
    color: #fff;
  }
  .loginform {
    width: 380px;
    background: #fff;
    margin: 45px auto 0;
    position: relative;
    padding: 20px
  }
  .tab-pane >img{
    margin: 0 auto;
=======
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
 .middle{
   box-sizing:border-box;
   height:500px;
   background:rgba(240,62,62,1);
   padding:39px 70px 38px 71px;
   position: relative;
 }
  .middle .middle_left{
    float: left;
  }
 .middle .loginform{
   position: absolute;
   right:70px;
   display: inline;
   width:370px;
   height:407px;
   background:rgba(255,255,255,1);
 }
  .middle .loginform p{
  font-size:16px;
  font-family:SimHei;
  font-weight:400;
  color:rgba(135,135,135,1);
  margin-top: 10px;
}
 .active{
   color:#FFD704
 }
 .loginform .title{
   font-size:25px;
   font-family:SimHei;
   font-weight:400;
   color:rgba(135,135,135,1);
   height:50px;
   display: flex;
   align-items: center;
   justify-content: space-around;
 }
  .loginform .title p{
    display:inline;
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
  .loginform .sort{
    color:#FFD704;
    margin:0 25px 0 22px;
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
  .bottom{
    height:165px;
    background: #F4F4F4;
    padding-top:55px;
>>>>>>> 9027b4a562b12fa8cfb9aa4cc848b0ad036ff67c
  }
</style>
