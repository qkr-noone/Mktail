<template>
  <div>
    <div class="con-wrap">
      <div class="my-order">
        <img src="static/img/user/user_back.png">
        <img  class="monkey" src="static/img/user/user_monkey.png">
        <div class="tab-nav">
          <span class="tab-text">我的订单：</span>
          <ul class="tab-title">
<<<<<<< HEAD
            <li class="tab-item" :class="{tabActive:isActive===0}" @click="changeTab(0, '/statu-z')"><a>所有订单</a></li>
            <li class="tab-item" :class="{tabActive:isActive===1}" @click="changeTab(1, '/statu-one')"><a>待付款<span class="text-red num">{{status.pendingPaymentCount}}</span></a></li>
            <li class="tab-item" :class="{tabActive:isActive===2}" @click="changeTab(2, '/statu-second')"><a>待发货<span class="text-red num">{{status.toBeShippedCount}}</span></a></li>
            <li class="tab-item" :class="{tabActive:isActive===3}" @click="changeTab(3, '/statu-three')"><a>待收货<span class="text-red num">{{status.goodsReceivedCount}}</span></a></li>
            <li class="tab-item" :class="{tabActive:isActive===4}" @click="changeTab(4, '/statu-four')"><a>待评价<span class="text-red num">{{status.toBeEvaluatedCount}}</span></a></li>
            <!-- <li class="tab-item" :class="{tabActive:isActive===5}" @click="changeTab(5, '/statu-five')"><a>常购清单</a></li> -->
          </ul>
        </div>
      </div>
      <transition>
        <router-view @getOrderStatus="getOrderStatus()"></router-view>
      </transition>
