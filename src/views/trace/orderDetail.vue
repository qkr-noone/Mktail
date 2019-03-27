<template>
  <div class="order-detail">
    <shortcut></shortcut>
    <userNav></userNav>
    <section class="order">
      <section class="crumbs Left-Center">
        <span @click="goUser">我的MKTail</span><i class="el-icon-arrow-right"></i><span @click="goOrder">订单中心</span><i class="el-icon-arrow-right"></i><span>物流详情</span>
      </section>
      <section class="content">
        <ul class="status Center">
          <li class="Top-Center">
            <img src="static/img/user/user-order-detail-1.png">
            <span class="status-0" :class="{'status-1': false}">待揽件</span>
          </li>
          <span class="line"></span>
          <li class="Top-Center">
            <img src="static/img/user/user-order-detail-2.png">
            <span class="status-0" :class="{'status-1': false}">运输中</span>
          </li>
          <span  class="line"></span>
          <li class="Top-Center">
            <img src="static/img/user/user-order-detail-3.png">
            <span class="status-0" :class="{'status-1': false}">派送中</span>
          </li>
          <span  class="line"></span>
          <li class="Top-Center">
            <img src="static/img/user/user-order-detail-4.png">
            <span class="status-0" :class="{'status-1': false}">已签收</span>
          </li>
        </ul>
        <section class="data">
          <h5 class="data-title">待揽件</h5>
          <section class="flow-list">
            <ul class="flow-ul">
              <li class="flow-li Left">
                <span class="date">2019-03-25</span>
                <span class="week">周一</span>
                <span class="time">10:41:56</span>
                <span class="data-desc">您的订单卖家已发货，等待快递揽收</span>
              </li>
              <li class="flow-li Left">
                <span class="date hidden">2019-03-25</span>
                <span class="week hidden">周一</span>
                <span class="time">10:41:56</span>
                <span class="data-desc">您的订单卖家已发货，等待快递揽收您的订单卖家已发货，等待快递揽收您的订单卖家已发货，等待快递揽收您的订单卖家已发货，等待快递揽收您的订单卖家已发货，等待快递揽收您的订单卖家已发货，等待快递揽收</span>
              </li>
              <li class="flow-li Left">
                <span class="date">2019-03-25</span>
                <span class="week">周一</span>
                <span class="time">10:41:56</span>
                <span class="data-desc">您的订单卖家已发货，等待快递揽收</span>
              </li>
              <li class="flow-li Left">
                <span class="date">2019-03-25</span>
                <span class="week">周一</span>
                <span class="time">10:41:56</span>
                <span class="data-desc">您的订单卖家已发货，等待快递揽收</span>
              </li>
              <li class="flow-li Left">
                <span class="date">2019-03-25</span>
                <span class="week">周一</span>
                <span class="time">10:41:56</span>
                <span class="data-desc">您的订单卖家已发货，等待快递揽收</span>
              </li>
            </ul>
          </section>
        </section>
        <ul class="order-info Left">
          <li class="order-li">
            <h5 class="item-title">收货人信息</h5>
            <div class="item Left">
              <span class="label">收货人：</span><div class="item-info">李先生</div>
            </div>
            <div class="item Left">
              <span class="label">地址：</span><div class="item-info">广州市从化区明珠工业园丽峰路1号新兴脚轮</div>
            </div>
            <div class="item Left">
              <span class="label">手机号码：</span><div class="item-info">123****432</div>
            </div>
          </li>
          <li class="order-li">
            <h5 class="item-title">配送信息</h5>
            <div class="item Left">
              <span class="label">配送方式：</span><div class="item-info">普通快递</div>
            </div>
            <div class="item Left">
              <span class="label">运费：</span><div class="item-info">￥6.00</div>
            </div>
            <div class="item Left">
              <span class="label">运单号码：</span><div class="item-info">123165843214185</div>
            </div>
            <div class="item Left">
              <span class="label">物流公司：</span><div class="item-info">中通快递</div>
            </div>
          </li>
          <li class="order-li">
            <h5 class="item-title">发票信息</h5>
            <div class="item Left">
              <span class="label">发票类型：</span><div class="item-info">电子普通发票</div>
            </div>
            <div class="item Left">
              <span class="label">发票抬头：</span><div class="item-info">个人</div>
            </div>
            <div class="item Left">
              <span class="label">发票内容：</span><div class="item-info">商品明细</div>
            </div>
            <span class="ticket">电子发票与纸质发票具有同等法律效力，可作为用户维权、保修的有效凭据</span>
            <div class="load-ticket">下载电子发票</div>
          </li>
        </ul>
      </section>
      <section class="goods">
        <h5 class="seller">胜天门业</h5>
        <el-row class="row">
          <el-col :span="10">商品</el-col>
          <el-col :span="4">商品编号</el-col>
          <el-col :span="3">销售价</el-col>
          <el-col :span="3">商品数量</el-col>
          <el-col :span="4">操作</el-col>
        </el-row>
        <el-row class="nest">
          <el-col :span="3">
            <a href="javascript:;">
              <i class="el-icon-picture img"></i>
            </a>
          </el-col>
          <el-col :span="7">
            <div class="nest-desc">
              <span class="nest-desc-one">健仕宝烟盒打火机一体充电多功能香烟盒点烟器 魔力黑</span>
              <span>魔力黑</span>
            </div>
          </el-col>
          <el-col :span="4"><span>30167880332</span></el-col>
          <el-col :span="3"><span>¥ 68.00</span></el-col>
          <el-col :span="3"><span>12</span></el-col>
          <el-col :span="4" class="Top">
            <a class="btn" href="javascript:;">再次购买</a>
            <a class="btn" href="javascript:;">确认收货</a>
          </el-col>
        </el-row>
        <el-row class="nest">
          <el-col :span="3">
            <a href="javascript:;">
              <i class="el-icon-picture img"></i>
            </a>
          </el-col>
          <el-col :span="7">
            <div class="nest-desc">
              <span class="nest-desc-one">健仕宝烟盒打火机一体充电多功能香烟盒点烟器 魔力黑</span>
              <span>魔力黑</span>
            </div>
          </el-col>
          <el-col :span="4"><span>30167880332</span></el-col>
          <el-col :span="3"><span>¥ 68.00</span></el-col>
          <el-col :span="3"><span>12</span></el-col>
          <el-col :span="4" class="Top">
            <a class="btn" href="javascript:;">再次购买</a>
            <a class="btn" href="javascript:;">确认收货</a>
          </el-col>
        </el-row>
      </section>
      <div class="recommend">
        <div class="recommend-top">
          <span>为您推荐</span>
          <hr>
          <div class="page-turning">
            <el-pagination small layout="prev, pager, next" :total="50"></el-pagination>
          </div>
        </div>
        <div>
          <youRecom></youRecom>
        </div>
      </div>
    </section>
    <pageFooter class="footer"></pageFooter>
  </div>
