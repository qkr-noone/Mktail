<template>
  <div id="user">
    <shortcut></shortcut>
    <userNav></userNav>
    <div class="screen-back">
      <div class="py-container">
        <div class="user">
          <div class="account-sidebar">
            <div class="gray-box ">
              <div class="box-inner">
                <ul class="account-nav">
                  <li v-for="(item,i) in nav" :key='i' :class="{current:item.name===title}"  @click="tab(item)">
                    <a href="javascript:;"><span>{{item.name}}</span></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="account-content">
            <div class="con-wrap" v-if="!title">
              <div class="con-user">
                <div class="con-item">
                  <div class="con-item-user">
                    <a href="" class="user-head">
                      <img src="static/img/mk_logo_login.png">
                    </a>
                    <span class="user-name">爱你呦</span>
                    <div class="user-service">
                      <p>开通尊享会员服务</p>
                      <a>立即开通</a>
                    </div>
                  </div>
                  <div class="con-item-other">
                    <div>
                      <a>我的收货地址</a>
                    </div>
                    <div>
                      <a>我的优惠信息</a>
                    </div>
                    <div>
                      <a>我的支付方式</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="con-de">
                <div class="con-de-order">
                  <div class="con-de-li">
                    <div class="con-de-title">
                      <h2>3D产品推荐</h2>
                    </div>
                    <ul class="con-de-item us-look">
                      <li v-for="item in usLook" :key="item.id">
                        <router-link :to="{path: '/detail', query: {goodsId: item.id}}"><img :src="item.pic"></router-link>
                      </li>
                    </ul>
                  </div>
                  <div class="con-de-li">
                    <div class="con-de-title">
                      <h2>我的订单</h2><a>所有订单</a>
                    </div>
                    <ul class="con-de-item us-order">
                      <li>
                        <a class="us-order-a"><span>待付款</span><strong class="us-order-str">{{orderStatesNum.pendingPaymentCount}}</strong></a>
                      </li>
                      <li>
                        <a class="us-order-a"><span>待发货</span><strong class="us-order-str">{{orderStatesNum.toBeShippedCount}}</strong></a>
                      </li>
                      <li>
                        <a class="us-order-a"><span>待收货</span><strong class="us-order-str">{{orderStatesNum.toBeEvaluatedCount}}</strong></a>
                      </li>
                      <li>
                        <a class="us-order-a"><span>待评价</span><strong class="us-order-str">{{orderStatesNum.goodsReceivedCount}}</strong></a>
                      </li>
                      <li>
                        <a class="us-order-a"><span>退换/售后</span></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- 物流 喜欢 关注 -->
              <div class="con-all">
                <div class="con-all-left">
                  <div class="con-le-flow">
                    <div class="le-flow-title">
                      <h2>物流</h2>
                    </div>
                    <ul class="le-flow-ul">
                      <li class="order-li">
                        <a href=""><img src="static/img/mk_logo_login.png"></a>
                        <div class="detail-desc">
                          <p>我是您的专属配送员王智，您的订单已到达广州明珠站，配</p>
                          <div><span>2018-11-29 08:00:00</span><a class="flow-de">查看物流明细</a></div>
                        </div>
                        <div class="detail-more">
                          <a href="">确认收货</a>
                        </div>
                      </li>
                      <li class="order-li">
                        <a href=""><img src="static/img/mk_logo_login.png"></a>
                        <div class="detail-desc">
                          <p>我是您的专属配送员王智，您的订单已到达广州明珠站，配</p>
                          <div><span>2018-11-29 08:00:00</span><a class="flow-de">查看物流明细</a></div>
                        </div>
                        <div class="detail-more">
                          <a href="">确认收货</a>
                        </div>
                      </li>
                      <li class="order-li">
                        <a href=""><img src="static/img/mk_logo_login.png"></a>
                        <div class="detail-desc">
                          <p>我是您的专属配送员王智，您的订单已到达广州明珠站，配</p>
                          <div><span>2018-11-29 08:00:00</span><a class="flow-de">查看物流明细</a></div>
                        </div>
                        <div class="detail-more">
                          <a href="">确认收货</a>
                        </div>
                      </li>
                      <div class="flow-more">
                        <a>展开</a>
                        <i v-if="isflowMore" class="el-icon-arrow-down"></i>
                        <i v-else class="el-icon-arrow-up"></i>
                      </div>
                    </ul>
                  </div>
                  <div class="con-le-like">
                    <div class="le-flow-title">
                      <h2>猜你喜欢</h2>
                    </div>
                    <ul class="hot-con-ul">
                      <li v-for="(list, tip) in likeList" :key="list.id" v-if="tip < 6">
                        <youLike :like="list"></youLike>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="con-all-right">
                  <div class="con-ri-focus">
                    <div class="ri-focus-title">
                      <h3>我的关注</h3>
                    </div>
                    <ul class="focus-con">
                      <li class="focus-li"><div class="focus-box"><a><span>0</span><h4>商品关注</h4></a></div></li>
                      <li class="focus-li"><div class="focus-box"><a><span>0</span><h4>店铺关注</h4></a></div></li>
                    </ul>
                  </div>
                  <div class="con-ri-his">
                    <div class="ri-his-abs" v-for="list in rightAbs" :key="list.id">
                      <router-link :to="{path:'/detail', query: {goodsId: list.id}}"><img :src="list.pic"></router-link>
                    </div>
                    <div class="ri-focus-title">
                      <h3>浏览记录</h3>
                      <a><span>更多</span><i class="el-icon-arrow-right"></i></a>
                    </div>
                    <ul  class="focus-ul">
                      <li class="focus-li" v-for="(list, index) in hisList" :key="list.id" v-if="index < 6">
                        <router-link :to="{path:'/detail', query: {goodsId: list.id}}" class="focus-tag"><img :src="list.pic"></router-link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <transition v-else>
              <keep-alive>
                <router-view></router-view>
              </keep-alive>
            </transition>
          </div>
          <!-- <el-tabs  :tab-position="tabPosition" style="background-color: #fff">
            <el-tab-pane label="全部功能">
              <div class="con-wrap">
                <div class="con-user">
                  <div class="con-item">
                    <div class="con-item-user">
                      <a href="" class="user-head"><i class="el-icon-picture"></i></a>
                      <span class="user-name">爱你呦</span>
                      <p>主人很懒什么都想买</p>
                    </div>
                    <div class="con-item-other">
                      <div>
                        <span>积分：88</span>
                      </div>
                      <div>
                        <span>优惠券：8</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="con-order">
                  <div class="order-desc">
                    <h2 class="title">我的订单</h2>
                    <div class="order-list">
                      <div><i class="el-icon-goods"></i><p>代付款<span class="num">(2)</span></p></div>
                      <div><i class="el-icon-date"></i><p>待收货<span class="num">(12)</span></p></div>
                      <div><i class="el-icon-edit"></i><p>待评价<span class="num">(2)</span></p></div>
                      <div><i class="el-icon-service"></i><p>退换/售后</p></div>
                      <div><i class="el-icon-arrow-right"></i><p>全部订单</p></div>
                    </div>
                    <ul class="order-list-detail">
                      <li class="order-li">
                        <a href=""><i class="el-icon-picture"></i></a>
                        <div class="detail-desc">
                          <p>我是您的专属配送员王智，您的订单已到达广州明珠站，配</p>
                          <div><span>普通快递</span><span>2018-11-29 08:00:00</span></div>
                        </div>
                        <div class="detail-more">
                          <a href="">查看详情</a>
                          <a href="">查看发票/物流跟踪</a>
                        </div>
                      </li>
                      <li class="order-li">
                        <a href=""><i class="el-icon-picture"></i></a>
                        <div class="detail-desc">
                          <p>我是您的专属配送员王智，您的订单已到达广州明珠站，配</p>
                          <div><span>普通快递</span><span>2018-11-29 08:00:00</span></div>
                        </div>
                        <div class="detail-more">
                          <a href="">查看详情</a>
                          <a href="">查看发票/物流跟踪</a>
                        </div>
                      </li>
                      <li class="order-li">
                        <a href=""><i class="el-icon-picture"></i></a>
                        <div class="detail-desc">
                          <p>我是您的专属配送员王智，您的订单已到达广州明珠站，配</p>
                          <div><span>普通快递</span><span>2018-11-29 08:00:00</span></div>
                        </div>
                        <div class="detail-more">
                          <a href="">查看详情</a>
                          <a href="">查看发票/物流跟踪</a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="我的订单">
              <div class="con-wrap">
                <div class="yui3-u-5-6 order-pay">
                  <div class="body">
                    <div class="table-title">
                      <table class="sui-table order-table">
                        <tr>
                          <thead>
                            <th width="45%">订单详情</th>
                            <th width="6%">收货人</th>
                            <th width="6%">金额</th>
                            <th width="10%">商品操作</th>
                            <th width="10%">交易状态</th>
                            <th width="11%">交易操作</th>
                          </thead>
                        </tr>
                      </table>
                    </div>
                    <div class="order-detail">
                      <div class="orders">
                        <div class="choose-order">
                          <div class="sui-pagination pagination-large top-pages">
                            <ul>
                              <li class="prev disabled">
                                <a href="">上一页</a>
                              </li>
                              <li class="next">
                                <a href="">下一页</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="choose-title">
                          <label data-toggle="checkbox" class="checkbox-pretty ">
                            <input type="checkbox" checked="checked">
                            <span>2017-02-11 11:5&nbsp;订单编号：7867473872181848&nbsp;店铺：哇哈哈<a>和我联系</a></span>
                          </label>
                          <a class="sui-btn btn-info share-btn">分享</a>
                        </div>
                        <table class="sui-table table-bordered order-datatable">
                          <tbody>
                            <tr>
                              <td width="45%">
                                <div class="typographic">
                                  <div><img src="static/img/dp03.png"></div>
                                  <div>
                                    <a href="" class="block-text">包邮&nbsp;正品玛姬儿压缩面膜无纺布纸膜100粒&nbsp;送泡瓶面膜刷喷瓶&nbsp;新款</a>
                                    <span class="guige">规格：温泉喷雾150ml</span>
                                  </div>
                                </div>
                              </td>
                              <td width="6%" class="center">遇见你了得</td>
                              <td width="6%" class="center">
                                <ul class="unstyled">
                                  <li class="o-price">¥299.00</li>
                                </ul>
                              </td>
                              <td width="10%" class="center">
                                <ul class="unstyled">
                                  <li >申请售后</li>
                                  <li >投诉</li>
                                </ul>
                              </td>
                              <td width="10%" class="center">
                                <ul class="unstyled">
                                  <li >交易成功</li>
                                  <li >订单详情</li>
                                </ul>
                              </td>
                              <td width="11%" class="center">
                                <ul class="unstyled">
                                  <li>评价</li>
                                  <li><a class="btn">订单详情</a></li>
                                </ul>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div class="choose-title">
                          <label data-toggle="checkbox" class="checkbox-pretty ">
                            <input type="checkbox" checked="checked">
                            <span>2017-02-11 11:5&nbsp;订单编号：7867473872181848&nbsp;店铺：哇哈哈<a>和我联系</a></span>
                          </label>
                          <a class="sui-btn btn-info share-btn">分享</a>
                        </div>
                        <table class="sui-table table-bordered order-datatable">
                          <tbody>
                            <tr>
                              <td width="45%">
                                <div class="typographic">
                                  <div><img src="static/img/dp03.png"></div>
                                  <div>
                                    <a href="" class="block-text">包邮&nbsp;正品玛姬儿压缩面膜无纺布纸膜100粒&nbsp;送泡瓶面膜刷喷瓶&nbsp;新款</a>
                                    <span class="guige">规格：温泉喷雾150ml</span>
                                  </div>
                                </div>
                              </td>
                              <td width="6%" class="center">遇见你了得</td>
                              <td width="6%" class="center">
                                <ul class="unstyled">
                                  <li class="o-price">¥299.00</li>
                                </ul>
                              </td>
                              <td width="10%" class="center">
                                <ul class="unstyled">
                                  <li >申请售后</li>
                                  <li >投诉</li>
                                </ul>
                              </td>
                              <td width="10%" class="center">
                                <ul class="unstyled">
                                  <li >交易成功</li>
                                  <li >订单详情</li>
                                </ul>
                              </td>
                              <td width="11%" class="center">
                                <ul class="unstyled">
                                  <li>评价</li>
                                  <li><a class="btn">订单详情</a></li>
                                </ul>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div class="choose-title">
                          <label data-toggle="checkbox" class="checkbox-pretty ">
                            <input type="checkbox" checked="checked">
                            <span>2017-02-11 11:5&nbsp;订单编号：7867473872181848&nbsp;店铺：哇哈哈<a>和我联系</a></span>
                          </label>
                          <a class="sui-btn btn-info share-btn">分享</a>
                        </div>
                        <table class="sui-table table-bordered order-datatable">
                          <tbody>
                            <tr>
                              <td width="45%">
                                <div class="typographic">
                                  <div><img src="static/img/dp03.png"></div>
                                  <div>
                                    <a href="" class="block-text">包邮&nbsp;正品玛姬儿压缩面膜无纺布纸膜100粒&nbsp;送泡瓶面膜刷喷瓶&nbsp;新款</a>
                                    <span class="guige">规格：温泉喷雾150ml</span>
                                  </div>
                                </div>
                              </td>
                              <td width="6%" class="center">遇见你了得</td>
                              <td width="6%" class="center">
                                <ul class="unstyled">
                                  <li class="o-price">¥299.00</li>
                                </ul>
                              </td>
                              <td width="10%" class="center">
                                <ul class="unstyled">
                                  <li >申请售后</li>
                                  <li >投诉</li>
                                </ul>
                              </td>
                              <td width="10%" class="center">
                                <ul class="unstyled">
                                  <li >交易成功</li>
                                  <li >订单详情</li>
                                </ul>
                              </td>
                              <td width="11%" class="center">
                                <ul class="unstyled">
                                  <li>评价</li>
                                  <li><a class="btn">订单详情</a></li>
                                </ul>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="待收货">
              <div class="con-wrap">
                <div class="yui3-u-5-6 order-pay">
                  <div class="body">
                    <div class="table-title">
                      <table class="sui-table order-table">
                        <tr>
                          <thead>
                            <th width="45%">订单详情</th>
                            <th width="6%">收货人</th>
                            <th width="6%">金额</th>
                            <th width="10%">商品操作</th>
                            <th width="10%">交易状态</th>
                            <th width="11%">交易操作</th>
                          </thead>
                        </tr>
                      </table>
                    </div>
                    <div class="order-detail">
                      <div class="orders">
                        <div class="choose-order">
                          <div class="sui-pagination pagination-large top-pages">
                            <ul>
                              <li class="prev disabled">
                                <a href="">上一页</a>
                              </li>
                              <li class="next">
                                <a href="">下一页</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="choose-title">
                          <label data-toggle="checkbox" class="checkbox-pretty ">
                            <input type="checkbox" checked="checked">
                            <span>2017-02-11 11:5&nbsp;订单编号：7867473872181848&nbsp;店铺：哇哈哈<a>和我联系</a></span>
                          </label>
                          <a class="sui-btn btn-info share-btn">分享</a>
                        </div>
                        <table class="sui-table table-bordered order-datatable">
                          <tbody>
                            <tr>
                              <td width="45%">
                                <div class="typographic">
                                  <div><img src="static/img/dp03.png"></div>
                                  <div>
                                    <a href="" class="block-text">包邮&nbsp;正品玛姬儿压缩面膜无纺布纸膜100粒&nbsp;送泡瓶面膜刷喷瓶&nbsp;新款</a>
                                    <span class="guige">规格：温泉喷雾150ml</span>
                                  </div>
                                </div>
                              </td>
                              <td width="6%" class="center">遇见你了得</td>
                              <td width="6%" class="center">
                                <ul class="unstyled">
                                  <li class="o-price">¥299.00</li>
                                </ul>
                              </td>
                              <td width="10%" class="center">
                                <ul class="unstyled">
                                  <li >申请售后</li>
                                  <li >投诉</li>
                                </ul>
                              </td>
                              <td width="10%" class="center">
                                <ul class="unstyled">
                                  <li >交易成功</li>
                                  <li >订单详情</li>
                                </ul>
                              </td>
                              <td width="11%" class="center">
                                <ul class="unstyled">
                                  <li>评价</li>
                                  <li><a class="btn">订单详情</a></li>
                                </ul>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div class="choose-title">
                          <label data-toggle="checkbox" class="checkbox-pretty ">
                            <input type="checkbox" checked="checked">
                            <span>2017-02-11 11:5&nbsp;订单编号：7867473872181848&nbsp;店铺：哇哈哈<a>和我联系</a></span>
                          </label>
                          <a class="sui-btn btn-info share-btn">分享</a>
                        </div>
                        <table class="sui-table table-bordered order-datatable">
                          <tbody>
                            <tr>
                              <td width="45%">
                                <div class="typographic">
                                  <div><img src="static/img/dp03.png"></div>
                                  <div>
                                    <a href="" class="block-text">包邮&nbsp;正品玛姬儿压缩面膜无纺布纸膜100粒&nbsp;送泡瓶面膜刷喷瓶&nbsp;新款</a>
                                    <span class="guige">规格：温泉喷雾150ml</span>
                                  </div>
                                </div>
                              </td>
                              <td width="6%" class="center">遇见你了得</td>
                              <td width="6%" class="center">
                                <ul class="unstyled">
                                  <li class="o-price">¥299.00</li>
                                </ul>
                              </td>
                              <td width="10%" class="center">
                                <ul class="unstyled">
                                  <li >申请售后</li>
                                  <li >投诉</li>
                                </ul>
                              </td>
                              <td width="10%" class="center">
                                <ul class="unstyled">
                                  <li >交易成功</li>
                                  <li >订单详情</li>
                                </ul>
                              </td>
                              <td width="11%" class="center">
                                <ul class="unstyled">
                                  <li>评价</li>
                                  <li><a class="btn">订单详情</a></li>
                                </ul>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div class="choose-title">
                          <label data-toggle="checkbox" class="checkbox-pretty ">
                            <input type="checkbox" checked="checked">
                            <span>2017-02-11 11:5&nbsp;订单编号：7867473872181848&nbsp;店铺：哇哈哈<a>和我联系</a></span>
                          </label>
                          <a class="sui-btn btn-info share-btn">分享</a>
                        </div>
                        <table class="sui-table table-bordered order-datatable">
                          <tbody>
                            <tr>
                              <td width="45%">
                                <div class="typographic">
                                  <div><img src="static/img/dp03.png"></div>
                                  <div>
                                    <a href="" class="block-text">包邮&nbsp;正品玛姬儿压缩面膜无纺布纸膜100粒&nbsp;送泡瓶面膜刷喷瓶&nbsp;新款</a>
                                    <span class="guige">规格：温泉喷雾150ml</span>
                                  </div>
                                </div>
                              </td>
                              <td width="6%" class="center">遇见你了得</td>
                              <td width="6%" class="center">
                                <ul class="unstyled">
                                  <li class="o-price">¥299.00</li>
                                </ul>
                              </td>
                              <td width="10%" class="center">
                                <ul class="unstyled">
                                  <li >申请售后</li>
                                  <li >投诉</li>
                                </ul>
                              </td>
                              <td width="10%" class="center">
                                <ul class="unstyled">
                                  <li >交易成功</li>
                                  <li >订单详情</li>
                                </ul>
                              </td>
                              <td width="11%" class="center">
                                <ul class="unstyled">
                                  <li>评价</li>
                                  <li><a class="btn">订单详情</a></li>
                                </ul>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="待发货">
              <div class="con-wrap">
                <div class="yui3-u-5-6 order-pay">
                  <div class="body">
                    <div class="table-title">
                      <table class="sui-table order-table">
                        <tr>
                          <thead>
                            <th width="45%">订单详情</th>
                            <th width="6%">收货人</th>
                            <th width="6%">金额</th>
                            <th width="10%">商品操作</th>
                            <th width="10%">交易状态</th>
                            <th width="11%">交易操作</th>
                          </thead>
                        </tr>
                      </table>
                    </div>
                    <div class="order-detail">
                      <div class="orders">
                        <div class="choose-order">
                          <div class="sui-pagination pagination-large top-pages">
                            <ul>
                              <li class="prev disabled">
                                <a href="">上一页</a>
                              </li>
                              <li class="next">
                                <a href="">下一页</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="choose-title">
                          <label data-toggle="checkbox" class="checkbox-pretty ">
                            <input type="checkbox" checked="checked">
                            <span>2017-02-11 11:5&nbsp;订单编号：7867473872181848&nbsp;店铺：哇哈哈<a>和我联系</a></span>
                          </label>
                          <a class="sui-btn btn-info share-btn">分享</a>
                        </div>
                        <table class="sui-table table-bordered order-datatable">
                          <tbody>
                            <tr>
                              <td width="45%">
                                <div class="typographic">
                                  <div><img src="static/img/dp03.png"></div>
                                  <div>
                                    <a href="" class="block-text">包邮&nbsp;正品玛姬儿压缩面膜无纺布纸膜100粒&nbsp;送泡瓶面膜刷喷瓶&nbsp;新款</a>
                                    <span class="guige">规格：温泉喷雾150ml</span>
                                  </div>
                                </div>
                              </td>
                              <td width="6%" class="center">遇见你了得</td>
                              <td width="6%" class="center">
                                <ul class="unstyled">
                                  <li class="o-price">¥299.00</li>
                                </ul>
                              </td>
                              <td width="10%" class="center">
                                <ul class="unstyled">
                                  <li >申请售后</li>
                                  <li >投诉</li>
                                </ul>
                              </td>
                              <td width="10%" class="center">
                                <ul class="unstyled">
                                  <li >交易成功</li>
                                  <li >订单详情</li>
                                </ul>
                              </td>
                              <td width="11%" class="center">
                                <ul class="unstyled">
                                  <li>评价</li>
                                  <li><a class="btn">订单详情</a></li>
                                </ul>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div class="choose-title">
                          <label data-toggle="checkbox" class="checkbox-pretty ">
                            <input type="checkbox" checked="checked">
                            <span>2017-02-11 11:5&nbsp;订单编号：7867473872181848&nbsp;店铺：哇哈哈<a>和我联系</a></span>
                          </label>
                          <a class="sui-btn btn-info share-btn">分享</a>
                        </div>
                        <table class="sui-table table-bordered order-datatable">
                          <tbody>
                            <tr>
                              <td width="45%">
                                <div class="typographic">
                                  <div><img src="static/img/dp03.png"></div>
                                  <div>
                                    <a href="" class="block-text">包邮&nbsp;正品玛姬儿压缩面膜无纺布纸膜100粒&nbsp;送泡瓶面膜刷喷瓶&nbsp;新款</a>
                                    <span class="guige">规格：温泉喷雾150ml</span>
                                  </div>
                                </div>
                              </td>
                              <td width="6%" class="center">遇见你了得</td>
                              <td width="6%" class="center">
                                <ul class="unstyled">
                                  <li class="o-price">¥299.00</li>
                                </ul>
                              </td>
                              <td width="10%" class="center">
                                <ul class="unstyled">
                                  <li >申请售后</li>
                                  <li >投诉</li>
                                </ul>
                              </td>
                              <td width="10%" class="center">
                                <ul class="unstyled">
                                  <li >交易成功</li>
                                  <li >订单详情</li>
                                </ul>
                              </td>
                              <td width="11%" class="center">
                                <ul class="unstyled">
                                  <li>评价</li>
                                  <li><a class="btn">订单详情</a></li>
                                </ul>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div class="choose-title">
                          <label data-toggle="checkbox" class="checkbox-pretty ">
                            <input type="checkbox" checked="checked">
                            <span>2017-02-11 11:5&nbsp;订单编号：7867473872181848&nbsp;店铺：哇哈哈<a>和我联系</a></span>
                          </label>
                          <a class="sui-btn btn-info share-btn">分享</a>
                        </div>
                        <table class="sui-table table-bordered order-datatable">
                          <tbody>
                            <tr>
                              <td width="45%">
                                <div class="typographic">
                                  <div><img src="static/img/dp03.png"></div>
                                  <div>
                                    <a href="" class="block-text">包邮&nbsp;正品玛姬儿压缩面膜无纺布纸膜100粒&nbsp;送泡瓶面膜刷喷瓶&nbsp;新款</a>
                                    <span class="guige">规格：温泉喷雾150ml</span>
                                  </div>
                                </div>
                              </td>
                              <td width="6%" class="center">遇见你了得</td>
                              <td width="6%" class="center">
                                <ul class="unstyled">
                                  <li class="o-price">¥299.00</li>
                                </ul>
                              </td>
                              <td width="10%" class="center">
                                <ul class="unstyled">
                                  <li >申请售后</li>
                                  <li >投诉</li>
                                </ul>
                              </td>
                              <td width="10%" class="center">
                                <ul class="unstyled">
                                  <li >交易成功</li>
                                  <li >订单详情</li>
                                </ul>
                              </td>
                              <td width="11%" class="center">
                                <ul class="unstyled">
                                  <li>评价</li>
                                  <li><a class="btn">订单详情</a></li>
                                </ul>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="待收货">
              <div class="con-wrap">
                <div class="yui3-u-5-6 order-pay">
                  <div class="body">
                    <div class="table-title">
                      <table class="sui-table order-table">
                        <tr>
                          <thead>
                            <th width="45%">订单详情</th>
                            <th width="6%">收货人</th>
                            <th width="6%">金额</th>
                            <th width="10%">商品操作</th>
                            <th width="10%">交易状态</th>
                            <th width="11%">交易操作</th>
                          </thead>
                        </tr>
                      </table>
                    </div>
                    <div class="order-detail">
                      <div class="orders">
                        <div class="choose-order">
                          <div class="sui-pagination pagination-large top-pages">
                            <ul>
                              <li class="prev disabled">
                                <a href="">上一页</a>
                              </li>
                              <li class="next">
                                <a href="">下一页</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="choose-title">
                          <label data-toggle="checkbox" class="checkbox-pretty ">
                            <input type="checkbox" checked="checked">
                            <span>2017-02-11 11:5&nbsp;订单编号：7867473872181848&nbsp;店铺：哇哈哈<a>和我联系</a></span>
                          </label>
                          <a class="sui-btn btn-info share-btn">分享</a>
                        </div>
                        <table class="sui-table table-bordered order-datatable">
                          <tbody>
                            <tr>
                              <td width="45%">
                                <div class="typographic">
                                  <div><img src="static/img/dp03.png"></div>
                                  <div>
                                    <a href="" class="block-text">包邮&nbsp;正品玛姬儿压缩面膜无纺布纸膜100粒&nbsp;送泡瓶面膜刷喷瓶&nbsp;新款</a>
                                    <span class="guige">规格：温泉喷雾150ml</span>
                                  </div>
                                </div>
                              </td>
                              <td width="6%" class="center">遇见你了得</td>
                              <td width="6%" class="center">
                                <ul class="unstyled">
                                  <li class="o-price">¥299.00</li>
                                </ul>
                              </td>
                              <td width="10%" class="center">
                                <ul class="unstyled">
                                  <li >申请售后</li>
                                  <li >投诉</li>
                                </ul>
                              </td>
                              <td width="10%" class="center">
                                <ul class="unstyled">
                                  <li >交易成功</li>
                                  <li >订单详情</li>
                                </ul>
                              </td>
                              <td width="11%" class="center">
                                <ul class="unstyled">
                                  <li>评价</li>
                                  <li><a class="btn">订单详情</a></li>
                                </ul>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div class="choose-title">
                          <label data-toggle="checkbox" class="checkbox-pretty ">
                            <input type="checkbox" checked="checked">
                            <span>2017-02-11 11:5&nbsp;订单编号：7867473872181848&nbsp;店铺：哇哈哈<a>和我联系</a></span>
                          </label>
                          <a class="sui-btn btn-info share-btn">分享</a>
                        </div>
                        <table class="sui-table table-bordered order-datatable">
                          <tbody>
                            <tr>
                              <td width="45%">
                                <div class="typographic">
                                  <div><img src="static/img/dp03.png"></div>
                                  <div>
                                    <a href="" class="block-text">包邮&nbsp;正品玛姬儿压缩面膜无纺布纸膜100粒&nbsp;送泡瓶面膜刷喷瓶&nbsp;新款</a>
                                    <span class="guige">规格：温泉喷雾150ml</span>
                                  </div>
                                </div>
                              </td>
                              <td width="6%" class="center">遇见你了得</td>
                              <td width="6%" class="center">
                                <ul class="unstyled">
                                  <li class="o-price">¥299.00</li>
                                </ul>
                              </td>
                              <td width="10%" class="center">
                                <ul class="unstyled">
                                  <li >申请售后</li>
                                  <li >投诉</li>
                                </ul>
                              </td>
                              <td width="10%" class="center">
                                <ul class="unstyled">
                                  <li >交易成功</li>
                                  <li >订单详情</li>
                                </ul>
                              </td>
                              <td width="11%" class="center">
                                <ul class="unstyled">
                                  <li>评价</li>
                                  <li><a class="btn">订单详情</a></li>
                                </ul>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div class="choose-title">
                          <label data-toggle="checkbox" class="checkbox-pretty ">
                            <input type="checkbox" checked="checked">
                            <span>2017-02-11 11:5&nbsp;订单编号：7867473872181848&nbsp;店铺：哇哈哈<a>和我联系</a></span>
                          </label>
                          <a class="sui-btn btn-info share-btn">分享</a>
                        </div>
                        <table class="sui-table table-bordered order-datatable">
                          <tbody>
                            <tr>
                              <td width="45%">
                                <div class="typographic">
                                  <div><img src="static/img/dp03.png"></div>
                                  <div>
                                    <a href="" class="block-text">包邮&nbsp;正品玛姬儿压缩面膜无纺布纸膜100粒&nbsp;送泡瓶面膜刷喷瓶&nbsp;新款</a>
                                    <span class="guige">规格：温泉喷雾150ml</span>
                                  </div>
                                </div>
                              </td>
                              <td width="6%" class="center">遇见你了得</td>
                              <td width="6%" class="center">
                                <ul class="unstyled">
                                  <li class="o-price">¥299.00</li>
                                </ul>
                              </td>
                              <td width="10%" class="center">
                                <ul class="unstyled">
                                  <li >申请售后</li>
                                  <li >投诉</li>
                                </ul>
                              </td>
                              <td width="10%" class="center">
                                <ul class="unstyled">
                                  <li >交易成功</li>
                                  <li >订单详情</li>
                                </ul>
                              </td>
                              <td width="11%" class="center">
                                <ul class="unstyled">
                                  <li>评价</li>
                                  <li><a class="btn">订单详情</a></li>
                                </ul>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="待评价">
              <div class="con-wrap">
                <div class="yui3-u-5-6 order-pay">
                  <div class="body">
                    <div class="table-title">
                      <table class="sui-table order-table">
                        <tr>
                          <thead>
                            <th width="45%">订单详情</th>
                            <th width="6%">收货人</th>
                            <th width="6%">金额</th>
                            <th width="10%">商品操作</th>
                            <th width="10%">交易状态</th>
                            <th width="11%">交易操作</th>
                          </thead>
                        </tr>
                      </table>
                    </div>
                    <div class="order-detail">
                      <div class="orders">
                        <div class="choose-order">
                          <div class="sui-pagination pagination-large top-pages">
                            <ul>
                              <li class="prev disabled">
                                <a href="">上一页</a>
                              </li>
                              <li class="next">
                                <a href="">下一页</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="choose-title">
                          <label data-toggle="checkbox" class="checkbox-pretty ">
                            <input type="checkbox" checked="checked">
                            <span>2017-02-11 11:5&nbsp;订单编号：7867473872181848&nbsp;店铺：哇哈哈<a>和我联系</a></span>
                          </label>
                          <a class="sui-btn btn-info share-btn">分享</a>
                        </div>
                        <table class="sui-table table-bordered order-datatable">
                          <tbody>
                            <tr>
                              <td width="45%">
                                <div class="typographic">
                                  <div><img src="static/img/dp03.png"></div>
                                  <div>
                                    <a href="" class="block-text">包邮&nbsp;正品玛姬儿压缩面膜无纺布纸膜100粒&nbsp;送泡瓶面膜刷喷瓶&nbsp;新款</a>
                                    <span class="guige">规格：温泉喷雾150ml</span>
                                  </div>
                                </div>
                              </td>
                              <td width="6%" class="center">遇见你了得</td>
                              <td width="6%" class="center">
                                <ul class="unstyled">
                                  <li class="o-price">¥299.00</li>
                                </ul>
                              </td>
                              <td width="10%" class="center">
                                <ul class="unstyled">
                                  <li >申请售后</li>
                                  <li >投诉</li>
                                </ul>
                              </td>
                              <td width="10%" class="center">
                                <ul class="unstyled">
                                  <li >交易成功</li>
                                  <li >订单详情</li>
                                </ul>
                              </td>
                              <td width="11%" class="center">
                                <ul class="unstyled">
                                  <li>评价</li>
                                  <li><a class="btn">订单详情</a></li>
                                </ul>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div class="choose-title">
                          <label data-toggle="checkbox" class="checkbox-pretty ">
                            <input type="checkbox" checked="checked">
                            <span>2017-02-11 11:5&nbsp;订单编号：7867473872181848&nbsp;店铺：哇哈哈<a>和我联系</a></span>
                          </label>
                          <a class="sui-btn btn-info share-btn">分享</a>
                        </div>
                        <table class="sui-table table-bordered order-datatable">
                          <tbody>
                            <tr>
                              <td width="45%">
                                <div class="typographic">
                                  <div><img src="static/img/dp03.png"></div>
                                  <div>
                                    <a href="" class="block-text">包邮&nbsp;正品玛姬儿压缩面膜无纺布纸膜100粒&nbsp;送泡瓶面膜刷喷瓶&nbsp;新款</a>
                                    <span class="guige">规格：温泉喷雾150ml</span>
                                  </div>
                                </div>
                              </td>
                              <td width="6%" class="center">遇见你了得</td>
                              <td width="6%" class="center">
                                <ul class="unstyled">
                                  <li class="o-price">¥299.00</li>
                                </ul>
                              </td>
                              <td width="10%" class="center">
                                <ul class="unstyled">
                                  <li >申请售后</li>
                                  <li >投诉</li>
                                </ul>
                              </td>
                              <td width="10%" class="center">
                                <ul class="unstyled">
                                  <li >交易成功</li>
                                  <li >订单详情</li>
                                </ul>
                              </td>
                              <td width="11%" class="center">
                                <ul class="unstyled">
                                  <li>评价</li>
                                  <li><a class="btn">订单详情</a></li>
                                </ul>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div class="choose-title">
                          <label data-toggle="checkbox" class="checkbox-pretty ">
                            <input type="checkbox" checked="checked">
                            <span>2017-02-11 11:5&nbsp;订单编号：7867473872181848&nbsp;店铺：哇哈哈<a>和我联系</a></span>
                          </label>
                          <a class="sui-btn btn-info share-btn">分享</a>
                        </div>
                        <table class="sui-table table-bordered order-datatable">
                          <tbody>
                            <tr>
                              <td width="45%">
                                <div class="typographic">
                                  <div><img src="static/img/dp03.png"></div>
                                  <div>
                                    <a href="" class="block-text">包邮&nbsp;正品玛姬儿压缩面膜无纺布纸膜100粒&nbsp;送泡瓶面膜刷喷瓶&nbsp;新款</a>
                                    <span class="guige">规格：温泉喷雾150ml</span>
                                  </div>
                                </div>
                              </td>
                              <td width="6%" class="center">遇见你了得</td>
                              <td width="6%" class="center">
                                <ul class="unstyled">
                                  <li class="o-price">¥299.00</li>
                                </ul>
                              </td>
                              <td width="10%" class="center">
                                <ul class="unstyled">
                                  <li >申请售后</li>
                                  <li >投诉</li>
                                </ul>
                              </td>
                              <td width="10%" class="center">
                                <ul class="unstyled">
                                  <li >交易成功</li>
                                  <li >订单详情</li>
                                </ul>
                              </td>
                              <td width="11%" class="center">
                                <ul class="unstyled">
                                  <li>评价</li>
                                  <li><a class="btn">订单详情</a></li>
                                </ul>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="关注商品">
              <div class="con-wrap">
                <div class="atten-title">
                  <h2>全部</h2>
                  <div class="search">搜索</div>
                </div>
              </div>
              <div class="atten-con">
                <div class="atten-filter">
                  <a href="">分类</a>
                  <p>批量操作</p>
                </div>
              </div>
              <ul class="atten-ul">
                <li class="atten-li">
                  <div class="atten-img">
                    <a href=""><img src="static/img/s3.png"></a>
                  </div>
                  <div class="atten-desc">
                    <p>商品描述吗日本 Dr.Ci.Labo城野医生毛孔收敛水 10本 Dr.Ci.Labo城野医生毛孔收敛</p>
                    <span>￥109.00</span>
                  </div>
                  <div class="atten-detail-filter">
                    <div>加入购物车</div>
                    <div>对比</div>
                    <div>降价通知</div>
                  </div>
                </li>
                <li class="atten-li">
                  <div class="atten-img">
                    <a href=""><img src="static/img/s3.png"></a>
                  </div>
                  <div class="atten-desc">
                    <p>商品描述吗日本 Dr.Ci.Labo城野医生毛孔收敛水 10本 Dr.Ci.Labo城野医生毛孔收敛</p>
                    <span>￥109.00</span>
                  </div>
                  <div class="atten-detail-filter">
                    <div>加入购物车</div>
                    <div>对比</div>
                    <div>降价通知</div>
                  </div>
                </li>
                <li class="atten-li">
                  <div class="atten-img">
                    <a href=""><img src="static/img/s3.png"></a>
                  </div>
                  <div class="atten-desc">
                    <p>商品描述吗日本 Dr.Ci.Labo城野医生毛孔收敛水 10本 Dr.Ci.Labo城野医生毛孔收敛</p>
                    <span>￥109.00</span>
                  </div>
                  <div class="atten-detail-filter">
                    <div>加入购物车</div>
                    <div>对比</div>
                    <div>降价通知</div>
                  </div>
                </li>
                <li class="atten-li">
                  <div class="atten-img">
                    <a href=""><img src="static/img/s3.png"></a>
                  </div>
                  <div class="atten-desc">
                    <p>商品描述吗日本 Dr.Ci.Labo城野医生毛孔收敛水 10本 Dr.Ci.Labo城野医生毛孔收敛</p>
                    <span>￥109.00</span>
                  </div>
                  <div class="atten-detail-filter">
                    <div>加入购物车</div>
                    <div>对比</div>
                    <div>降价通知</div>
                  </div>
                </li>
                <li class="atten-li">
                  <div class="atten-img">
                    <a href=""><img src="static/img/s3.png"></a>
                  </div>
                  <div class="atten-desc">
                    <p>商品描述吗日本 Dr.Ci.Labo城野医生毛孔收敛水 10本 Dr.Ci.Labo城野医生毛孔收敛</p>
                    <span>￥109.00</span>
                  </div>
                  <div class="atten-detail-filter">
                    <div>加入购物车</div>
                    <div>对比</div>
                    <div>降价通知</div>
                  </div>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="关注店铺">
              <div class="con-wrap">
                <div class="shops">
                  <ul class="shops-ul">
                    <li class="shops-li">
                      <div class="shops-detail">
                        <div class="shops-img">
                          <router-link :to="{path: '/detail'}">
                            <img src="static/img/s3.png">
                          </router-link>
                          <p>猴尾巴设计有限公司</p>
                        </div>
                        <div class="shops-link">
                          <div>进入店铺</div>
                          <div>联系客服</div>
                        </div>
                      </div>
                      <ul class="shops-goods">
                        <li class="shops-goods-li">
                          <a><img src="static/img/s3.png"></a>
                          <p>￥44</p>
                        </li>
                        <li class="shops-goods-li">
                          <a><img src="static/img/s3.png"></a>
                          <p>￥44</p>
                        </li>
                      </ul>
                    </li>
                    <li class="shops-li">
                      <div class="shops-detail">
                        <div class="shops-img">
                          <router-link :to="{path: '/detail'}">
                            <img src="static/img/s3.png">
                          </router-link>
                          <p>猴尾巴设计有限公司</p>
                        </div>
                        <div class="shops-link">
                          <div>进入店铺</div>
                          <div>联系客服</div>
                        </div>
                      </div>
                      <ul class="shops-goods">
                        <li class="shops-goods-li">
                          <a><img src="static/img/s3.png"></a>
                          <p>￥44</p>
                        </li>
                        <li class="shops-goods-li">
                          <a><img src="static/img/s3.png"></a>
                          <p>￥44</p>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="客户服务">客户服务</el-tab-pane>
            <el-tab-pane label="退款维权">退款维权</el-tab-pane>
            <el-tab-pane label="设置">设置</el-tab-pane>
            <el-tab-pane label="个人信息">
              <div class="con-wrap">
                <el-tabs type="border-card">
                  <el-tab-pane label="基本信息" class="user-info">
                    <div class="user-info-wrap">
                      <div class="user-info-list">
                        <span class="label">用户名：</span>
                        <div class="uname">
                          <strong>1825513892</strong><a class="change" >修改</a>
                        </div>
                      </div>
                      <div class="user-info-list">
                        <span class="label">昵称：</span>
                        <div>
                          <input class="text" type="text" name=""><i class="el-icon-success"></i><i class="el-icon-error"></i>
                        </div>
                      </div>
                      <div class="user-info-list">
                        <span class="label">性别：</span>
                        <div>
                          <input type="radio" name="sex" class="mkradio" value="0"><label class="mr10">男</label>
                          <input type="radio" name="sex" class="mkradio" value="1"><label class="mr10">女</label>
                          <input type="radio" name="sex" class="mkradio" value="2"><label class="mr10">保密</label>
                        </div>
                      </div>
                      <div class="user-info-list">
                        <span class="label">生日：</span>
                        <div>
                          <el-date-picker v-model="userBirthday" type="date" placeholder="选择日期"> </el-date-picker>
                        </div>
                      </div>
                      <div class="user-info-list">
                        <span class="label">邮箱：</span>
                        <div class="email">
                          <strong>1222@qq.com</strong><a class="change" >修改</a><span>已验证</span>
                        </div>
                      </div>
                      <div class="user-info-list">
                        <span class="label"></span>
                        <div class="submit">
                          <a>提交</a>
                        </div>
                      </div>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="头像照片">
                    <p class="user-pic-tip ">当前头像（点击头像可修改，头像只能是JPG格式，且不能超过2M 哦）</p>
                    <el-upload
                      class="avatar-uploader"
                      action="https://jsonplaceholder.typicode.com/posts/"
                      :show-file-list="false"
                      :on-success="handleAvatarSuccess"
                      :before-upload="beforeAvatarUpload">
                      <img v-if="userImageUrl" :src="userImageUrl" class="avatar">
                      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                    <div class="user-info-list">
                      <span class="label"></span>
                      <div class="submit save">
                        <a>保存</a>
                      </div>
                    </div>
                  </el-tab-pane>
                </el-tabs>
              </div>
            </el-tab-pane>
            <el-tab-pane label="地址管理">
              <div class="con-wrap">
                <div class="address">
                  <div>
                    <a>新增收货地址</a>
                    <P>您已创建8 个收货地址，最多可创建20个</P>
                  </div>
                </div>
                <div class="address-wrap">
                  <ul class="address-ul">
                    <li class="address-li">
                      <div class="address-name">
                        <a>公司</a><i @click="addressName" class="el-icon-setting"></i>
                      </div>
                      <div class="add-box">
                        <div class="add-info">
                          <div><span>收货人：</span><span>柴丽奇</span></div>
                          <div><span>所在地区：</span><span>湖南长沙市岳麓区城区</span></div>
                          <div><span>地址：</span><span>咸嘉湖街道枫林二路139号湖南财政经济学院</span></div>
                          <div><span>手机：</span><span>18804321999</span></div>
                          <div><span>固定电话：</span><span>0731835555</span></div>
                          <div><span>电子邮件：</span><span>1666275555@qq.com</span></div>
                        </div>
                        <div class="add-change">
                          <span>设为默认</span>
                          <span>编辑</span>
                          <span>删除</span>
                        </div>
                      </div>
                    </li>
                    <li class="address-li">
                      <div class="address-name"><a>公司</a><i class="el-icon-setting"></i></div>
                      <div class="add-box">
                        <div class="add-info">
                          <div><span>收货人：</span><span>柴丽奇</span></div>
                          <div><span>所在地区：</span><span>湖南长沙市岳麓区城区</span></div>
                          <div><span>地址：</span><span>咸嘉湖街道枫林二路139号湖南财政经济学院</span></div>
                          <div><span>手机：</span><span>18804321999</span></div>
                          <div><span>固定电话：</span><span>0731835555</span></div>
                          <div><span>电子邮件：</span><span>1666275555@qq.com</span></div>
                        </div>
                        <div class="add-change">
                          <span>设为默认</span>
                          <span>编辑</span>
                          <span>删除</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { apiAxios } from '../../common/utils'
