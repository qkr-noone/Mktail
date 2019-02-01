<template>
  <div>
    <div class="con-wrap">
      <div class="top">
        <div class="top_tab">
          <span :class="{topTabActive:focusGoods===true}" @click="changeActive(true)">商品关注</span>
          <span :class="{topTabActive:focusGoods===false}" @click="changeActive(false)">店铺关注</span>
        </div>
        <div class="top_search">
          <input type="text" placeholder="请输入店铺名称">
          <button>搜索</button>
        </div>
      </div>
      <div class="content">
        <div class="content-top">
          <div class="content-top-item">
            <span>分类：</span>
            <ul>
              <li class="topItemActive all-shops">全部店铺</li>
              <li>休闲零食<span>(1)</span></li>
              <li>女装<span>(1)</span></li>
              <li>电动工具<span>(1)</span></li>
              <li>厨卫大家电<span>(1)</span></li>
            </ul>
          </div >
          <div  class="content-top-item">
            <span>筛选条件：</span>
            <ul>
              <li class="topItemActive">不限</li>
              <li>降价<span>(1)</span></li>
              <li>满减<span>(1)</span></li>
              <li>优惠券<span>(1)</span></li>
              <li>下架<span>(1)</span></li>
            </ul>
            <button>批量操作</button>
            <select>
              <option>广东省广州市从化区</option>
              <option>广东省广州市天河区</option>
            </select>
          </div>
        </div>
        <div class="goodsList" v-show="focusGoods===true">
          <ul>
            <li class="goods-item"  v-for="(goods,i) in goodsList" :key='i' >
            <img :src="goods.image">
            <p class="item-title">{{goods.title}} </p>
            <p class="item-price">¥{{goods.price}}</p>
            <p class="inform-operation">
              <a>降价通知</a>
              <a>加入购物车</a>
            </p>
          </li>
          </ul>
        </div>
        <div class="storeList" v-show="focusGoods===false">
          <ul>
            <li class="list-item" v-for="(store,i) in temList" :key='i'>
              <div class="store-info">
                <img :src="store.shops.logoPic">
                <p class="store-title">{{store.shops.name}}</p>
                <el-rate v-model="starValue" disabled text-color="#FF9900" :colors="['#FF9900', '#FF9900', '#FF9900']"  class="store-star"></el-rate>
                <p class="etc">粉丝：<span class="ect-num">{{store.shops.sellerFans}}</span></p>
                <p class="contact-enter">
                  <a class="contact">联系店铺</a>
                  <a class="enter">进入店铺</a>
                </p>
              </div>
              <div class="cell-product">
                <a class="cellProductActive">热销</a>
                <a >新品<span>(0)</span></a>
              </div>
              <ul>
                <li class="store-item " v-if="storeGoods" v-for="(storeGoods,i) in store.child" :key='i'>
                  <img :src="storeGoods.image">
                  <p class="storeItem-title">{{storeGoods.title}}</p>
                  <p class="storeItem-price">¥{{storeGoods.price}}</p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="block">
          <el-pagination
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size="2"
            layout="prev, pager, next, jumper"
            :total="4">
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { apiAxios } from '../../../common/utils'
import { api } from '../../../common/api'
export default {
  data () {
    return {
      username: '', // 用户名
      focusGoods: true, // 商品关注or店铺关注？
      goodsList: [], // 收藏宝贝列表
      storeList: [],
      temList: [], // 临时列表
      starValue: 5, // 评价星
      currentPage: 0, // 当前页码
      pageSize: 2 // 每页数
    }
  },
  mounted () {
    this.username = this.$cookies.isKey('userInfo') ? this.$cookies.get('userInfo').username : ''
    this.requestGoods()
    this.requestStore()
  },
  methods: {
    changeActive (val) {
      this.focusGoods = val
    },
    request: function (sellerId, shops) {
      apiAxios.AxiosG({
        url: api.goodsBySeller,
        params: {sellerId: sellerId}
      }, res => {
        if (res.data.success) {
          this.temList.push({child: res.data.data, shops: shops})
        }
      })
      console.log(this.temList)
    },
    handleCurrentChange (val) {
      this.currentPage = val
      this.requestGoods()
      this.requestStore()
    },
    requestGoods () {
      apiAxios.AxiosG({
        url: api.userCollectType,
        params: {typeId: 1, userName: this.username, pageNum: this.currentPage, pageSize: this.pageSize}
      }, res => {
        if (res.data.success) {
          this.goodsList = res.data.data
        }
      })
    },
    requestStore () {
      this.temList = []
      apiAxios.AxiosG({
        url: api.userCollectType,
        params: {typeId: 2, userName: this.username, pageNum: this.currentPage, pageSize: this.pageSize}
      }, res => {
        if (res.data.success) {
          this.storeList = res.data.data
          this.storeList.forEach(item => {
            this.request(item.sellerId, item)
          })
        }
      })
    }
  }
}

