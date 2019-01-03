// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
let VueScrollTo = require('vue-scrollto')
// import VueVideoPlayer from 'vue-video-player'
// import 'video.js/dist/video-js.css'
// import 'vue-video-player/src/custom-theme.css'
// import 'videojs-flash'
// import 'videojs-contrib-hls/dist/videojs-contrib-hls'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueScrollTo)
// Vue.use(VueVideoPlayer)
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
