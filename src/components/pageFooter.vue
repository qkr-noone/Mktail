<template>
  <div>
    <footer>
      <div class="footer-wrap">
        <div class="footer-tip">
          <div><a><img src="../../static/img/mk_end_tip.png"></a><p>新手上路</p></div>
          <div><a><img src="../../static/img/mk_end_pay.png"></a><p>付款方式</p></div>
          <div><a><img src="../../static/img/mk_end_depart.png"></a><p>我们特色</p></div>
          <div><a><img src="../../static/img/mk_end_protect.png"></a><p>消费者保障</p></div>
        </div>
      </div>
      <!-- <div class="footer-service">
        <ul class="fs-ul">
          <li class="fs-list">
            <ul>
              <li>购物指南</li>
              <li>免费注册</li>
            </ul>
          </li>
          <li class="fs-list">
            <ul>
              <li>保障服务</li>
              <li>发票保障</li>
              <li>售后规则</li>
              <li>缺货赔付</li>
            </ul>
          </li>
          <li class="fs-list">
            <ul>
              <li>支付方式</li>
              <li>快捷支付</li>
              <li>信用卡</li>
            </ul>
          </li>
          <li class="fs-list">
            <ul>
              <li>商家服务</li>
              <li>商城规则</li>
              <li>商家入驻</li>
              <li>商家中心</li>
              <li>物流服务</li>
              <li>运营服务</li>
            </ul>
          </li>
          <li class="fs-list">
            <ul>
              <li>交易安全</li>
              <li>交易维权攻略</li>
              <li>买家防骗</li>
              <li>卖家防骗</li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="footer-v1">
        <div class="ftv-wrap">
          <div class="ftv-con">
            <ul class="ftv-ul">
              <li>猴尾巴商城</li>
              <li>关于我们</li>
              <li>商家入住</li>
              <li>营销中心</li>
              <li>友情链接</li>
              <li>隐私策略</li>
              <li>问题反馈</li>
              <li>廉政举报</li>
            </ul>
            <div class="ftv-company">
              <p>猴尾巴（广州）设计有限公司</p>
              <p>&nbsp;广东省广州市从化区明珠工业园丽峰路1号&nbsp;&nbsp;020-78890234&nbsp;&nbsp;coolmail@vv.com</p>
            </div>
            <p>copyright@&nbsp;2017&nbsp;cool&nbsp;mail&nbsp;All&nbsp;rights&nbsp;reserver.&nbsp;&nbsp;&nbsp;京&nbsp;ICP&nbsp;备：00000000&nbsp;号</p>
          </div>
        </div>
      </div> -->
    </footer>
  </div>
</template>
<script>
export default {
  name: 'pageFooter',
  data () {
    return {}
  },
  props: ['data']
}
</script>
<style scoped>
/* footer */
  footer,.footer-v1,.footer-service{
    margin: 0 auto;
    min-width: 990px;
    background-size: cover;
    background-color: #f5f5f5;
    overflow: hidden;
  }
  .footer-wrap {
    margin-bottom: 50px;
  }
  .footer-tip {
    max-width: 1230px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 80px;
    color: #373737;
  }
  .footer-tip >div {
    display: flex;
    font-size: 20px;
    font-weight: bold;
    align-items: center;
  }
  .footer-tip >div >p {
    margin-left: 10px;
  }
  .fs-ul {
    max-width: 1230px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    border-top: 1px solid #ccc;
    padding: 20px 0;
  }
  .fs-list >ul li{
    font-size: 16px;
    margin-top: 10px;
    font-weight: bolder;
    text-align: left;
  }
  .fs-list >ul li+li {
    font-weight: normal;
    font-size: 12px;
  }

  .ftv-wrap{
    max-width: 1230px;
    margin: 0 auto;
    padding: 20px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-top: 1px solid #ccc;
  }
  .ftv-ul {
    display: flex;
    flex-wrap: wrap;
  }
  .ftv-ul >li {
    height: 40px;
    height: 18px;
    line-height: 18px;
    padding: 0 10px;
  }
  .ftv-ul >li +li {
    border-left: 1px solid #aaa;
  }
  .ftv-ul >li:first-child {
    padding-left: 0;
  }
  .ftv-company {
    display: flex;
    margin: 15px 0;
  }

</style>
