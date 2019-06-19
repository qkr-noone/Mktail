<template>
  <div>
    <shortcut></shortcut>
    <live3Dheader :title="tDTitll" :goodsId="goodsId"></live3Dheader>
    <div>
      <div>
        <div class="threeD-box">
          <iframe ref="threeDSrc" style="width: 100%; height: 100%;" frameborder="0" scrolling="no"></iframe>
          <a class="threeD-btn" v-show="!is3Ding">
            <img src="static/img/mk_search_play.png">
          </a>
          <div class="menu-box">
            <a href="javascript:;" @click="btnUrl()" class="set-menu">
              <img src="static/img/3D_menu.png">
            </a>
            <h2 class="get-set-h">自定义产品</h2>
            <a href="javascript:;" class="get-user" @click="getForm()">获取</a>
          </div>
          <div class="user-info Center" v-if="isForm">
            <div class="user-info-box">
              <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="所在行业：" prop="industry">
                  <el-input v-model="ruleForm.industry"></el-input>
                </el-form-item>
                <el-form-item label="公司名称：" prop="name">
                  <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="联系手机：" prop="mobile">
                  <el-input v-model="ruleForm.mobile"></el-input>
                </el-form-item>
                <el-form-item label="联系人：" prop="username">
                  <el-input v-model="ruleForm.username"></el-input>
                </el-form-item>
                <el-form-item label="电话：" prop="phone">
                  <el-input v-model="ruleForm.phone"></el-input>
                </el-form-item>
                <el-form-item label="E-mail：" prop="emali">
                  <el-input v-model="ruleForm.emali"></el-input>
                </el-form-item>
              </el-form>
              <div class="user-inf-push">
                <a href="javascript:;">下载3D和数据表</a>
                <p>*温馨提示：提交之后经卖家审核后，自动发送到所提供的邮箱请确保填写正确邮箱。</p>
              </div>
              <div class="close" @click="closeForm()">
                <i class="el-icon-close"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="threeD-list">
          <div class="threeD-title">
            <h3 class="name">同店铺产品推荐</h3>
          </div>
          <ul class="threeD-ul">
            <li class="threeD-li">
              <a class="threeD-li-a Center" href="javascript:;" @click="threeDUrl(U3DIP + '/index.html?id=24')">
                <img src="/static/img/3D_show2.png">
              </a>
              <h5 class="threeD-li-h">4寸PU电泳旱冰轮</h5>
            </li>
            <li class="threeD-li">
              <a class="threeD-li-a Center" href="javascript:;" @click="threeDUrl(U3DIP + '/index.html?id=24')">
                <img src="/static/img/3D_show3.png">
              </a>
              <h5 class="threeD-li-h">2寸金钻活动轮</h5>
            </li>
            <li class="threeD-li">
              <a class="threeD-li-a Center" href="javascript:;" @click="threeDUrl(U3DIP + '/index.html?id=24')">
                <img src="/static/img/3D_show4.png">
              </a>
              <h5 class="threeD-li-h">2寸白PU大班轮</h5>
            </li>
            <li class="threeD-li">
              <a class="threeD-li-a Center" href="javascript:;" @click="threeDUrl(U3DIP + '/index.html?id=24')">
                <img src="/static/img/3D_show1.png">
              </a>
              <h5 class="threeD-li-h">重型铸铁PU绿双轴刹车轮</h5>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <pageFooter></pageFooter>
  </div>
