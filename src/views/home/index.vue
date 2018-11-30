<template>
  <div id="index">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <!-- <div class="mk-shortcut">
      <div class="shortcut">
        <div class="sc-left">
          <p>欢迎来到猴尾巴</p>
          <router-link :to="{ path: '/login' }" >请登录</router-link>
          <router-link :to="{ path: '/register' }" >免费注册</router-link>
        </div>
        <div class="sc-right">
          <ul>
            <li>
              <div><a href="">我的猴尾巴</a></div>
            </li>
            <li>
              <div><a href="">购物车80件</a></div>
            </li>
            <li>
              <div><a href="">企业采购</a></div>
            </li>
            <li>
              <div><a href="">实力商家</a></div>
            </li>
            <li>
              <div><a href="">客服中心</a></div>
            </li>
            <li>
              <div><a href="">网站导航</a></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <header class="mk-header">
      <div class="mk-head">
        <div class="h-logo">
          <a href=""><img src="../../../static/img/logo-234-148.png"></a>
        </div>
        <div class="h-search">
          <form action="#" id="search_form">
            <div class="search_box">
              <div class="search_ipt" id="search_ipt_box">
                <input type="text" id="search_ipt" placeholder="search product">
              </div>
              <router-link :to="{path: '/search'}" class="search_btn bolder" id="search_btn"><img src="../../../static/img/search.png"></router-link>
            </div>
          </form>
        </div>
        <div class="h-other"></div>
      </div>
    </header> -->
    <shortcutHeader></shortcutHeader>
    <!-- 头部、登陆、标语、直播、3D -->
    <div class="container_h">
      <!-- <div class="header">
        <div class="title" @click="onTest">
          <div class="logo_info">
              <div class="logo"><img src="../../../static/img/logo.png?width=50px"></div>
              <div class="logo_hopes"><img src="../../../static/img/HOPES_logo.png?width=50px"></div>
          </div>
          <div class="link_info">
            <p class="hopes_fonts">XINXING:OEM</p>
            <div class="link">
              <div><img class="phone_img" src="../../../static/img/phone.png"><p>86-020-87937688</p></div>
              <div><img class="phone_img email" src="../../../static/img/email.png"><p>hopes@icaster.xin</p></div>
            </div>
          </div>
        </div>
        <form class="sign_in" action="" method="get">
          <h2>SIGN IN:</h2>
          <div class="sign_in_input">
            <a><img src="../../../static/img/user.png?width=20px"></a><input type="text" name="" placeholder="User name/email">
          </div>
          <div class="sign_in_input">
            <a><img src="../../../static/img/password.png?width=20px"></a><input type="text" name="">
          </div>
          <input id="submit" type="button" value="Submit"  @click="register()"/>
          <router-link :to="{ path: '/detail' }">detail</router-link>
        </form>
      </div> -->
      <div class="sort">
        <div class="py-container">
          <div class="yui3-g SortList ">
            <div class="yui3-u Left all-sort-list">
              <div class="all-sort-list2">
                <!-- 截取15条类目 -->
                <div class="item bo" v-for="item in menuData.slice(0,15)"  :key="item.id" >
                  <h3><a href="">{{ item.name }}</a></h3>
                  <div class="item-list clearfix" >
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
            <div class="yui3-u Center banerArea">
              <!--banner轮播-->
              <div id="myCarousel" data-ride="carousel" data-interval="4000" class="sui-carousel">
                 <el-carousel :interval="5000" arrow="always" height="100%">
                  <el-carousel-item v-for="item in 4" :key="item">
                    <a href=""><img src="../../../static/img/logo-1050-460.png"></a>
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="nav">
        <div class="nav_con">
          <div class="nav_search">
            <form action="#" id="search_form">
              <div class="search_box">
                <div class="search_ipt" id="search_ipt_box">
                    <input type="text" id="search_ipt" placeholder="search product">
                </div>
                <a class="search_btn bolder" id="search_btn"><img src="../../../static/img/search.png"></a>
              </div>
            </form>
          </div>
        </div>
      </div> -->
      <!-- 标语、3D 直播 -->
      <!-- <div class="pro_info">
        <div class="pro_tip">
          <h2>power</h2>
          <p>Production Capacity</p>
          <h1>2000,000 <a>Pcs/M</a></h1>
        </div>
        <div class="pro_show">
          <div class="pro_show_part">
            <h1>24-Hour Online Audit</h1>
            <div class="live">
              <div class="pro_show_dec">
                <p>If Necessary, Please Contact Us To Ask About</p>
                <p>The Monitoring Method.</p>
              </div>
              <div class="pro_show_live">
                <a>
                  <iframe class="live_iframe" ref="live_iframe" id="live_iframe" v-bind:src="liveSource" width="360" height="300" frameborder="0" scrolling="no"></iframe>
                </a>
                <a><img class="wrap" src="../../../static/img/fur_model_2.png"></a>
              </div>
            </div>
          </div>
          <div class="pro_show_part">
            <h1>3D Modeling Exploded View</h1>
            <div class="live">
              <div class="pro_show_dec">
                <p>3D Model Diagram1:1 Physical Production， Maximum Limit To  Restore The Authenticity Of The Object And The Pictureodel Diagram1:1 Physical Production， Maximum Limit To  Restore The Authenticity Of The Object And The Picture</p>
              </div>
              <div class="pro_show_live">
                <div class="three_d">
                  <a  @click="threeDUrl('http://120.79.93.197/we1/')">
                    <img class="wrap" src="../../../static/img/fur_model_3.png">
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> -->
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
    <!-- 产品系列 -->
    <div class="series">
      <div class="series_title"></div>
      <proListBox :data="item" v-for="item in proList"  :key="item.id" :data-index="item.id"></proListBox>
    </div>
    <Footer></Footer>
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
import proListBox from '../../components/proListBox'
import shortcutHeader from '../../components/shortcutHeader'
import Footer from '../../components/footer'
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
      proList: '',
      cateMenuItem: '',
      isShowNav: '', // 二级菜单显示状态
      menuData: ''
    }
  },
  components: { proListBox, shortcutHeader, Footer },
  created () {
    apiAxios.AxiosG({
      url: api.homeMenu
    }, (rtn) => {
      this.menuData = rtn.data.data.children
      console.log(this.menuData)
    })
    apiAxios.AxiosG({
      url: api.homePro
    }, (rtn) => {
      this.proList = rtn.data.data
      console.log(this.proList)
      if (rtn.data.success) {
        this.proList = rtn.data.data
      }
    })
  },
  computed: {
  },
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
    threeDUrl (threeDUrl) {
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
