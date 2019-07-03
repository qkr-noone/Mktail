<template>
  <div class="rpLayer">
    <div class='popContainer' v-show="close"></div>
    <div class="box" v-show="close" ref="boxM">
      <div ref="box" v-if="loginClose">

        <div class="login-header">
          <div></div>
          <span>立即登录&nbsp;&nbsp;即可观看</span>
          <div></div>
        </div>
        <div class="login-main">
          <el-form :model="loginForm" :rules="loginRules" ref="loginForm" label-width="100px" class="demo-ruleForm">
            <el-form-item prop="username">
              <el-input v-model="loginForm.username" placeholder="会员名/邮箱/手机号码"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input type="password" placeholder="密码" v-model="loginForm.password" show-password></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="login-btn" @click="threeLoginForm('loginForm')">
          登录
        </div>
        <div class="login-footer">
          <div>忘记密码</div>
          <router-link :to="{path:'/register'}">立即注册</router-link>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      close: false, // 遮罩层
      loginClose: false,
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [
          { required: true, message: '请输入会员名/邮箱/手机号码', trigger: 'blur' },
          { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  mounted () {
    if (!this.$cookies.get('token')) {
      this.loginClose = true
      this.close = true
    }
  },
  methods: {
    closeBtn () { // 关闭
      this.close = false
    },
    threeLoginForm (formName) {
      let f = true
      this.$refs[formName].validate((valid) => {
        if (valid) {
        } else {
          f = false
        }
      })
      if (f) {
        this.$store.dispatch('USER_LOGIN', this.loginForm).then(async res => {
          await this.$store.dispatch('USER_INFO')
          await this.$store.dispatch('CART')
          if (res.token !== '') {
            this.loginClose = false
            this.close = false
          }
        })
      }
    }
  }
}

</script>
<style lang="scss" scoped>
.popContainer{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0);
  z-index: 999;
}
.box{
  background: rgba(0,0,0,0);
  position: fixed;
  z-index: 999;
  top: 50%;
  left: 50%;
  transform:translate(-50%, -50%);
  padding: 10px;
  >div{
    min-width: 350px;
    min-height: 100px;
    background: #fff;
    border: 1px solid #bfbfbf;
  }
}
.login-header{
  margin: 16px 10px 36px;
  display: flex;
  div{
    flex: 1;
    height: 1px;
    background: #b4b4b4;
    transform: translateY(6px);
  }
  span{
    font-size: 12px;
    margin: 0 5px;
  }
}
.login-main{
  margin: 0 16px;
  /deep/ .el-form-item{
    margin-bottom: 26px !important;
    .el-form-item__content{
      margin: 0 !important;
    }
    .el-input__inner{
      border-radius: 0;
    }
  }
}
.login-btn{
  height: 42px;
  margin: 6px 16px 30px;
  line-height: 42px;
  background: #fed804;
  cursor: pointer;
}
.login-footer{
  display: flex;
  justify-content: flex-end;
  margin: 0 16px 30px 0;
  font-size: 12px;
  a{
    margin-left: 24px;
    color: #000;
  }
}
</style>