</template>
<script>
import shortcut from '@/components/shortcutHeader'
import live3Dheader from '@/components/live3Dheader'
import pageFooter from '@/components/pageFooter'
export default {
  data () {
    return {
      is3Ding: false,
      isForm: false,
      tDTitll: 'MKTail',
      goodsId: '149187842867965',
      ruleForm: {
        name: ''
      },
      rules: {
        industry: [
          { required: true, message: '请输入所在行业', trigger: 'blur' },
          { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请输入公司名称', trigger: 'blur' },
          { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
        ],
        mobile: [
          { required: true, message: '请输入联系手机：', trigger: 'blur' },
          { min: 11, max: 11, message: '请输入正确手机号', trigger: 'blur' }
        ],
        username: [
          { required: true, message: '请输入联系人：', trigger: 'blur' },
          { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
        ],
        phone: [
          { required: false, message: '请输入电话', trigger: 'blur' },
          { min: 1, max: 7, message: '', trigger: 'blur' }
        ],
        emali: [
          { required: true, message: '请输入E-mail', trigger: 'blur' },
          { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  components: { shortcut, live3Dheader, pageFooter },
  mounted () {
    this.$nextTick(() => {
      document.documentElement.scrollTop = 133
      document.body.scrollTop = 133
    })
    let threeDUrl = this.U3DIP + '/index.html?id=24' // http://192.168.0.34:8080/qn30/index.html?spuid=10112267
    // http://192.168.0.33:8080/qn5/ http://192.168.0.33:8080/qn17/index.html?spuid=10112269 http://120.79.93.197/we5/
    this.$refs.threeDSrc.src = threeDUrl
    this.is3Ding = true
    return false
  },
  methods: {
    searchPro () {
      let SEARCH_VALUE = this.$refs.search_ipt.value
      let IS_LOAD = true // 重新关键词search
      let searchMap =
        {
          keywords: '',
          category: '',
          brand: '', // 品牌
          spec: {}, // 规格
          price: '',
          pageNo: 1,
          pageSize: 40,
          sort: '', // 排序  ASC -升序  DESC-降序
          sortField: '' // 排序变量
        }
      this.$router.push({query: searchMap})
      if (SEARCH_VALUE) {
        // 判断当前是否在搜索页
        if (this.$route.path === '/search') {
          console.log('..')
          this.$emit('showSearch', [SEARCH_VALUE, IS_LOAD]) // 调用search 页面的showSearch 方法
        } else {
          this.$router.push({path: '/search', query: {keywords: SEARCH_VALUE}})
        }
      }
    },
    threeDUrl (threeDUrl) {
      this.$refs.threeDSrc.src = threeDUrl
      this.is3Ding = true
      return false
    },
    getForm () {
      this.isForm = true
    },
    closeForm () {
      this.isForm = false
    }
  }
}

</script>
<style scoped>
/*3D展示*/
  .threeD-box{
    width:100vw;
    min-width: 1226px;
    height: calc(100vh - 16px); /*132px + 2px + 16px*/
    min-height:600px;
    position: relative;
    background-color: #E0E0E0;
    border: 1px solid #ddd;
    border-top: 16px solid #353535;
    overflow: hidden;
    position: relative;
  }
  .threeD-btn{
    position: absolute;
    width: 100px;
    height: 100px;
    top: 50%;
    left: 50%;
    transform: translate(-50px, -50px);
  }
  .threeD-btn img{
    width: 100%;
  }
/*店铺推荐*/
  .threeD-list{
    background:rgba(53,53,53,1);
    padding-bottom: 26px;
    margin-bottom: 84px;
  }
  .threeD-title {
    margin: 0 auto;
    max-width: 1366px;
    min-width: 1266px;
    height:55px;
    display: flex;
    align-items: center;
  }
  .name {
    font-size:18px;
    font-family:SourceHanSansCN-Light;
    font-weight:300;
    color:rgba(255,255,255,1);
    height: 29px;
    border-left: 5px solid #fff;
    margin-left: 7px;
    padding-left: 10px;
  }
  .threeD-ul {
    margin: 0 auto;
    width: 1366px;
    display: flex;
    justify-content: space-between;
  }
  .threeD-li {
    width:337px;
    height:255px;
    background-color: #EBEBEB;
    position: relative;
  }
  .threeD-li-a {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .Center{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .threeD-li-a img{
    width: 100%;
    height: auto;
  }
  .threeD-li-h {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height:27px;
    line-height: 27px;
    text-align: center;
    background-color: #CCCCCC;
    font-size:16px;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(39,39,39,1);
    overflow: hidden;
    white-space: nowrap;
    padding: 0 8px;
  }

/* 菜单*/
  .menu-box {
    position: absolute;
    top: 6px;
    left: 9px;
    display: flex;
    align-items: center;
  }
  .set-menu {
    position: relative;
  }
  .get-set-h {
    font-size:28px;
    font-family:SourceHanSansCN-Normal;
    font-weight:400;
    color:rgba(31,31,31,1);
    margin-left: 7px;
  }
  .get-user {
    width:105px;
    height:38px;
    line-height: 38px;
    font-size: 24px;
    color: #1F1F1F;
    margin-left: 26px;
    background:rgba(255,255,255,1);
    box-shadow:0px 2px 5px 0px rgba(65,64,64,0.28);
    border-radius:19px;
  }
/* 获取用户信息表格*/
  .user-info {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  .user-info-box {
    width:400px;
    height:455px;
    padding: 30px 80px;
    background:rgba(255,255,255,1);
    box-shadow:0px 2px 5px 0px rgba(65,64,64,0.28);
    border-radius:10px;
    font-size: 16px;
    color: #747474;
    position: relative;
  }
  .demo-ruleForm{
    width: 320px;
    margin: 0 auto;
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
  }
  .user-inf-push a {
    width:360px;
    height:37px;
    line-height: 37px;
    text-align: center;
    background:rgba(231,22,0,1);
    font-size: 16;
    color: #FFFFFF;
  }
  .user-inf-push p{
    margin-top: 10px;
    font-size:13px;
    font-family:SourceHanSansCN-Normal;
    text-align: left;
    font-weight:400;
    color:rgba(231,22,0,1);
    line-height:18px;
  }
</style>
