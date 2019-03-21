<template>
  <div class="content" data-attr="one 待支付">
    <div class="search">
      <input type="text" placeholder="输入商品标题或订单号进行搜索" v-model="goodsOrderNum"/>
      <button class="btn" @click="submit">订单搜索</button>
    </div>
    <div class="shop">
      <orderListTitle></orderListTitle>
      <div class="shop-handle">
        <div class="choose" v-if="waitPay.total">
          <input type="checkbox"/><span>全选</span>
          <button class="confirm-btn">合并付款</button>
        </div>
        <div class="page">
          <button class="page-btn">上一页</button>
          <button class="page-btn forbidden">下一页</button>
        </div>
      </div>
      <div class="shop-list" v-for="list in waitPay.rows" :key="list.id">
        <orderListContentHead :list="list"></orderListContentHead>
        <orderListContent :list="list"></orderListContent>
      </div>
      <div v-if="!waitPay.total" class="shop-list not-data">没有符合条件的商品</div>
    </div>
    <div class="shopPage" v-if="waitPay.total">
      <button>上一页</button>
      <span>1</span>
      <button>下一页</button>
      <span>向第</span>
      <input type="text" class="skip" />页
      <button class="skip">跳转</button>
    </div>
  </div>
</template>
<script>
import orderListTitle from '@/components/orderListTitle'
import orderListContentHead from '@/components/orderListContentHead'
import orderListContent from '@/components/orderListContent'
export default {
  data () {
    return {
      waitPay: '', // 待支付
      goodsOrderNum: '',
      pageNum: 1
    }
  },
  components: { orderListTitle, orderListContentHead, orderListContent },
  mounted () {
    this.API.userOrder({ userName: this.$cookies.get('user-key'), status: 1, pageNum: this.pageNum, pageSize: 15 }).then(res => {
      this.waitPay = res
      console.log(this.waitPay, 10)
    })
  },
  methods: {
    submit () {
      console.log(this.goodsOrderNum)
    }
  }
}
</script>
<style scoped>
  .not-data {
    height: 130px;
    line-height: 130px;
    text-align: center;
    border: none !important;
  }
  .content .search {
    color: rgba(48, 48, 48, 1);
    margin: -10px 0 14px 0;
  }
  .content .search input {
    padding-left: 8px;
    outline: none;
    width: 259px;
    height: 26px;
    margin-left: 24px;
    border: 1px solid rgba(225, 225, 225, 1);
    padding-top: 1px;
  }
  .content .search .btn {
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
  .content .shop {
    margin:0 14px;
    font-weight: 300;
  }
  ul {
    display: inline-block;
  }
  /* 选择 合并 上下页*/
  .shop .shop-handle {
    height: 30px;
    line-height: 30px;
    margin-top: 10px;
    font-size: 14px;
    color: rgba(98, 98, 98, 1);
  }
  .shop-handle .choose {
    float: left;
    display: flex;
    align-items: center;
  }
  .shop .shop-handle input {
    height: 15px;
    width: 15px;
    margin-right: 10px;
  }
  .shop .shop-handle .page {
    display: inline-block;
    float: right;
  }
  .shop .shop-handle .confirm-btn {
    padding: 0 15px;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(199, 199, 199, 1);
    border-radius: 3px;
    line-height: 24px;
    margin: 0 0px 0 10px;
    font-size: 14px;
    color: rgba(98, 98, 98, 1);
  }
  .shop .shop-handle .page-btn {
    width: 59px;
    height: 20px;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(239, 239, 239, 1);
    border-radius: 3px;
    font-size: 13px;
    color: rgba(206, 206, 206, 1);
  }
  .shop .forbidden {
    background: rgba(244, 244, 244, 1) !important;
    color: rgba(98, 98, 98, 1);
  }
  .shop .shop-list {
    margin-top: 14px;
    width: 1065px;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(191, 191, 191, 1);
    color: #414141;
    font-size: 13px;
  }
  .shop .shop-list li:first-child {
    width: 719px;
    border-left: none;
    display: flex;
  }
  .content .shopPage {
    text-align: right;
    margin-top: 30px;
    padding-right: 17px;
  }
  .content .shopPage button,
  .content .shopPage input {
    box-sizing: border-box;
    width: 80px;
    height: 32px;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(220, 220, 220, 1);
    border-radius: 3px;
    margin: 0 10px 0 10px;
    text-align: center;
    font-size: 14px;
    font-weight: 300;
    color: rgba(220, 220, 220, 1);
  }
  .content .shopPage .skip {
    width: 60px;
    font-size: 16px;
    font-family: SourceHanSansCN-Normal;
    font-weight: 400;
    color: rgba(47, 47, 47, 1);
  }
  .top span {
    font-size: 15px;
    font-weight: 400;
    color: rgba(0, 0, 0, 1);
    position: absolute;
    left: 12px;
    top: 2px;
  }
</style>
