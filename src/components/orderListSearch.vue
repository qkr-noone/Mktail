<template>
  <div class="search">
    <input type="text" placeholder="输入商品标题或订单号进行搜索" v-model="goodsOrderNum"/>
    <button class="btn" @click="submit">订单搜索</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      goodsOrderNum: ''
    }
  },
  props: {
    status: {
      type: [Number, String],
      default: ''
    },
    pageNum: {
      type: [Number]
    },
    pageSize: {
      type: [Number],
      default: 15
    }
  },
  methods: {
    submit () {
      if (!this.goodsOrderNum) return
      let map = {
        keyword: this.goodsOrderNum,
        orderType: '',
        sellerName: '',
        evaluationStatus: '',
        status: this.status,
        afterSaleStatus: '',
        startTime: '',
        endTime: '',
        username: this.$cookies.get('user-key')
      }
      this.API.orderFilter(map, this.pageNum, this.pageSize).then(res => {
        this.$emit('search', [res, this.pageNum])
      })
    }
  }
}
</script>
<style scoped>
  .search {
    color: rgba(48, 48, 48, 1);
    margin: -10px 0 14px 0;
  }
  .search input {
    padding-left: 8px;
    outline: none;
    width: 259px;
    height: 26px;
    margin-left: 24px;
    border: 1px solid rgba(225, 225, 225, 1);
    padding-top: 1px;
  }
  .search .btn {
    width: 93px;
    height: 24px;
    background: rgba(238, 238, 238, 1);
    border: 1px solid rgba(201, 201, 201, 1);
    margin: 0 17px 0 -8px;
    border-left: none;
    box-sizing: content-box;
    padding-bottom: 2px;
    padding-top: 1px;
  }
</style>
