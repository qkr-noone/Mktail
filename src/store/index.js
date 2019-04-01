import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import cart from './modules/cart'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    cart
  }
})

export default store
