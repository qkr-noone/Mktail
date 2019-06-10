<template>
  <div id="detail-index">
    <shortcut id="top"></shortcut>
    <headerNav></headerNav>
    <div class="py-container">
      <div id="item">
        <!-- <div class="crumb-wrap">
          <el-breadcrumb class="sui-breadcrumb">
            <el-breadcrumb-item v-for="item in cateList" :to="{ path: '/search' }" :data_value="item" :key="item">{{item}}</el-breadcrumb-item>
          </el-breadcrumb>
        </div> -->
        <!--product-info-->
        <div class="product-info">
          <div class="preview-wrap">
            <!--放大镜效果-->
            <div>
              <div id="preview" class="spec-preview">
                <section id="m_demo">
                  <div id="m_small-box">
                    <!-- 兼容IE  多一个遮罩层 -->
                    <div id="m_mark"></div>
                    <div id="m_float-box"></div>
                    <img :src="currentImg">
                  </div>
                  <div id="m_big-box">
                    <img :src="currentImg">
                  </div>
                </section>
              </div>
              <!--下方的缩略图-->
              <div class="spec-scroll">
                <a class="prev" v-if="scroolListImg.length>5" href="javascript:;" @click="imgPrev"><i class="el-icon-arrow-left"></i></a>
                <!--左右按钮-->
                <div class="items">
                  <ul ref="scroolUl">
                    <li class="has_pointer" v-for= "(img, index) in scroolListImg" :key="index" @mouseover="scrollBig(img.url)"><img :class="{'man_choose': currentImg === img.url}" :src="img.url"/></li>
                  </ul>
                </div>
                <a class="next" v-if="scroolListImg.length>5" href="javascript:;" @click="imgNext"><i class="el-icon-arrow-right"></i></a>
              </div>
            </div>
            <div class="collect">
              <i class="el-icon-share"></i>
              <span class="has_pointer">分享</span>
              <i class="el-icon-star-on"></i>
              <span class="has_pointer" @click="toCollect($route.query.goodsId, 1)">关注</span>
            </div>
          </div>
          <div class="fr itemInfo-wrap">
            <div class="sku-name">
              <h4>{{selectSku.title}}</h4>
            </div>
            <div class="news" v-if="goods.caption"><span>{{goods.caption}}</span></div>
            <div class="summary">
              <div class="sum-price-box">
                <div class="title">
                  <i>价&nbsp;&nbsp;格</i>
                </div>
                <div class="price">
                  <i>¥</i>
                  <em>{{selectSku.price}}</em>
                </div>
              </div>
            </div>
            <div class="support">
              <div class="summary-wrap">
                <div class="title flow">
                  <i>物流</i>
                </div>
                <div class="flow-box">
                  <div class="flow-con">
                    广东广州<b>至</b>
                    <span class="flow-addr">
                      <span>{{destination}}</span>
                      <i class="el-icon-arrow-down"></i>
                      <div class="addr-box">
                        <ul class="pro-box">
                          <li v-for="list in addrOptions" :key="list.id" :class="{'choose': addressOne === list.province}" @click="tabAddr(list.provinceid, list.province)">{{list.province}}</li>
                        </ul>
                        <ul class="city-box" v-if="addressOne">
                          <li v-for="data in cityList" :key="data.id" :class="{'choose': addressTwoId === data.cityid}" @click="tabCity(data.city, data.cityid)">{{data.city}}</li>
                        </ul>
                      </div>
                    </span>
                    <span class="flow-item">快递<span>¥6</span></span>发货速度：<span  class="flow-send-date">次日</span>
                  </div>
                </div>
              </div>
              <div class="summary-wrap">
                <div class="title">
                  <i>成交\评价</i>
                </div>
                <div class="success-order">
                  <el-rate v-model="starValue" disabled text-color="#FF4606" :colors="['#FF4606', '#FF4606', '#FF4606']" score-template="{value}"></el-rate>
                  <span class="time-suc">30天内<b>1212</b>个成交</span>
                  <span class="time-reco"><b>250</b>条评价</span>
                </div>
              </div>
            </div>
            <div class="choose">
              <ul class="summary-wrap">
                <li class="spec-list" v-for="(data, index) in spec" :key="data[index]">
                  <div class="title"><i class="has_pointer">{{data.attributeName}}</i></div>
                  <ul>
                    <li v-for="list in data.attributeValue" :key="list" @click="selectSpec(data.attributeName, list)">
                      <a class="has_pointer" :class="{selected: selectArr[data.attributeName] === list }">{{list}}</a>
                    </li>
                  </ul>
                </li>
                <li class="spec-list">
                  <div class="title"><i>数量</i></div>
                  <div class="control-group">
                    <div class="controls">
                      <input autocomplete="off" type="text" value="1" v-model="num" min="1" :max="num" class="itxt" />
                      <a class="increment plus" @click="addNum(limitNum)"><i class="el-icon-plus has_pointer"></i></a>
                      <a class="increment mins" @click="delNum()"><i class="el-icon-minus has_pointer"></i></a>
                    </div>
                  </div>
                </li>
              </ul>
              <div class="summary-wrap submit-form">
                <div class="buy-word">
                  <a class="sui-btn  btn-danger addshopcar" @click="submit()">加入购物车</a>
                </div>
                <div class="buy-word">
                  <a class="sui-btn  btn-danger buyshops" @click="buyShops()">立即购买</a>
                </div>
                <div class="buy-word">
                  <a class="sui-btn  btn-danger buyma"><img src="static/img/二维码.svg"><span>扫一扫购买</span><i class="el-icon-arrow-down"></i></a>
                </div>
              </div>
            </div>
            <div class="box-tip">
              <p>温馨提示·支持7天无理由退货</p>
            </div>
          </div>
          <div class="se-look">
            <div class="look-title">
              <span class="lo-line"></span>
              <h4>看了又看</h4>
              <span class="lo-line"></span>
            </div>
            <ul class="look-box">
              <li class="lo-box-li" v-for="list in viewList" :key="list.id">
                <div class="lo-box-con">
                  <router-link :to="{path: '/detail', query: {goodsId: list.goodsId}}" class="lo-box-wrap"><img :src="list.pic" class="wrap"></router-link>
                  <h5>{{list.title}}</h5>
                  <span>￥{{list.price}}</span>
                </div>
              </li>
            </ul>
            <div>
              <i class="el-icon-arrow-up"></i>
              <i class="el-icon-arrow-down"></i>
            </div>
          </div>
        </div>
        <div class="recom">
          <div class="recom-title">
            <h3>店长推荐</h3>
          </div>
          <div class="recom-box">
            <ul class="recom-ul">
              <li class="recom-li" v-for="list in recomList" :key="list.id">
                <div class="recom-de">
                  <router-link :to="{path: '/detail', query: {goodsId:list.goodsId}}" class="recom-de-a">
                    <img class="wrap" :src="list.pic">
                  </router-link>
                  <h5 class="recom-de-price">¥{{list.price}}</h5>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!--product-detail-->
        <div class=" product-detail">
          <div class="aside">
            <div class="shop-box">
              <h4 class="has_pointer">{{sellerInfo.nickName}}</h4><img src="static/img/mk_search_link.png">
            </div>
            <div class="shop-list">
              <div class="buy-word shops">
                <a class="sui-btn  btn-danger"><img src="static/img/mk_search_comshop.png"><span class="has_pointer">进店逛逛</span></a>
              </div>
              <div class="buy-word shops">
                 <a class="sui-btn  btn-danger"><img src="static/img/mk_search_addshop.png"><span class="has_pointer" @click="toCollect(sellerInfo.sellerId, 2)">关注店铺</span></a>
              </div>
            </div>
            <section class="sui-nav nav-tabs tab-wraped">
              <div class="nav-li">
                <div class="nav-hot nav-shop has_pointer" :class='{activity_show: changeShowType ==="navShop"}' @click="changeShowType='navShop'">店铺热销</div>
                <div class="nav-hot nav-brand has_pointer" :class='{activity_show: changeShowType ==="navBrand"}' @click="changeShowType='navBrand'">推荐品牌</div>
              </div>
            </section>
            <transition>
              <section v-show="changeShowType ==='navShop'" class="navShop">
                <ul class="se-recom">
                  <li v-for="(list, index) in shopHotList" :key="list.id">
                    <div class="se-recom-box">
                      <router-link class="se-recom-a" :to="{path: '/detail', query: {goodsId: list.goodsId}}">
                        <img :src="list.pic">
                      </router-link>
                      <div class="se-recom-item">
                        <p><span>{{index+1}}</span>热销144255件</p>
                        <p>¥{{list.price}}</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </section>
            </transition>
             <transition>
              <section v-show="changeShowType ==='navBrand'" class="navBrand">
                ...
              </section>
            </transition>
          </div>
          <div class="fr detail">
            <div class="tab-main intro">
              <div class="tab-nav">
                <ul>
                  <li class="tab-nav-li has_pointer"><a :class="{choosetab:'商品介绍'===tabNav}"  @click="tab('商品介绍', 'desciption')">商品介绍</a></li>
                  <li class="tab-nav-li has_pointer" v-if="show3dStatus"><a :class="{choosetab:'3D展示'===tabNav}"  @click="tab('3D展示', '3D')">3D展示</a></li>
                  <li class="tab-nav-li has_pointer"><a :class="{choosetab:'商品评价'===tabNav}"  @click="tab('商品评价', 'review')">商品评价</a></li>
                  <li class="tab-nav-li has_pointer"><a :class="{choosetab:'售后保障'===tabNav}"  @click="tab('售后保障', 'afterSale')">售后保障</a></li>
                </ul>
                <div class="buy-word se-add-cart">
                  <a class="sui-btn  btn-danger addshopcar" @click="submit()">加入购物车</a>
                </div>
              </div>
              <transition>
                <router-view :attrItem="attrItem" :goodsIntroduc="goodsIntroduc" :show3d="goodsDesc.show3d" :saleService="goodsDesc.saleService" :scroll='scroll'></router-view>
              </transition>
            </div>
          </div>
        </div>
        <!-- <div class="mask" v-show="is3Ding">
          <iframe class="mask_iframe" ref="threeDSrc"  frameborder="0" scrolling="no">
          </iframe>
          <div class="mask_close close_wrap">
            <i class="el-icon-close" @click="threeDclose"></i>
          </div>
        </div> -->
      </div>
    </div>
    <div class="bottom-abs">
        <absBox :data="absBottomList" :indicator="'none'" :arrow="'never'" :interval="5000"></absBox>
      </div>
    <pageFooter id="bottom"></pageFooter>
    <!-- 登陆 -->
    <div class="mask mask-login" v-show="isMaskLogin">
      <div class="is-login">
        <loginBox style="width: 380px" @loginAfter="userLogin()"></loginBox>
        <div class="closeUser" @click="isMaskLogin = false">
          <i class="el-icon-error"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import shortcut from '@/components/shortcutHeader'
