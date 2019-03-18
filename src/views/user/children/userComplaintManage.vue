<template>
  <div class="con-wrap">
    <p class="userPageTitle">退款维权</p>
    <p class="userPageTab">
      <span :class="{pageTabActive:complaintRecord===true}" @click="changeActive(true)">投诉服务记录</span>
      <span :class="{pageTabActive:complaintRecord===false}"  @click="changeActive(false)">我收到的投诉</span>
    </p>
    <div class="serverRecord" v-show="complaintRecord===true">
      <p class="complainType">我发起的投诉</p>
      <ul class="complainList">
        <li class="complainItem">
          <ul class="complainItem-title">
            <li>投诉编号</li>
            <li>订单编号</li>
            <li>被投诉方</li>
            <li>投诉原因</li>
            <li>投诉状态</li>
            <li>申请时间</li>
            <li>操作</li>
          </ul>
          <hr>
          <ul class="complainItem-info">
            <li>1455114255454</li>
            <li class="aa">300382019621354414</li>
            <li class="aa">三金多两斤五金店</li>
            <li class="aa bb">假货</li>
            <li class="bb">投诉成功</li>
            <li class="bb">2018-12-05 20:59:00</li>
            <li class="bb">不可操作</li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="complaintsReceived" v-show="complaintRecord===false">
      <p class="complainType">我收到的投诉</p>
      <ul class="complainList">
        <li class="complainItem">
          <ul class="complainItem-title">
            <li>投诉编号</li>
            <li>订单编号</li>
            <li>投诉方</li>
            <li>投诉原因</li>
            <li>投诉状态</li>
            <li>申请时间</li>
            <li>操作</li>
          </ul>
          <hr>
          <ul class="complainItem-info">
            <li>1455114255454</li>
            <li class="textColor">300382019621354414</li>
            <li >三金多两斤五金店</li>
            <li>恶意骚扰</li>
            <li >投诉成功</li>
            <li >2018-12-05 20:59:00</li>
            <li class="textColor">查看详情</li>
          </ul>
        </li>
      </ul>
   </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      complaintRecord: true
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
  },
  methods: {
    changeActive (val) {
      this.complaintRecord = val
    }
  }
}
</script>
<style scoped>
  @import "../../../assets/css/user/user-homePage.css";
  .con-wrap{
    height:1124px;
  }
  .complainType{
    width:1064px;
    height:30px;
    background:rgba(244,244,244,1);
    margin: 20px 0 20px 15px;
    font-size:14px;
    font-weight:400;
    color:rgba(231,22,0,1);
    line-height: 30px;
    padding-left: 20px;
  }
  .complainList  .complainItem{
    text-align: left;
    width:1084px;
  }
  .complainList .complainItem-title{
    font-size:14px;
    font-weight:300;
    color:rgba(126,126,126,1);
    display: flex;
    justify-content: space-between;
    padding:0 79px 0 30px;
  }
  .complainList .complainItem-info{
    display: flex;
    justify-content: space-between;
    padding:0 20px 0 0px;
    font-size:14px;
    font-family:SourceHanSansCN-Light;
    font-weight:300;
    color:rgba(47,47,47,1);
  }
  .complainList .complainItem-info>li{
    width:140px;
    text-align: center;
  }
  .complainList hr{
    color: #E3E3E3;
    height:2px;
    opacity: 0.4;
    margin:14px 0 30px 0;
  }
 .textColor{
   color:#0078D7;
 }
</style>
