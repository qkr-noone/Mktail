<template>
  <div>
    <div class="con-wrap">
      <div class="top">
        <p>我的足迹</p>
        <ul>
          <li>全部分类<span>(50)</span></li>
          <li>厨房卫浴<span>(5)</span></li>
          <li>电动工具<span>(4)</span></li>
          <li>厨卫大家电<span>(3)</span></li>
          <li>女装<span>(3)</span></li>
          <li>手动工具<span>(2)</span></li>
          <li>休闲食品<span>(2)</span></li>
          <li>进口休闲食品<span>(1)</span></li>
        </ul>
      </div>
      <div class="batch-deletion">
        <div class="recovery">
          <img src="static/img/user/user_delete1.png">
          <span>回收订单</span>
        </div>
      </div>
      <div class="footprint">
        <div class="progress"></div>
        <div class="footprint-list">
          <ul>
            <li class="list">
              <div class="list-date">
                <div class="date"></div>
                <span class="time">01.08 <span class="day">昨天</span></span>
              </div>
              <div>
                <ul class="list-info">
                  <li class="info-item ">
                    <img src="static/img/user/user_footprint2.png">
                    <p class="item-price">¥215.00</p>
                    <p class="item-catenate">
                      <a>关注</a>
                      <a>找相似</a>
                    </p>
                  </li>
                  <li class="info-item">
                    <img src="static/img/user/user_footprint2.png">
                    <p class="item-price">¥215.00</p>
                    <p class="item-catenate">
                      <a>关注</a>
                      <a>找相似</a>
                    </p>
                  </li>
                  <li class="info-item">
                    <img src="static/img/user/user_footprint2.png">
                    <p class="item-price">¥215.00</p>
                    <p class="item-catenate">
                      <a>关注</a>
                      <a>找相似</a>
                    </p>
                  </li>
                  <li class="info-item">
                    <img src="static/img/user/user_footprint2.png">
                    <p class="item-price">¥215.00</p>
                    <p class="item-catenate">
                      <a>关注</a>
                      <a>找相似</a>
                    </p>
                  </li>
                  <li class="info-item">
                    <img src="static/img/user/user_footprint1.png">
                    <p class="item-price">¥215.00</p>
                    <p class="item-catenate">
                      <a>关注</a>
                      <a>找相似</a>
                    </p>
                  </li>
                  <li class="info-item">
                    <img src="static/img/user/user_footprint1.png">
                    <p class="item-price">¥215.00</p>
                    <p class="item-catenate">
                      <a>关注</a>
                      <a>找相似</a>
                    </p>
                  </li>
                  <li class="info-item">
                    <img src="static/img/user/user_footprint1.png">
                    <p class="item-price">¥215.00</p>
                    <p class="item-catenate">
                      <a>关注</a>
                      <a>找相似</a>
                    </p>
                  </li>
                  <li class="info-item">
                    <img src="static/img/user/user_footprint1.png">
                    <p class="item-price">¥215.00</p>
                    <p class="item-catenate">
                      <a>关注</a>
                      <a>找相似</a>
                    </p>
                  </li>
                </ul>
              </div>
            </li>
            <li class="list">
              <div class="list-date">
                <div class="date"></div>
                <span class="time">01.07 <span class="day">前天</span></span>
              </div>
              <div>
                <ul class="list-info">
                  <li class="info-item">
                    <img src="static/img/user/user_footprint2.png">
                    <p class="item-price">¥215.00</p>
                    <p class="item-catenate">
                      <a>关注</a>
                      <a>找相似</a>
                    </p>
                  </li>
                  <li class="info-item">
                    <img src="static/img/user/user_footprint2.png">
                    <p class="item-price">¥215.00</p>
                    <p class="item-catenate">
                      <a>关注</a>
                      <a>找相似</a>
                    </p>
                  </li>
                  <li class="info-item">
                    <img src="static/img/user/user_footprint2.png">
                    <p class="item-price">¥215.00</p>
                    <p class="item-catenate">
                      <a>关注</a>
                      <a>找相似</a>
                    </p>
                  </li>
                  <li class="info-item">
                    <img src="static/img/user/user_footprint2.png">
                    <p class="item-price">¥215.00</p>
                    <p class="item-catenate">
                      <a>关注</a>
                      <a>找相似</a>
                    </p>
                  </li>
                </ul>
              </div>
            </li>
            <li class="list">
              <div class="list-date">
                <div class="date"></div>
                <span class="time">12.26 <span class="day"></span></span>
              </div>
              <div>
                <ul class="list-info">
                  <li class="info-item">
                    <img src="static/img/user/user_footprint2.png">
                    <p class="item-price">¥215.00</p>
                    <p class="item-catenate">
                      <a>关注</a>
                      <a>找相似</a>
                    </p>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <p class="tip">已经到底啦！仅展示最近30天的记录</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>
