import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import vueCookies from 'vue-cookies'

Vue.use(vueCookies)
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
      path: '/search',
      name: 'search',
      component: resolve => require(['@/views/search/index'], resolve)
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: resolve => require(['@/views/search/feedback'], resolve)
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
      path: '/payHome',
      meta: {
        isLogin: true
      },
      component: resolve => require(['@/views/cart/payHome'], resolve)
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
      meta: { isLogin: true },
      component: resolve => require(['@/views/user/user'], resolve),
      children: [
        {
          path: 'userOrder',
          redirect: '/user/userOrder/statu-z',
          meta: { isLogin: true },
          component: resolve => require(['@/views/user/children/userOrder'], resolve),
          children: [
            {
              path: 'statu-z',
              meta: { isLogin: true },
              component: resolve => require(['@/views/user/children/order/statu-z'], resolve)
            },
            {
              path: 'statu-one',
              meta: { isLogin: true },
              component: resolve => require(['@/views/user/children/order/statu-one'], resolve)
            },
            {
              path: 'statu-second',
              meta: { isLogin: true },
              component: resolve => require(['@/views/user/children/order/statu-second'], resolve)
            },
            {
              path: 'statu-three',
              meta: { isLogin: true },
              component: resolve => require(['@/views/user/children/order/statu-three'], resolve)
            },
            {
              path: 'statu-four',
              meta: { isLogin: true },
              component: resolve => require(['@/views/user/children/order/statu-four'], resolve)
            },
            {
              path: 'statu-five',
              meta: { isLogin: true },
              component: resolve => require(['@/views/user/children/order/statu-five'], resolve)
            }
          ]
        },
        {
          path: 'userCollectGoods',
          meta: { isLogin: true },
          component: resolve => require(['@/views/user/children/userCollectGoods'], resolve)
        },
        {
          path: 'userCollectShop',
          meta: { isLogin: true },
          component: resolve => require(['@/views/user/children/userCollectGoods'], resolve)
        },
        {
          path: 'userAssess',
          meta: { isLogin: true },
          component: resolve => require(['@/views/user/children/userAssess'], resolve)
        },
        {
          path: 'userHistory',
          meta: { isLogin: true },
          component: resolve => require(['@/views/user/children/userHistory'], resolve)
        },
        {
          path: 'userFee',
          meta: { isLogin: true },
          component: resolve => require(['@/views/user/children/userFee'], resolve)
        },
        {
          path: 'userInvoiceInfo',
          meta: { isLogin: true },
          component: resolve => require(['@/views/user/children/userInvoiceInfo'], resolve)
        },
        {
          path: 'userInvoiceManage',
          meta: { isLogin: true },
          component: resolve => require(['@/views/user/children/userInvoiceManage'], resolve)
        },
        {
          path: 'userRefundManage',
          meta: { isLogin: true },
          component: resolve => require(['@/views/user/children/userRefundManage'], resolve)
        },
        {
          path: 'userComplaintManage',
          meta: { isLogin: true },
          component: resolve => require(['@/views/user/children/userComplaintManage'], resolve)
        },
        {
          path: 'userReportManage',
          meta: { isLogin: true },
          component: resolve => require(['@/views/user/children/userReportManage'], resolve)
        },
        {
          path: 'userBuyHistory',
          meta: { isLogin: true },
          component: resolve => require(['@/views/user/children/userBuyHistory'], resolve)
        }
      ]
    },
    { // 用户中心账户设置
      path: '/userSet',
      meta: { isLogin: true },
      component: resolve => require(['@/views/user/userSet'], resolve),
      children: [
        {
          path: 'account',
          meta: { isLogin: true },
          component: resolve => require(['@/views/user/item/account'], resolve)
        },
        {
          path: 'address',
          meta: { isLogin: true },
          component: resolve => require(['@/views/user/item/address'], resolve)
        },
        {
          path: 'alipay',
          meta: { isLogin: true },
          component: resolve => require(['@/views/user/item/alipay'], resolve)
        },
        {
          path: 'app',
          meta: { isLogin: true },
          component: resolve => require(['@/views/user/item/app'], resolve)
        },
        {
          path: 'bankCard',
          meta: { isLogin: true },
          component: resolve => require(['@/views/user/item/bankCard'], resolve)
        },
        {
          path: 'bindingPhone',
          meta: { isLogin: true },
          component: resolve => require(['@/views/user/item/bindingPhone'], resolve)
        },
        {
          path: 'message',
          meta: { isLogin: true },
          component: resolve => require(['@/views/user/item/message'], resolve)
        },
        {
          path: 'personalInfo',
          meta: { isLogin: true },
          component: resolve => require(['@/views/user/item/personalInfo'], resolve)
        },
        {
          path: 'secretSet',
          meta: { isLogin: true },
          component: resolve => require(['@/views/user/item/secretSet'], resolve)
        },
        {
          path: 'secure',
          meta: { isLogin: true },
          component: resolve => require(['@/views/user/item/secure'], resolve)
        },
        {
          path: 'share',
          meta: { isLogin: true },
          component: resolve => require(['@/views/user/item/share'], resolve)
        },
        {
          path: 'WeChat',
          meta: { isLogin: true },
          component: resolve => require(['@/views/user/item/WeChat'], resolve)
        },
        {
          path: 'weibo',
          meta: { isLogin: true },
          component: resolve => require(['@/views/user/item/weibo'], resolve)
        }
      ]
    },
    {
      path: '/userInfo',
      meta: { isLogin: true },
      component: resolve => require(['@/views/user/userInfo'], resolve)
    },
    {
      path: '/shops',
      meta: {
        keepAlive: true
      },
      component: resolve => require(['@/views/shops/index'], resolve)
    },
    {
      path: '/3D/3DShow',
      component: resolve => require(['@/views/3D/3DShow'], resolve)
    },
    {
      path: '/3D/index',
      component: resolve => require(['@/views/3D/index'], resolve)
    },
    {
      path: '/live/factory',
      component: resolve => require(['@/views/live/factory'], resolve)
    },
    { // 订单详情
      path: '/trace/orderDetail',
      meta: {
        isLogin: true
      },
      component: resolve => require(['@/views//trace/orderDetail'], resolve)
    }
  ]
})

