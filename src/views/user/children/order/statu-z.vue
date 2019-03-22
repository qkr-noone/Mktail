<template>
  <div class="content" data-attr="zone 所有订单">
    <div class="search">
      <input type="text" placeholder="输入商品标题或订单号进行搜索" v-model="goodsOrderNum"/>
      <button class="btn" @click="submit">订单搜索</button>
      <span @click="moreCondition = !moreCondition">更多筛选条件 <i class="el-icon-arrow-down"></i></span>
    </div>
    <div class="condition" v-show="moreCondition">
      <div class="condition-item">
        <div class="group">
          <label>订单类型</label>
          <select v-model="select.orderSelect">
            <option>全部</option>
            <option>普通订单</option>
            <option>采购订单</option>
          </select>
        </div>
        <div class="group">
          <label>成交时间</label>
          <el-date-picker size="small" v-model="select.datetime1" type="datetime" placeholder="请选择时间范围起始"></el-date-picker>
          <span>-</span>
          <el-date-picker v-model="select.datetime2" size="small" type="datetime" placeholder="请选择时间范围结束"></el-date-picker>
        </div>
        <div class="group">
          <label>卖家昵称</label>
          <input v-model="select.seller"/>
        </div>
      </div>
      <div class="condition-item">
        <div class="group">
          <label>评价状态</label>
          <select v-model="select.recomSelect">
            <option>全部</option>
            <option>待评价</option>
            <option>已评价</option>
          </select>
        </div>
        <div class="group align" style="width:347px">
          <label>交易状态</label>
          <select v-model="select.tradeSelect">
            <option>全部</option>
            <option>待付款</option>
            <option>已取消</option>
            <option>已付款</option>
            <option>已发货</option>
            <option>已完成</option>
            <option>已退款</option>
          </select>
        </div>
        <div class="group">
          <label>售后服务</label>
          <select v-model="select.ensureSelect">
            <option>全部</option>
            <option>已投诉</option>
            <option>退款中</option>
          </select>
        </div>
      </div>
    </div>
    <div v-show="moreCondition && isSearch">
      <a href="javascript:;" class="filter" @click="choose">搜索</a>
    </div>
    <div class="shop">
      <orderListTitle @changePageNum="changeValue($event)"></orderListTitle>
      <div class="shop-handle">
        <div class="choose" v-if="all.total">
          <input type="checkbox"/><span>全选</span>
          <button class="confirm-btn">合并付款</button>
          <button class="confirm-btn">批量确认收货</button>
        </div>
        <div class="page">
          <button class="page-btn">上一页</button>
          <button class="page-btn forbidden">下一页</button>
        </div>
      </div>
      <div class="shop-list" v-for="list in all.rows" :key="list.id">
        <orderListContentHead :list="list"></orderListContentHead>
        <orderListContent :list="list"></orderListContent>
      </div>
      <div v-if="!all.total" class="shop-list not-data">没有符合条件的商品</div>
    </div>
    <el-pagination  v-if="all.total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage3"
      :page-size="100"
      layout="prev, pager, next, jumper"
      :total="1000">
    </el-pagination>
  </div>
</template>
<script>
import orderListTitle from '@/components/orderListTitle'
import orderListContentHead from '@/components/orderListContentHead'
import orderListContent from '@/components/orderListContent'
export default {
  data () {
    return {
      moreCondition: false,
      isSearch: false,
      goodsOrderNum: '',
      currentPage3: 5,
      select: {
        orderSelect: '全部',
        datetime1: '',
        datetime2: '',
        seller: '',
        recomSelect: '全部',
        tradeSelect: '全部',
        ensureSelect: '全部'
      },
      all: '', // 所有订单
      pageNum: 1
    }
  },
  components: { orderListTitle, orderListContentHead, orderListContent },
  props: {},
  computed: {
    bridge () {
      return Object.values(this.select)
    }
  },
  mounted () {
    // 所有订单
    this.API.userOrder({userName: this.$cookies.get('user-key'), pageNum: this.pageNum, pageSize: 15}).then(res => {
      this.all = res
      console.log(this.all)
    })
  },
  methods: {
    choose () {
      let one = this.select.datetime1 ? this.formatDate(this.select.datetime1) : this.select.datetime1
      let two = this.select.datetime2 ? this.formatDate(this.select.datetime2) : this.select.datetime2
      console.log(one, two, this.select.tradeSelect, this.select.orderSelect, this.select.seller, this.select.recomSelect, this.select.ensureSelect)
    },
    submit () {
      console.log(this.goodsOrderNum)
    },
    changeValue (data, index = 1) {
      this.pageNum = index
      this.all = this.data
    },
    // 格式化时间 2019-01-22 17:24:08
    formatDate (date) {
      let y = date.getFullYear()
      let m = date.getMonth() + 1
      m = m < 10 ? '0' + m : m
      let d = date.getDate()
      d = d < 10 ? ('0' + d) : d
      let h = date.getHours()
      h = h < 10 ? ('0' + h) : h
      let mi = date.getMinutes()
      mi = mi < 10 ? ('0' + mi) : mi
      let s = date.getSeconds()
      s = s < 10 ? ('0' + s) : s
      return y + '-' + m + '-' + d + ' ' + h + ':' + mi + ':' + s
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  },
  watch: {
    bridge () {
      this.isSearch = true
    }
  }
}
</script>
<style scoped>
  .el-pagination {
    display: flex;
    justify-content: flex-end;
    padding-right: 30px;
    margin-top: 30px;
  }
  .not-data {
    height: 130px;
    line-height: 130px;
    text-align: center;
    border: none !important;
  }
  .filter{
    width: 60px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    background-color: red;
    margin: 10px 24px;
    color: #fff;
  }
  input{
    padding-left: 8px;
  }
  .content .search {
    color: rgba(48, 48, 48, 1);
    margin: -10px 0 14px 0;
  }
  .content .search input {
    outline: none;
    width: 259px;
    height: 26px;
    margin-left: 14px;
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
  .condition {
    margin-left: 24px;
    height: 108px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-right: 18px;
    color: rgba(87, 87, 87, 1);
  }
  .condition .condition-item {
    display: flex;
    justify-content: space-between;
  }
  .condition .group {
    display: inline-block;
  }
  .condition input {
    margin-bottom: 10px;
  }
  .condition label {
    margin-right: 8px;
    color: #575757;
  }
  .condition input,
  .condition select {
    box-sizing: border-box;
    display: inline-block;
    width: 158px;
    height: 29px;
    border: 1px solid #E1E1E1;
    color: rgba(126, 126, 126, 1);
  }
  .condition .align {
    margin-left: -175px;
  }
  .content .shop {
    margin: 0 14px;
    font-weight: 300;
  }
  ul {
    display: inline-block;
  }
  .shop .group select {
    border: 0;
    background-color: transparent;
    color: rgba(126, 126, 126, 1);
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
    float: right;
  }
  .shop .shop-handle .confirm-btn {
    padding: 0 15px;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(199, 199, 199, 1);
    border-radius: 3px;
    height: 24px;
    line-height: 24px;
    margin-left: 10px;
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
