<template>
  <div id="search-index">
    <shortcutHeader :searchList="searchList" @showSearch="search"></shortcutHeader>
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
            <li class="tag">品牌：{}<i class="el-icon-close"></i></li>
            <li class="tag">五金工具：{}<i class="el-icon-close"></i></li>
            <li class="tag">材质：{}<i class="el-icon-close"></i></li>
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
                  <li v-for="item in 8" :key="item" @click="selectStyle(item)"><a :class="{ cur: activeName === item }" href="#">新信息G</a><i class="el-icon-close"></i></li>
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
                    <router-link :to="{ path:'/detail',query:{goodsId: item.goodsId, skuId: item.id}}"><img :src="item.image" /></router-link>
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
                      <i class="goods-icons2 J-picon-tips" data-tips="退换货免运费">运费险险</i>
                  </div>
                  <!-- 广告 -->
                  <span class="p-promo-flag"></span>
                  <img>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <pageFooter></pageFooter>
  </div>
</template>
<script>
import { apiAxios } from '../../common/utils'
import { api } from '../../common/api'
import shortcutHeader from '../../components/shortcutHeader'
import pageFooter from '../../components/pageFooter'
export default {
  data () {
    return {
      searchList: '',
      activeName: ''
    }
  },
  components: { shortcutHeader, pageFooter },
  created () {
    let SEARCH_VALUE = this.$route.query.keywords
    if (SEARCH_VALUE) {
      this.search(SEARCH_VALUE)
    }
  },
  methods: {
    search (keywords) {
      let priceRange = ''
      let userPrice = [3000, 20]
      userPrice.sort()
      if (userPrice.length) {
        if (userPrice.length === 1) {
          priceRange = userPrice[0].toString() + '-' + userPrice[0].toString()
        } else if (userPrice.length === 2) {
          priceRange = userPrice[0].toString() + '-' + userPrice[1].toString()
        }
      }
      let searchMap =
        {
          keywords: keywords,
          category: '',
          brand: '', // 品牌
          spec: {}, // 规格
          price: priceRange,
          pageNo: 1,
          pageSize: 40,
          sort: '', // 排序  ASC -升序  DESC-降序
          sortField: '' // 排序变量
        }
      apiAxios.AxiosP({
        url: api.search,
        method: 'post',
        data: searchMap
      }, (rtn) => {
        if (rtn.status === 200) {
          this.searchList = rtn.data
        }
      })
    },
    selectStyle (index) {
      this.activeName = index
      console.log(this.activeName, index)
    }
  }
}

</script>
<style scoped>
@import "../../assets/css/search/search.css";
</style>
