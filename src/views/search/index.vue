<template>
  <div id="search-index">
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
          <li class="tag" ng-if="searchMap.brand!=''" ng-click="removeSearchItem('brand')">品牌：<i class="sui-icon icon-tb-close"></i></li>
          <li class="tag" ng-repeat="(key,value) in searchMap.spec" ng-click="removeSearchItem(key)">五金工具：<i class="sui-icon icon-tb-close"></i></li>
          <li class="tag" ng-if="searchMap.price!=''" ng-click="removeSearchItem('price')">材质：<i class="sui-icon icon-tb-close"></i></li>
          搜索结果：{{searchList.total}}条
          </ul>
          <div class="clearfix"></div>
        </div>
        <!--selector-->
        <div class="clearfix selector">
          <div class="type-wrap logo s-brand">
            <div class="fl key brand">品牌：</div>
            <div class="value logos">
              <div class="logos-list">
                <ul class="logos-value-list logo-value-fixed">
                  <li><a href="#">新信息G<i class="el-icon-close"></i></a></li>
                  <li><a href="#">新信息G<i class="el-icon-close"></i></a></li>
                  <li><a href="#">新信息G<i class="el-icon-close"></i></a></li>
                  <li><a href="#">新信息G<i class="el-icon-close"></i></a></li>
                  <li><a href="#">新信息G<i class="el-icon-close"></i></a></li>
                  <li><a href="#">新信息G<i class="el-icon-close"></i></a></li>
                  <li><a href="#">新信息G<i class="el-icon-close"></i></a></li>
                  <li><a href="#">新信息G<i class="el-icon-close"></i></a></li>
                  <li><a href="#">新信息G<i class="el-icon-close"></i></a></li>
                  <li><a href="#">新信息G<i class="el-icon-close"></i></a></li>
                </ul>
              </div>
            </div>
            <div class="logos-ext">
              <a class="logos-e-more" href="javascript:;">更多<i class="el-icon-arrow-down"></i></a>
              <a class="logos-e-multiple" href="javascript:;"><i class="el-icon-plus"></i>多选</a>
            </div>
          </div>
          <div class="type-wrap logo s-brand">
            <div class="fl key brand">五金工具：</div>
            <div class="value logos">
              <div class="logos-list">
                <ul class="logos-value-list logo-value-fixed">
                  <li><a href="#">新信息G<i class="el-icon-close"></i></a></li>
                  <li><a href="#">新信息G<i class="el-icon-close"></i></a></li>
                  <li><a href="#">新信息G<i class="el-icon-close"></i></a></li>
                  <li><a href="#">新信息G<i class="el-icon-close"></i></a></li>
                  <li><a href="#">新信息G<i class="el-icon-close"></i></a></li>
                  <li><a href="#">新信息G<i class="el-icon-close"></i></a></li>
                  <li><a href="#">新信息G<i class="el-icon-close"></i></a></li>
                  <li><a href="#">新信息G<i class="el-icon-close"></i></a></li>
                  <li><a href="#">新信息G<i class="el-icon-close"></i></a></li>
                  <li><a href="#">新信息G<i class="el-icon-close"></i></a></li>
                </ul>
              </div>
            </div>
            <div class="logos-ext">
              <a class="logos-e-more" href="javascript:;">更多<i class="el-icon-arrow-down"></i></a>
              <a class="logos-e-multiple" href="javascript:;"><i class="el-icon-plus"></i>多选</a>
            </div>
          </div>
          <div class="type-wrap logo s-brand">
            <div class="fl key brand">材质：</div>
            <div class="value logos">
              <div class="logos-list">
                <ul class="logos-value-list logo-value-fixed">
                  <li><a href="#">新信息G<i class="el-icon-close"></i></a></li>
                  <li><a href="#">新信息G<i class="el-icon-close"></i></a></li>
                  <li><a href="#">新信息G<i class="el-icon-close"></i></a></li>
                  <li><a href="#">新信息G<i class="el-icon-close"></i></a></li>
                  <li><a href="#">新信息G<i class="el-icon-close"></i></a></li>
                  <li><a href="#">新信息G<i class="el-icon-close"></i></a></li>
                  <li><a href="#">新信息G<i class="el-icon-close"></i></a></li>
                  <li><a href="#">新信息G<i class="el-icon-close"></i></a></li>
                  <li><a href="#">新信息G<i class="el-icon-close"></i></a></li>
                  <li><a href="#">新信息G<i class="el-icon-close"></i></a></li>
                </ul>
              </div>
            </div>
            <div class="logos-ext">
              <a class="logos-e-more" href="javascript:;">更多<i class="el-icon-arrow-down"></i></a>
              <a class="logos-e-multiple" href="javascript:;"><i class="el-icon-plus"></i>多选</a>
            </div>
          </div>
        </div>
        <!--details-->
        <div class="details">
          <div class="navbar">
            <div class="wrap-filter">
              <ul class="filter-list">
                <li class="active">
                  <a href="#">综合↓</a>
                </li>
                <li>
                  <a href="#">销量↓</a>
                </li>
                <li>
                  <a href="#">新品↓</a>
                </li>
                <li>
                  <a href="#">评价↓</a>
                </li>
                <li>
                  <a href="#">价格↑</a>
                </li>
                <li>
                  <a href="#">价格↓</a>
                </li>
              </ul>
              <div class="filter-num">
                <span class="filter-text">
                  <b>1</b>
                  <em>/</em>
                  <i>{{searchList.totalPages}}</i>
                </span>
                <a href="" class="filter-prev disabled"><i class="el-icon-arrow-left"></i></a>
                <a href="" class="filter-next"><i class="el-icon-arrow-right"></i></a>
              </div>
            </div>
          </div>
          <div class="goods-list">
            <ul class="yui3-g">
              <li  v-for="item in searchList.rows" :key="item.id">
                <div class="p-list">
                  <div class="p-img">
                    <router-link href="" target="_blank" title="" :to="{ path:'/test',params:{id: item.id}}"><img :src="item.image" /></router-link>
                  </div>
                  <div class="p-scroll">
                    <span class="ps-prev"><i class="el-icon-arrow-left"></i></span>
                    <span class="ps-next"><i class="el-icon-arrow-right"></i></span>
                    <div class="ps-wrap">
                      <ul class="ps-main">
                        <li class="ps-item">
                          <a href="" class="curr" title=""><img :src="item.image" data-sku="" data-lazy-img="" width="25" height="25"></a>
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
                      <i>{{ item.price }}</i>
                    </strong>
                  </div>
                  <div class="p-attr">
                    <!-- 修改 -->
                    <a v-html="item.title">
                      <em>{{item.title}}</em>
                    </a>
                  </div>
                  <div class="p-commit">
                    <strong><a target="_blank" >~1000+</a>条评价</strong>
                  </div>
                  <div class="p-focus">
                    <a class="J_focus" data-sku="10947521008" href="javascript:;" title="点击关注"><i class="el-icon-star-off"></i>关注</a>
                  </div>
                  <div class="p-shop" data-selfware="0" data-score="0" data-reputation="99" data-verderid="594052" data-done="1">
                    <span class="J_im_icon"><a target="_blank" :title="item.seller" >{{item.seller}}</a><b class="im-01" title="联系客服"><i class="el-icon-service"></i></b></span>
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
    </div>
  </div>
</template>
<script>
import { apiAxios } from '../../common/utils'
export default {
  data () {
    return {
      searchList: ''
    }
  },
  created () {
    let searchMap =
      {
        keywords: '三星',
        category: '',
        brand: '',
        spec: {}, // 规格
        price: '',
        pageNo: 1,
        pageSize: 40,
        sort: '', // 排序
        sortField: '' // 排序变量
      }
    apiAxios.AxiosP({
      url: '/search/itemsearch/search',
      method: 'post',
      data: searchMap
    }, (rtn) => {
      if (rtn.status === 200) {
        this.searchList = rtn.data
      }
      console.log(this.searchList)
    })
  }
}

</script>
<style scoped>
@import "../../assets/css/search/search.css";
</style>
