<template>
  <div class="content" data-attr="one 待支付">
    <orderListSearch></orderListSearch>
    <div class="shop">
      <orderListTitle @changePageNum="changeValue($event)"></orderListTitle>
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
    <el-pagination  v-if="waitPay.total"
      :page-size="15"
      layout="prev, pager, next, jumper"
      :total="waitPay.total">
    </el-pagination>
  </div>
</template>
<script>
import orderListTitle from '@/components/orderListTitle'
import orderListContentHead from '@/components/orderListContentHead'
import orderListContent from '@/components/orderListContent'
import orderListSearch from '@/components/orderListSearch'
export default {
  data () {
    return {
      waitPay: '', // 待支付
      pageNum: 1
    }
  },
  components: { orderListTitle, orderListContentHead, orderListContent, orderListSearch },
  mounted () {
    this.API.userOrder({ userName: this.$cookies.get('user-key'), status: 1, pageNum: this.pageNum, pageSize: 15 }).then(res => {
      this.waitPay = res
      console.log(this.waitPay, 10)
    })
  },
  methods: {
    changeValue (data, index = 1) {
      this.pageNum = index
      this.waitPay = data
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
  .el-pagination {
    display: flex;
    justify-content: flex-end;
    padding-right: 30px;
    margin-top: 30px;
  }
  .content .shop {
    margin:0 14px;
    font-weight: 300;
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
</style>
