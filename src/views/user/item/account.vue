<template>
  <div class="con-wrap">
    <div class="title">
      <a>账号管理</a>
    </div>
    <div class="con-de">
      <div class="con-item">
        <h4 class="item-title">你的基础信息</h4>
        <ul class="item-de">
          <li class="item-li">
            <div class="item-li-box"><label>会员名</label><label class="name">MKTail</label></div>
          </li>
          <li class="item-li">
            <div class="item-li-box"><label>登录邮箱：</label><label>您尚未设置登录邮箱</label><a href="" >添加邮箱</a></div>
          </li>
          <li class="item-li">
            <div class="item-li-box"><label>绑定手机：</label><label>137*****118</label><a href="">修改手机</a></div>
          </li>
        </ul>
      </div>
      <div class="con-item">
        <h4 class="item-title">您的安全服务</h4>
        <div class="item-pro">
          <p>安全等级：</p><p>中</p>
          <div class="progres-box"><div class="progres"></div></div>
          <p>完成&nbsp;&nbsp;<strong>密保设置</strong>&nbsp;，提升账户安全。</p>
        </div>
        <ul class="item-ul item-de">
          <li class="item-div">
            <div class="item-box">
              <img src="static/img/mk_userinfo_ok.png">
              <p>已完成</p>
            </div>
            <h4>身份认证</h4>
            <p class="tip">用于提升账号的安全性和信任级别。认证后的有卖家记录的账号不能修改认证信息。</p>
            <a href="">查看</a>
          </li>
          <li class="item-div">
            <div class="item-box">
              <img src="static/img/mk_userinfo_ok.png">
              <p>已完成</p>
            </div>
            <h4>登录密码</h4>
            <p class="tip">安全性高的密码可以使账号更安全。建议您定期更换密码，且设置一个包含数字和字母，并长度超过6位以上的密码。</p>
            <a href="">修改</a>
          </li>
          <li class="item-div">
            <div class="item-box">
              <img src="static/img/mk_userinfo_light.png">
              <p>未设置</p>
            </div>
            <h4>密保问题</h4>
            <p class="tip">是您找回登录密码的方式之一。建议您设置一个容易记住，且最不容易被他人获取的问题及答案，更有效保障您的密码安全。</p>
            <a href="">设置</a>
          </li>
          <li class="item-div">
            <div class="item-box">
              <img src="static/img/mk_userinfo_ok.png">
              <p>已绑定</p>
            </div>
            <h4>绑定手机</h4>
            <p class="tip">绑定手机后，您即可享受淘宝丰富的手机服务，如手机找回密码等。</p>
            <a href="">修改</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>
<style scoped>
/* 您的安全服务*/
  .progres-box {
    width: 231px;
    height: 10px;
    border:1px solid rgba(244,244,244,1);
    box-shadow:0px 0px 3px 0px rgba(0, 0, 0, 0.35);
    background:rgba(220,220,220,1);
    margin: 0 15px;
    position: relative;
  }
  .progres {
    position: absolute;
    top: -1px;
    left: 0;
    width:113px;
    height:10px;
    border:1px solid rgba(253,154,0,1);
    background:linear-gradient(0deg,rgba(249,160,0,1) 0%,rgba(249,200,0,1) 100%);
  }
  .item-box {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 80px;
    min-height: 60px;
  }
  li.item-div +li {
    margin-top: 20px;
  }
  .item-div h4 {
    font-size: 14px;
  }
  .item-div .tip{
    text-align: left;
    width: 420px;
    line-height: 18px;
  }
  .item-div {
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 660px;
  }
  .item-ul {
    border-bottom: 0px solid !important;
  }
  .item-pro a, .item-div a, .item-pro strong {
    color: #3366CC;
  }
 .item-pro {
  margin-left: 40px;
  margin-bottom: 20px;
  font-size: 14px;
  display: flex;
  align-items: center;
 }
/* 你的基础信息*/
  .con-item {
    margin-left: 40px;
  }
  .item-de {
    margin-left: 24px;
    padding-bottom: 24px;
    border-bottom: 1px solid #F4F4F4;
  }
  .name {
    margin-left: 20px;
  }
  .item-li a {
    margin-left: 20px;
    flex-grow: 1;
    text-align: right;
    color: #3366CC;
  }
  .item-li-box {
    width: 300px;
    display: flex;
  }
  .item-li {
    display: flex;
    justify-content: flex-start;
    height: 28px;
    line-height: 28px;
    font-size: 14px;
    font-weight:400;
    color:rgba(0,0,0,1);
  }
  .item-title {
    font-size:15px;
    font-weight:bold;
    color:rgba(0,0,0,1);
    margin: 21px 0px;
    text-align: left;
  }
  .con-wrap {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .con-de {
    border: 1px solid #F4F4F4;
    flex-grow: 1;
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
    font-weight:bold;
    color: #000000;
  }
</style>
