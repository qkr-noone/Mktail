<template>
  <div class="con-wrap">
    <div class="title">
      <a>银联卡绑定</a>
    </div>
    <div class="con-de" @click="hidePanel" >
      <div class="con-item">
        <h3 class="no-binding">您尚未绑定银联卡账号</h3>
        <button class="btn-binding" @click="change">立即绑定</button>
      </div>
      <div class="con-item binding">
        <h2 class="why-binding">为什么要绑定银联卡</h2>
        <hr class="hr-binding">
        <p class="info-binding">绑定银联卡，付款更便捷，账户更保障</p>
      </div>
      <div class="elastic-frame" v-if=" panelShow === true"  id="myPanel">
        <p>请填写以下信息，用于开通银联卡等功能</p>
        <form>
          <div class="group">
            <label>真实姓名：</label>
            <input/>
          </div>
          <div class="group">
            <label>身份证号：</label>
            <input/>
          </div>
          <div class="group">
            <label>银行卡号：</label>
            <input/>
          </div>
          <div class="group">
            <label>手机号码：</label>
            <input/>
          </div>
          <div class="group phoneTest">
            <span class="phoneTestCode">手机验证码</span>
            <input class="phone-test"/>
            <button class="get-code">获取验证码</button>
          </div>
          <div class="group  drap">
            <label>验证:</label>
            <div class="test">
              <div class="arrow">>></div>
              <div class="text-right">请按住滑块拖动到最右边</div>
            </div>
          </div>
          <div class="group">
            <button class="btn" @click="cardBinding">确定</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
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
    cardBinding () {
      this.panelShow = false
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
/*关于绑定前*/
  .binding{
    font-family:SourceHanSansCN-Normal;
    color:rgba(0,0,0,1);
    display: flex;
    flex-direction: column;
    align-items: center;
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
    margin-bottom: 10px;
    text-align: center !important;
  }
  .con-item .info-binding{
    font-size:14px;
    font-weight:300;
    color:rgba(85,85,85,1);
    text-align: center;
  }
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
/*绑定弹窗*/
  .elastic-frame {
    position: absolute;
    left:317px;
    top:21px;
    width:446px;
    height:499px;
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 6px 0px rgba(0, 0, 0, 0.35);
    text-align: left;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .elastic-frame p{
    font-size:12px;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    margin: 8px 0 22px -200px;
    text-align: left;
    color:#3F3F3F;
  }
  .elastic-frame .group{
    height:48px;;
    margin-bottom: 18px;
    line-height: 52px;
    border:none;
  }
  .elastic-frame .group input{
    height:48px;
    width:264px;
    border: 1px solid #E1E1E1;
  }
  .elastic-frame .group label{
    font-size:14px;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(72,72,72,1);
  }
  .elastic-frame .group .phone-test{
    width:202px;
    margin-left:2px;
  }
  .elastic-frame  .phoneTest{
    height:48px;
    position: relative;
  }
  .elastic-frame .phoneTestCode{
    position: absolute;
    left:10px;
  }
  .elastic-frame .group .get-code{
    width:133px;
    background:rgba(248,248,248,1);
    border:1px solid rgba(225,225,225,1);
    margin:0 0 0 -8px;
    border-left:none;
    height:50px;
    padding-bottom: 2px;
  }
   .test{
    width:248px;
    height:33px;
    border: 1px solid rgba(227,227,227,1);
  }
  .elastic-frame .drap{
    height:33px !important;
    line-height: 33px;
  }
  .group .btn{
    width:135px;
    height:42px;
    background:rgba(255,68,0,1);
    border-radius:3px;
    margin-left: 100px;
  }
</style>