</template>
<script>
import shortcut from '@/components/shortcutHeader'
import userNav from '@/components/userNav'
import youRecom from '@/components/youRecom'
import pageFooter from '@/components/pageFooter'
export default {
  data () {
    return {}
  },
  components: { shortcut, userNav, youRecom, pageFooter },
  methods: {
    goOrder () {
      this.$router.push('/user/userOrder/statu-z')
    },
    goUser () {
      this.$router.push('/user')
    }
  }
}
</script>
<style scoped>
/* 简写 */
  .Center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .Left {
    display: flex;
  }
  .Left-Center {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .Top {
    display: flex;
    flex-direction: column;
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
  .hidden {
    visibility: hidden;
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
  .crumbs>span:nth-child(n) {
    cursor: pointer;
  }
  .content {
    background-color: #FFFFFF;
    padding: 55px 73px 38px 73px;
    border-top: 4px solid #E71600;
  }
/* 阶段状态 */
  ul.status li:last-child {
    align-self: flex-end;
    margin-left: 6px;
  }
  .line {
    width: 170px;
    border-top: 3px dotted #FF724E;
    align-self: flex-end;
    margin-bottom: 15px
  }
  .status-0 {
    margin-top: 17px;
    width:113px;
    height:36px;
    line-height: 36px;
    text-align: center;
    border-radius:18px;
    background-color: #FFEC85;
    font-size: 22px;
    color: #403F44;
  }
  .status-1 {
    background-color: #FF952E;
    color: #FFFFFF;
  }
/* 物流信息读取 */
  .data {
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
  .flow-list {
    overflow: hidden;
    padding-bottom: 30px;
    min-height: 200px;
  }
  .flow-ul {
    margin: 50px 0 0 70px;
  }
  .flow-li {
    align-items: flex-start;
    border-left: 2px solid #D3D3D3;
    min-height: 40px;
  }
  .flow-li:before {
    content: '';
    border: 3px solid #f3f3f3;
    background-color: #B0B0B0;
    width: 10px;
    height: 10px;
    border-radius: 10px;
    margin-left: -9px;
    margin-right: 10px;
    flex-shrink: 0;
  }
  li.flow-li:last-child:before{
    background-color: #fe4300;
    border-color: #f8e9e4;
  }
  li.flow-li>:nth-child(n):not(:last-child) {
    flex-shrink: 0
  }
  li.flow-li:last-child {
    border: none;
    margin-left: 2px;
  }
  .date {
    width: 90px;
    font-weight: 700;
    margin-right: 8px;
    font-family: Arial;
    line-height: 24px;
  }
  .week {
    width: 35px;
    font-weight: 700;
    line-height: 24px;
  }
  .time {
    width: 80px;
    margin-right: 28px;
    margin-left: 5px;
    line-height: 24px;
  }
  .data-desc {
    font-size: 14px;
    line-height: 24px;
    text-align: left;
  }
/* 配送信息 */
  .order-info{
    color: #403F44;
    font-size: 14px;
    background-color: #fff;
    margin-top: 24px;
    justify-content: space-between;
    border-top: 1px solid #DEDEDE;
  }
  .order-li {
    overflow: hidden;
    text-align: left;
    margin-top: 8px;
  }
  li.order-li:nth-child(n+2) {
    border-left: 1px solid #D7D7D7;
    padding-left: 48px;
  }
  li.order-li>:nth-child(n) {
    text-align: left;
  }
  div.item:nth-child(n+2) {
    margin-top: 15px;
  }
  h5.item-title {
    font-size: 18px;
    font-family:SourceHanSansCN-Regular;
    font-weight: 400;
  }
  .item {
    flex-wrap: nowrap;
  }
  .label {
    width: 80px;
    flex-shrink: 0;
  }
  .item-info {
    width: 220px;
  }
  .ticket {
    color: #B4B4B4;
    margin-top: 10px;
    width: 260px;
    text-align: left;
    font-size: 13px;
    line-height: 16px;
  }
  li.order-li div.load-ticket {
    margin: 10px auto;
    width:93px;
    height:20px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(191,191,191,1);
    border-radius:5px;
    text-align: center;
    color: #4C4C4C;
    font-size: 13px;
  }
/* 商品信息 */
  .goods {
    font-size: 13px;
  }
  .seller {
    color: #737373;
    height: 30px;
    line-height: 30px;
    text-align: left;
    margin-left: 5px;
  }
  .row {
    height: 32px;
    line-height: 32px;
    background-color: #F0FBFF;
  }
  .nest {
    height: 132px;
    background-color: #FFFFFF;
    border-bottom: 1px solid #F4F4F4;
    padding: 28px 0 22px 0;
  }
  .nest .img {
    width: 81px;
    height: 81px;
    font-size: 81px;
  }
  .el-col{
    height: 100%;
  }
  .nest-desc {
    box-sizing: border-box;
    height: 100%;
    padding: 4px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }
  .nest-desc-one {
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 35px;
  }
  .btn {
    width: 100px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    color: #202020;
    border: 1px solid #D3D3D3;
    border-radius: 5px;
  }
  a.btn + a{
    margin-top: 8px;
  }
/*为你推荐*/
  .recommend{
    width:1185px;
    height:312px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(220,220,220,1);
    margin-top: 30px;
    padding: 14px 16px 27px 23px;
  }
  .recommend .recommend-top{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 37px;
  }
  .recommend hr{
    flex-grow: 1;
    color:#D8D8D8;
    opacity: 0.4;
    margin-left:40px;
  }
  .footer {
    margin-top: 80px;
  }
</style>