import headerNav from '@/components/headerNav'
import absBox from '@/components/absBox'
import pageFooter from '@/components/pageFooter'
import loginBox from '@/components/loginBox'
import { setStore, formatDate } from '@/common/utils'
export default {
  data () {
    return {
      currentImg: '',
      scroolListImg: [],
      is3Ding: false,
      activeName: 'one', // 详情参数选项卡
      goods: '',
      sellerInfo: {},
      goodsDesc: '',
      chooseAttr: '', // 选择属性
      cateList: [],
      spec: [],
      selectSku: '', // 选择的sku
      selectArr: '', // 被选中的sku属性、默认sku属性
      submitSelect: [], // 提交选中的sku属性
      skuList: [], // 该商品的所有sku
      num: 1,
      limitNum: 11, // 限购
      goodsIntroduc: '', // 商品介绍
      isMaskLogin: false,
      viewList: [], // 看了又看
      recomList: [], // 店长推荐
      absBottomList: [], // 底部广告
      shopHotList: [], // 店铺热销
      show3dStatus: 0, // 商品详情3D介绍状态
      attrItem: [], // 商品介绍属性列表
      tabNav: '商品介绍',
      changeShowType: 'navShop',
      destination: '请选择',
      addressOne: '',
      addressTwo: '',
      addressTwoId: '',
      addrOptions: [],
      cityList: [],
      starValue: 5,
      scroll: {},
      addToCartSwicth: true,
      buyshopsSwicth: true
    }
  },
  components: { shortcut, headerNav, pageFooter, absBox, loginBox },
  computed: {
    ...mapState(['cartList'])
  },
  mounted () {
    let routerChild = this.$route.path.split('/')[2]
    if (routerChild === 'review') {
      this.tabNav = '商品评价'
    } else if (routerChild === 'afterSale') {
      this.tabNav = '售后保障'
    } else if (routerChild === '3D') {
      this.tabNav = '3D展示'
    } else {
      this.tabNav = '商品介绍'
    }
    this.API.detailTest({ goodsId: this.$route.query.goodsId, skuId: this.$route.query.skuId || '' }).then(rtn => {
      if (rtn.success === false) {
        // this.$router.go(-1)
        // return false
      }
      this.goods = rtn.goodsAll.goods
      this.sellerInfo = rtn.sellerInfo
      this.show3dStatus = rtn.show3dStatus
      this.goodsDesc = rtn.goodsAll.goodsDesc
      this.attrItem = JSON.parse(this.goodsDesc.customAttributeItems) || []
      this.scroolListImg = JSON.parse(this.goodsDesc.itemImages) || []
      if (this.scroolListImg.length) {
        this.currentImg = this.scroolListImg[0].url
      }
      this.cateList = rtn.itemCatList || []
      this.goodsIntroduc = this.goodsDesc.introduction || ''
      this.spec = JSON.parse(this.goodsDesc.specificationItems) || []
      this.skuList = rtn.goodsAll.itemList || []
      if (this.$route.query.skuId) {
        for (let value of this.skuList) {
          if (String(this.$route.query.skuId) === String(value.id)) {
            this.selectArr = JSON.parse(value.spec)
            this.selectSku = value
            break
          }
        }
      } else {
        for (let value of this.skuList) {
          if (rtn.goodsAll.goods.defaultItemId === value.id) {
            this.selectArr = JSON.parse(value.spec)
            this.selectSku = value
            break
          }
        }
      }
    })
    // 看了又看
    this.API.detailLook({ categoryId: 17 }).then(res => {
      this.viewList = res.contentList
    })
    // 店长推荐
    this.API.detailLook({ categoryId: 18 }).then(res => {
      this.recomList = res.contentList
    })
    // 店铺热销
    this.API.detailLook({ categoryId: 19 }).then(res => {
      this.shopHotList = res.contentList
    })
    // 底部广告
    this.API.detailLook({ categoryId: 20 }).then(res => {
      this.absBottomList = res.contentList
    })
    // 配送至
    this.API.allProvince().then(res => {
      this.addrOptions = res
      this.addrOptions.forEach((ele, index) => {
        if (ele.province === '黑龙江省' || ele.province === '内蒙古自治区') {
          this.$set(this.addrOptions[index], 'province', ele.province.substring(0, 3))
        } else this.$set(this.addrOptions[index], 'province', ele.province.substring(0, 2))
      })
    })
    this.magnifier()
  },
  methods: {
    // 切换主图
    scrollBig (imgUrl) {
      this.currentImg = imgUrl
    },
    imgPrev () {
      let temDom = this.$refs.scroolUl
      if (temDom.offsetLeft >= 0) return false
      temDom.style.left = (temDom.offsetLeft + 68) + 'px'
    },
    imgNext () {
      let temDom = this.$refs.scroolUl
      if (temDom.offsetWidth <= 266 - temDom.offsetLeft) return false
      temDom.style.left = (temDom.offsetLeft - 68) + 'px'
    },
    threeDclose () {
      this.is3Ding = false
      return false
    },
    threeDUrl (threeDUrl) {
      this.is3Ding = true
      this.$refs.threeDSrc.src = threeDUrl
      return false
    },
    selectSpec (attr, val) {
      this.selectArr[attr] = val
      this.$set(this.selectArr, attr, val)
      this.searchSku()
    },
    addNum (limitNum) {
      if (limitNum) {
        if (limitNum === this.num) return false
      }
      this.num++
    },
    delNum () {
      if (this.num === 1) { // 限制最小数量
        // 弹框
        return false
      }
      this.num--
    },
    // 加入购物车
    submit () {
      if (this.selectSku.id && this.addToCartSwicth) {
        this.addToCartSwicth = false
        if (this.$cookies.get('token')) { // 判断是否登陆
          this.API.addToCart({ itemId: this.selectSku.id, num: this.num, name: this.$cookies.get('user-key') }).then(rtn => {
            if (rtn.success === false) {
              this.$message.error('加入购物车失败')
              return false
            }
            this.$message.success('成功加入购物车')
            this.$store.dispatch('CART')
            this.$router.push({path: '/addToCart', query: {skuId: this.selectSku.id, num: this.num}})
          })
        } else this.isMaskLogin = true
        this.addToCartSwicth = true
      } else {
        if (!this.addToCartSwicth) return false
        this.$message.info('请核对信息, 重新加入')
      }
    },
    // 立即购买
    buyShops () {
      if (this.selectSku.id && this.buyshopsSwicth) {
        this.buyshopsSwicth = false
        if (this.$cookies.get('token')) { // 判断是否登陆
          for (let val of this.skuList) {
            if (val.id === this.selectSku.id) {
              let lend = {}
              let lendArr = []
              let timestamp = new Date().getTime()
              lend.checked = 1
              lend.goodsId = val.goodsId
              lend.itemId = val.id
              lend.num = this.num
              lend.picPath = val.image
              lend.price = val.price
              lend.sellerId = val.sellerId
              lend.spec = val.spec
              lend.title = val.title
              lend.totalFee = (this.num * val.price).toFixed(2)
              lendArr.push(lend)
              setStore('selectList' + timestamp, lendArr)
              this.$router.push({path: '/getOrderInfo', query: {skuId: this.selectSku.id, num: this.num, random: timestamp, sellerName: 'sellerName'}})
              break
            }
          }
        } else this.isMaskLogin = true
        this.buyshopsSwicth = true
      } else {
        if (!this.buyshopsSwicth) return false
        this.$message.info('请核对信息, 重新购买')
      }
    },
    // 用户登陆
    userLogin () {
      this.isMaskLogin = false
    },
    // 根据规格查询sku
    searchSku () {
      for (let i = 0; i < this.skuList.length; i++) {
        if (this.matchObject(JSON.parse(this.skuList[i].spec), this.selectArr)) {
          this.selectSku = this.skuList[i]
          return false
        }
      }
    },
    // 匹配两个对象是否相等
    matchObject (map1, map2) {
      for (let k in map1) {
        if (map1[k] !== map2[k]) {
          return false
        }
      }
      return true
    },
    // 切换 商品规格、评价、售后保障
    tab (name, path) {
      let queryList = this.$route.query
      this.scroll = { scrollTop: document.documentElement.scrollTop }
      Object.assign(queryList, this.scroll)
      this.$router.push({path: '/detail/' + path, query: queryList})
      this.tabNav = name
    },
    // 切换省，显示市列表
    tabAddr (provinceid, province) {
      // this.addressOne = ''
      this.addressOne = province
      this.API.allCity({proviceId: provinceid}).then(res => {
        this.cityList = res
      })
    },
    // 切换市
    tabCity (city, cityid) {
      this.addressTwo = city
      this.addressTwoId = cityid
      this.destination = this.addressOne + this.addressTwo
    },
    // 纯js 放大镜
    magnifier () {
      let demo = document.getElementById('m_demo')
      let smallBox = document.getElementById('m_small-box')
      let mark = document.getElementById('m_mark')
      let floatBox = document.getElementById('m_float-box')
      let bigBox = document.getElementById('m_big-box')
      let bigBoxImage = bigBox.getElementsByTagName('img')[0]

      // 2.鼠标移入时，显示
      mark.onmouseover = function () {
        floatBox.style.display = 'block'
        bigBox.style.display = 'block'
      }

      // 3.鼠标移出时，隐藏
      mark.onmouseout = function () {
        floatBox.style.display = 'none'
        bigBox.style.display = 'none'
      }

      // 4.鼠标在里面移动时
      mark.onmousemove = function (ev) {
        // 兼用 浏览器
        let _event = ev || window.event

        // 偏移量
        let left = _event.clientX - demo.offsetLeft - smallBox.offsetLeft - floatBox.offsetWidth / 2
        let top = _event.clientY - demo.offsetTop - smallBox.offsetTop - floatBox.offsetHeight / 2

        // 判断其是否超出
        if (left < 0) {
          left = 0
        } else if (left > (mark.offsetWidth - floatBox.offsetWidth)) {
          left = mark.offsetWidth - floatBox.offsetWidth
        }
        if (top < 0) {
          top = 0
        } else if (top > (mark.offsetHeight - floatBox.offsetHeight)) {
          top = mark.offsetHeight - floatBox.offsetHeight
        }

        floatBox.style.left = left + 'px'
        floatBox.style.top = top + 'px'

        // 公式计算 小图与大图成比例
        let percentX = left / (mark.offsetWidth - floatBox.offsetWidth)
        let percentY = top / (mark.offsetHeight - floatBox.offsetHeight)

        // 小图方向与大图方向相反
        bigBoxImage.style.left = -percentX * (bigBoxImage.offsetWidth - bigBox.offsetWidth) + 'px'
        bigBoxImage.style.top = -percentY * (bigBoxImage.offsetHeight - bigBox.offsetHeight) + 'px'
      }
    },
    // 收藏
    toCollect (id, type) {
      let tip = type === 1 ? '商品' : '店铺'
      if (this.$cookies.get('token')) {
        let tem = {
          userName: this.$cookies.get('user-key'),
          dataId: id, // "商品ID或者店铺ID"
          type: type, // 1商品关注、2店铺关注
          addTime: formatDate(new Date())
        }
        this.API.addCollect(tem).then(res => {
          if (res.success === false) {
            this.$message.warning(res.message)
            return
          }
          if (res === '请求成功，无返回值') {
            this.$message.warning(`当前${tip}已经收藏了，请勿重复操作`)
          } else if (res === true) {
            this.$message.success(`成功关注该${tip}`)
          }
        })
      } else this.isMaskLogin = true
    }
  }
}
</script>
<style scoped>
  @import "../../assets/css/detail/pages-item.css";
  #detail-index > * {
    padding-left: calc(100vw - 100%)
  }
  #top{
    background-color: #ececec;
  }
  #bottom {
    background-color: #f5f5f5;
  }
  .has_pointer {
    cursor: pointer;
  }
</style>
