<template>
  <div>
    <div class="con-wrap">
      <div class="top">
        <div class="top_tab">
<<<<<<< HEAD
          <span class="has_pointer" :class="{topTabActive:focusGoods===true}" @click="changeActive(true, '/user/userCollectGoods')">商品关注</span>
          <span class="has_pointer" :class="{topTabActive:focusGoods===false}" @click="changeActive(false, '/user/userCollectShop')">店铺关注</span>
        </div>
        <div class="top_search">
          <input type="text" placeholder="请输入店铺名称" ref="search_val" v-model="val">
          <button class="has_pointer" @click="findShop(val)">搜索</button>
=======
          <span :class="{topTabActive:focusGoods===true}" @click="changeActive(true)">商品关注</span>
          <span :class="{topTabActive:focusGoods===false}" @click="changeActive(false)">店铺关注</span>
        </div>
        <div class="top_search">
          <input type="text" placeholder="请输入店铺名称">
          <button>搜索</button>
>>>>>>> remotes/origin/master
        </div>
      </div>
      <div class="content">
        <div class="content-top">
          <div class="content-top-item">
<<<<<<< HEAD
            <div class="content-item-wrap">
              <span class="wrap-title">分类：</span>
              <ul class="wrap-ul">
                <li class="topItemActive all-shops has_pointer">全部{{focusGoods ? '商品' : '店铺'}}</li>
                <li class="has_pointer" v-for="item in goodsCats" :key="item.id"  :data-typeId="item.typeId">{{item.name}}<span>({{item.icount}})</span></li>
              </ul>
            </div>
          </div >
          <div  class="content-top-item">
            <div class="content-item-wrap">
              <span class="wrap-title">筛选条件：</span>
              <ul>
                <li class="topItemActive has_pointer">不限</li>
                <li class="has_pointer" v-for="item in series" :key="item.id">{{item.name}}<span>({{item.num}})</span></li>
                <!-- <li class="has_pointer">降价<span>(1)</span></li>
                <li class="has_pointer">满减<span>(1)</span></li>
                <li class="has_pointer">优惠券<span>(1)</span></li>
                <li class="has_pointer">下架<span>(1)</span></li> -->
              </ul>
            </div>
            <div class="content-item-right">
              <el-checkbox v-model="checked" @change="isAll" v-if="isShow">全选</el-checkbox>
              <button class="btn-select has_pointer" v-if="isShow"  @click="delList()">取消关注</button>
              <button class="btn-select has_pointer" ref="set" @click="task()">批量操作</button>
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
            <li class="goods-item"  v-for="(goods, i) in goodsList.rows" :key='i' >
              <router-link :to="{path:'/detail', query:{goodsId: goods.goodsId}}"><img :src="goods.smallPic"></router-link>
              <p class="item-title">{{goods.goodsName}} </p>
              <p class="item-price">¥{{goods.price}}</p>
              <p class="inform-operation">
                <!-- <a>降价通知</a> -->
                <a class="has_pointer" @click="addCart(goods.skuId)">加入购物车</a>
              </p>
              <div class="cancel" @click="negative(goods.goodsId)" v-if="!isShow">取消关注</div>
              <div class="has_pointer mask" :class="{'show': isShow}" @click="toggle(goods.goodsId)">
                <div class="has_pointer mask-check" :class="{'select': isChoose.indexOf(goods.goodsId) >= 0}">
                  <i class="el-icon-check"></i>
                </div>
              </div>
            </li>
            <li class="goods-item not-data" v-if="!goodsList.total">
              你的收藏中没有相关的商品
            </li>
=======
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
>>>>>>> remotes/origin/master
          </ul>
        </div>
        <div class="storeList" v-show="focusGoods===false">
          <ul>
<<<<<<< HEAD
            <li class="list-item" v-for="(store, i) in temList" :key='i'>
              <div class="store-info">
                <!-- <img :src="store.shops.logoPic"> -->
                <a href="javascript:;"><img :src="store.shops.logoPic"></a>
