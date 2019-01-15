<template>
  <div class="tab-pane">
    <div class="tab-title">
      <h4>商品介绍</h4>
    </div>
    <ul class="goods-intro unstyled">
      <li v-for="item in attrItem" :key="item.text">{{item.text}}：{{item.value}}</li>
    </ul>
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
    }
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
  width: 180px;
  line-height: 30px;
  display: flex;
 }
 .intro-detail {
    display: flex;
    flex-direction: column;
    align-items: center;
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
</style>
