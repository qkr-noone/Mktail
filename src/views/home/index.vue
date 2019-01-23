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
                        <dt><a href="">{{ list.name }}</a></dt>
                        <dd><a href="" v-for="series in list.children" :key="series.id">{{ series.name }}</a></dd>
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
                <router-link :to="{path: '/user'}"><img src="static/img/mk_logo_login.png"></router-link>
                <p class="user-tip">Hi，你好</p>
                <div class="user-coming" v-if="!username">
                  <router-link :to="{path: '/login'}">登陆</router-link>
                  <router-link :to="{path: '/register'}">注册</router-link>
                </div>
                <div class="user-coming" v-else>
                  <router-link :to="{path: '/user'}">{{username}}</router-link>
                </div>
                <div class="user-out">
                  <a>新人有礼</a>
                  <router-link :to="{path: '/cart'}">购物车</router-link>
                </div>
              </div>
              <div class="news-info">
                <li><a><span class="news-tip">【热门】</span>新能源车企不能再躺在政策温床上睡懒觉</a></li>
                <li><a><span class="news-tip">【知识】</span>新能源车企不能再躺在政策温床上睡懒觉</a></li>
                <li><a><span class="news-tip">【公告】</span>新能源车企不能再躺在政策温床上睡懒觉</a></li>
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
            <h1>{{list.title}}</h1>
            <a><img :src="list.pic"></a>
            <h2>五金工具频道</h2>
            <h3>{{list.subTitle}}</h3>
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
      <div class="py-container bsale" @click="livePage('http://192.168.1.11/')">
        <absBox :data="companyLive" :indicator="'none'" :arrow="'never'"></absBox>
      </div>
    </div>
    <!-- 主题货源 -->
    <div class="container_h" >
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
            <p>换一换</p>
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
    <!-- </a><iframe class="live_iframe" ref="live_iframe" id="live_iframe" v-bind:src="liveSource" width="360" height="300" frameborder="0" scrolling="no"></iframe></a> -->
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
import { apiAxios } from '../../common/utils'
import { api } from '../../common/api'
import shortcut from '../../components/shortcutHeader'
import headerNav from '../../components/headerNav'
import homeNav from '../../components/homeNav'
import absBox from '../../components/absBox'
import youLike from '../../components/youLike'
import pageFooter from '../../components/pageFooter'
export default {
  data () {
    return {
      is3Ding: false,
      liveSource: '',
      cateMenuItem: '',
      isShowNav: '', // 二级菜单显示状态
      menuData: '', // 条目菜单
      bannerList: '', // banner
      bgImg: '#f4f4f4',
      absList: [], // 轮播广告
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
      username: ''
    }
  },
  components: { shortcut, headerNav, pageFooter, absBox, youLike, homeNav },
  computed: {},
  created () {
    // 获取条目菜单
    apiAxios.AxiosG({
      url: api.homeMenu
    }, (rtn) => {
      if (rtn.data.success) {
        this.menuData = rtn.data.data.children
      }
    })
    // 主页banner
    apiAxios.AxiosG({
      url: api.homeBanner,
      params: { categoryId: 1 }
    }, (rtn) => {
      if (rtn.data.success) {
        this.bannerList = rtn.data.data.contentList
      }
    })
    // 主页banner广告
    apiAxios.AxiosG({
      url: api.homeBanner,
      params: { categoryId: 2 }
    }, (rtn) => {
      if (rtn.data.success) {
        this.absList = rtn.data.data.contentList
      }
    })
    // 会员3D
    apiAxios.AxiosG({
      url: api.homeBanner,
      params: { categoryId: 3 }
    }, (rtn) => {
      if (rtn.data.success) {
        this.bsaleList = rtn.data.data.contentList
      }
    })
    // 大类 分类
    apiAxios.AxiosG({
      url: api.homeBanner,
      params: { categoryId: 4 }
    }, (rtn) => {
      if (rtn.data.success) {
        this.classList = rtn.data.data.contentList
      }
    })
    // 五金工具 内容
    apiAxios.AxiosG({
      url: api.homeClass,
      params: { contentId: 19 }
    }, (rtn) => {
      if (rtn.data.success) {
        this.hardwareList = rtn.data.data
      }
    })
    // 日用百货
    apiAxios.AxiosG({
      url: api.homeClass,
      params: { contentId: 20 }
    }, (rtn) => {
      if (rtn.data.success) {
        this.lifeShops = rtn.data.data
      }
    })
    // 机械
    apiAxios.AxiosG({
      url: api.homeClass,
      params: { contentId: 21 }
    }, (rtn) => {
      if (rtn.data.success) {
        this.mechanicList = rtn.data.data
      }
    })
    // 机电设备
    apiAxios.AxiosG({
      url: api.homeClass,
      params: { contentId: 22 }
    }, (rtn) => {
      if (rtn.data.success) {
        this.elecList = rtn.data.data
      }
    })
    // 3c数码
    apiAxios.AxiosG({
      url: api.homeClass,
      params: { contentId: 23 }
    }, (rtn) => {
      if (rtn.data.success) {
        this.threeCList = rtn.data.data
      }
    })
    // 汽车用品
    apiAxios.AxiosG({
      url: api.homeClass,
      params: { contentId: 24 }
    }, (rtn) => {
      if (rtn.data.success) {
        this.cartLife = rtn.data.data
      }
    })
    // 企业直播
    apiAxios.AxiosG({
      url: api.homeBanner,
      params: { categoryId: 7 }
    }, (rtn) => {
      if (rtn.data.success) {
        this.companyLive = rtn.data.data.contentList
      }
    })
    // 主题货源
    apiAxios.AxiosG({
      url: api.homeBanner,
      params: { categoryId: 5 }
    }, (rtn) => {
      if (rtn.data.success) {
        this.sourceList = rtn.data.data.contentList
      }
    })
    // 照明工具
    apiAxios.AxiosG({
      url: api.homeClass,
      params: { contentId: 25 }
    }, (rtn) => {
      if (rtn.data.success) {
        this.lightList = rtn.data.data
      }
    })
    apiAxios.AxiosG({
      url: api.homeClass,
      params: { contentId: 26 }
    }, (rtn) => {
      if (rtn.data.success) {
        this.lightList1 = rtn.data.data
      }
    })
    apiAxios.AxiosG({
      url: api.homeClass,
      params: { contentId: 27 }
    }, (rtn) => {
      if (rtn.data.success) {
        this.lightList2 = rtn.data.data
      }
    })
    apiAxios.AxiosG({
      url: api.homeClass,
      params: { contentId: 28 }
    }, (rtn) => {
      if (rtn.data.success) {
        this.lightList3 = rtn.data.data
      }
    })
    apiAxios.AxiosG({
      url: api.homeClass,
      params: { contentId: 29 }
    }, (rtn) => {
      if (rtn.data.success) {
        this.lightList4 = rtn.data.data
      }
    })
    apiAxios.AxiosG({
      url: api.homeClass,
      params: { contentId: 30 }
    }, (rtn) => {
      if (rtn.data.success) {
        this.lightList5 = rtn.data.data
      }
    })
    apiAxios.AxiosG({
      url: api.homeClass,
      params: { contentId: 31 }
    }, (rtn) => {
      if (rtn.data.success) {
        this.lightList6 = rtn.data.data
      }
    })
    apiAxios.AxiosG({
      url: api.homeClass,
      params: { contentId: 32 }
    }, (rtn) => {
      if (rtn.data.success) {
        this.lightList7 = rtn.data.data
      }
    })
    apiAxios.AxiosG({
      url: api.homeClass,
      params: { contentId: 33 }
    }, (rtn) => {
      if (rtn.data.success) {
        this.lightList8 = rtn.data.data
      }
    })
    // 商学院
    apiAxios.AxiosG({
      url: api.homeBanner,
      params: { categoryId: 8 }
    }, (rtn) => {
      if (rtn.data.success) {
        this.school = rtn.data.data.contentList
      }
    })
    // 猜你喜欢
    apiAxios.AxiosG({
      url: api.homeBanner,
      params: { categoryId: 6 }
    }, (rtn) => {
      if (rtn.data.success) {
        this.likeList = rtn.data.data.contentList
      }
    })
    // this.$router.push({ path:'/artist/dynamic',query:{id: this.$route.query.id} })
  },
  activated () {
    this.username = this.$cookies.isKey('userInfo') ? this.$cookies.get('userInfo').username : ''
  },
  deactivated () {},
  mounted () {
    this.username = this.$cookies.isKey('userInfo') ? this.$cookies.get('userInfo').username : ''
    // 为iframe点击可触发点击事件
    let IframeOnClick = {
      resolution: 200,
      iframes: [],
      interval: null,
      Iframe: function () {
        this.element = arguments[0]
        this.cb = arguments[1]
        this.hasTracked = false
      },
      track: function (element, cb) {
        this.iframes.push(new this.Iframe(element, cb))
        if (!this.interval) {
          let _this = this
          this.interval = setInterval(function () { _this.checkClick() }, this.resolution)
        }
      },
      checkClick: function () {
        if (document.activeElement) {
          let activeElement = document.activeElement
          for (let i in this.iframes) {
            if (activeElement === this.iframes[i].element) { // user is in this Iframe
              if (this.iframes[i].hasTracked === false) {
                this.iframes[i].cb.apply(window, [])
                this.iframes[i].hasTracked = true
              }
            } else {
              this.iframes[i].hasTracked = false
            }
          }
        }
      }
    }
    // 获取iframe 框架下的body节点并且监听
    let iframeDom = this.$el.getElementsByTagName('iframe')[0].contentWindow.document.body
    this.iframeDom = iframeDom
    if (this.iframeDom.offsetHeight) {
      this.iframeDom.addEventListener('click', (e) => {
        this.liveSource = '../static/live.html'
        return false
      })
    } else { // 火狐 body高度为0 无法触发body点击事件
      IframeOnClick.track(this.$refs.live_iframe, () => {
        this.liveSource = '../static/live.html'
        return false
      })
    }
  },
  methods: {
    carouselChange (index, key) {
      this.bgImg = this.bannerList[index].bgcolor
    },
    onTest () {
      apiAxios.AxiosG({
        url: '/test/live/url'
      }, (rtn) => {
        this.playerOptions.HLS = rtn.data.data.url_hls
        console.log(this.playerOptions.HLS)
      })
    },
    livePage (url) { // http://192.168.1.11/
      window.open(url)
      return false
    },
    liveShow () {
      this.liveSource = '../static/live.html'
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
    }
  }
}
</script>
<style scoped>
@import "../../assets/css/app.css"
/*@import "../static/css/app.css";*/
</style>