=======
            <li class="list-item" v-for="(store,i) in temList" :key='i'>
              <div class="store-info">
                <img :src="store.shops.logoPic">
>>>>>>> remotes/origin/master
                <p class="store-title">{{store.shops.name}}</p>
                <el-rate v-model="starValue" disabled text-color="#FF9900" :colors="['#FF9900', '#FF9900', '#FF9900']"  class="store-star"></el-rate>
                <p class="etc">粉丝：<span class="ect-num">{{store.shops.sellerFans}}</span></p>
                <p class="contact-enter">
<<<<<<< HEAD
                  <a class="contact has_pointer" :href="(store.shops.linkmanQq && 'http://wpa.qq.com/msgrd?v=3&uin='+ store.shops.linkmanQq +'&site=qq&menu=yes') || 'javascript:;'" target="_blank" title="点此可以直接和卖家交流选好的宝贝，或相互交流网购体验。">联系店铺</a>
                  <router-link :to="{path: '/shops/home', query: {homeShops: store.shops.sellerId}}" class="enter has_pointer">进入店铺</router-link>
                </p>
                <div class="cancel" @click="negative(store.shops.sellerId)">取消关注</div>
              </div>
              <ul class="sto-ul">
                <div class="cell-product">
                   <a class="has_pointer cellProductActive">热销</a>
                   <a class="has_pointer">新品<span>(0)</span></a>
                 </div>
                <div class="sto-li">
                  <li class="store-item " v-if="storeGoods && i < 5" v-for="(storeGoods,i) in store.child" :key='i'>
                    <router-link :to="{path:'/detail', query:{goodsId: storeGoods.goodsId}}"><img :src="storeGoods.smallPic" class="has_pointer"></router-link>
                    <p class="storeItem-title">{{storeGoods.goodsName}}</p>
                    <p class="storeItem-price">¥{{storeGoods.price}}</p>
                  </li>
                </div>
              </ul>
              <div class="has_pointer mask" :class="{'show': isShow}" @click="toggle(store.shops.sellerId)">
                <div class="has_pointer mask-check" :class="{'select': isChoose.indexOf(store.shops.sellerId) >= 0}">
                  <i class="el-icon-check"></i>
                </div>
              </div>
            </li>
            <li class="list-item not-data" v-if="!storeList.total">
              你的收藏中没有相关的店铺
=======
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
>>>>>>> remotes/origin/master
            </li>
          </ul>
        </div>
        <div class="block">
<<<<<<< HEAD
          <el-pagination v-if="focusGoods && isGoodsPN"
            @current-change="handleCurrentChangeGoods"
            :current-page.sync="currentPage"
            :page-size="pageSize"
            layout="prev, pager, next, jumper"
            :total="goodsList.total">
          </el-pagination>
          <el-pagination v-else-if="!focusGoods && isStorePN"
            @current-change="handleCurrentChangeShops"
            :current-page.sync="currentPage"
            :page-size="pageSize"
            layout="prev, pager, next, jumper"
            :total="storeList.total">
=======
          <el-pagination
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size="2"
            layout="prev, pager, next, jumper"
            :total="4">
