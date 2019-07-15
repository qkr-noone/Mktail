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
<<<<<<< HEAD
                <div class="item bo" v-for="item in menuData.slice(0,15)"  :key="item.id" >
                  <h3><a href="javascript:;">{{ item.name }}</a><i class="el-icon-arrow-right"></i></h3>
                  <div class="item-list clearfix">
                    <div class="subitem">
                      <dl class="fore1" v-for="list in item.children" v-if="list.children.length" :key="list.id">
                        <dt><router-link :to="{path: '/search', query: {keywords: list.name}}" >{{ list.name }}</router-link></dt>
                        <dd><router-link :to="{path: '/search', query: {keywords: series.name}}" v-for="series in list.children" :key="series.id">{{ series.name }}</router-link></dd>
=======
                <div class="item bo" v-for="item in menuData.slice(0,14)"  :key="item.id" >
                  <h3><a href="">{{ item.name }}</a><i class="el-icon-arrow-right"></i></h3>
                  <div class="item-list clearfix">
                    <div class="subitem">
                      <dl class="fore1" v-for="list in item.children" v-if="list.children.length" :key="list.id">
                        <dt><a href="">{{ list.name }}</a></dt>
                        <dd><a href="" v-for="series in list.children" :key="series.id">{{ series.name }}</a></dd>
>>>>>>> remotes/origin/master
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
<<<<<<< HEAD
                    <a :href="item.url" target="_blank"><img :src="item.pic"></a>
=======
                    <router-link :to="{path: item.url}"><img :src="item.pic"></router-link>
>>>>>>> remotes/origin/master
                  </el-carousel-item>
                </el-carousel>
              </div>
              <div class="style-recom">
<<<<<<< HEAD
                <li v-for="list in absList" :key="list.id" :data-href="list.url" :href="list.url">
                  <div><h3>{{list.title}}</h3><h4>{{list.subTitle}}</h4></div>
                  <a :href="list.url" target="_blank"><img class="wrap" :src="list.pic"></a>
=======
                <li v-for="list in absList" :key="list.id" :data-href="list.url">
                  <div><h3>{{list.title}}</h3><h4>{{list.subTitle}}</h4></div>
                  <router-link :to="{path: list.url}"><img class="wrap" :src="list.pic"></router-link>
>>>>>>> remotes/origin/master
                </li>
              </div>
            </div>
            <div class="Right">
              <div class="user-info">
<<<<<<< HEAD
                <router-link :to="{path: '/user'}"><img :src="userInfo.headPic || 'static/img/logo-200.png'" class="user-head-img"></router-link>
                <p class="user-tip">Hi，你好</p>
                <div class="user-coming" v-if="!userInfo.username">
=======
                <router-link :to="{path: '/user'}"><img src="static/img/mk_logo_login.png"></router-link>
                <p class="user-tip">Hi，你好</p>
                <div class="user-coming" v-if="!username">
>>>>>>> remotes/origin/master
                  <router-link :to="{path: '/login'}">登陆</router-link>
                  <router-link :to="{path: '/register'}">注册</router-link>
                </div>
                <div class="user-coming" v-else>
<<<<<<< HEAD
                  <router-link :to="{path: '/user'}">{{userInfo.username}}</router-link>
                </div>
                <div class="user-out">
                  <!-- <a>新人有礼</a> -->
=======
                  <router-link :to="{path: '/user'}">{{username}}</router-link>
                </div>
                <div class="user-out">
                  <a>新人有礼</a>
>>>>>>> remotes/origin/master
                  <router-link :to="{path: '/cart'}">购物车</router-link>
                </div>
              </div>
              <div class="news-info">
<<<<<<< HEAD
                <li v-for="(list, index) in tipHot" :key="list.id" v-if="index === 0"><a href="javascript:;" @click="MK_CODE('热门')"><span class="news-tip">【热门】</span>{{list.title}}</a></li>
                <li v-for="(list, index) in tipKnown" :key="list.id" v-if="index === 0"><a href="javascript:;" @click="MK_CODE('知识')"><span class="news-tip">【知识】</span>{{list.title}}</a></li>
                <li v-for="(list, index) in tipAbs" :key="list.id" v-if="index === 0"><a href="javascript:;" @click="MK_CODE('公告')"><span class="news-tip">【公告】</span>{{list.title}}</a></li>
              </div>
              <div class="other-info">
                <li @click="MK_CODE('会员')"><a href="javascript:;"><img src="static/img/mk_huiyuan.png"><h5>会员</h5></a></li>
                <li @click="MK_CODE('充值')"><a href="javascript:;"><img src="static/img/mk_chongzhi.png"><h5>充值</h5></a></li>
                <li @click="MK_CODE('红包')"><a href="javascript:;"><img src="static/img/mk_hongbao.png"><h5>红包</h5></a></li>
                <li @click="MK_CODE('公益')"><a href="javascript:;"><img src="static/img/mk_gongyi.png"><h5>公益</h5></a></li>
