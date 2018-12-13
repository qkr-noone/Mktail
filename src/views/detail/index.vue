<template>
  <div id="detail-index">
    <shortcutHeader></shortcutHeader>
    <div class="py-container">
      <div id="item">
        <div class="crumb-wrap">
          <el-breadcrumb class="sui-breadcrumb">
            <el-breadcrumb-item v-for="item in cateList" :to="{ path: '/search' }" :data_value="item" :key="item">{{item}}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <!--product-info-->
        <div class="product-info">
          <div class="preview-wrap">
            <!--放大镜效果-->
            <div>
              <!--默认第一个预览-->
              <div id="preview" class="spec-preview">
                <span><img :src="currentImg" /></span>
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
          </div>
          <div class="fr itemInfo-wrap">
            <div class="sku-name">
              <h4>{{goods.goodsName}}</h4>
            </div>
            <div class="news" v-if="goods.caption"><span>{{goods.caption}}</span></div>
            <div class="summary">
              <div class="summary-wrap">
                <div class="fl title">
                  <i>价&nbsp;&nbsp;格</i>
                </div>
                <div class="price">
                  <i>¥</i>
                  <em>{{goods.price}}</em>
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
            <div class=" choose">
              <ul class="summary-wrap">
                <li class="spec-list" v-for="(data, index) in spec" :key="data[index]">
                  <div class="title"><i>{{data.attributeName}}</i></div>
                  <ul>
                    <li v-for="(list, tip) in data.attributeValue" :key="list" @click="selectSpec(index, tip)">
                      <a :class="{selected: selectArr[index] === tip }">{{list}}</a>
                    </li>
                  </ul>
                </li>
              </ul>
              <div id="all-add-buy" class="summary-wrap">
                <div class="fl title">
                  <div class="control-group">
                    <div class="controls">
                      <input autocomplete="off" type="text" value="1" v-model="num" min="1" :max="num" class="itxt" />
                      <a href="javascript:void(0)" class="increment plus" @click="addNum(limitNum)">+</a>
                      <a href="javascript:void(0)" class="increment mins" @click="delNum()">-</a>
                    </div>
                  </div>
                </div>
                <div class="buy-word">
                  <router-link :to="{ path: '/addToCart' }" target="_blank" class="sui-btn  btn-danger addshopcar">加入购物车</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--product-detail-->
        <div class=" product-detail">
          <div class=" aside">
            <el-tabs type="border-card" class="sui-nav nav-tabs tab-wraped">
              <el-tab-pane label="相关分类">
                <!-- <div id="index" class="tab-pane active">
                  <ul class="part-list unstyled">
                    <li>手机</li>
                    <li>手机壳</li>
                    <li>内存卡</li>
                    <li>Iphone配件</li>
                    <li>贴膜</li>
                    <li>手机耳机</li>
                    <li>移动电源</li>
                    <li>平板电脑</li>
                  </ul>
                  <ul class="goods-list unstyled">
                    <li>
                      <div class="list-wrap">
                        <div class="p-img">
                          <img src="../../../static/img/part01.png" />
                        </div>
                        <div class="attr">
                          <em>Apple苹果iPhone 6s (A1699)</em>
                        </div>
                        <div class="price">
                          <strong><em>¥</em><i>6088.00</i></strong>
                        </div>
                        <div class="operate">
                          <a href="javascript:void(0);" class="sui-btn btn-bordered">加入购物车</a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="list-wrap">
                        <div class="p-img">
                          <img src="../../../static/img/part02.png" />
                        </div>
                        <div class="attr">
                            <em>Apple苹果iPhone 6s (A1699)</em>
                        </div>
                        <div class="price">
                            <strong><em>¥</em><i>6088.00</i></strong>
                        </div>
                        <div class="operate">
                          <a href="javascript:void(0);" class="sui-btn btn-bordered">加入购物车</a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="list-wrap">
                        <div class="p-img">
                          <img src="../../../static/img/part03.png" />
                                </div>
                          <div class="attr">
                            <em>Apple苹果iPhone 6s (A1699)</em>
                          </div>
                          <div class="price">
                            <strong>
                                  <em>¥</em>
                                  <i>6088.00</i>
                                </strong>
                          </div>
                          <div class="operate">
                            <a href="javascript:void(0);" class="sui-btn btn-bordered">加入购物车</a>
                          </div>
                        </div>
                        <div class="list-wrap">
                          <div class="p-img">
                            <img src="../../../static/img/part02.png" />
                                </div>
                            <div class="attr">
                              <em>Apple苹果iPhone 6s (A1699)</em>
                            </div>
                            <div class="price">
                              <strong>
                                  <em>¥</em>
                                  <i>6088.00</i>
                                </strong>
                            </div>
                            <div class="operate">
                              <a href="javascript:void(0);" class="sui-btn btn-bordered">加入购物车</a>
                            </div>
                          </div>
                          <div class="list-wrap">
                            <div class="p-img">
                              <img src="../../../static/img/part03.png" />
                                </div>
                              <div class="attr">
                                <em>Apple苹果iPhone 6s (A1699)</em>
                              </div>
                              <div class="price">
                                <strong>
                                  <em>¥</em>
                                  <i>6088.00</i>
                                </strong>
                              </div>
                              <div class="operate">
                                <a href="javascript:void(0);" class="sui-btn btn-bordered">加入购物车</a>
                              </div>
                            </div>
                    </li>
                  </ul>
                </div> -->
              </el-tab-pane>
              <el-tab-pane label="推荐品牌">
                <div id="profile" class="tab-pane">
                  <p>推荐品牌</p>
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
          <div class="fr detail">
            <!-- <div class=" fitting">
              <h4 class="kt">选择搭配</h4>
              <div class="good-suits">
                <div class="fl master">
                  <div class="list-wrap">
                    <div class="p-img">
                      <img src="../../../static/img/l-m01.png" />
                    </div>
                    <em>￥5299</em>
                    <i>+</i>
                  </div>
                </div>
                <div class="fl suits">
                  <ul class="suit-list">
                    <li class="">
                      <div id="">
                        <img src="../../../static/img/dp01.png" />
                      </div>
                      <i>Feless费勒斯VR</i>
                      <label data-toggle="checkbox" class="checkbox-pretty">
                        <input type="checkbox"><span>39</span>
                      </label>
                    </li>
                    <li class="">
                      <div id="">
                        <img src="../../../static/img/dp02.png" />
                      </div>
                      <i>Feless费勒斯VR</i>
                      <label data-toggle="checkbox" class="checkbox-pretty">
                        <input type="checkbox"><span>50</span>
                      </label>
                    </li>
                    <li class="">
                      <div id=""><img src="../../../static/img/dp03.png" /></div>
                      <i>Feless费勒斯VR</i>
                      <label data-toggle="checkbox" class="checkbox-pretty">
                        <input type="checkbox"><span>59</span>
                      </label>
                    </li>
                    <li class="">
                      <div id=""><img src="../../../static/img/dp04.png" /></div>
                      <i>Feless费勒斯VR</i>
                      <label data-toggle="checkbox" class="checkbox-pretty">
                        <input type="checkbox"><span>99</span>
                      </label>
                    </li>
                  </ul>
                </div>
                <div class="fr result">
                  <div class="num">已选购0件商品</div>
                  <div class="price-tit"><strong>套餐价</strong></div>
                  <div class="price">￥5299</div>
                  <button class="sui-btn  btn-danger addshopcar">加入购物车</button>
                </div>
              </div>
            </div> -->
            <div class="tab-main intro">
              <el-tabs  v-model="activeName" type="border-card" class="sui-nav nav-tabs tab-wraped" style="display: block !important;">
                <el-tab-pane label="商品介绍" name="one">
                  <div class="tab-pane">
                    <div class="intro-detail" v-html="goodsIntroduc">
                      {{this.goodsIntroduc}}
                      <!-- <img v-for="item in goodsDesc.itemImages" :src="item.url" :key="item.url"> -->
                    </div>
                    <img src="../../../static/img/intro01.png" />
                    <img src="../../../static/img/intro02.png" />
                    <img src="../../../static/img/intro03.png" />
                  </div>
                </el-tab-pane>
                <el-tab-pane label="规格与包装" name="two">
                  <div class="tab-pane">
                    <ul class="goods-intro unstyled">
                      <li v-for="(item, index) in goodsDesc.packageList" :key="index">{{item}}</li>
                      <!-- <li v-for="item in JSON.parse(goodsDesc.customAttributeItems)" :key="item.text">{{item.text}}：{{item.value}}</li> -->
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
                    <p @click="threeDUrl('http://120.79.93.197/we1/')"><img src="../../../static/img/intro02.png" /></p>
                  </div>
                </el-tab-pane>
              </el-tabs>
              <div class=""></div>
            </div>
          </div>
          <!--like-->
          <!-- <div class="like">
            <h4 class="kt">猜你喜欢</h4>
            <div class="like-list">
              <ul class="yui3-g">
                <li class="yui3-u-1-6">
                  <div class="list-wrap">
                    <div class="p-img">
                      <img src="../../../static/img/itemlike01.png" />
                    </div>
                      <div class="attr">
                        <em>DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</em>
                      </div>
                      <div class="price">
                        <strong>
                    <em>¥</em>
                    <i>3699.00</i>
                  </strong>
                      </div>
                      <div class="commit">
                        <i class="command">已有6人评价</i>
                      </div>
                    </div>
                </li>
                <li class="yui3-u-1-6">
                  <div class="list-wrap">
                    <div class="p-img">
                      <img src="../../../static/img/itemlike02.png" />
                    </div>
                      <div class="attr">
                        <em>Apple苹果iPhone 6s/6s Plus 16G 64G 128G</em>
                      </div>
                      <div class="price">
                        <strong>
                    <em>¥</em>
                    <i>4388.00</i>
                  </strong>
                      </div>
                      <div class="commit">
                        <i class="command">已有700人评价</i>
                      </div>
                    </div>
                </li>
                <li class="yui3-u-1-6">
                  <div class="list-wrap">
                    <div class="p-img">
                      <img src="../../../static/img/itemlike03.png" />
                    </div>
                      <div class="attr">
                        <em>DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</em>
                      </div>
                      <div class="price">
                        <strong>
                    <em>¥</em>
                    <i>4088.00</i>
                  </strong>
                      </div>
                      <div class="commit">
                        <i class="command">已有700人评价</i>
                      </div>
                    </div>
                </li>
                <li class="yui3-u-1-6">
                  <div class="list-wrap">
                    <div class="p-img">
                      <img src="../../../static/img/itemlike04.png" />
                    </div>
                      <div class="attr">
                        <em>DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</em>
                      </div>
                      <div class="price">
                        <strong>
                    <em>¥</em>
                    <i>4088.00</i>
                  </strong>
                      </div>
                      <div class="commit">
                        <i class="command">已有700人评价</i>
                      </div>
                    </div>
                </li>
                <li class="yui3-u-1-6">
                  <div class="list-wrap">
                    <div class="p-img">
                      <img src="../../../static/img/itemlike05.png" />
                    </div>
                      <div class="attr">
                        <em>DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</em>
                      </div>
                      <div class="price">
                        <strong>
                    <em>¥</em>
                    <i>4088.00</i>
                  </strong>
                      </div>
                      <div class="commit">
                        <i class="command">已有700人评价</i>
                      </div>
                    </div>
                </li>
                <li class="yui3-u-1-6">
                  <div class="list-wrap">
                    <div class="p-img">
                      <img src="../../../static/img/itemlike06.png" />
                    </div>
                      <div class="attr">
                        <em>DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</em>
                      </div>
                      <div class="price">
                        <strong>
                    <em>¥</em>
                    <i>4088.00</i>
                  </strong>
                      </div>
                      <div class="commit">
                        <i class="command">已有700人评价</i>
                      </div>
                    </div>
                </li>
              </ul>
            </div>
          </div> -->
        </div>
        <div class="mask" v-show="is3Ding">
          <iframe class="mask_iframe" ref="threeDSrc"  frameborder="0" scrolling="no">
          </iframe>
          <div class="mask_close close_wrap">
            <i class="el-icon-close" @click="threeDclose"></i>
          </div>
        </div>
      </div>
    </div>
    <pageFooter></pageFooter>
  </div>
