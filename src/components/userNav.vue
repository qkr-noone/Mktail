<template>
  <div ref='bgcolor' data-component="userNav">
    <header class="mk-header">
      <div class="mk-head">
        <div class="h-logo" ref='logoIsCursor'>
          <router-link :to="{path: '/home'}" ><img src="static/img/mk_user_logo.png"></router-link>
        </div>
        <div class="title-se">
          <h1>我的MKTail</h1>
          <div class="title-con">
            <router-link :to="{path: '/user'}" class="title-li"><h2>首页</h2></router-link>
            <router-link :to="{path: '/userSet'}" class="title-li"><h2>账号设置</h2></router-link>
            <!-- <router-link :to="{path: '/userInfo'}" class="title-li"><h2>消息</h2></router-link> -->
          </div>
        </div>
        <div class="h-search">
          <form action="#" @submit.prevent>
            <div class="search_box">
              <div class="search_ipt">
                <input type="text" ref="search_ipt" name="user_search" placeholder="search product" @keyup.enter="searchPro">
                <a @click="searchPro" class="search_btn">搜索</a>
              </div>
            </div>
          </form>
        </div>
        <div class="addCart" @click="goCart()">
          <img src="static/img/mk_search_cart.png">
          <p>我的购物车</p>
          <span v-if="isOver">99</span>
          <span v-else>{{cartNum}}</span>
        </div>
        <!-- <div class="switch" v-if="isUser">
          <div class="switch-line"></div>
          <div class="switch-p"><a>切换卖家版</a></div>
        </div> -->
      </div>
    </header>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'headerNav',
  data () {
    return {
      isOver: 0, // 是否超过99
      isUser: false // 用户中心首页
    }
  },
  props: {
    color: {
      type: String,
      default: '#fff'
    }
  },
  computed: {
    ...mapState({
      cartList: state => state.cart.cartList
    }),
    cartNum () {
      let num = 0
      this.cartList.length && this.cartList.forEach(item => {
        item.orderItemList.forEach(list => {
          num += Number(list.num)
        })
      })
      return num
    }
  },
  created () {
    let path = this.$route.path.split('/')[1]
    if (path === 'user') {
      this.isUser = true
    }
  },
  mounted () {
    this.$refs.bgcolor.style.backgroundColor = this.color
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
    goCart () {
      this.$router.push({path: 'cart'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* mk-header */
  .mk-header {
    margin: 0 auto;
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
    position: relative;
  }

/* 搜索 */
  .h-search {
    display: flex;
    flex-direction: column;
    margin-right: 38px;
  }
  .search_box{
    box-sizing: content-box;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    height: 50px;
    width: 342px;;
    margin: auto;
  }
  .search_ipt {
    width: 338px;
    border: 2px solid #E71600;
    height: 34px;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    background-color: #fff;
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
    /*input 边框 无法设置其为0*/
    margin-top: 2px;
    margin-bottom: 2px;
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

/* 左侧logo 类别切换*/
  .title-se {
    flex-grow: 1;
    display: flex;
    align-items: center;
    margin-right: 10px;
  }
  .title-con {
    margin-left: 70px;
  }
  .title-se > h1{
    font-size: 25px;
    color:rgba(104,85,65,1);
  }
  .title-se h2{
    font-size: 22px;
    color:rgba(141,141,141,1);
  }
  .title-con a + a h2 {
    margin-left: 36px;
  }

/* 加入购物车 */
  .addCart {
    width:150px;
    height:35px;
    background:rgba(246,246,246,1);
    border:1px solid rgba(198,198,198,1);
    margin-right: 1px;
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
/* 切换卖家版 */
  .switch {
    position: absolute;
    bottom: -124px;
    left: -45px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .switch-line {
    width:2px;
    height:35px;
    background-color: #fff;
  }
  .switch-p {
    width:30px;
    height:90px;
    border-radius:10px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .switch-p a {
    font-size:14px;
    width: 15px;
    color:rgba(106,106,106,1);
    display: flex;
    align-items: center;
  }
</style>