=======
            <li class="tab-item" :class="{tabActive:isActive===0}" @click="changeTab(0)"><a >所有订单</a></li>
            <li class="tab-item" :class="{tabActive:isActive===1}" @click="changeTab(1)"><a>待付款</a></li>
            <li class="tab-item" :class="{tabActive:isActive===2}" @click="changeTab(2)"><a>待发货<span class="text-red num">2</span></a></li>
            <li class="tab-item" :class="{tabActive:isActive===3}" @click="changeTab(3)"><a>待收货<span class="text-red num">3</span></a></li>
            <li class="tab-item" :class="{tabActive:isActive===4}" @click="changeTab(4)"><a>待评价</a></li>
            <li class="tab-item" :class="{tabActive:isActive===5}" @click="changeTab(5)"><a>常购清单</a></li>
          </ul>
        </div>
      </div>
      <div class="content" v-show="isActive===0">
        <div class="search">
          <input type="text" placeholder="输入商品标题或订单号进行搜索" />
          <button class="btn">订单搜索</button>
          <span >筛选条件V</span>
        </div>
        <div class="condition">
          <div class="condition-item">
            <div class="group">
              <label>订单类型</label>
              <select>
                <option>全部</option>
                <option>1</option>
              </select>
            </div>
            <div class="group">
              <label>成交时间</label>
              <input type="text" placeholder="请选择时间范围起始"/>
              <span>-</span>
              <input type="text" placeholder="请选择时间范围结束"/>
            </div>
            <div class="group">
              <label>卖家昵称</label>
              <input/>
            </div>
          </div>
          <div class="condition-item">
            <div class="group">
              <label>评价状态</label>
              <select>
                <option>全部</option>
                <option>已评价</option>
                <option>待评价</option>
              </select>
           </div>
            <div class="group align">
              <label>交易状态</label>
              <select>
                <option>全部</option>
                <option>交易成功</option>
                <option>交易失败</option>
              </select>
            </div>
            <div class="group">
              <label>售后服务</label>
              <select>
                <option>仅退款</option>
                <option>退货退款</option>
              </select>
            </div>
          </div>
        </div>
        <div class="shop">
          <div class="shop-title">
            <ul>
              <li class="title-item">宝贝</li>
              <li class="title-item">单价</li>
              <li class="title-item">数量</li>
              <li class="title-item">商品操作</li>
              <li class="title-item">实付款</li>
              <li class="title-item">交易状态</li>
              <li class="title-item">交易操作</li>
            </ul>
          </div>
          <div class="shop-handle">
            <input type="checkbox"/>全选
            <button class="confirm-btn">批量确认收货</button>
            <div class="page" >
              <button class="page-btn">上一页</button>
              <button class="page-btn forbidden">下一页</button>
            </div>
          </div>
          <div class="shop-list">
            <div class="shop-info shopInfo-active">
              <input type="checkbox" />
              <span class="date">2019-01-01</span>
              <span class="order-num">定单号：<span>305932032817899066</span></span>
              <span>创盛门控配件</span>
              <img src="static/img/user/user_part.png">
              <img class =" delete" src="static/img/user/user_delete.png">
            </div>
            <div>
              <ul class="shop-item">
                <li class="first-item">
                  <div class="item-Top">
                    <img src="static/img/user/user_telecontroller.png">
                    <div>
                      <span class="item-title">大金属通用对拷电动伸缩门卷帘闸门车库门道闸遥控器<br>钥匙315/433 [交易快照]</span><br>
                      <div class="back">退</div>
                      <span class="text-red">7天无理由退货</span>
                    </div>
                    <span>￥28.00</span>
                    <span>1</span>
                    <span>
                    <a>退款</a>|<a>退货</a><br>
                    <span> <a>投诉卖家</a></span>
                  </span>
                  </div>
                  <div class="item-Buttom ">
                    <img src="static/img/user/user_car.png">
                    <span class="date">2019-01-01 16：00：37</span>
                    <span class="text-orange">您已选择在线支付，请等待确认审核</span>
                  </div>
                </li>
                <li class="list-item">
                  <span class="large-size">￥28.00</span>
                  <span>(含运费：￥0.00)</span>
                  <span>在线支付</span>
                </li>
                <li class="list-item">
                  <a>待发货</a>
                  <a>查看详情</a>
                  <a class="text-red">查看物流</a>
                </li>
                <li class="list-item">
                  <a>取消订单</a>
                  <a>修改订单</a>
                  <a>再次购买</a>
                  <a>发票详情</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="shop-list">
            <div class="shop-info">
              <input type="checkbox" />
              <span class="date">2019-01-01</span>
              <span class="order-num">定单号：<span>305932032817899066</span></span>
              <span>创盛门控配件</span>
              <img src="static/img/user/user_part.png">
              <img class =" delete" src="static/img/user/user_delete.png">
            </div>
            <div>
              <ul class="shop-item">
                <li class="first-item">
                  <div class="item-Top">
                    <img src="static/img/user/user_telecontroller.png">
                    <div>
                      <span class="item-title">大金属通用对拷电动伸缩门卷帘闸门车库门道闸遥控器<br>钥匙315/433 [交易快照]</span><br>
                      <div class="back">退</div>
                      <span class="text-red">7天无理由退货</span>
                    </div>
                    <span>￥28.00</span>
                    <span>1</span>
                    <span>
                    <a>退款</a>|<a>退货</a><br>
                    <span> <a>投诉卖家</a></span>
                  </span>
                  </div>
                </li>
                <li class="list-item">
                  <span class="large-size">￥28.00</span>
                  <span>(含运费：￥0.00)</span>
                  <span>在线支付</span>
                </li>
                <li class="list-item">
                  <a>待发货</a>
                  <a>查看详情</a>
                  <a class="text-red">查看物流</a>
                </li>
                <li class="list-item">
                  <a>取消订单</a>
                  <a>修改订单</a>
                  <a>再次购买</a>
                  <a>发票详情</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="shopPage">
          <button>上一页</button>
          <span>1</span>
          <button>下一页</button>
          <span>向第</span>
          <input type="text" class="skip"/>页
          <button class="skip">跳转</button>
        </div>
      </div>
      <div class="content" v-show="isActive===1">
        <div class="search">
          <input type="text" placeholder="输入商品标题或订单号进行搜索" />
          <button class="btn">订单搜索</button>
          <span >筛选条件V</span>
        </div>
        <div class="shop">
          <div class="shop-title">
            <ul>
              <li class="title-item">宝贝</li>
              <li class="title-item">单价</li>
              <li class="title-item">数量</li>
              <li class="title-item">商品操作</li>
              <li class="title-item">实付款</li>
              <li class="title-item">交易状态</li>
              <li class="title-item">交易操作</li>
            </ul>
          </div>
          <div class="shop-handle">
            <input type="checkbox"/>全选
            <button class="confirm-btn">批量确认收货</button>
            <div class="page" >
              <button class="page-btn">上一页</button>
              <button class="page-btn forbidden">下一页</button>
            </div>
          </div>
          <div class="shop-list">
            <div class="shop-info shopInfo-active">
              <input type="checkbox" />
              <span class="date">2019-01-01</span>
              <span class="order-num">定单号：<span>305932032817899066</span></span>
              <span>创盛门控配件</span>
              <img src="static/img/user/user_part.png">
              <img class =" delete" src="static/img/user/user_delete.png">
            </div>
            <div>
              <ul class="shop-item">
                <li class="first-item">
                  <div class="item-Top">
                    <img src="static/img/user/user_telecontroller.png">
                    <div>
                      <span class="item-title">大金属通用对拷电动伸缩门卷帘闸门车库门道闸遥控器<br>钥匙315/433 [交易快照]</span><br>
                      <div class="back">退</div>
                      <span class="text-red">7天无理由退货</span>
                    </div>
                    <span>￥28.00</span>
                    <span>1</span>
                    <span>
                    <a>退款</a>|<a>退货</a><br>
                    <span> <a>投诉卖家</a></span>
                  </span>
                  </div>
                </li>
                <li class="list-item">
                  <span class="large-size">￥28.00</span>
                  <span>(含运费：￥0.00)</span>
                  <span>在线支付</span>
                </li>
                <li class="list-item">
                  <a>待发货</a>
                  <a>查看详情</a>
                  <a class="text-red">查看物流</a>
                </li>
                <li class="list-item">
                  <a>取消订单</a>
                  <a>修改订单</a>
                  <a>再次购买</a>
                  <a>发票详情</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="shopPage">
          <button>上一页</button>
          <span>1</span>
          <button>下一页</button>
          <span>向第</span>
          <input type="text" class="skip"/>页
          <button class="skip">跳转</button>
        </div>
      </div>
      <div class="content" v-show="isActive===2">
        <div class="search">
          <input type="text" placeholder="输入商品标题或订单号进行搜索" />
          <button class="btn">订单搜索</button>
          <span >筛选条件V</span>
        </div>
        <div class="shop">
          <div class="shop-title">
            <ul>
              <li class="title-item">宝贝</li>
              <li class="title-item">单价</li>
              <li class="title-item">数量</li>
              <li class="title-item">商品操作</li>
              <li class="title-item">实付款</li>
              <li class="title-item">交易状态</li>
              <li class="title-item">交易操作</li>
            </ul>
          </div>
          <div class="shop-handle">
            <input type="checkbox"/>全选
            <button class="confirm-btn">批量确认收货</button>
            <div class="page" >
              <button class="page-btn">上一页</button>
              <button class="page-btn forbidden">下一页</button>
            </div>
          </div>
          <div class="shop-list">
            <div class="shop-info shopInfo-active">
              <input type="checkbox" />
              <span class="date">2019-01-01</span>
              <span class="order-num">定单号：<span>305932032817899066</span></span>
              <span>创盛门控配件</span>
              <img src="static/img/user/user_part.png">
              <img class =" delete" src="static/img/user/user_delete.png">
            </div>
            <div>
              <ul class="shop-item">
                <li class="first-item">
                  <div class="item-Top">
                    <img src="static/img/user/user_telecontroller.png">
                    <div>
                      <span class="item-title">大金属通用对拷电动伸缩门卷帘闸门车库门道闸遥控器<br>钥匙315/433 [交易快照]</span><br>
                      <div class="back">退</div>
                      <span class="text-red">7天无理由退货</span>
                    </div>
                    <span>￥28.00</span>
                    <span>1</span>
                    <span>
                    <a>退款</a>|<a>退货</a><br>
                    <span> <a>投诉卖家</a></span>
                  </span>
                  </div>
                  <div class="item-Buttom ">
                    <img src="static/img/user/user_car.png">
                    <span class="date">2019-01-01 16：00：37</span>
                    <span class="text-orange">您已选择在线支付，请等待确认审核</span>
                  </div>
                </li>
                <li class="list-item">
                  <span class="large-size">￥28.00</span>
                  <span>(含运费：￥0.00)</span>
                  <span>在线支付</span>
                </li>
                <li class="list-item">
                  <a>待发货</a>
                  <a>查看详情</a>
                  <a class="text-red">查看物流</a>
                </li>
                <li class="list-item">
                  <a>取消订单</a>
                  <a>修改订单</a>
                  <a>再次购买</a>
                  <a>发票详情</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="shopPage">
          <button>上一页</button>
          <span>1</span>
          <button>下一页</button>
          <span>向第</span>
          <input type="text" class="skip"/>页
          <button class="skip">跳转</button>
        </div>
      </div>
      <div class="content" v-show="isActive===3">
        <p>这是待收货</p>
      </div>
      <div class="content" v-show="isActive===4">
        <p>这是待评价</p>
      </div>
      <div class="content regular" v-show="isActive===5">
        <div class="top">
          <div class="top-red"></div>
          <span>常购物</span>
        </div>
        <ul class="regular-list">
          <li class="regular-item">
            <div class="similar">
              <a>找相似</a>
              <a>删除</a>
            </div>
            <img src="static/img/user/user_food1.png">
            <div class="item-price">¥215.00</div>
            <div class="item-title">官方旗舰店阿玛尼小胖丁唇釉 <br>口红3.6ml</div>
            <div class="car">
              <img src="static/img/user/user_buyCar.png">
              <span>加购物车</span>
            </div>
          </li>
          <li class="regular-item">
            <div class="similar">
              <a>找相似</a>
              <a>删除</a>
            </div>
            <img src="static/img/user/user_food1.png">
            <div class="item-price">¥215.00</div>
            <div class="item-title">官方旗舰店阿玛尼小胖丁唇釉口红3.6ml</div>
            <div class="car">
              <img src="static/img/user/user_buyCar.png">
              <span>加购物车</span>
            </div>
          </li>
          <li class="regular-item">
            <div class="similar">
              <a>找相似</a>
              <a>删除</a>
            </div>
            <img src="static/img/user/user_food1.png">
            <div class="item-price">¥215.00</div>
            <div class="item-title">官方旗舰店阿玛尼小胖丁唇釉口红3.6ml</div>
            <div class="car">
              <img src="static/img/user/user_buyCar.png">
              <span>加购物车</span>
            </div>
          </li>
          <li class="regular-item">
            <img src="static/img/user/user_food1.png">
            <div class="item-price">¥215.00</div>
            <div class="item-title">官方旗舰店阿玛尼小胖丁唇釉口红3.6ml</div>
            <div class="car">
              <img src="static/img/user/user_buyCar.png">
              <span>加购物车</span>
            </div>
          </li>
          <li class="regular-item">
            <div class="similar">
              <a>找相似</a>
              <a>删除</a>
            </div>
          <img src="static/img/user/user_food2.png">
          <div class="item-price">¥215.00</div>
          <div class="item-title">官方旗舰店阿玛尼小胖丁唇釉口红3.6ml</div>
          <div class="car">
            <img src="static/img/user/user_buyCar.png">
            <span>加购物车</span>
          </div>
        </li>
          <li class="regular-item">
            <img src="static/img/user/user_food2.png">
            <div class="item-price">¥215.00</div>
            <div class="item-title">官方旗舰店阿玛尼小胖丁唇釉口红3.6ml</div>
            <div class="car">
              <img src="static/img/user/user_buyCar.png">
              <span>加购物车</span>
            </div>
          </li>
          <li class="regular-item">
            <img src="static/img/user/user_food2.png">
            <div class="item-price">¥215.00</div>
            <div class="item-title">官方旗舰店阿玛尼小胖丁唇釉口红3.6ml</div>
            <div class="car">
              <img src="static/img/user/user_buyCar.png">
              <span>加购物车</span>
            </div>
          </li>
          <li class="regular-item">
            <img src="static/img/user/user_food2.png">
            <div class="item-price">¥215.00</div>
            <div class="item-title">官方旗舰店阿玛尼小胖丁唇釉口红3.6ml</div>
            <div class="car">
              <img src="static/img/user/user_buyCar.png">
              <span>加购物车</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="recommend">
      <div class="recommend-top">
        <span>为您推荐</span>
        <hr>
        <div class="page-turning">
        </div>
      </div>
      <div class="recommend-list">
        <ul class="recommend-list">
          <li class="list-item">
            <img src="static/img/user/user_demo.png">
            <p class="list-item-title">
              希箭HOROW 全铜冷热水龙头<br>
              单把双孔方形面盆龙头卫浴
            </p>
            <p class="price">￥549.00</p>
          </li>
          <li class="list-item">
            <img src="static/img/user/user_demo.png">
            <p class="list-item-title">
              希箭HOROW 全铜冷热水龙头<br>
              单把双孔方形面盆龙头卫浴
            </p>
            <p class="price">￥549.00</p>
          </li>
          <li class="list-item">
            <img src="static/img/user/user_demo.png">
            <p class="list-item-title">
              希箭HOROW 全铜冷热水龙头<br>
              单把双孔方形面盆龙头卫浴
            </p>
            <p class="price">￥549.00</p>
          </li>
          <li class="list-item">
            <img src="static/img/user/user_demo.png">
            <p class="list-item-title">
              希箭HOROW 全铜冷热水龙头<br>
              单把双孔方形面盆龙头卫浴
            </p>
            <p class="price">￥549.00</p>
          </li>
          <li class="list-item">
            <img src="static/img/user/user_demo.png">
            <p class="list-item-title">
              希箭HOROW 全铜冷热水龙头<br>
              单把双孔方形面盆龙头卫浴
            </p>
            <p class="price">￥549.00</p>
          </li>
          <li class="list-item">
          <img src="static/img/user/user_demo.png">
          <p class="list-item-title">
            希箭HOROW 全铜冷热水龙头<br>
            单把双孔方形面盆龙头卫浴
          </p>
          <p class="price">￥549.00</p>
        </li>
        </ul>
      </div>
