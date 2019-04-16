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
          <ul class="menu-box">
            <li class="menu-item menu-item-li" v-for="list in menuList" :key="list.menuname">
              <a class="menu-a" href="javascript:;"><span>{{list.menuname}}</span><i class="el-icon-arrow-down menu-more" v-if="list.sonMenunameList.length"></i></a>
              <div class="menu-two-box" v-if="list.sonMenunameList.length">
                <div class="visible"></div>
                <ul class="menu-two">
                  <li class="menu-item menu-two-li" v-for="item in list.sonMenunameList" :key="item.menuname">
                    <a class="menu-a menu-two-a" href="javascript:;"><span>{{item.menuname}}</span><i class="el-icon-caret-right menu-more" v-if="item.sonMenunameList.length"></i></a>
                    <shopsNav v-if="item.sonMenunameList.length" :list="item.sonMenunameList"></shopsNav>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
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
    <section class="m-body" v-for="list in temGoodsList" :key="list.posterImgUrl">
      <section class="m-content-box content-1" :style="'background-image:'+ list.posterImgUrl + ''">
        <div class="m-content">
          <ul class="m-con-ul">
            <li class="m-con-li" v-for="item in list.goodsResultList" :key="item.imgUrl">
              <router-link :to="{path: '/detail', query: {goodsId: item.goodsid}}" class="m-con-a">
                <img :src="item.imgUrl">
              </router-link>
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
import shopsNav from '@/components/shopsNav'
export default {
  data () {
    return {
      activeIndex: '1',
      shopData: {},
      menuList: [],
      bannerList: [],
      temGoodsList: []
    }
  },
  components: { shortcutHeader, pageFooter, shopsNav },
  mounted () {
    this.API.shopPage().then(res => {
      this.menuList = res.menuResultList
      this.bannerList = res.bannerResultList
      this.temGoodsList = res.postersResultList1
      console.log(this.temGoodsList)
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
    background-color: rgb(132, 166, 186);
  }
  .menu-item:hover>.menu-two-box {
    display: block;
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
