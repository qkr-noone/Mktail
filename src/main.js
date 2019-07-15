// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
import API from './common/apis'
import VueCookies from 'vue-cookies'
import VueCropper from 'vue-cropper'
import { getStore, setStore } from './common/utils'

let VueScrollTo = require('vue-scrollto') // 滚动至指定位置

Vue.prototype.API = API
Vue.prototype.URLIP = process.env.BASE_API // 上传文件
Vue.prototype.U3DIP = process.env.U3D_IP
Vue.prototype.AFTERIP = process.env.BASE_AFTER
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueScrollTo)
Vue.use(VueCookies)
Vue.use(VueCropper)

// 用户手动刷新页面，vuex 中的信息会重设，需重新新增
if (getStore('userInfo')) {
  let user = JSON.parse(getStore('userInfo'))
  store.commit('USER_INFO', user)
}
if (getStore('cartList')) {
  let cart = JSON.parse(getStore('cartList'))
  store.commit('CART_LIST', cart)
}
if (!getStore('SEARCH_VALUE')) {
  setStore('SEARCH_VALUE', [{ val: '工厂3D', time: new Date().getTime() - 1 }, { val: '工厂直播', time: new Date().getTime() - 2 }, { val: '五金', time: new Date().getTime() - 3 }])
}

let vueDom = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
Vue.use({
  vueDom
})
