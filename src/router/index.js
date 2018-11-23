import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/home/index'
import Test from '@/views/test/index'
import TestDetail from '@/views/test/detail'
import Search from '@/views/search/index'

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
    }
  ]
})
