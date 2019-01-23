<template>
  <div>
    <shortcut></shortcut>
    <live3Dheader></live3Dheader>
    <div>
      <div>
        <div class="live-box">
          <div class="live"></div>
          <div class="threeD-list">
            <div class="threeD-title">
              <a href=""><img src="static/img/mk_live_xingxin.png"></a>
              <h3 class="name">广州新兴金属（脚轮）制品有限公司</h3>
            </div>
            <ul class="threeD-ul">
              <li class="threeD-li">
                <a class="threeD-li-a Center" href="javascript:;" @click="threeDUrl('http://192.168.0.33:8080/qn18/index.html?spuid=10111054')">
                  <img src="/static/img/3D_show2.png">
                </a>
                <h5 class="threeD-li-h">4寸PU电泳旱冰轮</h5>
              </li>
              <li class="threeD-li">
                <a class="threeD-li-a Center" href="javascript:;" @click="threeDUrl('http://192.168.0.33:8080/qn18/index.html?spuid=10112268')">
                  <img src="/static/img/3D_show3.png">
                </a>
                <h5 class="threeD-li-h">2寸金钻活动轮</h5>
              </li>
              <li class="threeD-li">
                <a class="threeD-li-a Center" href="javascript:;" @click="threeDUrl('http://192.168.0.33:8080/qn18/index.html?spuid=10112269')">
                  <img src="/static/img/3D_show4.png">
                </a>
                <h5 class="threeD-li-h">2寸白PU大班轮</h5>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr>
    <div class="comment">
      <div class="sort">
        <span class="hot-sort">按热度排序</span>
        <span class="time-sort">按时间排序</span>
      </div>
      <div class="comment-list">
        <ul class="comment-list">
          <li class="list-item">
            <img src="static/img/test/test1.jpg">
            <div class="comment-info">
              <span class="comment-text">
                <span class="user_name">MKT121:</span>
                头天下单，第二天就到了，发货很快，一起买的工具还没到，箱子先到了。箱子很厚但是一点也不沉
              <br><span class="comment-date">2019-01-17<span class="comment-time"> 09.55</span></span>
              </span>
            </div>
            <span class="point">
              <a>回复</a> |
              <img src="static/img/test/test2.jpg">
              <span class="point-num">11</span>
            </span>
          </li>
          <hr>
          <li class="list-item">
            <img src="static/img/test/test1.jpg">
            <div class="comment-info">
              <span class="comment-text">
                <span class="user_name">MKT121:</span>
                头天下单，第二天就到了，发货很快，一起买的工具还没到，箱子先到了。箱子很厚但是一点也不沉，质量很好，完全不用担心会破！
                前面还有凹槽的地方可以上锁,再也不用担心工具被偷了,以前都是用布兜子，工具经常丢，也很乱，经朋友介绍买了这家的箱子，很好，很满意！
              <br><span class="comment-date">2019-01-17<span class="comment-time"> 09.55</span></span>
              </span>
            </div>
            <span class="point">
              <a>回复</a> |
              <img src="static/img/test/test2.jpg">
              <span class="point-num">11</span>
            </span>
          </li>
          <hr>
          <li class="list-item">
            <img src="static/img/test/test1.jpg">
            <div class="comment-info">
              <span class="comment-text">
                <span class="user_name">MKT121:</span>
                头天下单，第二天就到了，发货很快，一起买的工具还没到，箱子先到了。箱子很厚但是一点也不沉，质量很好，完全不用担心会破！
                前面还有凹槽的地方可以上锁,再也不用担心工具被偷了,以前都是用布兜子，工具经常丢，也很乱，经朋友介绍买了这家的箱子，很好，很满意！
                以前都是用布兜子，工具经常丢，也很乱，也很乱，经朋友介绍买了这家的箱子，很好，很满意！以前都是用布兜子，工具经常丢，也很乱，经朋友介绍买了这家的箱子，很好，很满意！
                 头天下单，第二天就到了，发货很快，一起买的工具还没到，箱子先到了。箱子很厚但是一点也不沉，质量很好，完全不用担心会破！
                前面还有凹槽的地方可以上锁,再也不用担心工具被偷了,以前都是用布兜子，工具经常丢，也很乱，经朋友介绍买了这家的箱子，很好，很满意！
                以前都是用布兜子，工具经常丢，也很乱，也很乱，经朋友介绍买了这家的箱子，很好，很满意！以前都是用布兜子，工具经常丢，也很乱，经朋友介绍买了这家的箱子，很好，很满意！
              <br><span class="comment-date">2019-01-17<span class="comment-time"> 09.55</span></span>
              </span>
            </div>
            <span class="point">
              <a>回复</a> |
              <img src="static/img/test/test2.jpg">
              <span class="point-num">11</span>
            </span>
          </li>
          <hr>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import shortcut from '../../components/shortcutHeader'
