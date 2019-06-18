import fetch from './fetch'
/* http://192.168.1.100:8083 https://easy-mock.com/mock/5bf6166bf9b2636f875b693c/test http://192.168.1.40:8083 http://localhost:8084 */
const http = {
  get: (path, data) => fetch.get(process.env.BASE_API + path, {
    params: data
  }),
  post: (path, data, config) => fetch.post(process.env.BASE_API + path, data, config)
}

export default {

  /* ----主页---- */

  // 菜单导航
  homeMenu: data => http.get('/portal/content/getNavigationInfo', data),
  // banner,black sale
  homeBanner: data => http.get('/portal/content/findByCategoryId', data),
  // 主页分类
  homeClass: data => http.get('/portal/content/findByContentId', data),

  /* ----店铺首页---- */

  // 作废
  shopPage: () => http.get('/seller/index/seller/getStaticResult'),
  // 获取首页树
  initShops: data => http.get('/seller/home/initializeHome', data),
  // 获取店招
  getStoreSign: data => http.get('/seller/home/getHomeTrick', data),
  // 获取导航栏
  getStoreNavBar: data => http.get('/seller/home/getNavigationBar', data),
  // 获取下拉菜单
  getStoreMenu: data => http.get('/seller/productType/findProductTypeComboList', data),
  // 获取店铺查询集
  getShopCate: data => http.get('/seller/goods/search', data),
  // 获取最新商品 (分类左侧)
  getShopNew: data => http.get('/seller/goods/findNewGoods', data),

  /* ----注册登录---- */

  // 发送手机验证码
  sendCode: data => http.get('/user/user/sendCode', data),
  // 注册用户
  register: (data, smscode) => http.post('/user/user/add?smscode=' + smscode, data),
  // 获取用户信息
  getUserInfo: data => http.get('/user/login/info', data),
  // 登陆 获取token
  getToken: data => http.post('/user/login/login', data),
  // 用户退出登录
  logout: () => http.post('/user/login/logout'),

  /* ----购物车---- */

  // 购物车列表
  cartList: data => http.get('/cart/cart/findCartList', data),
  // 加入购物车
  addToCart: data => http.get('/cart/cart/addGoodsToCartList', data),
  // 添加到购物车数据
  singleCart: data => http.get('/cart/cart/getSkuInformation', data),
  // 修改购物车某商品的数量
  cartEdit: data => http.get('/cart/cart/updateCartNum', data),
  // 删除购物车某条商品
  cartDelete: data => http.get('/cart/cart/deleteCartGood', data),
  // 删除全部、选中购物车数据
  cartAllDelete: (data, userName) => http.post('/cart/cart/deleteCartGoodAll?userName=' + userName, data),
  // 购物车底部猜你喜欢
  cartLike: data => http.get('/cart/cart/findByCategoryIdInCart', data),

  /* ----搜索---- */

  // 产品搜索
  search: data => http.post('/search/itemsearch/search', data),
  // 产品详情detail
  detail: data => http.get('/goods/goods/getGoodsById', data),
  // 根据ID去获取具体的搜索页数据
  detailCon: data => http.get('/search/itemsearch/findByCategoryIdInSerach', data),

  /* ----商品详情---- */

  // 产品详情test
  detailTest: data => http.get('/page/goods/getGoodsGroup', data),
  // 产品详情其他数据
  detailLook: data => http.get('/page/goods/findByCategoryIdInGoods', data),
  // 地址 全部省份
  allProvince: () => http.get('/cart/address/getAllProvince'),
  // 地址 获取市
  allCity: data => http.get('/cart/address/getAllCity', data),
  // 根据市id获取区、县
  allAreas: data => http.get('/cart/address/getAllAreas', data),
  // 计算运费
  getFlowprice: data => http.get('/page/goods/calculateShipping', data),
  // 评价列表
  getEvaluate: data => http.get('/page/goodsEvaluate/findBySpuId', data),

  /* ----提交订单---- */

  // 新增收货地址
  addressAdd: data => http.post('/cart/address/add', data),
  // 修改地址
  addressUpdate: data => http.post('/cart/address/update', data),
  // 根据ID数组批量删除地址项项信息
  addressDelete: data => http.get('/cart/address/delete', data),
  // 根据用户获取返回收货地址集合
  addressListByUser: data => http.get('/cart/address/findListByLoginUser', data),
  // 从购物车进入 提交订单
  getOrderInfo: data => http.post('/cart/order/add', data),
  // 从立即购买进入 提交订单
  directOrderInfo: (data, skuId, num, onlyValue) => http.post('/cart/order/directAdd?itemId=' + skuId + '&num=' + num + '&onlyValue=' + onlyValue, data),
  // 支付页面信息
  payPageInfo: data => http.get('/cart/order/searchPayLog', data),
  // 创建微信支付链接
  payCreate: data => http.get('/cart/pay/createNative', data),
  // 支付订单状态查询
  payOrder: data => http.get('/cart/pay/queryPayStatus', data),
  // 用户的账户余额
  payUserCash: data => http.get('/cart/pay/findAccountBalanceByUserName', data),
  // 使用MKTail零钱买单
  payMkWallet: data => http.get('/cart/pay/paymentByMKTailBag', data),

  /* ---- 用户中心 ---- */

  // 进入用户中心
  user: data => http.get('/personCenter/personCenter/findByCategoryIdInPersonCenter', data),
  // 用户订单状态数量
  userOrderStatus: data => http.get('/personCenter/personCenter/findAllOrderStatusByUsername', data),
  // 关注店铺商品数量
  userGoodsShopNum: data => http.get('/userCollect/userCollect/getGoodsCollectCountAndSellersCollectCount', data),
  // 用户订单列表
  userOrder: data => http.get('/cart/order/findOrderByUsernameAndStatus', data),
  // 订单查询过滤
  orderFilter: (data, pageNum, pageSize) => http.post('/cart/order/searchOrderByMap?pageNum=' + pageNum + '&pageSize=' + pageSize, data),
  // 订单删除
  orderRemove: data => http.get('/cart/order/delete', data),
  // 订单详情信息
  orderDetail: data => http.get('/order/orderManager/findOrderDetail', data),
  // 物流查询
  findFlow: data => http.get('/order/kd/getKdInfoByShipperCodeAndLogisticCode', data),
  // 获取用户的详细信息
  userBaseInfo: data => http.get('/personData/personData/findUserInfoByUserName', data),
  // 修改用户的详细信息
  userUpdateInfo: data => http.post('/personData/personData/UpdateUser', data),
  // 用户头像上传
  userUpdateHead: data => http.post('/personData/personData/uploadFile', data),
  // 字节流上传头像
  userUploadBlodFlow: (data, extName) => http.post('/personData/personData/uploadFile1?extName=' + extName, data),

  /* ---- 收藏关注 ---- */

  // 添加收藏(商品、店铺) 返回判断是否已收藏
  addCollect: data => http.post('/userCollect/userCollect/addUserCollect', data),
  // 用户关注类型 (1: 关注商品，2: 关注店铺)
  userCollectType: data => http.get('/userCollect/userCollect/findUserCollectByTypeAndUserName', data),
  // 收藏店铺 店铺里的商品
  goodsBySeller: data => http.get('/userCollect/userCollect/findGoodsBySeller', data),
  // 查询 用户关注的店铺
  searchCollectShops: data => http.get('/userCollect/userCollect', data),
  // 查询 用户关注的商品
  searchCollectGoods: data => http.get('/userCollect/userCollect/searchGoodCollect', data),
  // 删除用户关注信息
  deleteCollect: data => http.get('/userCollect/userCollect/delUserCollectByDataId', data),

  /* ---- 直播 ---- */
  getNineLiveUrlBySellerId: (data, sellerId) => http.get('/live/main/getNineLiveUrlBySellerId?sellerId=' + sellerId, data)
}
