<template>
  <div id="test-index">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <shortcutHeader></shortcutHeader>
    <div class="py-container">
      <div class="registerArea">
        <h3>注册新用户<span class="go">我有账号，去<router-link :to="{path: '/login'}">登陆</router-link></span></h3>
        <div class="info">
          <form class="sui-form form-horizontal">
            <div class="control-group">
              <label class="control-label">用户名：</label>
              <div class="controls">
                <input type="text"  placeholder="请填写用户名" class="input-xfat input-xlarge" v-model="userName">
              </div>
            </div>
            <div class="control-group">
              <label for="inputPassword" class="control-label">登录密码：</label>
              <div class="controls">
                <input type="password" placeholder="请设置6-18位数字、字母、字符密码" class="input-xfat input-xlarge" v-model="password">
              </div>
            </div>
            <div class="control-group">
              <label for="inputPassword" class="control-label">确认密码：</label>
              <div class="controls">
                <input type="password" placeholder="再次确认密码" class="input-xfat input-xlarge" v-model="REpassword">
              </div>
            </div>
            <div class="control-group">
              <label class="control-label">手机号：</label>
              <div class="controls">
                <input type="text" placeholder="请填写手机号" class="input-xfat input-xlarge" maxlength="16" v-model="phoneValue">
              </div>
            </div>
            <div class="control-group">
              <label for="inputPassword" class="control-label">短信验证码：</label>
              <div class="controls">
                <input type="text" placeholder="短信验证码" class="input-xfat input-xlarge" v-model="smscode" ><a class="send-code" @click="sendCode">{{newsTip}}</a>
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
                <a class="sui-btn btn-block btn-xlarge btn-danger" @click="register">注册</a>
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
import { apiAxios } from '../../common/utils'
import { api } from '../../common/api'
export default {
  data () {
    return {
      userName: '',
      password: '',
      REpassword: '',
      checked: false,
      phoneValue: '', // 13109098765
      flag: false, // 是否已发送验证码
      time: 60, // 验证码限制时间
      newsTip: '获取短信验证码',
      smscode: ''
    }
  },
  components: { shortcutHeader, pageFooter },
  methods: {
    sendCode () {
      if (this.flag) {
        this.$message.warning('验证码已发送，' + this.time + '秒后可重新获取')
        return false
      }
      if (this.phoneValue === null || this.phoneValue === '') {
        this.$message.warning('请输入填写手机号')
        return false
      }
      if (this.phoneValue.length !== 11) {
        this.$message.warning('请输入正确的手机号')
        return false
      }
      apiAxios.AxiosG({
        url: api.sendCode,
        params: {phone: this.phoneValue}
      }, rtn => {
        if (rtn.data.success) {
          this.$message.success(rtn.data.message)
          this.flag = true
          this.newsTip = this.time + '秒后可重新获取'
          this.setTime()
        } else {
          this.$message.error(rtn.data.message)
        }
      })
    },
    register () {
      // 比较两次输入的密码是否一致
      if (!this.userName || !this.password) {
        this.$message.warning('请输入完整信息')
        return false
      }
      if (this.password !== this.REpassword) {
        this.$message.warning('两次输入密码不一致，请重新输入')
        return false
      }
      if (this.phoneValue === null || this.phoneValue === '') {
        this.$message.warning('请输入填写手机号')
        return false
      }
      if (this.phoneValue.length !== 11) {
        this.$message.warning('请输入正确的手机号')
        return false
      }
      if (!this.flag) {
        this.$message.warning('请先获取验证码，再输入')
        return false
      }
      if (!this.smscode) {
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
      // register(this.smscode, user).then(res => {
      //   console.log(res)
      //   if (res.data.success) {
      //     this.smscode = ''
      //     this.time = 60
      //     this.password = ''
      //     this.REpassword = ''
      //     this.$message.success(res.data.message)
      //     this.$router.push({path: '/login'})
      //   } else {
      //     this.smscode = ''
      //     this.time = 60
      //     this.$message.error(res.data.message)
      //   }
      // })
      apiAxios.AxiosP({
        url: api.register,
        method: 'post',
        params: {smscode: this.smscode},
        data: user
      }, rtn => {
        if (rtn.data.success) {
          this.smscode = ''
          this.time = 60
          this.password = ''
          this.REpassword = ''
          this.$message.success(rtn.data.message)
          this.$router.push({path: '/login'})
        } else {
          this.smscode = ''
          this.time = 60
          this.$message.error(rtn.data.message)
        }
      })
    },
    setTime () {
      if (this.time === 1 || this.time === 0) {
        console.log('可免费获取验证码' + this.time)
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
  }
}
</script>
<style scoped>
/* 注册 */
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
