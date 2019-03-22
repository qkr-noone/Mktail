<template>
  <div id="search-index">
    <shortcut id="headTop"></shortcut>
    <headerNav :searchList="searchList" @showSearch="search($event)"></headerNav>
    <homeNav></homeNav>
    <!--list-content-->
    <div class="main">
      <div class="sear-container"> <!-- v-if="searchList.total" -->
        <!--bread-->
        <div class="bread" v-if="searchList.total">
          <ul class="bread-ul">
            <li class="bread-li">
              <a>全部结果<i class="el-icon-arrow-right"></i></a>
            </li>
          </ul>
          <ul class="tags-choose">
            <li class="tag" v-show="keywords">"{{keywords}}"</li>
            <li class="tag" v-show="selectBrand.length">品牌： <span v-for="(data,index) in selectBrand" :key="index">{{data}}</span></li>
            <li class="tag"  v-for="list in selectSpec" v-if="list.childList.length" :data-attr="list.spec" :key="list.spec">{{list.spec}}:<span v-for="tip in list.childList" :key="tip.attr">{{tip.attr}}</span></li>
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
                  <li v-for="(item, index) in brandList" :key="index" @click="selectStyle(item, index)" ref="brandli"><a>{{item.text}}</a><i v-if="!isSelectBrandMore" class="el-icon-circle-check-outline"></i></li>
                </ul>
                <div class="brand-btn" v-if="!isSelectBrandMore">
                  <a class="disabled" @click="btnComfirm(1)" :class="temSelectList.length > 0 ?'select':''">确定</a>
                  <a @click="btnCancel">取消</a>
                </div>
              </div>
            </div>
            <div class="logos-ext">
              <a class="logos-e-multiple" @click="selectBrandMore($event)" ref="brandselMore"><i class="el-icon-plus"></i>多选</a>
              <a class="logos-e-more" v-show="brandList.length > 7 && isSelectBrandMore" @click="more($event)" ref="brandMore"><p>更多</p><i class="el-icon-arrow-down"></i></a>
            </div>
          </div>
          <div class=" logo s-brand"  v-if="isSelectSpec.indexOf(index) === -1" v-for="(list, index) in specList" :key="list.id">
            <div class="fl brand" :data-attr="list.text" :data-attr-id="list.id">{{list.text}}：</div>
            <div class="value logos">
              <div class="logos-list">
                <ul class="logo-value-fixed" ref="specul">
                  <li v-for="(info, tip) in list.options" :key="tip" @click="selectAttr(info, tip, index)"><a>{{info.optionName}}</a></li>
                  <!-- <i class="el-icon-circle-check-outline"></i> -->
                </ul>
                <!-- <div class="brand-btn">
                  <a class="disabled" @click="btnComfirm(2)">确定</a>
                  <a @click="btnCancel">取消</a>
                </div> -->
              </div>
            </div>
            <div class="logos-ext">
              <a class="logos-e-multiple" @click="selectMore($event, index)"><i class="el-icon-plus"></i>多选</a>
              <a class="logos-e-more" v-if="list.options.length > 7" @click="more($event, index)"><p>更多</p><i class="el-icon-arrow-down"></i></a>
            </div>
          </div>
        </div>
        <!--details-->
        <div class="details" v-if="searchList.total">
          <!-- 左侧精选 广告 -->
          <div class="details-abs">
            <div class="abs-title">
              <p>{{absCate.name}}</p>
              <span>广告</span>
            </div>
            <div class="abs-con">
              <ul class="abs-ul">
                <li class="abs-li" v-for="list in absList" :key="list.id">
                  <router-link :to="{path: '/detail', query: {goodsId: list.goodsId}}" class="abs-li-a"><img :src="list.pic"></router-link>
                  <p class="abs-li-pri">¥{{list.price}}</p>
                  <div class="abs-li-des">
                    <a>{{list.title}}</a>
                  </div>
                  <span class="abs-li-com">已有<em>233</em>人评价</span>
                </li>
              </ul>
            </div>
          </div>
          <!-- search 列表内容 -->
          <div class="details-con">
            <div class="navbar">
              <div class="wrap-filter">
                <ul class="filter-list">
                  <li :class="{active: choose_sort === 'complex'}" @click="chooseSort('complex')">
                    <a><h4>综合</h4></a>
                  </li>
                  <li :class="{active: choose_sort === 'salesNum'}" @click="chooseSort('salesNum')">
                    <a><h4>销量</h4><span>↓</span></a>
                  </li>
                  <li :class="{active: choose_sort === 'creditNum'}" @click="chooseSort('creditNum')">
                    <a><h4>信用</h4><span :class="{cur: choose_sort === 'creditNum'}">↓</span></a>
                  </li>
                  <li :class="{active: choose_sort === 'salesPrice'}" @click="chooseSort('salesPrice')">
                    <a><h4>价格</h4><span class="price-sort-tip" :class="isPriceSort ? 'cur' : ''"><i class="el-icon-arrow-up"></i><i class="el-icon-arrow-down"></i></span></a>
                  </li>
                  <input class="fil-price" type="text" name=""  maxlength="20" @input="handleOnePrice" :value="smallPrice" placeholder="￥">
                  <span class="fil-price-line"></span>
                  <input class="fil-price" @input="handleTwoPrice" :value="bigPrice" type="text" name=""  maxlength="20" placeholder="￥">
                  <a class="fil-price-btn" @click="btnPrice">确定</a>
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
                      <router-link :to="{ path:'/detail',query:{goodsId: item.goodsId, skuId: item.id}}"><img :src="item.image" /></router-link>
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
                    <div class="p-shop">
                      <strong><a target="_blank" :title="item.seller">{{item.seller}}</a></strong>
                    </div>
                    <div class="p-commit" data-selfware="0" data-score="0" data-reputation="99" data-verderid="594052" data-done="1">
                      <span class="J_im_icon"><a target="_blank">销量1000</a><b class="im-01" title="联系客服"><i class="el-icon-service"></i></b></span>
                    </div>
                    <div class="p-add">
                      <a><img src="static/img/mk_search_addgoods.png"><span>收藏</span></a>
                      <a><img src="static/img/mk_search_addcart.png"><span>加购物车</span></a>
                    </div>
                    <img>
                  </div>
                </li>
              </ul>
            </div>
            <div class="block" v-if="totalPages > 1">
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
        <div class="details" v-else>
          <p><i class="el-icon-warning"></i>抱歉未找到与 <em>{{keywords}}</em>相关的商品</p>
        </div>
        <!-- 底部商品精选 -->
        <div class="bestGoods">
          <h2>{{bestGoCate.name}}</h2>
          <ul class="best-go-ul">
            <li class="best-go-li" v-for="list in bestGoList" :key="list.id">
              <router-link :to="{path: '/detail', query: {goodsId: list.goodsId}}" class="best-go-li-a"><img :src="list.pic"></router-link>
              <div class="best-go-li-des">
                <a>{{list.title}}</a>
              </div>
              <p class="best-go-li-pri">¥{{list.price}}</p>
              <span class="best-go-li-com">已有<em>233</em>人评价</span>
            </li>
          </ul>
        </div>
        <!-- 猜你喜欢 -->
        <div class="youlike">
          <h2>{{likeCate.name}}</h2>
          <ul class="youlike-ul">
            <li class="youlike-li" v-for="list in likeList" :key="list.id">
              <router-link :to="{path: '/detail', query: {goodsId: list.goodsId}}" class="youlike-li-a"><img :src="list.pic"></router-link>
              <div class="youlike-li-des">
                <a>{{list.title}}</a>
              </div>
              <p class="youlike-li-pri">¥{{list.price}}</p>
              <span class="youlike-li-com">已有<em>233</em>人评价</span>
            </li>
          </ul>
        </div>
        <div class="bottom-abs">
          <absBox :data="bottomAbs" :indicator="'none'" :arrow="'never'"></absBox>
        </div>
      </div>
    </div>
    <pageFooter id="bottom"></pageFooter>
    <div class="point">
      <div class="point-con">
        <ul class="point-ul">
          <li class="point-li"><a><img src="static/img/mk_search_point_1.png"></a></li>
          <li class="point-li"><a><img src="static/img/mk_search_point_2.png"></a></li>
          <li class="point-li"><a><img src="static/img/mk_search_point_3.png"></a></li>
          <li class="point-li"><a><img src="static/img/mk_search_point_4.png"></a></li>
        </ul>
      </div>
      <div class="point-li top-box"  v-scroll-to="'#headTop'"><a class="top"><i class="el-icon-caret-top"></i><p>TOP</p></a></div>
    </div>
  </div>
