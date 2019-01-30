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
          <a href="javascript:;" class="add-address-btn" @click="getForm()">添加新地址</a>
        </div>
        <div class="add-con">
          <div>
            <ul class="add-con-ul">
              <li v-for="list in addressList" :key="list.id">
                <div class="add-box" @click="chooseAddress = list.id" :class="{'select-addr': chooseAddress === list.id}">
                  <div class="add-box-1">
                    <h5><span>{{list.contact}}</span><span class="add-posi">({{list.provinceId}}{{list.cityId}})</span></h5>
                    <div class="add-tip">
                      <span class="tip1" v-if="list.isDefault === '1'">默认</span><span class="tip2" v-if="list.alias">{{list.alias}}</span>
                    </div>
                  </div>
                  <div class="add-box-2">
                    <span>{{list.provinceId}}{{list.cityId}}{{list.townId}}{{list.address}}{{list.mobile}}</span>
                  </div>
                  <div class="add-box-3"><span class="set" v-show="chooseAddress === list.id" @click="setAddress">修改</span></div>
                </div>
              </li>
              <li v-if="addressList.length<4">
                <div class="add-box">
                  <div class="add-box-4">
                    <i class="el-icon-plus" @click="getForm()"></i>
                    <p>添加地址</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="add pay">
        <div class="add-title">
          <h2>支付方式</h2>
        </div>
        <div class="pay-con">
          <ul class="pay-con-ul">
            <li class="pay-con-li" :class="{'select-pay': choosePay ==='bankPay'}" @click="choosePay = 'bankPay'">
              <div class="pay-con-box">银行卡支付</div>
              <div class="select-tip" v-show="choosePay ==='bankPay'"><span><i class="el-icon-check"></i></span></div>
              <!-- <i class="el-icon-check"></i> -->
            </li>
            <li class="pay-con-li" :class="{'select-pay': choosePay ==='alipay'}" @click="choosePay = 'alipay'">
              <div class="pay-con-box">支付宝</div>
              <div class="select-tip" v-show="choosePay ==='alipay'"><span><i class="el-icon-check"></i></span></div>
            </li>
            <li class="pay-con-li" :class="{'select-pay': choosePay ==='weChatPay'}" @click="choosePay = 'weChatPay'">
              <div class="pay-con-box">微信支付</div>
              <div class="select-tip" v-show="choosePay ==='weChatPay'"><span><i class="el-icon-check"></i></span></div>
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
                      <router-link :to="{path: '/detail', query:{goodsId: list.goodsId,skuId: list.itemId}}"><img :src="list.picPath"></router-link>
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
                    <li class="go-price Center" v-for="list in goodSkuList" :key="list.itemId">¥{{list.totalFee}}</li>
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
            <span>{{defaultAddress.provinceId}}{{defaultAddress.cityId}}{{defaultAddress.townId}}{{defaultAddress.address}}</span>
          </div>
          <div>
            <span class="sum-add-tip">收货人：</span>
            <span>{{defaultAddress.contact}}</span>
            <span>{{defaultAddress.mobile}}</span>
          </div>
        </div>
        <div class="sum-order" @click="submitOrder">提交订单</div>
      </div>
    </div>
    <div class="user-info Center" v-if="isForm">
      <div class="user-info-box">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="收货人：" prop="username">
            <el-input v-model="ruleForm.username" placeholder="姓名"></el-input>
          </el-form-item>
          <el-form-item label="联系手机：" prop="mobile">
            <el-input v-model="ruleForm.mobile" placeholder="请填写正确的11位手机号码"></el-input>
          </el-form-item>
          <el-form-item label="备用手机：" prop="phone">
            <el-input v-model="ruleForm.phone" placeholder="选填"></el-input>
          </el-form-item>
          <el-form-item label="所在地区：" prop="address">
            <el-input v-model="ruleForm.address" placeholder="请选择省 请选择市 请选择区 请选择乡镇"></el-input>
          </el-form-item>
          <el-form-item label="详细地址:" prop="deAddress">
            <el-input v-model="ruleForm.deAddress" placeholder="街道、小区、楼牌号等，无须重复填写省市区"></el-input>
          </el-form-item>
          <el-form-item label="标签:" prop="tag">
            <el-radio-group v-model="ruleForm.tag">
              <el-radio label="家"></el-radio>
              <el-radio label="公司"></el-radio>
              <el-radio label="学校"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="" prop="otherTag">
            <el-input v-model="ruleForm.otherTag"  placeholder="填写其他标签" class="otherTag"></el-input>
          </el-form-item>
          <el-form-item label="" prop="isSelect">
            <el-checkbox-group v-model="ruleForm.isSelect">
              <el-checkbox label="设为默认收货地址 设置后我们将在您购物时自动选中该收货地址" name="isSelect" class="isSelect"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-form>
        <div class="user-inf-push">
          <a href="javascript:;">保存并使用</a>
        </div>
        <div class="close" @click="closeForm()">
          <i class="el-icon-close"></i>
        </div>
      </div>
    </div>
    <pageFooter></pageFooter>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import shortcutHeader from '../../components/shortcutHeader'