>>>>>>> remotes/origin/master
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
<<<<<<< HEAD
export default {
  data () {
    return {
      username: this.$cookies.get('user-key'), // 用户名
      focusGoods: true, // 商品关注or店铺关注？
      goodsList: {}, // 收藏宝贝列表
      goodsCats: [], // 收藏商品所属类
      storeList: {},
      temList: [], // 临时列表
      starValue: 5, // 评价星
      currentPage: 1, // 当前页码
      pageSize: 5, // 每页数  商品-8 店铺-5
      checked: false,
      addrOptions: [],
      addressOne: '',
      addressTwo: '',
      addressTwoId: '',
      addressThreeId: '',
      cityList: [],
      countyList: [],
      destination: '请选择',
      value: '',
      val: '',
      isShow: false,
      isChoose: [], // 选中删除的列表
      isSearch: false, // 判断是否来源于搜索
      series: []
    }
  },
  props: {},
  computed: {
    isGoodsPN () {
      let tem = false
      // 生命周期===> 是否获取到值了
      if (this.goodsList.hasOwnProperty('rows') && this.goodsList.rows.length) {
        tem = true
      }
      return tem
    },
    isStorePN () {
      let tem = false
      if (this.storeList.hasOwnProperty('rows') && this.storeList.rows.length) {
        tem = true
      }
      return tem
    }
  },
  mounted () {
    this.pageSize = 8
    this.requestGoods()
    this.pageSize = 5
    this.requestStore()
    let tem = this.$route.path.split('/')[2]
    if (tem === 'userCollectGoods') {
      this.focusGoods = true
      this.pageSize = 8
    } else {
      this.focusGoods = false
      this.pageSize = 5
    }
    // this.AJAX.get('/static/data/collectClass.json').then(res => {
    //   this.series = res.data
    // })
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
    // 初始化
    init () {
      this.currentPage = 1
      this.value = ''
      this.val = ''
      this.isShow = false
      this.isSearch = false
      this.$refs.set.innerHTML = '批量操作'
      this.checked = false
      this.isChoose = []
    },
    // 切换
    changeActive (val, path) {
      this.focusGoods = val
      // 初始化
      this.init()
      if (this.focusGoods) {
        this.pageSize = 8
        this.requestGoods()
      } else {
        this.pageSize = 5
        this.requestStore()
      }
      let queryList = this.$route.query
      this.$router.push({path: path, query: queryList})
      // this.AJAX.get('/static/data/collectClass.json').then(res => {
      //   this.series = res
      // })
    },
    request (sellerId, shops) {
      this.API.goodsBySeller({sellerId: sellerId}).then(res => {
        if (res.success === false) return false
        this.temList.push({child: res, shops: shops})
      })
    },
    handleCurrentChangeGoods (page) {
      // 判断是否搜索
      if (this.isSearch) this.findShop(this.value, page)
      else {
        this.requestGoods()
      }
    },
    handleCurrentChangeShops (page) {
      if (this.isSearch) this.findShop(this.value, page)
      else {
        this.requestStore()
      }
    },
    requestGoods () {
      this.API.userCollectType({typeId: 1, username: this.username, pageNum: this.currentPage, pageSize: this.pageSize}).then(res => {
        this.goodsList = res.pageResult || []
        this.goodsCats = res.itemCats || {}
        console.log('gzshangp', res)
=======
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
>>>>>>> remotes/origin/master
      })
    },
    requestStore () {
      this.temList = []
<<<<<<< HEAD
      this.API.userCollectType({typeId: 2, username: this.username, pageNum: this.currentPage, pageSize: this.pageSize}).then(res => {
        this.storeList = res
        console.log('gzdp', this.storeList)
        this.storeList.rows && this.storeList.rows.length && this.storeList.rows.forEach(item => {
          this.request(item.sellerId, item)
        })
      })
    },
    // 查询
    findShop (value, page = 1) {
      if (!value) return
      this.isSearch = true
      this.value = value
      if (this.focusGoods) {
        this.API.searchCollectGoods({username: this.username, keyword: this.value, pageNum: page, pageSize: this.pageSize}).then(res => {
          this.goodsList = res
          console.log(res, 'goods')
        })
      } else {
        this.temList = []
        this.API.searchCollectShops({username: this.username, keyword: this.value, pageNum: page, pageSize: this.pageSize}).then(res => {
          this.storeList = res
          this.storeList.rows.length && this.storeList.rows.forEach(item => {
            this.request(item.sellerId, item)
          })
        })
      }
    },
    // 删除 关注
    negative (id) {
      this.$confirm('不再关注该店铺, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.API.deleteCollect({userName: this.username, dataIds: id}).then(res => {
          if (res.success === false) {
            this.$message({
              type: 'fail',
              message: '删除失败!'
            })
            return
          }
          this.$message.success('成功取消关注')
          // 初始化 部分数据
          this.init()
          if (this.focusGoods) {
            this.requestGoods()
          } else {
            this.requestStore()
          }
        })
      }).catch(() => {})
    },
    // 批量操作
    task (event) {
      this.isShow = !this.isShow
      this.checked = false
      this.isChoose = []
      if (this.isShow) this.$refs.set.innerHTML = '完成'
      else this.$refs.set.innerHTML = '批量操作'
    },
    // 单个切换选中
    toggle (id) {
      if (this.isChoose.indexOf(id) >= 0) {
        this.$delete(this.isChoose, this.isChoose.indexOf(id))
        this.checked = false
      } else {
        this.isChoose.push(id)
        if (this.isChoose.length === this.storeList.rows.length) this.checked = true
      }
    },
    // 批量删除
    delList () {
      if (!this.isChoose.length) {
        this.$message({
          message: '请先勾选店铺哦'
        })
        return
      }
      let tem = this.isChoose.join(',')
      this.negative(tem)
    },
    // 全选
    isAll () {
      let data = this.focusGoods ? 'goodsList' : 'storeList'
      let id = this.focusGoods ? 'goodsId' : 'sellerId'
      if (this.checked) {
        this[data].rows.length && this[data].rows.forEach(item => {
          if (this.isChoose.indexOf(item[id]) === -1) this.isChoose.push(item[id])
        })
      } else this.isChoose = []
      console.log(this.isChoose)
    },
    // 加入购物车
    addCart (skuId, num = 1) {
      this.API.addToCart({itemId: skuId, num: num, name: this.username}).then(res => {
        if (res.success === false) {
          this.$message.error('加入购物车失败')
          return
        }
        this.$message.success('成功加入购物车')
        this.$store.dispatch('CART')
      })
    },
    // 地址
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
      if (tem === 'userCollectGoods') {
        this.focusGoods = true
        this.pageSize = 8
      } else {
        this.focusGoods = false
        this.pageSize = 5
      }
    },
    currentPage () {
      this.isShow = false
      this.checked = false
      this.isChoose = []
      this.$nextTick(() => {
        this.$refs.set.innerHTML = '批量操作'
=======
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
>>>>>>> remotes/origin/master
      })
    }
  }
}

