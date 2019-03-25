<template>
  <div class="order-detail">
    <shortcut></shortcut>
    <userNav></userNav>
    <section class="order">
      <section class="crumbs Left-Center">
        <span>我的MKTail</span><i class="el-icon-arrow-right"></i><span>订单中心</span><i class="el-icon-arrow-right"></i><span>物流详情</span>
      </section>
      <section class="content">
        <ul class="status Center">
          <li class="Top-Center">
            <img src="static/img/user/user-order-detail-1.png">
            <span class="status-0" :class="{'status-1': false}">待揽件</span>
          </li>
          <li class="Top-Center">
            <img src="static/img/user/user-order-detail-2.png">
            <span class="status-0" :class="{'status-1': false}">运输中</span>
          </li>
          <li class="Top-Center">
            <img src="static/img/user/user-order-detail-3.png">
            <span class="status-0" :class="{'status-1': false}">派送中</span>
          </li>
          <li class="Top-Center">
            <img src="static/img/user/user-order-detail-4.png">
            <span class="status-0" :class="{'status-1': false}">已签收</span>
          </li>
        </ul>
        <section class="data">
          <h5 class="data-title">待揽件</h5>
          <section class="flow-list">
            <p class="data-desc">您的订单卖家已发货，等待快递揽收</p>
          </section>
        </section>
        <ul class="order-info">
          <li></li>
        </ul>
      </section>
      <section>
        <h5 class="seller"></h5>
        <el-row>
          <el-col :span="9">1</el-col>
          <el-col :span="4">2</el-col>
          <el-col :span="4">3</el-col>
          <el-col :span="3">4</el-col>
          <el-col :span="4">5</el-col>
        </el-row>
        <el-row>
          <el-col :span="9">1</el-col>
          <el-col :span="4">2</el-col>
          <el-col :span="4">3</el-col>
          <el-col :span="3">4</el-col>
          <el-col :span="4">5</el-col>
        </el-row>
        <el-row>
          <el-col :span="9">1</el-col>
          <el-col :span="4">2</el-col>
          <el-col :span="4">3</el-col>
          <el-col :span="3">4</el-col>
          <el-col :span="4"></el-col>
        </el-row>
      </section>
    </section>
  </div>
</template>
<script>
import shortcut from '@/components/shortcutHeader'
import userNav from '@/components/userNav'
export default {
  data () {
    return {}
  },
  components: { shortcut, userNav }
}
</script>
<style scoped>
/* 简写 */
  .Center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .Left-Center {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .Top-Left {
    display: flex;
    flex-direction: column;
  }
  .Top-Center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
/* 内容 */
  .order-detail {
    background-color: #F4F4F4;
    font-family: SourceHanSansCN-Light;
  }
  .order {
    width: 1226px;
    margin: 0 auto;
  }
  .crumbs {
    height: 48px;
    font-size: 14px;
    color: #414141;
  }
  .content {
    background-color: #FFFFFF;
    padding: 55px 73px 38px 73px;
  }
  .data {
    width:1076px;
    margin-top: 28px;
    background-color: #F6F6F6;
    border-radius:5px;
    color: #5C5C5C;
    padding: 0 12px;
  }
  .data .data-title {
    font-weight: 300px;
    font-size: 22px;
    line-height: 46px;
    text-align: left;
    padding-left: 16px;
    border-bottom: 1px solid #D3D3D3;
  }
  .flow-list {}
  .data-desc {
    font-size: 14px;
    line-height: 30px;
    text-align: center;
    margin-top: 10px;
    padding-bottom: 28px;
  }
</style>
