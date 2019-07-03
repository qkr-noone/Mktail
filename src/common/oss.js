import fetch from './fetch'
export function policy () {
  return fetch({
    url: '/aliyun/oss/policy',
    method: 'get'
  })
}

export function url (data, callbackl) {
  return fetch({
    url: 'https://mktail.oss-cn-shenzhen.aliyuncs.com',
    method: 'post',
    headers: { 'Content-Type': 'multipart/form-data' },
    data: data,
    onUploadProgress (e) {
      if (e.lengthComputable) {
        let val = (e.loaded / e.total * 100).toFixed(0)
        let loaded = e.loaded / 1024 / 1024
        let total = e.total / 1024 / 1024
        var progress = parseInt(val)
        // if (progress < 100) {
        callbackl(progress, loaded, total)
        // }
      }
    }
  })
}
