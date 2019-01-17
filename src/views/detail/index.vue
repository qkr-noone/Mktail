<template>
  <div id="detail-index">
    <shortcut></shortcut>
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
              <!--默认第一个预览-->
              <div id="preview" class="spec-preview">
                <span>
                  <transition><img-zoom :src="currentImg" width="330" height="330" :bigsrc="currentImg" :configs="configs"></img-zoom></transition>
                  <!-- <pic-zoom :url="currentImg" :scale="2" :scroll="false"></pic-zoom> -->
                </span>
              </div>
              <!--下方的缩略图-->
              <div class="spec-scroll">
                <a class="prev" v-if="scroolListImg.length>5"><i class="el-icon-arrow-left"></i></a>
                <!--左右按钮-->
                <div class="items">
                  <ul ref="scroolUl">
                    <li v-for= "(img, index) in scroolListImg" :key="index" @mouseover="scrollBig(img.url)"><img :src="img.url" onmousemove="preview(this)" /></li>
                  </ul>
                </div>
                <a class="next" v-if="scroolListImg.length>5"><i class="el-icon-arrow-right"></i></a>
              </div>
            </div>
            <div class="collect">
              <i class="el-icon-share"></i>
              <span>分享</span>
              <i class="el-icon-star-on"></i>
              <span>关注</span>
            </div>
          </div>
          <div class="fr itemInfo-wrap">
            <div class="sku-name">
              <h4>{{selectSku.title}}</h4>
            </div>
            <div class="news" v-if="goods.caption"><span>{{goods.caption}}</span></div>
            <div class="summary">
              <div class="summary-wrap">
                <div class="fl title">
                  <i>价&nbsp;&nbsp;格</i>
                </div>
                <div class="price">
                  <i>¥</i>
                  <em>{{selectSku.price}}</em>
                  <!-- <span v-if="goods.caption">{{goods.caption}}</span> -->
                </div>
                <!-- <div class="fr remark">
                  <i>累计评价</i><em>612188</em>
                </div> -->
              </div>
              <!-- <div class="summary-wrap">
                <div class="fl title">
                  <i>促&nbsp;&nbsp;销</i>
                </div>
                <div class="fl fix-width">
                  <i class="red-bg">加价购</i>
                  <em class="t-gray">满999.00另加20.00元，或满1999.00另加30.00元，或满2999.00另加40.00元，即可在购物车换购热销商品</em>
                </div>
              </div> -->
            </div>
            <div class="support">
              <!-- <div class="summary-wrap">
                <div class="fl title">
                  <i>支&nbsp;&nbsp;持</i>
                </div>
                <div class="fl fix-width">
                  <em class="t-gray">以旧换新，闲置手机回收  4G套餐超值抢  礼品购</em>
                </div>
              </div> -->
              <!-- <div class="summary-wrap">
                <div class="fl title">
                  <i>配 送 至</i>
                </div>
                <div class="fl fix-width">
                  <em class="t-gray">满999.00另加20.00元，或满1999.00另加30.00元，或满2999.00另加40.00元，即可在购物车换购热销商品</em>
                </div>
              </div> -->
            </div>
            <div class="choose">
              <ul class="summary-wrap">
                <li class="spec-list" v-for="(data, index) in spec" :key="data[index]">
                  <div class="title"><i>{{data.attributeName}}</i></div>
                  <ul>
                    <li v-for="list in data.attributeValue" :key="list" @click="selectSpec(data.attributeName, list)">
                      <a :class="{selected: selectArr[data.attributeName] === list }">{{list}}</a>
                    </li>
                  </ul>
                </li>
                <li class="spec-list">
                  <div class="title"><i>数量</i></div>
                  <div class="control-group">
                    <div class="controls">
                      <input autocomplete="off" type="text" value="1" v-model="num" min="1" :max="num" class="itxt" />
                      <a class="increment plus" @click="addNum(limitNum)"><i class="el-icon-plus"></i></a>
                      <a class="increment mins" @click="delNum()"><i class="el-icon-minus"></i></a>
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
              <h4>博士旗舰店</h4><img src="static/img/mk_search_link.png">
            </div>
            <div class="shop-list">
              <div class="buy-word shops">
                <a class="sui-btn  btn-danger"><img src="static/img/mk_search_comshop.png"><span>进店逛逛</span></a>
              </div>
              <div class="buy-word shops">
                 <a class="sui-btn  btn-danger"><img src="static/img/mk_search_addshop.png"><span>关注店铺</span></a>
              </div>
            </div>
            <section class="sui-nav nav-tabs tab-wraped">
              <div class="nav-li">
                <div class="nav-hot nav-shop" :class='{activity_show: changeShowType ==="navShop"}' @click="changeShowType='navShop'">店铺热销</div>
                <div class="nav-hot nav-brand" :class='{activity_show: changeShowType ==="navBrand"}' @click="changeShowType='navBrand'">推荐品牌</div>
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
                  <li class="tab-nav-li"><a :class="{choosetab:'商品介绍'===tabNav}"  @click="tab('商品介绍', 'desciption')">商品介绍</a></li>
                  <li class="tab-nav-li" v-if="show3dStatus"><a :class="{choosetab:'3D展示'===tabNav}"  @click="tab('3D展示', '3D')">3D展示</a></li>
                  <li class="tab-nav-li"><a :class="{choosetab:'商品评价'===tabNav}"  @click="tab('商品评价', 'review')">商品评价</a></li>
                  <li class="tab-nav-li"><a :class="{choosetab:'售后保障'===tabNav}"  @click="tab('售后保障', 'afterSale')">售后保障</a></li>
                </ul>
                <div class="buy-word">
                  <a class="sui-btn  btn-danger addshopcar" @click="submit()">加入购物车</a>
                </div>
              </div>
              <transition>
                <router-view :attrItem="attrItem" :goodsIntroduc="goodsIntroduc" :show3d="goodsDesc.show3d" :saleService="goodsDesc.saleService"></router-view>
              </transition>
              <!-- <div class="tab-pane">
                <ul class="goods-intro unstyled">
                  <li v-for="item in attrItem" :key="item.text">{{item.text}}：{{item.value}}</li>
                </ul>
                <div class="intro-detail" v-html="goodsIntroduc">
                  {{goodsIntroduc}}
                </div>
              </div> -->
              <!-- <el-tabs  v-model="activeName" type="border-card" class="sui-nav nav-tabs tab-wraped" style="display: block !important;">
                <el-tab-pane label="规格与包装" name="two">
                  <div class="tab-pane">
                    <ul class="goods-intro unstyled">
                      <li v-for="(item, index) in goodsDesc.packageList" :key="index">{{item}}</li>
                      <li v-for="item in JSON.parse(goodsDesc.customAttributeItems)" :key="item.text">{{item.text}}：{{item.value}}</li>
                    </ul>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="售后保障" name="three">
                  <div class="tab-pane">
                    <p>{{goodsDesc.saleService}}</p>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="商品评价" name="four">
                  <div id="four" class="tab-pane">
                    <p>商品评价</p>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="3D展示" name="five">
                  <div id="five" class="tab-pane">
                    <p @click="threeDUrl('http://120.79.93.197/we1/')"><img src="static/img/intro02.png" /></p>
                  </div>
                </el-tab-pane>
              </el-tabs> -->
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
    <pageFooter></pageFooter>
    <div class="mask mask-login" v-show="isMaskLogin">
      <div class="is-login">
        <el-tabs type="border-card" class="sui-nav nav-tabs tab-wraped">
          <el-tab-pane label="扫描登录" >
            <div class="tab-pane">
              <img src="static/img/erweima.png" />
              <p>剩余事件60s</p>
            </div>
          </el-tab-pane>
          <el-tab-pane label="账户登录">
            <div class="tab-pane  active">
              <form class="sui-form" method="post">
                <div class="input-prepend">
                  <span class="add-on loginname"></span>
                  <input type="text" placeholder="邮箱/用户名/手机号" class="span2 input-xfat" v-model="username">
                </div>
                <div class="input-prepend"><span class="add-on loginpwd"></span>
                  <input type="password" placeholder="请输入密码" class="span2 input-xfat" v-model="password">
                </div>
                <div class="logined">
                  <a @click='userLogin' class="sui-btn btn-block btn-xlarge btn-danger">登&nbsp;&nbsp;录</a>
                </div>
              </form>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import shortcut from '../../components/shortcutHeader'
