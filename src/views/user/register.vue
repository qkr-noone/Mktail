<template>
  <div id="register">
    <div class="reg-top">
      <div class="py-container top">
        <div class="top_left">
          <refHeader></refHeader>
          <p class="title">账户注册</p>
        </div>
        <span class="go">我已注册，<router-link :to="{path: '/login'}">马上登录</router-link>></span>
      </div>
    </div>
    <div class="reg-middle">
      <div class="py-container">
        <div class="middle">
          <section class="middle-title">
            <div class="title">
              <a class="title_com" :href="AFTERIP + '/#/register'" target="_blank">企业账户注册</a>
            </div>
            <div class="title active">
              <a class="fixed-height">
                <img src="static/img/reg/reg_slice_active1.png" class="reduce-height">
                <p class="title-text">个人账户注册</p>
              </a>
            </div>
          </section>
          <transition>
            <section>
              <span class="explain">无企业营业执照的个人用户请注册个人账户。权益如下：做个人实名认证；作为买家身份采购；</span>
              <div class="info">
                <form class="sui-form form-horizontal" @submit.prevent>
                  <div class="control-group">
                    <label class="control-label">会员名：</label>
                    <div class="controls">
                      <input type="text" placeholder="设置会员名" class="input-xfat input-xlarge" v-model="userName">
                    </div>
                  </div>
                  <div class="control-group">
                    <label for="inputPassword" class="control-label">登录密码：</label>
                    <div class="controls password">
                      <input type="password" placeholder="设置你的登录密码" class="input-xfat input-xlarge" v-model="password">
                      <span>密码由数字、字母和字符组成 且长度为6-18位</span>
                    </div>
                  </div>
                  <div class="control-group">
                    <label for="inputPassword" class="control-label">确认密码：</label>
                    <div class="controls">
                      <input type="password" placeholder="请再次输入你的登录密码" class="input-xfat input-xlarge" v-model="REpassword">
                    </div>
                  </div>
                  <div class="control-group">
                    <label class="control-label">手机号码：</label>
                    <div class="controls">
                      <span class="select">中国大陆&nbsp;+86</span>
                      <input type="text" class="input-xfat input-xlarge mobile" maxlength="16" v-model="phoneValue">
                      <button class="getPhoneCode sui-btn" @click="sendCode()" v-if="time===60">获取验证码</button>
                      <button class="getPhoneCode" v-else>{{this.time}}秒后可重新获取</button>
                    </div>
                  </div>
                  <div class="control-group">
                    <label class="control-label">验证码：</label>
                    <div class="controls">
                      <input type="text" placeholder="请填写验证码" class="input-xfat input-xlarge" maxlength="16" v-model="smsCode">
                    </div>
                  </div>
                  <div class="control-group">
                    <div class="controls checkbox">
                      <input type="checkbox" name="" v-model="checked"><span>创建网站账号的同时，我同意遵守：</span><router-link :to="{path: '/register/paas', query:{person: true}}" style="color: #FF4606">《平台服务条款》</router-link>及 <router-link :to="{path: '/register/legal', query:{person: true}}" style="color: #FF4606">《隐私声明》</router-link>
                    </div>
                  </div>
                  <div class="control-group">
                    <div class="controls btn-reg">
                      <a class="sui-btn btn-block btn-xlarge btn-danger " @click="register">同意并注册</a>
                    </div>
                  </div>
                </form>
              </div>
            </section>
          </transition>
          <div class="question">
            <img src="static/img/reg/reg_monkey1.png">
            <div class="know-more">
              <p>了解更多</p>
              <ul>
                <li><a>手机收不到验证码?</a></li>
                <li><a>会员账户注册不成功?</a></li>
                <li><a>个人账户可以开店吗?</a></li>
                <li><a>账户如何换名字?</a></li>
                <li><a>个人账户需要营业执照吗?</a></li>
                <li><a>其他问题</a></li>
              </ul>
              <div class="clikeme">
                <img src="static/img/reg/reg_oval1.png" />
                <span class="text">?</span>
                <a class="a">点我提问</a>
              </div>
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
import { isMobile, isPassword } from '@/common/utils'
export default {
  data () {
    return {
      userName: '', // 用户名
      password: '', // 密码
      REpassword: '', // 再次输入密码
      checked: false,
      phoneValue: '', // 13109098765
      flag: false, // 是否已发送验证码
      time: 60, // 验证码限制时间
      newsTip: '获取短信验证码',
      smsCode: ''
    }
  },
  components: {regFooter, refHeader},
  methods: {
    sendCode () {
      if (this.flag) {
        this.$message.warning('验证码已发送，' + this.time + '秒后可重新获取')
        return false
      }
      if (this.phoneValue === null || this.phoneValue === '') {
        this.$message.warning('请输入手机号')
        return false
      }
      if (!isMobile(this.phoneValue)) {
        this.$message.warning('请输入正确的手机号')
        return false
      }
      this.API.sendCode({phoneNumbers: this.phoneValue}).then(res => {
        this.$message.success('验证码已发送')
        this.flag = true
        this.newsTip = this.time + '秒后可重新获取'
        this.setTime()
      })
    },
    register () {
      // 比较两次输入的密码是否一致
      if (!this.userName || !this.password) {
        this.$message.warning('请输入完整信息')
        return false
      }
      if (!isPassword(this.password)) {
        this.$message.warning('输入密码至少包含字符、数字、字母中的两种')
        return false
      }
      if (this.password !== this.REpassword) {
        this.$message.warning('两次输入密码不一致，请重新输入')
        return false
      }
      if (this.phoneValue === null || this.phoneValue === '') {
        this.$message.warning('请输入手机号')
        return false
      }
      if (!isMobile(this.phoneValue)) {
        this.$message.warning('请输入正确的手机号')
        return false
      }
      if (!this.flag) {
        this.$message.warning('请先获取验证码，再输入')
        return false
      }
      if (!this.smsCode) {
        this.$message.warning('请获取验证码')
        return false
      }
      if (!this.checked) {
        this.$message.warning('请先同意并且勾选协议~')
        return false
      }
      // 新增
      let user = {
        username: this.userName,
        password: this.password,
        phone: this.phoneValue
      }
      this.API.register(user, this.smsCode).then(res => {
        if (res.success === false) return false
        this.smsCode = ''
        this.time = 60
        this.password = ''
        this.REpassword = ''
        this.$message.success('注册成功')
        this.$router.push({path: '/login'})
      }).catch(() => {
        this.smsCode = ''
        this.time = 60
      })
    },
    setTime () {
      if (this.time === 1 || this.time === 0) {
        this.time = 60
      } else {
        this.time--
        setTimeout(() => { this.setTime() }, 1000)
      }
    }
  },
  watch: {
    time (newTime, oldTime) {
      if (newTime === 60) {
        this.newsTip = '获取短信验证码'
        this.flag = false
      } else {
        this.newsTip = newTime + '秒后可重新获取'
      }
    }
  },
  mounted () {
    if (this.$cookies.get('user-key')) { // 已登录
      this.$router.push({path: '/home'})
    }
  }
}
</script>
<style scoped>
  input:focus {
    outline: none;
  }
  button:focus {
    outline: none;
  }
  button:hover {
    outline: none;
  }
  /* 注册页面*/
  #register{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  #register> * {
    padding-left: calc(100vw - 100%);
  }
  .py-container{
    width: 1226px;
    margin: 0 auto;
  }
  .reg-top{
    background: #F4F4F4;
  }
  .reg-middle {
    flex-grow: 1;
  }
  .top{
    height:90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .top img{
    width:110px;
    height:63px;
    margin-left:70px;
    margin-bottom:14px;
  }
  .top_left{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .top .title{
    height:31px;
    font-size:32px;
    font-weight:400;
    color:rgba(74,74,74,1);
    line-height:25px;
    margin-left:8px;
  }
  .title_com {
    color: #333;
  }
  .top .go {
    font-size:14px;
    font-weight:400;
    color:rgba(53,53,53,1);
    line-height:20px;
    margin:60px 70px 0 0;
  }
  .top .go a{
    color: #28a3ef;
  }
  .middle{
    position: relative;
  }
  .password {
    position: relative;
  }
  .password span{
    position: absolute;
    top: 12px;
    right: 0;
    left: 100%;
    width: 100%;
    margin-left: 15px;
    color: rgb(130, 130, 130);
    font-size: 12px;
  }
/*中部内容区域*/
  .middle-title{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 79px;
  }
   .middle .fixed-height{
     height:35px;
     overflow: hidden;
     cursor: pointer;
   }
  .middle .fixed-height .reduce-height{
    margin-bottom: -20px;
  }
  .middle .active{
    color: #FFD704 !important;
    border-bottom: 2px solid #FFD704;
  }
  .middle-title img{
    display: inline;
  }
  .middle  .title{
    width:200px;
    margin-top: 28px;
    font-size:20px;
    font-weight:400;
    color:rgba(53,53,53,1);
  }
  .middle .title-text{
    display: inline;
  }
  .middle-contaiber{
    width:1225px;
    margin :0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    margin-top: -7px;
  }
  .back{
    background:rgba(129,129,129,0.29);
  }
  .middle .explain{
    margin-top: 10px;
    height:15px;
    font-size:14px;
    font-weight:400;
    color:rgba(53,53,53,1);
    line-height:20px;
  }
  .middle-contaiber .agreement{
    width:763px;
    height:568px;
    background:rgba(255,255,255,1);
    margin: 30px 0 46px 0 ;
    padding-bottom: 40px;
  }
  .middle-contaiber .agreement .regagreement{
    margin:16px 0 0 22px;
    width:85px;
    height:18px;
    font-size:19px;
    font-weight:400;
    color:rgba(53,53,53,1);
    line-height:23px;
  }
  .agreement hr {
    color: #E3E3E3;
    margin-top: 20px;
    opacity: 0.29;
  }
  .agreement .agreement-detail{
    margin:0 auto;
    width:721px;
    font-size:14px;
    font-weight:400;
    color:rgba(9,9,9,1);
    line-height:24px;
  }
  .agreement .agreement-detail a{
    font-size: 13px;
    color:#FF4606;
  }
  .agreement .agreement-detail p{
    margin-top: 10px;
    font-weight: lighter;
    text-align: left;
  }
  .agreement .agreement-detail span{
    font-weight: lighter;
  }
  .agreement .btn_agree{
    width:100px;
    height:30px;
    background:rgba(255,70,6,1);
    font-size:14px;
    font-weight:400;
    color:rgba(254,254,254,1);
    line-height:20px;margin-top: 10px;
  }
  .sui-btn{
    cursor: pointer;
  }
/*中部右边问题框*/
  .question{
    position: absolute;
    top:200px;
    right:0;
  }
  .question img{
    margin-left: 37px;
  }
  .question .know-more{
    width:123px;
    height:312px;
    border: 2px solid #F4AC00;
    border-radius:10px;
    position: relative;
  }
  .question .know-more P {
    margin:10px 0 5px 5px;
    font-weight: 400;
    color: rgba(53, 53, 53, 1);
    line-height: 20px;
  }
  .question .know-more ul>li{
    line-height: 20px;
    text-align: left;
  }
  .question .know-more ul>li a{
    font-size:12px;
    font-weight:300;
    color:rgba(58,58,58,1);
  }
  .question .know-more ul>li:nth-of-type(odd){
    background:rgba(255,233,125,0.37);
  }
  .question .clikeme img, .question  a{
    display: inline;
    margin: 0 10px  0 10px;
  }
  .question .clikeme{
    height: 34px;
    background: #F4AC00;
    font-size:16px;
    font-weight:300;
    color:rgba(255,255,255,1);
    line-height:32px;
    border-radius: 0 0 8px 8px;
    position: absolute;
    top:280px;
  }
  .question .text{
    margin: 2px 0 0 -28px;
  }
  .btn-reg {
    width: 100px;
    height:40px;
    margin:5px 0 0 100px;
  }
  .top h3{
    display: inline;
  }
  .info {
    width: 600px;
    margin: 40px auto;
    text-align: left;
  }
  .control-label {
    font-size: 14px;
    width: 105px;
    text-align: right;
    line-height: 42px;
  }
  .control-group{
    display: flex;
    margin: 15px 0;
  }
  .control-group .star{
    color: orangered;
    margin-right:7px;
  }

  .control-label:before{
    content: "*";
    color:#FF4606;
    margin-right:10px;
  }
  .checkbox {
    margin-left: 113px;
    flex-wrap: wrap;
    font-size: 14px;
    color: #A3A3A3;
    width: 268px;
    line-height: 22px;
  }
  .checkbox input {
    margin-right: 10px;
  }
 .controls .select{
   height: 40px;
   box-sizing: border-box;
   line-height: 38px;
   padding: 0 10px;
   font-size: 12px;
   width: 100px;
   margin-left: 10px;
   border-right:none;
   margin-right: 0;
   border: 1px solid rgb(153, 153, 153);
 }
  .controls {
    display: flex;
    align-items: center;
  }
  .controls .mobile{
    margin-left: -5px !important;
    width: 185px!important;
  }
  .controls .agree{
    color: orangered;
  }
  .controls >label{
    display: flex;
    align-items: center;
  }
  .sui-form input[type=text].input-xfat.input-xlarge,
  .sui-form input[type=password].input-xfat.input-xlarge {
    width: 280px;
    border-radius: 0;
    border: 1px solid #999;
    height: 38px;
    margin-left:10px;
  }
  .btn-danger {
    background-color: orangered;
    padding: 4px;
    border-radius: 0;
    font-size: 15px;
    word-spacing: 4px;
    width: 90px;
    height: 30px ;
    line-height: 30px;
    text-align: center;
    color: white;
    border-radius: 4px;
  }
  .getPhoneCode{
    margin-left: 10px;
    padding: 0 20px;
    height: 30px;
    border-radius: 8px;
    background-color: #FF9800;
    color: white;
  }
</style>
