<template>
  <div id="user">
    <shortcut></shortcut>
    <userNav></userNav>
    <div class="screen-back">
      <div class="py-container">
        <div class="user">
          <div class="account-sidebar">
            <div class="gray-box ">
              <div class="box-inner">
                <ul class="account-nav">
                  <li v-for="(item,i) in nav" :class="{current:item.name===title}" :key='i'>
                    <a href="javascript:;"  @click="tab(item, i)"><span>{{item.name}}</span><i v-if="item.child" class="el-icon-caret-bottom"></i></a>
                    <div v-show="item.child" ref="child" class="nav-child">
                      <li v-for="(data, index) in item.child" :key='index' :class="{current:data.name===title}">
                        <a href="javascript:;" @click="tab(data)"><span>{{data.name}}</span></a>
                      </li>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="account-content">
            <div class="con-wrap" v-if="!title">
              <div class="con-user">
                <div class="con-item">
                  <div class="con-item-user">
                    <a href="" class="user-head">
                      <img src="static/img/mk_logo_login.png">
                    </a>
                    <span class="user-name">爱你呦</span>
                    <!-- <div class="user-service">
                      <p>开通尊享会员服务</p>
                      <a>立即开通</a>
                    </div> -->
                  </div>
                  <div class="con-item-other">
                    <div>
                      <a><span>我的收货地址:</span><span class="num">0</span></a>
                    </div>
                    <div>
                      <a><span>我的优惠信息:</span><span class="num">0</span></a>
                    </div>
                    <div>
                      <a><span>我的支付方式:</span><span class="num">0</span></a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="con-de">
                <div class="con-de-order">
                  <div class="con-de-li">
                    <div class="con-de-title">
                      <h2>3D产品推荐</h2>
                    </div>
                    <ul class="con-de-item us-look">
                      <li v-for="item in usLook" :key="item.id">
                        <router-link :to="{path: '/detail', query: {goodsId: item.id}}"><img :src="item.pic"></router-link>
                      </li>
                    </ul>
                  </div>
                  <div class="con-de-li">
                    <div class="con-de-title">
                      <h2>我的订单</h2><router-link :to="{path: '/user/userOrder'}">所有订单</router-link>
                    </div>
                    <ul class="con-de-item us-order">
                      <li>
                        <a class="us-order-a"><img src="static/img/user/icon-待付款.png"><span>待付款</span><strong class="us-order-str">{{orderStatesNum.pendingPaymentCount}}</strong></a>
                      </li>
                      <li>
                        <a class="us-order-a"><img src="static/img/user/icon-待发货.png"><span>待发货</span><strong class="us-order-str">{{orderStatesNum.toBeShippedCount}}</strong></a>
                      </li>
                      <li>
                        <a class="us-order-a"><img src="static/img/user/icon-待收货.png"><span>待收货</span><strong class="us-order-str">{{orderStatesNum.toBeEvaluatedCount}}</strong></a>
                      </li>
                      <li>
                        <a class="us-order-a"><img src="static/img/user/icon-待评价.png"><span>待评价</span><strong class="us-order-str">{{orderStatesNum.goodsReceivedCount}}</strong></a>
                      </li>
                      <li>
                        <a class="us-order-a"><img src="static/img/user/icon-售后.png"><span>退换/售后</span></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- 物流 喜欢 关注 -->
              <div class="con-all">
                <div class="con-all-left">
                  <div class="con-le-flow">
                    <div class="le-flow-title">
                      <h2>物流</h2>
                    </div>
                    <ul class="le-flow-ul">
                      <li class="order-li">
                        <a href=""><img src="static/img/mk_logo_login.png"></a>
                        <div class="detail-desc">
                          <p>我是您的专属配送员王智，您的订单已到达广州明珠站，配</p>
                          <div><span>2018-11-29 08:00:00</span><a class="flow-de">查看物流明细</a></div>
                        </div>
                        <div class="detail-more">
                          <a href="">确认收货</a>
                        </div>
                      </li>
                      <li class="order-li">
                        <a href=""><img src="static/img/mk_logo_login.png"></a>
                        <div class="detail-desc">
                          <p>我是您的专属配送员王智，您的订单已到达广州明珠站，配</p>
                          <div><span>2018-11-29 08:00:00</span><a class="flow-de">查看物流明细</a></div>
                        </div>
                        <div class="detail-more">
                          <a href="">确认收货</a>
                        </div>
                      </li>
                      <li class="order-li">
                        <a href=""><img src="static/img/mk_logo_login.png"></a>
                        <div class="detail-desc">
                          <p>我是您的专属配送员王智，您的订单已到达广州明珠站，配</p>
                          <div><span>2018-11-29 08:00:00</span><a class="flow-de">查看物流明细</a></div>
                        </div>
                        <div class="detail-more">
                          <a href="">确认收货</a>
                        </div>
                      </li>
                      <div class="flow-more">
                        <a>展开</a>
                        <i v-if="isflowMore" class="el-icon-arrow-down"></i>
                        <i v-else class="el-icon-arrow-up"></i>
                      </div>
                    </ul>
                  </div>
                </div>
                <div class="con-all-right">
                  <div class="con-ri-focus">
                    <div class="ri-focus-title">
                      <h3>我的关注</h3>
                    </div>
                    <ul class="focus-con">
                      <li class="focus-li"><div class="focus-box"><a><span>{{goodsSellersNum.goodsCollectCount}}</span><h4>商品关注</h4></a></div></li>
                      <li class="focus-li"><div class="focus-box"><a><span>{{goodsSellersNum.sellersCollectCount}}</span><h4>店铺关注</h4></a></div></li>
                    </ul>
                  </div>
                  <div class="con-ri-his">
                    <div class="ri-his-abs" v-for="list in rightAbs" :key="list.id">
                      <router-link :to="{path:'/detail', query: {goodsId: list.id}}"><img :src="list.pic"></router-link>
                    </div>
                    <!-- <div class="ri-focus-title">
                      <h3>浏览记录</h3>
                      <a><span>更多</span><i class="el-icon-arrow-right"></i></a>
                    </div>
                    <ul  class="focus-ul">
                      <li class="focus-li" v-for="(list, index) in hisList" :key="list.id" v-if="index < 6">
                        <router-link :to="{path:'/detail', query: {goodsId: list.id}}" class="focus-tag"><img :src="list.pic"></router-link>
                      </li>
                    </ul> -->
                  </div>
                </div>
              </div>
              <div class="con-le-like">
                <div class="le-flow-title">
                  <h2>猜你喜欢</h2>
                </div>
                <ul class="hot-con-ul">
                  <li v-for="list in likeList" :key="list.id">
                    <youLike :like="list"></youLike>
                  </li>
                </ul>
              </div>
            </div>
            <transition v-else>
              <router-view></router-view>
            </transition>
          </div>
        </div>
        <div class="recommend" v-if="isOrder">
          <div class="recommend-top">
            <span>为您推荐</span>
            <hr>
            <!-- <div class="page-turning">
              <el-pagination small layout="prev, pager, next" :total="50"></el-pagination>
            </div> -->
          </div>
          <div>
            <youRecom :list="recList"></youRecom>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import shortcut from '@/components/shortcutHeader'
