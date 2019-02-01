import {
} from './mutation-types'
export default {
  // 网页初始化时
  setCartList (state, cartList) {
    state.cartList = cartList
  },
  setUserInfo (state, userInfo) {
    state.userInfo = userInfo
  }
}
