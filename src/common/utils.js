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

/**
 * 函数防抖
 */
let timeout = null
export function debounce (fn, wait) {
  if (timeout !== null) clearTimeout(timeout)
  timeout = setTimeout(fn, wait)
}

/**
 * 判断有效手机号码
 * @method isMobile
 * @param {Number} mobile 手机号码
 */
export function isMobile (mobile) {
  return /^1[345678]\d{9}$/.test(mobile)
}

/**
* 判断有效香港手机号码
*/
export function isHKMobile (mobile) {
  return /^([6|9])\d{7}$/.test(mobile)
}

/**
* 判断有效密码 小写字母，大写字母，数字或字符有其中两种以上组合，密码长度8-18位
*/
export function isPassword (num) {
  return /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{6,18}$/.test(num)
}
