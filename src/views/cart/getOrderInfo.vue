<template>
  <div id="getOrderInfo">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <shortcutHeader></shortcutHeader>
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
                  <div v-for="(list, index) in addressList" :key="list.id" v-if="index<3">
                    <div class="con name selected"><a>{{list.contact}}<span title="点击取消选择"><i class="el-icon-check"></i></span></a></div>
                    <div class="con address">{{list.contact}}&nbsp;&nbsp;{{list.address}}<span>{{list.mobile}}</span>
                      <span class="base" v-if="list.isDefault === '1'" :data-isDefault="list.isDefault">默认地址</span>
                      <span class="edittext"><a>编辑</a>&nbsp;&nbsp;<a>删除</a></span>
                    </div>
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
                <li v-for="list in goodSkuList" :key="list.itemId">
                  <div class="sendGoods">
                    <ul class="yui3-g">
                      <li class="yui3-u-1-6">
                        <span><img :src="list.picPath"/></span>
                      </li>
                      <li class="yui3-u-7-12 send-goods-desc" >
                        <div class="desc">{{list.title}}</div>
                        <div class="p-extra"><span>{{list.spec}}</span></div>
                        <div class="seven">7天无理由退货</div>
                      </li>
                      <li class="yui3-u-1-12">
                        <div class="price">￥{{list.price}}</div>
                      </li>
                      <li class="yui3-u-1-12">
                        <div class="num">X{{list.num}}</div>
                      </li>
                    </ul>
                  </div>
                </li>
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
            <span><i class="number">{{totalNum}}</i>件商品，总商品金额</span>
            <em class="allprice">¥{{totalPrice}}</em>
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
        <div class="fc-price">应付金额:<span class="price">¥{{submitPrice}}</span></div>
        <div class="fc-receiverInfo">寄送至:{{defaultAddress.address}} 收货人：{{defaultAddress.contact}}&nbsp;&nbsp;{{defaultAddress.mobile}}</div>
      </div>
      <div class="submit">
        <a class="sui-btn btn-danger btn-xlarge" @click="submitOrder">提交订单</a>
      </div>
    </div>
    <pageFooter></pageFooter>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import shortcutHeader from '../../components/shortcutHeader'
import pageFooter from '../../components/pageFooter'
import { apiAxios, getStore, removeStore } from '../../common/utils'
import { api } from '../../common/api'
export default {
  data () {
    return {
      addressList: '',
      goodSkuList: '',
      totalNum: 0,
      totalPrice: 0,
      submitPrice: '',
      defaultAddress: '',
      sellerId: 0
    }
  },
  components: { shortcutHeader, pageFooter },
  computed: {
    ...mapState(['cartList'])
  },
  activated () {},
  deactivated () {
    this.$destroy()
  },
  created () {
    if (!JSON.parse(getStore('selectList'))) {
      this.$message.warning('信息有误')
      this.$router.go(-1)
    }
  },
  mounted () {
    apiAxios.AxiosG({
      url: api.addressListByUser,
      params: {userId: this.$cookies.get('user-key')}
    }, rtn => {
      this.addressList = rtn.data
      this.addressList.sort(this.compare('isDefault'))
      for (let val of this.addressList) {
        if (val.isDefault === '1') {
          this.defaultAddress = val
          break
        }
      }
    })
    this.goodSkuList = JSON.parse(getStore('selectList'))
    // for (let val in this.spec) {
    //   ts += val + '：' + this.spec[val]
    //   ts += ''
    // }
    this.goodSkuList.forEach(item => {
      this.totalNum += Number(item.num)
    })
    this.goodSkuList.forEach(item => {
      this.totalPrice += Number(item.totalFee)
    })
    this.submitPrice = this.totalPrice
  },
  methods: {
    compare (property) { // 比较指定对象属性值大小 降序
      return (a, b) => {
        let value1 = a[property]
        let value2 = b[property]
        return value2 - value1
      }
    },
    submitOrder () {
      let time = new Date()
      let createTime = time.toLocaleString('chinese', {hour12: false})
      if (!this.$cookies.get('user-key')) {
        this.router.push({path: '/login'})
        return false
      }
      let order = {
        payment: this.submitPrice, // "实付金额",
        payment_type: 1, // "支付类型,1、在线支付，2、货到付款"
        post_fee: '', // "邮费",
        status: 1, // "状态：1未付款.2已付款.3未发货.4已发货.5交易成功.6交易关闭.7待评价",
        create_time: createTime, // "订单创建时间",
        update_time: '', // "订单更新时间",
        payment_time: '', // "付款时间",
        consign_time: '', // "发货时间",
        end_time: '', // "交易完成时间",
        close_time: '', // "交易关闭时间",
        shipping_name: '', // "物流名称",
        shipping_code: '', // "物流单号",
        user_id: this.$cookies.get('user-key'), // "用户id",
        buyer_message: '', // "买家留言",
        buyer_nick: '', // "买家昵称",
        buyer_rate: '', // "买家是否已经评价",
        receiver_area_name: this.defaultAddress.address, // "收货人地区名称(省，市，县)街道",
        receiver_mobile: this.defaultAddress.mobile, // "收货人手机",
        receiver_zip_code: '', // "收货人邮编",
        receiver: this.defaultAddress.contact, // "收货人",
        expire: '', // "过期时间，定期清理",
        invoice_type: '', // "发票类型(1普通发票，2电子发票，3增值税发票)",
        source_type: 2, // "订单来源：1:app端，2：pc端，3：M端，4：微信端，5：手机qq端",
        seller_id: '' // "商家ID"
      }
      console.log(this.$route.query.skuId)
      let orderInfo = this.$route.query.skuId ? api.directOrderInfo : api.getOrderInfo
      apiAxios.AxiosP({
        url: orderInfo,
        params: {userName: this.$cookies.get('user-key')},
        data: order
      }, rtn => {
        if (rtn.data.success) {
          this.$message.success('提交订单成功')
          removeStore('selectList')
          this.$router.push({path: '/pay'})
        } else {
          this.$message.error('提交订单失败')
        }
      })
    }
  }
}
</script>
<style scoped>
@import "../../assets/css/cart/webbase.css";
@import "../../assets/css/cart/getOrderInfo.css"
</style>
