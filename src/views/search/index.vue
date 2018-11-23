<template>
  <div id="search-index">
    <div>23232</div>
    <!--list-content-->
    <div class="main">
      <div class="py-container">
        <!--bread-->
        <div class="bread">
          <ul class="fl sui-breadcrumb">
            <li>
              <a href="#">搜索条件：</a>
            </li>
          </ul>
          <ul class="tags-choose">
            <!-- <li class="tag" ng-if="searchMap.category!=''" ng-click="removeSearchItem('category')">商品分类：{{searchMap.category}}<i class="sui-icon icon-tb-close"></i></li>
          <li class="tag" ng-if="searchMap.brand!=''" ng-click="removeSearchItem('brand')">品牌：{{searchMap.brand}}<i class="sui-icon icon-tb-close"></i></li>
          <li class="tag" ng-repeat="(key,value) in searchMap.spec" ng-click="removeSearchItem(key)">{{key}}：{{value}}<i class="sui-icon icon-tb-close"></i></li>
          <li class="tag" ng-if="searchMap.price!=''" ng-click="removeSearchItem('price')">价格：{{searchMap.price}}<i class="sui-icon icon-tb-close"></i></li>
          搜索结果：{{resultMap.total}}条 -->
          </ul>
          <div class="clearfix"></div>
        </div>
        <!--selector-->
        <div class="clearfix selector">
          <div class="type-wrap" ng-if="resultMap.categoryList!=null && searchMap.category=='' ">
            <div class="fl key">商品分类</div>
            <div class="fl value">
              <span ng-repeat="category in resultMap.categoryList" >
               <!-- <a href="#" ng-click="addSearchItem('category',category)">{{category}}</a> -->
            </span>
            </div>
            <div class="fl ext"></div>
          </div>
          <div class="type-wrap logo" ng-if="resultMap.brandList!=null && searchMap.brand=='' && keywordsIsBrand()==false">
            <div class="fl key brand">品牌</div>
            <div class="value logos">
              <ul class="logo-list">
                <li ng-repeat="brand in resultMap.brandList">
                  <!-- <a href="#" ng-click="addSearchItem('brand',brand.text)">{{brand.text}}</a> -->
                </li>
              </ul>
            </div>
            <div class="ext">
              <a href="javascript:void(0);" class="sui-btn">多选</a>
              <a href="javascript:void(0);">更多</a>
            </div>
          </div>
          <div class="type-wrap" ng-repeat="spec in resultMap.specList" ng-if="searchMap.spec[spec.text]==null">
            <!-- <div class="fl key">{{spec.text}}</div> -->
            <div class="fl value">
              <ul class="type-list">
                <li ng-repeat="option in spec.options">
                  <!-- <a href="#" ng-click="addSearchItem(spec.text,option.optionName)">{{option.optionName}}</a> -->
                </li>
              </ul>
            </div>
            <div class="fl ext"></div>
          </div>
          <div class="type-wrap" ng-if="searchMap.price=='' ">
            <div class="fl key">价格</div>
            <div class="fl value">
              <ul class="type-list">
                <li>
                  <a href="#" ng-click="addSearchItem('price','0-500')">0-500元</a>
                </li>
                <li>
                  <a href="#" ng-click="addSearchItem('price','500-1000')">500-1000元</a>
                </li>
                <li>
                  <a href="#" ng-click="addSearchItem('price','1000-1500')">1000-1500元</a>
                </li>
                <li>
                  <a href="#" ng-click="addSearchItem('price','1500-2000')">1500-2000元</a>
                </li>
                <li>
                  <a href="#" ng-click="addSearchItem('price','2000-3000')">2000-3000元 </a>
                </li>
                <li>
                  <a href="#" ng-click="addSearchItem('price','3000-*')">3000元以上</a>
                </li>
              </ul>
            </div>
            <div class="fl ext">
            </div>
          </div>
          <div class="type-wrap">
            <div class="fl key">更多筛选项</div>
            <div class="fl value">
              <ul class="type-list">
                <li>
                  <a>特点</a>
                </li>
                <li>
                  <a>系统</a>
                </li>
                <li>
                  <a>手机内存 </a>
                </li>
                <li>
                  <a>单卡双卡</a>
                </li>
                <li>
                  <a>其他</a>
                </li>
              </ul>
            </div>
            <div class="fl ext">
            </div>
          </div>
        </div>
        <!--details-->
        <div class="details">
          <div class="sui-navbar">
            <div class="navbar-inner filter">
              <ul class="sui-nav">
                <li class="active">
                  <a href="#" ng-click="sortSearch('','')">综合</a>
                </li>
                <li>
                  <a href="#">销量</a>
                </li>
                <li>
                  <a href="#" ng-click="sortSearch('updatetime','DESC')">新品</a>
                </li>
                <li>
                  <a href="#">评价</a>
                </li>
                <li>
                  <a href="#" ng-click="sortSearch('price','ASC')">价格↑</a>
                </li>
                <li>
                  <a href="#" ng-click="sortSearch('price','DESC')">价格↓</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="goods-list">
            <ul class="yui3-g">
              <li style="width: 240px; height: 466px; position: relative;">
                <div class="p-list" style="padding: 12px 9px; width: 220px; position: absolute;z-index: 1; left: 0; top: 0;backgrond:#fff; border: 1px solid #fff; transition:border-color 0.1s ease">
                  <div class="p-img" style="margin-bottom: 5px; width: 220px; padding:0;position: relative;">
                    <a href="" target="_blank" style="display: block;position: relative;overflow: hidden;" title="热销推荐！厂家直销，脚轮全系列！！
                    ①转椅脚轮、牛眼轮等单轮系列；
                    ②精美小脚轮，1.5寸~4寸，单只承重28~55kg；
                    ③4寸/5寸/6寸/8寸重型工业脚轮，单只承重250~320kg；
                    ④日式重型尼龙轮，单只承重600kg；
                    【家具脚轮】【医用脚轮】【工业脚轮】【重型脚轮】应有尽有，详情可咨询客服！！
                    【稳定长期采购，可享专属折扣价】"><img style="width: 220px; height: 220px;" src="../../../static/img/fur_class.png" /></a>
                  </div>
                  <div class="p-scroll">
                    <span class="ps-prev"><i class="el-icon-arrow-left"></i></span>
                    <span class="ps-next"><i class="el-icon-arrow-right"></i></span>
                    <div class="ps-wrap">
                      <ul class="ps-main">
                        <li class="ps-item">
                          <a href="" class="curr" title=""><img src="../../../static/img/phone.png" data-sku="" data-lazy-img="" width="25" height="25"></a>
                        </li>
                        <li class="ps-item">
                          <a href="" class="curr" title=""><img src="../../../static/img/phone.png" data-sku="" data-lazy-img="" width="25" height="25"></a>
                        </li>
                        <li class="ps-item">
                          <a href="" class="curr" title=""><img src="../../../static/img/phone.png" data-sku="" data-lazy-img="" width="25" height="25"></a>
                        </li>
                        <li class="ps-item">
                          <a href="" class="curr" title=""><img src="../../../static/img/phone.png" data-sku="" data-lazy-img="" width="25" height="25"></a>
                        </li>
                        <li class="ps-item">
                          <a href="" class="curr" title=""><img src="../../../static/img/phone.png" data-sku="" data-lazy-img="" width="25" height="25"></a>
                        </li>
                        <li class="ps-item">
                          <a href="" class="curr" title=""><img src="../../../static/img/phone.png" data-sku="" data-lazy-img="" width="25" height="25"></a>
                        </li>
                        <li class="ps-item">
                          <a href="" class="curr" title=""><img src="../../../static/img/phone.png" data-sku="" data-lazy-img="" width="25" height="25"></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="p-price">
                    <strong>
                      <em>¥</em>
                      <i>33333</i>
                    </strong>
                  </div>
                  <div class="p-attr">
                    <a>
                      <em>寸/6寸/8寸重型工业脚轮，单只承重250~320kg；式工业脚轮，单只承重250~320kg；式重型尼</em>
                    </a>
                  </div>
                  <div class="p-commit">
                    <strong><a target="_blank" >1000+</a>条评价</strong>
                  </div>
                  <div class="p-focus">
                    <a class="J_focus" data-sku="10947521008" href="javascript:;" title="点击关注"><i class="el-icon-star-off"></i>关注</a>
                  </div>
                  <div class="p-shop" data-selfware="0" data-score="0" data-reputation="99" data-verderid="594052" data-done="1">
                    <span class="J_im_icon"><a target="_blank" title="天惠电气专营店">天惠电气专营店</a><b class="im-01" title="联系客服"><i class="el-icon-service"></i></b></span>
                  </div>
                  <div class="p-icons" id="J_pro_10947521008" data-done="1">
                      <i class="goods-icons2 J-picon-tips" data-tips="退换货免运费">险</i>
                  </div>
                  <span class="p-promo-flag">广告</span>
                  <img>
                </div>
              </li>
            </ul>
          </div>
          <div class="fr page">
            <div class="sui-pagination pagination-large">
              <!-- <ul>
              <li class="prev {{isTopPage()?'disabled':''}}">
                <a href="#" ng-click="queryByPage(searchMap.pageNo-1)">«</a>
              </li>
              <li class="dotted" ng-if="firstDot==true"><span>...</span></li>
              <li ng-repeat="page in pageLabel">
                <a href="#" ng-click="queryByPage(page)">{{page}}</a>
              </li>
              <li class="dotted" ng-if="lastDot==true"><span>...</span></li>
              <li class="next {{isEndPage()?'disabled':''}}">
                <a href="#" ng-click="queryByPage(searchMap.pageNo+1)">»</a>
              </li>
            </ul> -->
              <!-- <div><span>共{{resultMap.totalPages}}页&nbsp;</span><span> -->
              到第
              <!-- <input type="text" class="page-num" ng-model="searchMap.pageNo">页<button class="page-confirm" ng-click="queryByPage(searchMap.pageNo)">确定</button></span> -->
            </div>
          </div>
        </div>
      </div>
      <!--hotsale-->
      <div class="clearfix hot-sale">
        <h4 class="title">热卖商品</h4>
        <div class="hot-list">
          <ul class="yui3-g">
            <li class="yui3-u-1-4">
              <div class="list-wrap">
                <div class="p-img">
                  <img src="img/like_01.png" />
                </div>
                  <div class="attr">
                    <em>Apple苹果iPhone 6s (A1699)</em>
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
            <li class="yui3-u-1-4">
              <div class="list-wrap">
                <div class="p-img">
                  <img src="img/like_03.png" />
                </div>
                  <div class="attr">
                    <em>金属A面，360°翻转，APP下单省300！</em>
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
            <li class="yui3-u-1-4">
              <div class="list-wrap">
                <div class="p-img">
                  <img src="img/like_04.png" />
                </div>
                  <div class="attr">
                    <em>256SSD商务大咖，完爆职场，APP下单立减200</em>
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>4068.00</i>
                    </strong>
                  </div>
                  <div class="commit">
                    <i class="command">已有20人评价</i>
                  </div>
                </div>
            </li>
            <li class="yui3-u-1-4">
              <div class="list-wrap">
                <div class="p-img">
                  <img src="img/like_02.png" />
                </div>
                  <div class="attr">
                    <em>Apple苹果iPhone 6s (A1699)</em>
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
  </div>
</template>
<script>
import { apiAxios } from '../../common/utils'
export default {
  data () {
    return {}
  },
  created () {
    apiAxios.Axios({
      url: '/test/getGoods/item'
    }, (rtn) => {
      if (rtn.data.success === true) {
        console.log(rtn.data)
      }
    })
  }
}

</script>
<style scoped>
@import "../../assets/css/search/search.css";
</style>