import userNav from '@/components/userNav'
import youLike from '@/components/youLike'
import youRecom from '@/components/youRecom'
export default {
  data () {
    return {
      title: '',
      nav: [
        {name: '购物车', path: 'cart'},
        {name: '我的订单', path: 'userOrder'},
        {
          name: '我的收藏',
          path: '',
          child: [
            {name: '收藏店铺', path: 'userCollectShop'},
            {name: '收藏宝贝', path: 'userCollectGoods'}
          ]
        },
        {name: '我的评价', path: 'userAssess'},
        {name: '我的足迹', path: 'userHistory'},
        {name: '我的优惠', path: 'userFee'},
        {
          name: '我的发票',
          path: '',
          child: [
            {name: '开票信息', path: 'userInvoiceInfo'},
            {name: '发票管理', path: 'userInvoiceManage'}
          ]
        },
        {
          name: '退款维权',
          path: '',
          child: [
            {name: '退款管理', path: 'userRefundManage'},
            {name: '投诉管理', path: 'userComplaintManage'},
            {name: '举报管理', path: 'userReportManage'}
          ]
        },
        {name: '购买过的店铺', path: 'userBuyHistory'}
      ],
      orderStatesNum: '', // 用户订单状态数量
      likeList: [],
      usLook: [], // 大家都在看
      flowList: [], // 物流列表
      hisList: [], // 浏览记录
      rightAbs: [], // 右侧广告
      isflowMore: true, // 展开更多物流信息
      tabPosition: 'left',
      userBirthday: '', // 用户生日
      userImageUrl: 'static/img/logo-200.png', // 用户头像
      goodsSellersNum: '', // 关注店铺和商品数量
      isOrder: false,
      recList: []
    }
  },
  components: { shortcut, userNav, youLike, youRecom },
  created () {
    let path = this.$route.path.split('/')[2]
    for (let item of this.nav) {
      if (item.path === path) {
        this.title = item.name
        break
      }
      if (item.path === '') {
        let temBreak = false
        for (let list of item.child) {
          if (list.path === path) {
            this.title = list.name
            temBreak = true
            break
          }
        }
        if (temBreak) break
      }
    }
  },
  mounted () {
    let pathChild = this.$route.path.split('/')[2]
    pathChild === 'userOrder' ? this.isOrder = true : this.isOrder = false
    // 用户订单状态数据
    this.API.userOrderStatus({userName: this.$cookies.get('user-key')}).then(res => {
      this.orderStatesNum = res
    })
    // 大家都在看
    this.API.user({categoryId: 14}).then(res => {
      this.usLook = res.contentList
    })
    // 猜你喜欢
    this.API.user({categoryId: 13}).then(res => {
      this.likeList = res.contentList
    })
    // 浏览记录
    // this.API.user({categoryId: 15}).then(res => {
    //   this.hisList = res.contentList
    // })
    // 右侧图片广告
    this.API.user({categoryId: 16}).then(res => {
      this.rightAbs = res.contentList
    })
    // 关注店铺和商品
    this.API.userGoodsShopNum({userName: this.$cookies.get('user-key')}).then(res => {
      this.goodsSellersNum = res
    })
    // 订单 为你推荐
    this.API.homeBanner({categoryId: 25}).then(res => {
      this.recList = res.contentList
    })
  },
  methods: {
    tab (e, index) {
      if (e.path === 'cart') this.$router.push({path: '/cart'})
      else {
        if (e.child) {
          this.$refs.child[index].style.display === 'none' ? this.$refs.child[index].style.display = 'block' : this.$refs.child[index].style.display = 'none'
        } else {
          let queryList = this.$route.query
          // this.scroll = { scrollTop: document.documentElement.scrollTop }
          // Object.assign(queryList, this.scroll)
          this.$router.push({path: '/user/' + e.path, query: queryList})
          this.title = e.name
        }
      }
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    handleAvatarSuccess (res, file) {
      this.userImageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    addressName () {
    }
  },
  watch: {
    '$route' (to, from) {
      if (to.path === '/user') {
        this.title = ''
      } else {
        let path = this.$route.path.split('/')[2]
        path === 'userOrder' ? this.isOrder = true : this.isOrder = false
        for (let item of this.nav) {
          if (item.path === path) {
            this.title = item.name
            break
          }
          if (item.hasOwnProperty('child')) {
            for (let list of item.child) {
              if (list.path === path) {
                this.title = list.name
                break
              }
            }
          }
        }
      }
    }
  }
}
</script>
<style scoped>
@import '../../assets/css/user/user.css';
/*主页*/
  .screen-back{
    width:100%;
    background: #F4F4F4;
  }
  .user {
    display: flex;
    justify-content: space-between;
  }
  .account-sidebar {
    width: 135px;
    border-radius: 6px;
    min-height: 100vh;
  }
  .gray-box {
    overflow: hidden;
    background: #fff;
    box-shadow: 0 3px 8px -6px rgba(0,0,0,.1);
  }
  .account-sidebar .account-nav {
    padding-top: 15px;
    padding-bottom: 15px;
  }
  .account-sidebar .avatar {
    padding-top: 20px;
    border-radius: 10px;
    text-align: center;
  }
  .account-sidebar .account-nav li {
    position: relative;
    margin-top: 13px;
  }
  .account-sidebar .account-nav li a {
    font-style: normal;
    text-decoration: none;
    color:rgba(36,36,36,1);
    font-size:16px;
    cursor: pointer;
    transition: all .15s ease-out;
    display: block;
    padding-left: 20px;
    text-align: left;
  }
  .account-sidebar .account-nav li li a{
    font-size:12px;
    padding-left: 30px;
  }
  .account-sidebar .account-nav li.current> a {
    position: relative;
    z-index: 1;
    color: red;
  }
  li div .nav-child {
    display: none;
    transition: all 0.5;
  }
  .account-content {
    width: 1083px;
    margin-left: 5px;
  }
/*为你推荐*/
  .recommend{
    width:1185px;
    height:312px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(220,220,220,1);
    margin-top: 30px;
    padding: 14px 16px 27px 23px;
  }
  .recommend .recommend-top{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 37px;
  }
  .recommend hr{
    flex-grow: 1;
    color:#D8D8D8;
    opacity: 0.4;
    margin-left:40px;
  }
</style>
