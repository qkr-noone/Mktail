<template>
  <div id="getOrderInfo">
    <shortcutHeader></shortcutHeader>
    <div class="sum-nav" id="sumNav">
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
            <ul class="add-con-ul" :class="over? 'add-show': ''">
              <li v-for="(list, index) in addressList" :key="list.id" v-if="index<3 || over">
                <div class="add-box" @click="chooseAddress = list.id" :class="{'select-addr': chooseAddress === list.id}">
                  <div class="add-box-1">
                    <h5><span>{{list.contact}}</span><span class="add-posi">({{list.province}}{{list.city}})</span></h5>
                    <div class="add-tip">
                      <span class="tip1" v-if="list.isDefault === '1'">默认</span><span class="tip2" v-if="list.alias">{{list.alias}}</span>
                    </div>
                  </div>
                  <div class="add-box-2">
                    <span>{{list.province}}{{list.city}}{{list.area}}{{list.address}}{{list.mobile}}</span>
                  </div>
                  <div class="add-box-3"><span class="set" v-show="chooseAddress === list.id" @click="setAddress(list)">修改</span></div>
                </div>
              </li>
              <li>
                <div class="add-box">
                  <div class="add-box-4">
                    <i class="el-icon-plus" @click="getForm()"></i>
                    <p>添加地址</p>
                  </div>
                </div>
              </li>
            </ul>
            <div class="add-other">
              <a class="add-more" v-if="addressList.length > 3 " @click="over=!over">
                <p v-if="over">收起更多收货地址</p>
                <p v-else>显示更多收货地址</p>
                <i class="el-icon-arrow-up" v-if="over"></i>
                <i class="el-icon-arrow-down" v-else></i>
              </a>
              <router-link :to="{path: '/userSet/address'}"  target="_blank" class="add-more">
                <p>管理收货地址</p>
                <i class="el-icon-arrow-right"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="add pay">
        <div class="add-title">
          <h2>支付方式</h2>
        </div>
        <div class="pay-con">
          <ul class="pay-con-ul">
            <li class="pay-con-li" :class="{'select-pay': choosePay ==='onlinePay'}" @click="choosePay = 'onlinePay'">
              <div class="pay-con-box">在线支付</div>
              <div class="select-tip" v-show="choosePay ==='onlinePay'"><span><i class="el-icon-check"></i></span></div>
            </li>
            <!-- <li class="pay-con-li" :class="{'select-pay': choosePay ==='offlinePay'}" @click="choosePay = 'offlinePay'">
              <div class="pay-con-box">货到付款</div>
              <div class="select-tip" v-show="choosePay ==='offlinePay'"><span><i class="el-icon-check"></i></span></div>
            </li> -->
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
            <li class="goods-li" v-for="data in orderList" :key="data.sellerId">
              <div class="goods-box">
                <div class="goods-head">
                  <div class="goods-h1"><h4>{{data.sellerName}}</h4><img src="static/img/mk_addorder-service.png"></div>
                  <div class="goods-h2">服务信息</div>
                  <div class="goods-h3">单价</div>
                  <div class="goods-h4">数量</div>
                  <div class="goods-h5">小计</div>
                </div>
                <div class="goods-con">
                  <ul class="goods-h1">
                    <li class="go-detail" v-for="list in data.orderItemList" :key="list.itemId">
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
                    <li class="go-price Center" v-for="list in data.orderItemList" :key="list.itemId">¥ {{list.price}}</li>
                  </div>
                  <div class="goods-h4 Top">
                    <li class="go-price Center" v-for="list in data.orderItemList" :key="list.itemId">{{list.num}}</li>
                  </div>
                  <div class="goods-h5 Top last">
                    <li class="go-price Center" v-for="list in data.orderItemList" :key="list.itemId">¥{{list.totalFee}}</li>
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
            <span>{{defaultAddress.province}}{{defaultAddress.city}}{{defaultAddress.area}}{{defaultAddress.address}}</span>
          </div>
          <div>
            <span class="sum-add-tip">收货人：</span>
            <span>{{defaultAddress.contact}}</span>
            <span>{{defaultAddress.mobile}}</span>
          </div>
        </div>
        <div class="sum-order has_pointer" @click="submitOrder">提交订单</div>
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
          <el-form-item label="所在地区：" prop="address"  class="select flow-addr">
              <i class="el-icon-arrow-down addr-down"></i>
              <div class="addr-box">
                <ul class="pro-box">
                  <li v-for="list in addrOptions" :key="list.id" :class="{'choose': addressOneId === list.provinceid}" @click="tabAddr(list.provinceid, list.province)">{{list.province}}</li>
                </ul>
                <ul class="city-box" v-if="addressOneId">
                  <li v-for="data in cityList" :key="data.id" :class="{'choose': addressTwoId === data.cityid}" @click="tabCity(data.city, data.cityid)">{{data.city}}</li>
                </ul>
                <ul class="county-box" v-if="addressTwoId">
                  <li v-for="data in countyList" :key="data.id" :class="{'choose': addressThreeId === data.areaid}" @click="tabCounty(data.area, data.areaid)">{{data.area}}</li>
                </ul>
              </div>
            <!-- </span> -->
            <el-input v-model="ruleForm.address" placeholder="请选择省 请选择市 请选择区"></el-input>
          </el-form-item>
          <el-form-item label="详细地址:" prop="deAddress">
            <el-input v-model="ruleForm.deAddress" placeholder="乡镇、街道、小区、楼牌号等，无须重复填写省市区"></el-input>
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
          <el-form-item label="" prop="isDefault">
            <el-checkbox-group v-model="ruleForm.isDefault">
              <el-checkbox label="设为默认收货地址 设置后我们将在您购物时自动选中该收货地址" name="isDefault" class="isDefault"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-form>
        <div class="user-inf-push">
          <a href="javascript:;" @click="submitForm('ruleForm')">保存并使用</a>
        </div>
        <div class="close" @click="getForm()">
          <i class="el-icon-close"></i>
        </div>
      </div>
    </div>
    <pageFooter></pageFooter>
  </div>
