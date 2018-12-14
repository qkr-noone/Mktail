<template>
  <div id="search-index">
    <shortcutHeader :searchList="searchList" @showSearch="search($event, 4)"></shortcutHeader>
    <!--list-content-->
    <div class="main">
      <div class="sear-container"> <!-- v-if="searchList.total" -->
        <!--bread-->
        <div class="bread">
          <ul class="bread-ul">
            <li class="bread-li">
              <a>全部结果<i class="el-icon-arrow-right"></i></a>
            </li>
          </ul>
          <ul class="tags-choose">
            <li class="tag" v-show="keywords">"{{keywords}}"</li>
            <li class="tag" v-show="selectBrand.length">品牌： <span v-for="(data,index) in selectBrand" :key="index">{{data.text}}</span><i class="el-icon-close"></i></li>
            <li class="tag" v-for="list in specNavList" :key="list.spec">{{list.spec}}:<i class="el-icon-close"></i></li>
            <li>搜索结果：{{searchList.total}}条</li>
          </ul>
        </div>
        <!--selector-->
        <div class="selector">
          <div class=" logo s-brand" v-if="brandList">
            <div class="brand" data-attr="品牌" data-attr-id="">品牌：</div>
            <div class="value logos">
              <div class="logos-list">
                <ul class="logos-value-list logo-value-fixed">
                  <li v-for="(item,index) in brandList" :key="index" @click="selectStyle(item, index)" v-if="index < 14" ref="brandli"><a href="#">11{{item.text}}</a><i class="el-icon-close"></i></li>
                </ul>
              </div>
            </div>
            <div class="logos-ext">
              <a class="logos-e-more" href="javascript:;">更多<i class="el-icon-arrow-down"></i></a>
              <a class="logos-e-multiple" href="javascript:;"><i class="el-icon-plus"></i>多选</a>
            </div>
          </div>
          <div class=" logo s-brand" v-for="list in specList" :key="list.id">
            <div class="fl brand" :data-attr="list.text" :data-attr-id="list.id">{{list.text}}：</div>
            <div class="value logos">
              <div class="logos-list">
                <ul class="logos-value-list logo-value-fixed">
                  <li v-for="(info, tip) in list.options" :key="tip" v-if="tip < 14"><a href="#">{{info.optionName}}<i class="el-icon-close"></i></a></li>
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
                  <a href="#">价格</a>
                </li>
                <input type="text" name="" placeholder="￥">
                <input type="text" name="" placeholder="￥">
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
                    <router-link :to="{ path:'/detail',query:{goodsId: 149187842867912, skuId: item.id}}"><img :src="item.image" /></router-link>
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
                    <strong><a target="_blank" >销量1000</a></strong>
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
      keywords: '',
      brand: '',
      brandList: '',
      selectBrand: [],
      specList: '',
      specNavList: [],
      selectSpec: []
    }
  },
  components: { shortcutHeader, pageFooter },
  created () {
    this.keywords = this.$route.query.keywords
    if (this.keywords) {
      this.search(this.keywords)
    }
  },
  methods: {
    search (keywords) {
      let query = this.$router.history.current.query
      let path = this.$router.history.current.path
      // 对象的拷贝
      let newQuery = JSON.parse(JSON.stringify(query))
      console.log(newQuery, 333)
      newQuery.keywords = keywords[0].keywords
      let priceRange
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
          keywords: keywords[0].keywords,
          category: '',
          brand: '', // 品牌
          spec: {}, // 规格
          price: priceRange,
          pageNo: 1,
          pageSize: 40,
          sort: '', // 排序  ASC -升序  DESC-降序
          sortField: '' // 排序变量
        }
      this.keywords = keywords[0].keywords
      this.$router.push({ path, query: searchMap })
      apiAxios.AxiosP({
        url: api.search,
        method: 'post',
        data: searchMap
      }, (rtn) => {
        if (rtn.status === 200) {
          this.searchList = rtn.data

          this.brandList = this.searchList.brandList || ''
          this.specList = this.searchList.specList || ''
          if (this.specList) {
            for (let i = 0; i < this.specList.length; i++) {
              this.specNavList.push({'spec': this.specList[i].text})
              // this.$set(this.specNavList, 'arg', 23)
            }
            // for (let arg in this.specList) {
            //   this.$set(this.specNavList, 'arg', this.specList[arg].text)
            //   // console.log(this.specList[arg].text)
            // }
          }
          console.log(this.specNavList, 22)
        }
      })
    },
    selectStyle (item, index) {
      if (this.$refs.brandli[index].children[0].className.length <= 0) {
        this.$refs.brandli[index].children[0].className = 'cur'
      } else {
        this.$refs.brandli[index].children[0].className = ''
      }
      console.log(this.$refs.brandli[index].children[0])
      // for (let i in this.selectBrand) {
      //   this.selectBrand
      // }
      // if (this.selectBrand) {}
      
      this.selectBrand.push({ "index"+: item.text })
      console.log(this.selectBrand)
    }
  }
}

</script>
<style scoped>
@import "../../assets/css/search/search.css";
</style>
