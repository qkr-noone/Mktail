import axios from 'axios'
import qs from 'qs'
import VueCookies from 'vue-cookies'
import {Message} from 'element-ui' // Loading

const service = axios.create({
  timeout: 15000, // 请求超时
  responseType: 'json',
  withCredentials: true, // 是否允许带cookie这些
  headers: {
    'Content-Type': 'application/json;charset=utf-8' // 'application/x-www-form-urlencoded;charset=utf-8  application/octet-stream'
  }
})
/* 在地址请求中显示loading 地址失去焦点 无法一直显示 */
// let [ loadingRequestCount, loading ] = [ 0 ]

// function showLoading () {
//   if (loadingRequestCount === 0) {
//     loading = Loading.service({
//       lock: true,
//       spinner: 'el-icon-loading'
//     })
//   }
//   loadingRequestCount++
// }

// function hideLoading () {
//   if (loadingRequestCount <= 0) return
//   loadingRequestCount--
//   if (loadingRequestCount === 0) {
//     loading.close()
//   }
// }

// 添加请求拦截器
service.interceptors.request.use(request => {
  // 若有做鉴权token，需要请求头自动加上token
  if (VueCookies.get('token')) {
    request.headers.Authorization = VueCookies.get('token')
  }
  // 显示loading
  // if (!request.hideLoading) {
  //   showLoading()
  // }
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
service.interceptors.response.use(res => {
  // 隐藏loading
  // if (!res.config.hideLoading) {
  //   hideLoading()
  // }
  const result = res.data
  let tem = result
  if (result.success) {
    tem = result.data || '请求成功，无返回值'
  } else {
    Message({
      showClose: true,
      message: tem.message,
      type: 'warning',
      fullscreen: false
    })
  }
  return tem
}, error => {
  console.log(error, 'error')
  // hideLoading()
  // 返回 response 里的错误信息
  return Promise.reject(error)
})

export default service
