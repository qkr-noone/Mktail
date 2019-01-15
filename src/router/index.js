import Vue from 'vue'
import Router from 'vue-router'
import VueCookies from 'vue-cookies'

Vue.use(VueCookies)
Vue.use(Router)

let router
router = new Router({
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop
      }
      return {x: 0, y: to.meta.savedPosition || 0}
    }
  },
  routes: [
    {
      path: '/home',
      meta: {
        keepAlive: true
      },
      component: resolve => require(['@/views/home/index'], resolve)
    },
    {
      path: '/',
      redirect: '/home',
      component: resolve => require(['@/views/home/index'], resolve)
    },
    {
      path: '/test',
      meta: {
        keepAlive: true
      },
      component: resolve => require(['@/views/test/index'], resolve)
    },
    {
      path: '/test/detail',
      component: resolve => require(['@/views/test/detail'], resolve)
    },
    {
      path: '/search',
      name: 'search',
      component: resolve => require(['@/views/search/index'], resolve)
    },
    {
      path: '/detail',
      redirect: '/detail/desciption',
      component: resolve => require(['@/views/detail/index'], resolve),
      children: [{
        path: 'desciption',
        component: resolve => require(['@/views/detail/children/desciption'], resolve)
      }, {
        path: '3D',
        component: resolve => require(['@/views/detail/children/3D'], resolve)
      }, {
        path: 'review',
        component: resolve => require(['@/views/detail/children/review'], resolve)
      }, {
        path: 'afterSale',
        component: resolve => require(['@/views/detail/children/afterSale'], resolve)
      }]
    },
    {
      path: '/addToCart',
      meta: {
        isLogin: true
      },
      component: resolve => require(['@/views/cart/addToCart'], resolve)
    },
    {
      path: '/cart',
      meta: {
        isLogin: true
      },
      component: resolve => require(['@/views/cart/cart'], resolve)
    },
    {
      path: '/getOrderInfo',
      meta: {
        isLogin: true
      },
      component: resolve => require(['@/views/cart/getOrderInfo'], resolve)
    },
    {
      path: '/pay',
      meta: {
        isLogin: true
      },
      component: resolve => require(['@/views/cart/pay'], resolve)
    },
    {
      path: '/paysuccess',
      meta: {
        isLogin: true
      },
      component: resolve => require(['@/views/cart/paysuccess'], resolve)
    },
    {
      path: '/payfail',
      meta: {
        isLogin: true
      },
      component: resolve => require(['@/views/cart/payfail'], resolve)
    },
    {
      path: '/register',
      component: resolve => require(['@/views/user/register'], resolve)
    },
    {
      path: '/register/paas',
      name: 'paas',
      component: resolve => require(['@/views/user/children/regPaas'], resolve)
    },
    {
      path: '/register/legal',
      name: 'legal',
      component: resolve => require(['@/views/user/children/regLegal'], resolve)
    },
    {
      path: '/register/pay',
      name: 'pay',
      component: resolve => require(['@/views/user/children/regPay'], resolve)
    },
    {
      path: '/register/privacy',
      name: 'privacy',
      component: resolve => require(['@/views/user/children/regPrivacy'], resolve)
    },
    {
      path: '/login',
      component: resolve => require(['@/views/user/login'], resolve)
    },
    { // 用户中心首页
      path: '/user',
      meta: {
        isLogin: true
      },
      component: resolve => require(['@/views/user/user'], resolve),
      children: [
        {
          path: 'userCart',
          component: resolve => require(['@/views/user/children/userCart'], resolve)
        },
        {
          path: 'userOrder',
          component: resolve => require(['@/views/user/children/userOrder'], resolve)
        },
        {
          path: 'userCollect',
          component: resolve => require(['@/views/user/children/userCollect'], resolve)
        },
        {
          path: 'userAssess',
          component: resolve => require(['@/views/user/children/userAssess'], resolve)
        },
        {
          path: 'userHistory',
          component: resolve => require(['@/views/user/children/userHistory'], resolve)
        },
        {
          path: 'userFee',
          component: resolve => require(['@/views/user/children/userFee'], resolve)
        },
        {
          path: 'userTip',
          component: resolve => require(['@/views/user/children/userTip'], resolve)
        },
        {
          path: 'userProtect',
          component: resolve => require(['@/views/user/children/userProtect'], resolve)
        },
        {
          path: 'userBuyHistory',
          component: resolve => require(['@/views/user/children/userBuyHistory'], resolve)
        }
      ]
    },
    { // 用户中心账户设置
      path: '/userSet',
      meta: {
        isLogin: true
      },
      component: resolve => require(['@/views/user/userSet'], resolve),
      children: [
        {
          path: 'account',
          component: resolve => require(['@/views/user/item/account'], resolve)
        },
        {
          path: 'address',
          component: resolve => require(['@/views/user/item/address'], resolve)
        },
        {
          path: 'alipay',
          component: resolve => require(['@/views/user/item/alipay'], resolve)
        },
        {
          path: 'app',
          component: resolve => require(['@/views/user/item/app'], resolve)
        },
        {
          path: 'bankCard',
          component: resolve => require(['@/views/user/item/bankCard'], resolve)
        },
        {
          path: 'bindingPhone',
          component: resolve => require(['@/views/user/item/bindingPhone'], resolve)
        },
        {
          path: 'message',
          component: resolve => require(['@/views/user/item/message'], resolve)
        },
        {
          path: 'personalInfo',
          component: resolve => require(['@/views/user/item/personalInfo'], resolve)
        },
        {
          path: 'secretSet',
          component: resolve => require(['@/views/user/item/secretSet'], resolve)
        },
        {
          path: 'secure',
          component: resolve => require(['@/views/user/item/secure'], resolve)
        },
        {
          path: 'share',
          component: resolve => require(['@/views/user/item/share'], resolve)
        },
        {
          path: 'WeChat',
          component: resolve => require(['@/views/user/item/WeChat'], resolve)
        },
        {
          path: 'weibo',
          component: resolve => require(['@/views/user/item/weibo'], resolve)
        }
      ]
    },
    {
      path: '/userInfo',
      meta: {
        isLogin: true
      },
      component: resolve => require(['@/views/user/userInfo'], resolve)
    },
    {
      path: '/shops',
      meta: {
        keepAlive: true
      },
      component: resolve => require(['@/views/shops/index'], resolve)
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.isLogin) {
    // 占坑 this.$cookies 获取不到 => router.app.$cookies
    // console.log(this, router.app.$cookies)
    router.app.$cookies.get('user-key') ? next() : next({ path: '/login', query: { back: to.fullPath } })
  } else {
    next()
  }
})

export default router
