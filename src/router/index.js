import Vue from 'vue'
import Router from 'vue-router'
import { getCookie } from '../common/utils'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: resolve => require(['@/views/home/index'], resolve)
    },
    {
      path: '/home',
      meta: {
        keepAlive: true
      },
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
        keepAlive: false
      },
      component: resolve => require(['@/views/cart/addToCart'], resolve)
    },
    {
      path: '/cart',
      meta: {
        keepAlive: false
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
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.isLogin) {
    getCookie('userId') ? next() : next({ path: '/login', query: { back: to.fullPath } })
  } else {
    next()
  }
})

export default router
