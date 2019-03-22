<template>
  <div class="shop-info">
    <input type="checkbox" />
    <span class="date">{{list.createTime}}</span>
    <span class="order-num">订单号：<span>{{list.id}}</span></span>
    <span class="name">{{list.sellerName}}</span>
    <img src="static/img/user/user_part.png">
    <span v-if="list.status === 1" class="delete pay-time"><i class="el-icon-time"></i><span>自动取消:00时 00分 00秒</span></span>
    <span v-else class="delete"><img src="static/img/user/user_delete.png"></span>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  props: {
    list: {
      type: [Object, Array]
    }
  }
}
</script>
<style scoped>
  .shop-info {
    display: flex;
    align-items: center;
    height: 50px;
    background: #F7F7F7;
    line-height: 50px;
    padding-left: 12px;
    color: rgba(62, 62, 62, 1);
    background: #FFF8B7;
  }
  .shop-info input {
    height: 13px;
    width: 15px;
  }
  .shop-info .date {
    color: #180E0E;
    margin: 0 19px 0 8px;
  }
  .shop-info .order-num {
    margin-right: 174px;
  }
  .shop-info .name {
    max-width: 400px;
    margin-right: 10px;
    overflow: hidden;
    white-space: nowrap;
  }
  .shop-info .delete {
    display: flex;
    justify-content: flex-end;
    flex-grow: 1;
    margin-right: 20px;
  }
  .shop-info .pay-time {
    font-size: 24px;
    line-height: 24px;
    font-weight:300;
    color:rgba(0,0,0,1);
  }
  .pay-time span {
    margin-left: 10px;
    font-size: 13px;
  }
</style>