import { api } from '../../common/api'
import shortcut from '../../components/shortcutHeader'
import userNav from '../../components/userNav'
import youLike from '../../components/youLike'
export default {
  data () {
    return {
      title: '',
      nav: [
        {name: '购物车', path: 'userCart'},
        {name: '我的订单', path: 'userOrder'},
        {name: '我的收藏', path: 'userCollect'}, // 收藏店铺userCollectShop收藏宝贝userCollectGoods
        {name: '我的评价', path: 'userAssess'},
        {name: '我的足迹', path: 'userHistory'},
        {name: '我的优惠', path: 'userFee'},
        {name: '我的发票', path: 'userTip'},
        {name: '退款维权', path: 'userProtect'},
        {name: '购买过的店铺', path: 'userBuyHistory'}
      ],
      orderStatesNum: '', // 用户订单状态数量
      likeList: [],
      usLook: [], // 大家都在看
      flowList: [], // 物流列表
      hisList: [], // 浏览记录
      rightAbs: [], // 右侧广告
      isflowMore: true, // 展开更多物流信息
      tabPosition: 'left',
      userBirthday: '', // 用户生日
      userImageUrl: 'static/img/logo-200.png' // 用户头像
    }
  },
  components: { shortcut, userNav, youLike },
  created () {
    this.$cookies.get('userInfo')
    let path = this.$route.path.split('/')[2]
    this.nav.forEach(item => {
      if (item.path === path) {
        this.title = item.name
      }
    })
  },
  mounted () {
    // 用户订单状态数据
    apiAxios.AxiosG({
      url: api.userOrderStates,
      params: {userName: this.$cookies.get('user-key')}
    }, res => {
      if (res.data.success) {
        this.orderStatesNum = res.data.data
      }
    })
    // 大家都在看
    apiAxios.AxiosG({
      url: api.user,
      params: {categoryId: 14}
    }, res => {
      if (res.data.success) {
        this.usLook = res.data.data.contentList
      }
    })
    // 猜你喜欢
    apiAxios.AxiosG({
      url: api.user,
      params: {categoryId: 13}
    }, res => {
      if (res.data.success) {
        this.likeList = res.data.data.contentList
      }
    })
    // 浏览记录
    apiAxios.AxiosG({
      url: api.user,
      params: {categoryId: 15}
    }, res => {
      if (res.data.success) {
        this.hisList = res.data.data.contentList
      }
    })
    // 浏览记录
    apiAxios.AxiosG({
      url: api.user,
      params: {categoryId: 16}
    }, res => {
      if (res.data.success) {
        this.rightAbs = res.data.data.contentList
      }
    })
  },
  methods: {
    tab (e) {
      this.$router.push({path: '/user/' + e.path})
      this.title = e.name
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    handleAvatarSuccess (res, file) {
      this.userImageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    addressName () {
    }
  }
}

</script>
<style scoped>
/*@import '../../assets/css/cart/webbase.css';
@import '../../assets/css/user/pages-seckillOrder.css';*/
@import '../../assets/css/user/user.css';
/*@import "../../assets/css/search/search.css"*/
  .screen-back{
    width:100%;
    background: #F4F4F4;
  }
  .user {
    display: flex;
    justify-content: space-between;
  }
  .account-sidebar {
    width: 135px;
    border-radius: 6px;
  }
  .gray-box {
    overflow: hidden;
    background: #fff;
    box-shadow: 0 3px 8px -6px rgba(0,0,0,.1);
  }
  .account-sidebar .account-nav {
    padding-top: 15px;
    padding-bottom: 15px;
  }
  .account-sidebar .avatar {
    padding-top: 20px;
    border-radius: 10px;
    text-align: center;
  }
  .account-sidebar .account-nav li {
    position: relative;
    margin-top: 13px;
  }
  .account-sidebar .account-nav li a {
    font-style: normal;
    text-decoration: none;
    color:rgba(36,36,36,1);
    font-size:14px;
    cursor: pointer;
    transition: all .15s ease-out;
    display: block;
    padding-left: 30px;
    text-align: left;
  }
  .account-sidebar .account-nav li.current a {
    position: relative;
    z-index: 1;
    color: red;
  }
  .account-content {
    width: 1083px;
    margin-left: 5px;
    padding-bottom: 142px;
  }

</style>
