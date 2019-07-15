<template>
  <div data-component="headerNav">
    <header class="mk-header">
      <div class="mk-head">
        <div class="h-logo" ref='logoIsCursor'>
          <router-link :to="{path: isHome}" ><img src="static/img/mk_logo_main.png"></router-link>
        </div>
        <div class="h-search">
          <form action="#" @submit.prevent>
            <div class="search_box">
              <div class="search_ipt">
                <input type="text" ref="search_ipt" name="search" placeholder="" @keyup.enter="searchPro">
                <a @click="searchPro" class="search_btn">搜索</a>
              </div>
            </div>
          </form>
          <div class="search-tip">
            <ul>
              <!-- <li><a data-tem='暂存'></a></li> -->
              <li v-for="(item, index) in searchHistory" :key="item.time" v-if="index<5"><a @click="searchIt(item.val)" href='javascript:;'>{{item.val}}</a></li>
            </ul>
          </div>
        </div>
        <div class="download-app" v-if="isHome">
          <img @click="downloadAppBox=true" :src="download_app">
          <p>扫码关注公众号</p>
        </div>
        <div class="addCart" @click="toCart">
          <img src="static/img/mk_search_cart.png">
          <p>我的购物车</p>
          <span v-if="cartNum > 99">99</span>
          <span v-else>{{cartNum}}</span>
        </div>
      </div>
    </header>
    <div class="mk_waiting_box" @click="downloadAppBox=false" v-if="downloadAppBox">
      <div class="mk_waiting">
        <i class="el-icon-close mk_waiting_close" @click="downloadAppBox=false"></i>
        <img class="mk_waiting_img" @click.stop :src="download_app">
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getStore, setStore } from '@/common/utils'
export default {
  name: 'headerNav',
  data () {
    return {
      isHome: '', // 判断logo 是否可触发home点击
      // isShops: false
      searchHistory: [],
      download_app: 'static/img/mk_app_download.jpg',
      downloadAppBox: false
    }
  },
  props: [],
  computed: {
    ...mapState({
      cartList: state => state.cart.cartList
    }),
    cartNum () {
      let num = 0
      this.cartList !== '[]' && this.cartList.length && this.cartList.forEach(item => {
        item.orderItemList.forEach(list => {
          num += Number(list.num)
        })
      })
      return num
    }
  },
  created () {
    let curRoute = this.$route.path
    this.isHome = (curRoute === '/home' ? '' : '/home')
    // curRoute === '/shops' ? this.isShops = true : this.isShops = false
  },
  mounted () {
    if (!this.isHome && this.$refs.logoIsCursor) {
      this.$refs.logoIsCursor.children[0].style.cursor = 'default'
    }
    this.searchHistory = JSON.parse(getStore('SEARCH_VALUE'))
  },
  activated () {
    this.searchHistory = JSON.parse(getStore('SEARCH_VALUE'))
  },
  methods: {
    searchPro () {
      let SEARCH_VALUE = this.$refs.search_ipt.value
      let IS_LOAD = true // 重新关键词search
      let searchMap =
        {
          keywords: '',
          category: '',
          brand: '', // 品牌
          spec: {}, // 规格
          price: '',
          pageNo: 1,
          pageSize: 40,
          sort: '', // 排序  ASC -升序  DESC-降序
          sortField: '' // 排序变量
        }
      this.$router.push({query: searchMap})
      if (SEARCH_VALUE) {
        // 判断当前是否在搜索页
        if (this.$route.path === '/search') {
          this.$emit('showSearch', [SEARCH_VALUE, IS_LOAD]) // 调用search 页面的showSearch 方法
        } else {
          this.$router.push({path: '/search', query: {keywords: SEARCH_VALUE}})
        }
        this.searchHistory.unshift({ val: SEARCH_VALUE, time: new Date().getTime() })
        setStore('SEARCH_VALUE', this.searchHistory)
      }
    },
    toCart () {
      this.$router.push({path: '/cart'})
    },
    searchIt (val) {
      this.$refs.search_ipt.value = val
      this.searchPro()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* mk-header */
  .mk-header {
    min-width: 990px;
    margin: 0 auto;
    background-color: #FFFFFF;
  }
  .h-logo {
    padding:29px 23px 36px 23px;
    box-shadow:0px 0px 11px 2px rgba(83,83,83,0.22);
  }
  .mk-head{
    width: 1226px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
  }

/* 搜索 */
  .h-search {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
  .search_box{
    box-sizing: content-box;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    height: 50px;
    width: 550px;
    margin: auto;
  }
  .search_ipt {
    width: 550px;
    border: 2px solid #E71600;
    /*border-radius: 23px 23px 23px 23px;*/
    height: 34px;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
  }
  .search_ipt>input {
    flex-grow: 1;
    height: 22px;
    line-height: 22px;
    font-size: 20px;
    padding: 4px 10px 4px 0;
    margin-bottom: 2px;
    margin-top: 2px;
    border: none;
    margin-left: 18px;
    -webkit-appearance: none;
    outline: none;
  }
  .search_btn {
    width: 86px;
    justify-content: center;
    font-size: 26px;
    text-align: center;
    line-height: 30px;
    display: flex;
    align-items: center;
    font-size: 26px;
    color: #fff;
    cursor: pointer;
    background-color: #E71600;
  }
  .search-tip {
    display: flex;
    align-items: center;
    width: 550px;
    overflow: hidden;
    margin: auto;
  }
  .search-tip ul {
    margin-left: 14px;
    margin-top: 5px;
    font-size: 16px;
    color: #878787;
    display: flex;
  }
  .search-tip ul li {
    padding: 0 11px;
  }
  .search-tip ul li a {
    color: rgba(0, 0, 0, 0.65);
  }
  .search-tip ul li + li{
    border-left: 1px solid #878787;
  }

/* 下载app*/
  .download-app {
    display: flex;
    align-items: center;
    margin-right: 18px;
    font-size: 14px;
    flex-shrink: 0;
    margin-bottom: 23px;
  }
  .download-app p{
    margin-left: 12px;
  }
  .download-app img {
    width: 50px;
    height: 50px;
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
/* 加入购物车 */
  .addCart {
    width:150px;
    height:35px;
    background:rgba(246,246,246,1);
    border:1px solid rgba(198,198,198,1);
    margin-bottom: 23px;
    margin-right: 68px;
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .addCart p{
    margin: 0 4px;
  }
  .addCart img{margin-left: 5px;}
  .addCart span{margin-right: 5px; width: 21px; height: 21px; border-radius: 50%;background-color: red; color: #fff;line-height: 21px; text-align: center;}
</style>