router.beforeEach((to, from, next) => {
  // 占坑 this.$cookies 获取不到 => router.app.$cookies
  // 可直接使用 vueCookies   vueCookies.get('token')
  // console.log(this, router.app.$cookies)
  // to.matched
  let token = vueCookies.get('token')

  let checkUser = (to, next) => {
    if (!store.state.user.userInfo) {
      store.dispatch('USER_INFO').then(res => { // 获取用户信息, 存下用户名
        vueCookies.set('user-key', res.username)
        next()
      }).catch(() => {
        // 登出
        store.dispatch('USER_LOGOUT').then(() => {
          next({ path: '/login', query: { back: to.fullPath } })
        })
      })
    } else {
      if (!vueCookies.get('user-key')) {
        vueCookies.set('user-key', store.state.user.userInfo.username)
      }
      next()
    }
  }

  if (to.meta.isLogin) { // 需要登陆
    if (token) {
      checkUser(to, next)
    } else {
      next({ path: '/login', query: { back: to.fullPath } })
    }
  } else {
    if (to.path === '/login') {
      if (token) {
        if (!store.state.user.userInfo) {
          store.dispatch('USER_INFO').then(res => { // 获取用户信息, 存下用户名
            vueCookies.set('user-key', res.username)
          })
          next({ path: '/home' })
        } else {
          vueCookies.set('user-key', store.state.user.userInfo.username)
          next({ path: '/home' })
        }
      } else {
        if (to.query.back) {
          next()
        } else {
          next({ path: '/login', query: { back: from.fullPath } })
        }
      }
    } else { // 不需要登陆
      next()
    }
  }
})

export default router
