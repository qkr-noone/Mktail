<template>
  <div id="getOrderInfo">
    <shortcutHeader></shortcutHeader>
    <div class="sum-nav">
      <div class="sum-nav-con">
        <div class="sum-nav-logo">
          <a href=""><img src="static/img/mk_logo_addorder.png"></a>
          <h1>结算页</h1>
        </div>
        <div class="progress">
          <div class="progress-box">
            <div class="progress-num">
              <span class="pro-0"></span>
              <a class="pro-tip">1</a>
              <span class="pro-1"></span>
            </div>
            <h3 class="progress-title">1.我的购物车</h3>
          </div>
          <div class="progress-box">
            <div class="progress-num">
              <span class="pro-1"></span>
              <a class="pro-tip">2</a>
              <span class="pro-2"></span>
            </div>
            <h3 class="progress-title">2.填写核对订单信息</h3>
          </div>
          <div class="progress-box noactive">
            <div class="progress-num">
              <span class="pro-2"></span>
              <a class="pro-tip">3</a>
              <span class="pro-2"></span>
            </div>
            <h3 class="progress-title">3.付款</h3>
          </div>
          <div class="progress-box noactive">
            <div class="progress-num">
              <span class="pro-2"></span>
              <a class="pro-tip">4</a>
              <span class="pro-0"></span>
            </div>
            <h3 class="progress-title">4.支付成功</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="py-container">
      <div class="add">
        <div class="add-title">
          <h2>收货信息</h2>
          <a href="javascript:;" class="add-address-btn">添加新地址</a>
        </div>
        <div class="add-con">
          <div>
            <ul class="add-con-ul">
              <li>
                <div class="add-box">
                  <div class="add-box-1">
                    <h5><span>张三</span><span>（广东省 广州市）</span></h5>
                    <div class="add-tip">
                      <span>默认</span><span>公司</span>
                    </div>
                  </div>
                  <div class="add-box-2">
                    <span>从化区从化区从化区从化区从化区从化区从化区从化区从化区从化区从化区从化区</span><span>城郊街道</span>
                    <span>明珠大道丽峰路</span><span>137******0</span>
                  </div>
                  <div class="add-box-3"><span>修改</span></div>
                </div>
              </li>
              <li>
                <div class="add-box">
                  <div class="add-box-4">
                    <i class="el-icon-plus"></i>
                    <p>添加地址</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="add">
        <div class="add-title">
          <h2>支付方式</h2>
        </div>
        <div class="pay-con">
          <ul class="pay-con-ul">
            <li class="pay-con-li">
              <div class="pay-con-box">银行卡支付</div>
            </li>
            <li class="pay-con-li">
              <div class="pay-con-box">支付宝</div>
            </li>
            <li class="pay-con-li">
              <div class="pay-con-box">微信支付</div>
            </li>
          </ul>
        </div>
      </div>
      <div class="add">
        <div class="add-title">
          <h2>商品及服务信息</h2>
            <a href="javascript:;" class="add-address-btn">返回我的购物车修改</a>
        </div>
        <div class="goods">
          <ul>
            <li>
              <div class="goods-box">
                <div class="goods-head">
                  <div class="goods-h1"><h4>希箭官方旗舰店</h4><img src="static/img/mk_addorder-service.png"></div>
                  <div class="goods-h2">服务信息</div>
                  <div class="goods-h3">单价</div>
                  <div class="goods-h4">数量</div>
                  <div class="goods-h5">小计</div>
                </div>
                <div class="goods-con">
                  <ul class="goods-h1">
                    <li class="go-detail" v-for="list in goodSkuList" :key="list.itemId">
                      <a href=""><img :src="list.picPath"></a>
                      <div class="go-de-title">
                        <h5>{{list.title}}</h5>
                        <div class="donate"><span>退</span></div>
                      </div>
                    </li>
                  </ul>
                  <div class="goods-h2 Center">
                    <div>支付完成后尽快为您发货</div>
                  </div>
                  <div class="goods-h3 Top">
                    <li class="go-price Center" v-for="list in goodSkuList" :key="list.itemId">¥ {{list.price}}</li>
                  </div>
                  <div class="goods-h4 Top">
                    <li class="go-price Center" v-for="list in goodSkuList" :key="list.itemId">{{list.num}}</li>
                  </div>
                  <div class="goods-h5 Top last">
                    <li class="go-price Center" v-for="list in goodSkuList" :key="list.itemId">¥{{(list.totalFee).toFixed(2)}}</li>
                  </div>
                </div>
                <div class="goods-tip">
                  <div class="goods-h6">
                    <label>给卖家留言：</label>
                    <textarea  class="form-info" type="textarea" maxlength="85" name="" v-model="formDesc" placeholder="选填：对本次交易的补充说明(所填内容建议已经和卖家达成一致意见)"></textarea>
                    <span class="form-font">{{formDesc.length}}/85</span>
                  </div>
                  <div class="goods-h7">
                    <h4>免运费</h4>
                    <div class="flow">
                      <input type="checkbox" name=""><span class="flow-tip">免运费</span><span>以下商品  参加小件运费险,退货可赔6元</span>
                      <h4 class="flow-price">¥ 0.85</h4>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="add">
        <div class="add-title invoice-box">
          <h2>发票信息</h2>
          <a href="javascript:;" class="add-address-btn">修改</a>
        </div>
        <div class="invoice">
          <div class="invoice-info-1">
            <span>发票类型：</span>
            <div class="invoice-type">
              <span>纸质普通发票</span>
              <i class="el-icon-caret-bottom"></i>
            </div>
          </div>
          <div class="invoice-info-1">
            <span>发票抬头：</span>
            <div class="invoice-type">
              <span>张三</span>
            </div>
          </div>
        </div>
      </div>
      <div class="add">
        <div class="add-title">
          <h2>结算信息</h2>
        </div>
        <div class="count-con">
          <div class="count-ticket">
            <div class="count-tick-tit">
              <span class="tick-tip"><i class="el-icon-plus"></i></span>
              <span>使用优惠券</span>
            </div>
          </div>
          <div class="count-ticket">
            <div class="count-tick-tit">
              <span class="tick-tip"><i class="el-icon-plus"></i></span>
              <span>使用红包</span>
            </div>
          </div>
          <div class="count-price">
            <div class="count-price-li">
              <span><strong>{{totalNum}}</strong>件商品 总计：</span>
              <span class="count-price-item">¥{{totalPrice}}</span>
            </div>
            <div class="count-price-li">
              <span>运费：</span>
              <span class="count-price-item">¥0.00</span>
            </div>
            <div class="count-price-li">
              <span>优惠：</span>
              <span class="count-price-item">¥0.00</span>
            </div>
            <div class="count-price-li">
              <span>优惠券/卡：</span>
              <span class="count-price-item">¥0.00</span>
            </div>
          </div>
        </div>
      </div>
      <div class="all-sum">
        <div class="sum-box">
          <span class="sum-tip">应付金额：</span>
          <span class="sum-price">¥{{submitPrice}}</span>
        </div>
        <div class="receiverInfo">
          <div>
            <span class="sum-add-tip">寄送至:</span>
            <span>{{defaultAddress.address}}</span>
          </div>
          <div>
            <span class="sum-add-tip">收货人：</span>
            <span>{{defaultAddress.contact}}</span>
            <span>{{defaultAddress.mobile}}</span>
          </div>
        </div>
        <div class="sum-order">提交订单</div>
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
      sellerId: 0,
      formDesc: ''
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
    console.log(this.goodSkuList, 2)
    this.goodSkuList.forEach(item => {
      this.totalNum += Number(item.num)
    })
    this.goodSkuList.forEach(item => {
      this.totalPrice += Number(item.totalFee)
    })
    this.totalPrice = (this.totalPrice).toFixed(2)
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
/*@import "../../assets/css/cart/webbase.css";*/
@import "../../assets/css/cart/getOrderInfo.css"
</style>
