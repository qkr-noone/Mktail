<template>
  <div>
    <div class="can_order_box" data-attr="取消订单" v-if="boxOrderCancle">
      <div class="init can_order">
        <div class="init can_con">
          <div class="init can_title">
            <img class="can_title_logo" src="static/img/mk_logo_login.png">
            <p class="can_title_head">取消订单</p>
          </div>
          <div class="init can_item">
            <p class="can_tip">您确定要取消该订单吗？取消订单后，不能恢复。</p>
            <div class="init can_select_box">
              <label class="init">请选择取消订单的理由:&nbsp;</label>
              <select class="init can_select">
                <option value="请选择关闭理由">请选择关闭理由</option>
                <option value="我不想买了">我不想买了</option>
                <option value="信息填写错误，重新拍">信息填写错误，重新拍</option>
                <option value="卖家缺货">卖家缺货</option>
                <option value="同城见面交易">同城见面交易</option>
                <option value="付款遇到问题（如余额不足、不知道怎么付款等）">付款遇到问题（如余额不足、不知道怎么付款等）</option>
                <option value="拍错了">拍错了</option>
                <option value="其他原因">其他原因</option>
              </select>
            </div>
            <!-- <textarea class="init can_other" type="textarea" maxlength="100" placeholder="取消订单其他原因..."></textarea> -->
          </div>
          <div class="init can_pick">
            <button class="init can_btn btn_sub_set">确定</button>
            <button class="init can_btn btn_set" @click="boxOrderCancle=false">取消</button>
          </div>
        </div>
        <div class="can_close" @click="boxOrderCancle=false"><i class="el-icon-close"></i></div>
      </div>
    </div>
    <div class="can_order_box" data-attr="确认收货" v-if="boxOrderBtn">
      <div class="init can_order btn_order">
        <div class="init can_con">
          <div class="init can_title">
            <img class="can_title_logo" src="static/img/mk_logo_login.png">
            <p class="can_title_head">确认订单</p>
          </div>
          <div class="init can_item">
            <p class="can_tip btn_tip">请收到货后，再确认收货！否则您可能钱货两空！</p>
            <p class="btn_tip_back">如果您想申请退款，请返回到“已买到的货品”页申请退款</p>
          </div>
          <div class="init can_pick">
            <button class="init can_btn btn_sub_set">确定</button>
            <button class="init can_btn btn_set" @click="BoxOrderBtn=false">取消</button>
          </div>
        </div>
        <div class="can_close" @click="boxOrderBtn=false"><i class="el-icon-close"></i></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      boxOrderBtn: false,
      boxOrderCancle: false
    }
  },
  methods: {
    btnOrder (e) {
      this.boxOrderBtn = true
      // this.$emit('getOrder')
      console.log(this.$refs)
      // this.API.orderBtnObtain({ orderIds: e.join(',') }).then(res => {
      //   if (res.success === false) {
      //     this.$message.warning('提交异常')
      //     return false
      //   }
      //   this.$message.success('交易已经成功')
      //   // this.$emit('getOrder')
      // })
    },
    cancleOrder (e) {
      this.boxOrderCancle = true
      console.log(e)
      // this.API.orderCancle({ orderId: this.orderBox }).then(res => {
      //   console.log(res)
      // })
    }
  }
}
</script>
<style>
/* 取消订单 */
  .can_order_box {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0, 0.1);
    z-index: 1000;
    overflow-y: hidden;
  }
  .can_order {
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width:660px;
    height:437px;
    background:rgba(255,255,255,1);
    border:10px solid rgba(142, 142, 142, 0.35);
    border-radius: 10px;
  }
  .init{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    list-style: none;
    font-style: normal;
    text-decoration: none;
    font-family: "Helvetica Neue", "Microsoft Yahei";
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
  }
  textarea:hover, textarea:focus, select:hover, select:focus, button:hover, button:focus, input:focus, input:hover, label:hover, label:focus, option:focus, option:hover{
    outline: none;
  }
  select:hover, select {
    border: 1px solid #8E8E8E;
  }
  select::-ms-expand{ display: none; }
  input[type="button"], input[type="submit"], input[type="search"], input[type="reset"], textarea {
    -webkit-appearance: none;
  }
  table, tr, td {
    border-spacing: 0;
  }
  .can_con {
    display: flex;
    flex-direction: column;
    height: 100%;
    font-size: 15px;
    color: #3D3D3D;
    padding: 24px 21px 15px 37px;
  }
  .can_title {
    display: flex;
  }
  .can_title_logo {
    max-width: 70px;
    max-height: 40px;
  }
  .can_title_head {
    color: #4E4E4E;
    font-size: 24px;
    vertical-align: bottom;
    margin-left: 20px;
    align-self: flex-end;
  }
  .can_item {
    margin-top: 36px;
  }
  .can_tip {
    color: #E53031;
    margin-bottom: 10px;
  }
  .can_select_box {
    height: 32px;
    line-height: 32px;
  }
  .can_select {
    font-size: 15px;
    border-radius: 4px;
    border:1px solid rgba(135,135,135,1);
    box-shadow:0px 0px 8px 0px rgba(126,123,124,0.4);
  }
  .can_other {
    margin-top: 25px;
    border-radius: 4px;
    width: 516px;
    font-size: 13px;
    font-family: "Microsoft Yahei";
    height: 60px;
  }
  .can_close {
    position: absolute;
    top: 8px;
    right: 8px;
    font-size: 20px;
    color: #4E4E4E;
    cursor: pointer;
  }
  .can_pick {
    display: flex;
    justify-content: flex-end;
    padding: 17px 21px;
    box-sizing: border-box;
    margin-top: auto;
  }
  .can_btn{
    padding: 6px 15px;
    border-radius: 4px;
    cursor: pointer;
  }
  .btn_sub_set {
    background-color: #D73331;
    color: #FFFFFF;
    margin-right: 10px;
  }
/* 确认收货 */
  .btn_order {
    height: 258px;
  }
  .btn_tip { font-size: 24px; }
  .btn_tip_back { color: #4E4E4E; font-size: 14px; }
</style>
