<template>
  <div class="content" data-attr="zone 所有订单">
    <div class="search">
      <input type="text" placeholder="输入商品标题或订单号进行搜索" v-model="goodsOrderNum"/>
      <button class="btn has_pointer" @click="submit(1)">订单搜索</button>
      <span class="has_pointer" @click="moreCondition = !moreCondition">更多筛选条件 <i class="el-icon-arrow-down"></i></span>
    </div>
    <div class="condition" v-show="moreCondition">
      <div class="condition-item">
        <div class="group">
          <label>订单类型</label>
          <select v-model="select.orderSelect" class="has_pointer">
            <option :value="0">全部</option>
            <option :value="1">普通订单</option>
            <option :value="2">采购订单</option>
          </select>
        </div>
        <div class="group">
          <label>成交时间</label>
          <el-date-picker size="small" v-model="select.datetime1" type="datetime" default-time="00:00:00" placeholder="请选择时间范围起始"></el-date-picker>
          <span>-</span>
          <el-date-picker v-model="select.datetime2" size="small" type="datetime" default-time="23:59:59" placeholder="请选择时间范围结束"></el-date-picker>
        </div>
        <div class="group">
          <label>卖家昵称</label>
          <input v-model="select.seller"/>
        </div>
      </div>
      <div class="condition-item">
        <div class="group">
          <label>评价状态</label>
          <select v-model="select.recomSelect" class="has_pointer">
            <option :value="0">全部</option>
            <option :value="1">待评价</option>
            <option :value="2">已评价</option>
          </select>
        </div>
        <div class="group align" style="width:347px">
          <label>交易状态</label>
          <select v-model="select.tradeSelect" class="has_pointer">
            <option :value="0">全部</option>
            <option :value="1">待付款</option>
            <option :value="2">已取消</option>
            <option :value="3">已付款</option>
            <option :value="4">已发货</option>
            <option :value="5">已完成</option>
            <option :value="6">已退款</option>
          </select>
        </div>
        <div class="group">
          <label>售后服务</label>
          <select v-model="select.ensureSelect" class="has_pointer">
            <option :value="0">全部</option>
            <option :value="1">已投诉</option>
            <option :value="2">退款中</option>
          </select>
        </div>
      </div>
    </div>
    <div v-show="moreCondition && isSearch">
      <a href="javascript:;" class="filter" @click="submit(1)">搜索</a>
    </div>
    <div class="shop">
      <orderListTitle @changePageNum="changeValue($event)" :pageSize="pageSize"></orderListTitle>
      <div class="shop-handle">
        <div class="choose" v-if="all.total">
          <input type="checkbox" @click="selectAll" v-model="isChecked" class="has_pointer" /><span>全选</span>
          <button class="confirm-btn" v-if="isWaitingPay" @click="togetherBtn(1, '合并付款')">合并付款</button>
          <button class="confirm-btn" v-if="isWaitingReceipt" @click="togetherBtn(4, '批量确认收货')">批量确认收货</button>
        </div>
        <div class="page">
          <button class="page-btn" :class="{'forbidden':pageNum === 1}" @click="prevPage">上一页</button>
          <button class="page-btn" :class="{'forbidden':pageNum * pageSize >= all.total}" @click="nextPage">下一页</button>
        </div>
      </div>
      <div class="shop-list" v-for="list in all.rows" :key="list.id">
        <orderListContentHead :list="list" :selectArr="selectArr" @toggle="toggle($event)" @remove="remove($event)"></orderListContentHead>
        <orderListContent :list="list" @boxOrderBtn="orderBtnVal=$event.join(',')" @boxOrderCancle="orderCancleVal=$event" @boxOrderRefund="orderRefundVal=$event"></orderListContent>
      </div>
      <div v-if="!all.total" class="shop-list not-data">没有符合条件的商品</div>
    </div>
    <el-pagination  v-if="all.total"
      :current-page.sync="pageNum"
      :page-size="pageSize"
      layout="prev, pager, next, jumper"
      :total="all.total">
    </el-pagination>
    <Box :orderBtnVal="orderBtnVal" @btnOrder="btnOrder()" @quitBtnVal="orderBtnVal=''" :orderCancleVal="orderCancleVal" @cancleOrder="cancleOrder()" @quitCancleVal="orderCancleVal=''" :orderRefundVal="orderRefundVal" @refundOrder="refundOrder()" @quitRefundVal="orderRefundVal=''"></Box>
  </div>
