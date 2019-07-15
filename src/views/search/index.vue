<template>
  <div id="search-index">
    <shortcut id="headTop"></shortcut>
<<<<<<< HEAD
    <headerNav :searchList="searchList" @showSearch="search($event)"></headerNav>
=======
    <headerNav :searchList="searchList" @showSearch="search($event, 4)"></headerNav>
>>>>>>> remotes/origin/master
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
<<<<<<< HEAD
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
=======
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
>>>>>>> remotes/origin/master
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
<<<<<<< HEAD
                  <a :href="list.url" class="abs-li-a"><img :src="list.pic"></a>
=======
                  <router-link :to="{path: '/detail', query: {goodsId: list.goodsId}}" class="abs-li-a"><img :src="list.pic"></router-link>
>>>>>>> remotes/origin/master
                  <p class="abs-li-pri">¥{{list.price}}</p>
                  <div class="abs-li-des">
                    <a>{{list.title}}</a>
                  </div>
<<<<<<< HEAD
                  <span class="abs-li-com">已有<em>{{list.preview||0}}</em>人评价</span>
=======
                  <span class="abs-li-com">已有<em>233</em>人评价</span>
>>>>>>> remotes/origin/master
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
<<<<<<< HEAD
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
=======
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
>>>>>>> remotes/origin/master
                  </li>
                  <input class="fil-price" type="text" name=""  maxlength="20" @input="handleOnePrice" :value="smallPrice" placeholder="￥">
                  <span class="fil-price-line"></span>
                  <input class="fil-price" @input="handleTwoPrice" :value="bigPrice" type="text" name=""  maxlength="20" placeholder="￥">
<<<<<<< HEAD
                  <a class="fil-price-btn has_pointer" @click="btnPrice">确定</a>
=======
                  <a class="fil-price-btn" @click="btnPrice">确定</a>
>>>>>>> remotes/origin/master
                </ul>
                <div class="filter-num">
                  <span class="filter-text">
                    <b>{{currentPage}}</b>
                    <em>/</em>
                    <i>{{totalPages}}</i>
                  </span>
<<<<<<< HEAD
                  <a class="filter-prev has_pointer" :class="currentPage===1?'disabled':''" @click="prevPage"><i class="el-icon-arrow-left"></i></a>
                  <a class="filter-next has_pointer" :class="currentPage===totalPages?'disabled':''" @click="nextPage"><i class="el-icon-arrow-right"></i></a>
=======
                  <a class="filter-prev" :class="currentPage===1?'disabled':''" @click="prevPage"><i class="el-icon-arrow-left"></i></a>
                  <a class="filter-next" :class="currentPage===totalPages?'disabled':''" @click="nextPage"><i class="el-icon-arrow-right"></i></a>
>>>>>>> remotes/origin/master
                </div>
              </div>
            </div>
            <div class="goods-list">
              <ul class="yui3-g">
                <li  v-for="item in searchList.rows" :key="item.id">
                  <div class="p-list">
                    <div class="p-img">
<<<<<<< HEAD
                      <router-link :to="{ path:'/detail',query:{goodsId: item.goodsId, skuId: item.id}}" target="_blank"><img :src="item.image" /></router-link>
                      <div class="video_play t3D_play" title="商品支持3D展示" v-if="item.isThreeD"><img src="static/img/detail_play_3D.png"></div>
                    </div>
=======
                      <router-link :to="{ path:'/detail',query:{goodsId: item.goodsId, skuId: item.id}}"><img :src="item.image" /></router-link>
                    </div>
                    <!-- <div class="p-scroll">
                      <span class="ps-prev"><i class="el-icon-arrow-left"></i></span>
                      <span class="ps-next"><i class="el-icon-arrow-right"></i></span>
                      <div class="ps-wrap">
                        <ul class="ps-main">
                          <li class="ps-item">
                            <a href="" class="curr" title=""><img :src="item.image" data-sku="" data-lazy-img="" width="25" height="25"></a>
                          </li>
                          <li class="ps-item">
                            <a href="" class="curr" title=""><img src="static/img/phone.png" data-sku="" data-lazy-img="" width="25" height="25"></a>
                          </li>
                        </ul>
                      </div>
                    </div> -->
>>>>>>> remotes/origin/master
                    <div class="p-price">
                      <strong>
                        <em>¥</em>
                        <i>{{ item.price }}</i>
                      </strong>
                    </div>
                    <div class="p-attr">
                      <!-- 修改 -->