>>>>>>> remotes/origin/master
    </div>
  </div>
</template>
<script>
<<<<<<< HEAD
=======
import { apiAxios } from '../../../common/utils'
import { api } from '../../../common/api'
>>>>>>> remotes/origin/master
export default {
  data () {
    return {
      isActive: 0,
<<<<<<< HEAD
      list: '',
      status: {}
    }
  },
  mounted () {
    let routerChild = this.$route.path.split('/')[3]
    if (routerChild === 'statu-one') this.isActive = 1
    else if (routerChild === 'statu-second') this.isActive = 2
    else if (routerChild === 'statu-three') this.isActive = 3
    else if (routerChild === 'statu-four') this.isActive = 4
    else if (routerChild === 'statu-five') this.isActive = 5
    else this.isActive = 0
    this.getOrderStatus()
  },
  activated () {},
  methods: {
    changeTab (val, path, status) {
      this.isActive = val
      this.$router.push({path: '/user/userOrder' + path})
    },
    getOrderStatus () {
      this.API.userOrderStatus({userName: this.$cookies.get('user-key')}).then(res => {
        this.status = res
      })
    }
  }
}
</script>
<style scoped>
/*部分文字颜色*/
=======
      list: ''
    }
  },
  methods: {
    changeTab (val) {
      this.isActive = val
    }
  },
  mounted () {
    apiAxios.AxiosG({
      url: api.orderStates,
      params: { userName: 1234567, status: 2 }
    }, res => {
      if (res.data.success) {
        console.log(res.data)
      }
    })
  }
}