</template>
<script>
import orderListTitle from '@/components/orderListTitle'
import orderListContentHead from '@/components/orderListContentHead'
import orderListContent from '@/components/orderListContent'
import Box from './box'
import { formatDate } from '@/common/utils'
export default {
  data () {
    return {
      moreCondition: false,
      isSearch: false,
      goodsOrderNum: '',
      select: {
        orderSelect: 0, // 订单类型 1，普通订单 2，采购订单
        datetime1: '',
        datetime2: '',
        seller: '',
        recomSelect: 0, // 评价状态：1、待评价，2、已评价
        tradeSelect: 0, // 订单状态：1、待付款，2、已取消，3、已付款，4、已发货，5、已完成，6、已退款
        ensureSelect: 0 // 售后服务：1、已投诉，2、退款中
      },
      all: '', // 所有订单
      pageNum: 1,
      pageSize: 15, // 每页的数量
      selectArr: [], // 选中的列表
      isChecked: false, // 全选
      name: this.$cookies.get('user-key'),
      status: 0,
      orderBtnVal: '', // 确认收货
      orderCancleVal: '', // 取消订单
      orderRefundVal: '' // 申请退款
    }
  },
  components: { orderListTitle, orderListContentHead, orderListContent, Box },
  props: {},
  computed: {
    bridge () {
      return Object.values(this.select)
    },
    isWaitingPay () {
      let tem = this.all.rows.length && this.all.rows.some(item => {
        return item.status === 1
      })
      return tem
    },
    isWaitingReceipt () {
      let tem = this.all.rows.length && this.all.rows.some(item => {
        return item.status === 4
      })
      return tem
    }
  },
  mounted () {
    this.getOrder()
  },
  methods: {
    getOrder () {
      let arg = { userName: this.name, pageNum: this.pageNum, pageSize: this.pageSize }
      if (this.status) {
        Object.assign(arg, {status: this.status})
      }
      this.API.userOrder(arg).then(res => {
        this.all = res
      })
      this.$emit('getOrderStatus')
    },
    // 订单过滤
    submit (page) {
      this.status = -1
      let one = this.select.datetime1 ? formatDate(this.select.datetime1) : this.select.datetime1
      let two = this.select.datetime2 ? formatDate(this.select.datetime2) : this.select.datetime2
      this.pageNum = page
      let map = {
        keyword: this.goodsOrderNum,
        orderType: this.select.orderSelect || '',
        sellerName: this.select.seller,
        evaluationStatus: this.select.recomSelect || '',
        status: this.select.tradeSelect || '',
        afterSaleStatus: this.select.ensureSelect || '',
        startTime: one,
        endTime: two,
        username: this.name
      }
      this.API.orderFilter(map, this.pageNum, this.pageSize).then(res => {
        this.all = res
      })
    },
    // 子组件传值进来
    changeValue (data) {
      this.pageNum = 1
      this.all = data[0]
      this.status = data[1]
    },
    // 全选
    selectAll (event) {
      if (!event.currentTarget.checked) this.selectArr = []
      else {
        this.selectArr = []
        this.all.rows.forEach(item => {
          this.selectArr.push(item)
        })
      }
    },
    // 选择、切换
    toggle (item) {
      if (this.selectArr.indexOf(item) >= 0) {
        this.$delete(this.selectArr, this.selectArr.indexOf(item))
        this.isChecked = false
      } else {
        this.selectArr.push(item)
        if (this.selectArr.length === this.all.rows.length) this.isChecked = true
      }
    },
    // 订单删除
    remove (id) {
      this.$confirm('确定删除该订单吗, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.API.orderRemove({ids: id}).then(res => {
          if (res.success === false) return
          this.$notify.success({
            title: '删除成功'
          })
          this.getOrder()
        })
      }).catch(() => {})
    },
    nextPage () {
      if (this.pageNum * this.pageSize < this.all.total) {
        this.pageNum++
      }
    },
    prevPage () {
      if (this.pageNum > 1) {
        this.pageNum--
      }
    },
    // 批量操作(合并付款 status 1，批量收货 status 4)
    togetherBtn (status, desc) {
      if (!this.selectArr.length) return
      let point = []
      this.selectArr.forEach(item => {
        if (item.status !== status) point.push(item)
      })
      if (point.length) {
        this.$notify.warning({
          title: '猴尾巴提示您',
          message: `您${point.length}有笔订单不支持${desc},请重新选择`
        })
      } else {
        let orderIdlist = []
        this.selectArr.forEach(item => {
          orderIdlist.push(item.orderId)
        })
        if (status === 1) {
          this.selectArr = []
          this.$router.push({ path: '/pay', query: { payStyle: 'weChat', orderIdList: orderIdlist.join(','), from: Date.parse(new Date()) } })
        } else if (status === 4) {
          this.orderBtnVal = orderIdlist.join(',')
        }
      }
    },
    btnOrder () {
      this.API.orderBtnObtain({ orderIds: this.orderBtnVal }).then(res => {
        this.orderBtnVal = ''
        this.selectArr = []
        if (res.success === false) {
          this.$message.warning('提交异常')
          return false
        }
        this.$message.success('交易已成功')
        this.getOrder()
      })
    },
    cancleOrder () {
      this.API.orderCancle({ orderId: this.orderCancleVal }).then(res => {
        this.orderCancleVal = ''
        this.getOrder()
      })
    },
    refundOrder () {
      console.log(this.orderRefundVal, 'refund')
    }
  },
  watch: {
    bridge () {
      this.isSearch = true
    },
    pageNum (newPage) {
      // 初始化
      this.selectArr = []
      this.isChecked = false
      if (this.status >= 0) {
        let arg = {userName: this.name, pageNum: this.pageNum, pageSize: this.pageSize}
        if (this.status) {
          Object.assign(arg, {status: this.status})
        }
        this.API.userOrder(arg).then(res => {
          this.all = res
        })
      } else { // 通过条件查询
        this.submit(newPage)
      }
    }
  }
}
</script>
<style scoped>
  .has_pointer {
    cursor: pointer;
  }
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
  button:focus, button:hover {
    outline: none;
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
    cursor: pointer;
  }
  .shop .shop-handle .page-btn {
    width: 59px;
    height: 20px;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(239, 239, 239, 1);
    border-radius: 3px;
    font-size: 13px;
    cursor: pointer;
  }
  .shop .forbidden {
    background: rgba(244, 244, 244, 1) !important;
    color: #c0c4cc;
  }
  .shop .shop-list {
    margin-top: 14px;
    width: 1053px;
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
/* 取消订单 */
  .can_order_box {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0, 0.1);
    z-index: 1000;
    overflow-y: hidden;
  }
  .can_order {
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width:660px;
    height:437px;
    background:rgba(255,255,255,1);
    border:10px solid rgba(142, 142, 142, 0.35);
    border-radius: 10px;
  }
  .init{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    list-style: none;
    font-style: normal;
    text-decoration: none;
    font-family: "Helvetica Neue", "Microsoft Yahei";
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
  }
  textarea:hover, textarea:focus, select:hover, select:focus, button:hover, button:focus, input:focus, input:hover, label:hover, label:focus, option:focus, option:hover{
    outline: none;
  }
  select:hover, select {
    border: 1px solid #8E8E8E;
  }
  select::-ms-expand{ display: none; }
  input[type="button"], input[type="submit"], input[type="search"], input[type="reset"], textarea {
    -webkit-appearance: none;
  }
  table, tr, td {
    border-spacing: 0;
  }
  .can_con {
    display: flex;
    flex-direction: column;
    height: 100%;
    font-size: 15px;
    color: #3D3D3D;
    padding: 24px 21px 15px 37px;
  }
  .can_title {
    display: flex;
  }
  .can_title_logo {
    max-width: 70px;
    max-height: 40px;
  }
  .can_title_head {
    color: #4E4E4E;
    font-size: 24px;
    vertical-align: bottom;
    margin-left: 20px;
    align-self: flex-end;
  }
  .can_item {
    margin-top: 36px;
  }
  .can_tip {
    color: #E53031;
    margin-bottom: 10px;
  }
  .can_select_box {
    height: 32px;
    line-height: 32px;
  }
  .can_select {
    font-size: 15px;
    border-radius: 4px;
    border:1px solid rgba(135,135,135,1);
    box-shadow:0px 0px 8px 0px rgba(126,123,124,0.4);
  }
  .can_other {
    margin-top: 25px;
    border-radius: 4px;
    width: 516px;
    font-size: 13px;
    font-family: "Microsoft Yahei";
    height: 60px;
  }
  .can_close {
    position: absolute;
    top: 8px;
    right: 8px;
    font-size: 20px;
    color: #4E4E4E;
    cursor: pointer;
  }
  .can_pick {
    display: flex;
    justify-content: flex-end;
    padding: 17px 21px;
    box-sizing: border-box;
    margin-top: auto;
  }
  .can_btn{
    padding: 6px 15px;
    border-radius: 4px;
    cursor: pointer;
  }
  .btn_sub_set {
    background-color: #D73331;
    color: #FFFFFF;
    margin-right: 10px;
  }
/* 确认收货 */
  .btn_order {
    height: 258px;
  }
  .btn_tip { font-size: 24px; }
  .btn_tip_back { color: #4E4E4E; font-size: 14px; }
</style>