<style scoped>
  .con-wrap{
    font-size:14px;
    font-family:SourceHanSansCN-Light;
    font-weight:300;
    padding-top: 5px;
    margin-left: -2px;
  }
  ul,ul>li,img,.recovery,.date{
    display: inline-block;
  }
  div,ul,ul>li{
    box-sizing: border-box;
  }
  .top ul,ul>li{
    display: inline-block;
    margin: 3px 18px 0 0;
    color:rgba(63,63,63,1);
  }
  .top ul>li:hover{
    color:#FF9900;
  }
  .top{
    height:73px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(231,231,231,1);
    padding:16px 0 0 13px;
    text-align: left;
  }
  .top p{
    font-size:18px;
    font-weight:bold;
    color:rgba(50,50,50,1);
    line-height:24px;
  }
  .batch-deletion {
    height:47px;
    border-bottom: 1px solid #E3E3E3;
    background: #FFFFFF;
    margin-top: 21px;
    text-align: right;
    line-height: 47px;
    padding-right: 28px;
  }
  .recovery{
    width:93px;
    height:22px;
    border:1px solid rgba(231,231,231,1);
    border-radius:4px;
    line-height: 22px;
    text-align: center;
    margin-left:650px;
    font-size:13px;
    color:rgba(98,98,98,1);
  }
  .recovery img{
    margin-top: -5px;
  }
  .footprint{
    display: flex;
    flex-wrap: wrap;
    background: #FFFFFF;
    padding: 8px 0 30px 80px;
    position: relative;
    text-align: left;
  }
  .footprint .progress{
    width:1px;
    height:1460px;
    background:rgba(255,153,0,1);
    margin: 25px 20px  0 0;
    position: absolute;
    left:60px;
  }
  .footprint-list .list{
    position: relative;
    padding-top: 40px;
  }
  .footprint .list-date{
    position: absolute;
    top:8px;
    left:80px;
    margin-bottom: 30px;
  }
  .footprint-list .date{
    width:15px;
    height:15px;
    background:rgba(255,153,0,1);
    border-radius:50%;
    margin-left: -107px;
    position: absolute;
    top:14px;
    left:0;
  }
  .footprint-list .time{
    font-size:38px;
    font-weight:500;
    color:rgba(87,87,87,1);
    margin-left:-78px;
  }
  .footprint-list .day{
    font-size:20px;
    font-family:SourceHanSansCN-Medium;
    font-weight:500;
    color:rgba(87,87,87,1);
  }
  .footprint-list .list-info{
    display: flex;
    flex-wrap: wrap;
  }
  .footprint-list .list-info .info-item{
    width:202px;
    height:288px;
    border:1px solid rgba(220,220,220,1);
    padding:7px 8px 17px 8px;
    margin:30px  0 0 26px;
  }
  .info-item .item-price{
    font-size:16px;
    font-weight:400;
    color:rgba(230,0,0,1);
    margin:30px 0 10px 0;
  }
  .info-item .item-catenate{
    display: flex;
    justify-content: space-between;
  }
  .footprint .tip{
    color:rgba(64,64,64,1);
    margin-top: 200px;
    text-align: center;
  }
  .info-item:hover{
    border:1px solid #FF9900!important;
  }
</style>