</script>
<style scoped>
  @import '../../../assets/css/user/user.css';
  /*部分文字颜色*/
>>>>>>> remotes/origin/master
  .text-orange{
    color:#F79A26;
  }
  .text-red{
    color:#E71600 !important;
  }
  img{
    display: inline-block;
  }
  .con-wrap{
    background: #FFFFFF;
    margin-top:6px;
<<<<<<< HEAD
    width:1083px;
    padding-bottom: 10px;
    text-align: left;
    font-size:13px;
=======
    width:1095px;
    padding-bottom: 10px;
    text-align: left;
    font-size:13px;
    font-family:SourceHanSansCN-Normal;
    font-weight:400;
>>>>>>> remotes/origin/master
  }
  input{
    padding-left: 8px;
  }
<<<<<<< HEAD
/*订单导航*/
=======
  /*订单导航*/
>>>>>>> remotes/origin/master
  .my-order{
    height:111px;
    position: relative;
  }
  .monkey{
    position: absolute;
    top:9px;
    right:425px;
  }
  .tab-nav {
    display: inline-block;
    text-align: left;
    margin-left: -50px;
    line-height:40px;
  }
  .tab-title{
    height:35px;
    width:900px;
    border-bottom: 2px solid #EDEDED;
  }
  .tab-item{
    display: inline-block;
    width:87px;
    height:31px;
    border:1px solid rgba(237,237,237,1);
    line-height: 31px;
    text-align: center;
    font-size:16px;
    color:#363636;
<<<<<<< HEAD
    cursor: pointer;
=======
>>>>>>> remotes/origin/master
  }
  .tabActive{
    color:#E71600 !important;
    border-bottom: 2px solid #E71600;
  }
  .num{
    margin-left: 5px;
  }
  .tab-nav ul li:not(:first-child){
    border-left:none;
    margin-left:-5px;
  }
  .tab-text,.tab-title{
    display: inline-block;
  }
  .my-order .tab-text{
    font-size:18px;
    color:rgba(0,0,0,1);
  }
