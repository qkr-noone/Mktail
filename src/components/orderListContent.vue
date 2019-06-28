<template>
  <div>
    <ul class="shop-item" >
      <li class="first-item">
        <div class="item-Top" v-for="item in list.orderItemList" :key="item.itemId">
          <router-link :to="{path: '/detail', query: {goodsId: item.goodsId}}"><img :src="item.picPath" class="item-Top-img"></router-link>
          <div class="item-desc">
            <span class="item-title">
              <span class="desc-title has_pointer" @click="goDetail(item.goodsId)">{{item.title}}</span>
              <br>
              <span>规格: {{item.spec}}</span>
              <!-- <span class="desc-title has_pointer">[交易快照]</span> -->
            </span><br/>
            <div class="back">退</div>
            <span class="text-red">7天无理由退货</span>
          </div>
          <span class="item-price">￥{{item.price}}</span>
          <span class="item-num">{{item.num}}</span>
          <span>
            <a href="javascript:;" style="color: #414141">退款</a>|<a href="javascript:;" style="color: #414141">退货</a><br>
            <span><a href="javascript:;" style="color: #414141">投诉卖家</a></span>
          </span>
        </div>
        <div class="item-Buttom" v-if="list.status===3">
          <img src="static/img/user/user_car.png">
          <span class="date">{{list.paymentTime}}</span>
          <span class="text-orange">您已选择在线支付，请等待确认审核</span>
        </div>
      </li>
      <li class="list-item">
        <span class="large-size">￥{{list.payment}}</span>
        <span>(含运费：￥{{list.shippingPrice}})</span>
        <span>在线支付</span>
      </li>
      <li class="list-item">
        <a v-if="list.status === 1">待付款</a>
        <a v-else-if="list.status === 2">已取消</a>
        <a v-else-if="list.status === 3">已付款</a>
        <a v-else-if="list.status === 4">已发货</a>
        <a v-else-if="list.status === 5">已完成</a>
        <a v-else-if="list.status === 6">已退款</a>
        <router-link :to="{path: '/trace/orderDetail', query: {orderId: list.orderId}}" :data-id="list.orderId">查看详情</router-link>
        <a class="text-red" v-if="list.status===4 || list.status ===5">查看物流</a>
      </li>
      <li class="list-item">
        <router-link v-if="list.status === 1" class="fast-pay" :to="{path:'/pay', query: {payStyle: 'weChat', orderIdList:list.orderId, from: Date.parse(new Date())}}">立即付款</router-link>
        <a v-if="list.status === 1" href="javascript:;" @click="cancleOrder(list.orderId)">取消订单</a>
        <a v-if="list.status === 2">取消详情</a>
        <router-link :to="{path: '/detail', query: {goodsId: list.goodsId, skuId: list.itemId}}" v-if="list.status === 2 || list.status > 4">再次购买</router-link>
        <router-link :to="{path: '/trace/orderDetail', query: {orderId: list.orderId}}" v-if="list.status === 3" :data-id="list.orderId">查看详情</router-link>
        <a v-if="list.status === 4" class="fast-pay" @click="btnOrder(list.orderId)">确认收货</a>
        <a v-if="list.status === 5">申请开票</a>
        <a v-if="list.status === 5">追加评论</a>
        <a v-if="list.status === 6">查看退款</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      orderBox: '',
      orderBtn: ''
    }
  },
  props: {
    list: {
      type: [Object, Array]
    }
  },
  methods: {
    goDetail (id) {
      this.$router.push({path: '/detail', query: {goodsId: id}})
    },
    cancleOrder (orderId) {
      this.$emit('boxOrderCancle', orderId)
    },
    btnOrder (orderId) {
      this.$emit('boxOrderBtn', [orderId])
    }
  }
}
</script>
<style scoped>
  .has_pointer {
    cursor: pointer;
  }
  .shop-item {
    display: flex;
  }
  .list-item {
    flex-grow: 1;
    display: inline-block;
    width: 109px;
    border-left: 1px solid rgba(205, 205, 205, 1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    color: rgba(144, 144, 144, 1);
  }
  .list-item a {
    margin-bottom: 7px;
    color: #414141;
  }
  .list-item a.fast-pay {
    width:76px;
    height:25px;
    line-height: 25px;
    text-align: center;
    background:rgba(255,153,0,1);
    border-radius:5px;
    margin: 6px 0;
    color: #fff;
    cursor: pointer;
  }
  .shop-list li:first-child {
    width: 719px;
    border-left: none;
    display: flex;
  }
  .first-item {
    display: flex;
    flex-direction: column !important;
    justify-content: space-around;
  }
  div.shop-item:nth-child(n+1) > .first-item{
    border-top: 1px solid red;
  }
  .item-Top {
    width: 719px;
    height: 121px;
    display: flex;
    flex-direction: row !important;
    align-items: center;
  }
  div.item-Top>:nth-child(n) {
    margin-left: 28px;
  }
  .item-price, .item-num {
    width: 55px;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
  .item-Top-img {
    width: 80px;
    height: 80px;
    overflow: hidden;
  }
  .item-desc {
    width: 312px;
  }
  .item-title >span {
    margin-right: 8px;
  }
  .item-title >span.desc-title:hover {
    color: #ff9900;
  }
  .first-item >div.item-Top:nth-child(n+2) {
    border-top: 1px solid rgba(191, 191, 191, 1);
  }
  .item-Buttom {
    display: flex;
    align-items: center;
    height: 44px;
    border-top: 1px solid rgba(210, 210, 210, 1);
    padding-left: 9px;
    color: #7b7b7b;
  }
  .item-Buttom .date {
    margin: 0 20px 0 15px;
  }
  .item-Buttom img {
    display: inline-block;
  }
/*部分文字颜色*/
  .text-orange{
    color:#F79A26;
  }
  .text-red{
    color:#E71600 !important;
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
