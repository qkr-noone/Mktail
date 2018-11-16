import axios from 'axios'

let IP = 'http://192.168.0.33:8081'
let api = {
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
  api
}
