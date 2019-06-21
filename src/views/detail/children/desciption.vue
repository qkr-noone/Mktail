<template>
  <div class="tab-pane">
    <div class="tab-title">
      <h4>商品介绍</h4>
    </div>
    <ul class="goods-intro unstyled">
      <li v-for="item in attrItem" :key="item.attribute">{{item.attribute}}：{{item.value}}</li>
      <li v-if="articleNumber">货号:{{articleNumber}}</li>
      <li v-if="series">系列:{{series}}</li>
    </ul>
    <div class="goods-intro">
      <div class="video_box">
        <video preload="metadata" muted width="100%" height="100%" loop="false" autoplay="true" style="background-color: none;" :src="shopsVideo" controls></video>
      </div>
    </div>
    <div class="intro-detail" v-html="goodsIntroduc">
      {{goodsIntroduc}}
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  props: {
    attrItem: {
      type: Array
    },
    goodsIntroduc: {
      type: String
    },
    scroll: {
      type: Object
    },
    articleNumber: {
      type: String
    },
    series: {
      type: String
    },
    shopsVideo: {
      type: String
    }
  },
  mounted () {
    this.$nextTick(() => {
      document.documentElement.scrollTop = this.scroll.scrollTop
    })
  }
}

</script>
<style scoped>
.goods-intro {
    flex-wrap: wrap;
  display: flex;
  border-bottom: 1px solid #B9B9B9;
  padding-bottom: 60px;
  margin-bottom: 20px;
}
ul.goods-intro li:first-child{
  width: 100%;
  margin-left: 32px;
  margin-top: 10px;
  margin-bottom: 15px;
}
ul.goods-intro li+li{
  margin: 0 32px;
}
ul.goods-intro li {
  font-size: 14px;
  color: #464646;
  width: 188px;
  line-height: 30px;
  display: flex;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
 }
 .intro-detail {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    margin: 0 25px;
  }
  .intro-detail>img{
    max-width: 100%;
  }
  .tab-title {
    height:50px;
    background:rgba(249,249,249,1);
    border:1px solid rgba(227,227,227,1);
    line-height: 50px;
  }
  .tab-title h4 {
    text-align: left;
    font-size:14px;
    color:rgba(135,135,135,1);
    margin-left: 20px;
  }
  .video_box {
    padding: 20px;
    margin: 0 auto;
  }
</style>