=======
                <li><a><span class="news-tip">【热门】</span>新能源车企不能再躺在政策温床上睡懒觉</a></li>
                <li><a><span class="news-tip">【知识】</span>新能源车企不能再躺在政策温床上睡懒觉</a></li>
                <li><a><span class="news-tip">【公告】</span>新能源车企不能再躺在政策温床上睡懒觉</a></li>
              </div>
              <div class="other-info">
                <li><a><img src="static/img/mk_huiyuan.png"><h5>会员</h5></a></li>
                <li><a><img src="static/img/mk_chongzhi.png"><h5>充值</h5></a></li>
                <li><a><img src="static/img/mk_hongbao.png"><h5>红包</h5></a></li>
                <li><a><img src="static/img/mk_gongyi.png"><h5>公益</h5></a></li>
>>>>>>> remotes/origin/master
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 标语、3D 直播 -->
    </div>
    <!-- 会员3D服务 -->
    <div class="container_h" id="threeD">
<<<<<<< HEAD
      <div class="py-container bsale" >
=======
      <div class="py-container bsale" @click="threeDUrl('http://192.168.0.33:8080/qn17/index.html?spuid=1')" >
>>>>>>> remotes/origin/master
        <absBox :data="bsaleList" :indicator="'none'" :arrow="'never'"></absBox>
      </div>
    </div>
    <!-- 分类 类别 -->
    <div class="container_h">
      <div class="py-container classify">
        <div class="sty-con" v-for="list in classList" :key="list.id">
<<<<<<< HEAD
          <a class="sty-con-left" :href="list.url || 'javascript:;'">
            <img :src="list.pic">
          </a>
          <div class="sty-con-right">
            <div class="style-con-class">
              <a></a> <!-- 电动工具 -->
              <a></a> <!-- 电动工具 -->
              <a></a> <!-- 电动工具 -->
            </div>
            <ul class="sty-con-ul">
              <a class="sty-con-li" :href="data.url || 'javascript:;'" v-for="(data, index) in hardwareList" :key="data.id" v-if="index < 4 && list.id === data.contentId">
                <h2>{{data.title}}</h2>
                <a :href="data.url || 'javascript:;'"><img class="wrap" :src="data.pic"></a>
                <div><span>{{data.price}}元</span><div class="before-pri"><span>288元</span></div></div>
              </a>
              <a class="sty-con-li" :href="data.url || 'javascript:;'" v-for="(data, index) in lifeShops" :key="data.id" v-if="index < 4 && list.id === data.contentId">
                <h2>{{data.title}}</h2>
                <a :href="data.url || 'javascript:;'"><img class="wrap" :src="data.pic"></a>
                <div><span>{{data.price}}元</span><div class="before-pri"><span>288元</span></div></div>
              </a>
              <a class="sty-con-li" :href="data.url || 'javascript:;'" v-for="(data, index) in mechanicList" :key="data.id" v-if="index < 4 && list.id === data.contentId">
                <h2>{{data.title}}</h2>
                <a :href="data.url || 'javascript:;'"><img class="wrap" :src="data.pic"></a>
                <div><span>{{data.price}}元</span><div class="before-pri"><span>288元</span></div></div>
              </a>
              <a class="sty-con-li" :href="data.url || 'javascript:;'" v-for="(data, index) in elecList" :key="data.id" v-if="index < 4 && list.id === data.contentId">
                <h2>{{data.title}}</h2>
                <a :href="data.url || 'javascript:;'"><img class="wrap" :src="data.pic"></a>
                <div><span>{{data.price}}元</span><div class="before-pri"><span>288元</span></div></div>
              </a>
              <a class="sty-con-li" :href="data.url || 'javascript:;'" v-for="(data, index) in threeCList" :key="data.id" v-if="index < 4 && list.id === data.contentId">
                <h2>{{data.title}}</h2>
                <a :href="data.url || 'javascript:;'"><img class="wrap" :src="data.pic"></a>
                <div><span>{{data.price}}元</span><div class="before-pri"><span>288元</span></div></div>
              </a>
              <a class="sty-con-li" :href="data.url || 'javascript:;'" v-for="(data, index) in cartLife" :key="data.id" v-if="index < 4 && list.id === data.contentId">
                <h2>{{data.title}}</h2>
                <a :href="data.url || 'javascript:;'"><img class="wrap" :src="data.pic"></a>
                <div><span>{{data.price}}元</span><div class="before-pri"><span>288元</span></div></div>
              </a>
