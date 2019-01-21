<template>
  <div>
    <shortcut></shortcut>
    <div>
      <header class="mk-header">
        <div class="mk-head">
          <div class="h-logo" ref='logoIsCursor'>
            <router-link :to="{path: '/home'}" ><img src="static/img/mk_user_logo.png"></router-link>
            <h1>MKTail</h1>
          </div>
          <div class="title-se">
            <form action="#">
              <div class="search_box">
                <div class="search_ipt">
                  <input type="text" ref="search_ipt" placeholder="search product">
                  <a @click="searchPro" class="search_btn">搜索</a>
                </div>
              </div>
            </form>
            <div class="title-con">
              <router-link :to="{path: '/home'}" class="title-li"><h2>平台首页</h2></router-link>
              <router-link :to="{path: '/'}" class="title-li"><h2>店铺首页</h2></router-link>
              <router-link :to="{path: '/'}" class="title-li"><h2>产品详情</h2></router-link>
              <router-link :to="{path: '/'}" class="title-li"><h2>客服</h2></router-link>
            </div>
          </div>
          <!-- <div class="h-search">
          </div> -->
          <div class="addCart">
            <img src="static/img/mk_search_cart.png">
            <p>我的购物车</p>
            <span v-if="isOver">99</span>
            <span v-else>{{cartNum}}</span>
          </div>
        </div>
      </header>
    </div>
    <div>
      <div>
        <div class="threeD-box">
          <iframe ref="threeDSrc" style="width: 100%; height: 100%;" frameborder="0" scrolling="no"></iframe>
          <a class="threeD-btn" v-show="!is3Ding">
            <img src="static/img/mk_search_play.png">
          </a>
          <div class="menu-box">
            <a href="javascript:;" class="set-menu"><img src="static/img/3D_menu.png"></a>
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
              <a class="threeD-li-a Center" href="javascript:;" @click="threeDUrl('http://192.168.0.33:8080/qn18/index.html?spuid=10111054')">
                <img src="/static/img/3D_show2.png">
              </a>
              <h5 class="threeD-li-h">4寸PU电泳旱冰轮</h5>
            </li>
            <li class="threeD-li">
              <a class="threeD-li-a Center" href="javascript:;" @click="threeDUrl('http://192.168.0.33:8080/qn18/index.html?spuid=10112268')">
                <img src="/static/img/3D_show3.png">
              </a>
              <h5 class="threeD-li-h">2寸金钻活动轮</h5>
            </li>
            <li class="threeD-li">
              <a class="threeD-li-a Center" href="javascript:;" @click="threeDUrl('http://192.168.0.33:8080/qn18/index.html?spuid=10112269')">
                <img src="/static/img/3D_show4.png">
              </a>
              <h5 class="threeD-li-h">2寸白PU大班轮</h5>
            </li>
            <li class="threeD-li">
              <a class="threeD-li-a Center" href="javascript:;" @click="threeDUrl('http://192.168.0.33:8080/qn18/index.html?spuid=10113046')">
                <img src="/static/img/3D_show1.png">
              </a>
              <h5 class="threeD-li-h">重型铸铁PU绿双轴刹车轮</h5>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import shortcut from '../../components/shortcutHeader'
import userNav from '../../components/userNav'
export default {
  data () {
    return {
      isOver: 0, // 是否超过99
      is3Ding: false,
      isForm: false,
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
  components: { shortcut, userNav },
  computed: {
    cartNum () {
      let num = 0
      return num
    }
  },
  mounted () {
    let threeDUrl = 'http://192.168.0.33:8080/qn18/index.html?spuid=1'
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
/* mk-header */
  .mk-header {
    min-width: 990px;
    margin: 0 auto;
    background-color: #FFFFFF;
  }
  .h-logo {
    padding:29px 11px 29px 23px;
  }
  .mk-head{
    max-width: 1226px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    position: relative;
  }

/* 搜索 */
  .search_box{
    box-sizing: content-box;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    height: 50px;
    width: 335px;;
    margin: auto;
  }
  .search_ipt {
    width: 335px;
    border: 2px solid #E71600;
    height: 34px;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
  }
  .search_ipt>input {
    flex-grow: 1;
    height: 22px;
    line-height: 22px;
    font-size: 20px;
    padding: 4px 10px 4px 0;
    border: none;
    margin-left: 18px;
    -webkit-appearance: none;
    outline: none;
    margin-bottom: 2px;
    margin-top: 2px;
  }
  .search_btn {
    width: 60px;
    justify-content: center;
    font-size: 26px;
    text-align: center;
    line-height: 30px;
    display: flex;
    align-items: center;
    font-size: 18px;
    color: #fff;
    cursor: pointer;
    background-color: #E71600;
  }

/*logo*/
  .h-logo{
    display: flex;
    align-items: center;
  }
  .h-logo h1{
    margin-left: 12px;
    font-size: 25px;
    color:rgba(104,85,65,1);
  }

/* 左侧 类别切换*/
  .title-se {
    display: flex;
    justify-content: flex-end;
    flex-grow: 1;
    display: flex;
    align-items: center;
    margin-right: 10px;
  }
  .title-con {
    margin:0 43px;
  }
  .title-se h2{
    font-size: 18px;
    color: #363636;
  }
  .title-con a + a {
    margin-left: 20px;
  }

/* 加入购物车 */
  .addCart {
    width:150px;
    height:35px;
    background:rgba(246,246,246,1);
    border:1px solid rgba(198,198,198,1);
    margin-right: 68px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .addCart p{
    margin: 0 4px;
  }
  .addCart img{margin-left: 5px;}
  .addCart span{margin-right: 5px; width: 21px; height: 21px; border-radius: 50%;background-color: red; color: #fff;line-height: 21px; text-align: center;}

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
  .set-menu {}
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
