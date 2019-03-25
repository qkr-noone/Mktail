<template>
  <div>
    <div class="con-wrap">
      <div class="top">
        <div class="top_tab">
          <span :class="{topTabActive:focusGoods===true}" @click="changeActive(true, '/user/userCollectGoods')">商品关注</span>
          <span :class="{topTabActive:focusGoods===false}" @click="changeActive(false, '/user/userCollectShop')">店铺关注</span>
        </div>
        <div class="top_search">
          <input type="text" placeholder="请输入店铺名称" v-model="value">
          <button @click="findShop()">搜索</button>
        </div>
      </div>
      <div class="content">
        <div class="content-top">
          <div class="content-top-item">
            <div>
              <span>分类：</span>
              <ul>
                <li class="topItemActive all-shops">全部店铺</li>
                <li>休闲零食<span>(1)</span></li>
                <li>女装<span>(1)</span></li>
                <li>电动工具<span>(1)</span></li>
                <li>厨卫大家电<span>(1)</span></li>
              </ul>
            </div>
          </div >
          <div  class="content-top-item">
            <div class="content-item-wrap">
              <span>筛选条件：</span>
              <ul>
                <li class="topItemActive">不限</li>
                <li>降价<span>(1)</span></li>
                <li>满减<span>(1)</span></li>
                <li>优惠券<span>(1)</span></li>
                <li>下架<span>(1)</span></li>
              </ul>
            </div>
            <div class="content-item-right">
              <el-checkbox v-model="checked" @change="isAll">全选</el-checkbox>
              <button class="btn-select">批量操作</button>
              <span class="select flow-addr">
                <span>{{destination}}</span>
                <i class="el-icon-arrow-down"></i>
                <div class="addr-box">
                  <ul class="pro-box">
                    <li v-for="list in addrOptions" :key="list.id" :class="{'choose': addressOne === list.province}" @click="tabAddr(list.provinceid, list.province)">{{list.province}}</li>
                  </ul>
                  <ul class="city-box" v-if="addressOne">
                    <li v-for="data in cityList" :key="data.id" :class="{'choose': addressTwoId === data.cityid}" @click="tabCity(data.city, data.cityid)">{{data.city}}</li>
                  </ul>
                  <ul class="county-box" v-if="addressTwo">
                    <li v-for="data in countyList" :key="data.id" :class="{'choose': addressThreeId === data.areaid}" @click="tabCounty(data.area, data.areaid)">{{data.area}}</li>
                  </ul>
                </div>
              </span>
            </div>
          </div>
        </div>
        <div class="goodsList" v-show="focusGoods===true">
          <ul class="go-ul">
            <li class="goods-item"  v-for="(goods,i) in goodsList" :key='i' >
              <router-link :to="{path:'/detail', query:{goodsId: goods.goodsId}}"><img :src="goods.image"></router-link>
              <p class="item-title">{{goods.title}} </p>
              <p class="item-price">¥{{goods.price}}</p>
              <p class="inform-operation">
                <!-- <a>降价通知</a> -->
                <a>加入购物车</a>
              </p>
              <div class="mask">
                <div class="mask-check select">
                  <i class="el-icon-check"></i>
                </div>
              </div>
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
              <ul class="sto-ul">
                <div class="cell-product">
                   <a class="cellProductActive">热销</a>
                   <a >新品<span>(0)</span></a>
                 </div>
                <div class="sto-li">
                  <li class="store-item " v-if="storeGoods && i < 5" v-for="(storeGoods,i) in store.child" :key='i'>
                    <img :src="storeGoods.image">
                    <p class="storeItem-title">{{storeGoods.title}}</p>
                    <p class="storeItem-price">¥{{storeGoods.price}}</p>
                  </li>
                </div>
              </ul>
              <div class="mask">
                <div class="mask-check select">
                  <i class="el-icon-check"></i>
                </div>
              </div>
            </li>
            <li class="list-item not-data" v-if="!temList.length">
              你的收藏中没有与“{{value}}”相关的店铺
            </li>
          </ul>
        </div>
        <div class="block">
          <el-pagination v-if="focusGoods"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size="2"
            layout="prev, pager, next, jumper"
            :total="5">
          </el-pagination>
          <el-pagination v-else
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size="2"
            layout="prev, pager, next, jumper"
            :total="5">
          </el-pagination>
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
      goodsList: [], // 收藏宝贝列表
      storeList: [],
      temList: [], // 临时列表
      starValue: 5, // 评价星
      currentPage: 0, // 当前页码
      pageSize: 2, // 每页数
      checked: false,
      addrOptions: [],
      addressOne: '',
      addressTwo: '',
      addressTwoId: '',
      addressThreeId: '',
      cityList: [],
      countyList: [],
      destination: '请选择',
      value: ''
    }
  },
  props: {},
  mounted () {
    let tem = this.$route.path.split('/')[2]
    tem === 'userCollectGoods' ? this.focusGoods = true : this.focusGoods = false
    this.username = this.$cookies.isKey('userInfo') ? this.$cookies.get('userInfo').username : ''
    this.requestGoods()
    this.requestStore()
    // 配送至
    this.API.allProvince().then(res => {
      this.addrOptions = res
      this.addrOptions.forEach((ele, index) => {
        if (ele.province === '黑龙江省' || ele.province === '内蒙古自治区') {
          this.$set(this.addrOptions[index], 'province', ele.province.substring(0, 3))
        } else this.$set(this.addrOptions[index], 'province', ele.province.substring(0, 2))
      })
    })
  },
  methods: {
    // 切换
    changeActive (val, path) {
      this.focusGoods = val
      let queryList = this.$route.query
      this.$router.push({path: path, query: queryList})
    },
    request: function (sellerId, shops) {
      this.API.goodsBySeller({sellerId: sellerId}).then(res => {
        if (res.success === false) return false
        this.temList.push({child: res, shops: shops})
      })
    },
    handleCurrentChange (val) {
      this.currentPage = val
      this.requestGoods()
      this.requestStore()
    },
    requestGoods () {
      this.API.userCollectType({typeId: 1, userName: this.username, pageNum: this.currentPage, pageSize: this.pageSize}).then(res => {
        this.goodsList = res
        console.log('gzshangp', res)
      })
    },
    requestStore () {
      this.temList = []
      this.API.userCollectType({typeId: 2, userName: this.username, pageNum: this.currentPage, pageSize: this.pageSize}).then(res => {
        this.storeList = res
        console.log('gzdp', res)
        this.storeList.forEach(item => {
          this.request(item.sellerId, item)
        })
      })
    },
    findShop () {
      if (this.focusGoods) {
        this.API.searchCollectGoods({userName: this.username, title: this.value}).then(res => {
          this.goodsList = res
          console.log(res, 'goods')
        })
      } else {
        this.temList = []
        this.API.searchCollectShops({userName: this.username, sellerName: this.value}).then(res => {
          this.storeList = res
          console.log(res, this.storeList, 'store')
          this.storeList.forEach(item => {
            console.log(item, 'bug')
            this.request(item.sellerId, item)
          })
        })
      }
    },
    isAll () {
      console.log('isChange')
    },
    tabAddr (provinceid, province) {
      this.addressOne = ''
      this.addressTwo = ''
      this.addressThree = ''
      this.addressOne = province
      this.API.allCity({proviceId: provinceid}).then(res => { this.cityList = res })
    },
    tabCity (city, cityid) {
      this.addressTwo = ''
      this.addressThree = ''
      this.addressTwo = city
      this.addressTwoId = cityid
      this.API.allAreas({cityId: cityid}).then(res => { this.countyList = res })
    },
    tabCounty (area, areaid) {
      this.addressThree = area
      this.addressThreeId = areaid
      this.destination = this.addressOne + this.addressTwo + this.addressThree
    }
  },
  watch: {
    '$route' () {
      let tem = this.$route.path.split('/')[2]
      tem === 'userCollectGoods' ? this.focusGoods = true : this.focusGoods = false
    }
  }
}

