let api = {
  /* 首页 */
  home: '/portal/content/getContentsAndItemCats', // 主页
  homeMenu: '/portal/content/getNavigationInfo', // 菜单导航
  homePro: '/getProList', // 产品列表数据
  homeBanner: '/portal/content/findByCategoryId', // banner,black sale
  search: '/search/itemsearch/search', // 产品搜索
  detail: '/goods/goods/getGoodsById', // 产品详情detail
  detailTest: '/page/goods/getGoodsGroup', // 产品详情test
  addToCart: '/cart/cart/addGoodsToCartList', // 加入购物车
  getOrderInfo: '/cart/order/add', // 立即购买
  sendCode: '/user/user/sendCode' // 发送手机验证码
}
export {
  api
}
