<template>
  <div class="content regular" data-attr="five 常购清单">
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
</template>
<script>
export default {
  data () {
    return {
      reviewBuy: '' // 常购清单
    }
  },
  props: {
    scroll: {
      type: Object
    }
  },
  mounted () {
    this.$nextTick(() => {
      document.documentElement.scrollTop = this.scroll.scrollTop
    })
    // 常购清单
    this.API.userOrder({ userName: this.$cookies.get('user-key'), status: 5 }).then(res => {
      this.reviewBuy = res
    })
  }
}
</script>
<style scoped>
/*页面特殊文字颜色*/
  .condition {
    margin-left: 24px;
    height: 108px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-right: 18px;
    color: rgba(87, 87, 87, 1);
  }
  .condition .condition-item {
    display: flex;
    justify-content: space-between;
  }
  .condition .group {
    display: inline-block;
  }
  .condition input {
    margin-bottom: 10px;
  }
  .condition label {
    margin-right: 8px;
    color: #575757;
  }
  .condition input,
  .condition select {
    box-sizing: border-box;
    display: inline-block;
    width: 158px;
    height: 29px;
    border: 1px solid #E1E1E1;
    color: rgba(126, 126, 126, 1);
  }
  .condition .align {
    margin-left: -175px;
  }
  .back {
    display: inline-block;
    color: #F79A26;
    width: 15px;
    height: 15px;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(247, 154, 38, 1);
    line-height: 15px;
    text-align: center;
  }
  .large-size {
    font-size: 16px;
    font-weight: 500;
    color: rgba(62, 62, 62, 1);
  }
  .regular .top {
    box-sizing: border-box;
    height: 41px;
    background: rgba(244, 244, 244, 1);
    padding: 5px 0 0 2px;
    line-height: 41px !important;
    position: relative;
  }
  .regular .top-red {
    width: 5px;
    height: 29px;
    background: rgba(231, 22, 0, 1);
    border-radius: 3px;
    display: inline-block;
  }
  .top span {
    font-size: 15px;
    font-weight: 400;
    color: rgba(0, 0, 0, 1);
    position: absolute;
    left: 12px;
    top: 2px;
  }
  .regular-list {
    display: flex;
    flex-wrap: wrap;
    padding-left: 8px;
    padding-top: 13px;
  }
  .regular-item {
    box-sizing: border-box;
    width: 262px;
    height: 382px;
    padding-left: 8px;
    position: relative;
    margin-right: 9px;
    margin-bottom: 20px;
  }
  .regular-item .similar {
    width: 260px;
    height: 39px;
    background: rgba(0, 0, 0, 1);
    opacity: 0.3;
    position: absolute;
    top: 0;
    margin-left: -8px;
    line-height: 39px;
    justify-content: space-around;
    font-size: 16px;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    display: none;
  }
  .regular-item:hover .similar {
    display: block;
  }
  .regular-item:hover {
    border: 1px solid rgba(233, 233, 233, 1);
  }
  .regular-item .item-price {
    font-size: 22px;
    font-family: SourceHanSansCN-Regular;
    font-weight: 400;
    color: rgba(230, 0, 0, 1);
    margin: 5px 0 10px 0;
  }
  .regular-item .car {
    width: 260px;
    height: 38px;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(233, 233, 233, 1);
    margin-left: -9px;
    position: absolute;
    bottom: -1px;
    text-align: center;
    line-height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .regular-item .item-title {
    width: 185px;
  }
  .regular-item .similar a:first-child {
    margin: 0 126px 0 26px;
  }
</style>