=======
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
>>>>>>> remotes/origin/master
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 企业直播 -->
    <div class="container_h" id="live">
<<<<<<< HEAD
      <div class="py-container bsale">
=======
      <div class="py-container bsale" @click="livePage()">
>>>>>>> remotes/origin/master
        <absBox :data="companyLive" :indicator="'none'" :arrow="'never'"></absBox>
      </div>
    </div>
    <!-- 主题货源 -->
<<<<<<< HEAD
    <div class="container_h">
=======
    <div class="container_h" @click="liveShow">
>>>>>>> remotes/origin/master
      <div class="py-container source">
        <div class="source-title">
          <span></span><p>主题货源</p>
        </div>
        <div class="source-con">
          <div class="source-box" v-for="list in sourceList" :key="list.id" :data-id="list.id">
            <h2>{{list.title}}</h2>
            <ul class="source-box-ul">
              <li class="source-box-li" v-for="data in lightList" :key="data.id" :data-id="data.id" v-if="list.id === data.contentId">
<<<<<<< HEAD
                <a :href="data.url || 'javascript:;'"><img class="wrap" :src="data.pic"></a>
              <h4>{{data.title}}</h4>
              </li>
              <li class="source-box-li" v-for="data in lightList1" :key="data.id" :data-id="data.id" v-if="list.id === data.contentId">
                <a :href="data.url || 'javascript:;'"><img class="wrap" :src="data.pic"></a>
              <h4>{{data.title}}</h4>
              </li>
              <li class="source-box-li" v-for="data in lightList2" :key="data.id" :data-id="data.id" v-if="list.id === data.contentId">
                <a :href="data.url || 'javascript:;'"><img class="wrap" :src="data.pic"></a>
              <h4>{{data.title}}</h4>
              </li>
              <li class="source-box-li" v-for="data in lightList3" :key="data.id" :data-id="data.id" v-if="list.id === data.contentId">
                <a :href="data.url || 'javascript:;'"><img class="wrap" :src="data.pic"></a>
              <h4>{{data.title}}</h4>
              </li>
              <li class="source-box-li" v-for="data in lightList4" :key="data.id" :data-id="data.id" v-if="list.id === data.contentId">
                <a :href="data.url || 'javascript:;'"><img class="wrap" :src="data.pic"></a>
              <h4>{{data.title}}</h4>
              </li>
              <li class="source-box-li" v-for="data in lightList5" :key="data.id" :data-id="data.id" v-if="list.id === data.contentId">
                <a :href="data.url || 'javascript:;'"><img class="wrap" :src="data.pic"></a>
              <h4>{{data.title}}</h4>
              </li>
              <li class="source-box-li" v-for="data in lightList6" :key="data.id" :data-id="data.id" v-if="list.id === data.contentId">
                <a :href="data.url || 'javascript:;'"><img class="wrap" :src="data.pic"></a>
              <h4>{{data.title}}</h4>
              </li>
              <li class="source-box-li" v-for="data in lightList7" :key="data.id" :data-id="data.id" v-if="list.id === data.contentId">
                <a :href="data.url || 'javascript:;'"><img class="wrap" :src="data.pic"></a>
              <h4>{{data.title}}</h4>
              </li>
              <li class="source-box-li" v-for="data in lightList8" :key="data.id" :data-id="data.id" v-if="list.id === data.contentId">
                <a :href="data.url || 'javascript:;'"><img class="wrap" :src="data.pic"></a>
=======
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
>>>>>>> remotes/origin/master
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
<<<<<<< HEAD
            <p @click="MK_CODE('换一换')" attr="changeLike()">换一换</p>
          </div>
          <div class="hot-con">
            <ul class="hot-con-ul">
              <a v-for="list in likeList" :key="list.id" :href="list.url || 'javascript:;'">
                <youLike :like="list"></youLike>
              </a>
