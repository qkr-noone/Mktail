<template>
  <ul class="recommend-list">
    <li class="list-item" v-for="(item, index) in list" :key="item.id" v-if="index < 6">
      <img :src="item.pic" :data-id="item.goodsId">
      <p class="list-item-title">{{item.title}}</p>
      <p class="price">￥{{item.price}}</p>
    </li>
  </ul>
</template>
<script>
export default {
  data () {
    return {}
  },
  props: {
    list: {
      type: Array
    }
  }
}

</script>
<style scoped>
  .recommend-list{
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .recommend-list .list-item{
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-around;
    font-size:16px;
    font-weight:500;
    color:rgba(0,0,0,1);
  }
  .recommend-list .list-item-title{
    width: 166px;
    height: 32px;
    line-height: 16px;
    overflow: hidden;
    font-size:14px;
    font-weight:300;
    color:rgba(143,143,143,1);
    margin: 7px 0 7px 0;
  }
</style>