import live3Dheader from '../../components/live3Dheader'
export default {
  data () {
    return {}
  },
  components: { shortcut, live3Dheader },
  mounted () {
    // document.body.top
  }
}

</script>
<style scoped>
  .live-box{
    width:100vw;
    min-width: 1226px;
    height: calc(100vh - 16px); /*132px + 2px + 16px*/
    min-height:600px;
    position: relative;
    background-color: #E0E0E0;
    border: 1px solid #ddd;
    border-top: 16px solid #353535;
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: space-between;
  }
  .live {
    min-width: 1075px;
    flex-grow: 1
  }
/*店铺推荐*/
  .threeD-list{
    padding-bottom: 26px;
    margin-bottom: 84px;
  }
  .threeD-title {
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #fff;
  }
  .name {
    font-size:18px;
    font-family:SourceHanSansCN-Light;
    font-weight:300;
    height: 29px;
  }
  .threeD-ul {
    margin: 0 auto;
    /*width: 1366px;*/
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .threeD-li {
    width:337px;
    height:255px;
    background-color: #EBEBEB;
    position: relative;
  }
  .threeD-li-a {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .Center{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .threeD-li-a img{
    width: 100%;
    height: auto;
  }
  .threeD-li-h {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height:27px;
    line-height: 27px;
    text-align: center;
    background-color: #CCCCCC;
    font-size:16px;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(39,39,39,1);
    overflow: hidden;
    white-space: nowrap;
    padding: 0 8px;
  }
/* 评论*/
 img,.list-item>.comment-info{
    display: inline-block;
  }
  #test{
    width:1224px;
    margin: 100px auto;
    font-family:SourceHanSansCN-Medium;
  }
  #test hr{
    color:#CACACA;
    opacity: 0.4;
    margin-bottom: 9px;
  }
  .sort{
    margin-bottom: 51px;
    font-size:14px;
  }
  .sort .hot-sort{
    font-weight:bold;
    color:rgba(30,30,30,1);
    margin-right: 10px;
  }
  .sort .time-sort{
    font-weight:400;
    color:rgba(117,117,117,1);
  }
  .comment{
    padding-left: 9px;
    text-align: left;
    font-weight:300;
    font-size: 13px;
    width: 1226px;
    margin: 0 auto;
  }
  .comment-list{
    display: flex;
    flex-direction: column;
  }
  .comment .user_name{
    font-size: 15px;
    color:#429FE6;
    margin-right: 10px;
  }
  .list-item{
    position: relative;
    display: flex;
    align-items: center;
  }
  .point{
    position: absolute;
    bottom: 0px;
    right:88px;
  }
  .comment-info{
    margin-left:10px;
    font-size:14px;
    color:#4F4F4F;
    width:1050px;
  }
  .comment-date{
    font-weight:300;
    color:rgba(136,136,136,1);
    margin-top: 10px;
  }
  .comment-list hr{
    width:1120px;
    color:#D5D5D5;
    margin-top: 30px;
    margin-left: 60px;
  }
  .comment-time {
    margin-left: 10px;
  }
</style>
