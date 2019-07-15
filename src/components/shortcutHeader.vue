<template>
<<<<<<< HEAD
  <div name='shortcutHeader'>
    <div class="mk-shortcut">
      <div class="shortcut">
        <div class="sc-left">
          <p v-if="this.isHome" class="backHome child" @click="home">返回首页</p>
          <p class="child" @click="MK_CODE('网站导航')">网站导航</p>
          <a class="child" @click="MK_CODE('商家服务')">商家服务</a>
          <a class="child" @click="MK_CODE('客户服务')">客户服务</a>
          <a class="child" @click="MK_CODE('客户服务')"><i class="el-icon-location"></i>广州</a>
        </div>
        <div class="sc-right">
          <ul>
            <li class="child" v-if="Object.keys(userInfo).length === 0" @click="goPage({path:'/login'})">
              <div><a>登陆</a></div>
            </li>
            <li class="spacer"  v-if="Object.keys(userInfo).length === 0"></li>
            <li class="child" v-if="Object.keys(userInfo).length === 0" @click="goPage({path:'/register'})">
              <div><a>注册</a></div>
            </li>
            <li class="spacer"  v-if="Object.keys(userInfo).length === 0"></li>
            <li class="child"  v-if="Object.keys(userInfo).length !== 0">
              <div><router-link :to="{path:'/user'}">{{userInfo.username}}<i class="el-icon-arrow-down  down"></i></router-link></div>
              <div class="logout" @click="logout">
                <span>退出</span>
              </div>
            </li>
            <li class="spacer" v-if="Object.keys(userInfo).length !== 0"></li>
            <li class="child" @click="goPage({path:'/user'})">
              <div><router-link :to="{path:'/user'}">我的MkTail</router-link></div>
            </li>
            <li class="spacer"></li>
            <li class="child" @click="becomeStore()">
              <div><a>商家入驻</a></div>
            </li>
            <!-- <li class="spacer"></li>
            <li class="child">
              <div><router-link :to="{path:'/user'}">消息中心</router-link></div>
            </li> -->
=======
  <div>
    <div class="mk-shortcut">
      <div class="shortcut">
        <div class="sc-left">
          <p v-if="this.isHome" class="backHome" @click="home">返回首页</p>
          <p>网站导航</p>
          <a>商家服务</a>
          <a>客户服务</a>
          <a ><i class="el-icon-location"></i>广州</a>
        </div>
        <div class="sc-right">
          <ul>
            <li v-if="!username">
              <div><router-link :to="{path:'/login'}">登陆</router-link></div>
            </li>
            <li v-if="!username">
              <div><router-link :to="{path:'/register'}">注册</router-link></div>
            </li>
            <li  v-if="username">
              <div><router-link :to="{path:'/user'}">{{username}}</router-link></div>
            </li>
            <li>
              <div><router-link :to="{path:'user'}">我的订单</router-link></div>
            </li>
            <li>
              <div><router-link :to="{path:'/user'}">消息中心</router-link></div>
            </li>
>>>>>>> remotes/origin/master
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
<<<<<<< HEAD
import { mapState, mapMutations } from 'vuex'
=======
import { mapState } from 'vuex'
>>>>>>> remotes/origin/master
export default {
  name: 'shortcutHeader',
  data () {
    return {
<<<<<<< HEAD
      isHome: ''
=======
      isHome: '',
      username: ''
>>>>>>> remotes/origin/master
    }
  },
  props: [],
  computed: {
<<<<<<< HEAD
    ...mapState({
      userInfo: state => state.user.userInfo
    })
=======
    ...mapState(['userInfo'])
>>>>>>> remotes/origin/master
  },
  created () {
    let curRoute = this.$route.path
    this.isHome = (curRoute === '/home' ? '' : '/home')
  },
<<<<<<< HEAD
  methods: {
    ...mapMutations(['MK_CODE']),
    home () {
      this.$router.push({path: '/home'})
    },
    logout () {
      this.$store.dispatch('USER_LOGOUT').then(() => {
        this.$store.commit('CART_LIST', [])
        location.reload()
      })
    },
    goPage (router) {
      this.$router.push({path: router.path})
    },
    becomeStore () {
      window.open(this.AFTERIP + '/#/login')
=======
  mounted () {
    this.username = this.$cookies.isKey('userInfo') ? this.$cookies.get('userInfo').username : ''
  },
  activated () {
    // this.username = this.$cookies.isKey('userInfo') ? this.$cookies.get('userInfo').username : ''
  },
  deactivated () {},
  methods: {
    home () {
      this.$router.push({path: '/home'})
    }
  },
  watch: {
    userInfo () {
      console.log('userInfo')
      this.username = this.$cookies.isKey('userInfo') ? this.$cookies.get('userInfo').username : ''
>>>>>>> remotes/origin/master
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* shortcut*/
  .backHome {
    margin-right: 24px;
    cursor: pointer;
  }
  .mk-shortcut {
    min-width: 990px;
    margin: 0 auto;
    background-color: #ECECEC;
    font-family: "SimHei";
    font-size: 14px;
    color: #000;
  }
  .shortcut{
    max-width: 1226px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    height: 35px;
    align-items: center;
  }
  .shortcut .sc-left{
    display: flex;
  }
<<<<<<< HEAD
  .sc-right .child, .sc-left .child {
    height: 35px;
    line-height: 35px;
    cursor: pointer;
  }
=======

>>>>>>> remotes/origin/master
  .sc-left a{
    margin-left: 24px;
  }
  .shortcut .sc-right{
    display: flex;
    justify-content: flex-end;
    flex-grow: 1;
  }
  .sc-right >ul {
    display: flex;
    justify-content: flex-end;
<<<<<<< HEAD
    align-items: center;
  }
  .sc-right >ul li:not(.spacer) {
    position: relative;
    padding: 0 12px;
    border: 1px solid transparent;
  }
  li.spacer {
    width: 1px;
    height: 10px;
    background-color: #ccc;
  }
  .sc-right >ul li+li {
    /*border-left: 1px solid #ccc;*/
=======
  }
  .sc-right >ul li+li {
    margin-left: 24px;
>>>>>>> remotes/origin/master
  }
  .sc-right >ul li a{
    line-height: 12px;
    text-align: center;
    color: #000;
  }
<<<<<<< HEAD
  .down {
    margin-left: 5px;
    color: #999;
  }
  .logout {
    position: absolute;
    background-color: #fff;
    top: 33px;
    right: -1px;
    width: 100%;
    padding: 10px 0;
    display: none;
    border: 1px solid #ddd;
    border-top: none;
    box-shadow: 1px 2px 1px rgba(0,0,0,.1);
    z-index: 22;
  }
  .sc-right >ul li:hover{
    background-color: #fff;
    border: 1px solid #ddd;
  }
  .sc-right >ul li:hover .logout {
    cursor: pointer;
    display: block;
  }
=======

>>>>>>> remotes/origin/master
</style>
