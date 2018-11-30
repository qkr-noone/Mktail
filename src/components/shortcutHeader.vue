<template>
  <div>
    <div class="mk-shortcut">
      <div class="shortcut">
        <div class="sc-left">
          <p>欢迎来到猴尾巴</p>
          <router-link :to="{ path: '/login' }" >请登录</router-link>
          <router-link :to="{ path: '/register' }" >免费注册</router-link>
        </div>
        <div class="sc-right">
          <ul>
            <li>
              <div><a href="">我的猴尾巴</a></div>
            </li>
            <li>
              <div><a href="">购物车80件</a></div>
            </li>
            <li>
              <div><a href="">企业采购</a></div>
            </li>
            <li>
              <div><a href="">实力商家</a></div>
            </li>
            <li>
              <div><a href="">客服中心</a></div>
            </li>
            <li>
              <div><a href="">网站导航</a></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <header class="mk-header">
      <div class="mk-head">
        <div class="h-logo">
          <a href=""><img src="../../static/img/logo-234-148.png"></a>
        </div>
        <div class="h-search">
          <form action="#" id="search_form">
            <div class="search_box">
              <div class="search_ipt" id="search_ipt_box">
                <input type="text" id="search_ipt" placeholder="search product">
              </div>
              <router-link :to="{path: '/search'}" class="search_btn bolder" id="search_btn"><img src="../../static/img/search.png"></router-link>
            </div>
          </form>
        </div>
        <div class="h-other"></div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'shortcutHeader',
  data () {
    return {}
  },
  props: ['data']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* shortcut*/
  .mk-shortcut {
    min-width: 990px;
    margin: 0 auto;
    background-color: #f5f5f5;
  }
  .shortcut{
    max-width: 1260px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    height: 35px;
    align-items: center;
  }
  .shortcut .sc-left{
    display: flex;
  }
  .sc-left a, .sc-left p{
    color: #333;
    font-size: 12px;
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
    font-size: 12px;
    color: #333;
  }

/* mk-header */
  .mk-header {
    min-width: 990px;
    margin: 0 auto;
    background-color: #fff;
  }
  .mk-head{
    max-width: 1260px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .search_box {
    box-sizing: content-box;
    border: 1px solid purple;
    display: flex;
    justify-content: space-between;
  }

/* 搜索 */
  .search_box {
    margin: 10px 20px 20px 20px;
    overflow: hidden;
    height: 40px;
    width: 310px;
  }
  .search_ipt {
    width: 250px;
    border: none;
    border-radius: 0;
    float: left;
    height: 40px;
    overflow: hidden;
    position: relative;
  }
  .search_ipt>input {
    height: 12px;
    line-height: 12px;
    font-size: 15px;
    padding: 12px 10px 12px 0;
    border: none;
    width: calc(100% - 40px);
    float: left;
    margin-left: 15px;
    -webkit-appearance: none;
    outline: none;
  }
  .search_btn {
    float: left;
    width: 30px;
    height: 35px;
    text-align: center;
    line-height: 30px;
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #444;
    cursor: pointer;
    background-color: #fff;
  }
  .search_btn img{
    width: 25px;
    background-color: #fff;
    margin-left: 2px;
  }

</style>
