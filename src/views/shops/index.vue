<template>
  <div class="home_store_shops">
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
            <div class="pre_module store_sign_nav_box">
              <!-- <span data-store_sign_top="店铺平台其他信息"></span> -->
              <div class="store_sign_con">
                <div class="store_sign_bg"></div>
              </div>
            </div>
            <!-- 导航栏 -->
            <div class="pre_module store_sign_nav_box shop_nav m-nav-content">
              <ul class="menu-box" slot="reference">
                <li class="menu-item menu-item-li" v-for="(list, tip) in menuNavBar" :key="list.id" ref="navBar" @mouseenter="tip===1 &&resetMenuPosition()"><router-link :to="{path: '/shops'}" target="_blank" class="menu-a"><span>{{list.navigationName}}</span><i class="el-icon-arrow-down menu-more" v-if="tip===1"></i></router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="layout_page" data-id="page-main">
        <div class="content_bg" data-title="内容主体背景"></div>
        <div class="layout_m" v-for="(list, index) in tree" :key="index">
          <div class="pre_item_wrap">
            <!-- 组件内容...窄栏 -->
            <div class="pre_module" style="z-index: 2;" v-if="!list.passModuleDataList.length">
              <!-- 窄栏数据遍历 -->
              <div class="pre_module_con" v-for="item in list.narrowModuleDataList" :key="item.id" :data-template="item.templateName">
                <!-- 窄栏项模板>>组件 -->
                <component :is="item.template" :list="item.dataList" :dataUrl="item.data" :menuCate="menuCate"></component>
              </div>
            </div>
            <!-- 组件内容...宽栏 -->
            <div class="pre_module" v-if="!list.passModuleDataList.length">
              <!-- 宽栏数据遍历 -->
              <div class="pre_module_con"  v-for="item in list.widthModuleDataList" :key="item.id" :data-template="item.templateName">
                <!-- 宽栏项模板>>组件 -->
                <component :is="item.template" :list="item.dataList" :dataUrl="item.data"></component>
              </div>
            </div>
            <!-- 组件内容...通栏 -->
            <div class="pre_module" style="width: 100%;" v-if="list.passModuleDataList.length">
              <!-- 通栏数据遍历 -->
              <div class="pre_module_con" v-for="item in list.passModuleDataList" :key="item.id" :data-template="item.templateName">
                <!-- 通栏项模板=>>组件 -->
                <component :is="item.template" :list="item.dataList" :dataUrl="item.data"></component>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="layout_page" data-id="ft"></div>
      <div class="layout_page" data-id="fc"></div>
    </div>
    <!-- 导航栏菜单下拉 -->
    <div class="m-nav-content menu_pupper" ref="storeMenuShow">
      <ul class="menu-box">
        <ul class="menu-two">
          <li class="menu-item menu-two-li" v-for="item in menuCate" :key="item.id">
            <router-link :to="{path: '/category', query:{cateId: item.id}}" class="menu-a menu-two-a"><span>{{item.name}}</span><i class="el-icon-arrow-right menu-more" v-if="item.children.length"></i></router-link>
            <shopsNav v-if="item.children.length" :list="item.children"></shopsNav>
          </li>
        </ul>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tree: [],
      storeId: '',
      menuCate: [],
      storeSign: {},
      menuNavBar: []
    }
  },
  components: {
    /* 本页面的组件 */
    shortcut: () => import('@/components/shortcutHeader'),
    headerNav: () => import('@/components/headerNav'),
    /* 菜单和模板 */
    shopsNav: () => import('@/components/goods/shopsNav'),
    pingpuP: () => import('@/components/goods/pingpu_p'),
    pingpuW: () => import('@/components/goods/pingpu_w'),
    pingpuN: () => import('@/components/goods/pingpu_n'),
    chuchuangP: () => import('@/components/goods/chuchuang_p'),
    chuchuangW: () => import('@/components/goods/chuchuang_w'),
    daileimuP: () => import('@/components/goods/daileimu_p'),
    // 智能产品与重点推荐一样布局
    zhongdiantuijianP: () => import('@/components/goods/zhongdiantuijian_p'),
    danpinP: () => import('@/components/goods/danpin_p'),
    zhuyingleimuP: () => import('@/components/goods/zhuyingleimu_p'),
    smart: () => import('@/components/goods/zhongdiantuijian_p'),
    chanpinfenleiN: () => import('@/components/goods/chanpinfenlei_n'),
    industry: () => import('@/components/picWord/industry'),
    fullScreen: () => import('@/components/picWord/fullScreen'),
    banner: () => import('@/components/picWord/banner'),
    dynamic: () => import('@/components/video/dynamic'),
    live: () => import('@/components/video/live'),
    threeD: () => import('@/components/video/3D'),
    // 客服模块 通栏 宽栏一样布局
    customer: () => import('@/components/office/customer'),
    customerN: () => import('@/components/office/customer_n')
  },
  mounted () {
    this.storeId = this.$route.query.homeShops
    // dom树
    this.API.initShops({ sellerId: this.storeId }).then(res => {
      this.tree = res
    })
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
    document.addEventListener('mousemove', this.handlePackNavBar)
  },
  destroyed () {
    document.removeEventListener('mousemove', this.handlePackNavBar)
  },
  methods: {
    // 移入导航项时，重新定位
    resetMenuPosition () {
      this.$nextTick(() => {
        let { left, bottom } = this.$refs.navBar[1].getBoundingClientRect()
        this.$refs.storeMenuShow.style.position = 'absolute'
        this.$refs.storeMenuShow.style.left = left + 'px'
        this.$refs.storeMenuShow.style.top = bottom + 'px'
        this.$refs.storeMenuShow.style.zoom = 1
      })
    },
    // 店招导航栏 移入显示
    handlePackNavBar (e) {
      let navBar = this.$refs.navBar
      if ((navBar && navBar[1].contains(e.target)) || this.$refs.storeMenuShow.contains(e.target)) {
        this.$refs.storeMenuShow.style.visibility = 'visible'
      } else {
        this.$refs.storeMenuShow.style.visibility = 'hidden'
      }
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
      width: 960px;
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

        .pre_module {
          height: auto;
          z-index: 1;
          position: relative;

          .pre_module_con {
            position: relative;
            zoom: 1;
            margin-bottom: 20px;
            min-height: 50px;
            &>:nth-child(n) {
              background: #fff;
            }
          }
        }
      }
    }
  }
}
.content_bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  min-height: 100%;
  z-index: 1;
  background-color: rgb(253, 253, 253);
  /* background-image: url(//sc01.alicdn.com/kf/HTB1z.roUOLaK1RjSZFxq6ymPFXaW.jpg); */
  background-repeat: no-repeat;
  background-position: center top;
  zoom: 1;
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
    visibility: hidden;
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

</style>
