import API from '@/common/apis'
import vueCookies from 'vue-cookies'
import { USER_INFO, USER_TOKEN, USER_LOGIN, USER_LOGOUT, USER_CLEAR } from '@/store/mutation-types'

const user = {

  getters: {},

  state: {
    token: vueCookies.get('token'),
    userInfo: null // 用户信息
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
    [USER_LOGIN] ({commit, dispatch}, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        API.getToken({username: username, password: userInfo.password}).then(res => {
          if (res.success === false) return
          console.log('res', res)
          vueCookies.set('token', res.tokenStartHead + res.token)
          commit(USER_TOKEN, res.tokenStartHead + res.token)
          dispatch(USER_INFO, username).then(rtn => {
            console.log('rtn', rtn)
          })
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    [USER_INFO] ({commit}, name) {
      console.log(name, 'username')
      return new Promise((resolve, reject) => {
        API.getUserInfo({name: name}).then(res => {
          console.log(res)
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
    }
  }
}
export default user
