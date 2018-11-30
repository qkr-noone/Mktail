import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/home/index'
import Test from '@/views/test/index'
import TestDetail from '@/views/test/detail'
import Search from '@/views/search/index'
import Detail from '@/views/detail/index'
import AddToCart from '@/views/cart/addToCart'
import Cart from '@/views/cart/cart'
import GetOrderInfo from '@/views/cart/getOrderInfo'
import Pay from '@/views/cart/pay'
import PaySuccess from '@/views/cart/paysuccess'
import PayFail from '@/views/cart/payfail'
import Register from '@/views/user/register'
import Login from '@/views/user/login'
import User from '@/views/user/user'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      meta: {
        keepAlive: true
      },
      component: Home
    },
    {
      path: '/test',
      meta: {
        keepAlive: true
      },
      component: Test
    },
    {
      path: '/test/detail',
      meta: {
        keepAlive: false
      },
      component: TestDetail
    },
    {
      path: '/search',
      meta: {
        keepAlive: false
      },
      component: Search
    },
    {
      path: '/detail',
      meta: {
        keepAlive: false
      },
      component: Detail
    },
    {
      path: '/addToCart',
      meta: {
        keepAlive: false
      },
      component: AddToCart
    },
    {
      path: '/cart',
      meta: {
        keepAlive: false
      },
      component: Cart
    },
    {
      path: '/getOrderInfo',
      meta: {
        keepAlive: false
      },
      component: GetOrderInfo
    },
    {
      path: '/pay',
      meta: {
        keepAlive: false
      },
      component: Pay
    },
    {
      path: '/paysuccess',
      meta: {
        keepAlive: false
      },
      component: PaySuccess
    },
    {
      path: '/payfail',
      meta: {
        keepAlive: false
      },
      component: PayFail
    },
    {
      path: '/register',
      meta: {
        keepAlive: false
      },
      component: Register
    },
    {
      path: '/login',
      meta: {
        keepAlive: false
      },
      component: Login
    },
    {
      path: '/user',
      meta: {
        keepAlive: false
      },
      component: User
    }
  ]
})
