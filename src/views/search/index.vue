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
                <ul class="logo-value-fixed other-select"  :class="[isSelectBrandMore ? 'active-dom': '', isShowBrandMore ? 'active-brand-more':'']">
                  <li v-for="(item, index) in brandList" :key="index" @click="selectStyle(item)">
                    <a href="javascript:;" :class="temSelectList.indexOf(item.text)>=0 ? 'cur': ''">{{item.text}}</a>
                    <i v-if="isSelectBrandMore" class="el-icon-circle-check-outline" :class="temSelectList.indexOf(item.text)>=0 ? 'cur': ''"></i>
                  </li>
                </ul>
                <div class="brand-btn" v-if="isSelectBrandMore">
                  <a class="disabled has_pointer" @click="btnComfirm(1)" :class="temSelectList.length > 0 ?'select':''">确定</a>
                  <a class="has_pointer" @click="btnCancel">取消</a>
                </div>
              </div>
            </div>
            <div class="logos-ext" v-show="!isSelectBrandMore">
              <a class="logos-e-multiple has_pointer" @click="isSelectBrandMore=true"><i class="el-icon-plus"></i>多选</a>
              <a class="logos-e-more has_pointer" v-show="brandList.length > 7" @click="isShowBrandMore = !isShowBrandMore">
                <p v-show="!isShowBrandMore">更多</p><p v-show="isShowBrandMore">收起</p>
                <i :class="isShowBrandMore ? 'el-icon-arrow-up' :'el-icon-arrow-down'"></i>
              </a>
            </div>
          </div>
          <div class=" logo s-brand"  v-show="isSelectSpec.indexOf(index) === -1" v-for="(list, index) in specList" :key="list.id">
            <div class="fl brand" :data-attr="list.text" :data-attr-id="list.id">{{list.text}}：</div>
            <div class="value logos">
              <div class="logos-list">
                <ul class="logo-value-fixed other-select" ref="specul" :class="[isShowMore === index ? 'active-dom': '', isSelectSpecMore === list.id ? 'select-active-dom': '']">
                  <li v-for="(info, tip) in list.options" :key="tip" @click="selectAttr(info, index)">
                    <a href="javascript:;" :class="chooseSpec.indexOf(info.id)>=0 ? 'cur': ''">{{info.optionName}}</a>
                    <i class="el-icon-circle-check-outline" v-if="isSelectSpecMore === list.id" :class="chooseSpec.indexOf(info.id)>=0 ? 'cur': ''"></i>
                  </li>
                </ul>
                <div class="brand-btn" v-if="isSelectSpecMore === list.id">
                  <a class="disabled" @click="btnComfirm(2, index)" :class="temSelectSpec.length > 0 ?'select':''">确定</a>
                  <a @click="btnSpecCancel()">取消</a>
                </div>
              </div>
            </div>
            <div class="logos-ext" v-show="isSelectSpecMore !== list.id">
              <a class="logos-e-multiple has_pointer" @click="isSelectSpecMore=list.id"><i class="el-icon-plus"></i>多选</a>
              <a class="logos-e-more has_pointer" v-if="list.options.length > 7" @click="isShowMore!==index ? isShowMore=index : isShowMore=''">
                <p v-show="isShowMore===index">收起</p><p>更多</p><i :class="isShowMore === index ? 'el-icon-arrow-up' : 'el-icon-arrow-down'"></i>
              </a>
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
                    <a class="has_pointer"><h4>综合</h4></a>
                  </li>
                  <li :class="{active: choose_sort === 'salesNum'}" @click="chooseSort('salesNum')">
                    <a class="has_pointer"><h4>销量</h4><span>↓</span></a>
                  </li>
                  <li :class="{active: choose_sort === 'creditNum'}" @click="chooseSort('creditNum')">
                    <a class="has_pointer"><h4>信用</h4><span :class="{cur: choose_sort === 'creditNum'}">↓</span></a>
                  </li>
                  <li :class="{active: choose_sort === 'salesPrice'}" @click="chooseSort('salesPrice')">
                    <a class="has_pointer"><h4>价格</h4><span class="price-sort-tip" :class="isPriceSort ? 'cur' : ''"><i class="el-icon-arrow-up"></i><i class="el-icon-arrow-down"></i></span></a>
                  </li>
                  <input class="fil-price" type="text" name=""  maxlength="20" @input="handleOnePrice" :value="smallPrice" placeholder="￥">
                  <span class="fil-price-line"></span>
                  <input class="fil-price" @input="handleTwoPrice" :value="bigPrice" type="text" name=""  maxlength="20" placeholder="￥">
                  <a class="fil-price-btn has_pointer" @click="btnPrice">确定</a>
                </ul>
                <div class="filter-num">
                  <span class="filter-text">
                    <b>{{currentPage}}</b>
                    <em>/</em>
                    <i>{{totalPages}}</i>
                  </span>
                  <a class="filter-prev has_pointer" :class="currentPage===1?'disabled':''" @click="prevPage"><i class="el-icon-arrow-left"></i></a>
                  <a class="filter-next has_pointer" :class="currentPage===totalPages?'disabled':''" @click="nextPage"><i class="el-icon-arrow-right"></i></a>
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
                      <a class="has_pointer" @click="toCollect(item.goodsId, 1)"><img src="static/img/mk_search_addgoods.png"><span>收藏</span></a>
                      <a class="has_pointer" @click="toCart(item.id, 1)"><img src="static/img/mk_search_addcart.png"><span>加购物车</span></a>
                    </div>
                    <img>
                  </div>
                </li>
              </ul>
            </div>
            <div class="block" v-if="totalPages > 1">
              <router-link class="youthink" :to="{path:'/feedback'}">说说你的使用感受</router-link>
              <el-pagination
                :current-page.sync="currentPage"
                :page-size="40"
                layout="prev, pager, next, jumper"
                :total="searchList.total">
              </el-pagination>
            </div>
          </div>
        </div>
        <div class="details" v-else>
          <p><i class="el-icon-warning"></i>抱歉未找到与 <em>{{keywords}}</em><em v-for="val in selectSpec" :key="val.spec">/{{val.spec}}：<em v-for="item in val.childList" :key="item.id">{{item.attr}}、</em></em>相关的商品</p>
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
import { formatDate } from '@/common/utils'
export default {
  data () {
    return {
      searchList: '',
      keywords: '',
      brand: '',
      brandList: '',
      selectBrand: [], // 选择的品牌查询
      isSelectBrand: true, // 是否显示品牌列表，即未选择品牌
      isSelectBrandMore: false, // 为false 品牌显示单选
      isShowBrandMore: false, // 显示更多/收起
      temSelectList: [], // 品牌多选时临时存取数据
      specList: '',
      specNavList: [], // spec 属性名列表
      selectSpec: [],
      temSelectSpec: [], // spec 多选是临时存取数据
      isSelectSpec: [], // spec 属性列表中选中的列表位置
      isSelectSpecMore: '',
      isShowMore: '', // 显示更多/收起
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
  computed: {
    chooseSpec () {
      let tem = []
      this.temSelectSpec.length && this.temSelectSpec.forEach(item => {
        item.childList.forEach(tip => {
          tem.push(tip.id)
        })
      })
      return tem
    },
    chooseBrand () {
      let tem = []
      console.log(this.temSelectList)
      return tem
    }
  },
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
        this.isSelectSpec = []
        this.isShowBrandMore = false
        this.isSelectBrandMore = false
      }
      this.isSelectBrand = true
      this.temSelectSpec = []
      this.temSelectList = []
      this.isSelectSpecMore = ''
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
    // 选择品牌时 修改样式
    selectStyle (item) {
      if (!this.isSelectBrandMore) { // 正常选择单个品牌
        // 去重 this.selectBrand = [...new Set(this.selectBrand)]
        this.selectBrand.push(item.text)
        this.search([this.keywords, false])
      } else { // 下拉多选
        if (this.temSelectList.indexOf(item.text) >= 0) {
          this.$delete(this.temSelectList, this.temSelectList.indexOf(item.text))
        } else {
          this.temSelectList.push(item.text)
          this.temSelectList = [...new Set(this.temSelectList)]
        }
      }
    },
    // 切换修改 spec
    selectAttr (item, rollNum) {
      let specIdList = this.specNavList.find(tip => {
        return tip.id === item.specId
      })
      if (this.isSelectSpecMore === item.specId) { // 当前是多选
        let isAll = this.temSelectSpec.every(list => {
          return (list.spec !== specIdList.spec)
        })
        if (isAll) {
          this.temSelectSpec.push({spec: specIdList.spec, childList: [{'attr': item.optionName, 'id': item.id}]})
        } else {
          for (let val of this.temSelectSpec) {
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
        this.search([this.keywords, false])
        this.isSelectSpec.push(rollNum)
      }
    },
    // 取消选择Brand
    btnCancel () {
      this.temSelectList = []
      this.isSelectBrandMore = false
    },
    // 取消选择spec
    btnSpecCancel () {
      this.isSelectSpecMore = ''
      this.temSelectSpec = []
    },
    // 确定选择spec
    btnComfirm (status, rollNum) {
      if (status === 1) { // 1 为品牌
        this.selectBrand = this.temSelectList
      } else if (status === 2) { // 2 为spec list
        this.temSelectSpec.forEach(item => {
          this.selectSpec.push(item)
        })
        this.isSelectSpec.push(rollNum)
      }
      this.search([this.keywords, false])
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
      } else {
        this.$notify.warning({
          title: '提示',
          message: '请先登陆哦~'
        })
      }
    },
    // 加入购物车
    toCart (skuId, num) {
      if (this.$cookies.get('token')) {
        this.API.addToCart({ itemId: skuId, num: num, name: this.$cookies.get('user-key') }).then(rtn => {
          if (rtn.success === false) {
            this.$message.error('加入购物车失败')
            return false
          }
          this.$message.success('成功加入购物车')
          this.$store.dispatch('CART')
        })
      } else {
        this.$notify.warning({
          title: '提示',
          message: '请先登陆哦~'
        })
      }
    }
  },
  watch: {
    currentPage (newPage) {
      this.search([this.keywords, false])
    },
    // 操作spec更多 初始化其他
    isShowMore (newStatus) {
      if (newStatus !== '') {
        this.isSelectSpecMore = ''
        this.temSelectSpec = []
        this.temSelectList = []
        this.isShowBrandMore = false
        this.isSelectBrandMore = false
      }
      this.$nextTick(() => {
        this.$refs.specul.forEach((list, tip) => {
          list.scrollTop = 0
        })
      })
    },
    // 操作spec多选 初始化其他
    isSelectSpecMore (newStatus) {
      if (newStatus) {
        this.isShowMore = ''
        this.temSelectSpec = []
        this.temSelectList = []
        this.isShowBrandMore = false
        this.isSelectBrandMore = false
      }
    },
    // 操作品牌多选 初始化其他
    isSelectBrandMore (newStatus) {
      if (newStatus) {
        this.isShowMore = ''
        this.isSelectSpecMore = ''
        this.temSelectSpec = []
        this.temSelectList = []
        this.isShowBrandMore = false
      }
    },
    // 操作品牌更多 初始化其他
    isShowBrandMore (newStatus) {
      if (newStatus) {
        this.isShowMore = ''
        this.isSelectSpecMore = ''
        this.temSelectSpec = []
        this.temSelectList = []
        this.isSelectBrandMore = false
      }
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
.other-select {
  height: 30px;
  max-height: initial;
  overflow-y: hidden;
}
.active-dom {
  height: auto;
  max-height: 60px;
  overflow-y: auto;
}
.select-active-dom {
  height: initial;
  max-height: 120px;
  overflow-y: auto;
}
.active-brand-more {
  height: auto;
  max-height: 60px;
  overflow-y: auto;
}
</style>
