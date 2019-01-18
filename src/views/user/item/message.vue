<template>
  <div class="con-wrap">
    <div class="con-de">
      <div class="message">
        <div class="message-title" @click="changeActive" :class="{active: isActive ===0}">系统消息</div>
        <div  class="message-title shift" @click="change" :class="{active: isActive ===1}">互动消息</div>
      </div>
      <div class="con-item " v-show= "isActive === 0">
        <div class="info" v-for=" list in messageInfo" :key="list.id">
          <span class="notice">{{list.title}}</span>
          <span class="notice-text">{{list.infoText}}</span>
        </div>
      </div>
      <div class="con-item" v-show= "isActive === 1">
        <p class="info">暂时没有互动消息哦！</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      isActive: 0,
      messageInfo: [
        {id: 1, title: '活动通知', infoText: '【买一送一】热销金丝绒棉服外套仅139.0元，还有限量半价！'},
        {id: 2, title: '系统通知', infoText: '你购买的宝贝有新的动态'},
        {id: 3, title: '活动通知', infoText: '【买一送一】热销金丝绒棉服外套仅139.0元，还有限量半价！'},
        {id: 4, title: '活动通知', infoText: '你购买的宝贝有新的动态'}
      ]
    }
  },
  methods: {
    changeActive () {
      this.isActive = 0
    },
    change () {
      this.isActive = 1
    }
  }
}

</script>
<style scoped>
  @import '../../../assets/css/user/user-set.css';
  .con-de{
    font-size:14px;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(118,118,118,1);
  }
  .message{
    margin-top: 30px;
    text-align: left;
    border-bottom: 2px solid #B0B0B0;
    height:30px;
  }
  .message-title{
    text-align: center;
    height:30px;
    width:116px;
    display: inline-block;
  }
  .shift{
    margin-left: -9px;
  }
  .active{
    border-bottom: 2px solid #FFD704;
  }
  .con-item .info{
    text-align: left;
    margin-top: 15px;
    margin-left: -11px;
  }
  .con-item .info .notice{
    display: inline-block;
    margin-right:30px;
  }

</style>
