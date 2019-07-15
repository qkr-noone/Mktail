let api = {
  /* 首页 */
  home: '/portal/content/getContentsAndItemCats', // 主页
  homeMenu: '/portal/content/getNavigationInfo', // 菜单导航
  homePro: '/getProList', // 产品列表数据
  homeBanner: '/portal/content/findByCategoryId', // banner,black sale
  homeClass: '/portal/content/findByContentId', // 主页分类
  search: '/search/itemsearch/search', // 产品搜索
  detail: '/goods/goods/getGoodsById', // 产品详情detail
  detailLook: '/page/goods/findByCategoryIdInGoods', // 产品详情detail
  detailCon: '/search/itemsearch/findByCategoryIdInSerach', // 根据ID去获取具体的搜索页数据
  detailTest: '/page/goods/getGoodsGroup', // 产品详情test
  addToCart: '/cart/cart/addGoodsToCartList', // 加入购物车
  singleCart: '/cart/cart/getSkuInformation', // 添加到购物车数据
  cartList: '/cart/cart/findCartList', // 购物车列表
  cartLike: '/cart/cart/findByCategoryIdInCart', // 购物车底部猜你喜欢
  cartEdit: '/cart/cart/updateCartNum', // 修改购物车某商品的数量
  cartDelete: '/cart/cart/deleteCartGood', // 删除购物车某条商品
  cartAllDelete: '/cart/cart/deleteCartGoodAll', // 删除全部、选中购物车数据
  addressListByUser: '/cart/address/findListByLoginUser', // 根据用户获取返回收货地址集合
  addressAdd: '/cart/address/add', // 新增收货地址
  getOrderInfo: '/cart/order/add', // 从购物车进入 提交订单
  directOrderInfo: '/cart/order/directAdd', // 从立即购买进入 提交订单
  payPageInfo: '/cart/order/searchPayLog', // 支付页面信息
  payUserCash: '/cart/pay/findAccountBalanceByUserName', // 用户的账户余额
  payMkWallet: '/cart/pay/paymentByMKTailBag', // 使用MKTail零钱买单
  payCreate: '/cart/pay/createNative', // 创建微信支付链接
  payOrder: '/cart/pay/queryPayStatus', // 支付订单状态查询
  sendCode: '/user/user/sendCode', // 发送手机验证码
  register: '/user/user/add', // 注册用户
  login: '/user/login/authenticateUser', // 登陆
  user: '/personCenter/personCenter/findByCategoryIdInPersonCenter', // 进入用户中心
  userOrderStates: '/personCenter/personCenter/findAllOrderStatusByUsername', // 用户订单状态数量
  userCollectType: '/userCollect/userCollect/findUserCollectByTypeAndUserName', // 用户关注类型
  goodsBySeller: '/userCollect/userCollect/findGoodsBySeller' // 收藏店铺商品
}
export {
  api
}
