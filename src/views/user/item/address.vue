<template>
  <div class="con-wrap">
<<<<<<< HEAD
    <div class="title" id="addressSet">
      <a>收货地址</a>
    </div>
    <div class="con-de">
      <div class="con-item top">
        <p class="add"><button class="addBtn" @click="add">新增收货地址</button> <span>新增收货地址 您已创建<span>{{addressList.length}}</span> 个收货地址，最多可创建20个</span></p>
        <div class="send">当前配送至
          <span class="sendAdd">中国大陆</span>
          <!-- <span class="changeAdd">切换></span> -->
        </div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="收货人：" prop="username">
            <el-input v-model="ruleForm.username" placeholder="姓名"></el-input>
          </el-form-item>
          <el-form-item label="联系手机：" prop="mobile">
            <el-input v-model="ruleForm.mobile" placeholder="请填写正确的11位手机号码"></el-input>
          </el-form-item>
          <el-form-item label="所在地区：" prop="address"  class="select flow-addr">
              <i class="el-icon-arrow-down addr-down"></i>
              <div class="addr-box">
                <ul class="pro-box">
                  <li v-for="list in addrOptions" :key="list.id" :class="{'choose': addressOneId === list.provinceid}" @click="tabAddr(list.provinceid, list.province)">{{list.province}}</li>
                </ul>
                <ul class="city-box" v-if="addressOneId">
                  <li v-for="data in cityList" :key="data.id" :class="{'choose': addressTwoId === data.cityid}" @click="tabCity(data.city, data.cityid)">{{data.city}}</li>
                </ul>
                <ul class="county-box" v-if="addressTwoId">
                  <li v-for="data in countyList" :key="data.id" :class="{'choose': addressThreeId === data.areaid}" @click="tabCounty(data.area, data.areaid)">{{data.area}}</li>
                </ul>
              </div>
            <el-input v-model="ruleForm.address" placeholder="请选择省 请选择市 请选择区"></el-input>
          </el-form-item>
          <el-form-item label="详细地址:" prop="deAddress">
            <el-input v-model="ruleForm.deAddress" placeholder="乡镇、街道、小区、楼牌号等，无须重复填写省市区"></el-input>
          </el-form-item>
          <el-form-item label="邮政编码：" prop="code">
            <el-input v-model="ruleForm.code" placeholder="请填写邮政"></el-input>
          </el-form-item>
          <el-form-item label="标签:" prop="tag">
            <el-radio-group v-model="ruleForm.tag">
              <el-radio label="家"></el-radio>
              <el-radio label="公司"></el-radio>
              <el-radio label="学校"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="" prop="otherTag">
            <el-input v-model="ruleForm.otherTag"  placeholder="填写其他标签" class="otherTag"></el-input>
          </el-form-item>
          <el-form-item label="" prop="isDefault">
            <el-checkbox-group v-model="ruleForm.isDefault">
              <el-checkbox label="设为默认收货地址 设置后我们将在您购物时自动选中该收货地址" name="isDefault" class="isDefault"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-form>
        <div class="user-inf-push">
          <a href="javascript:;" @click="submitForm('ruleForm')">保存</a>
        </div>
=======
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
>>>>>>> remotes/origin/master
      </div>
      <div class="con-item middle">
        <div class="tab-nav">
          <ul>
<<<<<<< HEAD
            <li class="tab-item tabactive">全部地址</li>
          </ul>
        </div>
        <div class="middle-content">
          <div class="content-item">
            <div class="address-info" v-for="list in addressList" :key="list.id">
              <div class="info">
               <p>{{list.contact}}<span class="phone">{{list.mobile}}</span></p>
                <hr>
                <p>{{list.province}}&nbsp;{{list.city}}&nbsp;{{list.area}}<br><span class="home-detail">{{list.address}}</span></p>
                <div class="default-address">
                  <a class="add-change">
                    <span @click="update(list)" v-scroll-to="'#addressSet'">编辑</span>
                    <span @click="del(list.id)">删除</span>
                  </a>
                  <span class="pointer" :class="{'default-active': list.isDefault==='1'}" @click="setDefault(list, this)">默认地址</span>
                </div>
              </div>
            </div>
          </div>
