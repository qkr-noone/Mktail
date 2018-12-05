<template>
  <div id="test-index">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <shortcutHeader></shortcutHeader>
    <div class="py-container">
      <div class="registerArea">
        <h3>注册新用户<span class="go">我有账号，去<a href="login.html" target="_blank">登陆</a></span></h3>
        <div class="info">
          <form class="sui-form form-horizontal">
            <div class="control-group">
              <label class="control-label">用户名：</label>
              <div class="controls">
                <input type="text"  placeholder="请输入你的用户名" class="input-xfat input-xlarge">
              </div>
            </div>
            <div class="control-group">
              <label for="inputPassword" class="control-label">登录密码：</label>
              <div class="controls">
                <input type="password" placeholder="设置登录密码" class="input-xfat input-xlarge">
              </div>
            </div>
            <div class="control-group">
              <label for="inputPassword" class="control-label">确认密码：</label>
              <div class="controls">
                <input type="password" placeholder="再次确认密码" class="input-xfat input-xlarge">
              </div>
            </div>
            <div class="control-group">
              <label class="control-label">手机号：</label>
              <div class="controls">
                <input type="text"  placeholder="请输入你的手机号" class="input-xfat input-xlarge">
              </div>
            </div>
            <div class="control-group">
              <label for="inputPassword" class="control-label">短信验证码：</label>
              <div class="controls">
                <input type="text" placeholder="短信验证码" class="input-xfat input-xlarge"><a class="send-code" href="#">获取短信验证码</a>
              </div>
            </div>
            <div class="control-group">
              <label for="inputPassword" class="control-label">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
              <div class="controls">
                <el-checkbox v-model="checked">同意协议并注册《MKTail用户协议》</el-checkbox>
              </div>
            </div>
            <div class="control-group">
              <label class="control-label"></label>
              <div class="controls btn-reg">
                <router-link :to="{ path: '/login'}" class="sui-btn btn-block btn-xlarge btn-danger" target="_blank">注册</router-link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <pageFooter></pageFooter>
  </div>
</template>
<script>
import shortcutHeader from '../../components/shortcutHeader'
import pageFooter from '../../components/pageFooter'
export default {
  data () {
    return {
      checked: false
    }
  },
  components: { shortcutHeader, pageFooter }
}

</script>
<style scoped>
.py-container{
  width: 1260px;
  margin: 0 auto;
}
.registerArea {
    margin: 15px 0;
    border: 1px solid #dfdfdf;
    font-family: "微软雅黑"
}
.registerArea h3 {
  display: flex;
  justify-content: space-between;
    background: #ececec;
    margin: 0;
    padding: 6px 15px;
    color: #333;
    border-bottom: 1px solid #dfdfdf
}

h3 .go {
    font-size: 14px;
    float: right;
}
h3 .go a{
  color: #28a3ef;
}

.btn-reg {
    width: 270px
}

.info {
    width: 600px;
    margin: 40px auto;
        text-align: left;
}

.control-label {
    font-size: 14px;
    width: 96px;
    text-align: right;
    line-height: 42px;
}
.control-group{
  display: flex;
  margin: 15px 0;
}
.controls {
  display: flex;
}
.controls >label{
  display: flex;
  align-items: center;
}
.sui-form input[type=text].input-xfat.input-xlarge,
.sui-form input[type=password].input-xfat.input-xlarge {
  width: 271px;
    border-radius: 0;
    border: 1px solid #999;
    height: 40px
}

#submit {
    padding: 5px 80px;
    font-family: "微软雅黑";
    background-color: #c81523
}

.reg {
    width: 221px
}

.zhuce {
    *width: 221px;
    float: right
}

.btn-danger {
    background-color: #28a3ef;
    padding: 6px;
    border-radius: 0;
    font-size: 16px;
    font-family: 微软雅黑;
    word-spacing: 4px;
    width: 100%;
    text-align: center;
    color: #fff;
}

.copyright {
    text-align: center;
    line-height: 24px
}

.copyright ul li {
    list-style-type: none;
    display: inline-block;
    *display: inline;
    *zoom: 1;
    border-right: 1px solid #e4e4e4;
    padding: 0 20px;
    margin: 15px 0
}

.copyright ul li:last-child {
    border-right: 0
}
.send-code{
  line-height: 40px;
  color: #28a3ef;
  margin-left: 20px;
}
</style>
