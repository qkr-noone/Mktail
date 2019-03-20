<template>
  <div class="con-wrap">
    <div class="title">
      <a>个人资料</a>
    </div>
    <div class="con-de"  >
      <div class="con-item user-info">
        <div class="head" v-bind:style="{backgroundImage:'url('+ userInfo.headPic || 'static/img/user/user_headportrait.png' +')'}">
          <div class="editor" @click="editHeadImg">编辑头像</div>
        </div>
        <div class="info">
          <p>用户名： {{userInfo.nickName}}</p>
          <p> <a>立即查看</a>账户安全状态</p>
        </div>
      </div>
      <hr>
      <div class="con-item">
        <form @submit.prevent>
          <div class="group">
            <div class="group-lable">
              <label class="start">真实姓名:</label>
            </div>
            <div class="group-item">
              <input v-model="userInfo.realName"/>
            </div>
          </div>
          <div class="group">
            <div class="group-lable " >
              <label class="start">昵称:</label>
            </div>
            <div class="group-item">
              <input v-model="userInfo.nickName"/>
            </div>
          </div>
          <div class="group">
            <div class="group-lable shift">
              <label>性别：</label>
            </div>
            <div class="group-item sex">
              <input name="sex" type="radio" v-model="userInfo.sex" value="1" :checked="userInfo.sex === 1"/>男
              <input name="sex" type="radio" v-model="userInfo.sex" value="2" :checked="userInfo.sex === 2"/>女
              <input name="sex" type="radio" v-model="userInfo.sex" value="3" :checked="userInfo.sex === 3"/>保密
            </div>
          </div>
          <div class="group">
            <div class="group-lable">
              <label>生日：</label>
            </div>
            <div class="group-item">
              <el-date-picker
                v-model="userInfo.birthday"
                :clearable=false
                type="date"
                placeholder="选择日期"
                format="yyyy 年 MM 月 dd 日"
                value-format="timestamp">
              </el-date-picker>
            </div>
          </div>
          <div class="group">
            <div class="group-lable">
              <label class="start">手机：</label>
            </div>
            <div class="group-item">
              <div v-if="!isChangePhone">
                <span>{{userInfo.phone}}</span>
                <a @click="isChangePhone = true">修改</a>
              </div>
              <div v-else>
                <div style="float: left;">
                  <input v-model="userInfo.phone"/>
                </div>
              </div>
            </div>
          </div>
          <div class="group">
            <div class="group-lable">
              <label>邮箱：</label>
            </div>
            <div v-if="!userInfo.email&&!isChangeEmail" class="group-item">
              <span>您的账号还没有绑定邮箱</span>
              <a @click="isChangeEmail = true">立即绑定</a>
            </div>
            <div v-else-if="!userInfo.email&&isChangeEmail" class="group-item">
              <input v-model="userInfo.email"/>
              <!-- <a @click="isChangeEmail = false">取消邮箱绑定</a> -->
            </div>
            <div v-else-if="userInfo.email&&!isChangeEmail" class="group-item">
              <span>{{userInfo.email}}</span>
              <a @click="isChangeEmail = true">修改邮箱绑定</a>
            </div>
            <div v-else-if="userInfo.email&&isChangeEmail" class="group-item">
              <input v-model="userInfo.email"/>
              <!-- <a @click="isChangeEmail = false">取消邮箱绑定</a> -->
            </div>
          </div>
          <div class="group" style="width: auto">
            <div class="group-lable">
              <label>居住地址：</label>
            </div>
            <div class="group-item" style="display: flex; flex-wrap: nowrap;">
              <el-select v-model="temVal0" placeholder="请选择" size="mini" style="width: 100px;flex-shrink: 0">
                <el-option
                  v-for="item in addrOptions"
                  :key="item.id"
                  :label="item.province"
                  :value="item.province"
                  @click.native="tabAddr(item.provinceid)">
                </el-option>
              </el-select> 省
              <el-select v-model="temVal1" placeholder="请选择" size="mini" style="max-width: 230px;flex-shrink: 0">
                <el-option
                  v-for="list in cityList"
                  :key="list.id"
                  :label="list.city"
                  :value="list.city"
                  @click.native="tabCity(list.cityid)">
                </el-option>
              </el-select> 市
              <el-select v-model="temVal2" placeholder="请选择" size="mini" style="max-width: 230px; flex-shrink: 0">
                <el-option
                  v-for="list in countyList"
                  :key="list.id"
                  :label="list.area"
                  :value="list.area"
                  @click.native="tabCounty(list.areaid)">
                </el-option>
              </el-select> 区
            </div>
          </div>
          <div class="group">
            <div class="group-item">
              <input type="text" placeholder="乡镇、街道、小区、楼牌号等" class="street-name" maxlength="50" v-model="temVal">
            </div>
          </div>
          <div class="group">
            <div class="group-lable">
              <label class="start">验证码：</label>
            </div>
            <div class="group-item ">
              <div class="test">
                <drag-verify
                  :width="390"
                  :height="40"
                  handlerIcon='el-icon-d-arrow-right'
                  successIcon='el-icon-success'
                  text="请将滑块拖动到右侧"
                  success-text="验证成功"
                  background="#E3E3E3"
                  progress-bar-bg="#2ACBF8"
                  text-size="14px"
                  :circle="false"
                  ref="Verify">
                </drag-verify>
              </div>
            </div>
          </div>
          <div class="group">
            <button class="btn" @click="submit">确定</button>
          </div>
        </form>
      </div>
    </div>
    <div class="full-path" v-if="isFullUserHead">
      <div class="full-box">
        <div class="head-left">
          <el-upload
            class="avatar-uploader"
            accept="image/png, image/jpeg, image/gif, image/jpg"
            action="http://192.168.1.40:8083/personData/personData/uploadFile"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <label class="head-choose">选择你要上传的头像</label>
          </el-upload>
          <p class="hc-tip">仅支持JPG、GIF、PNG、JPEG格式，文件小于4M</p>
          <div class="hc-img">
            <vueCropper ref="cropper"
              :img="userImageUrl"
              :canScale="false"
              :autoCrop="true"
              :canMove="false"
              :fixedBox="true"
              :autoCropWidth="150"
              :autoCropHeight="150"
              :fixed="true"
              mode="cover"
              @realTime="realTime"
              >
            </vueCropper>
          </div>
          <!-- <img :src="userImageUrl"> -->
          <button class="head-save" @click="userHeadSave">保存</button>
        </div>
        <div class="head-right">
          <h5 class="hr-title">效果预览</h5>
          <p class="hc-tip hr-tip">你上传的图片会自动生成以下尺寸，请注意尺寸的头像是否清晰</p>
          <div class="hr-box"> <!-- v-bind:style="{backgroundImage:'url('+ newImageUrl +')'}" -->
            <div class="show-preview" :style="{'width': previews.w + 'px', 'height': previews.h + 'px',  'overflow': 'hidden'}">
              <div :style="previews.div">
                <img :src="userImageUrl" :style="previews.img">
              </div>
            </div>
          </div>
          <p class="hc-tip hr-size">头像预览150*150像素</p>
        </div>
        <div class="head-close">
          <i class="el-icon-close" @click="isFullUserHead = false"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import dragVerify from 'vue-drag-verify'