</template>
<script>
import shortcutHeader from '../../components/shortcutHeader'
import pageFooter from '../../components/pageFooter'
import { apiAxios } from '../../common/utils'
import { api } from '../../common/api'
export default {
  data () {
    return {
      currentImg: '',
      scroolListImg: '',
      is3Ding: false,
      activeName: 'one', // 详情参数选项卡
      goods: '',
      goodsDesc: '',
      chooseAttr: '', // 选择属性
      cateList: '',
      spec: [],
      selectArr: [], // 被选中的sku属性的id
      submitSelect: [], // 提交选中的sku属性
      skuList: [], // 该商品的所有sku
      num: 1,
      limitNum: 11, // 限购
      goodsIntroduc: '' // 商品介绍
    }
  },
  components: { shortcutHeader, pageFooter },
  created () {
    if (this.$route.query.goodsId.length > 20) {
      // 弹框  (不确定是否需要)
      this.$router.go(-1)
      return false
    }
    apiAxios.AxiosG({
      url: api.detailTest,
      params: { goodsId: this.$route.query.goodsId, skuId: this.$route.query.goodsId || '' }
    }, rtn => {
      let data = rtn.data
      if (data.success) {
        this.goods = data.data.goodsAll.goods
        this.goodsDesc = data.data.goodsAll.goodsDesc
        this.scroolListImg = JSON.parse(this.goodsDesc.itemImages)
        if (this.scroolListImg.length) {
          this.currentImg = this.scroolListImg[0].url
        }
        this.cateList = data.data.itemCatList
        this.goodsIntroduc = this.goodsDesc.introduction || ''
        this.spec = JSON.parse(this.goodsDesc.specificationItems)
        this.skuList = data.data.goodsAll.itemList
        console.log(this.skuList, this.spec, 11)
      } else {
        // 弹框
        // this.$router.go(-1)
      }
    })
  },
  mounted () {
  },
  methods: {
    scrollBig (imgUrl) {
      this.currentImg = imgUrl
    },
    threeDclose () {
      this.is3Ding = false
      return false
    },
    threeDUrl (threeDUrl) {
      this.is3Ding = true
      // console.log(threeDUrl, this.$refs.threeDSrc)
      this.$refs.threeDSrc.src = threeDUrl
      return false
    },
    addCart () {
    },
    selectSpec (index, tip) {
      this.selectArr[index] = tip
      this.$set(this.selectArr, index, tip)
      console.log(this.selectArr)
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
    }
  }
}

</script>
<style scoped>
@import "../../assets/css/detail/pages-item.css"
</style>
