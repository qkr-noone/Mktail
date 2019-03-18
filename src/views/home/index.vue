<template>
  <div id="index">
    <shortcut id="headTop"></shortcut>
    <headerNav></headerNav>
    <!-- 头部 -->
    <homeNav></homeNav>
    <div class="container_h">
      <div class="sort" :style="'background-color:'+ bgImg + ''">
        <div class="py-container">
          <div class="SortList ">
            <div class=" Left all-sort-list">
              <div class="all-sort-list2">
                <!-- 截取15条类目 -->
                <div class="item bo" v-for="item in menuData.slice(0,14)"  :key="item.id" >
                  <h3><a href="">{{ item.name }}</a><i class="el-icon-arrow-right"></i></h3>
                  <div class="item-list clearfix">
                    <div class="subitem">
                      <dl class="fore1" v-for="list in item.children" v-if="list.children.length" :key="list.id">
                        <dt><router-link :to="{path: '/search', query: {keywords: list.name}}" >{{ list.name }}</router-link></dt>
                        <dd><router-link :to="{path: '/search', query: {keywords: series.name}}" v-for="series in list.children" :key="series.id">{{ series.name }}</router-link></dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class=" Center banerArea">
              <!--banner轮播-->
              <div id="myCarousel" data-ride="carousel" data-interval="4000" class="sui-carousel">
                <el-carousel :interval="5000" arrow="always" height="100%" @change="carouselChange">
                  <el-carousel-item v-for="item in bannerList" :key="item.id">
                    <router-link :to="{path: item.url}"><img :src="item.pic"></router-link>
                  </el-carousel-item>
                </el-carousel>
              </div>
              <div class="style-recom">
                <li v-for="list in absList" :key="list.id" :data-href="list.url">
                  <div><h3>{{list.title}}</h3><h4>{{list.subTitle}}</h4></div>
                  <router-link :to="{path: list.url}"><img class="wrap" :src="list.pic"></router-link>
                </li>
              </div>
            </div>
            <div class="Right">
              <div class="user-info">
                <router-link :to="{path: '/user'}"><img :src="userInfo.headPic || 'static/img/mk_logo_login.png'"></router-link>
                <p class="user-tip">Hi，你好</p>
                <div class="user-coming" v-if="!userInfo.username">
                  <router-link :to="{path: '/login'}">登陆</router-link>
                  <router-link :to="{path: '/register'}">注册</router-link>
                </div>
                <div class="user-coming" v-else>
                  <router-link :to="{path: '/user'}">{{userInfo.username}}</router-link>
                </div>
                <div class="user-out">
                  <a>新人有礼</a>
                  <router-link :to="{path: '/cart'}">购物车</router-link>
                </div>
              </div>
              <div class="news-info">
                <li v-for="(list, index) in tipHot" :key="list.id" v-if="index === 0"><a href="javascript:;"><span class="news-tip">【热门】</span>{{list.title}}</a></li>
                <li v-for="(list, index) in tipKnown" :key="list.id" v-if="index === 0"><a href="javascript:;"><span class="news-tip">【知识】</span>{{list.title}}</a></li>
                <li v-for="(list, index) in tipAbs" :key="list.id" v-if="index === 0"><a href="javascript:;"><span class="news-tip">【公告】</span>{{list.title}}</a></li>
              </div>
              <div class="other-info">
                <li><a><img src="static/img/mk_huiyuan.png"><h5>会员</h5></a></li>
                <li><a><img src="static/img/mk_chongzhi.png"><h5>充值</h5></a></li>
                <li><a><img src="static/img/mk_hongbao.png"><h5>红包</h5></a></li>
                <li><a><img src="static/img/mk_gongyi.png"><h5>公益</h5></a></li>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 标语、3D 直播 -->
    </div>
    <!-- 会员3D服务 -->
    <div class="container_h" id="threeD">
      <div class="py-container bsale" @click="threeDUrl('http://192.168.0.33:8080/qn17/index.html?spuid=1')" >
        <absBox :data="bsaleList" :indicator="'none'" :arrow="'never'"></absBox>
      </div>
    </div>
    <!-- 分类 类别 -->
    <div class="container_h">
      <div class="py-container classify">
        <div class="sty-con" v-for="list in classList" :key="list.id">
          <div class="sty-con-left">
            <img :src="list.pic">
          </div>
          <div class="sty-con-right">
            <div class="style-con-class">
              <a>电动工具</a>
              <a>电动工具</a>
              <a>电动工具</a>
            </div>
            <ul class="sty-con-ul">
              <li class="sty-con-li" v-for="(data, index) in hardwareList" :key="data.id" v-if="index < 4 && list.id === data.contentId">
                <h2>{{data.title}}</h2>
                <router-link :to="{path: '/detail', query:{goodsId: data.goodsId}}"><img class="wrap" :src="data.pic"></router-link>
                <div><span>{{data.price}}元</span><div class="before-pri"><span>288元</span></div></div>
              </li>
              <li class="sty-con-li" v-for="(data, index) in lifeShops" :key="data.id" v-if="index < 4 && list.id === data.contentId">
                <h2>{{data.title}}</h2>
                <router-link :to="{path: '/detail', query:{goodsId: data.goodsId}}"><img class="wrap" :src="data.pic"></router-link>
                <div><span>{{data.price}}元</span><div class="before-pri"><span>288元</span></div></div>
              </li>
              <li class="sty-con-li" v-for="(data, index) in mechanicList" :key="data.id" v-if="index < 4 && list.id === data.contentId">
                <h2>{{data.title}}</h2>
                <router-link :to="{path: '/detail', query:{goodsId: data.goodsId}}"><img class="wrap" :src="data.pic"></router-link>
                <div><span>{{data.price}}元</span><div class="before-pri"><span>288元</span></div></div>
              </li>
              <li class="sty-con-li" v-for="(data, index) in elecList" :key="data.id" v-if="index < 4 && list.id === data.contentId">
                <h2>{{data.title}}</h2>
                <router-link :to="{path: '/detail', query:{goodsId: data.goodsId}}"><img class="wrap" :src="data.pic"></router-link>
                <div><span>{{data.price}}元</span><div class="before-pri"><span>288元</span></div></div>
              </li>
              <li class="sty-con-li" v-for="(data, index) in threeCList" :key="data.id" v-if="index < 4 && list.id === data.contentId">
                <h2>{{data.title}}</h2>
                <router-link :to="{path: '/detail', query:{goodsId: data.goodsId}}"><img class="wrap" :src="data.pic"></router-link>
                <div><span>{{data.price}}元</span><div class="before-pri"><span>288元</span></div></div>
              </li>
              <li class="sty-con-li" v-for="(data, index) in cartLife" :key="data.id" v-if="index < 4 && list.id === data.contentId">
                <h2>{{data.title}}</h2>
                <router-link :to="{path: '/detail', query:{goodsId: data.goodsId}}"><img class="wrap" :src="data.pic"></router-link>
                <div><span>{{data.price}}元</span><div class="before-pri"><span>288元</span></div></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 企业直播 -->
    <div class="container_h" id="live">
      <div class="py-container bsale" @click="livePage()">
        <absBox :data="companyLive" :indicator="'none'" :arrow="'never'"></absBox>
      </div>
    </div>
    <!-- 主题货源 -->
    <div class="container_h">
      <div class="py-container source">
        <div class="source-title">
          <span></span><p>主题货源</p>
        </div>
        <div class="source-con">
          <div class="source-box" v-for="list in sourceList" :key="list.id" :data-id="list.id">
            <h2>{{list.title}}</h2>
            <ul class="source-box-ul">
              <li class="source-box-li" v-for="data in lightList" :key="data.id" :data-id="data.id" v-if="list.id === data.contentId">
                <router-link :to="{path: '/detail', query:{goodsId: data.goodsId}}"><img class="wrap" :src="data.pic"></router-link>
              <h4>{{data.title}}</h4>
              </li>
              <li class="source-box-li" v-for="data in lightList1" :key="data.id" :data-id="data.id" v-if="list.id === data.contentId">
                <router-link :to="{path: '/detail', query:{goodsId: data.goodsId}}"><img class="wrap" :src="data.pic"></router-link>
              <h4>{{data.title}}</h4>
              </li>
              <li class="source-box-li" v-for="data in lightList2" :key="data.id" :data-id="data.id" v-if="list.id === data.contentId">
                <a :href="data.url"><img class="wrap" :src="data.pic"></a>
              <h4>{{data.title}}</h4>
              </li>
              <li class="source-box-li" v-for="data in lightList3" :key="data.id" :data-id="data.id" v-if="list.id === data.contentId">
                <router-link :to="{path: '/detail', query:{goodsId: data.goodsId}}"><img class="wrap" :src="data.pic"></router-link>
              <h4>{{data.title}}</h4>
              </li>
              <li class="source-box-li" v-for="data in lightList4" :key="data.id" :data-id="data.id" v-if="list.id === data.contentId">
                <router-link :to="{path: '/detail', query:{goodsId: data.goodsId}}"><img class="wrap" :src="data.pic"></router-link>
              <h4>{{data.title}}</h4>
              </li>
              <li class="source-box-li" v-for="data in lightList5" :key="data.id" :data-id="data.id" v-if="list.id === data.contentId">
                <router-link :to="{path: '/detail', query:{goodsId: data.goodsId}}"><img class="wrap" :src="data.pic"></router-link>
              <h4>{{data.title}}</h4>
              </li>
              <li class="source-box-li" v-for="data in lightList6" :key="data.id" :data-id="data.id" v-if="list.id === data.contentId">
                <router-link :to="{path: '/detail', query:{goodsId: data.goodsId}}"><img class="wrap" :src="data.pic"></router-link>
              <h4>{{data.title}}</h4>
              </li>
              <li class="source-box-li" v-for="data in lightList7" :key="data.id" :data-id="data.id" v-if="list.id === data.contentId">
                <router-link :to="{path: '/detail', query:{goodsId: data.goodsId}}"><img class="wrap" :src="data.pic"></router-link>
              <h4>{{data.title}}</h4>
              </li>
              <li class="source-box-li" v-for="data in lightList8" :key="data.id" :data-id="data.id" v-if="list.id === data.contentId">
                <router-link :to="{path: '/detail', query:{goodsId: data.goodsId}}"><img class="wrap" :src="data.pic"></router-link>
              <h4>{{data.title}}</h4>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 商学院 -->
    <div class="container_h" id="school">
      <div class="py-container bsale">
        <absBox :data="school" :indicator="'none'" :arrow="'never'"></absBox>
      </div>
    </div>
    <!-- 猜你喜欢 -->
    <div class="container_h" id="yourLike">
      <div class="py-container hot">
        <div>
          <div class="hot-title">
            <p>猜你喜欢</p>
            <p @click="changeLike()">换一换</p>
          </div>
          <div class="hot-con">
            <ul class="hot-con-ul">
              <li v-for="list in likeList" :key="list.id">
                <youLike :like="list"></youLike>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- END -->
    <div class="container_h" >
      <div class="py-container end">
        <div>
          <div class="end-title">
            <p>—— END ——</p>
          </div>
        </div>
      </div>
    </div>
    <pageFooter></pageFooter>
    <div class="point">
      <a class="point-logo">
        <img src="static/img/mk_logo_tip.png">
      </a>
      <div class="point-con">
        <ul class="point-ul">
          <li class="point-li point-ffd" v-scroll-to="'#threeD'"><a>3D</a></li>
          <li class="point-li point-ff9" v-scroll-to="'#live'"><a>直播</a></li>
          <li class="point-li point-bd4" v-scroll-to="'#school'"><a>商学院</a></li>
          <li class="point-li point-ad5" v-scroll-to="'#yourLike'"><a>猜你喜欢</a></li>
          <li class="point-li" v-scroll-to="'#headTop'"><a class=" top"><i class="el-icon-arrow-up"></i><p>顶部</p></a></li>
          <li class="point-li"><a>反馈</a></li>
          <li class="point-li"><a>举报</a></li>
        </ul>
      </div>
    </div>
    <div class="mask" v-show="is3Ding">
      <iframe class="mask_iframe" ref="threeDSrc"  frameborder="0" scrolling="" g="no">
      </iframe>
      <div class="mask_close close_wrap">
        <i class="el-icon-close" @click="threeDclose"></i>
      </div>
    </div>
  </div>