</template>
<script>
import shortcut from '@/components/shortcutHeader'
import headerNav from '@/components/headerNav'
import homeNav from '@/components/homeNav'
import absBox from '@/components/absBox'
import pageFooter from '@/components/pageFooter'
export default {
  data () {
    return {
      searchList: '',
      keywords: '',
      brand: '',
      brandList: '',
      selectBrand: [], // 选择的品牌查询
      isSelectBrand: true, // 是否显示品牌列表，即未选择品牌
      isSelectBrandMore: true,
      specList: '',
      specNavList: [],
      selectSpec: [],
      isSelectSpec: [],
      temSelectList: [], // 多选时临时存取数据
      priceRange: [],
      isPriceSort: false, // 判断价格升序和降序图标
      smallPrice: '',
      bigPrice: '',
      choose_sort: 'complex', // 排序筛选条件
      temSort: { // // 临时存放排序变量
        field: '',
        sort: ''
      },
      currentPage: 1,
      totalPages: 1,
      absList: [], // 搜索左侧商品精选
      absCate: '',
      bestGoList: [], // 搜索底部商品精选
      bestGoCate: '',
      likeList: [], // 搜索底部猜你喜欢
      likeCate: '',
      bottomAbs: [] // 底部广告
    }
  },
  components: { pageFooter, shortcut, headerNav, absBox, homeNav },
  created () {
    this.keywords = this.$route.query.keywords
    if (this.keywords) {
      // true / false 判断是否在原基础上过滤搜索
      this.search([this.keywords, false])
    }
  },
  mounted () {
    this.API.detailCon({categoryId: 10}).then(res => {
      this.absList = res.contentList
      this.absCate = res.contentCategory
    })
    this.API.detailCon({categoryId: 11}).then(res => {
      this.bestGoList = res.contentList
      this.bestGoCate = res.contentCategory
    })
    this.API.detailCon({categoryId: 9}).then(res => {
      this.likeList = res.contentList
      this.likeCate = res.contentCategory
    })
    this.API.detailCon({categoryId: 12}).then(res => {
      this.bottomAbs = res.contentList
    })
  },
  methods: {
    handleOnePrice (e) {
      // 过滤
      this.smallPrice = e.target.value.replace(/[^\d]/g, '')
    },
    handleTwoPrice (e) {
      this.bigPrice = e.target.value.replace(/[^\d]/g, '')
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
      // 输入关键词时，初始化
      if (keywords[1]) {
        this.selectBrand = []
        this.selectSpec = []
        this.temSort.field = ''
        this.temSort.sort = ''
        this.currentPage = 1
      }
      this.isSelectBrand = true
      let priceRange = ''
      let userPrice = []
      if (this.smallPrice !== '' && this.smallPrice >= 0) userPrice.push(this.smallPrice)
      if (this.bigPrice !== '' && this.bigPrice >= 0) userPrice.push(this.bigPrice)
      userPrice.sort()
      if (userPrice.length) {
        if (userPrice.length === 1) priceRange = userPrice[0].toString() + '-' + userPrice[0].toString()
        else if (userPrice.length === 2) priceRange = userPrice[0].toString() + '-' + userPrice[1].toString()
      }
      // 初始化价格区间
      this.bigPrice = ''
      this.smallPrice = ''
      let spec = {}
      for (let val of this.selectSpec) {
        let tem = []
        for (let tip of val.childList) {
          tem.push(tip.attr)
        }
        spec[val.spec] = tem.join('-')
      }
      let searchMap =
        {
          keywords: this.keywords,
          category: '',
          brand: this.selectBrand.join('-'), // 品牌
          spec: spec, // 规格
          price: priceRange,
          pageNo: this.currentPage,
          pageSize: 40,
          sort: this.temSort.sort, // 排序  ASC -升序  DESC-降序
          sortField: this.temSort.field // 排序变量 salesCount 销量 sellerCredit 信用 price 价格
          /*
            "spec":{"机身内存":"16G","网络":"联通3G"}
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
      this.$router.replace({ path: '/search', query: searchMap })
      if (searchMap.brand) this.isSelectBrand = false
      this.API.search(searchMap).then(rtn => {
        this.searchList = rtn
        this.totalPages = this.searchList.totalPages || 1
        this.brandList = this.searchList.brandList || ''
        this.specList = this.searchList.specList || ''
        if (this.specList) {
          for (let i = 0; i < this.specList.length; i++) {
            this.specNavList.push({spec: this.specList[i].text, id: this.specList[i].id})
          }
        }
      })
    },
    // 选择spec时 修改样式
    selectStyle (item, index) {
      if (this.isSelectBrandMore) { // 正常选择单个品牌
        if (this.$refs.brandli[index].children[0].className.length <= 0) {
          this.$refs.brandli[index].children[0].className = 'cur'
          if (this.$refs.brandli[index].children[1]) { // 防止节点不存在 bug
            this.$refs.brandli[index].children[1].className = 'el-icon-circle-check-outline cur'
          }
          this.selectBrand.push(item.text)
          // 去重
          this.selectBrand = [...new Set(this.selectBrand)]
        } else {
          this.$refs.brandli[index].children[0].className = ''
          this.$refs.brandli[index].children[1].className = 'el-icon-circle-check-outline'
          this.$delete(this.selectBrand, this.selectBrand.indexOf(item.text))
        }
        this.search([this.keywords, false])
      } else { // 下拉多选
        if (this.$refs.brandli[index].children[0].className.length <= 0) {
          this.$refs.brandli[index].children[0].className = 'cur'
          if (this.$refs.brandli[index].children[1]) { // 防止节点不存在 bug
            this.$refs.brandli[index].children[1].className = 'el-icon-circle-check-outline cur'
          }
          this.temSelectList.push(item.text)
          // 去重
          this.temSelectList = [...new Set(this.temSelectList)]
        } else {
          this.$refs.brandli[index].children[0].className = ''
          this.$refs.brandli[index].children[1].className = 'el-icon-circle-check-outline'
          this.$delete(this.temSelectList, this.temSelectList.indexOf(item.text))
        }
      }
    },
    // 切换修改 spec
    selectAttr (item, index, rollNum) {
      let specIdList = this.specNavList.find(tip => {
        return tip.id === item.specId
      })
      if (this.selectSpec.length) {
        let isAll = this.selectSpec.every(list => {
          return (list.spec !== specIdList.spec)
        })
        if (isAll) {
          this.selectSpec.push({spec: specIdList.spec, childList: [{'attr': item.optionName, 'id': item.id}]})
        } else {
          for (let val of this.selectSpec) {
            if (val.spec === specIdList.spec) {
              let isSelect = val.childList.every(box => {
                return (box.id !== item.id)
              })
              if (isSelect) {
                val.childList.push({'attr': item.optionName, 'id': item.id})
              } else {
                for (let i = 0; i < val.childList.length; i++) {
                  if (JSON.stringify(val.childList[i]) === JSON.stringify({'attr': item.optionName, 'id': item.id})) {
                    val.childList.splice(i, 1)
                    break
                  }
                }
              }
              break
            }
          }
        }
      } else {
        this.selectSpec.push({spec: specIdList.spec, childList: [{'attr': item.optionName, 'id': item.id}]})
      }
      console.log('over', this.selectSpec)
      // this.isSelectBrandMore = true
      this.search([this.keywords, false])
      this.isSelectSpec.push(rollNum)
    },
    // 品牌多选
    selectBrandMore (event) {
      let brandTag = this.$refs.brandul.style
      brandTag.height = 'initial'
      brandTag.maxHeight = '60px'
      this.isSelectBrandMore = false
      this.$refs.brandselMore.style.display = 'none'
      console.log(1, this.$refs.brandul.parentElement)
      // 16+120+40(btn)  16 + 30 + 40
      if (this.$refs.brandul.parentElement.offsetHeight > 86) {
        brandTag.overflowX = 'hidden'
        brandTag.overflowY = 'auto'
      } else {
        brandTag.overflowX = 'hidden'
        brandTag.overflowY = 'hidden'
      }
      console.log(2, this.$refs.brandul.parentElement.offsetHeight)
    },
    // spec多选
    selectMore (event, index) {
      let specul = this.$refs.specul[index].style
      if (specul.maxHeight === '120px') {
        specul.height = '30px'
        specul.maxHeight = 'initial'
      } else {
        specul.height = 'initial'
        specul.maxHeight = '120px'
      }
      if (this.$refs.specul[index].parentElement.offsetHeight > 136) {
        specul.overflowX = 'hidden'
        specul.overflowY = 'auto'
      } else {
        specul.overflowX = 'hidden'
        specul.overflowY = 'hidden'
      }
    },
    // 显示 更多
    more (event, index) {
      let specUl
      if (index !== undefined) {
        specUl = this.$refs.specul[index].style
      } else {
        specUl = this.$refs.brandul.style
      }
      let curTag = event.currentTarget
      if (specUl.height === 'auto') {
        (specUl.height = '30px')
        curTag.children[0].textContent = '更多'
        curTag.children[1].className = 'el-icon-arrow-down'
      } else {
        specUl.height = 'auto'
        curTag.children[0].textContent = '收起'
        curTag.children[1].className = 'el-icon-arrow-up'
      }
    },
    // 取消选择spec
    btnCancel () {
      let brandTag = this.$refs.brandul.style
      brandTag.height = '30px'
      brandTag.maxHeight = 'initial'
      this.isSelectBrandMore = true
      this.$refs.brandselMore.style.display = 'block'
      let brandIsMore = this.$refs.brandMore
      brandIsMore.children[0].textContent = '更多'
      brandIsMore.children[1].className = 'el-icon-arrow-down'
      if (this.$refs.brandul.parentElement.offsetHeight > 86) {
        brandTag.overflowX = 'hidden'
        brandTag.overflowY = 'auto'
      } else {
        brandTag.overflowX = 'hidden'
        brandTag.overflowY = 'hidden'
      }
    },
    // 确定选择spec
    btnComfirm (index) {
      if (index === 1) { // 1 为品牌
        this.selectBrand = this.temSelectList
      } else if (index === 2) { // 2 为spec list
      }
      this.search([this.keywords, false])
      // this.isSelectBrandMore = true
    },
    // 提交指定价格区间
    btnPrice () {
      this.search([this.keywords, false])
    },
    // 结果条件过滤
    chooseSort (type) {
      if (this.choose_sort !== type) {
        this.isPriceSort = false
        this.choose_sort = type
        // 销量salesNum 信用creditNum 价格salesPrice
        if (type === 'salesNum') {
          this.$set(this.temSort, 'field', 'salesCount')
          this.$set(this.temSort, 'sort', 'DESC')
        } else if (type === 'creditNum') {
          this.$set(this.temSort, 'field', 'sellerCredit')
          this.$set(this.temSort, 'sort', 'DESC')
        } else if (type === 'salesPrice') {
          this.$set(this.temSort, 'field', 'price')
          this.$set(this.temSort, 'sort', 'DESC')
          this.isPriceSort = true
        } else {
          this.$set(this.temSort, 'field', '')
          this.$set(this.temSort, 'sort', '')
        }
      } else {
        if (type === 'complex') { // 综合
          this.$set(this.temSort, 'field', '')
          this.$set(this.temSort, 'sort', '')
        } else if (type === 'salesPrice') {
          if (this.temSort.sort === 'ASC') {
            this.$set(this.temSort, 'sort', 'DESC')
            this.isPriceSort = true
          } else {
            this.$set(this.temSort, 'sort', 'ASC')
            this.isPriceSort = false
          }
          this.$set(this.temSort, 'field', 'price')
        }
      }
      this.search([this.keywords, false])
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
#search-index > *{
  padding-left: calc(100vw - 100%)
}
#headTop{
  background-color: #ECECEC;
}
#bottom {
  background-color: #f5f5f5;
}
</style>
