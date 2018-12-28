import {
// INIT_BUYCART
} from './mutation-types'
export default {
  // 网页初始化时
  // [INIT_BUYCART] (state) {
  //   let initCart = state.cartList
  // },
  setCartList (state, cartList) {
    state.cartList = cartList
  }
}