import headerNav from '../../components/headerNav'
import absBox from '../../components/absBox'
import pageFooter from '../../components/pageFooter'
// import PicZoom from 'vue-piczoom'
import imgZoom from 'vue2.0-zoom'
import { apiAxios, setStore } from '../../common/utils'
import { api } from '../../common/api'
export default {
  data () {
    return {
      configs: {
        width: 660,
        height: 450,
        maskWidth: 200,
        maskHeight: 200,
        maskColor: 'red',
        maskOpacity: 0.2
      },
      currentImg: '',
      scroolListImg: '',
      is3Ding: false,
      activeName: 'one', // 详情参数选项卡
      goods: '',
      goodsDesc: '',
      chooseAttr: '', // 选择属性
      cateList: '',
      spec: [],
      selectSku: '', // 选择的sku
      selectArr: '', // 被选中的sku属性、默认sku属性
      submitSelect: [], // 提交选中的sku属性
      skuList: [], // 该商品的所有sku
      num: 1,
      limitNum: 11, // 限购
      goodsIntroduc: '', // 商品介绍
      isMaskLogin: false,
      username: '',
      password: '',
      viewList: [], // 看了又看
      recomList: [], // 店长推荐
      absBottomList: [], // 底部广告
      shopHotList: [], // 店铺热销
      show3dStatus: 0, // 商品详情3D介绍状态
      attrItem: [], // 商品介绍属性列表
      tabNav: '商品介绍',
      changeShowType: 'navShop'
    }
  },
  components: { shortcut, headerNav, pageFooter, absBox, imgZoom },
  computed: {
    ...mapState(['cartList'])
  },
  created () {
    if (this.$route.query.goodsId.length > 20) {
      // 弹框  (不确定是否需要)
      this.$router.go(-1)
      return false
    }
  },
  activated () {},
  deactivated () {
    this.$destroy()
  },
  mounted () {
    apiAxios.AxiosG({
      url: api.detailTest,
      params: { goodsId: this.$route.query.goodsId, skuId: this.$route.query.skuId || '' }
    }, rtn => {
      let data = rtn.data
      if (data.success) {
        this.goods = data.data.goodsAll.goods
        this.show3dStatus = data.data.show3dStatus
        this.goodsDesc = data.data.goodsAll.goodsDesc
        this.attrItem = JSON.parse(this.goodsDesc.customAttributeItems)
        this.scroolListImg = JSON.parse(this.goodsDesc.itemImages)
        if (this.scroolListImg.length) {
          this.currentImg = this.scroolListImg[0].url
        }
        this.cateList = data.data.itemCatList
        this.goodsIntroduc = this.goodsDesc.introduction || ''
        this.spec = JSON.parse(this.goodsDesc.specificationItems)
        this.skuList = data.data.goodsAll.itemList
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
            if (data.data.goodsAll.goods.defaultItemId === value.id) {
              this.selectArr = JSON.parse(value.spec)
              this.selectSku = value
              break
            }
          }
        }
      } else {
        // 弹框
        // this.$router.go(-1)
      }
    })
    // 看了又看
    apiAxios.AxiosG({
      url: api.detailLook,
      params: { categoryId: 17 }
    }, res => {
      let data = res.data
      if (data.success) {
        this.viewList = data.data.contentList
      }
    })
    // 店长推荐
    apiAxios.AxiosG({
      url: api.detailLook,
      params: { categoryId: 18 }
    }, res => {
      let data = res.data
      if (data.success) {
        this.recomList = data.data.contentList
      }
    })
    // 店铺热销
    apiAxios.AxiosG({
      url: api.detailLook,
      params: { categoryId: 19 }
    }, res => {
      let data = res.data
      if (data.success) {
        this.shopHotList = data.data.contentList
      }
    })
    // 底部广告
    apiAxios.AxiosG({
      url: api.detailLook,
      params: { categoryId: 20 }
    }, res => {
      let data = res.data
      if (data.success) {
        this.absBottomList = data.data.contentList
      }
    })
  },
  methods: {
    ...mapMutations([
      'setCartList'
    ]),
    scrollBig (imgUrl) {
      this.currentImg = imgUrl
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
    addCart () {
    },
    selectSpec (attr, val) {
      this.selectArr[attr] = val
      this.$set(this.selectArr, attr, val)
      this.searchSku()
    },
    addNum (limitNum) {
      if (limitNum) {
        if (limitNum === this.num) {
          // 弹框
          return false
        }
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
    submit () {
      if (this.selectSku.id) {
        if (this.$cookies.get('user-key')) { // 判断是否登陆
          apiAxios.AxiosG({
            url: api.addToCart,
            params: { itemId: this.selectSku.id, num: this.num, name: this.$cookies.get('user-key') }
          }, rtn => {
            if (rtn.data.success) {
              this.$message.success('成功加入购物车')
              this.$router.push({path: '/addToCart', query: {skuId: this.selectSku.id, num: this.num}})
            } else {
              this.$message.error('加入购物车失败')
            }
          })
        } else {
          this.isMaskLogin = true
        }
      } else {
        this.$message.info('请核对信息, 重新加入')
      }
    },
    buyShops () {
      if (this.selectSku.id) {
        if (this.$cookies.get('user-key')) { // 判断是否登陆
          for (let val of this.skuList) {
            if (val.id === this.selectSku.id) {
              let lend = {}
              let lendArr = []
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
              setStore('selectList', lendArr)
              this.$router.push({path: '/getOrderInfo', query: {skuId: this.selectSku.id, num: this.num}})
              break
            }
          }
        } else {
          this.isMaskLogin = true
        }
      } else {
        this.$message.info('请核对信息, 重新购买')
      }
    },
    userLogin () {
      if (this.$cookies.get('user-key')) {
        this.$message.error('当前设备已登陆，切换用户需先退出当前用户')
        return false
      }
      if (!this.username || !this.password) {
        this.$message.warning('请输入用户名和密码')
        return false
      }
      apiAxios.AxiosG({
        url: api.login,
        params: {name: this.username, password: this.password}
      }, rtn => {
        if (rtn.data.success) {
          this.$message.success('登陆成功')
          this.$cookies.set('user-key', this.username)
          this.isMaskLogin = false
          this.password = ''
        } else {
          this.$message.error(rtn.data.message)
          this.password = ''
        }
      })
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
    tab (name, path) {
      let queryList = this.$route.query
      this.$router.push({path: '/detail/' + path, query: queryList})
      this.tabNav = name
    }
  },
  watch: {}
}

</script>
<style scoped>
@import "../../assets/css/detail/pages-item.css"
</style>
