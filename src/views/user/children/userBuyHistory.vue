<template>
  <div class="con-wrap">
    <p class="userPageTitle">购买过的店铺</p>
    <div class="top">
      <span class="userPageTab pageTabActive">全部店铺（20）</span>
      <a>批量管理</a>
      <div class="search">
        <input type="text" placeholder="宝贝搜索"/>
        <span><img src="static/img/user/user_search.png"/></span>
      </div>
    </div>
    <ul class="buyStoreList">
      <li class="buyStoreList-item">
        <div class="buyStoreInfo">
          <img src="static/img/user/user_buyStore1.png" class="storeImg">
          <p>
            <span class="buyStoreName">臻芙箱包旗舰店</span><br>
            <span>臻芙箱包旗...</span><img src="static/img/user/user_part.png">
          </p>
          <img src="static/img/user/user_delete1.png" class="deleteImg">
          <a>进入店铺></a>
        </div>
        <ul class="storeShopList">
          <li class="storeShopItem">
            <p >购买过的商品11</p>
            <img src="static/img/user/user_buyStoreShop1.png">
          </li>
          <li class="storeShopItem">
            <img src="static/img/user/user_buyStoreShop2.png">
          </li>
          <li class="storeShopItem">
            <img src="static/img/user/user_buyStoreShop2.png">
          </li>
          <li class="storeShopItem">
            <img src="static/img/user/user_buyStoreShop2.png">
          </li>
          <li class="storeShopItem">
            <img src="static/img/user/user_buyStoreShop2.png">
         </li>
          <li class="storeShopItem">
            <img src="static/img/user/user_buyStoreShop2.png">
          </li>
        </ul>
      </li>
      <li class="buyStoreList-item">
        <div class="buyStoreInfo">
          <img src="static/img/user/user_buyStore1.png" class="storeImg">
          <p>
            <span class="buyStoreName">臻芙箱包旗舰店</span><br>
            <span>臻芙箱包旗...</span><img src="static/img/user/user_part.png">
          </p>
          <img src="static/img/user/user_delete1.png" class="deleteImg">
          <a>进入店铺></a>
        </div>
        <ul class="storeShopList">
          <li class="storeShopItem">
            <p >购买过的商品4</p>
            <img src="static/img/user/user_buyStoreShop1.png">
          </li>
          <li class="storeShopItem">
            <img src="static/img/user/user_buyStoreShop2.png">
          </li>
          <li class="storeShopItem">
            <img src="static/img/user/user_buyStoreShop2.png">
          </li>
          <li class="storeShopItem">
            <img src="static/img/user/user_buyStoreShop2.png">
          </li>
        </ul>
      </li>
      <li class="buyStoreList-item">
        <div class="buyStoreInfo">
          <img src="static/img/user/user_buyStore1.png" class="storeImg">
          <p>
            <span class="buyStoreName">臻芙箱包旗舰店</span><br>
            <span>臻芙箱包旗...</span><img src="static/img/user/user_part.png">
          </p>
          <img src="static/img/user/user_delete1.png" class="deleteImg">
          <a>进入店铺></a>
        </div>
        <ul class="storeShopList">
          <li class="storeShopItem">
            <p >购买过的商品1</p>
            <img src="static/img/user/user_buyStoreShop1.png">
          </li>
          <li class="storeShopItem">
            <img src="static/img/user/user_buyStoreShop2.png">
          </li>
        </ul>
      </li>
      <li class="buyStoreList-item">
        <div class="buyStoreInfo">
          <img src="static/img/user/user_buyStore1.png" class="storeImg">
          <p>
            <span class="buyStoreName">臻芙箱包旗舰店</span><br>
            <span>臻芙箱包旗...</span><img src="static/img/user/user_part.png">
          </p>
          <img src="static/img/user/user_delete1.png" class="deleteImg">
          <a>进入店铺></a>
        </div>
        <ul class="storeShopList">
          <li class="storeShopItem">
            <p >购买过的商品1</p>
            <img src="static/img/user/user_buyStoreShop1.png">
          </li>
        </ul>
      </li>
      <li class="buyStoreList-item">
        <div class="buyStoreInfo">
          <img src="static/img/user/user_buyStore1.png" class="storeImg">
          <p>
            <span class="buyStoreName">臻芙箱包旗舰店</span><br>
            <span>臻芙箱包旗...</span><img src="static/img/user/user_part.png">
          </p>
          <img src="static/img/user/user_delete1.png" class="deleteImg">
          <a>进入店铺></a>
        </div>
        <ul class="storeShopList">
          <li class="storeShopItem">
            <p >购买过的商品1</p>
            <img src="static/img/user/user_buyStoreShop1.png">
          </li>
        </ul>
      </li>
    </ul>
    <div class="block">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-size="2"
        layout="prev, pager, next, jumper"
        :total="16">
      </el-pagination>
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
  @import "../../../assets/css/user/user-homePage.css";
  .con-wrap{
    font-weight: 400;
    padding-bottom: 20px;
  }
  .top{
    height:50px;
    border-bottom: 2px solid #D3D3D3;
    line-height: 50px;
    text-align: left;
  }
  .search{
    display: inline-block;
  }
  .userPageTab{
    height:47px !important;
    padding-left: 25px;
  }
  .top a{
    width:80px;
    height:30px;
    background:rgba(248,248,248,1);
    border:1px solid rgba(227,227,227,1);
    font-size:13px;
    color:rgba(135,135,135,1);
    line-height: 30px;
    text-align: center;
    margin:0 20px 0 600px;
  }
  .top .search{
    width:200px;
    border:1px solid rgba(220,220,220,1);
    line-height: 30px;
  }
  .top .search>input{
    border: none;
    width:165px;
    padding-left: 8px;
    height:30px;
  }
  .top .search>span{
    height:31px;
    width:20px;
    border-left:1px solid rgba(220,220,220,1);
    padding-left: 5px;
    margin-left: -6px;
  }
  .buyStoreList-item{
    width:1083px;
    height:182px;
    border-bottom:1px solid rgba(227,227,227,1);
    padding-top: 20px;
  }
  .buyStoreList-item{
    display: flex;
  }
  .buyStoreList .buyStoreInfo{
    position: relative;
    width:300px;
    height:150px;
    padding:0px 5px 0 19px;
    font-size:12px;
    color:rgba(116,116,116,1);
    display: flex;
    justify-content: space-between;
    margin-right: 20px;
  }
  .buyStoreList .storeImg{
    height:50px;
    width:50px;
  }
  .buyStoreList .deleteImg{
    margin-top: 2px;
    height:17px;
    width:16px;
  }
  .buyStoreList .buyStoreInfo>p{
    padding-top: 10px;
    margin-left: -80px;
  }
  .buyStoreList .buyStoreInfo>a{
    position: absolute;
    left:238px;
    top:125px;
  }
  .buyStoreList .storeShopItem{
    margin-right: 22px;
  }
  .buyStoreList .storeShopItem img{
    width:100px;
    height:100px;
  }
  .buyStoreList .storeShopItem p{
    width:100px;
    height:20px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(170,170,170,1);
    font-size:12px;
    color:rgba(84,84,84,1);
    text-align: center;
    line-height: 18px;
    margin-bottom: 20px;
  }
  .block {
    text-align: center;
    margin-top: 13px;
  }
</style>
