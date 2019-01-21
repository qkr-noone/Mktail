<template>
  <div class="con-wrap">
    <div class="back"></div>
    <div class="title">
      <a>收货地址</a>
    </div>
    <div class="con-de"  >
      <div class="con-item top">
        <p class="add"><button class="addBtn">新增收货地址</button> <span>新增收货地址 您已创建<span>3</span> 个收货地址，最多可创建20个</span></p>
        <div class="send">当前配送至
          <span class="sendAdd">中国大陆</span>
          <span class="changeAdd">切换></span>
        </div>
        <form>
          <div class="group">
            <label class="star">地址信息：</label>
            <select>
              <option value="" disabled selected hidden>请选择省/市/区/街道</option>
              <option >广东省</option>
              <option >广州市</option>
              <option >从化区</option>
            </select>
          </div>
          <div class="group detail">
            <label class="star">详细地址：</label>
            <textarea  type="text" placeholder="请选择详细地址信息，如道路，门牌号，小区，楼栋号，单元等信息" class="address"></textarea>
            <p class="detail-address">请填写详细地址</p>
          </div>
          <div class="group">
            <label>邮政编码：</label>
            <input type="text" placeholder="请填写邮政">
          </div>
          <div class="group">
            <label class="star receiver">收货人姓名：</label>
            <input type="text" placeholder="长度不超过15个字符">
          </div>
          <div class="group">
            <label class="star">手机号码：</label>
            <select class="select-phone">
              <option>中国大陆 &nbsp;&nbsp; +86</option>
              <option>中国香港 &nbsp;&nbsp; +86</option>
            </select>
            <input type="text" placeholder="电话号码和手机号必须一致" class="select-input">
          </div>
          <div class="group">
            <input type="checkbox" class="checkbox"/><span>设为默认收货地址</span>
          </div>
          <div class="group">
            <button class="btn">保存</button>
          </div>
        </form>
      </div>
      <div class="con-item middle">
        <div class="tab-nav">
          <ul>
            <li class="tab-item" @click="change(0)" :class="{tabactive :choose===0}">全部地址</li>
            <li class="tab-item"  @click="change(1)" :class="{tabactive :choose===1}">地址编辑</li>
            <li class="tab-item"  @click="change(2)" :class="{tabactive :choose===2}">地址删除</li>
          </ul>
        </div>
        <div class="middle-content">
          <div class="content-item" v-show="choose===0">
            <div class="address-info">
              <div class="info">
               <p>吴亦凡<span class="phone">15*******19</span></p>
                <hr>
                <p>广东省&nbsp;广州市&nbsp;番禺区全区<br><span class="home-detail"> 街口街东城路7号</span></p>
                <span class="default-address default-active">默认地址</span>
              </div>
            </div>
            <div class="address-info">
              <div class="info">
                <p>鹿晗<span class="phone">15*******19</span></p>
                <hr>
                <p>广东省&nbsp;广州市&nbsp;番禺区全区<br><span class="home-detail"> 街口街东城路7号</span></p>
                <span class="default-address">默认地址</span>
              </div>
            </div>
            <div class="address-info">
              <div class="info">
                <p>麦当劳<span class="phone">15*******19</span></p>
                <hr>
                <p>广东省&nbsp;广州市&nbsp;番禺区全区<br><span class="home-detail"> 街口街东城路7号</span></p>
                <span class="default-address">默认地址</span>
              </div>
            </div>
          </div>
          <div class="content-item" v-show="choose===1">
            <p>这是地址编辑</p>
          </div>
          <div class="content-item" v-show="choose===2">
            <p>这是地址删除</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      choose: 0
    }
  },
  methods: {
    change (val) {
      this.choose = val
    }
  }
}
</script>
<style scoped>
  @import '../../../assets/css/user/user-set.css';
  .con-wrap{
    background: #F4F4F4;
  }
  .top{
    height:470px;
    background: #FFFFFF;
    padding-left: 26px;
    padding-top: 14px;
    margin-bottom: 10px;
  }
  .con-item,.title{
    margin-left: 10px!important;
  }
  .title{
    background: #FFFFFF;
  }
  .top .addBtn {
    width:100px;
    height:30px;
    background:rgba(255,215,4,1);
    font-size:14px;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(46,46,46,1);
    margin-right: 20px;
  }
  .top .add span{
    font-size:12px;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(163,163,163,1);
  }
  .top .send{
    width:500px;
    height:30px;
    background:rgba(244,244,244,1);
    text-align: left;
    margin: 20px 0 10px  0;
    line-height: 30px;
    font-size:14px;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(115,115,115,1);
  }
  .send .sendAdd,.changeAdd{
    height:14px;
    font-size:14px;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(53,53,53,1);
  }
  .send .sendAdd{
    margin:0 293px 0 20px;
  }
  .top form{
    text-align: left;
  }
  .detail{
    height:50px !important;
  }
  .top form .group{
    margin-bottom: 20px;
    width:600px;
    position: relative;
    height:30px;
    line-height: 30px;
  }
  .top form .group input,select,.address{
    position: absolute;
    left:100px;
  }
  .address{
    box-sizing:border-box;
    width:405px;
    height:50px;
    padding-left: 11px;
    padding-right: 11px;
    padding-top: 5px;
  }
  .top form .group input{
    height:30px;
    width:405px;
    padding-left: 11px;
    padding-right: 11px;
    box-sizing:border-box;
    white-space:normal;
    line-height: 30px;
  }
  .top form .group label{
    position: absolute;
    right:510px;
    font-size:14px;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:#353535;
  }
  .top form .group select{
    height:30px;
    width:405px;
    padding-left: 11px;
  }
