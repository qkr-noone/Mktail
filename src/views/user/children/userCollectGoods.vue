<template>
  <div>
    <div class="con-wrap">
      <div class="top">
        <div class="top_tab">
          <span :class="{topTabActive:focusGoods===true}" @click="changeActive(true,1)">商品关注</span>
          <span :class="{topTabActive:focusGoods===false}" @click="changeActive(false,2)">店铺关注</span>
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
            <li class="goods-item">
            <img src="static/img/user/user_collect1.png">
            <p class="item-title">希箭HOROW全铜淋浴花洒套装挂墙式三出水单把双控空气注入增压花洒9寸经典圆全铜淋浴花洒套装挂墙式三出水单把双控空气注入增压花洒 </p>
            <p class="item-price">¥215.00</p>
            <p class="inform-operation">
              <a>降价通知</a>
              <a>加入购物车</a>
            </p>
          </li>
            <li class="goods-item">
              <img src="static/img/user/user_collect1.png">
              <p class="item-title">希箭HOROW全铜淋浴花洒套装挂墙式三出水单把双控空气注入增压花洒9寸经典圆全铜淋浴花洒套装挂墙式三出水单把双控空气注入增压花洒 </p>
              <p class="item-price">¥215.00</p>
              <p class="inform-operation">
                <a>降价通知</a>
                <a>加入购物车</a>
              </p>
            </li>
            <li class="goods-item">
              <img src="static/img/user/user_collect1.png">
              <p class="item-title">希箭HOROW全铜淋浴花洒套装挂墙式三出水单把双控空气注入增压花洒9寸经典圆全铜淋浴花洒套装挂墙式三出水单把双控空气注入增压花洒 </p>
              <p class="item-price">¥215.00</p>
              <p class="inform-operation">
                <a>降价通知</a>
                <a>加入购物车</a>
              </p>
            </li>
            <li class="goods-item">
              <img src="static/img/user/user_collect1.png">
              <p class="item-title">希箭HOROW全铜淋浴花洒套装挂墙式三出水单把双控空气注入增压花洒9寸经典圆全铜淋浴花洒套装挂墙式三出水单把双控空气注入增压花洒 </p>
              <p class="item-price">¥215.00</p>
              <p class="inform-operation">
                <a>降价通知</a>
                <a>加入购物车</a>
              </p>
            </li>
            <li class="goods-item">
              <img src="static/img/user/user_collect1.png">
              <p class="item-title">希箭HOROW全铜淋浴花洒套装挂墙式三出水单把双控空气注入增压花洒9寸经典圆全铜淋浴花洒套装挂墙式三出水单把双控空气注入增压花洒 </p>
              <p class="item-price">¥215.00</p>
              <p class="inform-operation">
                <a>降价通知</a>
                <a>加入购物车</a>
              </p>
            </li>
          </ul>
        </div>
        <div class="storeList" v-show="focusGoods===false">
          <p>这是店铺关注</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      username: '', // 用户名
      focusGoods: true, // 商品关注or店铺关注？
      concernType: 1 // 关注类型
    }
  },
  methods: {
    changeActive (val1, val2) {
      this.focusGoods = val1
      this.concernType = val2
    }
  },
  mounted () {
    this.username = this.$cookies.isKey('userInfo') ? this.$cookies.get('userInfo').username : ''
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
    width:243px;
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
  }
  .goodsList .goods-item .item-price{
    font-size:22px;
    font-weight:400;
    color:rgba(230,0,0,1);
    margin: 10px 0 13px 0;
  }
  .goodsList .goods-item .inform-operation{
    height:33px;
    border-top:1px solid rgba(219,219,219,1);
    line-height: 33px;
  }
  .goodsList .goods-item .inform-operation>a{
    width:49%;
    text-align: center;
  }
  .goodsList .goods-item .inform-operation>a:first-child{
    border-right:1px solid rgba(219,219,219,1);
  }
</style>
