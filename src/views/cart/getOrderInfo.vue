<template>
  <div id="getOrderInfo">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <div class="py-container">
      <div class="checkout py-container">
        <div class="checkout-tit">
          <h4 class="tit-txt">填写并核对订单信息</h4>
        </div>
        <div class="checkout-steps">
          <!--收件人信息-->
          <div class="step-tit">
            <h5>收件人信息<span><a data-toggle="modal" data-target=".edit" data-keyboard="false" class="newadd">新增收货地址</a></span>
            </h5>
          </div>
          <div class="step-cont">
            <div class="addressInfo">
              <ul class="addr-detail">
                <li class="addr-item">
                  <div>
                    <div class="con name selected"><a href="javascript:;" >张默<span title="点击取消选择">&nbsp;</span></a></div>
                    <div class="con address">张默 北京市海淀区三环内 中关村软件园9号楼 <span>159****3201</span>
                      <span class="base">默认地址</span>
                      <span class="edittext"><a data-toggle="modal" data-target=".edit" data-keyboard="false" >编辑</a>&nbsp;&nbsp;<a href="javascript:;">删除</a></span>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                  <div>
                    <div class="con name"><a href="javascript:;">李煜<span title="点击取消选择">&nbsp;</span></a></div>
                    <div class="con address">李煜 北京市海淀区三环内 中关村软件园8号楼 <span>187****4201</span>
                      <span class="edittext"><a data-toggle="modal" data-target=".edit" data-keyboard="false" >编辑</a>&nbsp;&nbsp;<a href="javascript:;">删除</a></span>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                  <div>
                    <div class="con name"><a href="javascript:;">王希<span title="点击取消选择">&nbsp;</span></a></div>
                    <div class="con address">王希 北京市海淀区三环内 中关村软件园6号楼 <span>156****5681</span>
                      <span class="edittext"><a data-toggle="modal" data-target=".edit" data-keyboard="false" >编辑</a>&nbsp;&nbsp;<a href="javascript:;">删除</a></span>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                </li>
              </ul>
              <!--添加地址-->
              <div tabindex="-1" role="dialog" data-hasfoot="false" class="sui-modal hide fade edit">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <button type="button" data-dismiss="modal" aria-hidden="true" class="sui-close">×</button>
                      <h4 id="myModalLabel" class="modal-title">添加收货地址</h4>
                    </div>
                    <div class="modal-body">
                      <form action="" class="sui-form form-horizontal">
                        <div class="control-group">
                          <label class="control-label">收货人：</label>
                          <div class="controls">
                            <input type="text" class="input-medium">
                          </div>
                        </div>
                        <div class="control-group">
                          <label class="control-label">详细地址：</label>
                          <div class="controls">
                            <input type="text" class="input-large">
                          </div>
                        </div>
                        <div class="control-group">
                          <label class="control-label">联系电话：</label>
                          <div class="controls">
                            <input type="text" class="input-medium">
                          </div>
                        </div>
                        <div class="control-group">
                          <label class="control-label">邮箱：</label>
                          <div class="controls">
                            <input type="text" class="input-medium">
                          </div>
                        </div>
                        <div class="control-group">
                          <label class="control-label">地址别名：</label>
                          <div class="controls">
                            <input type="text" class="input-medium">
                          </div>
                          <div class="othername">建议填写常用地址：<a href="#" class="sui-btn btn-default">家里</a><a href="#" class="sui-btn btn-default">父母家</a><a href="#" class="sui-btn btn-default">公司</a>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button type="button" data-ok="modal" class="sui-btn btn-primary btn-large">确定</button>
                      <button type="button" data-dismiss="modal" class="sui-btn btn-default btn-large">取消</button>
                    </div>
                  </div>
                </div>
              </div>
              <!--确认地址-->
            </div>
            <div class="hr"></div>
          </div>
          <div class="hr"></div>
          <!--支付和送货-->
          <div class="payshipInfo">
            <div class="step-tit">
              <h5>支付方式</h5>
            </div>
            <div class="step-cont">
              <ul class="payType">
                <li class="selected">微信付款<span title="点击取消选择"></span></li>
                <li>货到付款<span title="点击取消选择"></span></li>
              </ul>
            </div>
            <div class="hr"></div>
            <div class="step-tit">
              <h5>送货清单</h5>
            </div>
            <div class="step-cont">
              <ul class="send-detail">
                <li>
                  <div class="sendGoods">
                    <ul class="yui3-g">
                      <li class="yui3-u-1-6">
                        <span><img src="../../../static/img/itemlike01.png"/></span>
                      </li>
                      <li class="yui3-u-7-12 send-goods-desc" >
                        <div class="desc">Apple iPhone 6s (A1700) 64G 玫瑰金色 移动联通电信4G手机硅胶透明防摔软壳 本色系列</div>
                        <div class="seven">7天无理由退货</div>
                      </li>
                      <li class="yui3-u-1-12">
                        <div class="price">￥5399.00</div>
                      </li>
                      <li class="yui3-u-1-12">
                        <div class="num">X1</div>
                      </li>
                      <li class="yui3-u-1-12">
                        <div class="exit">有货</div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div class="hr"></div>
          </div>
          <div class="linkInfo">
            <div class="step-tit">
              <h5>发票信息</h5>
            </div>
            <div class="step-cont">
              <span>普通发票（电子）</span>
              <span>个人</span>
              <span>明细</span>
            </div>
          </div>
          <div class="cardInfo">
            <div class="step-tit">
              <h5>使用优惠/抵用</h5>
            </div>
          </div>
        </div>
      </div>
      <div class="order-summary">
        <div class="static fr">
          <div class="list">
            <span><i class="number">1</i>件商品，总商品金额</span>
            <em class="allprice">¥5399.00</em>
          </div>
          <div class="list">
            <span>返现：</span>
            <em class="money">0.00</em>
          </div>
          <div class="list">
            <span>运费：</span>
            <em class="transport">0.00</em>
          </div>
        </div>
      </div>
      <div class="clearfix trade">
        <div class="fc-price">应付金额:<span class="price">¥5399.00</span></div>
        <div class="fc-receiverInfo">寄送至:北京市海淀区三环内 中关村软件园9号楼 收货人：某某某 159****3201</div>
      </div>
      <div class="submit">
        <router-link :to="{ path:'/pay' }" class="sui-btn btn-danger btn-xlarge" >提交订单</router-link>
      </div>
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
@import "../../assets/css/cart/webbase.css";
@import "../../assets/css/cart/getOrderInfo.css"
</style>