<<<<<<< HEAD
                      <router-link :to="{ path:'/detail',query:{goodsId: item.goodsId, skuId: item.id}}" target="_blank">
                        {{item.title}}
                      </router-link>
=======
                      <a v-html="item.title">
                        <em>{{item.title}}</em>
                      </a>
>>>>>>> remotes/origin/master
                    </div>
                    <div class="p-shop">
                      <strong><a target="_blank" :title="item.seller">{{item.seller}}</a></strong>
                    </div>
                    <div class="p-commit" data-selfware="0" data-score="0" data-reputation="99" data-verderid="594052" data-done="1">
<<<<<<< HEAD
                      <span class="J_im_icon">
                        <a target="_blank">销量&nbsp;{{item.salesCount}}</a>
                        <a v-if="item.customerQq" class="im-01" :href="(item.customerQq && 'http://wpa.qq.com/msgrd?v=3&uin='+ item.customerQq +'&site=qq&menu=yes') || 'javascript:;'" target="_blank" title="点此可以直接和卖家交流选好的宝贝，或相互交流网购体验。"><i class="el-icon-service"></i></a>
                      </span>
                    </div>
                    <div class="p-add">
                      <a class="has_pointer" @click="toCollect(item.goodsId, 1)"><img src="static/img/mk_search_addgoods.png"><span>收藏</span></a>
                      <a class="has_pointer" @click="toCart(item.id, 1)"><img src="static/img/mk_search_addcart.png"><span>加购物车</span></a>
                    </div>
=======
                      <span class="J_im_icon"><a target="_blank">销量1000</a><b class="im-01" title="联系客服"><i class="el-icon-service"></i></b></span>
                    </div>
                    <div class="p-add">
                      <a><img src="static/img/mk_search_addgoods.png"><span>收藏</span></a>
                      <a><img src="static/img/mk_search_addcart.png"><span>加购物车</span></a>
                    </div>
                    <!-- <div class="p-focus">
                      <a class="J_focus" data-sku="10947521008" href="javascript:;" title="点击关注"><i class="el-icon-star-off"></i>关注</a>
                    </div>   -->
                    <!-- <div class="p-icons" id="J_pro_10947521008" data-done="1">
                        <i class="goods-icons2 J-picon-tips" data-tips="退换货免运费">运费险险</i>
                    </div> -->
                    <!-- 广告 -->
                    <!-- <span class="p-promo-flag"></span> -->
>>>>>>> remotes/origin/master
                    <img>
                  </div>
                </li>
              </ul>
            </div>
            <div class="block" v-if="totalPages > 1">
<<<<<<< HEAD
              <a class="youthink" :to="{path:'/feedback'}" @click.stop.prevent="MK_CODE('感受')">说说你的使用感受</a>
              <el-pagination
=======
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
>>>>>>> remotes/origin/master
                :current-page.sync="currentPage"
                :page-size="40"
                layout="prev, pager, next, jumper"
                :total="searchList.total">
              </el-pagination>
            </div>
          </div>
        </div>
        <div class="details" v-else>
<<<<<<< HEAD
          <p><i class="el-icon-warning"></i>抱歉未找到与 <em>{{keywords}}</em><em v-for="val in selectSpec" :key="val.spec">/{{val.spec}}：<em v-for="item in val.childList" :key="item.id">{{item.attr}}、</em></em>相关的商品</p>
=======
          <p><i class="el-icon-warning"></i>抱歉未找到与 <em>{{keywords}}</em>相关的商品</p>
>>>>>>> remotes/origin/master
        </div>
        <!-- 底部商品精选 -->
        <div class="bestGoods">
          <h2>{{bestGoCate.name}}</h2>
          <ul class="best-go-ul">
            <li class="best-go-li" v-for="list in bestGoList" :key="list.id">
<<<<<<< HEAD
              <a :href="list.url" class="best-go-li-a"><img :src="list.pic"></a>
=======
              <router-link :to="{path: '/detail', query: {goodsId: list.goodsId}}" class="best-go-li-a"><img :src="list.pic"></router-link>
>>>>>>> remotes/origin/master
              <div class="best-go-li-des">
                <a>{{list.title}}</a>
              </div>
              <p class="best-go-li-pri">¥{{list.price}}</p>
<<<<<<< HEAD
              <span class="best-go-li-com">已有<em>{{list.preview||0}}</em>人评价</span>
=======
              <span class="best-go-li-com">已有<em>233</em>人评价</span>
