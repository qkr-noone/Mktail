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
import shortcut from '@/components/shortcutHeader'
import userNav from '@/components/userNav'
import regFooter from '@/components/regFooter'
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
  #user{
    background-color: #fff;
  }
  .py-container {
    width: 1226px;
    margin: 0 auto;
    margin-bottom: 40px;
  }
  .con-wrap {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .user {
    display: flex;
    justify-content: space-between;
  }
  .account-sidebar {
    width: 135px;
    border-radius: 6px;
  }
  .con-item {
    margin-left: 40px;
    font-weight:400;
  }
  .con-item img{
    display: inline;
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
    margin-bottom: 20px;
    min-height: 800px;
  }
  .con-de {
    border: 1px solid #F4F4F4;
    flex-grow: 1;
  }
  .title {
    height:41px;
    line-height: 41px;
    display: flex;
  }
  .title a {
    border:1px solid rgba(244,244,244,1);
    padding: 7px 20px;
    font-size: 24px;
    line-height: 24px;
    font-weight:bold;
    color: #000000;
  }
  .start:before{
    content: "*";
    color:#FF6641;
    margin-right:10px;
  }
</style>