</template>

<script>
import shortcut from '@/components/shortcutHeader'
import headerNav from '@/components/headerNav'
import homeNav from '@/components/homeNav'
import absBox from '@/components/absBox'
import youLike from '@/components/youLike'
import pageFooter from '@/components/pageFooter'
export default {
  data () {
    return {
      is3Ding: false,
      cateMenuItem: '',
      isShowNav: '', // 二级菜单显示状态
      menuData: '', // 条目菜单
      bannerList: '', // banner
      bgImg: '#f4f4f4',
      absList: [], // 轮播广告
      tipHot: [], // 热门
      tipKnown: [], // 知识
      tipAbs: [], // 公告
      bsaleList: [], // 会员3D
      hardwareList: [], // 五金工具
      lifeShops: [], // 日用百货
      mechanicList: [], // 机械
      elecList: [], // 机电设备
      threeCList: [], // 3c数码
      cartLife: [], // 汽车用品
      classList: [], // 大类分类
      companyLive: [], // 企业直播
      sourceList: [], // 主题货源
      lightList: [], // 照明
      lightList1: [],
      lightList2: [],
      lightList3: [],
      lightList4: [],
      lightList5: [],
      lightList6: [],
      lightList7: [],
      lightList8: [],
      school: [], // 商学院
      likeList: [], // 猜你喜欢
      userInfo: ''
    }
  },
  components: { shortcut, headerNav, pageFooter, absBox, youLike, homeNav },
  computed: {},
  created () {
    // 获取条目菜单
    this.API.homeMenu().then(rtn => {
      this.menuData = rtn.children
    })
    // 主页banner
    this.API.homeBanner({categoryId: 1}).then(rtn => {
      this.bannerList = rtn.contentList
    })
    // 热门
    this.API.homeBanner({categoryId: 22}).then(rtn => {
      this.tipHot = rtn.contentList
    })
    // 知识
    this.API.homeBanner({categoryId: 23}).then(rtn => {
      this.tipKnown = rtn.contentList
    })
    // 公告
    this.API.homeBanner({categoryId: 24}).then(rtn => {
      this.tipAbs = rtn.contentList
    })
    // 主页banner广告
    this.API.homeBanner({categoryId: 2}).then(rtn => {
      this.absList = rtn.contentList
    })
    // 会员3D
    this.API.homeBanner({categoryId: 3}).then(rtn => {
      this.bsaleList = rtn.contentList
    })
    // 大类 分类
    this.API.homeBanner({categoryId: 4}).then(rtn => {
      this.classList = rtn.contentList
    })
    // 五金工具 内容
    this.API.homeClass({contentId: 19}).then(rtn => {
      this.hardwareList = rtn
    })
    // 日用百货
    this.API.homeClass({contentId: 20}).then(rtn => {
      this.lifeShops = rtn
    })
    // 机械
    this.API.homeClass({contentId: 21}).then(rtn => {
      this.mechanicList = rtn
    })
    // 机电设备
    this.API.homeClass({contentId: 22}).then(rtn => {
      this.elecList = rtn
    })
    // 3c数码
    this.API.homeClass({contentId: 23}).then(rtn => {
      this.threeCList = rtn
    })
    // 汽车用品
    this.API.homeClass({contentId: 24}).then(rtn => {
      this.cartLife = rtn
    })
    // 企业直播
    this.API.homeBanner({categoryId: 7}).then(rtn => {
      this.companyLive = rtn.contentList
    })
    // 主题货源
    this.API.homeBanner({categoryId: 5}).then(rtn => {
      this.sourceList = rtn.contentList
    })
    // 照明工具
    this.API.homeClass({contentId: 25}).then(rtn => {
      this.lightList = rtn
    })
    this.API.homeClass({contentId: 26}).then(rtn => {
      this.lightList1 = rtn
    })
    this.API.homeClass({contentId: 27}).then(rtn => {
      this.lightList2 = rtn
    })
    this.API.homeClass({contentId: 28}).then(rtn => {
      this.lightList3 = rtn
    })
    this.API.homeClass({contentId: 29}).then(rtn => {
      this.lightList4 = rtn
    })
    this.API.homeClass({contentId: 30}).then(rtn => {
      this.lightList5 = rtn
    })
    this.API.homeClass({contentId: 31}).then(rtn => {
      this.lightList6 = rtn
    })
    this.API.homeClass({contentId: 32}).then(rtn => {
      this.lightList7 = rtn
    })
    this.API.homeClass({contentId: 33}).then(rtn => {
      this.lightList8 = rtn
    })
    // 商学院
    this.API.homeBanner({categoryId: 8}).then(rtn => {
      this.school = rtn.contentList
    })
    // 猜你喜欢
    this.API.homeBanner({categoryId: 6}).then(rtn => {
      this.likeList = rtn.contentList
    })
  },
  activated () {
    this.userInfo = this.$cookies.isKey('userInfo') ? this.$cookies.get('userInfo') : ''
  },
  mounted () {
    this.userInfo = this.$cookies.isKey('userInfo') ? this.$cookies.get('userInfo') : ''
    console.log(this.userInfo)
  },
  methods: {
    carouselChange (index, key) {
      this.bgImg = this.bannerList[index].bgcolor
    },
    livePage (url) { // http://192.168.1.11/
      this.$router.push({path: '/live/factory'})
      return false
    },
    threeDclose () {
      this.is3Ding = false
      return false
    },
    threeDUrl (threeDUrl) { // http://192.168.0.33:8080/qn5/ http://120.79.93.197/we/
      this.$router.push({path: '/3DShow'})
      // this.is3Ding = true
      // this.$refs.threeDSrc.src = threeDUrl
      return false
    },
    register () {
      this.$router.push({path: '/register'})
    },
    // 换一换 喜欢
    changeLike () {
      this.API.homeBanner({categoryId: 6}).then(rtn => {
        this.likeList = rtn.contentList
      })
    }
  }
}
</script>
<style scoped>
@import "../../assets/css/app.css"
/*@import "../static/css/app.css";*/
</style>
