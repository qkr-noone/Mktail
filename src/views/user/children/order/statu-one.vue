<template>
  <div class="content" data-attr="one 待支付">
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
        <input type="checkbox" />全选
        <button class="confirm-btn">批量确认收货</button>
        <div class="page">
          <button class="page-btn">上一页</button>
          <button class="page-btn forbidden">下一页</button>
        </div>
      </div>
      <div class="shop-list">
        <div class="shop-info shopInfo-active">
          <input type="checkbox" />
          <span class="date">2019-01-01</span>
          <span class="order-num">定单号：<span>305932032817899066</span></span>
          <span>创盛门控配件</span>
          <img src="static/img/user/user_part.png">
          <span class="delete"><img src="static/img/user/user_delete.png"></span>
        </div>
        <div>
          <ul class="shop-item">
            <li class="first-item">
              <div class="item-Top">
                <img src="static/img/user/user_telecontroller.png">
                <div>
                  <span class="item-title">大金属通用对拷电动伸缩门卷帘闸门车库门道闸遥控器<br>钥匙315/433 [交易快照]</span><br>
                  <div class="back">退</div>
                  <span class="text-red">7天无理由退货</span>
                </div>
                <span>￥28.00</span>
                <span>1</span>
                <span>
                  <a>退款</a>|<a>退货</a><br>
                  <span> <a>投诉卖家</a></span>
                </span>
              </div>
            </li>
            <li class="list-item">
              <span class="large-size">￥28.00</span>
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
    </div>
    <div class="shopPage">
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
export default {
  data () {
    return {
      waitPay: '', // 待支付
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
      ]
    }
  },
  props: {
    scroll: {
      type: Object
    }
  },
  mounted () {
    this.$nextTick(() => {
      document.documentElement.scrollTop = this.scroll.scrollTop
    })
    this.API.userOrder({ userName: this.$cookies.get('user-key'), status: 1 }).then(res => {
      this.waitPay = res
    })
  },
  methods: {
    tab (command) {
      console.log(command.index)
      this.listSelectStaus = command.label
      this.API.userOrder({ userName: this.$cookies.get('user-key'), status: command.index }).then(res => {
        this.waitPay = res
      })
    }
  }
}
</script>
<style scoped>
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
    margin-left: 12px;
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
  .shop .shop-handle input {
    height: 15px;
    width: 15px;
    margin-right: 10px;
  }
  .shop .shop-handle .page {
    display: inline-block;
  }
  .shop .shop-handle .confirm-btn {
    width: 121px;
    height: 24px;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(199, 199, 199, 1);
    border-radius: 3px;
    line-height: 24px;
    margin: 0 750px 0 10px;
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
    height: 216px;
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
  .regular .top {
    box-sizing: border-box;
    height: 41px;
    background: rgba(244, 244, 244, 1);
    padding: 5px 0 0 2px;
    line-height: 41px !important;
    position: relative;
  }
  .regular .top-red {
    width: 5px;
    height: 29px;
    background: rgba(231, 22, 0, 1);
    border-radius: 3px;
    display: inline-block;
  }
  .top span {
    font-size: 15px;
    font-weight: 400;
    color: rgba(0, 0, 0, 1);
    position: absolute;
    left: 12px;
    top: 2px;
  }
  .regular-list {
    display: flex;
    flex-wrap: wrap;
    padding-left: 8px;
    padding-top: 13px;
  }
  .regular-item {
    box-sizing: border-box;
    width: 262px;
    height: 382px;
    padding-left: 8px;
    position: relative;
    margin-right: 9px;
    margin-bottom: 20px;
  }
  .regular-item .similar {
    width: 260px;
    height: 39px;
    background: rgba(0, 0, 0, 1);
    opacity: 0.3;
    position: absolute;
    top: 0;
    margin-left: -8px;
    line-height: 39px;
    justify-content: space-around;
    font-size: 16px;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    display: none;
  }
  .regular-item:hover .similar {
    display: block;
  }
  .regular-item:hover {
    border: 1px solid rgba(233, 233, 233, 1);
  }
  .regular-item .item-price {
    font-size: 22px;
    font-family: SourceHanSansCN-Regular;
    font-weight: 400;
    color: rgba(230, 0, 0, 1);
    margin: 5px 0 10px 0;
  }
  .regular-item .car {
    width: 260px;
    height: 38px;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(233, 233, 233, 1);
    margin-left: -9px;
    position: absolute;
    bottom: -1px;
    text-align: center;
    line-height: 38px;
  }
  .regular-item .item-title {
    width: 185px;
  }
  .regular-item .similar a:first-child {
    margin: 0 126px 0 26px;
  }
</style>
