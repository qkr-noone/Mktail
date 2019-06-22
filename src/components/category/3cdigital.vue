<template>
  <div class="title">
    <ul class="item">
      <li v-for="item in nav" :key="item.title" >
        <router-link :to="{path: '/'+item.path}" :class="{active: chooseNav === item.path}"><a href="">{{item.title}}</a></router-link>
      </li>
    </ul>

    <div id="myCarousel" data-ride="carousel" data-interval="4000" class="sui-carousel">
      <el-carousel :interval="5000" arrow="always" height="100%" @change="carouselChange">
        <el-carousel-item v-for="item in bannerList" :key="item.id">
          <router-link :to="{path:item.url}"><img :src="item.pic"></router-link>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: '3cdigital',
  data () {
    return {
      bannerList: [],
      nav: [
        {title: '手机', path: 'cheak'},
        {title: '品牌推荐', path: 'cheak'},
        {title: '手机壳', path: 'cheak'},
        {title: '耳机', path: 'cheak'},
        {title: '储存卡', path: 'cheak'},
        {title: '手机贴膜', path: 'cheak'},
        {title: '智能手表', path: 'cheak'},
        {title: '数据线', path: 'cheak'},
        {title: '手机支架', path: 'cheak'},
        {title: '自拍杆', path: 'cheak'},
        {title: '键盘鼠标', path: 'cheak'}
      ],
      chooseNav: ''
    }
  },
  mounted () {
    // 主页banner广告
    this.API.homeBanner({categoryId: 1}).then(rtn => {
      this.bannerList = rtn.contentList || []
    })
  },
  methods: {
    carouselChange (index, key) {
      if (this.bannerList[index] && this.bannerList[index].bgcolor) this.bgImg = this.bannerList[index].bgcolor
    }
  }
}
</script>

<style scoped>
  .title {
    width: 1226px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .item{
    width:190px;
    height: 380px;
    padding-top: 20px;
    background-color: #5a5a5a;
    float: left;
  }
  .item:hover {
    display: block;
  }
  .item li {
    text-align: left;
    line-height: 25px;
    font-size: 12px;
    font-weight: 400;
    overflow: hidden;
    padding: 0 20px;
    margin: 0;
    display: flex;
    justify-content: space-between;
    background-color: #5a5a5a;
  }
  .item a {
    color: #fff;
    font-family: "SimHei";
    font-size: 14px;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .item li:hover {
    background-color: #E71600;
    transition: background-color .2s ease;
  }
  /* banner */
  .sui-carousel {
    width: 1039px;
    height: 400px;
    position: relative;
    top: -400px;
    left: 190px;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  .small_box {
    width:1224px;
    height:346px;
    background:rgba(255,255,255,1);
  }
  .el-carousel{
    height: 100%;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
