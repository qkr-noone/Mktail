<template>
  <div class="home_store_shops store_common">
    <shortcut></shortcut>
    <headerNav></headerNav>
    <div class="root_page" id="root">
      <div class="layout_page" data-id="hc"></div>
      <!-- 店铺头部 -->
      <div class="layout_page" data-id="hd" id="store_header">
        <div class="store_sign_nav_bg" data-title="店铺招牌导航栏背景" ref="bgStoreSign"></div>
        <div class="layout_m" data-title="店铺招牌">
          <div class="store_signature">
            <!-- 店招 -->
            <div class="store_sign_nav_box">
              <!-- <span data-store_sign_top="店铺平台其他信息"></span> -->
              <div class="store_sign_con">
                <div class="store_sign_bg"></div>
              </div>
            </div>
            <!-- 导航栏 -->
            <div class="store_sign_nav_box shop_nav m-nav-content">
              <ul class="menu-box" slot="reference">
                <li class="menu-item menu-item-li" v-for="(list, tip) in menuNavBar" :key="list.id" ref="navBar" @mouseenter="tip===1 &&resetMenuPosition()"><router-link :to="{path: list.path, query:{homeShops: list.sellerId}}" @click.native="getScroll()" class="menu-a"><span>{{list.navigationName}}</span><i class="el-icon-arrow-down menu-more" v-if="tip===1"></i></router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <transition>
        <router-view :menuCate="menuCate" :scroll="scroll"></router-view>
      </transition>
      <div class="layout_page" data-id="ft"></div>
      <div class="layout_page" data-id="fc"></div>
    </div>
    <!-- 导航栏菜单下拉 -->
    <div class="m-nav-content menu_pupper" ref="storeMenuShow">
      <ul class="menu-box">
        <ul class="menu-two">
          <li class="menu-item menu-two-li" v-for="item in menuCate" :key="item.id">
            <router-link :to="{path: '/shops/category', query:{homeShops: storeId, cateId: item.id}}" class="menu-a menu-two-a"><span>{{item.name}}</span><i class="el-icon-arrow-right menu-more" v-if="item.children.length"></i></router-link>
            <shopsNav v-if="item.children.length" :list="item.children" :storeId="storeId"></shopsNav>
          </li>
        </ul>
      </ul>
    </div>
    <!-- 侧边栏客服 -->
    <div class="customer_box" data-attr="客服" v-if="sellerInfo.linkmanQq">
      <div class="customer_con">
        <a :href="(sellerInfo.linkmanQq && 'http://wpa.qq.com/msgrd?v=3&uin='+ sellerInfo.linkmanQq +'&site=qq&menu=yes')||'javascript:;'" target="_blank" title="点此可以直接和卖家交流选好的宝贝，或相互交流网购体验。"><img src="static/img/mk_search_link.png"></a>
      </div>
    </div>
    <regFooter></regFooter>
  </div>
</template>

<script>
import regFooter from '@/components/regFooter'
export default {
  data () {
    return {
      storeId: '',
      menuCate: [],
      storeSign: {},
      menuNavBar: [],
      scroll: 0,
      sellerInfo: {}
    }
  },
  components: {
    /* 本页面的组件 */
    regFooter,
    shortcut: () => import('@/components/shortcutHeader'),
    headerNav: () => import('@/components/headerNav'),
    shopsNav: () => import('@/components/goods/shopsNav')
  },
  mounted () {
    this.storeId = this.$route.query.homeShops
    // 店招
    this.API.getStoreSign({ sellerId: this.storeId }).then(res => {
      this.storeSign = res
      this.$nextTick(() => {
        this.$refs.bgStoreSign.style.backgroundImage = 'url(' + this.storeSign.image + ')'
      })
    })
    // 导航栏
    this.API.getStoreNavBar({ sellerId: this.storeId }).then(res => {
      this.menuNavBar = res
    })
    // 下拉菜单
    this.API.getStoreMenu({ sellerId: this.storeId }).then(res => {
      this.menuCate = res
    })
    // 店铺信息
    this.API.getStoreInfo({ sellerId: this.storeId }).then(res => {
      this.sellerInfo = res
    })
    document.addEventListener('mousemove', this.handlePackNavBar)
  },
  destroyed () {
    document.removeEventListener('mousemove', this.handlePackNavBar)
  },
  methods: {
    // 移入导航项时，重新定位
    resetMenuPosition () {
      this.$nextTick(() => {
        let { left, top } = this.$refs.navBar[1].getBoundingClientRect()
        let srcollTop = document.documentElement.scrollTop || document.body.scrollTop
        let scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft
        this.$refs.storeMenuShow.style.position = 'absolute'
        this.$refs.storeMenuShow.style.left = left + scrollLeft + 'px'
        this.$refs.storeMenuShow.style.top = top + 40 + srcollTop + 'px'
        this.$refs.storeMenuShow.style.zoom = 1
      })
    },
    // 店招导航栏 移入显示
    handlePackNavBar (e) {
      let navBar = this.$refs.navBar
      if ((navBar && navBar[1].contains(e.target)) || this.$refs.storeMenuShow.contains(e.target)) {
        this.$refs.storeMenuShow.style.display = 'block'
      } else {
        this.$refs.storeMenuShow.style.display = 'none'
      }
    },
    // 获取滚动高度
    getScroll () {
      this.scroll = document.documentElement.scrollTop || document.body.scrollTop || 0
    }
  }
}
</script>
<style lang="scss" scoped>
  $aside-theme-color: #ef7026;
  .home_store_shops {
    overflow-x: hidden;
  }