</script>
<style scoped>
  *{
    box-sizing: border-box;
  }
<<<<<<< HEAD
  .has_pointer {
    cursor: pointer;
  }
  .not-data {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
  }
  .goodsList .goods-item.not-data{
    border: none;
  }
=======
>>>>>>> remotes/origin/master
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
<<<<<<< HEAD
    /*height:47px;*/
    border-bottom: 1px solid #E3E3E3;
    line-height: 47px;
    color:rgba(98,98,98,1);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .content-item-wrap {
    display: flex;
  }
  .wrap-title{
    flex-shrink: 0
  }
  .wrap-ul {
    display: flex;
    flex-wrap: wrap;
    padding: 10px 5px;
  }
  .content-item-right {
    flex-shrink: 0;
    display: flex;
    align-items: center;
  }
  .content-item-right .btn-select{
    padding: 0 12px;
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
=======
    height:47px;
    border-bottom: 1px solid #E3E3E3;
    line-height: 47px;
    color:rgba(98,98,98,1);
>>>>>>> remotes/origin/master
  }
  .content .content-top-item ul>li{
    height:22px;
    line-height: 22px;
<<<<<<< HEAD
    padding: 0 6px;
    margin: 2px 0;
=======
    padding: 0 5px 0 5px;
>>>>>>> remotes/origin/master
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
<<<<<<< HEAD
=======
    margin-left: 27px;
>>>>>>> remotes/origin/master
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
<<<<<<< HEAD
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
=======
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
>>>>>>> remotes/origin/master
    color:rgba(230,0,0,1);
    margin: 10px 0 13px 5px;
  }
  .goodsList .goods-item .inform-operation{
<<<<<<< HEAD
    height:30px;
    border-top:1px solid rgba(219,219,219,1);
    line-height: 30px;
    text-align: center;
=======
    height:35px;
    border-top:1px solid rgba(219,219,219,1);
    line-height: 35px;
>>>>>>> remotes/origin/master
  }
  .goodsList .goods-item .inform-operation>a{
    width:49%;
    text-align: center;
  }
  .goodsList .goods-item .inform-operation>a:first-child{
<<<<<<< HEAD
    /*border-right:1px solid rgba(219,219,219,1);*/
  }
  .mask{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: none;
  }
  .goods-item .mask.show, .list-item .mask.show {
    display: block;
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
=======
    border-right:1px solid rgba(219,219,219,1);
  }
  .storeList .list-item{
    height:273px;
    margin-top: 20px;
>>>>>>> remotes/origin/master
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
<<<<<<< HEAD
    flex-shrink: 0;
    flex-direction: column;
    align-items: center;
    border-right:1px solid rgba(232,232,232,1);
    position: relative;
  }
  .cancel {
    position: absolute;
    display: none;
    top: 0;
    left: 0;
    right: 0;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.4);
    color: white;
    cursor: pointer;
  }
  .goods-item:hover .cancel, .storeList .list-item .store-info:hover .cancel{
    display: block;
=======
    flex-direction: column;
    align-items: center;
>>>>>>> remotes/origin/master
  }
  .storeList .list-item{
    display: flex;
  }
