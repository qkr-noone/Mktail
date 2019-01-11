import Vue from 'vue'
import Router from 'vue-router'
import { getCookie } from '../common/utils'

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
      meta: {
        keepAlive: false
      },
      component: resolve => require(['@/views/test/detail'], resolve)
    },
    {
      path: '/search',
      name: 'search',
      meta: {
        keepAlive: false
      },
      component: resolve => require(['@/views/search/index'], resolve)
    },
    {
      path: '/detail',
      meta: {
        keepAlive: false
      },
      component: resolve => require(['@/views/detail/index'], resolve)
    },
    {
      path: '/addToCart',
      meta: {
        keepAlive: false,
        isLogin: true
      },
      component: resolve => require(['@/views/cart/addToCart'], resolve)
    },
    {
      path: '/cart',
      meta: {
        keepAlive: false,
        isLogin: true
      },
      component: resolve => require(['@/views/cart/cart'], resolve)
    },
    {
      path: '/getOrderInfo',
      meta: {
        keepAlive: false,
        isLogin: true
      },
      component: resolve => require(['@/views/cart/getOrderInfo'], resolve)
    },
    {
      path: '/pay',
      meta: {
        keepAlive: false,
        isLogin: true
      },
      component: resolve => require(['@/views/cart/pay'], resolve)
    },
    {
      path: '/paysuccess',
      meta: {
        keepAlive: false,
        isLogin: true
      },
      component: resolve => require(['@/views/cart/paysuccess'], resolve)
    },
    {
      path: '/payfail',
      meta: {
        keepAlive: false,
        isLogin: true
      },
      component: resolve => require(['@/views/cart/payfail'], resolve)
    },
    {
      path: '/register',
      meta: {
        keepAlive: false
      },
      component: resolve => require(['@/views/user/register'], resolve)
    },
    {
      path: '/register/paas',
      name: 'paas',
      component: resolve => require(['@/views/user/children/paas'], resolve)
    },
    {
      path: '/register/legal',
      name: 'legal',
      component: resolve => require(['@/views/user/children/legal'], resolve)
    },
    {
      path: '/register/pay',
      name: 'pay',
      component: resolve => require(['@/views/user/children/pay'], resolve)
    },
    {
      path: '/register/privacy',
      name: 'privacy',
      component: resolve => require(['@/views/user/children/privacy'], resolve)
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
      component: resolve => require(['@/views/user/user'], resolve)
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
