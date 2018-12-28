<template>
  <div id="cart">
    <shortcutHeader></shortcutHeader>
    <div class="py-container">
      <div class="allgoods" v-if="cartList.length">
        <h4>全部商品<span>{{totalNum}}</span></h4>
        <div class="cart-main">
          <div class="yui3-g cart-th">
            <div class="yui3-u-1-4"><input type="checkbox" :checked="cartList.length && cartList.allChecked === 1" @click="allCheck($event)"/> 全部</div>
            <div class="yui3-u-1-4">商品</div>
            <div class="yui3-u-1-8">单价（元）</div>
            <div class="yui3-u-1-8">数量</div>
            <div class="yui3-u-1-8">小计（元）</div>
            <div class="yui3-u-1-8">操作</div>
          </div>
          <div class="cart-item-list" v-for="list in cartList" :key="list.sellerId">
            <div class="cart-shop">
              <input type="checkbox" :checked="list.checked === 1" @click="shopCheck($event, list)" />
              <span class="shopname">{{list.sellerName}}</span>
            </div>
            <div class="cart-body">
              <div class="cart-list" v-for="item in list.orderItemList" :key="item.itemId">
                <ul class="goods-list yui3-g">
                  <li class="yui3-u-1-24">
                    <input type="checkbox" :checked="item.checked === 1" @click="goodsCheck($event, item)"/>
                  </li>
                  <li class="yui3-u-11-24">
                    <div class="good-item">
                      <div class="item-img"><img :src="item.picPath" /></div>
                      <div class="item-msg">{{item.title}}</div>
                    </div>
                  </li>
                  <li class="yui3-u-1-8"><span class="price">￥{{item.price}}</span></li>
                  <buyNum class="yui3-u-1-8"
                          :num="item.num"
                          :id="item.itemId"
                          :limit="item.limitNum"
                          :sellerId="item.sellerId"
                          style="height: 140px;
                            display: flex;
                            align-items: center;
                            justify-content: center;"
                            @edit-num="EditNum">
                  </buyNum>
                  <li class="yui3-u-1-8"><span class="sum">{{(item.price * item.num).toFixed(2)}}</span></li>
                  <li class="yui3-u-1-8">
                    <a @click="cartDel(item.itemId, item.sellerId)">删除</a><br />
                    <a>移到我的关注</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="cart-tool">
          <div class="select-all">
            <input type="checkbox" name="" id="" value="" />
            <span>全选</span>
          </div>
          <div class="option">
            <a href="#none">删除选中的商品</a>
            <a href="#none">移到我的关注</a>
            <a href="#none">清除下柜商品</a>
          </div>
          <div class="toolbar">
            <div class="chosed">已选择<span>{{selectNum}}</span>件商品</div>
            <div class="sumprice">
              <span><em>总价（不含运费） ：</em><i class="summoney">¥{{totalPrice}}</i></span>
              <span><em>已节省：</em><i>-¥{{free}}</i></span>
            </div>
            <div class="sumbtn">
              <a class="sum-btn" @click="count">结算</a>
            </div>
          </div>
        </div>
        <div class="clearfix"></div>
        <div class="deled">
          <span>已删除商品，您可以重新购买或加关注：</span>
          <div class="cart-list del">
            <ul class="goods-list yui3-g">
              <li class="yui3-u-1-2">
                <div class="good-item">
                  <div class="item-msg">Apple Macbook Air 13.3英寸笔记本电脑 银色（Corei5）处理器/8GB内存</div>
                </div>
              </li>
              <li class="yui3-u-1-6"><span class="price">8848.00</span></li>
              <li class="yui3-u-1-6">
                <span class="number">1</span>
              </li>
              <li class="yui3-u-1-8">
                <a href="#none">重新购买</a>
                <a href="#none">移到我的关注</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
        <div class="liked">
          <ul class="sui-nav nav-tabs">
            <li class="active">
              <a href="#index" data-toggle="tab">猜你喜欢</a>
            </li>
            <li>
              <a href="#profile" data-toggle="tab">特惠换购</a>
            </li>
          </ul>
          <div class="clearfix"></div>
          <div class="tab-content">
            <div id="index" class="tab-pane active">
              <div id="myCarousel" data-ride="carousel" data-interval="4000" class="sui-carousel slide">
                <div class="carousel-inner">
                  <div class="active item">
                    <ul>
                      <li>
                        <img src="../../../static/img/part03.png" />
                        <div class="intro">
                          <i>Apple苹果iPhone 6s (A1699)</i>
                        </div>
                        <div class="money">
                          <span>$29.00</span>
                        </div>
                        <div class="incar">
                          <a href="#" class="sui-btn btn-bordered btn-xlarge btn-default"><i class="car"></i><span class="cartxt">加入购物车</span></a>
                        </div>
                      </li>
                      <li>
                        <img src="../../../static/img/part03.png" />
                        <div class="intro">
                          <i>Apple苹果iPhone 6s (A1699)</i>
                        </div>
                        <div class="money">
                          <span>$29.00</span>
                        </div>
                        <div class="incar">
                          <a href="#" class="sui-btn btn-bordered btn-xlarge btn-default"><i class="car"></i><span class="cartxt">加入购物车</span></a>
                        </div>
                      </li>
                      <li>
                        <img src="../../../static/img/part03.png" />
                        <div class="intro">
                          <i>Apple苹果iPhone 6s (A1699)</i>
                        </div>
                        <div class="money">
                          <span>$29.00</span>
                        </div>
                        <div class="incar">
                          <a href="#" class="sui-btn btn-bordered btn-xlarge btn-default"><i class="car"></i><span class="cartxt">  加入购物车</span></a>
                        </div>
                      </li>
                      <li>
                        <img src="../../../static/img/part03.png" />
                        <div class="intro">
                          <i>Apple苹果iPhone 6s (A1699)</i>
                        </div>
                        <div class="money">
                          <span>$29.00</span>
                        </div>
                        <div class="incar">
                          <a href="#" class="sui-btn btn-bordered btn-xlarge btn-default"><i class="car"></i><span class="cartxt">加入购物车</span></a>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="item">
                    <ul>
                      <li>
                        <img src="../../../static/img/part03.png" />
                        <div class="intro">
                          <i>Apple苹果iPhone 6s (A1699)</i>
                        </div>
                        <div class="money">
                          <span>$29.00</span>
                        </div>
                        <div class="incar">
                          <a href="#" class="sui-btn btn-bordered btn-xlarge btn-default"><i class="car"></i><span class="cartxt">  加入购物车</span></a>
                        </div>
                      </li>
                      <li>
                        <img src="../../../static/img/part03.png" />
                        <div class="intro">
                          <i>Apple苹果iPhone 6s (A1699)</i>
                        </div>
                        <div class="money">
                          <span>$29.00</span>
                        </div>
                        <div class="incar">
                          <a href="#" class="sui-btn btn-bordered btn-xlarge btn-default"><i class="car"></i><span class="cartxt">加入购物车</span></a>
                        </div>
                      </li>
                      <li>
                        <img src="../../../static/img/part03.png" />
                        <div class="intro">
                          <i>Apple苹果iPhone 6s (A1699)</i>
                        </div>
                        <div class="money">
                          <span>$29.00</span>
                        </div>
                        <div class="incar">
                          <a href="#" class="sui-btn btn-bordered btn-xlarge btn-default"><i class="car"></i><span class="cartxt">加入购物车</span></a>
                        </div>
                      </li>
                      <li>
                        <img src="../../../static/img/part03.png" />
                        <div class="intro">
                          <i>Apple苹果iPhone 6s (A1699)</i>
                        </div>
                        <div class="money">
                          <span>$29.00</span>
                        </div>
                        <div class="incar">
                          <a href="#" class="sui-btn btn-bordered btn-xlarge btn-default"><i class="car"></i><span class="cartxt">加入购物车</span></a>
                        </div>
                      </li>
                    </ul>
                    </div>
                </div>
                <a href="" data-slide="prev" class="carousel-control left">‹</a>
                <a href="" data-slide="next" class="carousel-control right">›</a>
              </div>
            </div>
            <div id="profile" class="tab-pane">
              <p>特惠选购</p>
            </div>
          </div>
        </div>
    </div>
    <pageFooter></pageFooter>
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
import shortcutHeader from '../../components/shortcutHeader'
import pageFooter from '../../components/pageFooter'
import buyNum from '../../components/buyNum'
import { apiAxios, getCookie, setStore } from '../../common/utils'
import { api } from '../../common/api'
export default {
  data () {
    return {
      selectList: [], // 选中商品列表
      free: 0
    }
  },
  components: { shortcutHeader, pageFooter, buyNum },
  computed: {
    ...mapState(
      ['cartList']
    ),
    totalNum () { // 商品总数量
      let num = 0
      this.cartList && this.cartList.forEach(item => {
        item.orderItemList.forEach(list => {
          num += Number(list.num)
        })
      })
      return num
    },
    totalPrice () { // 选中商品总价格
      let price = 0
      this.selectList && this.selectList.forEach(item => {
        price += Number((item.price * item.num).toFixed(2))
      })
      return price
    },
    selectNum () { // 选中商品总数量
      let selectNum = 0
      this.selectList && this.selectList.forEach(item => {
        selectNum += Number(item.num)
      })
      return selectNum
    }
  },
  activated () {},
  deactivated () {
    this.$destroy()
  },
  mounted () {
    // this.INIT_BUYCART()
    apiAxios.AxiosG({
      url: api.cartList,
      params: {username: getCookie('user-key')}
    }, rtn => {
      if (rtn.data.success) {
        this.setCartList(rtn.data.data)
        // 附加店铺选择属性，用于判断全部商品店铺选择状态
        this.$set(this.cartList, 'allChecked', 0)
        for (let val of this.cartList) {
          // 附加店铺选择属性，用于判断店铺选择状态
          this.$set(val, 'checked', 0)
          for (let item of val.orderItemList) {
            if (item.checked === 1) {
              this.selectList.push(item)
            }
          }
        }
        this.isShopsChecked(this.cartList)
        this.isAllShops(this.cartList)
        // this.setCartList(this.cartList)
      } else {
        this.$message.info('购物车为空')
      }
    })
  },
  methods: {
    ...mapMutations([
      'setCartList'
    ]),
    count () {
      if (this.selectList.length) {
        setStore('selectList', this.selectList)
        this.$router.push({path: '/getOrderInfo', query: {list: this.selectList}})
      }
      return false
    },
    goodsCheck (event, item) { // 商品选择
      if (event.currentTarget.checked) {
        this._cartEditChecked(item.itemId, item.num, item.sellerId, 1)
        this.selectList.push(item)
      } else {
        this._cartEditChecked(item.itemId, item.num, item.sellerId, 0)
        this.$delete(this.selectList, this.selectList.indexOf(item))
      }
    },
    shopCheck (event, shopsList) { // 店铺选择
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
    EditNum (productNum, productSkuId, sellerId) { // 修改数量
      this._cartEditNum(productSkuId, productNum, sellerId)
    },
    cartDel (productSkuId, sellerId) { // 删除购物车
      this._cartDel(productSkuId, sellerId)
    },
    _cartEditNum (productSkuId, productNum, sellerId, checked) { // 修改数量
      apiAxios.AxiosG({
        url: api.cartEdit,
        params: {userName: getCookie('user-key'), itemId: productSkuId, num: productNum, sellerId: sellerId, checked: checked}
      }, res => {
        if (res.data.success === true) {
          this.EDIT_CART({productSkuId, productNum, checked})
        }
      })
    },
    _cartEditChecked (productSkuId, productNum, sellerId, checked) { // 修改选中状态
      apiAxios.AxiosG({
        url: api.cartEdit,
        params: {userName: getCookie('user-key'), itemId: productSkuId, num: productNum, sellerId: sellerId, checked: checked}
      }, res => {
        if (res.data.success === true) {
          this.EDIT_CART({productSkuId, checked})
        }
      })
    },
    _cartDel (productSkuId, sellerId) { // 删除购物车
      apiAxios.AxiosG({
        url: api.cartDelete,
        params: {userName: getCookie('user-key'), itemId: productSkuId, sellerId: sellerId}
      }, res => {
        if (res.data.success === true) {
          this.EDIT_CART({productSkuId})
        }
      })
    },
    EDIT_CART ({productSkuId, productNum, checked}) {
      let cart = this.cartList
      if (productNum) { // 修改数量
        let isFind = false
        for (let item of cart) { // 多级联动
          for (let list of item.orderItemList) {
            if (list.itemId === productSkuId) {
              this.$set(list, 'num', productNum)
              isFind = true
              break
            }
          }
          if (isFind) {
            break
          }
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
        // this.setCartList(this.cartList)
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
      this.setCartList(cart)
      // 存入localStorage
      // setStore('buyCart', state.cartList)
    },
    isShopsChecked (cart) { // 遍历店铺，判断店铺选中状态
      cart.forEach(tip => {
        let isAll = tip.orderItemList.every(data => {
          return (data.checked === 1)
        })
        isAll ? tip.checked = 1 : tip.checked = 0
      })
    },
    isAllShops (cart) { // 是否选择全部商品
      let isAllShops = cart.every(data => {
        return (data.checked === 1)
      })
      isAllShops ? cart.allChecked = 1 : cart.allChecked = 0
    }
  }
}

</script>
<style scoped>
@import "../../assets/css/cart/cart.css";
@import "../../assets/css/cart/webbase.css"
</style>