=======
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
>>>>>>> remotes/origin/master
        </div>
      </div>
    </div>
  </div>
</template>
<script>
<<<<<<< HEAD
// import lodash from 'lodash' // 函数防抖
export default {
  data () {
    return {
      addressList: [],
      ruleForm: {
        username: '',
        mobile: '',
        code: '',
        address: '',
        deAddress: '',
        tag: '',
        otherTag: '',
        isDefault: false
      },
      rules: {
        username: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          { min: 1, max: 40, message: '长度在 1 到 40 个字符', trigger: 'blur' }
        ],
        mobile: [
          { required: true, message: '请输入联系手机：', trigger: 'blur' },
          { min: 11, max: 11, message: '请输入正确手机号', trigger: 'blur' }
        ],
        code: [
          { required: false, message: '请输入备用手机号', trigger: 'blur' },
          { min: 0, max: 11, message: '请输入正确手机号', trigger: 'blur' }
        ],
        address: [
          { required: true, message: '请选择地区', trigger: 'blur' },
          { min: 1, max: 60, message: '长度在 1 到 60 个字符', trigger: 'blur' }
        ],
        deAddress: [
          { required: true, message: '请输入详细地址', trigger: 'blur' },
          { min: 1, max: 90, message: '长度在 1 到 90 个字符', trigger: 'blur' }
        ],
        otherTag: [
          { required: false, message: '请输入标签', trigger: 'blur' },
          { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
        ]
      },
      addrOptions: [],
      cityList: [],
      countyList: [],
      addressOneId: '',
      addressTwoId: '',
      addressThreeId: '',
      isUpdate: 0,
      tem: []
    }
  },
  mounted () {
    this.API.addressListByUser({userId: this.$cookies.get('user-key')}).then(res => {
      this.addressList = res
    })
    this.API.allProvince().then(res => {
      this.addrOptions = res
    })
  },
  methods: {
    del (id) { // {ids: id, idt}
      this.$confirm('确定删除该地址吗, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => this.API.addressDelete({ids: id}).then(res => {
        this.$notify.success({
          title: '成功',
          message: '地址已删除'
        })
        this.API.addressListByUser({userId: this.$cookies.get('user-key')}).then(res => {
          this.addressList = res
        })
      })).catch(() => {
        this.$notify.info({
          title: '取消',
          message: '已取消删除'
        })
      })
    },
    update (item) {
      this.addrInit()
      this.$set(this.tem, 0, {addr: item.province, id: item.provinceId})
      this.$set(this.tem, 1, {addr: item.city, id: item.cityId})
      this.$set(this.tem, 2, {addr: item.area, id: item.townId})
      this.ruleForm.address = ''
      this.tem.forEach(ele => {
        this.ruleForm.address += ele.addr
      })
      this.ruleForm.mobile = item.mobile
      this.ruleForm.deAddress = item.address
      this.ruleForm.username = item.contact
      item.isDefault === '1' ? this.ruleForm.isDefault = true : this.ruleForm.isDefault = false
      this.ruleForm.otherTag = item.alias
      this.ruleForm.code = item.postCode
      this.isUpdate = item.id
    },
    submitForm (formName) {
      if (this.tem.length < 3) {
        this.$notify.warning({
          title: '提示',
          message: '所在地区信息选择不全'
        })
        return
      }
      this.$refs[formName].validate(valid => {
        if (valid) {
          let address = {
            userId: this.$cookies.get('user-key'),
            provinceId: this.tem[0].id,
            cityId: this.tem[1].id,
            townId: this.tem[2].id,
            mobile: this.ruleForm.mobile,
            address: this.ruleForm.deAddress,
            contact: this.ruleForm.username,
            isDefault: this.ruleForm.isDefault ? '1' : '0',
            postCode: this.ruleForm.code,
            alias: this.ruleForm.otherTag || this.ruleForm.tag
          }
          let addApi = this.isUpdate ? 'addressUpdate' : 'addressAdd'
          if (!this.isUpdate) {
            // 判断地址是否已满20个
            if (this.addressList.length >= 20) {
              this.$notify.warning({
                title: '提示',
                message: '地址数量已满20条，请在地址管理删除，再重新添加哦'
              })
              return
            }
            Object.assign(address, {createDate: this.formatDate(new Date())})
          }
          address = this.isUpdate ? Object.assign(address, {id: this.isUpdate}) : address
          this.API[addApi](address).then(res => {
            if (res.success === false) {
              this.$notify.error({
                title: '错误',
                message: '设置地址失败'
              })
              return false
            }
            this.$notify.success({
              title: '成功',
              message: '设置地址成功'
            })
            this.addrInit()
            this.API.addressListByUser({userId: this.$cookies.get('user-key')}).then(rtn => {
              this.addressList = rtn
            })
          })
        } else {
          this.$notify.error({
            title: '错误',
            message: '输入信息有误'
          })
          return false
        }
      })
    },
    setDefault (item) { // Q. 设置地址项 默认地址
      this.$confirm('确定设置该项地址为默认地址, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let address = {
          id: item.id,
          spareMobile: item.spareMobile,
          notes: item.notes,
          userId: item.userId,
          provinceId: item.provinceId,
          cityId: item.cityId,
          townId: item.townId,
          mobile: item.mobile,
          address: item.address,
          contact: item.contact,
          isDefault: '1',
          postCode: item.postCode,
          alias: item.alias
        }
        this.API.addressUpdate(address).then(res => {
          console.log(res)
          if (res.success === false) return
          this.$notify.success({
            title: '成功',
            message: '设置地址成功'
          })
        }).then(() => {
          this.API.addressListByUser({userId: item.userId}).then(rtn => {
            this.addressList = rtn
          })
        })
      })
    },
    tabAddr (provinceid, province) {
      this.tem = []
      this.$set(this.tem, 0, {addr: province, id: provinceid})
      this.addressTwoId = ''
      this.addressThreeId = ''
      this.addressOneId = provinceid
      this.API.allCity({proviceId: provinceid}).then(res => {
        this.cityList = res
      })
      this.ruleForm.address = ''
      this.ruleForm.address = this.tem[0].addr
      this.tem.forEach((list, index) => {
        if (index > 0) this.$delete(this.tem, index)
      })
    },
    tabCity (city, cityid) {
      this.$set(this.tem, 1, {addr: city, id: cityid})
      this.addressTwoId = cityid
      this.addressThreeId = ''
      this.API.allAreas({cityId: cityid}).then(res => {
        this.countyList = res
      })
      this.ruleForm.address = ''
      this.tem.forEach((list, index) => {
        if (index > 1) this.$delete(this.tem, index)
        else this.ruleForm.address += list.addr
      })
    },
    tabCounty (area, areaid) {
      this.$set(this.tem, 2, {addr: area, id: areaid})
      this.addressThreeId = areaid
      this.ruleForm.address = ''
      this.tem.forEach(list => {
        this.ruleForm.address += list.addr
      })
    },
    // 格式化时间 2019-01-22 17:24:08
    formatDate (date) {
      let y = date.getFullYear()
      let m = date.getMonth() + 1
      m = m < 10 ? '0' + m : m
      let d = date.getDate()
      d = d < 10 ? ('0' + d) : d
      let h = date.getHours()
      h = h < 10 ? ('0' + h) : h
      let mi = date.getMinutes()
      mi = mi < 10 ? ('0' + mi) : mi
      let s = date.getSeconds()
      s = s < 10 ? ('0' + s) : s
      return y + '-' + m + '-' + d + ' ' + h + ':' + mi + ':' + s
    },
    // 初始化
    addrInit () {
      this.addressOneId = ''
      this.addressTwoId = ''
      this.addressThreeId = ''
      this.ruleForm.address = ''
      this.ruleForm.mobile = ''
      this.ruleForm.deAddress = ''
      this.ruleForm.username = ''
      this.ruleForm.isDefault = false
      this.ruleForm.code = ''
      this.ruleForm.tag = ''
      this.ruleForm.otherTag = ''
      this.isUpdate = 0
    },
    add () {
      this.addrInit()
      this.$message.success({
        message: '请在下方表格输入新增信息'
      })
=======
export default {
  data () {
    return {
      choose: 0
    }
  },
  methods: {
    change (val) {
      this.choose = val
>>>>>>> remotes/origin/master
    }
  }
}
</script>
<style scoped>
<<<<<<< HEAD
  .con-wrap {
    position: relative;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
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
    margin-top: 10px;
  }
  .title a {
    border:1px solid rgba(244,244,244,1);
    padding: 7px 20px;
    font-size: 24px;
    line-height: 24px;
    font-weight:bold;
    color: #000000;
  }
  .pointer {
    cursor: pointer;
  }
  .demo-ruleForm{
    width: 580px;
  }
  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
    font-size: 30px;
    color: rgba(231,22,0,1);
    text-align: center;
    line-height: 40px;
    background-color: rgba(238, 238, 238, 0.7);
    cursor: pointer;
  }
  .user-inf-push {
    margin-top: 23px;
    width: 580px;
  }
  .user-inf-push a {
    width:65px;
    height:35px;
    background:rgba(255,170,0,1);
    border-radius:3px;
    line-height: 35px;
    text-align: center;
    font-size: 16;
    color: #FFFFFF;
  }
  .el-checkbox-group, .el-radio-group {
    width: 100%;
    text-align: left;
  }
  .select-con{
    line-height: 27px;
    font-size: 12px;
  }
  .flow-addr {
    position: relative;
  }
  .flow-addr ul>li.choose {
    color: blue;
  }
  .addr-down {
    position: absolute;
    right: 15px;
    top: 12px;
    color: red;
    z-index: 20;
    font-size: 20px;
    line-height: 20px;
  }
  .addr-box {
    height: 0;
    overflow: hidden;
    position: absolute;
    background-color: #fff;
    z-index: 10;
    top: 40px;
    left: 0;
  }
  .addr-box .pro-box, .city-box, .county-box {
    min-width: 126px;
    height: 200px;
    font-size: 12px;
    border: 1px solid #ddd;
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
  }
  .flow-addr .addr-box ul.pro-box li, .flow-addr .addr-box ul.city-box li, .flow-addr .addr-box ul.county-box li {
    text-align: left;
    cursor: pointer;
    line-height: 28px;
    height: 28px;
    padding: 0 10px;
  }
  .flow-addr .el-form-item__content:hover .addr-box{
    height: auto;
    display: flex;
  }
