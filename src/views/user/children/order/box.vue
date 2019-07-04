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
            <p class="btn_tip_back refund_con">请先与卖家协商并及时申请退款，如双方未协商一致，请选择待退款货品申请退款，申请退款的3天后您可以申请投诉。申请退款 <br><!-- <span class="refund_query">还有疑问？点此咨询</span> --></p>
          </div>
          <div class="init can_pick refund_btn">
            <button class="init can_btn btn_sub_set refund_sub" @click="refundOrder()">确定</button>
          </div>
        </div>
        <div class="can_close" @click="quitRefundVal()"><i class="el-icon-close"></i></div>
      </div>
    </div>
    <div class="can_order_box" data-attr="撤销退款申请" v-if="orderCancleRefund">
      <div class="init can_order btn_order refund_order">
        <div class="init can_con">
          <div class="init can_title">
            <img class="can_title_logo" src="static/img/mk_logo_login.png">
            <p class="can_title_head">撤销退款申请</p>
          </div>
          <div class="init can_item">
            <p class="btn_tip_back refund_con">销退款后，交易当即恢复超时。如您与卖家协商了新的退款协议，请立刻重新申请退款，以免超时后系统自动打款给卖家。 </p>
          </div>
          <div class="init can_pick refund_btn">
            <button class="init can_btn btn_sub_set" @click="cancleRefund()">确定</button>
            <button class="init can_btn btn_set" @click="quitCancle()">取消</button>
          </div>
        </div>
        <div class="can_close" @click="quitCancle()"><i class="el-icon-close"></i></div>
      </div>
    </div>
    <div class="can_order_box" data-attr="撤销退款成功" v-if="cancleRefundSuccess">
      <div class="init can_order btn_order refund_order">
        <div class="init can_con">
          <div class="init can_title">
            <img class="can_title_logo" src="static/img/mk_logo_login.png">
            <p class="can_title_head">撤销退款申请</p>
          </div>
          <div class="init can_item">
            <p class="btn_tip_back refund_con">撤销退款成功！ </p>
          </div>
          <div class="init can_pick refund_btn">
            <button class="init can_btn btn_sub_set" @click="closeCancleRefund()">确定</button>
          </div>
        </div>
        <div class="can_close" @click="closeCancleRefund()"><i class="el-icon-close"></i></div>
      </div>
    </div>
    <div class="can_order_box" data-attr="补充留言/凭证" v-if="proofRefund">
      <div class="init can_order can_proof">
        <div class="init can_con">
          <div class="init can_title">
            <img class="can_title_logo" src="static/img/mk_logo_login.png">
            <p class="can_title_head">补充留言/凭证</p>
          </div>
          <div class="btn_tip_back can_proof_word">给卖家留言</div>
          <div class="stage2_item_con stage2_pick_user_flow">
            <label class="init stage2_item_key"><sup class="stage2_info_color">*</sup>填写留言:</label>
            <div>
              <textarea type="textarea" class="stage_pick_info_box stage_pick_other" placeholder="内容在2-200个字之间，请您采用友好协商的沟通方式和对方进行交流，以助于解决问题" name=""></textarea>
              <div class="stage_pick_word stage2_info_color">还可输入200字</div>
            </div>
          </div>
          <div class="stage2_item_con stage2_pick_user_flow">
            <label class="init stage2_item_key"><sup class="stage2_info_color">*</sup>上传凭证:</label>
            <div>
              <div class="stage2_file">
                <el-upload
                  class="avatar-uploader"
                  accept="image/png, image/jpeg, image/gif, image/jpg, image/BMP"
                  :action="URLIP +'/personData/personData/uploadFile'"
                  :show-file-list="false">
                  <label class="file_choose">选择文件</label>
                </el-upload>
                <p class="file_desc">请补充支持退款原因的<span class="stage2_info_color">聊天记录截图、实物照片、第三方证明等</span>相关证明，<span class="file_desc_more">查看详情</span></p>
              </div>
              <p class="file_tip">并可上传10张图片，只仅支持JPG、GIF、PNG、JPEG和BMP格式，单张最大5M</p>
            </div>
          </div>
          <div class="init can_pick">
            <button class="init can_btn btn_sub_set" @click="btnProof()">补充留言/上传凭证</button>
            <button class="init can_btn btn_set" @click="quitProof()">取消</button>
          </div>
        </div>
        <div class="can_close" @click="quitProof()"><i class="el-icon-close"></i></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    orderBtnVal: {
      type: [String, Number],
      default: ''
    },
    orderCancleVal: {
      type: [String, Number],
      default: ''
    },
    orderRefundVal: {
      type: [String, Number],
      default: ''
    },
    orderCancleRefund: {
      type: [String, Number],
      default: ''
    },
    cancleRefundSuccess: {
      type: [String, Number],
      default: ''
    },
    proofRefund: {
      type: [String, Number],
      default: ''
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
    },
    cancleRefund () {
      this.$emit('cancleRefund')
    },
    quitCancle () {
      this.$emit('quitCancle')
    },
    closeCancleRefund () {
      this.$emit('closeCancleRefund')
    },
    btnProof () {
      this.$emit('btnProof')
    },
    quitProof () {
      this.$emit('quitProof')
    }
  }
}
</script>
<style scoped>
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
    height: 120px;
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
/* 上传凭证、留言 */
  .can_proof {
    width: 1100px;
    height: 600px;
  }
  .can_proof_word {
    color: #000;
    font-size: 18px;
    margin: 25px 0;
  }
  .stage2_item_con {
    display: flex;
    font-size: 16px;
    color: #4F4F4F;
    margin-bottom: 10px;
  }
  .stage2_item_con>div, .stage2_info_order {
    text-align: left;
  }
  .stage2_item_key {
    display: block;
    text-align: right;
    width: 132px;
    color: #000;
    margin-right: 10px;
  }
  .stage2_item_value {
    padding-left: 12px;
    text-align: left;
  }
  .stage2_info_color {
    color: #E53031
  }
  .stage2_item_flow {
    padding-top: 10px;
  }
  .stage2_see_order {
    box-sizing: border-box;
    padding-left: 30px;
    margin-top: 10px;
    font-size: 15px;
    color: #0066FF;
  }
  .stage2_call_me {
    margin: 0 13px;
    height: 21px;
    border:1px dashed rgba(60,129,255,1);
    color: #3C81FF;
    padding: 0px 5px;
    cursor: pointer;
  }
  .stage2_pick {
    margin-top: 30px;
  }
  .stage2_pick .stage2_item_con {
    display: flex;
    align-items: center;
  }
  #goodsDesc, #goodsDescNot {
    margin: 0 2px;
    margin-top: 4px;
  }
  input[type="button"], input[type="submit"], input[type="search"], input[type="reset"], input[type="number"], input[type="text"], input[type="textarea"] {
    border: 1px solid #606060;
  }
  sup.stage2_info_color {
    display: inline-block;
    margin-top: -5px;
  }
  .stage_pick_info_box {
    width:242px;
    height:32px;
    box-shadow:0px 3px 6px 0px rgba(96,96,96,0.4);
    margin-right: 13px;
    font-size: 16px;
  }
  .stage2_pick_user_flow {
    align-items: flex-start !important;
  }
  .stage2_pick_user_flow  .stage2_item_key{
    flex-shrink: 0;
  }
  .stage_pick_other {
    width: 800px;
    height:135px;
    font-family: "Helvetica Neue", "Microsoft Yahei";
  }
  .stage_pick_word {
    margin: 9px 0;
    padding-right: 13px;
    text-align: right;
  }
  .stage2_file {
    background-color: #EEEEEE;
    border:1px solid rgba(151,151,151,1);
    width:800px;
    height:63px;
    display: flex;
    align-items: center;
  }
  .file_choose {
    margin: 0 30px;
    color: #000;
    background-color: #fff;
    padding: 7px 15px;
    border-radius: 8px;
    font-size: 14px;
    border:1px solid rgba(142,142,142,1);
  }
  .file_desc_more {
    box-sizing: border-box;
    font-size: 16px;
    color: #0066FF;
  }
  .file_tip {
    font-size:14px;
    padding: 6px 3px;
    color:rgba(180,180,180,1);
  }
</style>
