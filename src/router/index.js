import Vue from 'vue'
import Router from 'vue-router'
import { getCookie } from '../common/utils'

Vue.use(Router)

let router = new Router({
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop
      }
      return { x: 0, y: to.meta.savedPosition || 0 }
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
      component: resolve => require(['@/views/detail/index'], resolve)
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
      path: '/register/zz',
      component: resolve => require(['@/views/user/children/zz'], resolve)
    },
    {
      path: '/login',
      meta: {
        keepAlive: false
      },
      component: resolve => require(['@/views/user/login'], resolve)
    },
    {
      path: '/user',
      meta: {
        keepAlive: false,
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
    getCookie('user-key') ? next() : next({ path: '/login', query: { back: to.fullPath } })
  } else {
    next()
  }
})

export default router
