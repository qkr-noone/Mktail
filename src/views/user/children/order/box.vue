<template>
  <div>
    <div class="can_order_box" data-attr="确认收货" v-if="orderBtnVal">
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
            <button class="init can_btn btn_sub_set" @click="btnOrder()">确定</button>
            <button class="init can_btn btn_set" @click="quitBtnVal()">取消</button>
          </div>
        </div>
        <div class="can_close" @click="quitBtnVal()"><i class="el-icon-close"></i></div>
      </div>
    </div>
    <div class="can_order_box" data-attr="取消订单" v-if="orderCancleVal">
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
          </div>
          <div class="init can_pick" data-attr='<textarea class="init can_other" type="textarea" maxlength="100" placeholder="取消订单其他原因..."></textarea>'>
            <button class="init can_btn btn_sub_set" @click="cancleOrder()">确定</button>
            <button class="init can_btn btn_set" @click="quitCancleVal()">取消</button>
          </div>
        </div>
        <div class="can_close" @click="quitCancleVal()"><i class="el-icon-close"></i></div>
      </div>
    </div>
    <div class="can_order_box" data-attr="申请退款提示" v-if="orderRefundVal">
      <div class="init can_order btn_order refund_order">
        <div class="init can_con">
          <div class="init can_title">
            <img class="can_title_logo" src="static/img/mk_logo_login.png">
            <p class="can_title_head">提示</p>
          </div>
          <div class="init can_item">
            <p class="btn_tip_back refund_con">请先与卖家协商并及时申请退款，如双方未协商一致，请选择待退款货品申请退款，申请退款的3天后您可以申请投诉。申请退款 <br><span class="refund_query">还有疑问？点此咨询</span></p>
          </div>
          <div class="init can_pick refund_btn">
            <button class="init can_btn btn_sub_set refund_sub" @click="refundOrder()">确定</button>
          </div>
        </div>
        <div class="can_close" @click="quitRefundVal()"><i class="el-icon-close"></i></div>
      </div>
    </div>
    <div class="can_order_box" data-attr="申请退款" v-if="orderRefundVal">
      <div class="init can_order regret_order">
        <div class="init can_con">
          <div class="init can_title">
            <img class="can_title_logo" src="static/img/mk_logo_login.png">
            <p class="can_title_head">退款退货</p>
          </div>
          <div class="can_item">
            <div class="stage_box">
              <div class="regret_stage">
                <div class="regret_node">
                  <span>1.&nbsp;申请退货退款</span>
                </div>
                <span class="triangl"></span>
                <div class="triangl_re">
                  <span class="tri_left_space"></span>
                  <span class="tri_top_space"></span>
                  <span class="tri_bottom_space"></span>
                </div>
                <div class="triangl_re triangl_other">
                  <span class="tri_left_space"></span>
                  <span class="tri_top_space"></span>
                  <span class="tri_bottom_space"></span>
                </div>
                <div class="triangl_re">
                  <span class="tri_left_space"></span>
                  <span class="tri_top_space"></span>
                  <span class="tri_bottom_space"></span>
                </div>
              </div>
              <div class="regret_stage">
                <div class="regret_node">
                  <span>2.&nbsp;填写退货原因、填写退货原因</span>
                </div>
                <span class="triangl"></span>
                <div class="triangl_re">
                  <span class="tri_left_space"></span>
                  <span class="tri_top_space"></span>
                  <span class="tri_bottom_space"></span>
                </div>
                <div class="triangl_re triangl_other">
                  <span class="tri_left_space"></span>
                  <span class="tri_top_space"></span>
                  <span class="tri_bottom_space"></span>
                </div>
                <div class="triangl_re">
                  <span class="tri_left_space"></span>
                  <span class="tri_top_space"></span>
                  <span class="tri_bottom_space"></span>
                </div>
              </div>
              <div class="regret_stage triangl_active">
                <div class="regret_node">
                  <span>3.&nbsp;退货处理</span>
                </div>
                <span class="triangl"></span>
                <div class="triangl_re">
                  <span class="tri_left_space"></span>
                  <span class="tri_top_space"></span>
                  <span class="tri_bottom_space"></span>
                </div>
                <div class="triangl_re triangl_other">
                  <span class="tri_left_space"></span>
                  <span class="tri_top_space"></span>
                  <span class="tri_bottom_space"></span>
                </div>
                <div class="triangl_re">
                  <span class="tri_left_space"></span>
                  <span class="tri_top_space"></span>
                  <span class="tri_bottom_space"></span>
                </div>
              </div>
              <div class="regret_stage">
                <div class="regret_node">
                  <span>4.&nbsp;退货完成</span>
                </div>
                <span class="triangl"></span>
              </div>
            </div>
            <div class="refund_type">
              <div class="refund_type_flow refund_type_active">卖家已发的货品</div>
              <div class="refund_type_wait">卖家未发的货品</div>
            </div>
            <div class="refund_goods">
              <div class="refund_item_title">请选择您需要退款的货品</div>
              <div class="refund_item_con">
                <el-row class="refund_item_row">
                  <el-col :span="2"><input id="all" class="refund_item_check" type="checkbox" checked="true" name=""><label for="all" class="check_all">全选</label></el-col>
                  <el-col :span="8">货品</el-col>
                  <el-col :span="3">单价（元）</el-col>
                  <el-col :span="2">数量</el-col>
                  <el-col :span="3">优惠（元）</el-col>
                  <el-col :span="3">可付金额（元）</el-col>
                  <el-col :span="3">货品状态</el-col>
                </el-row>
                <el-row class="refund_grid">
                  <el-col :span="2"><input class="refund_item_check" type="checkbox" checked="true" name=""></el-col>
                  <el-col :span="8" class="refund_desc">
                    <router-link :to="{path: '/detail', query:{goodsId: 111}}" class="a_box">
                      <img class="nest_img" src="static/img/mk_logo_login.png">
                    </router-link>
                    <div class="nest-desc">
                      <router-link class="nest-desc-one" :to="{path: '/detail', query:{goodsId: 121212}}">tttitle</router-link>
                      <span>规格: ll</span>
                    </div>
                  </el-col>
                  <el-col :span="3">￥28.00</el-col>
                  <el-col :span="2">1</el-col>
                  <el-col :span="3">￥00.00</el-col>
                  <el-col :span="3">￥28.00</el-col>
                  <el-col :span="3">已发货</el-col>
                </el-row>
                <el-row class="refund_grid">
                  <el-col :span="2"><input class="refund_item_check" type="checkbox" checked="true" name=""></el-col>
                  <el-col :span="8" class="refund_desc">
                    <router-link :to="{path: '/detail', query:{goodsId: 111}}" class="a_box">
                      <img class="nest_img" src="static/img/mk_logo_login.png">
                    </router-link>
                    <div class="nest-desc">
                      <router-link :to="{path: '/detail', query:{goodsId: 121212}}">
                        <span class="nest-desc-one">tttitle</span>
                      </router-link>
                      <span>规格: ll</span>
                    </div>
                  </el-col>
                  <el-col :span="3">￥28.00</el-col>
                  <el-col :span="2">1</el-col>
                  <el-col :span="3">￥00.00</el-col>
                  <el-col :span="3">￥28.00</el-col>
                  <el-col :span="3">已发货</el-col>
                </el-row>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    orderBtnVal: {
      type: [String, Number]
    },
    orderCancleVal: {
      type: [String, Number]
    },
    orderRefundVal: {
      type: [String, Number]
    }
  },
  data () {
    return {}
  },
  methods: {
    btnOrder () {
      this.$emit('btnOrder')
    },
    quitBtnVal () {
      this.$emit('quitBtnVal')
    },
    cancleOrder () {
      this.$emit('cancleOrder')
    },
    quitCancleVal () {
      this.$emit('quitCancleVal')
    },
    refundOrder () {
      this.$emit('refundOrder')
    },
    quitRefundVal () {
      this.$emit('quitRefundVal')
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
/* 申请退款提示 */
  .refund_order {
    height: 278px;
  }
  .refund_con {
    line-height: 36px;
    font-size: 16px;
  }
  .refund_query {
    color: #E53031;
  }
  .can_pick.refund_btn {
    padding: 10px 0;
  }
  .refund_sub {
    margin-right: 0;
  }
/* 申请退款 */
  .regret_order {
    width: 1184px;
    height: auto;
    min-height: 258px;
  }
/* 退款阶段 */
  .stage_box {
    display: flex;
  }
  .regret_stage {
    display: flex;
  }
  .regret_node {
    width: 220px;
    height:28px;
    background-color: #D6D6D6;
    color: #000000;
    line-height:27px;
    padding-left: 6px;
  }
  .regret_stage:nth-of-type(n+1) {
    margin-left: 4px;
  }
  .triangl {
    width: 0;
    height: 0;
    border-top: 14px solid transparent;
    border-right: 0;
    border-bottom: 14px solid transparent;
    border-left: 10px solid #D6D6D6;
  }
  .triangl_re {
    width: 16px;
    height: 28px;
    background-color: #D6D6D6;
    position: relative;
  }
  .tri_left_space {
    position: absolute;
    border-top: 14px solid transparent;
    border-right: 0;
    left: 0px;
    border-bottom: 14px solid transparent;
    border-left: 10px solid #fff;
  }
  .tri_top_space {
    position: absolute;
    right: 0;
    top: -1px;
    border-top: 0 solid transparent;
    border-right: 10px solid #fff;
    border-bottom: 15px solid transparent;
    border-left: 0;
  }
  .tri_bottom_space {
    position: absolute;
    right: 0;
    bottom: -1px;
    border-top: 15px solid transparent;
    border-right: 10px solid #fff;
    border-bottom: 0 solid transparent;
    border-left: 0;
  }
  .triangl_other {
    background-color: #eef;
  }
  .triangl_active {
  }
  .triangl_active>.regret_node {
    background-color: #E53031;
    color: #FFFFFF;
  }
  .triangl_active>.triangl {
    border-left-color: #E53031;
  }
  .triangl_active>.triangl_re:not(.triangl_other){
    background-color: #E53031;
  }
/* 退款内容 */
  .refund_type{
    display: flex;
    margin-top: 40px;
    color: #000;
  }
  .refund_type_flow, .refund_type_wait {
    padding: 0 18px;
    border:1px dashed rgba(215,51,49,1);
    border-radius:11px;
  }
  .refund_type_flow {
    border-right-color: transparent;
  }
  .refund_type_wait {
    margin-left: -11px;
    border-left-color: transparent;
  }
  .refund_type_active {
    background-color: rgba(215,51,49,1);
    color: #FFFFFF;
  }

  .refund_goods {
    margin-top: 36px;
  }
  .refund_item_title {
    font-size: 18px;
  }
  .refund_item_con {
    margin-top: 22px;
    font-size: 14px;
    color: #000;
  }
  .refund_item_row {
    height: 32px;
    line-height: 32px;
  }
  .el-col {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .refund_item_check {
    margin-right: 8px;
    cursor: pointer;
  }
  .check_all {
    cursor: pointer;
  }
  .refund_grid {
    padding: 28px 0;
    border: 1px solid #CDCDCD;
    display: flex;
  }
  .refund_grid + .refund_grid {
    border-top: none;
  }
  .refund_desc {
    display: flex;
    justify-content: flex-start;
  }
  .nest-desc {
    box-sizing: border-box;
    height: 100%;
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: calc(100% - 102px);
  }
  .a_box {
    width: 81px;
    height: 81px;
    margin-right: 20px;
    overflow: hidden;
    flex-shrink: 0;
  }
  .nest_img {
    max-width: 81px;
    max-height: 81px;
    font-size: 81px;
  }
  .nest-desc-one {
    width: 100%;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap:break-word;
    color: rgb(53, 53, 53);
    height: 36px;
  }
</style>