>>>>>>> remotes/origin/master
            </li>
          </ul>
        </div>
        <!-- 猜你喜欢 -->
        <div class="youlike">
          <h2>{{likeCate.name}}</h2>
          <ul class="youlike-ul">
            <li class="youlike-li" v-for="list in likeList" :key="list.id">
<<<<<<< HEAD
              <a :href="list.url" class="youlike-li-a"><img :src="list.pic"></a>
=======
              <router-link :to="{path: '/detail', query: {goodsId: list.goodsId}}" class="youlike-li-a"><img :src="list.pic"></router-link>
>>>>>>> remotes/origin/master
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
<<<<<<< HEAD
    <pageFooter id="bottom"></pageFooter>
    <regFooter></regFooter>
    <div class="point">
      <div class="point-con">
        <ul class="point-ul">
          <li class="point-li">
            <a title="扫码关注平台动态" @click="downloadAppBox=true"><img src="static/img/mk_search_point_1.png"></a>
          </li>
          <li class="point-li">
            <a title="联系平台客服" @click.stop.prevent="MK_CODE('运营商客服')"><img src="static/img/mk_search_point_2.png"></a>
          </li>
          <li class="point-li">
            <router-link :to="{path:'/cart'}" title="查看购物车"><img src="static/img/mk_search_point_3.png"></router-link>
          </li>
          <li class="point-li">
            <router-link :to="{path:'/user/userCollectGoods'}" title="我的收藏"><img src="static/img/mk_search_point_4.png"></router-link>
          </li>
=======
    <pageFooter></pageFooter>
    <div class="point">
      <div class="point-con">
        <ul class="point-ul">
          <li class="point-li"><a><img src="static/img/mk_search_point_1.png"></a></li>
          <li class="point-li"><a><img src="static/img/mk_search_point_2.png"></a></li>
          <li class="point-li"><a><img src="static/img/mk_search_point_3.png"></a></li>
          <li class="point-li"><a><img src="static/img/mk_search_point_4.png"></a></li>
>>>>>>> remotes/origin/master
        </ul>
      </div>
      <div class="point-li top-box"  v-scroll-to="'#headTop'"><a class="top"><i class="el-icon-caret-top"></i><p>TOP</p></a></div>
    </div>
<<<<<<< HEAD
    <div class="mk_waiting_box" @click="downloadAppBox=false" v-if="downloadAppBox">
      <div class="mk_waiting">
        <i class="el-icon-close mk_waiting_close" @click="downloadAppBox=false"></i>
        <img class="mk_waiting_img" @click.stop :src="download_app">
      </div>
    </div>
  </div>
</template>
<script>
import shortcut from '@/components/shortcutHeader'
import headerNav from '@/components/headerNav'
import homeNav from '@/components/homeNav'
import absBox from '@/components/absBox'
import pageFooter from '@/components/pageFooter'
import regFooter from '@/components/regFooter'
import { formatDate } from '@/common/utils'
import { mapMutations } from 'vuex'
=======
  </div>
