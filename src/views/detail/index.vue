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
                    <div class="video_play" v-if="goodsDesc.itemVedio" @click="playItemVideo()"><i class="el-icon-caret-right"></i></div>
                  </div>
                  <div id="m_big-box">
                    <img :src="currentImg">
                  </div>
                  <div class="video_box" v-if="goodsDesc.itemVedio" ref="videoBox">
                    <video preload="metadata" ref="mainVideo" @ended="videoEnd()" muted width="100%" height="100%" style="background-color: #fff;" :src="goodsDesc.itemVedio" controls></video>
                    <div class="video_close" @click="closeVideo()"><i class="el-icon-close"></i></div>
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
              <!-- <i class="el-icon-share"></i>
              <span class="has_pointer">分享</span> -->
              <i class="el-icon-star-on"></i>
              <span class="has_pointer" @click="toCollect($route.query.goodsId, 1)">关注</span>
            </div>
          </div>
          <div class="fr itemInfo-wrap">
            <div class="sku-name">
              <h4>{{goods.goodsName}}</h4>
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
                  <div class="flow-con" v-if="Object.keys(storeFlow).length">
                    {{storeFlow.sendAddress}}<b>至</b>
                    <span class="flow-addr">
                      <span>{{destination}}</span>
                      <i class="el-icon-arrow-down"></i>
                      <div class="addr-box">
                        <ul class="pro-box">
                          <li v-for="list in addrOptions" :key="list.id" :class="{'choose': addressOne === list.province}" @click="tabAddr(list.provinceid, list.province)">{{list.province}}</li>
                        </ul>
                        <!-- <ul class="city-box" v-if="addressOne">
                          <li v-for="data in cityList" :key="data.id" :class="{'choose': addressTwoId === data.cityid}" @click="tabCity(data.city, data.cityid)">{{data.city}}</li>
                        </ul> -->
                      </div>
                    </span>
                    <span class="flow-item">快递<span>¥{{flowPrice}}</span></span><!-- 发货速度：<span  class="flow-send-date">次日</span> -->
                  </div>
                  <div class="flow-con" v-else>
                    <span>免运费</span>
                  </div>
                </div>
              </div>
              <div class="summary-wrap">
                <div class="title">
                  <i>成交\评价</i>
                </div>
                <div class="success-order">
                  <el-rate v-model="starValue" disabled text-color="#FF4606" :colors="['#FF4606', '#FF4606', '#FF4606']" score-template="{value}"></el-rate>
                  <!-- <span class="time-suc time-suc">30天内<b>1212</b>个成交</span> -->
                  <span class="time-reco"><b>{{storeEvaluation.total}}</b>条评价</span>
                </div>
              </div>
            </div>
            <div class="choose">
              <ul class="summary-wrap">
                <li class="spec-list">
                  <div class="title"><i class="has_pointer">规格</i></div>
                  <ul>
                    <li v-for="list in skuList" :key="list.id" @click="selectSku=list; num=minNum; limitNum=list.num">
                      <a class="has_pointer" :class="{selected: selectSku === list }">{{list.model}}</a>
                    </li>
                  </ul>
                </li>
                <li class="spec-list" v-if="priceInterval.length">
                  <div class="title"><i class="has_pointer">起购量</i></div>
                  <ul>
                    <li v-for="list in priceInterval" :key="list.price">
                      <a class="limit_num">≥{{list.num}}{{unit}}&nbsp;&nbsp;单价:￥{{list.price}}</a>
                    </li>
                  </ul>
                </li>
                <li class="spec-list">
                  <div class="title"><i>数量</i></div>
                  <div class="control-group">
                    <div class="controls">
                      <input autocomplete="off" type="text" value="1" v-model="num" min="1" :max="num" class="itxt" @blur="NumBlur()"/>
                      <a class="increment plus" @click="addNum()"><i class="el-icon-plus has_pointer"></i></a>
                      <a class="increment mins" @click="delNum()"><i class="el-icon-minus has_pointer"></i></a>
                    </div>
                    <sub class="goodsANum">库存:{{limitNum}}</sub>
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
                <!-- <div class="buy-word">
                  <a class="sui-btn  btn-danger buyma"><img src="static/img/二维码.svg"><span>扫一扫购买</span><i class="el-icon-arrow-down"></i></a>
                </div> -->
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
                  <router-link :to="{path: '/detail', query: {goodsId: list.goodsId}}" target="_blank" class="lo-box-wrap"><img :src="list.pic" class="wrap"></router-link>
                  <h5>{{list.title}}</h5>
                  <span>￥{{list.price}}</span>
                </div>
              </li>
            </ul>
            <!-- <div>
              <i class="el-icon-arrow-up"></i>
              <i class="el-icon-arrow-down"></i>
            </div> -->
          </div>
        </div>
        <!-- <div class="recom">
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
        </div> -->
        <!--product-detail-->
        <div class=" product-detail">
          <div class="aside">
            <a class="shop-box">
              <router-link :to="{path: '/shops', query: {homeShops: sellerInfo.sellerId}}" class="has_pointer">{{sellerInfo.name}}</router-link><a :href="(sellerInfo.linkmanQq && 'http://wpa.qq.com/msgrd?v=3&uin='+ sellerInfo.linkmanQq +'&site=qq&menu=yes') || 'javascript:;'" target="_blank" title="点此可以直接和卖家交流选好的宝贝，或相互交流网购体验。"><img class="has_pointer has_customer" src="static/img/mk_search_link.png"></a>
            </a>
            <div class="shop-list">
              <div class="buy-word shops">
                <router-link :to="{path: '/shops', query: {homeShops: sellerInfo.sellerId}}" class="sui-btn  btn-danger"><img src="static/img/mk_search_comshop.png"><span class="has_pointer">进店逛逛</span></router-link>
              </div>
              <div class="buy-word shops">
                 <a class="sui-btn  btn-danger"><img src="static/img/mk_search_addshop.png"><span class="has_pointer" @click="toCollect(sellerInfo.sellerId, 2)">关注店铺</span></a>
              </div>
            </div>
            <section class="sui-nav nav-tabs tab-wraped">
              <div class="nav-li">
                <div class="nav-hot nav-shop has_pointer" :class='{activity_show: changeShowType ==="navShop"}' @click="changeShowType='navShop'">店铺热销</div>
                <!-- <div class="nav-hot nav-brand has_pointer" :class='{activity_show: changeShowType ==="navBrand"}' @click="changeShowType='navBrand'">推荐品牌</div> -->
              </div>
            </section>
            <transition>
              <section v-show="changeShowType ==='navShop'" class="navShop">
                <ul class="se-recom">
                  <li v-for="(list, index) in shopHotList" :key="list.id">
                    <div class="se-recom-box">
                      <router-link class="se-recom-a" :to="{path: '/detail', query: {goodsId: list.id}}" target="_blank">
                        <img :src="list.smallPic">
                      </router-link>
                      <div class="se-recom-item">
                        <p><span>{{index+1}}</span></p>
                        <p>¥{{list.priceShow}}</p>
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
                  <!-- <li class="tab-nav-li has_pointer"><a :class="{choosetab:'售后保障'===tabNav}"  @click="tab('售后保障', 'afterSale')">售后保障</a></li> -->
                </ul>
                <div class="buy-word se-add-cart">
                  <a class="sui-btn  btn-danger addshopcar" @click="submit()">加入购物车</a>
                </div>
              </div>
              <transition>
                <router-view :attrItem="attrItem" :goodsIntroduc="goodsIntroduc" :shopsVideo="goodsDesc.detailsVedio" :articleNumber="goodsDesc.articleNumber" :series="goodsDesc.series" :show3d="goodsDesc.show3d" :saleService="goodsDesc.saleService" :evaluationObj="evaluationObj" :scroll='scroll'></router-view>
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
    <!-- <div class="bottom-abs">
      <absBox :data="absBottomList" :indicator="'none'" :arrow="'never'" :interval="5000"></absBox>
    </div> -->
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
import { formatDate, debounce, guid } from '@/common/utils'
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
      selectSku: '', // 选择的sku
      submitSelect: [], // 提交选中的sku属性
      skuList: [], // 该商品的所有sku
      storeFlow: {}, // 运费信息
      flowPrice: 0, // 快递价格
      storeEvaluation: {}, // 评价信息
      evaluationObj: {}, // 评价列表
      num: 1,
      minNum: 1,
      limitNum: 0, // 限购
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
      destination: '广东',
      addressOne: '',
      addressTwo: '',
      addressTwoId: '',
      addrOptions: [],
      cityList: [],
      starValue: 5,
      scroll: {},
      addToCartSwicth: true,
      buyshopsSwicth: true,
      priceInterval: [], // 起售量价格区间
      unit: '个'
    }
  },
  components: { shortcut, headerNav, pageFooter, absBox, loginBox },
  computed: {
    ...mapState(['cartList'])
  },
  mounted () {
    // (?<city>[^市]+自治州|.*?地区|.*?行政单位|.+盟|市辖区|.*?市|.*?县)
    let routerChild = this.$route.path.split('/')[2]
    if (routerChild === 'review') {
      this.tabNav = '商品评价'
      this.getEvaList()
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
      this.storeFlow = rtn.goodsAll.tbSellerLogistics || {}
      this.storeEvaluation = rtn.goodsAll.goodsShowEvaluation || {}
      this.starValue = this.storeEvaluation.star / 2 || 5
      this.skuList = rtn.goodsAll.itemList || []
      this.selectSku = this.skuList[0]
      this.limitNum = this.selectSku.num
      // 单价随起售量变化
      if (this.goodsDesc.quoteType === '1') {
        this.priceInterval = JSON.parse(this.goodsDesc.priceInterval)
        // 计量单位 1套 2盒 3组 4件 5箱
        if (this.goods.unit === '1') this.unit = '套'
        else if (this.goods.unit === '2') this.unit = '盒'
        else if (this.goods.unit === '3') this.unit = '组'
        else if (this.goods.unit === '4') this.unit = '件'
        else if (this.goods.unit === '5') this.unit = '箱'
        else this.unit = '个'
        this.$set(this.selectSku, 'price', this.priceInterval[0].price)
        this.num = parseInt(this.priceInterval[0].num)
        this.minNum = parseInt(this.priceInterval[0].num)
      }
      this.API.getShopNew({ sellerId: this.sellerInfo.sellerId }).then(res => {
        this.shopHotList = res
      })
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
    // this.API.detailLook({ categoryId: 19 }).then(res => {
    //   this.shopHotList = res.contentList
    // })
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
    addNum () {
      if (this.num >= this.limitNum) {
        this.num = this.limitNum
        return false
      }
      this.num++
      debounce(() => {
        this.changeFlowPrice()
      }, 1000)
    },
    delNum () {
      if (this.num <= this.minNum) {
        this.num = this.minNum
        return false
      }
      this.num--
      debounce(() => {
        this.changeFlowPrice()
      }, 1000)
    },
    NumBlur () {
      if (this.num < this.minNum) this.num = this.minNum
    },
    // 加入购物车
    submit () {
      if (this.selectSku.id && this.addToCartSwicth) {
        this.addToCartSwicth = false
        if (this.$cookies.get('token')) { // 判断是否登陆
          if (this.num <= this.selectSku.num && this.num >= 1) {
            this.API.addToCart({ itemId: this.selectSku.id, num: this.num, name: this.$cookies.get('user-key') }).then(rtn => {
              if (rtn.success === false) {
                this.$message.error('加入购物车失败')
                return false
              }
              this.$message.success('成功加入购物车')
              this.$store.dispatch('CART')
              this.$router.push({path: '/addToCart', query: {skuId: this.selectSku.id, num: this.num}})
            })
          } else this.$message.warning('核对购买数量，商品限购：' + this.selectSku.num)
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
          if (this.num <= this.selectSku.num && this.num >= 1) {
            let lend = {}
            let lendArr = []
            lend.checked = 1
            lend.goodsId = this.selectSku.goodsId
            lend.itemId = this.selectSku.id
            lend.num = this.num
            lend.picPath = this.selectSku.image
            lend.price = this.selectSku.price
            lend.sellerId = this.selectSku.sellerId
            lend.title = this.selectSku.title
            lend.totalFee = (this.num * this.selectSku.price).toFixed(2)
            lendArr.push(lend)
            sessionStorage.setItem('selectList', JSON.stringify(lendArr))
            this.$router.push({path: '/getOrderInfo', query: {skuId: this.selectSku.id, num: this.num, ranGuNum: guid(), sellerName: this.sellerInfo.name}})
          } else this.$message.warning('核对购买数量，商品限购：' + this.selectSku.num)
        } else this.isMaskLogin = true
        this.buyshopsSwicth = true
      } else {
        if (!this.buyshopsSwicth) return false
        this.$message.info('请核对信息, 重新购买')
      }
    },
    // 唤醒客服
    customer () {
      console.log(10)
    },
    // 用户登陆
    userLogin () {
      this.isMaskLogin = false
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
      // 评价列表
      if (name === '商品评价') {
        this.getEvaList()
      }
    },
    // 切换省，显示市列表
    tabAddr (provinceid, province) {
      // this.addressOne = ''
      this.addressOne = province
      this.destination = province
      this.changeFlowPrice()
      // this.API.allCity({proviceId: provinceid}).then(res => {
      //   this.cityList = res
      // })
    },
    // 切换市
    // tabCity (city, cityid) {
    //   this.addressTwo = city
    //   this.addressTwoId = cityid
    //   this.destination = this.addressOne + this.addressTwo
    // },
    // 运费
    changeFlowPrice () {
      this.API.getFlowprice({ address: this.addressOne, goodsId: this.$route.query.goodsId, num: this.num }).then(res => {
        if (res === '请求成功，无返回值') {
          this.flowPrice = 0
          return false
        }
        this.flowPrice = res
      })
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
    },
    // 商品列表
    getEvaList () {
      this.API.getEvaluate({ page: 1, rows: 10000, spuId: this.$route.query.goodsId }).then(res => {
        this.evaluationObj = res
      })
    },
    playItemVideo () {
      this.$refs.mainVideo.play()
      this.$refs.videoBox.style.visibility = 'visible'
    },
    closeVideo () {
      this.$refs.mainVideo.currentTime = 0
      this.$refs.videoBox.style.visibility = 'hidden'
    },
    videoEnd () {
      this.$refs.videoBox.style.visibility = 'hidden'
    }
  },
  watch: {
    num (newNum) {
      for (let i = this.priceInterval.length - 1; i >= 0; i--) {
        if (newNum >= parseInt(this.priceInterval[i].num)) {
          this.$set(this.selectSku, 'price', this.priceInterval[i].price)
          break
        }
      }
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
  .shop-box .has_pointer {
    color: #333;
    text-align: left;
  }
  .has_customer {
    margin-left: 5px;
  }
  .limit_num {
    border: none !important;
  }
  .video_box {
    position: absolute;
    top: -1px;
    left: -1px;
    bottom: -1px;
    right: -1px;
    z-index: 10;
    visibility: hidden;
  }
  video:focus {
    outline: none;
  }
  .video_play, .video_close {
    position: absolute;
    left: 10px;
    bottom: 10px;
    z-index: 100;
    font-size: 36px;
    cursor: pointer;
    color: #404040;
    border: 2px solid #404040;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    line-height: 35px;
  }
  .video_close {
    left: initial;
    bottom: initial;
    font-size: 20px;
    top: 6px;
    right: 6px;
    color: #f5f5f5;
    background-color: #a0a0a0;
    width: 28px;
    height: 28px;
    line-height: 28px;
    border: none;
  }
</style>
