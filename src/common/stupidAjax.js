import axios from 'axios'
import qs from 'qs'
import VueCookies from 'vue-cookies'
import {Message} from 'element-ui'

const aendstupid = axios.create({
  timeout: 15000,
  responseType: 'json',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  }
})
// 添加请求拦截器
aendstupid.interceptors.request.use(request => {
  // 若有做鉴权token，需要请求头自动加上token
  if (VueCookies.get('token')) {
    request.headers.Authorization = VueCookies.get('token')
  }
  if (request.data && (request.headers['Content-Type'].indexOf('application/x-www-form-urlencoded') !== -1)) {
    request.data = qs.stringify(request.data)
  }
  return request
}, error => {
  Message({
    showClose: true,
    message: '请求有误',
    type: 'error'
  })
  return Promise.reject(error)
})

// 添加响应拦截器
aendstupid.interceptors.response.use(res => {
  const result = res.data
  return result
}, error => {
  console.log(error, 'error')
  return Promise.reject(error)
})

export default aendstupid
