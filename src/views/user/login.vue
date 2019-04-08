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
          <loginBox class="loginform" @loginAfter="toPage()"></loginBox>
        </div>
      </div>
    </div>
    <regFooter></regFooter>
  </div>
</template>
<script>
import regFooter from '@/components/regFooter'
import refHeader from '@/components/regHeader'
import loginBox from '@/components/loginBox'
export default {
  data () {
    return {}
  },
  components: { regFooter, refHeader, loginBox },
  methods: {
    toPage () {
      this.$router.push(this.$route.query.back)
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
   right: 70px;
 }
</style>
