<template>
  <div id="shops-index" data-attr="店铺首页-第一版">
    <keep-alive></keep-alive>
    <shortcutHeader></shortcutHeader>
    <!-- 店铺头部海报 -->
    <header class="m-body">
      <div class="m-head-block m-head-one">
        <a href="javascript:;">other</a>
      </div>
      <div class="m-head-block m-head-two"></div>
    </header>
    <nav class="m-body">
      <div class="m-nav-box">
        <div class="m-nav-content">
          <ul class="el-menu-demo">
            <li class="menu-item">
              <a href="javascript:;">show</a>
              <a href="javascript:;">next<i class="el-icon-arrow-down"></i></a>
              <ul class="menu-two">
                <li>
                  <a href="">two</a>
                </li>
              </ul>
            </li>
          </ul>
          <!-- <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#98BACE" text-color="#ffffff">
            <el-menu-item index=num v-for="(list, num) in menuList" :key="num">{{list.menuname}}</el-menu-item>
            <el-menu-item index="4"><router-link :to="{path: '/search', query: {keywords: '脚轮'}}" target="_blank">脚轮</router-link></el-menu-item>
            <el-menu-item index="1" v-else-if="index > 0">{{list.menuname}}</el-menu-item>
            <el-submenu index="2">
              <template slot="title">所有分类</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-submenu index="2-4">
                <template slot="title">选项4</template>
                <el-menu-item index="2-4-1">选项1</el-menu-item>
                <el-menu-item index="2-4-2">选项2</el-menu-item>
                <el-menu-item index="2-4-3">选项3</el-menu-item>
              </el-submenu>
            </el-submenu>
          </el-menu> -->
        </div>
      </div>
    </nav>
    <section class="m-body">
      <section class="m-banner-box">
        <el-carousel :interval="5000" arrow="always" height="100%">
          <el-carousel-item v-for="item in bannerList" :key="item.status">
            <a class="m-banner-con" :href="item.url" :data-status="item.status">
              <img :src="item.imgUrl">
            </a>
          </el-carousel-item>
        </el-carousel>
      </section>
    </section>
    <section class="m-body">
      <section class="m-content-box content-1">
        <div class="m-content">
          <ul class="m-con-ul">
            <li class="m-con-li">
              <a href="" class="m-con-a">
                <img src="/static/img/logo-243-300.png">
              </a>
            </li>
            <li class="m-con-li">
              <a href="" class="m-con-a">
                <img src="/static/img/logo-243-300.png">
              </a>
            </li>
            <li class="m-con-li">
              <a href="" class="m-con-a">
                <img src="/static/img/logo-243-300.png">
              </a>
            </li>
            <li class="m-con-li">
              <a href="" class="m-con-a">
                <img src="/static/img/logo-243-300.png">
              </a>
            </li>
          </ul>
        </div>
      </section>
    </section>
    <section class="m-body">
      <section class="m-content-box content-2">
        <div class="m-content">
          <ul class="m-con-ul">
            <li class="m-con-li">
              <a href="" class="m-con-a">
                <img src="/static/img/logo-243-300.png">
              </a>
            </li>
            <li class="m-con-li">
              <a href="" class="m-con-a">
                <img src="/static/img/logo-243-300.png">
              </a>
            </li>
            <li class="m-con-li">
              <a href="" class="m-con-a">
                <img src="/static/img/logo-243-300.png">
              </a>
            </li>
            <li class="m-con-li">
              <a href="" class="m-con-a">
                <img src="/static/img/logo-243-300.png">
              </a>
            </li>
          </ul>
        </div>
      </section>
    </section>
    <section class="m-body">
      <section class="m-content-box content-3">
        <div class="m-content">
          <ul class="m-con-ul">
            <li class="m-con-li">
              <a href="" class="m-con-a">
                <img src="/static/img/logo-243-300.png">
              </a>
            </li>
            <li class="m-con-li">
              <a href="" class="m-con-a">
                <img src="/static/img/logo-243-300.png">
              </a>
            </li>
            <li class="m-con-li">
              <a href="" class="m-con-a">
                <img src="/static/img/logo-243-300.png">
              </a>
            </li>
            <li class="m-con-li">
              <a href="" class="m-con-a">
                <img src="/static/img/logo-243-300.png">
              </a>
            </li>
          </ul>
        </div>
      </section>
    </section>
    <section class="m-body">
      <section class="m-content-box content-4">
        <div class="m-content">
          <ul class="m-con-ul">
            <li class="m-con-li">
              <a href="" class="m-con-a">
                <img src="/static/img/logo-243-300.png">
              </a>
            </li>
            <li class="m-con-li">
              <a href="" class="m-con-a">
                <img src="/static/img/logo-243-300.png">
              </a>
            </li>
            <li class="m-con-li">
              <a href="" class="m-con-a">
                <img src="/static/img/logo-243-300.png">
              </a>
            </li>
            <li class="m-con-li">
              <a href="" class="m-con-a">
                <img src="/static/img/logo-243-300.png">
              </a>
            </li>
          </ul>
        </div>
      </section>
    </section>
    <section class="m-body">
      <section class="m-content-box content-5">
        <div class="m-content">
          <ul class="m-con-ul">
            <li class="m-con-li">
              <a href="" class="m-con-a">
                <img src="/static/img/logo-243-300.png">
              </a>
            </li>
            <li class="m-con-li">
              <a href="" class="m-con-a">
                <img src="/static/img/logo-243-300.png">
              </a>
            </li>
            <li class="m-con-li">
              <a href="" class="m-con-a">
                <img src="/static/img/logo-243-300.png">
              </a>
            </li>
            <li class="m-con-li">
              <a href="" class="m-con-a">
                <img src="/static/img/logo-243-300.png">
              </a>
            </li>
          </ul>
        </div>
      </section>
    </section>
    <section class="m-body">
      <section class="m-content-box content-6">
        <div class="m-content">
          <ul class="m-con-ul">
            <li class="m-con-li">
              <a href="" class="m-con-a">
                <img src="/static/img/logo-243-300.png">
              </a>
            </li>
            <li class="m-con-li">
              <a href="" class="m-con-a">
                <img src="/static/img/logo-243-300.png">
              </a>
            </li>
            <li class="m-con-li">
              <a href="" class="m-con-a">
                <img src="/static/img/logo-243-300.png">
              </a>
            </li>
            <li class="m-con-li">
              <a href="" class="m-con-a">
                <img src="/static/img/logo-243-300.png">
              </a>
            </li>
          </ul>
        </div>
      </section>
    </section>
    <section class="m-body">
      <section class="m-content-box content-7">
        <div class="m-content">
          <ul class="m-con-ul">
            <li class="m-con-li">
              <a href="" class="m-con-a">
                <img src="/static/img/logo-243-300.png">
              </a>
            </li>
            <li class="m-con-li">
              <a href="" class="m-con-a">
                <img src="/static/img/logo-243-300.png">
              </a>
            </li>
            <li class="m-con-li">
              <a href="" class="m-con-a">
                <img src="/static/img/logo-243-300.png">
              </a>
            </li>
            <li class="m-con-li">
              <a href="" class="m-con-a">
                <img src="/static/img/logo-243-300.png">
              </a>
            </li>
          </ul>
        </div>
      </section>
    </section>
    <pageFooter></pageFooter>
  </div>
