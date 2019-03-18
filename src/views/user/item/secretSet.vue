<template>
  <div class="con-wrap">
    <div class="title">
      <a>密保问题设置</a>
    </div>
    <div class="con-de"  >
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
            <select>
              <option value="" disabled selected hidden>请选择</option>
              <option >您最爱吃的美食是？</option>
              <option >您最爱的一本书是？</option>
              <option >最喜欢听的一首歌是？</option>
            </select>
          </div>
          <div class="group">
            <label class="answer">答案</label>
            <input type="text" v-model="answer1" id="ans1"  v-on:blur="change()"/>
            <span class="error"  v-show="!isAnswer"><div class="error-ipt">x</div> 请填写答案</span>
          </div>
          <div class="group">
            <label>问题二</label>
            <select>
              <option value="" disabled selected hidden>请选择</option>
              <option >您小时候的梦想是什么？</option>
              <option >您最好的朋友叫什么名字？</option>
              <option >您的初中学校是？</option>
            </select>
          </div>
          <div class="group">
            <label class="answer">答案</label>
            <input type="text" class="answer-test" v-model="answer2" id="ans2" v-on:blur="changeSecon()"/>
            <span class="error"  v-show="!isSecondAn"><div class="error-ipt">x</div> 请填写答案</span>
          </div>
          <div class="group">
            <label>问题三</label>
            <select>
              <option value="" disabled selected hidden>请选择</option>
              <option >您最喜欢的城市是？</option>
              <option >第一份工作的公司叫？</option>
              <option >您的qq邮箱是？</option>
            </select>
          </div>
          <div class="group">
            <label class="answer">答案</label>
            <input type="text" v-model="answer3" id="ans3" v-on:blur="changeThird()"/>
            <span class="error"  v-show="!isThirdAn"><div class="error-ipt">x</div> 请填写答案</span>
          </div>
          <div class="group">
            <button class="btn">确定</button>
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
      isThirdAn: true
    }
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
    margin-left: -120px;
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