</script>
<style scoped>
  *{
    box-sizing: border-box;
  }
  .con-wrap{
    padding-top: 5px;
    text-align: left;
    font-size:14px;
    font-family:SourceHanSansCN-Light;
    font-weight:300;
  }
  ul,ul>li {
    display: inline-block;
  }
  .top{
    height:73px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(231,231,231,1);
    line-height: 73px;
  }
  .top .top_tab{
    display: inline-block;
  }
  .top .top_tab>span{
    width:117px;
    height:52px;
    margin-left: 25px;
    text-align: center;
    font-size:18px;
    color:rgba(69,69,69,1);
  }
  .topTabActive{
    color:#FF9900 !important;
    border-bottom: 2px solid #FF9900;
  }
  .top .top_search{
    display: inline-block;
    margin-left: 547px;
  }
  .top .top_search input{
    height:25px;
  }
  .top .top_search button{
    width:51px;
    height:25px;
    background:rgba(244,244,244,1);
    border:1px solid rgba(225,225,225,1);
    border-radius:4px;
    color:rgba(90,90,90,1);
  }
  .content{
    margin-top: 21px;
    padding:0 22px 60px 15px;
    background: #FFFFFF;
  }
  .content .content-top-item{
    height:47px;
    border-bottom: 1px solid #E3E3E3;
    line-height: 47px;
    color:rgba(98,98,98,1);
  }
  .content .content-top-item ul>li{
    height:22px;
    line-height: 22px;
    padding: 0 5px 0 5px;
    color:rgba(105,105,105,1);
  }
  .content .content-top-item ul>li>span{
    margin-left: 5px;
  }
  .content-top-item .topItemActive{
    color:#FFFFFF !important;
    background: #FF9900;
  }
  .all-shops{
    margin-left: 27px;
  }
  .content-top-item>button{
    width:85px;
    height:27px;
    background:rgba(247,247,247,1);
    border:1px solid rgba(183,183,183,1);
    border-radius:3px;
    color:rgba(105,105,105,1);
    margin:0 12px 0 395px;
  }
  .content-top-item>select{
    width:162px;
    height:27px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(183,183,183,1);
    color:rgba(105,105,105,1);
  }
  .goodsList .goods-item{
    width:243px;
    height:366px;
    border:1px solid rgba(219,219,219,1);
    margin: 20px 15px 20px 0px;
  }
  .goodsList .goods-item>img{
    width:241px;
  }
  .goodsList .goods-item .item-title{
    height:30px;
    width:240px;
    padding:0 5px 0 5px;
    margin-top: 5px;
    text-overflow: ellipsis;
    overflow : hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size:12px;
    font-weight:400;
    color: #696969;
    margin-left: 5px;
  }
  .goodsList .goods-item .item-price{
    font-size:22px;
    font-weight:400;
    color:rgba(230,0,0,1);
    margin: 10px 0 13px 5px;
  }
  .goodsList .goods-item .inform-operation{
    height:35px;
    border-top:1px solid rgba(219,219,219,1);
    line-height: 35px;
  }
  .goodsList .goods-item .inform-operation>a{
    width:49%;
    text-align: center;
  }
  .goodsList .goods-item .inform-operation>a:first-child{
    border-right:1px solid rgba(219,219,219,1);
  }
  .storeList .list-item{
    height:273px;
    margin-top: 20px;
    border:1px solid rgba(232,232,232,1);
    position: relative;
  }
  .storeList>ul{
    display: flex;
    flex-direction: column;
  }
  .storeList .list-item .store-info{
    width:231px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .storeList .list-item{
    display: flex;
  }
  .storeList .list-item .store-info{
    border-right:1px solid rgba(232,232,232,1);
    position: relative;
  }
  .storeList .list-item .store-info>img{
    margin: 23px 0 13px 0;
    width:112px;
    height:112px;
  }
  .storeList .list-item .store-info .store-title{
    font-size:20px;
    font-weight:400;
    color:rgba(36,36,36,1);
  }
  .storeList .list-item .store-info .store-star{
    color:#FF9900;
    margin: 5px 0 7px 0;
  }
  .storeList .list-item .store-info .contact-enter{
    width:100%;
    height:39px;
    position: absolute;
    bottom: 0;
    border-top: 1px solid rgba(232,232,232,1);
    line-height: 39px;
  }
  .storeList .list-item .store-info .contact-enter>a{
    width:49%;
    text-align: center;
  }
  .store-info .contact-enter .contact{
    border-right: 1px solid  rgba(232,232,232,1);
  }
  .store-info .etc{
    font-size:13px;
    color: #242424;
    margin-top: 7px;
  }
  .storeList .list-item .cell-product{
    width:122px;
    height:18px;
    font-size:13px;
    color:rgba(49,49,49,1);
    position: absolute;
    top:13px;
    left:260px;
    border:1px solid rgba(232,232,232,1);
  }
  .storeList .list-item .cell-product>a{
    width:48%;
    text-align: center;
  }
  .cellProductActive{
    background: #FF9900;
    color: #FFFFFF;
  }
  .storeList .store-item{
    margin: 40px 0 0 15px;
  }
  .store-FirstItem{
    margin-left: 14px !important;
  }
 .store-item .storeItem-title{
    font-size:13px;
    color:rgba(49,49,49,1);
    margin-top: 5px;
    width: 151px;
   text-overflow: ellipsis;
   overflow : hidden;
   display: -webkit-box;
   -webkit-line-clamp: 2;
   -webkit-box-orient: vertical;
  }
  .store-item>img{
    width:139px;
    height:139px;
  }
  .storeList .storeItem-price{
    font-size:22px;
    font-weight:400;
    color:rgba(230,0,0,1);
    margin-top: 10px;
  }
  .block{
    text-align: right;
    margin-top: 30px;
  }
</style>