</template>
<script>
import shortcutHeader from '@/components/shortcutHeader'
import pageFooter from '@/components/pageFooter'
export default {
  data () {
    return {
      activeIndex: '1',
      shopData: {},
      menuList: [],
      bannerList: []
    }
  },
  components: { shortcutHeader, pageFooter },
  mounted () {
    this.API.shopPage().then(res => {
      console.log(res)
      this.$nextTick(() => {
        let array = document.querySelectorAll('.m-content-box')
        array.forEach(item => {
          // 获取背景图片的高度 => 设置容器的高度
          let style = item.currentStyle || window.getComputedStyle(item, false)
          let url = style.backgroundImage.slice(4, -1).split('"')[1]
          let image = new Image()
          image.src = url
          let height = image.height
          item.style.height = `${height}px`
        })
      })
      this.menuList = res.menuResultList
      this.bannerList = res.bannerResultList
    })
  },
  methods: {
    handleSelect () {}
  }
}

</script>
<style scoped>
/* 头部>>> 海报 */
  .m-body{
    min-width: 1226px;
    margin: 0 auto;
  }
  .m-head-block {
  }
  .m-head-one{
    background-image: url('/static/img/shop/shop3_01.jpg');
    background-repeat: no-repeat;
    height: 200px;
    background-position: center 0;
  }
  .m-head-two{}
/* 菜单>>  */
  .m-nav-box {
    background-color: #98BACE;
  }
  .m-nav-content {
    width: 1226px;
    margin: 0 auto;
  }
  .el-menu.el-menu--horizontal {
    border-bottom: none;
    height: 44px;
  }
  .el-menu--horizontal>.el-menu-item{
    height: 44px;
    line-height: 44px;
  }
/* banner */
  .m-banner-box {
    height: 600px;
  }
  .el-carousel{
    height: 600px;
  }
  .el-carousel__item a.m-banner-con{
    display: flex;
    justify-content: center;
    align-items: center;
  }
/* 内容 */
  .m-content-box {
    background-position: center 0;
    background-repeat: no-repeat;
    height: 775px;
    position: relative;
  }
  .content-1{
    background-image: url('/static/img/shop/shop3_05.jpg');
  }
  .content-2{
    background-image: url('/static/img/shop/shop3_06.jpg');
  }
  .content-3{
    background-image: url('/static/img/shop/shop3_07.jpg');
  }
  .content-4{
    background-image: url('/static/img/shop/shop3_08.jpg');
  }
  .content-5{
    background-image: url('/static/img/shop/shop3_09.jpg');
  }
  .content-6{
    background-image: url('/static/img/shop/shop3_10.jpg');
  }
  .content-6{
    background-image: url('/static/img/shop/shop3_11.jpg');
  }
  .content-7{
    background-image: url('/static/img/shop/shop3_12.jpg');
  }
  .m-content {
    position: absolute;
    bottom: 20px;
    left: calc((100% - 1226px)/2);
    min-width: 1226px;
  }
  .m-con-ul {
    display: flex;
    justify-content: space-between;
  }
  .m-con-li {
    border:1px solid rgba(236,27,26,0.19);
  }
</style>
<style>
  /* 菜单>>  */
  .el-menu--horizontal>.el-submenu .el-submenu__title {
    height: 44px;
    line-height: 44px;
  }
  .el-menu--horizontal>.el-menu-item.is-active, .el-menu--horizontal>.el-submenu.is-active .el-submenu__title {
    border-bottom-color: transparent;
    background-color: #84a6ba !important;
    color: #ffffff;
  }
  .el-submenu__title i {
    color: #000000;
  }
  li.el-menu-item >a {
    height: 44px;
    line-height: 40px;
  }
  .el-carousel__arrow--left {
    left: calc((100% - 1226px)/2);
    background-color: rgba(0, 0, 0, 0.4);
    font-size: 28px;
    height: 60px;
    width: 30px;
    border-radius: 5px;
  }
  .el-carousel__arrow--right {
    right: calc((100% - 1226px)/2);
    background-color: rgba(0, 0, 0, 0.4);
    font-size: 28px;
    height: 60px;
    width: 30px;
    border-radius: 5px;
  }
</style>
