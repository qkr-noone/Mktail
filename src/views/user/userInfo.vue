<template>
  <div id="user">
    <shortcut></shortcut>
    <userNav></userNav>
    <div class="py-container">
      <div class="user">
        <div class="account-sidebar">
          <div class="gray-box ">
            <div class="box-inner">
              <ul class="account-nav">
                <li v-for="(item,i) in nav" :key='i' :class="{current:item.name===title}"  @click="tab(item)">
                  <a href="javascript:;">{{item.name}}</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="account-content">
          <div class="con-wrap" v-if="!title">
            111
          </div>
          <transition v-else>
            <router-view></router-view>
          </transition>
        </div>
      </div>
    </div>
    <pageFooter></pageFooter>
  </div>
</template>
<script>
import shortcut from '@/components/shortcutHeader'
import userNav from '@/components/userNav'
import pageFooter from '@/components/pageFooter'
export default {
  data () {
    return {
      title: '1',
      nav: [
        {name: '购物车', path: 'userCart'},
        {name: '我的订单', path: 'userOrder'},
        {name: '我的收藏', path: 'userCollect'},
        {name: '我的评价', path: 'userAssess'},
        {name: '我的足迹', path: 'userHistory'},
        {name: '我的优惠', path: 'userFee'},
        {name: '我的发票', path: 'userTip'},
        {name: '退款维权', path: 'userProtect'},
        {name: '购买过的店铺', path: 'userBuyHistory'}
      ]
    }
  },
  components: { shortcut, userNav, pageFooter },
  created () {
    this.$cookies.get('userInfo')
    let path = this.$route.path.split('/')[2]
    this.nav.forEach(item => {
      if (item.path === path) {
        this.title = item.name
      }
    })
  },
  mounted () {
  },
  methods: {
    tab (e) {
      this.$router.push({path: '/userInfo/' + e.path})
      this.title = e.name
    }
  }
}

</script>
<style scoped>
@import '../../assets/css/user/user.css';
  .user {
    display: flex;
    justify-content: space-between;
  }
  .account-sidebar {
    width: 135px;
    border-radius: 6px;
  }
  .gray-box {
    overflow: hidden;
    background: #fff;
    box-shadow: 0 3px 8px -6px rgba(0,0,0,.1);
  }
  .account-sidebar .account-nav {
    padding-top: 15px;
    padding-bottom: 15px;
  }
  .account-sidebar .avatar {
    padding-top: 20px;
    border-radius: 10px;
    text-align: center;
  }
  .account-sidebar .account-nav li {
    position: relative;
    margin-top: 13px;
  }
  .account-sidebar .account-nav li a {
    font-style: normal;
    text-decoration: none;
    color:rgba(36,36,36,1);
    font-size:14px;
    cursor: pointer;
    transition: all .15s ease-out;
    display: block;
    padding-left: 30px;
    text-align: left;
  }
  .account-sidebar .account-nav li.current a {
    position: relative;
    z-index: 1;
    color: red;
  }
  .account-content {
    width: 1083px;
    margin-left: 5px;
  }

</style>
