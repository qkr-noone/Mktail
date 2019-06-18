<template>
  <div id="cart">
    <shortcutHeader></shortcutHeader>
    <div class="py-container">
      <div class="allgoods" v-if="cartList.length">
        <div class="title-tip">
          <h4>全部商品<span>{{totalNum}}</span></h4>
          <div class="title-address">
            <h5>送货至：</h5>
            <div class="address">
              <span class="flow-addr">
                <a class="address-box" href="javascript:;">{{destination}}</a>
                <i class="el-icon-caret-bottom"></i>
                <!-- <span>{{destination}}</span>
                <i class="el-icon-arrow-down"></i> -->
                <div class="addr-box">
                  <ul class="pro-box">
                    <li v-for="list in addrOptions" :key="list.id" :class="{'choose': addressOne === list.province}" @click="tabAddr(list.provinceid, list.province)">{{list.province}}</li>
                  </ul>
                  <ul class="city-box" v-if="addressOne">
                    <li v-for="data in cityList" :key="data.id" :class="{'choose': addressTwoId === data.cityid}" @click="tabCity(data.city, data.cityid)">{{data.city}}</li>
                  </ul>
                </div>
              </span>
            </div>
          </div>
        </div>
        <div class="cart-main">
          <div class="cart-title cart-th">
            <div class="cart-1 select-all-top"><input type="checkbox" :checked="cartList.length && cartList.allChecked === 1" @change="allCheck($event)"/> 全部</div>
            <div class="cart-2">商品信息</div>
            <div class="cart-3">规格</div>
            <div class="cart-4">单价(元)</div>
            <div class="cart-4">数量</div>
            <div class="cart-4">小计(元)</div>
            <div class="cart-4">操作</div>
          </div>
          <div class="cart-item-list" v-for="list in cartList" :key="list.sellerId">
            <div class="cart-shop">
              <input type="checkbox" :checked="list.checked === 1" @click="shopCheck($event, list)" />
              <span class="shopname">{{list.sellerName}}</span>
            </div>
            <div class="cart-tip">
              <!-- <div>
                <ul class="cart-title cart-tip-box">
                  <li class="cart-20"></li>
                  <li class="cart-21">
                    <div class="item-msg">活动商品购满4件， 即可享受满减 > 去凑单 ></div>
                  </li>
                  <li class="cart-3"></li>
                  <li class="cart-4"></li>
                  <li class="cart-4"></li>
                  <li class="cart-4"><span class="tip-sum"></span></li>
                  <li class="cart-4"></li>
                </ul>
              </div> -->
            </div>
            <div class="cart-body">
              <div class="cart-list" v-for="item in list.orderItemList" :key="item.itemId">
                <ul class="goods-list cart-title" :class="{selectItem: item.checked === 1}">
                  <li class="cart-20">
                    <input type="checkbox" :checked="item.checked === 1" @click="goodsCheck($event, item)"/>
                  </li>
                  <li class="cart-21">
                    <div class="good-item">
                      <div class="item-img"><img :src="item.picPath" /></div>
                      <div class="item-msg" @click="toDetail(item.goodsId, item.itemId)">{{item.title}}</div>
                    </div>
                  </li>
                  <li class="cart-3"><span class="attr"><strong v-for="(tip, key, value) in JSON.parse(item.spec)" :key="value">{{key}}:{{tip}}</strong></span></li>
                  <li class="cart-4"><span class="price">￥{{item.price}}</span></li>
                  <buyNum class="cart-4"
                          :num="item.num"
                          :id="item.itemId"
                          :limit="item.limitNum"
                          :sellerId="item.sellerId"
                          :checked="item.checked"
                            @edit-num="EditNum">
                  </buyNum>
                  <li class="cart-4"><span class="sum">{{(item.price * item.num).toFixed(2)}}</span></li>
                  <li class="cart-4 add-remove">
                    <a class="remove" href="javascript:;">加入收藏</a>
                    <a class="remove" href="javascript:;" @click="cartDel(item.itemId, item.sellerId)">删除</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="cart-tool">
          <div class="select-all">
            <input type="checkbox" :checked="cartList.length && cartList.allChecked === 1" @click="allCheck($event)"/>
            <span>全选</span>
          </div>
          <div class="option">
            <a href="javascript:;" @click="cartDeList(selectList, 0)">删除选中的商品</a>
            <a href="javascript:;">加入我的收藏</a>
            <a href="javascript:;" @click="cartDeList(cartList, 1)">清除购物车</a>
          </div>
          <div class="toolbar">
            <div class="chosed">已选择<span>{{selectNum}}</span>件商品</div>
            <div class="sumprice">
              <span><em>总价（不含运费）：</em><i class="summoney">¥{{totalPrice}}</i></span>
              <span><em>已节省：</em><em>-¥{{free}}</em></span>
            </div>
            <div class="sumbtn">
              <a href="javascript:;" class="sum-btn" @click="count">去结算</a>
            </div>
          </div>
        </div>
      </div>
      <div class="liked">
        <ul class="sui-nav nav-tabs">
          <h2 class="active">
            <a href="#index" data-toggle="tab">猜你喜欢</a>
          </h2>
          <div>
            <i class="el-icon-arrow-left"></i>
            <i class="el-icon-arrow-right"></i>
          </div>
        </ul>
        <div class="tab-content">
          <ul>
            <li class="tab-pane-li" v-for="list in cartLike" :key="list.id">
              <div class="tab-pane-box">
                <router-link :to="{path: '/detail', query: {goodsId: list.goodsId}}" class="tab-pane-box-a"><img :src="list.pic" /></router-link>
                <div class="intro">
                  <h4>{{list.title}}</h4>
                </div>
                <div class="money">
                  <span>￥{{list.price}}</span>
                </div>
                <div class="incar">
                  <a><img src="static/img/mk_cart_addcart.png"><span class="cartxt">加入购物车</span></a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <regFooter></regFooter>
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
import shortcutHeader from '@/components/shortcutHeader'
import regFooter from '@/components/regFooter'
import buyNum from '@/components/buyNum'
import { setStore } from '@/common/utils'
export default {
  data () {
    return {
      selectList: [], // 选中商品列表
      free: 0,
      cartLike: '',
      destination: '请选择',
      addressOne: '',
      addressTwo: '',
      addressTwoId: '',
      addrOptions: [],
      cityList: []
    }
  },
  components: { shortcutHeader, buyNum, regFooter },
  computed: {
    ...mapState({
      cartList: state => state.cart.cartList
    }),
    // 商品总数量
    totalNum () {
      let num = 0
      this.cartList && this.cartList.forEach(item => {
        item.orderItemList.forEach(list => {
          num += Number(list.num)
        })
      })
      return num
    },
    // 选中商品总价格
    totalPrice () {
      let price = 0
      this.selectList && this.selectList.forEach(item => {
        // 强制类型转换，减法时 (price - 0) + ((item.price * item.num) - 0)
        price = price + (item.price * item.num)
      })
      return price.toFixed(2)
    },
    // 选中商品总数量
    selectNum () {
      let selectNum = 0
      this.selectList && this.selectList.forEach(item => {
        selectNum += Number(item.num)
      })
      return selectNum
    }
  },
  mounted () {
    // this.INIT_BUYCART()
    this.API.cartList({username: this.$cookies.get('user-key')}).then(rtn => {
      if (rtn.success === false) {
        this.CART_LIST(rtn.data)
        this.$message.info('购物车为空')
        setStore('cartList', this.cartList)
        return false
      }
      this.CART_LIST(rtn)
      // 附加店铺选择属性，用于判断全部商品店铺选择状态
      this.$set(this.cartList, 'allChecked', 0)
      for (let val of this.cartList) {
        // 附加店铺选择属性，用于判断店铺选择状态
        this.$set(val, 'checked', 0)
        for (let item of val.orderItemList) {
          if (item.checked === 1) this.selectList.push(item)
        }
      }
      this.isShopsChecked(this.cartList)
      this.isAllShops(this.cartList)
      setStore('cartList', this.cartList)
    })
    this.API.cartLike({ categoryId: 21 }).then(res => {
      this.cartLike = res.contentList
    })
    this.API.allProvince().then(res => {
      this.addrOptions = res
    })
  },
  methods: {
    ...mapMutations(['CART_LIST']),
    count () {
      if (this.selectList.length) {
        this.$router.push({path: '/getOrderInfo', query: {list: this.selectList}})
      } else {
        this.$router.go(0)
        this.$message.warning('请核对信息哦')
      }
      return false
    },
    // 商品选择
    goodsCheck (event, item) {
      if (event.currentTarget.checked) {
        this._cartEditChecked(item.itemId, item.num, item.sellerId, 1)
        this.selectList.push(item)
      } else {
        this._cartEditChecked(item.itemId, item.num, item.sellerId, 0)
        this.$delete(this.selectList, this.selectList.indexOf(item))
      }
    },
    // 店铺选择
    shopCheck (event, shopsList) {
      if (event.currentTarget.checked) {
        shopsList.orderItemList.forEach(item => {
          if (!item.checked) {
            this._cartEditChecked(item.itemId, item.num, item.sellerId, 1)
            this.selectList.push(item)
          }
        })
      } else {
        shopsList.orderItemList.forEach(item => {
          if (item.checked) {
            this._cartEditChecked(item.itemId, item.num, item.sellerId, 0)
            this.$delete(this.selectList, this.selectList.indexOf(item))
          }
        })
      }
    },
    // 全选、反选
    allCheck (event) {
      if (event.currentTarget.checked) {
        this.cartList.forEach(data => {
          data.orderItemList.forEach(item => {
            if (!item.checked) {
              this._cartEditChecked(item.itemId, item.num, item.sellerId, 1)
              this.selectList.push(item)
            }
          })
        })
      } else {
        this.cartList.forEach(data => {
          data.orderItemList.forEach(item => {
            if (item.checked) {
              this._cartEditChecked(item.itemId, item.num, item.sellerId, 0)
              this.$delete(this.selectList, this.selectList.indexOf(item))
            }
          })
        })
      }
    },
    // 修改数量
    EditNum (productNum, productSkuId, sellerId, checked) {
      this._cartEditNum(productSkuId, productNum, sellerId, checked)
    },
    // 删除单条购物车数据
    cartDel (productSkuId, sellerId) {
      this.$confirm('确定删除购物车商品吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this._cartDel(productSkuId, sellerId)
      }).catch(() => {
      })
    },
    // 删除多条、选中的购车数据 index: 0/1  删除选中/清空
    cartDeList (list, index) {
      this.$confirm('确定删除购物车商品吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        if (index) {
          let tem = []
          list.forEach(tip => {
            tip.orderItemList.forEach(point => {
              tem.push(point)
            })
          })
          list = tem
        } else {
          if (!list.length) {
            this.$message.info('未选中商品')
            return false
          }
        }
        let series = []
        list.forEach(data => {
          series.push({skuId: data.itemId, sellerId: data.sellerId})
        })
        this._cartAllDel(series)
      }).catch(() => {})
    },
    // 修改数量
    _cartEditNum (productSkuId, productNum, sellerId, checked) {
      this.API.cartEdit({userName: this.$cookies.get('user-key'), itemId: productSkuId, num: productNum, sellerId: sellerId, checked: checked}).then(res => {
        if (res.success === false) return false
        this.EDIT_CART({productSkuId, productNum, checked})
      })
    },
    // 修改选中状态
    _cartEditChecked (productSkuId, productNum, sellerId, checked) {
      this.API.cartEdit({userName: this.$cookies.get('user-key'), itemId: productSkuId, num: productNum, sellerId: sellerId, checked: checked}).then(res => {
        if (res.success === false) return false
        this.EDIT_CART({productSkuId, checked})
      })
    },
    // 删除购物车
    _cartDel (productSkuId, sellerId) {
      this.API.cartDelete({userName: this.$cookies.get('user-key'), itemId: productSkuId, sellerId: sellerId}).then(res => {
        if (res.success === false) return false
        this.EDIT_CART({productSkuId})
        this.$message.info('删除成功！')
      })
    },
    // 清除购物车
    _cartAllDel (skIdList) {
      this.API.cartAllDelete(skIdList, this.$cookies.get('user-key')).then(res => {
        if (res.success === false) return false
        skIdList.forEach(elem => {
          let productSkuId = elem.skuId
          this.EDIT_CART({productSkuId})
        })
        this.$message.success('删除成功！')
      })
    },
    // 数据操作映射到页面
    EDIT_CART ({productSkuId, productNum, checked}) {
      let cart = this.cartList
      // 修改数量
      if (productNum) {
        let isFind = false
        // 多级联动
        for (let item of cart) {
          for (let list of item.orderItemList) {
            if (list.itemId === productSkuId) {
              this.$set(list, 'num', productNum)
              this.$set(list, 'totalFee', (productNum * list.price).toFixed(2))
              isFind = true
              break
            }
          }
          if (isFind) break
        }
      } else if (checked === 1 || checked === 0) { // 修改选中状态
        for (let item of cart) {
          for (let list of item.orderItemList) {
            if (list.itemId === productSkuId) {
              checked === 1 ? this.$set(list, 'checked', 1) : this.$set(list, 'checked', 0)
            }
          }
        }
        this.isShopsChecked(cart)
        this.isAllShops(cart)
        // this.CART_LIST(this.cartList)
      } else { // 根据sku数据删除购物车
        for (let item of cart) {
          for (let index in item.orderItemList) {
            if (item.orderItemList[index].itemId === productSkuId) {
              // 同时删除勾选的列表，如果有的话
              let tip = this.selectList.indexOf(item.orderItemList[index])
              this.$delete(this.selectList, tip)
              this.$delete(item.orderItemList, index)
              // item.orderItemList.splice(index, 1) // 这种也可以
              if (!item.orderItemList.length) {
                this.$delete(cart, cart.indexOf(item))
              }
              break
            }
          }
        }
      }
      this.CART_LIST(cart)
      // 存入localStorage
      setStore('cartList', cart)
    },
    // 遍历店铺，判断店铺选中状态
    isShopsChecked (cart) {
      cart.forEach(tip => {
        let isAll = tip.orderItemList.every(data => {
          return (data.checked === 1)
        })
        isAll ? tip.checked = 1 : tip.checked = 0
      })
    },
    // 是否选择全部商品
    isAllShops (cart) {
      let isAllShops = cart.every(data => {
        return (data.checked === 1)
      })
      isAllShops ? cart.allChecked = 1 : cart.allChecked = 0
    },
    toDetail (goodsId, skuId) {
      this.$router.push({path: '/detail', query: {goodsId: goodsId, skuId: skuId}})
    },
    // 切换省，显示市列表
    tabAddr (provinceid, province) {
      // this.addressOne = ''
      this.addressOne = province
      this.API.allCity({proviceId: provinceid}).then(res => {
        this.cityList = res
      })
    },
    // 切换市
    tabCity (city, cityid) {
      this.addressTwo = city
      this.addressTwoId = cityid
      this.destination = this.addressOne + this.addressTwo
    }
  }
}

</script>
<style scoped>
@import "../../assets/css/cart/cart.css"
</style>
