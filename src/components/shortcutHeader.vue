<template>
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
              <div><router-link :to="{path:'/user'}">我的订单</router-link></div>
            </li>
            <li>
              <div><router-link :to="{path:'/user'}">消息中心</router-link></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'shortcutHeader',
  data () {
    return {
      isHome: '',
      username: ''
    }
  },
  props: [],
  computed: {
    ...mapState(['userInfo'])
  },
  created () {
    let curRoute = this.$route.path
    this.isHome = (curRoute === '/home' ? '' : '/home')
  },
  mounted () {
    this.username = this.$cookies.isKey('userInfo') ? this.$cookies.get('userInfo').username : ''
  },
  methods: {
    home () {
      this.$router.push({path: '/home'})
    }
  },
  watch: {
    userInfo () {
      console.log('userInfo')
      this.username = this.$cookies.isKey('userInfo') ? this.$cookies.get('userInfo').username : ''
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
  }
  .sc-right >ul li+li {
    margin-left: 24px;
  }
  .sc-right >ul li a{
    line-height: 12px;
    text-align: center;
    color: #000;
  }

</style>
