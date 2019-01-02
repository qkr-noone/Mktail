<template>
  <div id="index">
    <shortcut></shortcut>
    <headerNav></headerNav>
    <!-- 头部 -->
    <div class="container_h">
      <div class="sort">
        <div class="py-container">
          <div class="navitem">
            <h2 class="nav-all">全部商品分类</h2>
            <ul class="nav-ul">
              <li><a class="active">首页</a></li>
              <li><a>品牌站</a></li>
              <li><a>原工厂</a></li>
              <li><a>商学院</a></li>
              <li><a>服务</a></li>
              <li><a>直播</a></li>
              <li><a>社区</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="container_h">
      <div class="sort">
        <div class="py-container">
          <div class="SortList ">
            <div class=" Left all-sort-list">
              <div class="all-sort-list2">
                <!-- 截取15条类目 -->
                <div class="item bo" v-for="item in menuData.slice(0,14)"  :key="item.id" >
                  <h3><a href="">{{ item.name }}</a><i class="el-icon-arrow-right"></i></h3>
                  <div class="item-list clearfix">
                    <div class="subitem">
                      <dl class="fore1" v-for="list in item.children" :key="list.id">
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
                <el-carousel :interval="5000" arrow="always" height="100%">
                  <el-carousel-item v-for="item in bannerList" :key="item.id">
                    <router-link :to="{path: '/detail', query:{}}"><img :src="item.pic"></router-link>
                  </el-carousel-item>
                </el-carousel>
              </div>
              <div class="style-recom">
                <li v-for="list in absList" :key="list.id" :data-href="list.url">
                  <div><h3>{{list.title}}</h3><h4>{{list.subTitle}}</h4></div>
                  <a><img class="wrap" :src="list.pic"></a>
                </li>
              </div>
            </div>
            <div class="Right">
              <div class="user-info">
                <a><img src="../../../static/img/mk_logo_login.png"></a>
                <p class="user-tip">Hi，你好</p>
                <div class="user-coming">
                  <a>登陆</a>
                  <a>注册</a>
                </div>
                <div class="user-out">
                  <a>新人有礼</a>
                  <a>购物车</a>
                </div>
              </div>
              <div class="news-info">
                <li><a><span class="news-tip">【热门】</span>新能源车企不能再躺在政策温床上睡懒觉</a></li>
                <li><a><span class="news-tip">【知识】</span>新能源车企不能再躺在政策温床上睡懒觉</a></li>
                <li><a><span class="news-tip">【公告】</span>新能源车企不能再躺在政策温床上睡懒觉</a></li>
              </div>
              <div class="other-info">
                <li><a><img src="../../../static/img/mk_huiyuan.png"><h5>会员</h5></a></li>
                <li><a><img src="../../../static/img/mk_chongzhi.png"><h5>充值</h5></a></li>
                <li><a><img src="../../../static/img/mk_hongbao.png"><h5>红包</h5></a></li>
                <li><a><img src="../../../static/img/mk_gongyi.png"><h5>公益</h5></a></li>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 标语、3D 直播 -->
    </div>
    <!-- 会员3D服务 -->
    <div class="container_h" >
      <div class="py-container bsale">
        <el-carousel :interval="5000" indicator-position="none" arrow="never" height="100%">
          <el-carousel-item v-for="item in bsaleList" :key="item.id">
            <router-link :to="item.url"><img :src="item.pic"></router-link>
          </el-carousel-item>
        </el-carousel>
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
                <a :href="data.url"><img class="wrap" :src="data.pic"></a>
                <div><span>{{data.price}}元</span><div class="before-pri"><span>288元</span></div></div>
              </li>
              <li class="sty-con-li" v-for="(data, index) in lifeShops" :key="data.id" v-if="index < 4 && list.id === data.contentId">
                <h2>{{data.title}}</h2>
                <a :href="data.url"><img class="wrap" :src="data.pic"></a>
                <div><span>{{data.price}}元</span><div class="before-pri"><span>288元</span></div></div>
              </li>
              <li class="sty-con-li" v-for="(data, index) in mechanicList" :key="data.id" v-if="index < 4 && list.id === data.contentId">
                <h2>{{data.title}}</h2>
                <a :href="data.url"><img class="wrap" :src="data.pic"></a>
                <div><span>{{data.price}}元</span><div class="before-pri"><span>288元</span></div></div>
              </li>
              <li class="sty-con-li" v-for="(data, index) in elecList" :key="data.id" v-if="index < 4 && list.id === data.contentId">
                <h2>{{data.title}}</h2>
                <a :href="data.url"><img class="wrap" :src="data.pic"></a>
                <div><span>{{data.price}}元</span><div class="before-pri"><span>288元</span></div></div>
              </li>
              <li class="sty-con-li" v-for="(data, index) in threeCList" :key="data.id" v-if="index < 4 && list.id === data.contentId">
                <h2>{{data.title}}</h2>
                <a :href="data.url"><img class="wrap" :src="data.pic"></a>
                <div><span>{{data.price}}元</span><div class="before-pri"><span>288元</span></div></div>
              </li>
              <li class="sty-con-li" v-for="(data, index) in cartLife" :key="data.id" v-if="index < 4 && list.id === data.contentId">
                <h2>{{data.title}}</h2>
                <a :href="data.url"><img class="wrap" :src="data.pic"></a>
                <div><span>{{data.price}}元</span><div class="before-pri"><span>288元</span></div></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 优选好店 今日好货 品质生活 官方折扣-->
    <div class="container_h" >
      <div class="py-container activity">
        <div class="ac-shop ac-left">
          <div class="ac-shop-head">
            <h3>{{shopsCate.name}}</h3>
            <div class="more"><p>更多</p><i class="el-icon-arrow-right"></i></div>
          </div>
          <div class="ac-shop-con">
            <h4 v-for="(item, index) in shopsList" :key="item.id" v-if="index===0">{{item.title}}</h4>
            <div class="ac-shop-con-detail">
              <router-link v-for="(item, index) in shopsList" :key="item.id" v-if="index===0" :to="item.url"><img :src="item.pic"></router-link>
              <div>
                <router-link v-for="(item, index) in shopsList" :key="item.id" v-if="index===1" :to="item.url"><img :src="item.pic"></router-link>
                <router-link v-for="(item, index) in shopsList" :key="item.id" v-if="index===2" :to="item.url"><img :src="item.pic"></router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="ac-shop ac-right">
          <div class="ac-shop-head">
            <h3>{{goodsCate.name}}</h3>
            <div class="more"><p>更多</p><i class="el-icon-arrow-right"></i></div>
          </div>
          <ul class="ac-shop-con">
            <li v-for="list in goodsList" :key="list.id">
              <h4>{{list.title}}</h4>
              <div>
                <router-link :to="list.url"><img :src="list.pic"></router-link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container_h" >
      <div class="py-container activity">
        <div class="ac-shop ac-right ac-right-two">
          <div class="ac-shop-head">
            <h3>{{lifeCate.name}}</h3>
            <div class="more"><p>更多</p><i class="el-icon-arrow-right"></i></div>
          </div>
          <ul class="ac-shop-con">
            <li v-for="list in lifeList" :key="list.id">
              <h4>{{list.title}}</h4>
              <div>
                <router-link :to="list.url"><img :src="list.pic"></router-link>
              </div>
            </li>
          </ul>
        </div>
        <div class="ac-shop ac-left">
          <div class="ac-shop-head">
            <h3>{{discountCate.name}}</h3>
            <div class="more"><p>更多</p><i class="el-icon-arrow-right"></i></div>
          </div>
          <div class="ac-shop-con">
            <h4 v-for="(list, index) in discountList" v-if="index===0" :key="list.id">{{list.title}}</h4>
            <div class="ac-shop-con-detail">
              <router-link v-for="(list, index) in discountList" v-if="index===0" :key="list.id" :to="list.url"><img :src="list.pic"></router-link>
              <div>
                <router-link v-for="(list, index) in discountList" v-if="index===1" :key="list.id" :to="list.url"><img :src="list.pic"></router-link>
                <router-link v-for="(list, index) in discountList" v-if="index===2" :key="list.id" :to="list.url"><img :src="list.pic"></router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- BIG SALE 横条-->
    <div class="container_h" >
      <div class="py-container bsale">
        <router-link v-for="(list,index) in bigSaleList" v-if="index===0" :to="list.url" :key="list.id"><img :src="list.pic"></router-link>
        <!-- <a href=""><img src="../../../static/img/big-sale.png"></a> -->
      </div>
    </div>
    <!-- 闪购专区 -->
    <div class="container_h" >
      <div class="py-container flash">
        <div>
          <div class="ac-shop-head">
            <h3>{{flashCate.name}}</h3>
            <div class="more"><p>换一换</p><p>更多</p><i class="el-icon-arrow-right"></i></div>
          </div>
          <div class="flash-con">
            <ul class="flash-ul">
              <li class="flash-li" v-for="(list, index) in flashList" :key="list.id" v-if="index < 3">
                <router-link :to="list.url"><img :src="list.pic"></router-link>
                <div class="flash-li-info">
                  <h3>{{list.title}}</h3>
                  <p>{{list.price}}</p>
                  <div class="before-pri"><span>原价288</span></div>
                  <div>前一小时领券下单立减20</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 热卖单品 -->
    <div class="container_h" >
      <div class="py-container hot">
        <div>
          <div class="hot-title">
            <p>—— 热卖单品 ——</p>
          </div>
          <div class="hot-con">
            <ul class="hot-con-ul">
              <li class="hot-con-li" v-for="list in hotList" :key="list.id">
                <router-link :to="list.url"><img :src="list.pic"></router-link>
                <h3>{{list.title}}</h3>
                <p>{{list.price}}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 猜你喜欢 -->
    <div class="container_h" >
      <div class="py-container hot">
        <div>
          <div class="hot-title">
            <p>—— 猜你喜欢 ——</p>
          </div>
          <div class="hot-con">
            <ul class="hot-con-ul">
              <li class="hot-con-li" v-for="list in likeList" :key="list.id">
                <router-link :to="list.url"><img :src="list.pic"></router-link>
                <h3>{{list.title}}</h3>
                <p>{{list.price}}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- END -->
    <div class="container_h" >
      <div class="py-container hot">
        <div>
          <div class="hot-title">
            <p>—— END ——</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 邮件留言反馈 -->
    <!-- <div class="cla">
      <div class="con_title">
        <h2>PLEASE CONTACT OUR SALES TO GET MORE INFORMATION THANKS</h2>
      </div>
      <div class="con_info">
        <div class="con_detail">
          <p class="con_tip">Send message to supplier</p>
          <p class="con_name">To:&nbsp;&nbsp;sean lee</p>
          <div class="con_mes">
          <el-form ref="form" :model="formMessage" label-width="80px">
            <el-form-item label="Message">
              <el-input type="textarea" placeholder="Eneter your inquiry details such as product name,color,size,quantity,material,etc" v-model="formMessage.desc"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button class="form_cha" type="primary" @click="onSubmit">SEND</el-button>
            </el-form-item>
            <div class="form_ag_ku">
              <input class="form_agree" type="checkbox" value="agree" v-model="formMessage.agree" >
              <label>I agree to share my Business Card to the supplier</label>
            </div>
          </el-form>
          </div>
        </div>
      </div>
    </div> -->
    <pageFooter></pageFooter>
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
import { apiAxios, getCookie, setCookie, delCookie } from '../../common/utils'
import { api } from '../../common/api'
import shortcut from '../../components/shortcutHeader'
import headerNav from '../../components/headerNav'
import pageFooter from '../../components/pageFooter'
export default {
  data () {
    return {
      formMessage: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        agree: false
      },
      is3Ding: false,
      liveSource: '',
      cateMenuItem: '',
      isShowNav: '', // 二级菜单显示状态
      menuData: '', // 条目菜单
      bannerList: '', // banner
      absList: [], // 轮播广告
      bsaleList: [], // 会员3D
      hardwareList: [], // 五金工具
      lifeShops: [], // 日用百货
      mechanicList: [], // 机械
      elecList: [], // 机电设备
      threeCList: [], // 3c数码
      cartLife: [], // 汽车用品
      classList: [], // 大类分类
      shopsList: [], // 优选好店
      shopsCate: '',
      goodsList: [], // 今日好物
      goodsCate: '',
      lifeList: [], // 品质生活
      lifeCate: '',
      discountList: [], // 官方折扣
      discountCate: '',
      bigSaleList: [], // 横条
      bigSaleCate: '',
      flashList: [], // 闪购
      flashCate: '',
      hotList: [], // 热卖单品
      hotCate: '',
      likeList: [], // 猜你喜欢
      likeCate: ''
    }
  },
  components: { shortcut, headerNav, pageFooter },
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
    // 主页优选好店
    apiAxios.AxiosG({
      url: api.homeBanner,
      params: { categoryId: 2 }
    }, (rtn) => {
      if (rtn.data.success) {
        this.shopsList = rtn.data.data.contentList
        this.shopsCate = rtn.data.data.contentCategory
      }
    })
    // 今日好物
    apiAxios.AxiosG({
      url: api.homeBanner,
      params: { categoryId: 3 }
    }, (rtn) => {
      if (rtn.data.success) {
        this.goodsList = rtn.data.data.contentList.slice(0, 4)
        this.goodsCate = rtn.data.data.contentCategory
      }
    })
    // 品质生活
    apiAxios.AxiosG({
      url: api.homeBanner,
      params: { categoryId: 4 }
    }, (rtn) => {
      if (rtn.data.success) {
        this.lifeList = rtn.data.data.contentList.slice(0, 4)
        this.lifeCate = rtn.data.data.contentCategory
      }
    })
    // 官方折扣
    apiAxios.AxiosG({
      url: api.homeBanner,
      params: { categoryId: 6 }
    }, (rtn) => {
      if (rtn.data.success) {
        this.discountList = rtn.data.data.contentList
        this.discountCate = rtn.data.data.contentCategory
      }
    })
    // big sale 横条
    apiAxios.AxiosG({
      url: api.homeBanner,
      params: { categoryId: 8 }
    }, (rtn) => {
      if (rtn.data.success) {
        this.bigSaleList = rtn.data.data.contentList
        this.bigSaleCate = rtn.data.data.contentCategory
      }
    })
    // 闪购
    apiAxios.AxiosG({
      url: api.homeBanner,
      params: { categoryId: 7 }
    }, (rtn) => {
      if (rtn.data.success) {
        this.flashList = rtn.data.data.contentList.slice(0, 3)
        this.flashCate = rtn.data.data.contentCategory
      }
    })
    // 热卖单品
    apiAxios.AxiosG({
      url: api.homeBanner,
      params: { categoryId: 9 }
    }, (rtn) => {
      if (rtn.data.success) {
        this.hotList = rtn.data.data.contentList.slice(0, 5)
        this.hotCate = rtn.data.data.contentCategory
      }
    })
    // 猜你喜欢
    apiAxios.AxiosG({
      url: api.homeBanner,
      params: { categoryId: 10 }
    }, (rtn) => {
      if (rtn.data.success) {
        this.likeList = rtn.data.data.contentList.slice(0, 5)
        this.likeCate = rtn.data.data.contentCategory
      }
    })
    setCookie('一起')
    getCookie('一起')
    delCookie('一起')
    // this.$router.push({ path:'/artist/dynamic',query:{id: this.$route.query.id} })
  },
  activated () {},
  deactivated () {},
  mounted () {
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
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    onTest () {
      apiAxios.AxiosG({
        url: '/test/live/url'
      }, (rtn) => {
        this.playerOptions.HLS = rtn.data.data.url_hls
        console.log(this.playerOptions.HLS)
      })
    },
    onSubmit () {
      // console.log(IP)
      if (this.formMessage.agree && this.formMessage.desc) {
        console.log('submit!')
      } else {
        console.log('请同意', this.formMessage)
      }
    },
    liveShow () {
      this.liveSource = '../static/live.html'
    },
    threeDclose () {
      this.is3Ding = false
      return false
    },
    threeDUrl (threeDUrl) { // http://120.79.93.197/we1/
      this.is3Ding = true
      this.$refs.threeDSrc.src = threeDUrl
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
