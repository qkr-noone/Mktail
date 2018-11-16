<template ref="template">
  <div id="app">
    <!-- 头部、登陆、标语、直播、3D -->
    <div class="container_h">
      <div class="header">
        <div class="title" @click="onTest">
          <div class="logo_info">
              <div class="logo"><img src="../static/img/logo.png?width=50px"></div>
              <div class="logo_hopes"><img src="../static/img/HOPES_logo.png?width=50px"></div>
          </div>
          <div class="link_info">
            <p class="hopes_fonts">XINXING:OEM</p>
            <div class="link">
              <div><img class="phone_img" src="../static/img/phone.png"><p>86-020-87937688</p></div>
              <div><img class="phone_img email" src="../static/img/email.png"><p>hopes@icaster.xin</p></div>
            </div>
          </div>
        </div>
        <form class="sign_in" action="" method="get">
          <h2>SIGN IN:</h2>
          <div class="sign_in_input">
            <a><img src="../static/img/user.png?width=20px"></a><input type="text" name="" placeholder="User name/email">
          </div>
          <div class="sign_in_input">
            <a><img src="../static/img/password.png?width=20px"></a><input type="text" name="">
          </div>
          <input id="submit" type="button" value="Submit" />
        </form>
      </div>
      <div class="nav">
        <div class="nav_con">
          <div class="nav_detail">
            <el-menu
              :default-active="activeIndex"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
              background-color=transparent
              text-color="#fff"
              active-text-color="#FF8C00">
              <el-menu-item index="1">Home</el-menu-item>
              <el-submenu index="2">
                <template slot="title">Product Categorise</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
                <el-submenu index="2-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="2-4-1">选项1</el-menu-item>
                  <el-menu-item index="2-4-2">选项2</el-menu-item>
                  <el-menu-item index="2-4-3">选项3</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-submenu index="3">
                <template slot="title">Product Categorise</template>
                <el-menu-item index="3-1">选项1</el-menu-item>
                <el-menu-item index="3-2">选项2</el-menu-item>
                <el-menu-item index="3-3">选项3</el-menu-item>
                <el-submenu index="3-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="3-4-1">选项1</el-menu-item>
                  <el-menu-item index="3-4-2">选项2</el-menu-item>
                  <el-menu-item index="3-4-3">选项3</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-menu-item index="4"><a href="">Contacts</a></el-menu-item>
            </el-menu>
          </div>
          <div class="nav_search">
            <form action="#" id="search_form">
              <div class="search_box">
                <div class="search_ipt" id="search_ipt_box">
                  <!-- <i class="search_icon"></i> -->
                    <input type="text" id="search_ipt" placeholder="search product">
                  <!-- <i class="search_clear" id="search_clear"></i> -->
                </div>
                <a class="search_btn bolder" id="search_btn"><img src="../static/img/search.png"></a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- 标语、3D 直播 -->
      <div class="pro_info">
        <div class="pro_tip">
          <h2>power</h2>
          <p>Production Capacity</p>
          <h1>2000,000 <a>Pcs/M</a></h1>
        </div>
        <!-- 3D 直播 -->
        <div class="pro_show">
          <div class="pro_show_part">
            <h1>24-Hour Online Audit</h1>
            <div class="live">
              <div class="pro_show_dec">
                <p>If Necessary, Please Contact Us To Ask About</p>
                <p>The Monitoring Method.</p>
              </div>
              <div class="pro_show_live">
                <a><video id="live_1"></video></a>
                <a><img class="wrap" src="../static/img/fur_model_2.png"></a>
                <a><img class="wrap" src="../static/img/fur_model_2.png"></a>
                <a><img class="wrap" src="../static/img/fur_model_2.png"></a>
                <a><img class="wrap" src="../static/img/fur_model_2.png"></a>
                <a><img class="wrap" src="../static/img/fur_model_2.png"></a>
                <a><img class="wrap" src="../static/img/fur_model_2.png"></a>
                <a><img class="wrap" src="../static/img/fur_model_2.png"></a>
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
                  <a><img class="wrap" src="../static/img/fur_model_3.png"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 邮件留言反馈 -->
    <div class="cla">
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
    </div>
    <!-- 产品系列 -->
    <div class="series">
      <div class="series_title"></div>
      <!-- 家具系列 furniture -->
      <div class="fur">
        <div class="fur_detail">
          <div class="fur_detail_class">
            <a href=""><img class="wrap" src="../static/img/fur_class.png"></a>
            <a href=""><img class="wrap" src="../static/img/fur_class.png"></a>
            <a href=""><img class="wrap" src="../static/img/fur_class.png"></a>
            <a href=""><img class="wrap" src="../static/img/fur_class.png"></a>
          </div>
        </div>
      </div>
      <div class="fur">
        <div class="fur_detail">
          <div class="fur_detail_class">
            <a href=""><img class="wrap" src="../static/img/fur_class.png"></a>
            <a href=""><img class="wrap" src="../static/img/fur_class.png"></a>
            <a href=""><img class="wrap" src="../static/img/fur_class.png"></a>
            <a href=""><img class="wrap" src="../static/img/fur_class.png"></a>
          </div>
        </div>
      </div>
      <div class="fur">
        <div class="fur_detail">
          <div class="fur_detail_class">
            <a href=""><img class="wrap" src="../static/img/fur_class.png"></a>
            <a href=""><img class="wrap" src="../static/img/fur_class.png"></a>
            <a href=""><img class="wrap" src="../static/img/fur_class.png"></a>
            <a href=""><img class="wrap" src="../static/img/fur_class.png"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { api } from './common/utils'
import videoHls from 'videojs-contrib-hls'

Vue.use(ElementUI)
Vue.use(videoHls)
export default {
  data () {
    return {
      activeIndex: '1',
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
      streams: {
        rtmp: '',
        hls: ''
      },
      playerOptions: {
        overNative: true,
        autoplay: false,
        controls: true,
        techOrder: ['flash', 'html5'],
        sourceOrder: true,
        flash: {
          hls: { withCredentials: false },
          swf: isProduction ? '/vue-videojs-demo/static/media/video-js.swf' : '/static/media/video-js.swf'
        },
        html5: { hls: { withCredentials: false } },
        sources: [
          {
            type: 'rtmp/mp4',
            src: 'rtmp://184.72.239.149/vod/&mp4:BigBuckBunny_115k.mov'
          },
          {
            withCredentials: false,
            type: 'application/x-mpegURL',
            src: ''
          }
        ],
        poster: isProduction ? '/vue-videojs-demo/static/images/logo.png' : '/static/images/logo.png'
        // controlBar: {
        //   timeDivider: false, // 时间分割线
        //   durationDisplay: false, // 总时间
        //   progressControl: true, // 进度条
        //   customControlSpacer: true, // 未知
        //   fullscreenToggle: true // 全屏
        // },
    }
  },
  computed: {

  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    onTest () {
      api.Axios({
        url: '/test/live/url'
      }, (rtn) => {
        this.playerOptions. HLS = rtn.data.data.url_hls
        console.log(HLS)
      })
    },
    onSubmit () {
      // console.log(IP)
      if (this.formMessage.agree && this.formMessage.desc) {
        console.log('submit!')
      } else {
        console.log('请同意', this.formMessage)
      }
    }
  }
}
</script>

<style>
@import "./assets/css/app.css";
/*@import "../static/css/app.css";*/
</style>
