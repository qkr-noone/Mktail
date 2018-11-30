<template>
  <div id="detail-index">
    <shortcutHeader></shortcutHeader>
    <div class="py-container">
      <div id="item">
        <div class="crumb-wrap">
          <ul class="sui-breadcrumb">
            <li>
              <a href="#">手机、数码、通讯</a>
            </li>
            <li>
              <a href="#">手机</a>
            </li>
            <li>
              <a href="#">Apple苹果</a>
            </li>
            <li class="active">iphone 6S系类</li>
          </ul>
        </div>
        <!--product-info-->
        <div class="product-info">
          <div class="fl preview-wrap">
            <!--放大镜效果-->
            <div class="zoom">
              <!--默认第一个预览-->
              <div id="preview" class="spec-preview">
                <span class="jqzoom"><img @click="threeDUrl('http://120.79.93.197/we1/')" :src="currentImg" /></span>
              </div>
              <!--下方的缩略图-->
              <div class="spec-scroll">
                <a class="prev">&lt;</a>
                <!--左右按钮-->
                <div class="items">
                  <ul>
                    <li v-for= "img in scroolListImg" :key="img.index" @mouseover="scrollBig(img.url)"><img :src="img.url" onmousemove="preview(this)" /></li>
                  </ul>
                </div>
                <a class="next">&gt;</a>
              </div>
            </div>
          </div>
          <div class="fr itemInfo-wrap">
            <div class="sku-name">
              <h4>Apple iPhone 6s（A1700）64G玫瑰金色 移动通信电信4G手机</h4>
            </div>
            <div class="news"><span>推荐选择下方[移动优惠购],手机套餐齐搞定,不用换号,每月还有花费返</span></div>
            <div class="summary">
              <div class="summary-wrap">
                <div class="fl title">
                  <i>价&nbsp;&nbsp;格</i>
                </div>
                <div class="fl price">
                  <i>¥</i>
                  <em>5299.00</em>
                  <span>降价通知</span>
                </div>
                <div class="fr remark">
                  <i>累计评价</i><em>612188</em>
                </div>
              </div>
              <div class="summary-wrap">
                <div class="fl title">
                  <i>促&nbsp;&nbsp;销</i>
                </div>
                <div class="fl fix-width">
                  <i class="red-bg">加价购</i>
                  <em class="t-gray">满999.00另加20.00元，或满1999.00另加30.00元，或满2999.00另加40.00元，即可在购物车换购热销商品</em>
                </div>
              </div>
            </div>
            <div class="support">
              <div class="summary-wrap">
                <div class="fl title">
                  <i>支&nbsp;&nbsp;持</i>
                </div>
                <div class="fl fix-width">
                  <em class="t-gray">以旧换新，闲置手机回收  4G套餐超值抢  礼品购</em>
                </div>
              </div>
              <div class="summary-wrap">
                <div class="fl title">
                  <i>配 送 至</i>
                </div>
                <div class="fl fix-width">
                  <em class="t-gray">满999.00另加20.00元，或满1999.00另加30.00元，或满2999.00另加40.00元，即可在购物车换购热销商品</em>
                </div>
              </div>
            </div>
            <div class=" choose">
              <div id="specification" class="summary-wrap ">
                <dl>
                  <dt>
                    <div class="fl title">
                      <i>选择颜色</i>
                    </div>
                  </dt>
                  <dd><a href="javascript:;" class="selected">金色<span title="点击取消选择">&nbsp;</span></a></dd>
                  <dd><a href="javascript:;">银色</a></dd>
                  <dd><a href="javascript:;">黑色</a></dd>
                </dl>
                <dl>
                  <dt>
                    <div class="fl title">
                      <i>内存容量</i>
                    </div>
                  </dt>
                  <dd><a href="javascript:;" class="selected">16G<span title="点击取消选择">&nbsp;</span></a></dd>
                  <dd><a href="javascript:;">64G</a></dd>
                  <dd><a href="javascript:;" class="locked">128G</a></dd>
                </dl>
                <dl>
                  <dt>
                    <div class="fl title">
                      <i>选择版本</i>
                    </div>
                  </dt>
                  <dd><a href="javascript:;" class="selected">公开版<span title="点击取消选择">&nbsp;</span></a></dd>
                  <dd><a href="javascript:;">移动版</a></dd>
                </dl>
                <dl>
                  <dt>
                    <div class="fl title">
                      <i>购买方式</i>
                    </div>
                  </dt>
                  <dd><a href="javascript:;" class="selected">官方标配<span title="点击取消选择">&nbsp;</span></a></dd>
                  <dd><a href="javascript:;">移动优惠版</a></dd>
                  <dd><a href="javascript:;"  class="locked">电信优惠版</a></dd>
                </dl>
                <dl>
                  <dt>
                    <div class="fl title">
                      <i>套&nbsp;&nbsp;装</i>
                    </div>
                  </dt>
                  <dd><a href="javascript:;" class="selected">保护套装<span title="点击取消选择">&nbsp;</span></a></dd>
                  <dd><a href="javascript:;"  class="locked">充电套装</a></dd>
                </dl>
              </div>
              <div id="all-add-buy" class="summary-wrap">
                <div class="fl title">
                  <div class="control-group">
                    <div class="controls">
                      <input autocomplete="off" type="text" value="1" minnum="1" class="itxt" />
                      <a href="javascript:void(0)" class="increment plus">+</a>
                      <a href="javascript:void(0)" class="increment mins">-</a>
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
          <div class="fl aside">
            <el-tabs type="border-card" class="sui-nav nav-tabs tab-wraped">
              <el-tab-pane label="相关分类">
                <div id="index" class="tab-pane active">
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
                </div>
              </el-tab-pane>
              <el-tab-pane label="推荐品牌">
                <div id="profile" class="tab-pane">
                  <p>推荐品牌</p>
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
          <div class="fr detail">
            <div class=" fitting">
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
            </div>
            <div class="tab-main intro">
              <el-tabs type="border-card" class="sui-nav nav-tabs tab-wraped" style="display: block !important;">
                <el-tab-pane label="商品介绍">
                  <div id="one" class="tab-pane">
                    <ul class="goods-intro unstyled">
                      <li>分辨率：1920*1080(FHD)</li>
                      <li>后置摄像头：1200万像素</li>
                      <li>前置摄像头：500万像素</li>
                      <li>核 数：其他</li>
                      <li>频 率：以官网信息为准</li>
                      <li>品牌： Apple</li>
                      <li>商品名称：APPLEiPhone 6s Plus</li>
                      <li>商品编号：1861098</li>
                      <li>商品毛重：0.51kg</li>
                      <li>商品产地：中国大陆</li>
                      <li>热点：指纹识别，Apple Pay，金属机身，拍照神器</li>
                      <li>系统：苹果（IOS）</li>
                      <li>像素：1000-1600万</li>
                      <li>机身内存：64GB</li>
                    </ul>
                    <div class="intro-detail">
                      <img src="../../../static/img/intro01.png" />
                      <img src="../../../static/img/intro02.png" />
                      <img src="../../../static/img/intro03.png" />
                    </div>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="规格与包装">
                  <div id="two" class="tab-pane">
                    <p>规格与包装</p>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="售后保障">
                  <div id="three" class="tab-pane">
                    <p>售后保障</p>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="商品评价">
                  <div id="four" class="tab-pane">
                    <p>商品评价</p>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="手机社区">
                  <div id="five" class="tab-pane">
                    <p>手机社区</p>
                  </div>
                </el-tab-pane>
              </el-tabs>
              <div class=""></div>
            </div>
          </div>
          <!--like-->
          <div class="like">
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
          </div>
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
    <Footer></Footer>
  </div>
</template>
<script>
import shortcutHeader from '../../components/shortcutHeader'
import Footer from '../../components/footer'
export default {
  data () {
    return {
      currentImg: '../../../static/img/s1.png',
      scroolListImg: [
        { index: 1, url: '../../../static/img/s1.png' },
        { index: 2, url: '../../../static/img/s2.png' },
        { index: 3, url: '../../../static/img/s3.png' },
        { index: 4, url: '../../../static/img/s1.png' },
        { index: 5, url: '../../../static/img/s2.png' },
        { index: 6, url: '../../../static/img/s3.png' },
        { index: 7, url: '../../../static/img/s1.png' },
        { index: 8, url: '../../../static/img/s2.png' },
        { index: 9, url: '../../../static/img/s3.png' }
      ],
      is3Ding: false
    }
  },
  components: { shortcutHeader, Footer },
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
    }
  }
}

</script>
<style scoped>
@import "../../assets/css/detail/pages-item.css"
</style>