=======
  @import '../../../assets/css/user/user-set.css';
>>>>>>> remotes/origin/master
  .con-wrap{
    background: #F4F4F4;
  }
  .top{
<<<<<<< HEAD
    background: #FFFFFF;
    padding:20px 0px 40px 26px;
=======
    height:470px;
    background: #FFFFFF;
    padding-left: 26px;
    padding-top: 14px;
>>>>>>> remotes/origin/master
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
<<<<<<< HEAD
    cursor: pointer;
=======
>>>>>>> remotes/origin/master
  }
  .top .add span{
    font-size:12px;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(163,163,163,1);
  }
  .top .send{
<<<<<<< HEAD
    width:580px;
=======
    width:500px;
>>>>>>> remotes/origin/master
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
<<<<<<< HEAD
  .middle{
=======
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
>>>>>>> remotes/origin/master
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
<<<<<<< HEAD
    display: flex;
=======
    height:239px;
    display: flex;
    justify-content: center;
>>>>>>> remotes/origin/master
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
<<<<<<< HEAD
    float: left;
  }
  div.address-info:nth-child(n+4){
    margin-top: 20px;
  }
  .middle .address-info .info{
    width:272px;
    height:154px;
    border:2px dashed  rgba(227,227,227,1);
    padding:20px 12px 0 12px;
=======
  }
  .middle .address-info .info{
    width:284px;
    height:154px;
    border:2px dashed  rgba(227,227,227,1);
    padding:20px 0 0 12px;
>>>>>>> remotes/origin/master
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
<<<<<<< HEAD
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
  }
  .add-change{
    color: rgba(135,135,135,1);
  }
  .add-change >span{
    width:45px;
    text-align: center;
    cursor: pointer;
  }
  .add-change >span+span{
    margin-left: 10px;
=======
    margin-left: 200px;
    margin-top: 30px;
>>>>>>> remotes/origin/master
  }
  .default-active{
    color:#FF4606 !important;
  }
</style>