</script>
<style scoped>
  *{
    box-sizing: border-box;
  }
  .not-data {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
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
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .content-item-wrap {
  }
  .content-item-right {
    display: flex;
    align-items: center;
  }
  .content-item-right .btn-select{
    width:85px;
    height:27px;
    background:rgba(247,247,247,1);
    border:1px solid rgba(183,183,183,1);
    border-radius:3px;
    font-size:14px;
    font-family:SourceHanSansCN-Light;
    font-weight:300;
    color:rgba(105,105,105,1);
    margin: 0 12px;
  }
  .content-item-right span.select{
    display: flex;
    align-items: center;
    padding: 0 8px;
    height:27px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(183,183,183,1);
  }
  .content-item-right span.select> span{
    line-height: 27px;
    font-size: 12px;
  }
  .flow-addr {
    position: relative;
  }
  .content .content-top-item ul>li.choose {
    color: blue;
  }
  .addr-box {
    height: 0;
    overflow: hidden;
    position: absolute;
    background-color: #fff;
    z-index: 10;
    top: 26px;
    left: 0;
  }
  .addr-box .pro-box, .city-box, .county-box {
    min-width: 126px;
    height: 200px;
    font-size: 12px;
    border: 1px solid #ddd;
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
  }
  .flow-addr .addr-box ul.pro-box li, .flow-addr .addr-box ul.city-box li, .flow-addr .addr-box ul.county-box li {
    text-align: left;
    cursor: pointer;
    line-height: 28px;
    height: 28px;
  }
  .flow-addr:hover .addr-box{
    height: auto;
    display: flex;
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
    width:250px;
    height:366px;
    border:1px solid rgba(219,219,219,1);
    position: relative;
    margin-left: 14px;
  }
  li.goods-item:nth-child(4n+1){
    margin-left: 0;
  }
  li.goods-item:nth-child(n+5){
    margin-top: 63px;
  }
  .go-ul{
    display: flex;
    flex-wrap: wrap;
    padding-top: 23px;
  }
  .go-ul .goods-item>a img{
    width:248px;
  }
  .go-ul .goods-item .item-title{
    margin: 0 4px;
    width:240px;
    height: 30px;
    overflow : hidden;
    font-size:13px;
    font-family:SimSun;
    font-weight:400;
    color:rgba(105,105,105,1);
    line-height:16px;
  }
  .goodsList .goods-item .item-price{
    font-size:22px;
    color:rgba(230,0,0,1);
    margin: 10px 0 13px 5px;
  }
  .goodsList .goods-item .inform-operation{
    height:35px;
    border-top:1px solid rgba(219,219,219,1);
    line-height: 35px;
    text-align: center;
  }
  .goodsList .goods-item .inform-operation>a{
    width:49%;
    text-align: center;
  }
  .goodsList .goods-item .inform-operation>a:first-child{
    /*border-right:1px solid rgba(219,219,219,1);*/
  }
  .mask{
    width: 100%;
    /*height: 100%;*/
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }
  .mask-check{
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    font-size: 24px;
    position: absolute;
    right: 0px;
    top: 0px;
    width: 40px;
    height: 40px;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .select.mask-check{
    background-color: #e4393c;
  }
  .sto-ul{
    display: flex;
    flex-direction: column;
    padding: 0 14px;
    overflow: hidden;
  }
  .sto-li {
    display: flex;
  }
  .storeList .list-item{
    height:273px;
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
    flex-shrink: 0;
    flex-direction: column;
    align-items: center;
    border-right:1px solid rgba(232,232,232,1);
    position: relative;
  }
  .storeList .list-item{
    display: flex;
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
    margin: 10px 0 24px 26px;
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
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  li.store-item+li {
    margin-left: 8px;
  }
  .store-FirstItem{
    margin-left: 14px !important;
  }
 .store-item .storeItem-title{
    font-size:13px;
    color:rgba(49,49,49,1);
    margin-top: 5px;
    width: 151px;
    height: 15px;
    line-height: 15px;
   overflow : hidden;
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
