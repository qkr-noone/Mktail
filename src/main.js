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
// import "./assets/icomoon_test/style.css"

let VueScrollTo = require('vue-scrollto')

Vue.prototype.API = API
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueScrollTo)
Vue.use(VueCookies)
/* eslint-disable no-new */
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
