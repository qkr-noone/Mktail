<template>
  <div>
    <div class="con-wrap">
      <div class="my-order">
        <img src="static/img/user/user_back.png">
        <img  class="monkey" src="static/img/user/user_monkey.png">
        <div class="tab-nav">
          <span class="tab-text">我的订单：</span>
          <ul class="tab-title">
            <li class="tab-item" :class="{tabActive:isActive===0}" @click="changeTab(0, '/statu-z')"><a>所有订单</a></li>
            <li class="tab-item" :class="{tabActive:isActive===1}" @click="changeTab(1, '/statu-one')"><a>待付款<span class="text-red num">{{status.pendingPaymentCount}}</span></a></li>
            <li class="tab-item" :class="{tabActive:isActive===2}" @click="changeTab(2, '/statu-second')"><a>待发货<span class="text-red num">{{status.toBeShippedCount}}</span></a></li>
            <li class="tab-item" :class="{tabActive:isActive===3}" @click="changeTab(3, '/statu-three')"><a>待收货<span class="text-red num">{{status.goodsReceivedCount}}</span></a></li>
            <li class="tab-item" :class="{tabActive:isActive===4}" @click="changeTab(4, '/statu-four')"><a>待评价<span class="text-red num">{{status.toBeEvaluatedCount}}</span></a></li>
            <!-- <li class="tab-item" :class="{tabActive:isActive===5}" @click="changeTab(5, '/statu-five')"><a>常购清单</a></li> -->
          </ul>
        </div>
      </div>
      <transition>
        <router-view @getOrderStatus="getOrderStatus()"></router-view>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isActive: 0,
      list: '',
      status: {}
    }
  },
  mounted () {
    let routerChild = this.$route.path.split('/')[3]
    if (routerChild === 'statu-one') this.isActive = 1
    else if (routerChild === 'statu-second') this.isActive = 2
    else if (routerChild === 'statu-three') this.isActive = 3
    else if (routerChild === 'statu-four') this.isActive = 4
    else if (routerChild === 'statu-five') this.isActive = 5
    else this.isActive = 0
    this.getOrderStatus()
  },
  activated () {},
  methods: {
    changeTab (val, path, status) {
      this.isActive = val
      this.$router.push({path: '/user/userOrder' + path})
    },
    getOrderStatus () {
      this.API.userOrderStatus({userName: this.$cookies.get('user-key')}).then(res => {
        this.status = res
      })
    }
  }
}
</script>
<style scoped>
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
    width:1083px;
    padding-bottom: 10px;
    text-align: left;
    font-size:13px;
    font-family:SourceHanSansCN-Normal;
    font-weight:400;
  }
  input{
    padding-left: 8px;
  }
/*订单导航*/
  .my-order{
    height:111px;
    position: relative;
  }
  .monkey{
    position: absolute;
    top:9px;
    right:425px;
  }
  .tab-nav {
    display: inline-block;
    text-align: left;
    margin-left: -50px;
    line-height:40px;
  }
  .tab-title{
    height:35px;
    width:900px;
    border-bottom: 2px solid #EDEDED;
  }
  .tab-item{
    display: inline-block;
    width:87px;
    height:31px;
    border:1px solid rgba(237,237,237,1);
    line-height: 31px;
    text-align: center;
    font-size:16px;
    color:#363636;
    cursor: pointer;
  }
  .tabActive{
    color:#E71600 !important;
    border-bottom: 2px solid #E71600;
  }
  .num{
    margin-left: 5px;
  }
  .tab-nav ul li:not(:first-child){
    border-left:none;
    margin-left:-5px;
  }
  .tab-text,.tab-title{
    display: inline-block;
  }
  .my-order .tab-text{
    font-size:18px;
    color:rgba(0,0,0,1);
  }
</style>
