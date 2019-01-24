<template>
  <div>
    <div class="con-wrap">
      <div class="top">
        <p>我的足迹</p>
        <ul>
          <li class="topTitleActive">全部分类<span>(50)</span></li>
          <li>厨房卫浴<span>(5)</span></li>
          <li>电动工具<span>(4)</span></li>
          <li>厨卫大家电<span>(3)</span></li>
          <li>女装<span>(3)</span></li>
          <li>手动工具<span>(2)</span></li>
          <li>休闲食品<span>(2)</span></li>
          <li>进口休闲食品<span>(1)</span></li>
        </ul>
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
  ul,ul>li{
    display: inline-block;
    margin: 3px 18px 0 0;
    color:rgba(63,63,63,1);
  }
  div,ul,ul>li{
    box-sizing: border-box;
  }
  .topTitleActive{
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
</style>
