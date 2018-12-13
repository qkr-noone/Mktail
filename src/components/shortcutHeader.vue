<template>
  <div>
    <div class="mk-shortcut">
      <div class="shortcut">
        <div class="sc-left">
          <p>欢迎来到猴尾巴</p>
          <a ><i class="el-icon-location"></i>广州</a>
          <a>中文 <i class="el-icon-caret-bottom"></i></a>
        </div>
        <div class="sc-right">
          <ul>
            <li>
              <div><router-link :to="{path:'/login'}">登陆</router-link></div>
            </li>
            <li>
              <div><router-link :to="{path:'/register'}">注册</router-link></div>
            </li>
            <li>
              <div><router-link :to="{path:'/cart'}">购物车</router-link></div>
            </li>
            <li>
              <div><router-link :to="{path:'/user'}">消息中心</router-link></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <header class="mk-header">
      <div class="mk-head">
        <div class="h-logo" ref='logoIsCursor'>
          <router-link :to="{path: isHome}" ><img src="../../static/img/logo-118-69.png"></router-link>
          <span>MkTail</span>
          <!-- <div v-if="isShops"><span>豪希睿官方旗舰店</span><i class="el-icon-service"></i></div> -->
        </div>
        <div class="h-search">
          <form action="#">
            <div class="search_box">
              <div class="search_ipt">
                <input type="text" ref="search_ipt" placeholder="search product">
                <a @click="searchPro" class="search_btn">搜索</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'shortcutHeader',
  data () {
    return {
      isHome: '' // 判断logo 是否可触发home点击
      // isShops: false
    }
  },
  props: [],
  created () {
    let curRoute = this.$route.path
    this.isHome = (curRoute === '/home' ? '' : '/home')
    // curRoute === '/shops' ? this.isShops = true : this.isShops = false
  },
  mounted () {
    if (!this.isHome) {
      this.$refs.logoIsCursor.children[0].style.cursor = 'default'
    }
  },
  methods: {
    searchPro () {
      let SEARCH_VALUE = this.$refs.search_ipt.value
      if (SEARCH_VALUE) {
        // 判断当前是否在搜索页
        if (this.$route.path === '/search') {
          this.$emit('showSearch', SEARCH_VALUE) // 调用search 页面的showSearch 方法
        } else {
          this.$router.push({path: '/search', query: {keywords: SEARCH_VALUE}})
        }
      }
    }
    // watchEnter (event) {
    //   console.log('eenter')
    //   if (event.keyCode === 13) return false
    //   let SEARCH_VALUE = this.$refs.search_ipt.value
    //   var keyCode = window.event ? event.keyCode : event.which
    //   if (keyCode === 13 && SEARCH_VALUE) {
    //     this.searchPro()
    //   }
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* shortcut*/
  .mk-shortcut {
    min-width: 990px;
    margin: 0 auto;
    background-color: #353535;
    font-family: "SimHei";
    font-size: 12px;
    color: #ffffff;
  }
  .shortcut{
    max-width: 1230px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    height: 35px;
    align-items: center;
  }
  .shortcut .sc-left{
    display: flex;
  }

  .sc-left a{
    margin-left: 10px;
  }
  .shortcut .sc-right{
    display: flex;
    justify-content: flex-end;
    flex-grow: 1;
  }
  .sc-right >ul {
    display: flex;
    justify-content: flex-end;
  }
  .sc-right >ul li+li{
    margin-left: 10px;
  }
  .sc-right >ul li a{
    line-height: 12px;
    text-align: center;
    color: #fff;
  }

/* mk-header */
  .mk-header {
    min-width: 990px;
    margin: 0 auto;
    background-color: #F4F4F4;
  }
  .h-logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 13px;
  }
  .h-logo span {
    font-size: 27px;
    color: #754C24;
    font-family: "Bahnschrift";
    text-align: left;
    margin-left: 8px;
    margin-bottom: 30px;
  }
  .mk-head{
    max-width: 1230px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
  }

/* 搜索 */
  .h-search {
    flex-grow: 1
  }
  .search_box {
    box-sizing: content-box;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    height: 50px;
    width: 650px;
    margin: auto;
  }
  .search_ipt {
    width: 650px;
    border: 2px solid #FFD704;
    border-radius: 23px 23px 23px 23px;
    height: 46px;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
  }
  .search_ipt>input {
    flex-grow: 1;
    height: 22px;
    line-height: 22px;
    font-size: 20px;
    padding: 12px 10px 12px 0;
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
    background-color: #FFD704;
  }

</style>
