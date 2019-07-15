<template>
  <div id="test-index">
    <div class="py-container">
      <div class="container">
        <div class="cart-title">
          <div class="all-goods">全部商品 <span>9</span> 店铺</div>
          <div class="choose-address">配送至：调取地址</div>
        </div>
        <div class="cart-wrap">
          <div class="xx-cart">
            <div class="cart-main">
              <div class="cart-thead">
                <div>全选</div>
                <div>商品</div>
                <div></div>
                <div>单价</div>
                <div>数量</div>
                <div>小计</div>
                <div>操作</div>
              </div>
              <div class="cart-list">
                <div class="cart-item-list">
                  <div class="cart-tbody">
                    <div class="shop">
                      <div><input type="checkbox" name=""></div>
                      <div>店铺 客服</div>
                      <div>其他</div>
                    </div>
                    <div class="item-list">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="display: flex;flex-direction: column;">
      <el-tabs  :tab-position="tabPosition" style="background-color: #fff">
          <!-- <el-tab-pane label="全部功能">
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
          </el-tab-pane> -->
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
        </el-tabs>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  }
}

</script>
<style scoped>
/* 关注商品 */
  .atten-title,.atten-filter{
    display: flex;
  }
  .atten-ul {
    display: flex;
    flex-wrap: wrap;
  }
  .atten-li {
    border: 1px solid #eee;
    box-sizing: content-box;
  }
  .atten-img>a{
    width: 210px;
  }
  .atten-img>a>img{
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
  }
  .atten-desc >p{
    width: 300px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
  }
  .atten-desc >span{
    color: red;
    font-weight: bolder;
    font-size: 16px;
    margin: 8px;
  }
  .atten-detail-filter {
    display: flex;
    justify-content: space-around;
    margin-bottom: 10px;
  }
  .atten-detail-filter >div{
    border: 1px solid red;
    color: red;
    padding: 5px;
  }
  .atten-detail-filter >div+div{
    color: #333;
    border: 1px solid #e6e6e6;
  }

/* 关注店铺 */
  .shops-li {
    display: flex;
  }
   li.shops-li+li {
    margin-top: 20px;
  }
  .shops-img {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1
  }
  .shops-img >a {
    width: 120px;
    height: 40px;
    overflow: hidden;
  }
  .shops-img >a >img{
    width: 100%;
    height: 100%;
  }
  .shops-link {
    display: flex;
    justify-content: space-around;
  }
  .shops-goods {
    flex-grow: 1;
    display: flex;
    flex-wrap: nowrap;
    margin-left: 15px;
    border: 1px solid #eee;
  }
  .shops-goods-li {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .shops-goods-li a {
    width: 200px;
    height: 200px;
    overflow: hidden;
  }
  .shops-goods-li a img {
    width: 100%;
  }
  div.shops-detail {
    display: flex;
    flex-direction: column;
    font-size: 12px;
    transition: box-shadow 0.2s linear;
    width: 258px;
    box-sizing: content-box;
    border: 1px solid #eeeeee;
  }
  div.shops-detail:hover {
    box-shadow: 0 10px 10px #80008010;
  }
/* 个人设置 */
  .user-info{}
  .user-info-wrap{}
  .user-info-list{
    display: flex;
    font-size: 12px;
    margin-bottom: 20px
  }
  .user-info-list .label{
    width: 100px;
    height: 18px;
    text-align: right;
    line-height: 18px;
    padding: 6px 0;
  }
  .user-info-list >div {
    display: flex;
    align-items: center;
    margin-left: 10px;
  }
  .user-info-list >div> i {
    font-size: 20px;
    line-height: 30px;
    margin-left: 10px;
    color: purple;
  }
  .user-info-list .text {
    border: 1px solid #bbbbbb;
    height: 18px;
    width: 127px;
    padding: 5px 23px 5px 5px;
    line-height: 30px;
    font-family: "Microsoft YaHei";
  }
  .mkradio {
    margin-right: 3px;
  }
  .user-info-list >div>label {
    margin-right: 20px;
  }
  .uname a,.email a,.email span {
    margin-left: 10px;
  }
  .submit a{
    border: 1px solid #ccc;
    width: 60px;
    height: 35px;
    line-height: 35px;
    color: purple;
  }
/* 头像设置 */
  .avatar-uploader {
    display: flex;
    position: relative;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .user-pic-tip {
    font-size: 12px;
    color: #aaa;
    margin-bottom: 15px;
  }
  .save {
    margin-top: 20px;
  }

/* 地址管理 */
  .address>div{ display: flex; }
  .address-wrap{}
  .address-ul{}
  .address-li{  box-sizing: content-box; border: 1px solid #ccc; margin-top: 20px;}
  .address-name{ display: flex; margin: 15px 0 0px 30px;}
  .address-name i {font-size: 16px; line-height: 16px; margin-left: 15px;}
  .add-box{ display: flex; justify-content: space-around;padding: 10px;}
  .add-info{ flex-grow: 1; display: flex;flex-direction: column; align-items: flex-start; }
  .add-info >div{
    font-size: 13px;
    color: #bbb;
    height: 25px;
    line-height: 25px;
    max-width: 800px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .add-info >div span:first-child{
    width: 70px;
    text-align: right;
  }
  .add-info >div span+span{
    color: #000;
  }
  .add-change{display: flex; align-items: flex-end; }
  .add-change span{ font-size: 14px; color: purple;margin-left: 15px; }
</style>