=======
            <p>换一换</p>
          </div>
          <div class="hot-con">
            <ul class="hot-con-ul">
              <li v-for="list in likeList" :key="list.id">
                <youLike :like="list"></youLike>
              </li>
>>>>>>> remotes/origin/master
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
<<<<<<< HEAD
    <regFooter></regFooter>
=======
>>>>>>> remotes/origin/master
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
<<<<<<< HEAD
          <li class="point-li"><a @click="MK_CODE('反馈')">反馈</a></li>
          <li class="point-li"><a  @click="MK_CODE('举报')">举报</a></li>
        </ul>
      </div>
    </div>
=======
          <li class="point-li"><a>反馈</a></li>
          <li class="point-li"><a>举报</a></li>
        </ul>
      </div>
    </div>
    <a>
      <iframe class="live_iframe" ref="live_iframe" id="live_iframe" v-bind:src="liveSource" width="360" height="300" frameborder="0" scrolling="no"></iframe>
    </a>
    <div class="mask" v-show="is3Ding">
      <iframe class="mask_iframe" ref="threeDSrc"  frameborder="0" scrolling="" g="no">
      </iframe>
      <div class="mask_close close_wrap">
        <i class="el-icon-close" @click="threeDclose"></i>
      </div>
    </div>
>>>>>>> remotes/origin/master
  </div>
</template>

<script>
<<<<<<< HEAD
import shortcut from '@/components/shortcutHeader'
import headerNav from '@/components/headerNav'
import homeNav from '@/components/homeNav'
import absBox from '@/components/absBox'
import youLike from '@/components/youLike'
import pageFooter from '@/components/pageFooter'
import regFooter from '@/components/regFooter'
import { mapState, mapMutations } from 'vuex'

