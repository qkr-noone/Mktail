<template>
  <div id="user">
    <shortcut></shortcut>
    <userNav :color="bgcolor"></userNav>
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
            aaa
          </div>
          <transition>
            <router-view></router-view>
          </transition>
        </div>
      </div>
    </div>
    <regFooter></regFooter>
  </div>
</template>
<script>
// import { apiAxios } from '../../common/utils'
// import { api } from '../../common/api'
import shortcut from '../../components/shortcutHeader'
import userNav from '../../components/userNav'
import regFooter from '../../components/regFooter'
export default {
  data () {
    return {
      title: '安全设置',
      nav: [
        {name: '账号管理', path: 'account'},
        {name: '安全设置', path: 'secure'},
        {name: '手机绑定', path: 'bindingPhone'},
        {name: '密保问题设置', path: 'secretSet'},
        {name: '个人资料', path: 'personalInfo'},
        {name: '收货地址', path: 'address'},
        {name: '消息提醒设置', path: 'message'},
        {name: '支付宝绑定', path: 'alipay'},
        {name: '微博绑定', path: 'weibo'},
        {name: '微信绑定', path: 'WeChat'},
        {name: '银联卡绑定', path: 'bankCard'},
        {name: '分享绑定', path: 'share'},
        {name: '应用绑定', path: 'app'}
      ],
      bgcolor: '#FFD704'
    }
  },
  components: { shortcut, userNav, regFooter },
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
      this.$router.push({path: '/userSet/' + e.path})
      this.title = e.name
    }
  }
}

</script>
<style scoped>
@import '../../assets/css/user/user-set.css';
</style>
