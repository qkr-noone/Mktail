import API from '@/common/apis'
import vueCookies from 'vue-cookies'
import { USER_INFO, USER_TOKEN, USER_LOGIN, USER_LOGOUT, USER_CLEAR, CART_LIST, CART } from '@/store/mutation-types'
import { setStore } from '@/common/utils'

const user = {

  getters: {},

  state: {
    token: vueCookies.get('token'),
    userInfo: null, // 用户信息
    cartList: [] // 购物车列表
  },

  mutations: {
    [USER_TOKEN]: (state, token) => {
      state.token = token
    },
    [USER_INFO]: (state, userInfo) => {
      state.userInfo = userInfo
    },
    [CART_LIST]: (state, cartList) => {
      state.cartList = cartList
    }
  },

  actions: {
    // 登录
    async [USER_LOGIN] ({commit, dispatch}, userInfo) {
      const username = userInfo.username.trim()
      let tem = await new Promise((resolve, reject) => {
        API.getToken({username: username, password: userInfo.password}).then(res => {
          if (res.success === false) return
          vueCookies.set('token', res.tokenStartHead + res.token)
          vueCookies.set('user-key', username) // 用户名
          commit(USER_TOKEN, res.tokenStartHead + res.token)
          dispatch(USER_INFO, username)
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
      return tem
    },

    // 获取用户信息
    [USER_INFO] ({commit}, name) {
      return new Promise((resolve, reject) => {
        API.getUserInfo({name: name}).then(res => {
          setStore('userInfo', res)
          commit(USER_INFO, res)
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 登出
    [USER_LOGOUT] ({commit}) {
    },

    // 清理数据
    [USER_CLEAR] ({commit}) {
      return new Promise(resolve => {})
    },

    // 获取购物车数据
    [CART] ({commit}) {
      return new Promise(resolve => {
        API.cartList({username: vueCookies.get('user-key')}).then(res => {
          if (res.success === false) {
            commit(CART_LIST, res.data)
            setStore('cartList', res.data)
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
export default user
