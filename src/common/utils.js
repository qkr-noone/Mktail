import axios from 'axios'

let IP = 'http://192.168.0.33:8083' /* http://192.168.0.33:8083 https://easy-mock.com/mock/5bf6166bf9b2636f875b693c/test */
let apiAxios = {
  Axios: (para, callback, error) => {
    axios({
      method: para['method'] || 'get',
      url: IP + para['url'],
      params: Object.assign(para['data'] || {}, {}),
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
      headers: {}
    }).then(callback).catch(error)
  }
}

export {
  apiAxios
}