.root_page {
  .layout_page {
    width: 100%;
    position: relative;

    .layout_m {
      width: 1226px;
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      margin-bottom: 0px;

      .pre_item_wrap {
        position: relative;
        width: 100%;
        margin-top: 0;
        min-height: 50px;
        z-index: 1;
        display: flex;
        justify-content: space-between;
      }
    }
  }
}

/* 店铺招牌 */
  #store_header {
    max-height: 250px;
    margin-bottom: 0px;
    overflow: hidden;
    position: relative;
    z-index: 1;
  }
  .store_sign_nav_bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    min-height: 100%;
    background-color: rgb(253, 253, 253);
    background-repeat: no-repeat;
    background-position: center top;
    zoom: 1;
  }
  .store_signature {
    width: 100%;
    max-height: 280px;
    overflow: hidden;
    zoom: 1;
  }
  .store_sign_nav_box {
    position: relative;
    min-height: 1px;
  }
  .handle_store_sign_box {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    border: 1px solid transparent;
    .handle_com {
      display: none;
      position: absolute;
      right: 0;
    }
  }
  .handle_store_sign_box:hover{
    border: 1px solid $aside-theme-color;
    .handle_com {
      display: block;
    }
  }
  .store_sign_bg {
    /* background: url(//gdp.alicdn.com/tps/TB1hYBhJXXXXXciXpXXXXXXXXXX-950-120.png) no-repeat 0 0 !important; */
    height: 210px !important;
  }
  .store_sign_con {
    position: relative;
  }
/* nav 导航栏菜单 */
  .shop_nav {
    position: relative;
    height: 40px;
    /* background-color: $aside-theme-color; */
  }
 .m-nav-content {
    width: 1226px;
    margin: 0 auto;
  }
  .menu_pupper {
    display: none;
    z-index: 10;
  }
  .menu-box {
    display: flex;
  }
  .menu-item {
    position: relative;
  }
  .menu-item-li {
    height: 40px;
    line-height: 40px;
  }
  .menu-item-li>a.menu-a {
    height: 40px;
    line-height: 40px;
  }
  .menu-a {
    height: 40px;
    line-height: 40px;
    padding: 0 20px;
    color: #000;
    font-size: 14px;
    border-radius: 4px;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: keep-all;
    max-width: 200px;
  }
  .menu-more {
    padding-left: 5px;
    transition: 0.2s;
  }
  .visible {
    height: 4px;
    width: 4px;
    background: transparent;
  }
  .menu-two {
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0px 0px 3px 1px #eee;
    min-width: 150px;
    padding: 4px 0 10px 0;
  }
  .menu-two-a {
    padding: 0 16px;
  }
  .menu-two-li {
    padding: 0 4px;
  }
  .menu-two-li .menu-a {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .menu-two-box {
    position: absolute;
    top: 100%;
    display: none;
    z-index: 20;
  }
  .menu-box>.menu-item:hover>.menu-a>.menu-more{
    transform-origin: 62% 50%;
    transform: rotate(0.5turn);
  }
  .menu-two-li>.menu-two-a:hover {
    background-color: #ededef;
  }
  .menu-box>.menu-item:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  .menu-item:hover>.menu-two-box {
    display: block;
  }

/* 侧边栏客服 */
  .customer_box {
    position: fixed;
    bottom: 300px;
    z-index: 100000003;
    right: 20px;
    width: 50px;
    .customer_con {
      height: 50px;
      background-color: rgba(255, 255, 255, 0.85);
      border-radius: 8px;
      border: 1px solid rgba(226, 226, 226, 0.56);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