</template>
<script>
import shortcutHeader from '@/components/shortcutHeader'
import pageFooter from '@/components/pageFooter'
import { getStore, setStore } from '@/common/utils'
export default {
  data () {
    return {
      addressList: '',
      goodSkuList: [],
      orderList: [],
      totalNum: 0,
      totalPrice: 0,
      submitPrice: '',
      defaultAddress: '',
      chooseAddress: '',
      choosePay: 'onlinePay',
      sellerId: 0,
      formDesc: '',
      isForm: false,
      ruleForm: {
        username: '',
        mobile: '',
        phone: '',
        address: '',
        deAddress: '',
        tag: '',
        otherTag: '',
        isDefault: false
      },
      rules: {
        username: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          { min: 1, max: 40, message: '长度在 1 到 40 个字符', trigger: 'blur' }
        ],
        mobile: [
          { required: true, message: '请输入联系手机：', trigger: 'blur' },
          { min: 11, max: 11, message: '请输入正确手机号', trigger: 'blur' }
        ],
        phone: [
          { required: false, message: '请输入备用手机号', trigger: 'blur' },
          { min: 11, max: 11, message: '请输入正确手机号', trigger: 'blur' }
        ],
        address: [
          { required: true, message: '请选择地区', trigger: 'blur' },
          { min: 1, max: 60, message: '长度在 1 到 60 个字符', trigger: 'blur' }
        ],
        deAddress: [
          { required: true, message: '请输入详细地址', trigger: 'blur' },
          { min: 1, max: 90, message: '长度在 1 到 90 个字符', trigger: 'blur' }
        ],
        otherTag: [
          { required: false, message: '请输入标签', trigger: 'blur' },
          { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
        ]
      },
      skuId: '',
      random: '',
      addrOptions: [],
      addressOneId: '',
      addressTwoId: '',
      addressThreeId: '',
      cityList: [],
      countyList: [],
      over: false,
      isUpdate: 0,
      tem: []
    }
  },
  components: { shortcutHeader, pageFooter },
  created () {
    this.skuId = this.$route.query.skuId
    this.random = this.$route.query.random
    // Q. 店铺名字 （需在detail 取到并且传入）
    let sellerName = this.$route.query.sellerName || ''
    if (this.skuId) { // 从立即购买进入提交
      this.goodSkuList = JSON.parse(getStore('selectList' + this.random))
      console.log(getStore('selectList' + this.random), this.goodSkuList, '000')
      let objList = {
        orderItemList: [],
        sellerId: this.goodSkuList[0].sellerId,
        sellerName: sellerName
      }
      objList.orderItemList.push(this.goodSkuList[0])
      this.orderList.push(objList)
      console.log(this.orderList, this.goodSkuList, 99)
    } else { // 从购物车进入提交
      let cartList = JSON.parse(getStore('cartList'))
      for (let val of cartList) {
        for (let item of val.orderItemList) {
          if (item.checked === 1) {
            let obj = {
              orderItemList: [],
              sellerId: val.sellerId,
              sellerName: val.sellerName
            }
            obj.orderItemList.push(item)
            let isHas = this.orderList.some(data => {
              return (data.sellerId === obj.sellerId)
            })
            if (isHas) {
              this.orderList.every(tip => {
                if (tip.sellerId === obj.sellerId) {
                  tip.orderItemList.push(item)
                  return false
                }
                return true
              })
            } else {
              this.orderList.push(obj)
            }
            this.goodSkuList.push(item)
          }
        }
      }
    }
    if (!this.goodSkuList.length) {
      this.$message.warning('信息有误')
      this.$router.go(-1)
    }
  },
  mounted () {
    this.requstAdd()
    this.goodSkuList.forEach(item => {
      this.totalNum += Number(item.num)
      this.totalPrice += Number(item.totalFee)
    })
    this.totalPrice = (this.totalPrice).toFixed(2)
    this.submitPrice = this.totalPrice
    this.API.allProvince().then(res => {
      this.addrOptions = res
    })
  },
  methods: {
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
      let price = 0
      let selectList = []
      let cartList = []
      if (this.skuId) {
        // 从立即购买 过来
        this.$message.error('获取用户订单信息失败')
        this.goodSkuList.forEach(item => {
          price += Number(item.totalFee)
        })
        price = price.toFixed(2)
      } else {
        // 提交的数据在购物车具体的属性参数（选中、数量）可能修改了，再次获取
        cartList = JSON.parse(getStore('cartList'))
        if (!cartList.length) {
          this.$message.error('获取用户订单信息失败')
          return false
        }
        for (let val of cartList) {
          for (let item of val.orderItemList) {
            if (item.checked === 1) {
              selectList.push(item)
            }
          }
        }
        if (!selectList.length) {
          this.$message.error('获取用户订单信息失败')
          return false
        }
        selectList.forEach(item => {
          price += Number(item.totalFee)
        })
        price = price.toFixed(2)
      }
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
        receiver_area_name: this.defaultAddress.province + this.defaultAddress.city + this.defaultAddress.alias + this.defaultAddress.address, // "收货人地区名称(省，市，县)街道",
        receiver_mobile: this.defaultAddress.mobile, // "收货人手机",
        receiver_zip_code: '', // "收货人邮编",
        receiver: this.defaultAddress.contact, // "收货人",
        expire: '', // "过期时间，定期清理",
        invoice_type: '', // "发票类型(1普通发票，2电子发票，3增值税发票)",
        source_type: 2, // "订单来源：1:app端，2：pc端，3：M端，4：微信端，5：手机qq端",
        seller_id: '' // "商家ID"
      }
      let orderInfo = this.skuId ? 'directOrderInfo' : 'getOrderInfo'
      console.log(orderInfo, 10)
      this.API[orderInfo](order, this.$cookies.get('user-key')).then(rtn => {
        if (rtn.success === false) {
          this.$message.error('提交订单失败')
          return false
        }
        this.$message.success('提交订单成功')
        if (this.skuId) {} else {
          selectList.forEach(val => {
            for (let item of cartList) {
              for (let index in item.orderItemList) {
                if (item.orderItemList[index].itemId === val.itemId) {
                  this.$delete(item.orderItemList, index)
                  if (!item.orderItemList.length) {
                    this.$delete(cartList, cartList.indexOf(item))
                    console.log('成功删除购物车对应数据')
                  }
                  break
                }
              }
            }
          })
          setStore('cartList', cartList)
        }
        let temOutTradeNo = rtn
        this.$router.push({path: '/payHome', query: {outTradeNo: temOutTradeNo}})
      })
    },
    getForm () {
      this.isForm = !this.isForm
    },
    setAddress (item) { // Q. 省市区ID 查询  显示  初始化
      this.isForm = true
      this.addrInit()
      this.$set(this.tem, 0, {addr: item.province, id: item.provinceId})
      this.$set(this.tem, 1, {addr: item.city, id: item.cityId})
      this.$set(this.tem, 2, {addr: item.area, id: item.townId})
      this.ruleForm.address = ''
      this.tem.forEach(ele => {
        this.ruleForm.address += ele.addr
      })
      this.ruleForm.mobile = item.mobile
      this.ruleForm.deAddress = item.address
      this.ruleForm.username = item.contact
      item.isDefault === '1' ? this.ruleForm.isDefault = true : this.ruleForm.isDefault = false
      this.ruleForm.phone = item.spareMobile
      this.ruleForm.otherTag = item.alias
      this.isUpdate = item.id
    },
    // 新增地址 修改地址
    submitForm (formName) {
      if (this.tem.length < 3) {
        this.$notify.warning({
          title: '提示',
          message: '所在地区信息选择不全'
        })
        return
      }
      this.$refs[formName].validate(valid => {
        if (valid) {
          let address = {
            userId: this.$cookies.get('user-key'),
            provinceId: this.tem[0].id,
            cityId: this.tem[1].id,
            townId: this.tem[2].id,
            mobile: this.ruleForm.mobile,
            address: this.ruleForm.deAddress,
            contact: this.ruleForm.username,
            isDefault: this.ruleForm.isDefault ? '1' : '0',
            spareMobile: this.ruleForm.phone,
            alias: this.ruleForm.otherTag || this.ruleForm.tag
          }
          let addApi = this.isUpdate ? 'addressUpdate' : 'addressAdd'
          if (!this.isUpdate) {
            // 判断地址是否已满20个
            if (this.addressList.length >= 20) {
              this.$notify.warning({
                title: '提示',
                message: '地址数量已满20条，请在地址管理删除，再重新添加哦'
              })
              return
            }
            Object.assign(address, {createDate: this.formatDate(new Date())})
          }
          address = this.isUpdate ? Object.assign(address, {id: this.isUpdate}) : address
          console.log(address, this.addressOneId, 0)
          this.API[addApi](address).then(res => {
            if (res.success === false) {
              this.$notify.error({
                title: '错误',
                message: '设置地址失败'
              })
              return false
            }
            this.$notify.success({
              title: '成功',
              message: '设置地址成功'
            })
            this.API.addressListByUser({userId: this.$cookies.get('user-key')}).then(rtn => {
              this.addressList = rtn
            })
            this.chooseAddress = this.isUpdate ? this.isUpdate : res
            this.isForm = false
          })
        } else {
          this.$notify.error({
            title: '错误',
            message: '输入信息有误'
          })
          return false
        }
      })
    },
    tabAddr (provinceid, province) {
      this.tem = []
      this.$set(this.tem, 0, {addr: province, id: provinceid})
      this.addressTwoId = ''
      this.addressThreeId = ''
      this.addressOneId = provinceid
      this.API.allCity({proviceId: provinceid}).then(res => {
        this.cityList = res
      })
      this.ruleForm.address = ''
      this.ruleForm.address = this.tem[0].addr
      this.tem.forEach((list, index) => {
        if (index > 0) this.$delete(this.tem, index)
      })
    },
    tabCity (city, cityid) {
      this.$set(this.tem, 1, {addr: city, id: cityid})
      this.addressTwoId = cityid
      this.addressThreeId = ''
      this.API.allAreas({cityId: cityid}).then(res => {
        this.countyList = res
      })
      this.ruleForm.address = ''
      this.tem.forEach((list, index) => {
        if (index > 1) this.$delete(this.tem, index)
        else this.ruleForm.address += list.addr
      })
    },
    tabCounty (area, areaid) {
      this.$set(this.tem, 2, {addr: area, id: areaid})
      this.addressThreeId = areaid
      this.ruleForm.address = ''
      this.tem.forEach(ele => {
        this.ruleForm.address += ele.addr
      })
    },
    requstAdd () {
      this.API.addressListByUser({userId: this.$cookies.get('user-key')}).then(rtn => {
        if (rtn === '请求成功，无返回值') return false
        this.addressList = rtn
        for (let val of this.addressList) {
          if (val.isDefault === '1') {
            this.defaultAddress = val
            this.chooseAddress = val.id
            break
          }
        }
      })
    },
    // 初始化
    addrInit () {
      this.addressOneId = ''
      this.addressTwoId = ''
      this.addressThreeId = ''
      this.ruleForm.address = ''
      this.ruleForm.mobile = ''
      this.ruleForm.deAddress = ''
      this.ruleForm.username = ''
      this.ruleForm.isDefault = false
      this.ruleForm.phone = ''
      this.ruleForm.tag = ''
      this.ruleForm.otherTag = ''
      this.isUpdate = 0
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
    },
    isForm (newS) {
      // 初始化
      if (!newS) {
        this.addrInit()
      }
    }
  }
}
</script>
<style scoped>
@import "../../assets/css/cart/getOrderInfo.css";
  .has_pointer {
    cursor: pointer;
  }
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
  .select-con{
    line-height: 27px;
    font-size: 12px;
  }
  .flow-addr {
    position: relative;
  }
  .flow-addr ul>li.choose {
    color: blue;
  }
  .addr-down {
    position: absolute;
    right: 15px;
    top: 12px;
    color: red;
    z-index: 20;
    font-size: 20px;
    line-height: 20px;
  }
  .addr-box {
    height: 0;
    overflow: hidden;
    position: absolute;
    background-color: #fff;
    z-index: 10;
    top: 40px;
    left: 0;
  }
  .addr-box .pro-box, .city-box, .county-box {
    min-width: 126px;
    height: 200px;
    font-size: 12px;
    border: 1px solid #ddd;
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
  }
  .flow-addr .addr-box ul.pro-box li, .flow-addr .addr-box ul.city-box li, .flow-addr .addr-box ul.county-box li {
    text-align: left;
    cursor: pointer;
    line-height: 28px;
    height: 28px;
    padding: 0 10px;
  }
  .flow-addr .el-form-item__content:hover .addr-box{
    height: auto;
    display: flex;
  }
</style>