</template>
<script>
import { apiAxios } from '../../common/utils'
import { api } from '../../common/api'
import shortcut from '../../components/shortcutHeader'
import headerNav from '../../components/headerNav'
import homeNav from '../../components/homeNav'
import absBox from '../../components/absBox'
import pageFooter from '../../components/pageFooter'
>>>>>>> remotes/origin/master
export default {
  data () {
    return {
      searchList: '',
      keywords: '',
      brand: '',
      brandList: '',
      selectBrand: [], // 选择的品牌查询
      isSelectBrand: true, // 是否显示品牌列表，即未选择品牌
<<<<<<< HEAD
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
=======
      isSelectBrandMore: true,
      specList: '',
      specNavList: [],
      selectSpec: [],
      isSelectSpec: [],
      temSelectList: [], // 多选时临时存取数据
>>>>>>> remotes/origin/master
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
<<<<<<< HEAD
      bottomAbs: [], // 底部广告
      download_app: 'static/img/mk_app_download.jpg',
      downloadAppBox: false
    }
  },
  components: { pageFooter, shortcut, headerNav, absBox, homeNav, regFooter },
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
    ...mapMutations(['MK_CODE']),
=======
      bottomAbs: [] // 底部广告
    }
  },
  components: { pageFooter, shortcut, headerNav, absBox, homeNav },
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
  mounted () {
    apiAxios.AxiosG({
      url: api.detailCon,
      params: {categoryId: 10}
    }, res => {
      if (res.data.success) {
        this.absList = res.data.data.contentList
        this.absCate = res.data.data.contentCategory
      }
    })
    apiAxios.AxiosG({
      url: api.detailCon,
      params: {categoryId: 11}
    }, res => {
      if (res.data.success) {
        this.bestGoList = res.data.data.contentList
        this.bestGoCate = res.data.data.contentCategory
      }
    })
    apiAxios.AxiosG({
      url: api.detailCon,
      params: {categoryId: 9}
    }, res => {
      if (res.data.success) {
        this.likeList = res.data.data.contentList
        this.likeCate = res.data.data.contentCategory
      }
    })
    apiAxios.AxiosG({
      url: api.detailCon,
      params: {categoryId: 12}
    }, res => {
      if (res.data.success) {
        this.bottomAbs = res.data.data.contentList
      }
    })
  },
  methods: {
>>>>>>> remotes/origin/master
    handleOnePrice (e) {
      // 过滤
      this.smallPrice = e.target.value.replace(/[^\d]/g, '')
    },
    handleTwoPrice (e) {
      this.bigPrice = e.target.value.replace(/[^\d]/g, '')
    },
<<<<<<< HEAD
=======
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    },
>>>>>>> remotes/origin/master
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
<<<<<<< HEAD
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
=======
      if (keywords[1]) {
        this.selectBrand = []
        this.selectSpec = []
      }
      this.isSelectBrand = true
      let priceRange = ''
      let userPrice = []
      if (this.smallPrice !== '' && this.smallPrice >= 0) {
        userPrice.push(this.smallPrice)
      }
      if (this.bigPrice !== '' && this.bigPrice >= 0) {
        userPrice.push(this.bigPrice)
      }
      userPrice.sort()
      if (userPrice.length) {
        if (userPrice.length === 1) {
          priceRange = userPrice[0].toString() + '-' + userPrice[0].toString()
        } else if (userPrice.length === 2) {
          priceRange = userPrice[0].toString() + '-' + userPrice[1].toString()
        }
>>>>>>> remotes/origin/master
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
<<<<<<< HEAD
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
        this.currentPage = 1
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
=======
      this.$router.push({ path: '/search', query: searchMap })
      if (searchMap.brand) {
        this.isSelectBrand = false
      }
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
              this.specNavList.push({spec: this.specList[i].text, id: this.specList[i].id})
            }
          }
          // this.specNavList = [...new Set(this.specNavList)]
        }
      })
    },
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
>>>>>>> remotes/origin/master
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
<<<<<<< HEAD
        this.currentPage = 1
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
      this.currentPage = 1
      this.search([this.keywords, false])
    },
    // 提交指定价格区间
    btnPrice () {
      this.currentPage = 1
      this.search([this.keywords, false])
    },
    // 结果条件过滤
=======
      }
      console.log('over', this.selectSpec)
      // this.isSelectBrandMore = true
      this.search([this.keywords, false])
      this.isSelectSpec.push(rollNum)
    },
    selectBrandMore (event) { // 品牌多选
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
    selectMore (event, index) { // spec多选
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
    more (event, index) { // 更多
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
>>>>>>> remotes/origin/master
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
<<<<<<< HEAD
      this.currentPage = 1
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
=======
      this.search([this.keywords, false])
>>>>>>> remotes/origin/master
    }
  },
  watch: {
    currentPage (newPage) {
      this.search([this.keywords, false])
<<<<<<< HEAD
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
=======
>>>>>>> remotes/origin/master
    }
  }
}

</script>
<style scoped>
@import "../../assets/css/search/search.css";
<<<<<<< HEAD
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
.video_play {
  position: absolute;
  bottom: 1px;
  z-index: 100;
  font-size: 36px;
  color: #404040;
  border-radius: 50%;
  line-height: 35px;
}
.t3D_play {
  width: 45px;
  height: 45px;
  left: initial;
  right: 6px;
  border: 1px solid transparent;
}
/*.t3D_play:hover {
  border: 1px solid rgba(64, 64, 64, 0.33);
}*/
.t3D_play>img {
  max-width: 100%;
  max-height: 100%;
}
  .mk_waiting_box {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0, 0.1);
    z-index: 1000;
    overflow-y: hidden;
  }
  .mk_waiting {
    position: relative;
    left: 50%;
    top: 50%;
    width: 380px;
    transform: translate(-50%, -50%);
  }
  .mk_waiting_close {
    position: absolute;
    color: red;
    right: 4px;
    top: 4px;
    font-size: 20px;
    cursor: pointer;
  }
  .mk_waiting_img {
    max-height: 100%;
    max-width: 100%;
    border-radius: 8px;
  }
=======
>>>>>>> remotes/origin/master
</style>
