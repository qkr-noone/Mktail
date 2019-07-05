<template>
  <div class="con-wrap">
    <div :class="{point :panelShow === true}">
    </div>
    <div class="elastic-frame" v-if=" panelShow === true"  id="myPanel">
      <form>
        <div class="group">
          <label>手机号码：</label>
          <input v-model="phone" type="text" placeholder="请填写正确的11位手机号码"/>
        </div>
        <div class="group">
          <label>验证码：</label>
          <input type="text"/>
          <span class="get-code">获取验证码</span>
        </div>
        <div class="group">
          <label class=" proving">验证：</label>
          <div class="test">
            <div class="arrow">>></div>
            <div class="text-right">请按住滑块拖动到最右边</div>
          </div>
        </div>
        <button class="btn">确定</button>
      </form>
    </div>
    <div class="title">
      <a>绑定手机</a>
    </div>
    <div class="con-de"  v-on:click="hidePanel">
      <div class="con-item" >
        <h3 class="no-binding">您尚未绑定手机号码</h3>
        <button class="btn-binding" @click="changeShow()">立即绑定手机</button>
      </div>
      <div class="con-item binding">
        <h2 class="why-binding">为什么要绑定手机号？</h2>
        <hr class="hr-binding">
        <p class="info-binding">保障账户中重要信息，在设置、修改支付密码、登录密码等都需要手机短信验证及接收异常消息。</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      panelShow: false,
      phone: ''
    }
  },
  methods: {
    hidePanel: function (event) {
      let sp = document.getElementById('myPanel')
      if (sp) {
        if (!sp.contains(event.target)) {
          this.panelShow = false
        }
      }
    },
    changeShow () {
      this.panelShow = true
    }
  }
}
</script>
<style scoped>
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
    margin-top: 10px;
  }
  .title a {
    border:1px solid rgba(244,244,244,1);
    padding: 7px 20px;
    font-size: 24px;
    line-height: 24px;
    font-weight:bold;
    color: #000000;
  }
  .con-item .no-binding{
    font-size:18px;
    margin: 180px 0 15px 0;
    color:#000000;
    font-weight:400;
  }
  .con-item  .why-binding{
    font-size:24px;
    margin: 150px 0 10px  0;
  }
  .con-item .btn-binding{
    font-size:14px;
    font-family:SimSun;
    color:rgba(255,255,255,1);
    width:113px;
    height:27px;
    border:1px solid rgba(253,154,0,1);
    background:linear-gradient(0deg,rgba(249,160,0,1) 0%,rgba(249,200,0,1) 100%);
  }
  .con-item .hr-binding{
    width:553px;
    background:rgba(185,185,185,1);
    margin: 0 auto;
    margin-bottom: 10px;
    text-align: center !important;
  }
  .con-item .info-binding{
    font-size:14px;
    font-weight:300;
    color:rgba(85,85,85,1);
    text-align: center;
  }
 .elastic-frame{
    width:379px;
    height:323px;
    background:rgba(255,255,255,1);
    position: fixed;
    left:750px;
    top:224px;
    z-index: 100;
  }
  .elastic-frame .group{
    height:50px;
    line-height: 35px;
    margin:22px 0 20px 0;
    position: relative;
    border:none;
    background: none;
    width:379px;
  }
  .elastic-frame .group label{
    font-size:14px;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(72,72,72,1);
    position: absolute;
    right:290px;
  }
  .elastic-frame .group input{
    height:34px;
    width:233px;
    position: absolute;
    left:100px;
    margin: 0;
    padding:0;
    border: 1px solid #E1E1E1;
  }
  .elastic-frame  .btn{
    width:135px;
    height:42px;
    background:rgba(255,68,0,1);
    border-radius:3px;
    font-size:16px;
    color:rgba(255,255,255,1);
 }
  .point{
    position: fixed;
    top: 135px;
    right: 0;
    left: 0;
    height: 83vh;
    background-color: #E5E5E5;
    opacity: 0.5;
  }
  .get-code{
    position: absolute;
    right:50px;
    font-size:14px;
    font-family:SourceHanSansCN-Normal;
    font-weight:400;
    color:rgba(77,77,77,1);
  }
/*验证码*/
  /*验证码*/
  .test,.arrow,.text-right{
    display: inline-block;
    font-size:14px;
  }
  .test .arrow{
    width:13%;
    background:rgba(255,255,255,1);
    border-right: none;
    font-family:SimHei;
    font-weight:400;
    color:rgba(135,135,135,1);
    text-align: center;
  }
  .test .text-right{
    width:84%;
    background:rgba(244,244,244,1);
    margin-left: -8px;
    font-family:SourceHanSansCN-Light;
    font-weight:300;
    color:rgba(167,167,167,1);
    text-align: center;
  }
  .proving{
    position: absolute;
    right:300px !important;
  }
  .test{
     position: absolute;
     left:80px;
     height:40px;
     width:248px;
   }
</style>