<<<<<<< HEAD
=======
  /*页面特殊文字颜色*/
  .content .search{
    color:rgba(48,48,48,1);
    margin: -10px 0 14px 0;
  }
  .content .search input{
    width:259px;
    height:26px;
    margin-left: 24px;
    border:1px solid rgba(225,225,225,1);
    padding-top: 1px;
  }
  .content .search .btn{
    width:93px;
    height:24px;
    background:rgba(238,238,238,1);
    border:1px solid rgba(201,201,201,1);
    margin: 0 17px 0 -8px;
    border-left: none;
    box-sizing: content-box;
    padding-bottom: 2px;
    padding-top: 1px;
  }
  .condition{
    margin-left: 24px;
    height:108px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-right: 18px;
    color:rgba(87,87,87,1);
  }
  .condition .condition-item{
    display: flex;
    justify-content: space-between;
  }
  .condition .group{
    display: inline-block;
  }
  .condition input {
    margin-bottom: 10px;
  }
  .condition label{
    margin-right: 8px;
    color:#575757;
  }
  .condition input,.condition select{
    box-sizing:border-box;
    display: inline-block;
    width:158px;
    height:29px;
    border: 1px solid #E1E1E1;
    color:rgba(126,126,126,1);

  }
  .condition  .align{
    margin-left: -175px;
  }
  .content .shop{
    margin-left: 12px;
    font-weight: 300;
  }
  .content .shop-title{
    box-sizing: border-box;
    width:1065px;
    height:40px;
    background:rgba(245,245,245,1);
    border:1px solid rgba(231,231,231,1);
    margin-top: 10px;
    line-height: 40px;
  }
  ul{
    display: inline-block;
  }
  .content .shop .title-item {
    display: inline-block;
    font-size:14px;
    color:rgba(126,126,126,1);
  }
  .shop-title ul li:not(:first-child){
    margin-right: 28px;
    margin-left: 30px;
  }
  .shop-title ul li:first-child {
    margin: 0 170px 0 220px;
  }
  .shop .shop-handle{
    height:30px;
    line-height: 30px;
    margin-top: 10px;
    font-size:14px;
    color:rgba(98,98,98,1);
  }
  .shop .shop-handle input{
    height:15px;
    width:15px;
    margin-right: 10px;
  }
  .shop .shop-handle .page{
    display: inline-block;
  }
  .shop .shop-handle .confirm-btn{
    width:121px;
    height:24px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(199,199,199,1);
    border-radius:3px;
    line-height: 24px;
    margin: 0 750px 0 10px;
    font-size:14px;
    color:rgba(98,98,98,1);
  }
  .shop .shop-handle .page-btn{
    width:59px;
    height:20px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(239,239,239,1);
    border-radius:3px;
    font-size:13px;
    color:rgba(206,206,206,1);
  }
 .shop .forbidden{
   background:rgba(244,244,244,1) !important;
   color:rgba(98,98,98,1);
}
 .shop .shop-list{
   margin-top: 14px;
   width:1065px;
   height:216px;
   background:rgba(255,255,255,1);
   border:1px solid rgba(191,191,191,1);
   color:#414141;
   font-size: 13px;
 }
  .shop .shop-list .shop-info{
    height:50px;
    background: #F7F7F7;
    line-height: 50px;
    padding-left: 12px;
    color:rgba(62,62,62,1);
  }
  .shopInfo-active{
    background:#FFF8B7 !important;
  }
  .shop .shop-list .shop-info input{
    height:13px;
    width:15px;
  }
  .shop .shop-list .shop-info .date{
    font-weight:500;
    color:#180E0E;
    margin: 0 19px 0 8px;
  }
  .shop .shop-list .shop-info .order-num{
    margin-right: 174px;
  }
  .shop .shop-list .shop-info .delete{
    margin-left: 425px;
  }
  .shop .shop-item{
    height:165px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .shop .list-item{
    display: inline-block;
    height:165px;
    width:109px;
    border-left:1px solid rgba(205,205,205,1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size:12px;
    color:rgba(144,144,144,1);
  }
  .shop .list-item a{
    margin-bottom: 7px;
  }
  .shop .shop-list li:first-child{
    width:719px;
    border-left: none;
    display: flex;
  }
  .shop .first-item{
    display: flex;
    flex-direction: column !important;
    justify-content: space-around;
  }
  .shop .item-Top{
    width:719px;
    height:121px;
    display: flex;
    flex-direction: row !important;
    justify-content: space-around;
    align-items: center;
  }
  .shop .item-Buttom{
    width:718px;
    height:44px;
    border-top:1px solid rgba(210,210,210,1);
    margin-left:-8px;
    line-height: 44px;
    padding-left: 9px;
  }
  .shop .item-Buttom .date{
    margin:0 20px 0 15px;
  }
  .back{
    display: inline-block;
    color:#F79A26;
    width:15px;
    height:15px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(247,154,38,1);
    line-height: 15px;
    text-align: center;
  }
  .large-size{
    font-size:16px;
    font-weight:500;
    color:rgba(62,62,62,1);
  }
  .content .shopPage{
    text-align: right;
    margin-top: 30px;
    padding-right: 17px;
  }
  .content .shopPage button,  .content .shopPage input{
    box-sizing: border-box;
    width:80px;
    height:32px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(220,220,220,1);
    border-radius:3px;
    margin: 0 10px 0 10px;
    text-align: center;
    font-size:14px;
    font-weight:300;
    color:rgba(220,220,220,1);
  }
  .content .shopPage .skip{
    width:60px;
    font-size:16px;
    font-family:SourceHanSansCN-Normal;
    font-weight:400;
    color:rgba(47,47,47,1);
  }
  .regular .top{
    box-sizing: border-box;
    height:41px;
    background:rgba(244,244,244,1);
    padding:5px 0 0 2px;
    line-height: 41px !important;
    position: relative;
  }
 .regular .top-red{
   width:5px;
   height:29px;
   background:rgba(231,22,0,1);
   border-radius:3px;
   display: inline-block;
 }
 .top span{
   font-size:15px;
   font-weight:400;
   color:rgba(0,0,0,1);
   position: absolute;
   left:12px;
   top:2px;
 }
  .regular-list{
    display: flex;
    flex-wrap: wrap;
    padding-left: 8px;
    padding-top: 13px;
  }
  .regular-item{
    box-sizing: border-box;
    width:262px;
    height:382px;
    padding-left: 8px;
    position: relative;
    margin-right: 9px;
    margin-bottom: 20px;
  }
  .regular-item .similar{
    width:260px;
    height:39px;
    background:rgba(0,0,0,1);
    opacity:0.3;
    position: absolute;
    top:0;
    margin-left: -8px;
    line-height: 39px;
    justify-content: space-around;
    font-size:16px;
    font-weight:400;
    color:rgba(255,255,255,1);
    display: none;
  }
  .regular-item:hover .similar{
    display: block;
  }
  .regular-item:hover{
    border:1px solid rgba(233,233,233,1);
  }
  .regular-item .item-price{
    font-size:22px;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(230,0,0,1);
    margin:5px 0 10px 0;
  }
  .regular-item .car{
    width:260px;
    height:38px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(233,233,233,1);
    margin-left: -9px;
    position: absolute;
    bottom: -1px;
    text-align: center;
    line-height: 38px;
  }
  .regular-item .item-title{
    width:185px;
  }
  .regular-item .similar a:first-child{
    margin:0 126px 0 26px;
  }
    /*为你推荐*/
  .recommend{
    width:1200px;
    height:312px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(220,220,220,1);
    margin-left:-142px;
    margin-top: 30px;
    padding: 14px 16px 27px 23px;
  }
  .recommend .recommend-top{
    display: inline;
    display: flex;
    align-items: center;
    justify-content: left;
    margin-bottom: 37px;
  }
  .recommend hr{
    width:903px;
    color:#D8D8D8;
    opacity: 0.4;
    display: inline-block;
    margin-left:40px;
  }
  .recommend .recommend-list{
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .recommend-list .list-item{
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-around;
    font-size:16px;
    font-weight:500;
    color:rgba(0,0,0,1);
    margin-right: 30px;
  }
  .recommend-list .list-item-title{
    font-size:14px;
    font-weight:300;
    color:rgba(143,143,143,1);
    margin: 7px 0 7px 0;
  }
>>>>>>> remotes/origin/master
</style>
