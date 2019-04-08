import axios from 'axios'

let IP = 'http://192.168.0.40:8083' /* http://192.168.1.221:8083 https://easy-mock.com/mock/5bf6166bf9b2636f875b693c/test */
let apiAxios = {
  AxiosG: (para, callback, error) => {
    axios({
      method: 'get',
      url: IP + para['url'],
      params: Object.assign(para['params'] || {}, {}),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(callback).catch(error)
  },
  AxiosP: (para, callback, error) => {
    axios({
      method: 'post',
      url: IP + para['url'],
      params: Object.assign(para['params'] || {}, {}),
      data: Object.assign(para['data'] || {}, {}),
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    }).then(callback).catch(error)
  },
  AxiosForm: (para, callback, error) => {
    axios({
      method: para['method'] || 'get',
      url: IP + para['url'],
      data: Object.assign(para['url'] || {}, {}),
      transformRequest: [
        (data) => {
          let ret = ''
          for (let it in data) {
            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
          }
          return ret
        }
      ],
      headers: {}
    }).then(callback).catch(error)
  }
}

export {
  apiAxios
}

/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.localStorage.setItem(name, content)
}

/**
 * 获取localStorage
 */
export const getStore = name => {
  if (!name) return
  return window.localStorage.getItem(name)
}

/**
 * 删除localStorage
 */
export const removeStore = name => {
  if (!name) return
  window.localStorage.removeItem(name)
}

/**
 * 格式化时间 2019-01-22 17:24:08
 */
export const formatDate = date => {
  let y = date.getFullYear()
  let m = date.getMonth() + 1
  m = m < 10 ? '0' + m : m
  let d = date.getDate()
  d = d < 10 ? ('0' + d) : d
  let h = date.getHours()
  h = h < 10 ? ('0' + h) : h
  let mi = date.getMinutes()
  mi = mi < 10 ? ('0' + mi) : mi
  let s = date.getSeconds()
  s = s < 10 ? ('0' + s) : s
  return y + '-' + m + '-' + d + ' ' + h + ':' + mi + ':' + s
}
