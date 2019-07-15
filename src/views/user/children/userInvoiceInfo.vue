<template>
  <div class="con-wrap invoice " @click="hidePanel">
    <div :class="{point :panelShow1 === true}">
    </div>
    <div :class="{point1 :panelShow2 === true}">
    </div>
    <P class="userPageTitle">我的发票</P>
    <p class="userPageTab">
      <span :class="{pageTabActive:plainInvoice===true}" @click="changeTab(true)">普通发票抬头</span>
      <span :class="{pageTabActive:plainInvoice===false}"  @click="changeTab(false)">增值税专用发票资质</span>
    </p>
    <div class="addInvoice" v-show="plainInvoice===true" @click="changeShow()">新增发票抬头</div>
    <div class="addInvoice"  v-show="plainInvoice===false" @click="changeShow1()">新增专票资质</div>
    <div class="elastic-frame1" v-if=" panelShow1 === true"  id="myPanel1">
      <p class="frame-title">新增发票抬头</p>
      <p class="addInvoiceRise">
        <label>新增发票抬头:</label>
        <input/>
      </p>
<<<<<<< HEAD
      <el-upload
        class="upload-demo"
        ref="upload"
        action="http://192.168.1.37:8082/shop/upload/uploadFile"
        :headers="header"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="fileList"
        :auto-upload="false">
        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
=======
>>>>>>> remotes/origin/master
      <p class=" operate">
        <button class="btn-cancel" @click="cancle">取消</button>
        <button class="btn-ensure">确定</button>
      </p>
    </div>
    <div class="elastic-frame2" v-if=" panelShow2 === true"  id="myPanel2">
      <p class="frame-title">新增专票资质</p>
      <form>
        <div class="group">
          <lable class="star item-title">公司名称：</lable>
          <input type="text" placeholder="请输入公司名称"/>
        </div>
        <div class="group">
          <lable class="star item-title">税号：</lable>
          <input type="text" placeholder="请输入税号"/>
        </div>
        <div class="group">
          <lable class="star item-title">开户银行名称：</lable>
          <input type="text" placeholder="请输入开户银行名称"/>
        </div>
        <div class="group">
        <lable class="star item-title">开户银行账号：</lable>
        <input type="text" placeholder="请输入开户银行账号"/>
      </div>
        <div class="group">
          <lable class="star item-title" >注册地址：</lable>
          <input type="text" placeholder="请输入注册地址"/>
        </div>
        <div class="group">
          <lable class="star item-title">注册电话：</lable>
          <input type="text" placeholder="请输入注册电话"/>
        </div>
        <div class="group">
          <button class="btn-cancel" @click="cancle">取消</button>
          <button class="btn-ensure">保存</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      plainInvoice: true,
      panelShow1: false,
<<<<<<< HEAD
      panelShow2: false,
      fileList: [],
      header: {
        Authorization: 'MkTail-eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiYWlkdTEyMyIsImV4cCI6MTU4NjQ3ODk0NiwiaWF0IjoxNTU0OTQyOTQ2fQ.Nk45AVRw9b2HZOP_FZGb8SJKda6PXFzWFzLFpGJikEDdGRK2VGyne4Bs3jsMeeKJAJu9S9nQa2vMxEldebePDg'
      }
    }
  },
  methods: {
    handleRemove (file) {
      console.log(file, this.fileList)
    },
    handlePreview (file) {
      console.log(file)
    },
    submitUpload () {
      console.log(this.fileList)
      this.$refs.upload.submit()
    },
=======
      panelShow2: false
    }
  },
  methods: {
>>>>>>> remotes/origin/master
    changeTab (val) {
      this.plainInvoice = val
    },
    hidePanel: function (event) {
      let sp = document.getElementById('myPanel1')
      let sp1 = document.getElementById('myPanel2')
      if (sp) {
        if (!sp.contains(event.target)) {
          this.panelShow1 = false
        }
      }
      if (sp1) {
        if (!sp1.contains(event.target)) {
          this.panelShow2 = false
        }
      }
    },
    changeShow () {
      this.panelShow1 = true
    },
    changeShow1 () {
      this.panelShow2 = true
    },
    cancle () {
      this.panelShow1 = false
      this.panelShow2 = false
    }
  }
}
</script>
<style scoped>
  @import "../../../assets/css/user/user-homePage.css";
  .star:before{
    content: "*";
    color:#FF6641;
    margin-right:7px;
  }
  .con-wrap{
    margin-left: -2px;
    height:800px;
    font-weight:400;
    position: relative;
  }
  .addInvoice{
    width:100px;
    height:40px;
    background:rgba(255,70,6,1);
    font-size:14px;
    color:rgba(255,255,255,1);
    line-height: 40px;
    margin:20px 0 0 32px;
  }
  .elastic-frame1{
    width:400px;
    height:160px;
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 7px 0px rgba(59,59,59,0.34);
    position: absolute;
    top:200px;
    left: 300px;
  }
  .frame-title{
    height:40px;
    background:rgba(244,244,244,1);
    line-height: 40px;
    padding-left: 22px;
    font-size:16px;
    color:rgba(53,53,53,1);
    margin-bottom: 20px;
  }
  .addInvoiceRise label{
    margin:0 5px 0 22px;
    font-size:14px;
    color:rgba(135,135,135,1);
  }
  .addInvoiceRise input{
    width:200px;
    height:30px;
    border:1px solid rgba(227,227,227,1);
    border-radius:3px;
    margin-bottom: 20px;
  }
  .operate{
    padding-left: 213px;
  }
  .operate button,.group button{
    width:70px;
    height:30px;
    line-height: 30px;
    border-radius:2px;
    font-size:14px;
    margin-right: 5px;
  }
  .btn-cancel{
    background:rgba(244,244,244,1);
    border:1px solid rgba(227,227,227,1);
    color:rgba(98,98,98,1);
  }
  .btn-ensure{
    background:rgba(255,70,6,1) ;
    hieight:29px !important;
    color:rgba(255,255,255,1);
  }
  .point{
    position: fixed;
    top: 135px;
    right: 0;
    left: 0;
    height: 65vh;
    background:rgba(0,0,0,1);
    opacity:0.06;
  }
  .point1{
    position: fixed;
    top: 135px;
    right: 0;
    left: 0;
    height: 80vh;
    background:rgba(0,0,0,1);
    opacity:0.06;

  }
  .elastic-frame2{
    width:800px;
    height:420px;
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 7px 0px rgba(59,59,59,0.34);
    position: absolute;
    top:100px;
    left:145px;
  }
  .elastic-frame2 .group{
    margin-top: 20px;
  }
  .elastic-frame2 input{
    width:500px;
    height:30px;
    border:1px solid rgba(227,227,227,1);
    padding-left: 10px;
  }
  .group .item-title{
    display: inline-block;
    font-size:14px;
    color: #878787;
    width:130px;
    text-align: right;
  }
</style>
<<<<<<< HEAD
<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
=======
>>>>>>> remotes/origin/master
