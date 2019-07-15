import Vue from 'vue'
import Vuex from 'vuex'
<<<<<<< HEAD
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
=======
import mutations from './mutations'
import actions from './actions'
Vue.use(Vuex)

const state = {
  cartList: [], // 购物车列表
  userInfo: null // 用户登陆信息
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
>>>>>>> remotes/origin/master
