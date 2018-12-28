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
            <li class="tag" v-show="selectBrand.length">品牌： <span v-for="(data,index) in selectBrand" :key="index">{{data}}</span><i class="el-icon-close"></i></li>
            <li class="tag" v-for="list in specNavList" :key="list.spec">{{list}}:<i class="el-icon-close"></i></li>
            <li>搜索结果：{{searchList.total}}条</li>
          </ul>
        </div>
        <!--selector-->
        <div class="selector">
          <div class=" logo s-brand" v-if="brandList && isSelectBrand">
            <div class="brand" data-attr="品牌" data-attr-id="">品牌：</div>
            <div class="value logos">
              <div class="logos-list">
                <ul class="logo-value-fixed" ref="brandul">
                  <li v-for="(item,index) in brandList" :key="index" @click="selectStyle(item, index)" ref="brandli"><a>{{item.text}}</a><i></i></li>
                </ul>
              </div>
            </div>
            <div class="logos-ext">
              <a class="logos-e-multiple" href="javascript:;"><i class="el-icon-plus"></i>多选</a>
              <a class="logos-e-more" v-show="brandList.length > 7" @click="selectBrandMore()">更多<i class="el-icon-arrow-down"></i></a>
            </div>
          </div>
          <div class=" logo s-brand" v-for="(list, index) in specList" :key="list.id">
            <div class="fl brand" :data-attr="list.text" :data-attr-id="list.id">{{list.text}}：</div>
            <div class="value logos">
              <div class="logos-list">
                <ul class="logo-value-fixed" ref="specul">
                  <li v-for="(info, tip) in list.options" :key="tip"><a href="#">{{info.optionName}}<i class="el-icon-close"></i></a></li>
                </ul>
              </div>
            </div>
            <div class="logos-ext">
              <a class="logos-e-multiple" href="javascript:;"><i class="el-icon-plus"></i>多选</a>
              <a class="logos-e-more" href="javascript:;" v-if="list.options.length > 7" @click="selectMore(index)">更多<i class="el-icon-arrow-down"></i></a>
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
                <input type="text" name=""  maxlength="20" @input="handlePrice" :value="smallPrice" placeholder="￥">
                <input type="text" name=""  maxlength="20" placeholder="￥">
              </ul>
              <div class="filter-num">
                <span class="filter-text">
                  <b>{{currentPage}}</b>
                  <em>/</em>
                  <i>{{totalPages}}</i>
                </span>
                <a class="filter-prev" :class="currentPage===1?'disabled':''" @click="prevPage"><i class="el-icon-arrow-left"></i></a>
                <a class="filter-next" :class="currentPage===totalPages?'disabled':''" @click="nextPage"><i class="el-icon-arrow-right"></i></a>
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
          <div class="block">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage"
              :page-size="40"
              layout="prev, pager, next, jumper"
              :total="searchList.total">
            </el-pagination>
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
      selectBrand: [], // 选择的品牌查询
      isSelectBrand: true, // 是否选择了品牌
      specList: '',
      specNavList: [],
      selectSpec: [],
      priceRange: [],
      smallPrice: '',
      currentPage: 1,
      totalPages: 1
    }
  },
  components: { shortcutHeader, pageFooter },
  created () {
    this.keywords = this.$route.query.keywords
    if (this.keywords) {
      this.search([this.keywords, false])
    }
  },
  activated () {},
  deactivated () {
    this.$destroy()
  },
  mounted () {},
  methods: {
    handlePrice (e) {
      // 过滤
      // this.smallPrice = e.target.value.replace(/[^\d{1,}\.\d{1,}|\d{1,}]/g, '')
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    },
    nextPage () {
      if (this.currentPage < this.totalPages && this.totalPages > 1) {
        this.currentPage++
      }
    },
    prevPage () {
      if (this.currentPage > 1 && this.totalPages > 1) {
        this.currentPage--
      }
    },
    search (keywords) {
      this.keywords = keywords[0]
      if (keywords[1]) {
        this.selectBrand = []
      }
      this.isSelectBrand = true
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
          keywords: this.keywords,
          category: '',
          brand: this.selectBrand.join('-'), // 品牌
          spec: {}, // 规格
          price: priceRange,
          pageNo: this.currentPage,
          pageSize: 40,
          sort: '', // 排序  ASC -升序  DESC-降序
          sortField: '' // 排序变量
          /*
            title 标题
            price 价格
            image 图片
            goodsid 商品id
            category 分类
            brand 品牌
            seller 商家
            spec_* 规格
          */
        }
      this.$router.push({ path: '/search', query: searchMap })
      if (searchMap.brand) {
        this.isSelectBrand = false
      }
      // for (let value in searchMap) {
      //   searchMap[value] ? this.brandList = '' : ''
      //   searchMap[value] ? this.spec = '' : ''
      // }
      // this.searchMap = searchMap
      // this.$message.info(this.$route.fullPath)
      apiAxios.AxiosP({
        url: api.search,
        method: 'post',
        data: searchMap
      }, (rtn) => {
        if (rtn.status === 200) {
          this.searchList = rtn.data
          this.totalPages = this.searchList.totalPages || 1
          this.brandList = this.searchList.brandList || ''
          this.specList = this.searchList.specList || ''
          if (this.specList) {
            for (let i = 0; i < this.specList.length; i++) {
              this.specNavList.push(this.specList[i].text)
              // this.$set(this.specNavList, 'arg', 23)
            }
          }
          this.specNavList = [...new Set(this.specNavList)]
        }
      })
    },
    selectStyle (item, index) {
      if (this.$refs.brandli[index].children[0].className.length <= 0) {
        this.$refs.brandli[index].children[0].className = 'cur'
        this.$refs.brandli[index].children[1].className = 'el-icon-close'
        this.selectBrand.push(item.text)
        // 去重
        this.selectBrand = [...new Set(this.selectBrand)]
      } else {
        this.$refs.brandli[index].children[0].className = ''
        this.$refs.brandli[index].children[1].className = ''
        this.$delete(this.selectBrand, this.selectBrand.indexOf(item.text))
      }
      this.search([this.keywords, false])
    },
    selectBrandMore () {
      if (this.$refs.brandul.style.maxHeight === '120px') {
        this.$refs.brandul.style.height = '30px'
        this.$refs.brandul.style.maxHeight = 'initial'
      } else {
        this.$refs.brandul.style.height = 'initial'
        this.$refs.brandul.style.maxHeight = '120px'
      }
      if (this.$refs.brandul.parentElement.offsetHeight > 136) { // 上下padding 16px
        this.$refs.brandul.style.overflowX = 'hidden'
        this.$refs.brandul.style.overflowY = 'auto'
      } else {
        this.$refs.brandul.style.overflowX = 'hidden'
        this.$refs.brandul.style.overflowY = 'hidden'
      }
    },
    selectMore (index) {
      this.$refs.specul[index].style.height === 'auto' ? this.$refs.specul[index].style.height = '30px' : this.$refs.specul[index].style.height = 'auto'
    }
  },
  watch: {
    currentPage (newPage) {
      this.search([this.keywords, false])
    }
  }
}

</script>
<style scoped>
@import "../../assets/css/search/search.css";
</style>
