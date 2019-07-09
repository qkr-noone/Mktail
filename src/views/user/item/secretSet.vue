<template>
  <div class="con-wrap">
    <div class="title">
      <a>密保问题设置</a>
    </div>
    <div class="con-de">
      <div class="con-item">
        <div class="tip">
          <img src="static/img/user/user_safetytips1.png">
          <span>安全保护问题将作为重要的身份验证方式，请认真设置！</span>
        </div>
      </div>
      <div class="con-item">
        <form>
          <div class="group">
            <label>问题一</label>
            <el-select style="width: 330px" v-model="value1" placeholder="请选择">
              <el-option
                v-for="item in options1"
                :key="item.id"
                :label="item.info"
                :value="item.id">
              </el-option>
            </el-select>
          </div>
          <div class="group">
            <label class="answer">答案</label>
            <input style="width: 330px" type="text" v-model="answer1" id="ans1"  v-on:blur="change()"/>
            <span class="error"  v-show="!isAnswer"><div class="error-ipt">x</div> 请填写答案</span>
          </div>
          <div class="group">
            <label>问题二</label>
            <el-select style="width: 330px" v-model="value2" placeholder="请选择">
              <el-option
                v-for="item in options2"
                :key="item.id"
                :label="item.info"
                :value="item.id">
              </el-option>
            </el-select>
          </div>
          <div class="group">
            <label class="answer">答案</label>
            <input style="width: 330px" type="text" class="answer-test" v-model="answer2" id="ans2" v-on:blur="changeSecon()"/>
            <span class="error"  v-show="!isSecondAn"><div class="error-ipt">x</div> 请填写答案</span>
          </div>
          <div class="group">
            <label>问题三</label>
            <el-select style="width: 330px" v-model="value3" placeholder="请选择">
              <el-option
                v-for="item in options3"
                :key="item.id"
                :label="item.info"
                :value="item.id">
              </el-option>
            </el-select>
          </div>
          <div class="group">
            <label class="answer">答案</label>
            <input style="width: 330px" type="text" v-model="answer3" id="ans3" v-on:blur="changeThird()"/>
            <span class="error"  v-show="!isThirdAn"><div class="error-ipt">x</div> 请填写答案</span>
          </div>
          <div class="group">
            <button @click="SubmitSecretSecurity" class="btn">确定</button>
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
      answer1: '',
      answer2: '',
      answer3: '',
      isAnswer: true,
      isSecondAn: true,
      isThirdAn: true,
      value1: '',
      value2: '',
      value3: '',
      options1: [],
      options2: [],
      options3: [],
      Authorization: this.$cookies.get('token'),
      userName: this.$store.state.user.userInfo.username
    }
  },
  mounted () {
    this.getquestion()
  },
  methods: {
    change (item, val) {
      if (!this.answer1) {
        this.isAnswer = false
      } else {
        this.isAnswer = true
      }
    },
    changeSecon () {
      if (!this.answer2) {
        this.isSecondAn = false
      } else {
        this.isSecondAn = true
      }
    },
    changeThird () {
      if (!this.answer3) {
        this.isThirdAn = false
      } else {
        this.isThirdAn = true
      }
    },
    getquestion () {
      this.API.getProblemByTypeCode({Authorization: this.Authorization, typeCode: 1}).then(res => {
        this.options1 = res
      })
      this.API.getProblemByTypeCode({Authorization: this.Authorization, typeCode: 2}).then(res => {
        this.options2 = res
      })
      this.API.getProblemByTypeCode({Authorization: this.Authorization, typeCode: 3}).then(res => {
        this.options3 = res
      })
    },
    showdata () {
      console.log(this.value1)
    },
    SubmitSecretSecurity () {
      this.API.Keepconfidential({problem1: this.value1, problem2: this.value2, problem3: this.value3, answer1: this.answer1, answer2: this.answer2, answer3: this.answer3, userName: this.userName}).then(res => {
        if (res.success === false) {
        }
        console.log(res)
      })
    }
  }
}
</script>
<style scoped>
  /*@import '../../../assets/css/user/user-set.css';*/
  .con-wrap {
    position: relative;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-top: 20px;
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
  .error-ipt{
    display: inline-block;
    width:14px;
    height:14px;
    background:rgba(231,22,0,1);
    border-radius:50%;
    color:floralwhite;
    line-height: 14px;
    margin-right: 5px;
  }
  .error{
    position: absolute;
    top: 40px;
    left: 65px;
    font-size:14px;
    width:100px;
    font-family:SourceHanSansCN-Light;
    font-weight:300;
    color:rgba(231,22,0,1);
    /*display: block;*/
    /*margin-top: -20px !important;*/
    /*margin-left: 60px;*/
    /*margin-bottom: 20px !important;*/
  }
  .con-de {
    position: relative;
  }
  .con-item{
    font-family:SourceHanSansCN-Normal;
    font-weight:400;
  }
  .tip{
    position: absolute;
    top:54px;
    left:95px;
    font-size:16px;
  }
  .con-item form{
    position: absolute;
    top:120px;
    left:212px;
  }
  .con-item form .group{
    height: 50px;
    position: relative;
    margin-bottom: 10px;
    color:rgba(89,89,89,1);
  }
  .con-item form .group select{
    width:330px;
    height:37px;
  }
  .con-item form .group label{
    font-size:16px;
  }
  .con-item img {
    display: inline;
  }
  .con-item form .group input,select{
    width:188px;
    height:37px;
    margin-left: 10px;
    font-size:14px;
    border:1px solid rgba(225,225,225,1);
  }
  .con-item form .group .answer{
    /*margin-left: -120px;*/
  }
  .con-item form .group .btn{
    width:145px;
    height:39px;
    background:rgba(255,68,0,1);
    border-radius:3px;
    margin-left: -120px;
  }
  .test{
    border:1px solid red !important;
  }
</style>