<<<<<<< HEAD
  .storeList .list-item .store-info> a{
=======
  .storeList .list-item .store-info{
    border-right:1px solid rgba(232,232,232,1);
    position: relative;
  }
  .storeList .list-item .store-info>img{
>>>>>>> remotes/origin/master
    margin: 23px 0 13px 0;
    width:112px;
    height:112px;
  }
<<<<<<< HEAD
  .storeList .list-item .store-info> a img {
    max-width: 100%;
    max-height: 100%;
  }
=======
>>>>>>> remotes/origin/master
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
<<<<<<< HEAD
    display: flex;
=======
>>>>>>> remotes/origin/master
    position: absolute;
    bottom: 0;
    border-top: 1px solid rgba(232,232,232,1);
    line-height: 39px;
  }
  .storeList .list-item .store-info .contact-enter>a{
<<<<<<< HEAD
    width: 50%;
    text-align: center;
    box-sizing: border-box;
    color: #353535;
=======
    width:49%;
    text-align: center;
>>>>>>> remotes/origin/master
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
<<<<<<< HEAD
    margin: 10px 0 24px 26px;
=======
    position: absolute;
    top:13px;
    left:260px;
>>>>>>> remotes/origin/master
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
<<<<<<< HEAD
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  li.store-item+li {
    margin-left: 8px;
=======
    margin: 40px 0 0 15px;
>>>>>>> remotes/origin/master
  }
  .store-FirstItem{
    margin-left: 14px !important;
  }
 .store-item .storeItem-title{
    font-size:13px;
    color:rgba(49,49,49,1);
    margin-top: 5px;
    width: 151px;
<<<<<<< HEAD
    height: 15px;
    line-height: 15px;
   overflow : hidden;
  }
  .store-item> a>img{
    width:139px;
    height:139px;
    overflow: hidden;
=======
   text-overflow: ellipsis;
   overflow : hidden;
   display: -webkit-box;
   -webkit-line-clamp: 2;
   -webkit-box-orient: vertical;
  }
  .store-item>img{
    width:139px;
    height:139px;
>>>>>>> remotes/origin/master
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
