<template>
  <div class="tab-pane">
    <div class="tab-title">
      <h4>商品评价</h4>
    </div>
    <div>
      <div class="comment-box">
        <ul class="comment-list">
          <li class="list-item" v-for="item in evaluationObj.list" :key="item.id">
            <a><span class="user_name">{{item.userName.replace(/.(?=.)/g, '*')}}:</span></a>
            <div class="comment-info">
              <span class="comment-text">
                {{item.evaluateContent}}
              <br>
              <div class="img_list">
                <a v-for="tip in JSON.parse(item.evaluateImages)" :key="tip"><img :src="tip"></a>
              </div>
              <span class="comment-date">{{item.evaluateTime}}</span>
              </span>
            </div>
            <!-- <span class="point">
              <img src="static/img/test/test2.jpg">
              <span class="point-num">11</span>
            </span> -->
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  props: {
    scroll: {
      type: Object
    },
    evaluationObj: {
      type: Object
    }
  },
  mounted () {
    this.$nextTick(() => {
      document.documentElement.scrollTop = this.scroll.scrollTop
    })
  }
}

</script>
<style scoped>
.tab-title {
    height:50px;
    background:rgba(249,249,249,1);
    border:1px solid rgba(227,227,227,1);
    line-height: 50px;
  }
  .tab-title h4 {
    text-align: left;
    font-size:14px;
    color:rgba(135,135,135,1);
    margin-left: 20px;
  }
  .comment-box {
    padding: 25px;
  }
  .comment-list{
    display: flex;
    flex-direction: column;
  }
  .comment-list .user_name{
    font-size: 15px;
    color: #353535;
    margin-right: 10px;
  }
  .list-item{
    position: relative;
    display: flex;
  }
  .list-item >a{
    width: 120px;
    height: 60px;
    text-align: left;
    overflow: hidden;
    flex-shrink: 0;
  }
  .img_list>a + a {
    margin-left: 10px;
  }
  .img_list>a>img, .list-item >a>img{
    max-height: 60px;
    max-width: 60px;
  }
  li.list-item:first-child {
    margin-bottom: 36px;
  }
  li.list-item +li {
    margin: 20px 0;
  }
  .img_list>a {
    padding-top: 10px;
    width: 60px;
    height: 60px;
    overflow: hidden;
  }
  .img_list>a>img {
    max-height: 60px;
    max-width: 60px;
  }
  .point{
    position: absolute;
    bottom: 0px;
    right: 50px;
    display: flex;
    font-size: 12px;
    align-items: center;
    cursor: pointer;
  }
  .point-num {
    margin-left: 8px;
  }
  .comment-info{
    margin-left:10px;
    font-size:14px;
    color:#4F4F4F;
    flex-grow: 1;
    text-align: left;
  }
  .comment-date{
    font-weight:300;
    color:rgba(136,136,136,1);
    margin-top: 10px;
  }
  .comment-time {
    margin-left: 10px;
  }
</style>