export default {
  data () {
    return {
      userInfo: {},
      isChangePhone: false,
      isChangeEmail: false,
      addrOptions: [],
      cityList: [],
      countyList: [],
      currentAddress: [],
      userImageUrl: '',
      isFullUserHead: false,
      newImageUrl: '',
      previews: {}
    }
  },
  components: { dragVerify },
  computed: {
    temVal: {
      // 回调函数 当需要读取当前属性值是执行，根据相关数据计算并返回当前属性的值
      get () {
        let tem = ''
        if (this.currentAddress.length > 0 && this.currentAddress[3].hasOwnProperty('addr')) {
          tem = this.currentAddress[3].addr
        }
        return tem
      },
      // 监视当前属性值的变化，当属性值发生变化时执行，更新相关的属性数据, val就是temVal的最新属性值
      set (val) {
        this.tem = val
        this.currentAddress[3].addr = val
      }
    },
    temVal0: {
      get () {
        let tem = ''
        if (this.currentAddress.length > 0 && this.currentAddress[0].hasOwnProperty('addr')) {
          tem = this.currentAddress[0].addr
        }
        return tem
      },
      set (val) {
        this.tem = val
        this.currentAddress[0].addr = val
      }
    },
    temVal1: {
      get () {
        let tem = ''
        if (this.currentAddress.length > 0 && this.currentAddress[1].hasOwnProperty('addr')) {
          tem = this.currentAddress[1].addr
        }
        return tem
      },
      set (val) {
        this.tem = val
        this.currentAddress[1].addr = val
      }
    },
    temVal2: {
      get () {
        let tem = ''
        if (this.currentAddress.length > 0 && this.currentAddress[2].hasOwnProperty('addr')) {
          tem = this.currentAddress[2].addr
        }
        return tem
      },
      set (val) {
        this.tem = val
        this.currentAddress[2].addr = val
      }
    }
  },
  mounted () {
    this.infoInit()
  },
  methods: {
    editHeadImg () {
      this.isFullUserHead = true
    },
    handleAvatarSuccess (res, file) {
      this.userImageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/gif' || file.type === 'image/jpg'
      const isLt2M = file.size / 1024 / 1024 < 4
      if (!isJPG) {
        this.$message.error('上传头像图片仅支持JPG、GIF、PNG、JPEG格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 4MB!')
      }
      return isJPG && isLt2M
    },
    realTime (data) {
      this.previews = data
    },
    userHeadSave () {
      // 获取截图的base64 数据
      this.$refs.cropper.getCropData((data) => {
        console.log(data)
      })
      // 获取截图的blob数据
      this.$refs.cropper.getCropBlob((data) => {
        console.log('截图的blob:', data.type.split('/')[1])
        let fd = new FormData()
        fd.append('file', data)
        this.API.userUploadBlodFlow(fd, data.type.split('/')[1]).then(res => {
          console.log(res, 10000)
        })
        // Object.assign(data, {
        //   preview: URL.createObjectURL(data)
        // })
        this.newImageUrl = data.preview
      })
      this.userInfo.headPic = this.userImageUrl
      this.isFullUserHead = false
    },
    // 切换省，显示市列表
    tabAddr (provinceid) {
      this.currentAddress[0].id = provinceid
      this.currentAddress[1].addr = ''
      this.currentAddress[1].id = ''
      this.currentAddress[2].addr = ''
      this.currentAddress[2].id = ''
      this.API.allCity({proviceId: provinceid}).then(res => {
        this.cityList = res
        this.cityList.forEach((list, index) => {
          if (this.currentAddress[1].addr === list.city) {
            this.$set(this.currentAddress[1], 'id', list.cityid)
          }
        })
      })
    },
    // 切换市
    tabCity (cityid) {
      this.currentAddress[1].id = cityid
      this.currentAddress[2].addr = ''
      this.currentAddress[2].id = ''
      this.API.allAreas({cityId: cityid}).then(res => {
        this.countyList = res
        this.countyList.forEach((list, index) => {
          if (this.currentAddress[2].addr === list.area) {
            this.$set(this.currentAddress[2], 'id', list.areaid)
          }
        })
      })
    },
    tabCounty (id) {
      this.currentAddress[2].id = id
    },
    // 初始化数据请求
    infoInit () {
      this.isChangePhone = false
      this.isChangeEmail = false
      // 用户基本信息
      this.API.userBaseInfo({userName: this.$cookies.get('user-key')}).then(res => {
        this.userInfo = res
        let tem = res.currentAddress.split('-')
        for (let i = 0; i < 4; i++) {
          this.$set(this.currentAddress, i, {'addr': tem[i] || ''})
        }
      }).then(() => {
        // 全部省份
        this.API.allProvince().then(res => {
          this.addrOptions = res
          this.addrOptions.forEach((ele, index) => {
            // 通过省份名字查找id
            if (this.currentAddress[0].addr === ele.province) {
              this.$set(this.currentAddress[0], 'id', ele.provinceid)
            }
            if (ele.province === '黑龙江省' || ele.province === '内蒙古自治区') {
              this.$set(this.addrOptions[index], 'province', ele.province.substring(0, 3))
            } else this.$set(this.addrOptions[index], 'province', ele.province.substring(0, 2))
          })
        }).then(() => {
          if (this.currentAddress[0].id) {
            this.API.allCity({proviceId: this.currentAddress[0].id}).then(res => {
              this.cityList = res
              this.cityList.forEach((list, index) => {
                // 通过市查找id
                if (this.currentAddress[1].addr === list.city) {
                  this.$set(this.currentAddress[1], 'id', list.cityid)
                }
              })
            }).then(() => {
              if (this.currentAddress[1].id) {
                this.API.allAreas({cityId: this.currentAddress[1].id}).then(res => {
                  this.countyList = res
                  this.countyList.forEach((list, index) => {
                    // 通过县、区查找id
                    if (this.currentAddress[2].addr === list.area) {
                      this.$set(this.currentAddress[2], 'id', list.areaid)
                    }
                  })
                })
              }
            })
          }
        })
      })
    },
    // 恢复滑动到原点
    resetVerify () {
      let dom = this.$refs.Verify
      dom.isMoving = false
      dom.x = 0
      dom.isPassing = false
      dom.$refs.handler.style.left = '0'
      dom.$refs.progressBar.style.width = '0'
      dom.$refs.handler.children[0].className = 'el-icon-d-arrow-right'
    },
    // 修改提交
    submit () {
      if (this.isChangeEmail) {
        if (!this.userInfo.email) {
          this.$message.info({
            message: '邮箱输入不能为空'
          })
          return
        }
        let reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
        if (!reg.test(this.userInfo.email)) {
          this.$message.error({
            message: '邮箱输入格式不正确'
          })
          return
        }
      }
      let val = []
      this.currentAddress.forEach(item => { val.push(item.addr) })
      let addressVal = val.join('-')
      let user = {
        id: this.$cookies.get('userInfo').id,
        name: this.userInfo.realName,
        nickName: this.userInfo.nickName,
        headPic: this.userInfo.headPic,
        sex: this.userInfo.sex,
        birthday: new Date().getTime() - Date.parse(new Date()) + this.userInfo.birthday,
        phone: this.userInfo.phone,
        email: this.userInfo.email,
        currentAddress: addressVal
      }
      // 验证通过
      if (this.$refs.Verify.isPassing) {
        this.API.userUpdateInfo(user).then((res) => {
          this.resetVerify()
          if (res.success === false) {
            this.$notify.error({
              title: '失败',
              message: '个人资料修改有误'
            })
            return
          }
          this.$notify.success({
            title: '成功',
            message: '个人资料修改成功'
          })
          this.infoInit()
          this.API.userBaseInfo({userName: this.$cookies.get('user-key')}).then(res => {
            this.$cookies.set('userInfo', res)
            this.setUserInfo(res)
          })
        })
      } else {
        this.$notify.info({
          title: '提示',
          message: '请将验证码滑块拖动到右侧'
        })
      }
    }
  },
  watch: {}
}

