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
            <a v-if="(list.status === 3 || list.status === 4)&&item.checked===1" href="javascript:;" style="color: #414141" @click="refundOrder(list.orderId, list.sellerId, list.status)">退款/退货</a>
            <a v-if="(list.status === 3 || list.status === 4)&&item.checked===2" href="javascript:;" style="color: #414141" @click="refundDetail(list.orderId, list.sellerId, list.status)">待商家同意退款</a>
            <a v-if="(list.status === 3 || list.status === 4)&&item.checked===3" href="javascript:;" style="color: #414141" @click="refundDetail(list.orderId, list.sellerId, list.status)">请退款</a>
            <a v-if="(list.status === 3 || list.status === 4)&&item.checked===4" href="javascript:;" style="color: #414141" @click="refundDetail(list.orderId, list.sellerId, list.status)">退款中</a>
            <span v-if="list.status === 3 || list.status === 4 || list.status === 5"><a href="javascript:;" style="color: #414141">投诉卖家</a></span><br>
            <span v-if="list.status === 5"><a href="javascript:;" style="color: #414141">申请售后</a></span>
            <span v-if="list.status === 5"><a href="javascript:;" style="color: #414141">售后中</a></span>
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
        <router-link :to="{path: '/trace/orderDetail', query: {orderId: list.orderId}}">查看详情</router-link>
        <router-link :to="{path: '/trace/orderDetail', query: {orderId: list.orderId}}" class="text-red" v-if="list.status===4 || list.status ===5">查看物流</router-link>
      </li>
      <li class="list-item">
        <router-link v-if="list.status === 1" class="fast-pay" :to="{path:'/pay', query: {payStyle: 'weChat', orderIdList:list.orderId, from: Date.parse(new Date())}}">立即付款</router-link>
        <a v-if="list.status === 1" href="javascript:;" @click="cancleOrder(list.orderId)">取消订单</a>
        <a v-if="list.status === 2 || list.status > 4" href="javascript:;" @click="buyAgain(list.orderItemList)">再次购买</a>
        <a v-if="list.status === 3 || list.status === 4" href="javascript:;" @click="refundOrder(list.orderId, list.sellerId, list.status)">申请退款</a>
        <!-- <a v-if="list.status === 4" class="fast-pay">延长收货时间</a> -->
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
    return {}
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
    },
    refundOrder (orderId, sellerId, status) {
      this.API.refundList({ orderId: orderId }).then(res => {
        if (res.success === false) return false
        this.$emit('boxOrderRefund', [orderId, sellerId, status])
      })
    },
    buyAgain (series) {
      console.log(series, 'list')
      series.forEach(item => {
        // (function (tip) { this.API.addToCart({ itemId: tip.itemId, num: tip.num, name: this.$cookies.get('user-key') }).then(res => {}) })(tip)
      })
      this.$router.push('/cart')
    },
    refundDetail (orderId, sellerId, status, refundOrderId) {
      this.$emit('boxOrderRefund', [orderId, sellerId, status, refundOrderId])
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
</style>
