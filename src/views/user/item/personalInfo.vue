<template>
  <div class="con-wrap">
    <div class="title">
      <a>个人资料</a>
    </div>
    <div class="con-de"  >
      <div class="con-item user-info">
        <div class="head">
          <img src="static/img/user/user_headportrait.png"/>
          <div class="editor">编辑头像</div>
        </div>
        <div class="info">
          <p>用户名： MK_6e409e353bc3e</p>
          <p> <a>立即查看</a>账户安全状态</p>
        </div>
      </div>
      <hr>
      <div class="con-item">
        <form>
          <div class="group">
            <div class="group-lable">
              <label class="start">真实姓名:</label>
            </div>
            <div class="group-item">
              <input/>
            </div>
          </div>
          <div class="group">
            <div class="group-lable " >
              <label class="start">昵称:</label>
            </div>
            <div class="group-item">
              <input/>
            </div>
          </div>
          <div class="group">
            <div class="group-lable shift">
              <label>性别：</label>
            </div>
            <div class="group-item sex">
              <input name="sex" type="radio" value="1" />男
              <input name="sex" type="radio" value="0" />女
              <input name="sex" type="radio" value="2 " />保密
            </div>
          </div>
          <div class="group">
            <div class="group-lable">
              <label>生日：</label>
            </div>
            <div class="group-item">
              <select>
                <option value="" disabled selected hidden>请选择</option>
                <option >1997</option>
                <option >1995</option>
                <option >1994</option>
              </select> 年
              <select>
                <option value="" disabled selected hidden>请选择</option>
                <option >12</option>
                <option >11</option>
                <option >10</option>
              </select> 月
              <select>
                <option value="" disabled selected hidden>请选择</option>
                <option >01</option>
                <option >02</option>
                <option >03</option>
              </select> 日
            </div>
          </div>
          <div class="group">
            <div class="group-lable">
              <label class="start">手机：</label>
            </div>
            <div class="group-item">
              <span>154*******20</span>
              <a>修改</a>
            </div>
          </div>
          <div class="group">
            <div class="group-lable">
              <label>邮箱：</label>
            </div>
            <div class="group-item">
              <span>您的账号还没有绑定邮箱</span>
              <a>立即绑定</a>
            </div>
          </div>
          <div class="group">
            <div class="group-lable">
              <label>居住地址：</label>
            </div>
            <div class="group-item">
              <select>
                <option value="" disabled selected hidden>请选择</option>
                <option >广西</option>
                <option >广东</option>
                <option >湖南</option>
              </select> 省
              <select>
                <option value="" disabled selected hidden>请选择</option>
                <option >南宁</option>
                <option >广州</option>
                <option >邵阳</option>
              </select> 市
              <select>
                <option value="" disabled selected hidden>请选择</option>
                <option >青秀</option>
                <option >从化</option>
                <option ></option>
              </select> 区
              <select>
                <option value="" disabled selected hidden>请选择</option>
                <option >01</option>
                <option >02</option>
                <option >03</option>
              </select> 乡镇
            </div>
          </div>
          <div class="group">
            <div class="group-item">
              <input type="text" placeholder="街道名称或者小区名称" class="street-name" >
            </div>
          </div>
          <div class="group">
            <div class="group-lable">
              <label class="start">验证码：</label>
            </div>
            <div class="group-item ">
              <div class="test">
                <div class="arrow">>></div>
                <div class="text-right">请按住滑块拖动到最右边</div>
              </div>
            </div>
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
    return {}
  }
}

</script>
<style scoped>
  @import '../../../assets/css/user/user-set.css';
  .con-wrap {
    position: relative;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
  }
  .user-info {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top:68px;
    margin-left: 20px;
  }
  .con-item .head{
    width:95px;
    height:95px;
    border:1px solid rgba(84,84,84,1);
    border-radius:50%;
    margin-right: 30px;
    overflow: hidden;
    position: relative;
  }
  .con-item .head img{
    width:120px;
    height:65px;
    margin: 20px 0px 0 -3px;
  }
  .con-item .head .editor{
    width:98px;
    height:30px;
    background:rgba(34,34,34,1);
    opacity:0.56;
    line-height: 30px;
    font-size:12px;
    color:rgba(255,255,255,1);
    position: absolute;
    bottom: 0;
  }
  .con-item .info p{
    margin: 8px 0 8px  0;
    font-size:14px;
    color:rgba(135,135,135,1);
  }
  .con-item .info a{
    color: #829FDF;
  }
 .con-de hr{
    display: block;
    width:1085px;
    background:rgba(244,244,244,1);
   opacity: 0.2;
    position: absolute;
    top:185px;
  }
.con-item form{
  position: absolute;
  left:31px;
  top:199px;
}
  .con-item .group{
    height: 40px;
    line-height: 40px;
    width:470px;
    text-align: left;
    margin-top: 10px;
    position: relative;
    font-family:SimSun;
    font-weight:400;
    color:rgba(98,98,98,1);
    font-size:14px;
  }
  .group .group-lable{
    display: inline;
    margin-right: 10px;
    height: 40px;
    position: absolute;
    right:380px;
  }
 .group .group-item{
   display: inline;
   position: absolute;
   left:90px;
   line-height: 40px;
  }
  .group .group-item a{
    color:#829FDF;
    margin-left: 5px;
  }
  .group .group-item input,select{
    height:30px;
  }
  .group-item .street-name{
    width:386px;
    height:30px;
  }
  .group-item .text{
    height:40px;
    width:386px;
  }
  .group .sex input{
    height:15px;
    margin-right: 10px;
  }
  .group .btn{
    width:68px;
    height:30px;
    background:rgba(254,133,4,1);
    border-radius:3px;
    font-size:16px;
    font-family:SourceHanSansCN-Light;
    font-weight:300;
    color:rgba(255,255,255,1);
    float: right;
  }
  .test{
    height:40px;
    width:386px;
  }
</style>