</script>
<style scoped>
.show-preview{width: 100%;height: 100%;}
/* 主体 */
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
  .test,.arrow,.text-right{
    display: inline-block;
    font-size:14px;
  }
  .test .arrow{
    width:13%;
    background:rgba(255,255,255,1);
    border:1px solid rgba(227,227,227,1);
    border-right: none;
    font-family:SimHei;
    font-weight:400;
    color:rgba(135,135,135,1);
    text-align: center;
  }
  .test .text-right{
    width:84%;
    background:rgba(244,244,244,1);
    border:1px solid rgba(227,227,227,1);
    margin-left: -8px;
    font-family:SourceHanSansCN-Light;
    font-weight:300;
    color:rgba(167,167,167,1);
    text-align: center;
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
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
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
    cursor: pointer;
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
    width:1080px;
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
    margin-top: 10px;
  }
  .test{
    height:40px;
    width:386px;
  }
/*上传文件*/
  .full-path {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:rgba(0,0,0,0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 20;
  }
  .full-box {
    width:700px;
    height:449px;
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 6px 0px rgba(0, 0, 0, 0.35);
    display: flex;
    justify-content: space-between;
    position: relative;
  }
  .head-left {
    width:350px;
    padding-top: 26px;
    margin-left: 37px;
  }
  .head-choose {
    display: block;
    width:200px;
    height:40px;
    background:rgba(244,244,244,1);
    border-radius:2px;
    text-align: center;
    line-height: 40px;
    color: #353535;
    font-size: 14px;
    cursor: pointer;
  }
  .hc-tip {
    font-size:12px;
    font-family:SourceHanSansCN-Regular;
    color:rgba(112,112,112,1);
    line-height: 14px;
    margin-top: 32px;
    margin-bottom: 20px;
  }
  .hc-img {
    width: 350px;
    height: 250px;
    border:1px solid rgba(227,227,227,1);
  }
  /*.hc-img img {
    max-height: 100%;
    max-width: 100%;
    overflow: hidden;
  }*/
  .head-save {
    width: 70px;
    height: 30px;
    font-size: 14px;
    text-shadow:0px 0px 3px rgba(39,39,39,0.68);
    color: #fff;
    border:1px solid rgba(214,214,214,1);
    background:linear-gradient(0deg,rgba(251,161,4,1) 0%,rgba(251,237,213,1) 100%);
    border-radius:5px;
    margin-top: 15px;
  }
  .head-right {
    width: 230px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-right: 35px;
  }
  .hr-title{
    color: #4B4B4B;
    font-size: 16px;
  }
  .hr-tip {
    margin-bottom: 40px;
  }
  .hr-box {
    width: 150px;
    height: 150px;
    border:1px solid rgba(227,227,227,1);
    margin-bottom: 19px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .hr-box img {
    width: 100%;
    height: 100%;
  }
  .hr-size {
    margin-bottom: 0;
    margin-top: 0px;
  }
  .head-close {
    position: absolute;
    top: 0;
    right: 10px;
    width: 35px;
    height: 35px;
    font-size: 30px;
    line-height: 35px;
    color: red;
  }
</style>
