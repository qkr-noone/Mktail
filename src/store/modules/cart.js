import API from '@/common/apis'
import vueCookies from 'vue-cookies'
import { CART_LIST, CART } from '@/store/mutation-types'
import { setStore } from '@/common/utils'
const cart = {

  state: {
    cartList: [] // 购物车列表
  },

  mutations: {
    [CART_LIST]: (state, cartList) => {
      state.cartList = cartList
    }
  },

  actions: {
    // 获取购物车数据
    [CART] ({commit}) {
      return new Promise(resolve => {
        API.cartList({username: vueCookies.get('user-key')}).then(res => {
          if (res.success === false) {
            commit(CART_LIST, res.data)
            setStore('cartList', res.data)
            resolve(res)
            return false
          }
          commit(CART_LIST, res)
          setStore('cartList', res)
          resolve(res)
        }).catch(() => {})
      })
    }
  }
}
export default cart
