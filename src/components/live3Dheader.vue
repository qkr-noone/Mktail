<template>
  <div>
    <header class="mk-header">
      <div class="mk-head">
        <div class="h-logo" ref='logoIsCursor'>
          <router-link :to="{path: '/home'}" ><img src="static/img/mk_user_logo.png"></router-link>
          <h1>{{title}}</h1>
        </div>
        <div class="title-se">
          <form action="#" @submit.prevent>
            <div class="search_box">
              <div class="search_ipt">
                <input type="text" ref="search_ipt" name="pro_search" placeholder="search product" @keyup.enter="searchPro">
                <a @click="searchPro" class="search_btn">搜索</a>
              </div>
            </div>
          </form>
          <div class="title-con">
            <router-link :to="{path: '/home'}" class="title-li"><h2>平台首页</h2></router-link>
            <router-link :to="{path: '/'}" class="title-li"><h2>店铺首页</h2></router-link>
            <router-link :to="{path: '/detail', query:{goodsId: goodsId}}" class="title-li"><h2>产品详情</h2></router-link>
            <router-link :to="{path: '/'}" class="title-li"><h2>客服</h2></router-link>
          </div>
        </div>
        <div class="addCart" @click="toCart">
          <img src="static/img/mk_search_cart.png">
          <p>我的购物车</p>
          <span v-if="cartNum > 99">99</span>
          <span v-else>{{cartNum}}</span>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {}
  },
  props: {
    title: {
      type: String,
      default: 'MKTail'
    },
    goodsId: {
      type: String,
      default: ''
    }
  },
  computed: {
    ...mapState(['cartList']),
    cartNum () {
      let num = 0
      this.cartList && this.cartList.forEach(item => {
        item.orderItemList.forEach(list => {
          num += Number(list.num)
        })
      })
      return num
    }
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
          console.log('..')
          this.$emit('showSearch', [SEARCH_VALUE, IS_LOAD]) // 调用search 页面的showSearch 方法
        } else {
          this.$router.push({path: '/search', query: {keywords: SEARCH_VALUE}})
        }
      }
    },
    toCart () {
      this.$router.push({path: '/cart'})
    }
  }
}
</script>
<style scoped>
/* mk-header */
  .mk-header {
    min-width: 990px;
    margin: 0 auto;
    background-color: #FFFFFF;
  }
  .h-logo {
    padding:29px 11px 29px 0px;
  }
  .mk-head{
    width: 1226px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    position: relative;
  }

/* 搜索 */
  .search_box{
    box-sizing: content-box;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    height: 50px;
    width: 335px;;
    margin: auto;
  }
  .search_ipt {
    width: 335px;
    border: 2px solid #E71600;
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
    border: none;
    margin-left: 18px;
    -webkit-appearance: none;
    outline: none;
    margin-bottom: 2px;
    margin-top: 2px;
  }
  .search_btn {
    width: 60px;
    justify-content: center;
    font-size: 26px;
    text-align: center;
    line-height: 30px;
    display: flex;
    align-items: center;
    font-size: 18px;
    color: #fff;
    cursor: pointer;
    background-color: #E71600;
  }

/*logo*/
  .h-logo{
    display: flex;
    align-items: center;
  }
  .h-logo h1{
    margin-left: 12px;
    font-size: 25px;
    color:rgba(104,85,65,1);
  }

/* 左侧 类别切换*/
  .title-se {
    display: flex;
    justify-content: flex-end;
    flex-grow: 1;
    display: flex;
    align-items: center;
    margin-right: 10px;
  }
  .title-con {
    margin:0 43px;
  }
  .title-se h2{
    font-size: 18px;
    color: #363636;
  }
  .title-con a + a {
    margin-left: 20px;
  }

/* 加入购物车 */
  .addCart {
    width:150px;
    height:35px;
    background:rgba(246,246,246,1);
    border:1px solid rgba(198,198,198,1);
    display: flex;
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