export default {
  data () {
    return {
      cateMenuItem: '',
      isShowNav: '', // 二级菜单显示状态
      menuData: [], // 条目菜单
      bannerList: [], // banner
      bgImg: '#f4f4f4',
      absList: [], // 轮播广告
      tipHot: [], // 热门
      tipKnown: [], // 知识
      tipAbs: [], // 公告
=======
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
>>>>>>> remotes/origin/master
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
<<<<<<< HEAD
      likeList: [] // 猜你喜欢
    }
  },
  components: { shortcut, headerNav, pageFooter, absBox, youLike, homeNav, regFooter },
  computed: {
    ...mapState({
      userInfo: state => state.user.userInfo
    })
  },
  created () {},
  activated () {},
  mounted () {
    // 获取条目菜单
    this.API.homeMenu().then(rtn => {
      this.menuData = rtn.children || []
    })
    // 主页banner
    this.API.homeBanner({categoryId: 1}).then(rtn => {
      this.bannerList = rtn.contentList || []
    })
    // 热门
    this.API.homeBanner({categoryId: 22}).then(rtn => {
      this.tipHot = rtn.contentList || []
    })
    // 知识
    this.API.homeBanner({categoryId: 23}).then(rtn => {
      this.tipKnown = rtn.contentList || []
    })
    // 公告
    this.API.homeBanner({categoryId: 24}).then(rtn => {
      this.tipAbs = rtn.contentList || []
    })
    // 主页banner广告
    this.API.homeBanner({categoryId: 2}).then(rtn => {
      this.absList = rtn.contentList || []
    })
    // 会员3D
    this.API.homeBanner({categoryId: 3}).then(rtn => {
      this.bsaleList = rtn.contentList || []
    })
    // 大类 分类
    this.API.homeBanner({categoryId: 4}).then(rtn => {
      this.classList = rtn.contentList || []
    })
    // 五金工具 内容
    this.API.homeClass({contentId: 19}).then(rtn => {
      this.hardwareList = rtn || []
    })
    // 日用百货
    this.API.homeClass({contentId: 20}).then(rtn => {
      this.lifeShops = rtn || []
    })
    // 机械
    this.API.homeClass({contentId: 21}).then(rtn => {
      this.mechanicList = rtn || []
    })
    // 机电设备
    this.API.homeClass({contentId: 22}).then(rtn => {
      this.elecList = rtn || []
    })
    // 3c数码
    this.API.homeClass({contentId: 23}).then(rtn => {
      this.threeCList = rtn || []
    })
    // 汽车用品
    this.API.homeClass({contentId: 24}).then(rtn => {
      this.cartLife = rtn || []
    })
    // 企业直播
    this.API.homeBanner({categoryId: 7}).then(rtn => {
      this.companyLive = rtn.contentList || []
    })
    // 主题货源
    this.API.homeBanner({categoryId: 5}).then(rtn => {
      this.sourceList = rtn.contentList || []
    })
    // 照明工具
    this.API.homeClass({contentId: 25}).then(rtn => {
      this.lightList = rtn || []
    })
    this.API.homeClass({contentId: 26}).then(rtn => {
      this.lightList1 = rtn || []
    })
    this.API.homeClass({contentId: 27}).then(rtn => {
      this.lightList2 = rtn || []
    })
    this.API.homeClass({contentId: 28}).then(rtn => {
      this.lightList3 = rtn || []
    })
    this.API.homeClass({contentId: 29}).then(rtn => {
      this.lightList4 = rtn || []
    })
    this.API.homeClass({contentId: 30}).then(rtn => {
      this.lightList5 = rtn || []
    })
    this.API.homeClass({contentId: 31}).then(rtn => {
      this.lightList6 = rtn || []
    })
    this.API.homeClass({contentId: 32}).then(rtn => {
      this.lightList7 = rtn || []
    })
    this.API.homeClass({contentId: 33}).then(rtn => {
      this.lightList8 = rtn || []
    })
    // 商学院
    this.API.homeBanner({categoryId: 8}).then(rtn => {
      this.school = rtn.contentList || []
    })
    // 猜你喜欢
    this.API.homeBanner({categoryId: 6}).then(rtn => {
      this.likeList = rtn.contentList || []
    })
  },
  methods: {
    ...mapMutations(['MK_CODE']),
    carouselChange (index, key) {
      if (this.bannerList[index] && this.bannerList[index].bgcolor) this.bgImg = this.bannerList[index].bgcolor
    },
    register () {
      this.$router.push({path: '/register'})
    },
    // 换一换 喜欢
    changeLike () {
      this.API.homeBanner({categoryId: 6}).then(rtn => {
        this.likeList = rtn.contentList
      })
=======
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
    // let IframeOnClick = {
    //   resolution: 200,
    //   iframes: [],
    //   interval: null,
    //   Iframe: function () {
    //     this.element = arguments[0]
    //     this.cb = arguments[1]
    //     this.hasTracked = false
    //   },
    //   track: function (element, cb) {
    //     this.iframes.push(new this.Iframe(element, cb))
    //     if (!this.interval) {
    //       let _this = this
    //       this.interval = setInterval(function () { _this.checkClick() }, this.resolution)
    //     }
    //   },
    //   checkClick: function () {
    //     if (document.activeElement) {
    //       let activeElement = document.activeElement
    //       for (let i in this.iframes) {
    //         if (activeElement === this.iframes[i].element) { // user is in this Iframe
    //           if (this.iframes[i].hasTracked === false) {
    //             this.iframes[i].cb.apply(window, [])
    //             this.iframes[i].hasTracked = true
    //           }
    //         } else {
    //           this.iframes[i].hasTracked = false
    //         }
    //       }
    //     }
    //   }
    // }
    // // 获取iframe 框架下的body节点并且监听
    // let iframeDom = this.$el.getElementsByTagName('iframe')[0].contentWindow.document.body
    // this.iframeDom = iframeDom
    // if (this.iframeDom.offsetHeight) {
    //   this.iframeDom.addEventListener('click', (e) => {
    //     this.liveSource = 'static/live.html'
    //     return false
    //   })
    // } else { // 火狐 body高度为0 无法触发body点击事件
    //   IframeOnClick.track(this.$refs.live_iframe, () => {
    //     this.liveSource = 'static/live.html'
    //     return false
    //   })
    // }
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
      this.$router.push({path: '/live/factory'})
      return false
    },
    liveShow () {
      console.log(12121)
      this.liveSource = 'static/live.html?id=10&sd=10&ii=10'
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
>>>>>>> remotes/origin/master
    }
  }
}
</script>
<style scoped>
@import "../../assets/css/app.css"
<<<<<<< HEAD
=======
/*@import "../static/css/app.css";*/
>>>>>>> remotes/origin/master
</style>
