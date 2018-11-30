<template>
  <div id="login">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <div class="py-container">
      <h4 class="manage-title">MKTail猴尾巴</h4>
      <div class="loginform">
        <el-tabs type="border-card" class="sui-nav nav-tabs tab-wraped">
          <el-tab-pane label="扫描登录" >
            <div id="index" class="tab-pane">
              <img src="../../../static/img/erweima.png" />
              <p>剩余事件60s</p>
            </div>
          </el-tab-pane>
          <el-tab-pane label="账户登录">
            <div id="profile" class="tab-pane  active">
              <form class="sui-form" method="post">
                <div class="input-prepend">
                  <span class="add-on loginname"></span>
                  <input id="prependedAdmin" name="username" type="text" placeholder="邮箱/用户名/手机号" class="span2 input-xfat">
                </div>
                <div class="input-prepend"><span class="add-on loginpwd"></span>
                  <input id="prependedPsd" name="password" type="password" placeholder="请输入密码" class="span2 input-xfat">
                </div>
                <div class="logined">
                  <router-link :to="{path: '/user'}" class="sui-btn btn-block btn-xlarge btn-danger" target="_blank">登&nbsp;&nbsp;录</router-link>
                </div>
              </form>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
      <div class="clearfix"></div>
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
  .manage-title{
    font-size: 36px;
    color: #777;
  }
  .el-tabs__nav{
    width: 100%;
  }
  .el-tabs--border-card>.el-tabs__header .el-tabs__item {
    width: 45%;
  }
  .loginform >ul{
    display: flex;
  }
  .input-prepend >input:focus{
    outline: none
  }
  .py-container{
    width: 1260px;
    margin: 0 auto;
  }
  .sui-nav.nav-tabs.tab-wraped>li {
    width: 50%
  }
  .sui-nav.nav-tabs.tab-wraped>li.active>a {
    padding-top: 0;
    border-top: 1px solid #28a3ef
  }
  .sui-nav.nav-tabs.tab-wraped>li>a {
    padding: 0
  }
  .sui-nav.nav-tabs.tab-wraped>li.active h3 {
    color: #c8111a
  }
  .sui-form {
    margin-top: 15px
  }
  span.loginname {
    background: url(../../../static/img/user.png);
    background-position: center;
    background-size: 35px;
    background-repeat: no-repeat;
  }
  .sui-form .input-prepend {
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
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
    background: url(../../../static/img/password.png);
    background-position: center;
    background-size: 35px;
    background-repeat: no-repeat;
  }
  .loginmanage {
    height: 500px;
    width: 1920px;
    background: url(../../../static/img/bg_head.png);
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
  }
</style>
