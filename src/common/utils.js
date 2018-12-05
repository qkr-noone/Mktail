import axios from 'axios'

let IP = 'http://192.168.0.40:8083' /* http://192.168.0.40:8083 https://easy-mock.com/mock/5bf6166bf9b2636f875b693c/test */
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
      data: Object.assign(para['data'] || {}, {}),
      headers: {}
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
        // function (data) {
        //   let ret = ''
        //   for (let it in data) {
        //     ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        //   }
        //   return ret
        // }
      ],
      headers: {
        // 'X-Requested-With': 'XMLHttpRequest',
        // 'Content-Type': '*/*'
      }
    }).then(callback).catch(error)
  }
}
// 获取cookie、
let getCookie = (name) => {
  let param
  if (document.cookie.length > 0) {
    let arr = document.cookie.split('; ')
    for (let i = 0; i < arr.length; i++) {
      let arr2 = arr[i].split('=')
      if (arr2[0] === name) {
        param = arr2[1]
      }
    }
    return param
  }
}

// 设置cookie,增加到vue实例方便全局调用
let setCookie = (name, value, expiredays) => {
  let exdate = new Date()
  exdate.setDate(exdate.getDate() + expiredays)
  document.cookie = name + '=' + escape(value) + ((expiredays == null) ? '' : ';expires=' + exdate.toGMTString())
}

// 删除cookie
let delCookie = (name) => {
  let exp = new Date()
  exp.setTime(exp.getTime() - 1)
  let cval = getCookie(name)
  if (cval != null) {
    document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString()
  }
}

export {
  apiAxios,
  getCookie,
  setCookie,
  delCookie
}
