<template>
  <div class="content" data-attr="second 待发货">
    <div class="shop">
      <div class="shop-title">
        <ul>
          <li class="title-item">宝贝</li>
          <li class="title-item">单价</li>
          <li class="title-item">数量</li>
          <li class="title-item">商品操作</li>
          <li class="title-item">实付款</li>
          <li class="title-item list-select-staus">
            <div class="group">
              <el-dropdown trigger="click" @command="tab">
                <span class="el-dropdown-link">
                  {{listSelectStaus}}<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item v-for="item in options"
                  :key="item.label" :command="item">{{item.label}}</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </li>
          <li class="title-item">交易操作</li>
        </ul>
      </div>
      <div class="shop-handle">
        <div class="choose" v-if="waitSend.total">
          <input type="checkbox"/><span>全选</span>
          <button class="confirm-btn">批量确认收货</button>
        </div>
        <div class="page" >
          <button class="page-btn">上一页</button>
          <button class="page-btn forbidden">下一页</button>
        </div>
      </div>
      <div class="shop-list" v-for="list in waitSend.rows" :key="list.id">
        <div class="shop-info shopInfo-active">
          <input type="checkbox" />
          <span class="date">{{list.createTime}}</span>
          <span class="order-num">定单号：<span>{{list.id}}</span></span>
          <span>{{list.sellerName}}</span>
          <img src="static/img/user/user_part.png">
          <span class ="delete"><img src="static/img/user/user_delete.png"></span>
        </div>
        <div>
          <ul class="shop-item">
            <li class="first-item">
              <div class="item-Top" v-for="item in list.orderItemList" :key="item.itemId">
                <img src="static/img/user/user_telecontroller.png">
                <div class="item-desc">
                  <span class="item-title">{{item.title}}<br><span v-for="(tip, key, index) in JSON.parse(item.spec)" :key="index">{{key}}:{{tip}}</span>[交易快照]</span><br>
                  <div class="back">退</div>
                  <span class="text-red">7天无理由退货</span>
                </div>
                <span class="item-price">￥{{item.price}}</span>
                <span class="item-num">{{item.num}}</span>
                <span>
                <a>退款</a>|<a>退货</a><br>
                <span> <a>投诉卖家</a></span>
              </span>
              </div>
              <div class="item-Buttom ">
                <img src="static/img/user/user_car.png">
                <span class="date">2019-01-01 16：00：37</span>
                <span class="text-orange">您已选择在线支付，请等待确认审核</span>
              </div>
            </li>
            <li class="list-item">
              <span class="large-size">￥{{list.payment}}</span>
              <span>(含运费：￥0.00)</span>
              <span>在线支付</span>
            </li>
            <li class="list-item">
              <a>待发货</a>
              <a>查看详情</a>
              <a class="text-red">查看物流</a>
            </li>
            <li class="list-item">
              <a>取消订单</a>
              <a>修改订单</a>
              <a>再次购买</a>
              <a>发票详情</a>
            </li>
          </ul>
        </div>
      </div>
      <div v-if="!waitSend.total" class="shop-list not-data">没有符合条件的商品</div>
    </div>
    <div class="shopPage" v-if="waitSend.row">
      <button>上一页</button>
      <span>1</span>
      <button>下一页</button>
      <span>向第</span>
      <input type="text" class="skip"/>页
      <button class="skip">跳转</button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      moreCondition: false,
      waitSend: '', // 待发送
      listSelectStaus: '交易状态',
      options: [
        { label: '全部', index: 1 },
        { label: '等待买家付款', index: 1 },
        { label: '付款确认中', index: 1 },
        { label: '买家已付款', index: 1 },
        { label: '卖家已发货', index: 1 },
        { label: '交易成功', index: 1 },
        { label: '交易关闭', index: 1 },
        { label: '退款中的订单', index: 1 }
      ],
      pageNum: 1
    }
  },
  props: {},
  mounted () {
    // 待支付
    this.API.userOrder({ userName: this.$cookies.get('user-key'), status: 3, pageNum: this.pageNum, pageSize: 15 }).then(res => {
      this.waitSend = res
      console.log('待fh', res)
    })
  },
  methods: {
    tab (command) {
      console.log(command.index)
      this.listSelectStaus = command.label
      this.pageNum = 1
      this.API.userOrder({ userName: this.$cookies.get('user-key'), status: command.index, pageNum: this.pageNum, pageSize: 15 }).then(res => {
        this.waitSend = res
      })
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
.content .shop .title-item.list-select-staus {
  width: 120px;
  margin-left: 6px;
  margin-right: 6px;
  text-align: center;
}
/*部分文字颜色*/
  .text-orange{
    color:#F79A26;
  }
  .text-red{
    color:#E71600 !important;
  }
  img{
    display: inline-block;
  }
  .con-wrap{
    background: #FFFFFF;
    margin-top:6px;
    width:1095px;
    padding-bottom: 10px;
    text-align: left;
    font-size:13px;
    font-family:SourceHanSansCN-Normal;
    font-weight:400;
  }
  input{
    padding-left: 8px;
  }
/*页面特殊文字颜色*/
  .content .search {
    color: rgba(48, 48, 48, 1);
    margin: -10px 0 14px 0;
  }
  .content .search input {
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
    margin: 0 14px;
    font-weight: 300;
  }
  .content .shop-title {
    box-sizing: border-box;
    width: 1065px;
    height: 40px;
    background: rgba(245, 245, 245, 1);
    border: 1px solid rgba(231, 231, 231, 1);
    margin-top: 10px;
    line-height: 40px;
  }
  ul {
    display: inline-block;
  }
  .content .shop .title-item {
    display: inline-block;
    font-size: 14px;
    color: rgba(126, 126, 126, 1);
  }
  .shop-title ul li:not(:first-child) {
    margin-right: 28px;
    margin-left: 30px;
  }
  .shop-title ul li:first-child {
    margin: 0 170px 0 220px;
  }
  .shop-title ul li:last-child {
    margin-right: 20px;
    margin-left: 20px;
  }
  .shop .group select {
    border: 0;
    background-color: transparent;
    color: rgba(126, 126, 126, 1);
  }
  .shop .shop-handle {
    height: 30px;
    line-height: 30px;
    margin-top: 10px;
    font-size: 14px;
    color: rgba(98, 98, 98, 1);
  }
  .shop-handle .choose {
    float: left;
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
    width: 121px;
    height: 24px;
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
  .shop .shop-list .shop-info {
    display: flex;
    align-items: center;
    height: 50px;
    background: #F7F7F7;
    line-height: 50px;
    padding-left: 12px;
    color: rgba(62, 62, 62, 1);
  }
  .shopInfo-active {
    background: #FFF8B7 !important;
  }
  .shop .shop-list .shop-info input {
    height: 13px;
    width: 15px;
  }
  .shop .shop-list .shop-info .date {
    font-weight: 500;
    color: #180E0E;
    margin: 0 19px 0 8px;
  }
  .shop .shop-list .shop-info .order-num {
    margin-right: 174px;
  }
  .shop .shop-list .shop-info .name {
    max-width: 400px;
    margin-right: 10px;
    overflow: hidden;
    white-space: nowrap;
  }
  .shop .shop-list .shop-info .delete {
    display: flex;
    justify-content: flex-end;
    flex-grow: 1;
    margin-right: 20px;
  }
  .shop .shop-item {
    height: 165px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .shop .list-item {
    display: inline-block;
    height: 165px;
    width: 109px;
    border-left: 1px solid rgba(205, 205, 205, 1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    color: rgba(144, 144, 144, 1);
  }
  .shop .list-item a {
    margin-bottom: 7px;
  }
  .shop .shop-list li:first-child {
    width: 719px;
    border-left: none;
    display: flex;
  }
  .shop .first-item {
    display: flex;
    flex-direction: column !important;
    justify-content: space-around;
  }
  .shop .item-Top {
    width: 719px;
    height: 121px;
    display: flex;
    flex-direction: row !important;
    justify-content: space-around;
    align-items: center;
  }
  .item-Top >img {
    width: 80px;
    height: 80px;
    overflow: hidden;
  }
  .item-desc {
    width: 312px;
  }
  .shop .item-Buttom {
    width: 718px;
    height: 44px;
    border-top: 1px solid rgba(210, 210, 210, 1);
    margin-left: -8px;
    line-height: 44px;
    padding-left: 9px;
  }
  .shop .item-Buttom .date {
    margin: 0 20px 0 15px;
  }
  .back {
    display: inline-block;
    color: #F79A26;
    width: 15px;
    height: 15px;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(247, 154, 38, 1);
    line-height: 15px;
    text-align: center;
  }
  .large-size {
    font-size: 16px;
    font-weight: 500;
    color: rgba(62, 62, 62, 1);
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
</style>
