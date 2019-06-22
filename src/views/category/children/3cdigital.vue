<template>
  <div class="digital">
    <digital></digital>
    <div class="small_box">
      <h3>优品推荐</h3>
    </div>
  </div>
</template>

<script>
import digital from '@/components/category/3cdigital'
export default {
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
  components: { digital },
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
  .digital {
    width: 1226px;
  }

  .small_box table {
    width:1224px;
    height:346px;
    background-color: #4F4F4F;
    display: flex;
    flex-direction: column;
  }
  .small_box tr {
    padding-left: 20px;
  }
  .small_box img {
    width: 199px;
    height: 199px;
  }
</style>
