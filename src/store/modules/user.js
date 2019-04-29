import API from '@/common/apis'
import vueCookies from 'vue-cookies'
import { USER_INFO, USER_TOKEN, USER_LOGIN, USER_LOGOUT, USER_CLEAR } from '@/store/mutation-types'
import { setStore, removeStore } from '@/common/utils'

const user = {

  getters: {},

  state: {
    token: vueCookies.get('token'),
    userInfo: {} // 用户信息
  },

  mutations: {
    [USER_TOKEN]: (state, token) => {
      state.token = token
    },
    [USER_INFO]: (state, userInfo) => {
      state.userInfo = userInfo
    }
  },

  actions: {
    // 登录
    [USER_LOGIN] ({commit}, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        API.getToken({username: username, password: userInfo.password}).then(res => {
          if (res.success === false) return
          vueCookies.set('token', res.tokenStartHead + res.token)
          vueCookies.set('user-key', username)
          commit(USER_TOKEN, res.tokenStartHead + res.token)
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    [USER_INFO] ({commit}) {
      return new Promise((resolve, reject) => {
        API.getUserInfo().then(res => {
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
      return new Promise((resolve, reject) => {
        API.logout().then(() => {
          commit('USER_TOKEN', '')
          commit('USER_INFO', {})
          removeStore('userInfo')
          removeStore('cartList')
          vueCookies.remove('user-key')
          vueCookies.remove('token')
          resolve()
        }).catch(error => {
          commit('USER_TOKEN', '')
          commit('USER_INFO', {})
          removeStore('userInfo')
          removeStore('cartList')
          vueCookies.remove('user-key')
          vueCookies.remove('token')
          reject(error)
        })
      })
    },

    // 清理数据
    [USER_CLEAR] ({commit}) {
      return new Promise(resolve => {})
    }
  }
}
export default user
