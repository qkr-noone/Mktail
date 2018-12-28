import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
Vue.use(Vuex)

const state = {
  cartList: [] // 购物车列表
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