import pageFooter from '../../components/pageFooter'
import { apiAxios, getStore, setStore } from '../../common/utils'
import { api } from '../../common/api'
export default {
  data () {
    return {
      addressList: '',
      goodSkuList: [],
      totalNum: 0,
      totalPrice: 0,
      submitPrice: '',
      defaultAddress: '',
      chooseAddress: '',
      choosePay: 'weChatPay',
      sellerId: 0,
      formDesc: '',
      isForm: false,
      ruleForm: {
        name: '',
        tag: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
        ],
        mobile: [
          { required: true, message: '请输入联系手机：', trigger: 'blur' },
          { min: 11, max: 11, message: '请输入正确手机号', trigger: 'blur' }
        ],
        phone: [
          { required: false, message: '请输入手机号', trigger: 'blur' },
          { min: 11, max: 11, message: '请输入正确手机号', trigger: 'blur' }
        ],
        address: [
          { required: true, message: '请选择地区', trigger: 'blur' },
          { min: 1, max: 40, message: '长度在 1 到 40 个字符', trigger: 'blur' }
        ],
        deAddress: [
          { required: true, message: '请输入详细地址', trigger: 'blur' },
          { min: 1, max: 40, message: '长度在 1 到 40 个字符', trigger: 'blur' }
        ],
        otherTag: [
          { required: false, message: '请输入E-mail', trigger: 'blur' },
          { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  components: { shortcutHeader, pageFooter },
  activated () {},
  deactivated () {
    this.$destroy()
  },
  created () {
    let cartList = JSON.parse(getStore('cartList'))
    for (let val of cartList) {
      for (let item of val.orderItemList) {
        if (item.checked === 1) {
          this.goodSkuList.push(item)
        }
      }
    }
    if (!this.goodSkuList.length) {
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
          this.chooseAddress = val.id
          break
        }
      }
    })
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
    ...mapMutations([
      'setCartList'
    ]),
    // 比较指定对象属性值大小 降序
    compare (property) {
      return (a, b) => {
        let value1 = a[property]
        let value2 = b[property]
        return value2 - value1
      }
    },
    // 格式化时间 2019-01-22 17:24:08
    formatDate (date) {
      let y = date.getFullYear()
      let m = date.getMonth() + 1
      m = m < 10 ? '0' + m : m
      let d = date.getDate()
      d = d < 10 ? ('0' + d) : d
      let h = date.getHours()
      h = h < 10 ? ('0' + h) : h
      let mi = date.getMinutes()
      mi = mi < 10 ? ('0' + mi) : mi
      let s = date.getSeconds()
      s = s < 10 ? ('0' + s) : s
      return y + '-' + m + '-' + d + ' ' + h + ':' + mi + ':' + s
    },
    // 提交订单
    submitOrder () {
      // 提交的数据在购物车具体的属性参数（选中、数量）可能修改了，再次获取
      let cartList = JSON.parse(getStore('cartList'))
      console.table(cartList)
      if (!cartList.length) {
        this.$message.error('获取用户订单信息失败')
        return false
      }
      let selectList = []
      for (let val of cartList) {
        for (let item of val.orderItemList) {
          if (item.checked === 1) {
            selectList.push(item)
          }
        }
      }
      console.table(selectList)
      if (!selectList.length) {
        this.$message.error('获取用户订单信息失败')
        return false
      }
      let price = 0
      selectList.forEach(item => {
        price += Number(item.totalFee)
      })
      price = price.toFixed(2)
      let createTime = this.formatDate(new Date())
      let order = {
        payment: price, // "实付金额",
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
        receiver_area_name: this.defaultAddress.provinceId + this.defaultAddress.cityId + this.defaultAddress.townId + this.defaultAddress.address, // "收货人地区名称(省，市，县)街道",
        receiver_mobile: this.defaultAddress.mobile, // "收货人手机",
        receiver_zip_code: '', // "收货人邮编",
        receiver: this.defaultAddress.contact, // "收货人",
        expire: '', // "过期时间，定期清理",
        invoice_type: '', // "发票类型(1普通发票，2电子发票，3增值税发票)",
        source_type: 2, // "订单来源：1:app端，2：pc端，3：M端，4：微信端，5：手机qq端",
        seller_id: '' // "商家ID"
      }
      let orderInfo = this.$route.query.skuId ? api.directOrderInfo : api.getOrderInfo
      apiAxios.AxiosP({
        url: orderInfo,
        params: {userName: this.$cookies.get('user-key')},
        data: order
      }, rtn => {
        if (rtn.data.success) {
          this.$message.success('提交订单成功')
          console.log(selectList, cartList)
          selectList.forEach(val => {
            for (let item of cartList) {
              for (let index in item.orderItemList) {
                if (item.orderItemList[index].itemId === val.itemId) {
                  this.$delete(item.orderItemList, index)
                  if (!item.orderItemList.length) {
                    this.$delete(cartList, cartList.indexOf(item))
                    console.log('成功删除购物车对应数据')
                  }
                  console.log(cartList.indexOf(item))
                  break
                }
              }
            }
            console.log(cartList)
          })
          setStore('cartList', cartList)
          this.$router.push({path: '/payHome'})
        } else {
          this.$message.error('提交订单失败')
        }
      })
    },
    getForm () {
      this.isForm = true
    },
    closeForm () {
      this.isForm = false
    },
    setAddress () {
    }
  },
  watch: {
    chooseAddress (addrID) {
      for (let item of this.addressList) {
        if (item.id === addrID) {
          this.defaultAddress = item
          break
        }
      }
    }
  }
}
</script>
<style scoped>
/*@import "../../assets/css/cart/webbase.css";*/
@import "../../assets/css/cart/getOrderInfo.css";
/* 获取用户信息表格*/
  .user-info {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,0.5);
    z-index: 10;
  }
  .user-info-box {
    width:600px;
    height:555px;
    padding: 30px 80px;
    background:rgba(255,255,255,1);
    box-shadow:0px 2px 5px 0px rgba(65,64,64,0.28);
    border-radius:10px;
    font-size: 16px;
    color: #747474;
    position: relative;
  }
  .demo-ruleForm{
    width: 580px;
    margin: 0 auto;
  }
  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
    font-size: 30px;
    color: rgba(231,22,0,1);
    text-align: center;
    line-height: 40px;
    background-color: rgba(238, 238, 238, 0.7);
    cursor: pointer;
  }
  .user-inf-push {
    margin-top: 23px;
  }
  .user-inf-push a {
    width:132px;
    height:35px;
    background:rgba(255,170,0,1);
    border-radius:3px;
    line-height: 35px;
    text-align: center;
    font-size: 16;
    color: #FFFFFF;
  }
  .el-checkbox-group, .el-radio-group {
    width: 100%;
    text-align: left;
  }
</style>
