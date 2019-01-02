let api = {
  /* 首页 */
  home: '/portal/content/getContentsAndItemCats', // 主页
  homeMenu: '/portal/content/getNavigationInfo', // 菜单导航
  homePro: '/getProList', // 产品列表数据
  homeBanner: '/portal/content/findByCategoryId', // banner,black sale
  homeClass: '/portal/content/findByContentId', // 主页分类
  search: '/search/itemsearch/search', // 产品搜索
  detail: '/goods/goods/getGoodsById', // 产品详情detail
  detailTest: '/page/goods/getGoodsGroup', // 产品详情test
  addToCart: '/cart/cart/addGoodsToCartList', // 加入购物车
  singleCart: '/cart/cart/getSkuInformation', // 添加到购物车数据
  cartList: '/cart/cart/findCartList', // 购物车列表
  cartEdit: '/cart/cart/updateCartNum', // 修改购物车某商品的数量
  cartDelete: '/cart/cart/deleteCartGood', // 删除购物车某条商品
  addressListByUser: '/cart/address/findListByLoginUser', // 根据用户获取返回收货地址集合
  getOrderInfo: '/cart/order/add', // 从购物车进入 提交订单
  directOrderInfo: '/cart/order/directAdd', // 从立即购买进入 提交订单
  payPageInfo: '/cart/order/searchPayLog', // 支付页面信息
  payCreate: '/cart/pay/createNative', // 创建微信支付链接
  payOrder: '/cart/pay/queryPayStatus', // 支付订单状态查询
  sendCode: '/user/user/sendCode', // 发送手机验证码
  register: '/user/user/add', // 注册用户
  login: '/user/login/authenticateUser' // 登陆
}
export {
  api
}