.group .detail-address{
  font-size:14px;
  font-family:SourceHanSansCN-Regular;
  font-weight:400;
  color:rgba(255,70,6,1);
  position: absolute;
  left:100px;
  top:44px;
}
  .receiver{
    position: absolute;
    right:495px !important;
    width:120px;
  }
  .select-phone{
    width:150px !important;
  }
  .select-input{
    width:250px !important;
    position: absolute;
    left:255px !important;
  }
  .group .checkbox{
    height:20px !important;
    width:20px !important;
    position: absolute;
    left: 100px!important;
    top:5px;
  }
  .group span{
    margin-left: 130px;
    font-size:14px;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:#353535;
  }
  .group .btn{
    width:55px;
    height:30px;
    background:rgba(254,133,4,1);
    font-size:14px;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(255,255,255,1);
    position: absolute;
    left: 100px;
  }
  .middle{
    height:281px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(227,227,227,1);
  }
  input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
    font-size:14px;
    font-family:SourceHanSansCN-Light;
    font-weight:300;
    color:rgba(163,163,163,1);
  }
  .middle .tab-nav{
    height:41px;
    background:rgba(247,247,247,1);
    text-align: left;
  }
  .middle .tab-item{
    display:inline-block;
    width:118px;
    height:41px;
    line-height: 41px;
    font-size:14px;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(135,135,135,1);
    text-align: center;
    border-right:1px solid  #E3E3E3;
  }
  .tab-nav ul li:not(:first-child){
    margin-left: -8px;
  }
 .tabactive{
   background: #FFFFFF;
 }
  .middle-content{
    height:239px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .middle .address-info{
    width:300px;
    height:170px;
    border:1px solid rgba(227,227,227,1);
    padding: 13px 8px 20px 11px;
    display: inline-block;
    margin-right: 15px;
    margin-left: 15px;
  }
  .middle .address-info .info{
    width:284px;
    height:154px;
    border:2px dashed  rgba(227,227,227,1);
    padding:20px 0 0 12px;
  }
  .middle .address-info .info .phone{
    margin-left: 15px;
  }
  .middle .address-info .info p{
    font-size:14px;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(53,53,53,1);
  }
  .middle .address-info .info .home-detail{
    font-size:14px;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(135,135,135,1);
  }
  .middle .address-info .info hr{
    margin:10px 7px 10px 2px;
    color:#E3E3E3;
    opacity: 0.2;
  }
  .info .default-address {
    text-align: right;
    font-size:14px;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(135,135,135,1);
    margin-left: 200px;
    margin-top: 30px;
  }
  .default-active{
    color:#FF4606 !important;
  }
</style>
