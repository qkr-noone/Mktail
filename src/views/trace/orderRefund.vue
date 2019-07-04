<template>
  <div class="orderRefund">
    <shortcut></shortcut>
    <userNav></userNav>
    <div class="can_order_box" data-attr="申请退款">
      <div class="init can_order regret_order">
        <div class="init can_con">
          <!-- <div class="init can_title">
            <img class="can_title_logo" src="static/img/mk_logo_login.png">
            <p class="can_title_head">退款退货</p>
          </div> -->
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
          </div>
          <div class="can_item" data-attr="阶段一">
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
                <div class="refund_grid_box">
                  <el-row class="refund_grid" v-for="i in 3" :key="i">
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
            <div class="refund_tip" data-attr="退款底部信息">
              <div class="back_box">
                <span>退款服务：</span>
                <span><input id="goodsRefund" type="radio" name="退货退款" value="wallet"><label for="goodsRefund">退货退款</label></span>
                <span><input id="onlyRefund" type="radio" name="退货退款" value="wallet"><label for="onlyRefund">仅退款</label></span>
              </div>
              <div class="refund_select_num">共选择&nbsp;<span class="refund_num">0</span>&nbsp;货品</div>
              <div class="refund_total">货品金额总计&nbsp;<span class="refund_num">0</span>&nbsp;元</div>
              <p class="reufnd_other_tip"><span class="reufnd_other_radio"></span>如需退还运费，请在下一步填写</p>
              <p class="reufnd_other_tip"><span class="reufnd_other_radio"></span>在提交退款协议前，可重选货品</p>
            </div>
          </div>
          <div class="init can_pick refund_btn">
            <button class="init can_btn btn_sub_set refund_sub">确定退款货品</button>
          </div>
          <div class="can_item" data-attr="阶段二">
            <div class="refund_item_con">
              <el-row class="refund_item_row">
                <el-col :span="8">货品</el-col>
                <el-col :span="3">单价（元）</el-col>
                <el-col :span="2">数量</el-col>
                <el-col :span="2">优惠（元）</el-col>
                <el-col :span="3">可付金额（元）</el-col>
                <el-col :span="3">货品状态</el-col>
                <el-col :span="3">退款数量</el-col>
              </el-row>
              <div class="refund_grid_box">
                <el-row class="refund_grid stage2_grid" v-for="i in 3" :key="i">
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
                  <el-col :span="2">￥00.00</el-col>
                  <el-col :span="3">￥28.00</el-col>
                  <el-col :span="3">已发货</el-col>
                  <el-col :span="3" class="stage2_select_num"><input class="stage2_item_num" type="number" min="1" max="200" name=""><div class="">最多1件</div></el-col>
                </el-row>
              </div>
            </div>
            <div class="stage2_reason">
              <span class="stage2_reason_desc">请填写退款原因及金额&nbsp;&nbsp;</span>
              <span class="stage2_reason_tip">填写相应的退款原因、金额、运费等相关信息</span>
            </div>
            <div class="init stage2_info">
              <div class="init stage2_info_order">
                <div class="stage2_reason_desc stage2_info_title">订单摘要</div>
                <div class="stage2_item_con"><label class="stage2_item_key">订单号:</label><label class="stage2_item_value">121212121212121212</label></div>
                <div class="stage2_item_con"><label class="stage2_item_key">下单时间:</label><label class="stage2_item_value">121212121212121212</label></div>
                <div class="stage2_item_con"><label class="stage2_item_key">付款时间:</label><label class="stage2_item_value">121212121212121212</label></div>
                <div class="stage2_item_con"><label class="stage2_item_key">发货时间:</label><label class="stage2_item_value">121212121212121212</label></div>
                <div class="stage2_item_con"><label class="stage2_item_key">订单状态:</label><label class="stage2_item_value stage2_info_color">等待买家确认收货</label></div>
                <div class="stage2_item_con"><label class="stage2_item_key">已付款:</label><label class="stage2_item_value"><span class="stage2_info_color">28.00&nbsp;元</span><br><span class="stage2_item_flow">(含运费 10.00元)</span></label></div>
                <a href="javascript:;" class="stage2_see_order">>> 查看订单详情</a>
              </div>
              <div class="init stage2_info_order stage2_info_seller">
                <div class="stage2_reason_desc stage2_info_title">卖家信息</div>
                <div class="stage2_item_con"><label class="stage2_item_key">卖家:</label><label class="stage2_item_value stage2_info_color">从化新兴金属（脚轮）</label></div>
                <div class="stage2_item_con"><label class="stage2_item_key">会员登录名:</label><label class="stage2_item_value"><span>广州从化新兴金属（脚轮）制品有限公司</span><span class="stage2_call_me">给我留言</span></label></div>
                <div class="stage2_item_con"><label class="stage2_item_key">支付宝账户:</label><label class="stage2_item_value">15158985207</label></div>
                <div class="stage2_item_con"><label class="stage2_item_key">电话:</label><label class="stage2_item_value">86-</label></div>
                <div class="stage2_item_con"><label class="stage2_item_key">手机:</label><label class="stage2_item_value">18969399695</label></div>
              </div>
            </div>
            <div class="init stage2_pick">
              <div class="stage2_item_con">
                <label class="stage2_item_key"><sup class="stage2_info_color">*</sup>货品情况:</label>
                <input id="goodsDesc" type="radio" name=""><label for="goodsDesc">已收到全部（或部分）货品</label>
                <input id="goodsDescNot" type="radio" name="" v-if="false"><label for="goodsDescNot">没有收到货品</label>
                <span class="stage2_pick_status_tip">没有收到货时，请勿选择“已收到全部（或部分）货品”，谨防钱货两空。</span>
                <span class=" " v-if="false">卖家已发货，请与卖家协商发货情况。</span>
              </div>
              <div class="stage2_item_con">
                <label class="init stage2_item_key"><sup class="stage2_info_color">*</sup>退款原因:</label>
                <!-- <input class="init stage_pick_info_box" type="text" name=""> -->
                <select class="init can_select stage_pick_info_box" >
                  <option value="" disabled selected style="display: none;">请选择退款原因</option>
                  <option value="不想买了，已与卖家协商一致">不想买了，已与卖家协商一致</option>
                  <option value="大小/尺寸不符">大小/尺寸不符</option>
                  <option value="颜色/图案/款式不符">颜色/图案/款式不符</option>
                  <option value="破损/污渍/划痕">破损/污渍/划痕</option>
                  <option value="材质/成分不符">材质/成分不符</option>
                  <option value="质量问题">质量问题</option>
                </select>
              </div>
              <div class="stage2_item_con">
                <label class="init stage2_item_key"><sup class="stage2_info_color">*</sup>退款货品金额:</label>
                <input class="init stage_pick_info_box" type="text" name=""><span>元</span>
              </div>
              <div class="stage2_item_con stage2_pick_user_flow">
                <label class="init stage2_item_key"><sup class="stage2_info_color">*</sup>退款运费金额:</label>
                <div>
                  <input class="init stage_pick_info_box" type="text" min="0.01" name=""><span>元</span><span class="init stage2_pick_flow">退款运费说明<i class="el-icon-caret-bottom"></i></span>
                  <div class="stage2_pick_flow_tip">如实际运费高于<span class="stage2_info_color">&nbsp;10.00&nbsp;</span>元，请<span class="stage2_call_me">联系卖家</span>协商打款方式。</div>
                  <textarea type="textarea" class="stage_pick_info_box stage_pick_other" placeholder="内容在2-200个字之间，建议填写有关退款原因说明等信息。" name=""></textarea>
                  <div class="stage_pick_word stage2_info_color">还可输入200字</div>
                </div>
              </div>
              <div class="stage2_item_con stage2_pick_user_flow">
                <label class="init stage2_item_key"><sup class="stage2_info_color">*</sup>上传凭证:</label>
                <div>
                  <div class="stage2_file">
                    <!-- <input type="file" name=""> -->
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
                  <span class="file_tip_tip stage2_pick_status_tip">请仔细确认您的退款金额，一旦卖家同意该退款协议，<span class="stage2_info_color">0.0&nbsp;</span>元退款金额将转入您绑定的支付宝账户。</span>
                  <div class="init refund_btn">
                    <button class="init can_btn btn_sub_set refund_sub">申请退款</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="can_item" data-attr="阶段三">
            <div class="stage3_end">
              <p>售后编号: TQ24338627700422548</p>
              <p>当前退款状态: <span class="stage2_info_color">退款协议等待卖家确认</span></p>
              <p class="stage3_end_time"><i class="el-icon-time stage2_info_color"></i><span>卖家必须在4天23小时59分26秒内处理，逾期系统自动同意退款</span></p>
              <div class="stage3_end_back"><span>修改退款协议</span><span>撤销退款申请</span></div>
            </div>
            <div class="init stage3_tip">
              <p>重要提示：</p>
              <p class="stage3_tip_handle"><span class="reufnd_other_radio"></span>您还可以主动联系卖家广州从化新兴金属（脚轮）制品有限公司<span class="stage2_call_me">给我留言</span>，要求尽快处理退款。</p>
              <p><span class="reufnd_other_radio"></span>您好，卖家需要一定的时间处理您的申请，若未协商一致，您可以在卖家拒绝后申请介入。</p>
            </div>
            <div class="init stage3_info">
              <div class="stage3_info_title"><div class="stage3_info_title_item stage3_info_title_active">退款协议与退款货品</div><div class="stage3_info_title_item">留言和凭证</div></div>
              <div class="init stage2_info_order stage3_info_con" v-if="false">
                <div class="stage2_item_con"><label class="stage2_item_key">退款服务:</label><label class="stage2_item_value">仅退款</label></div>
                <div class="stage2_item_con"><label class="stage2_item_key">申请退款时间:</label><label class="stage2_item_value">2019-04-19  17：50：19</label></div>
                <div class="stage2_item_con"><label class="stage2_item_key">退款状态:</label><label class="stage2_item_value">退款协议等待卖家确认</label></div>
                <div class="stage2_item_con"><label class="stage2_item_key">买家是否已收到货:</label><label class="stage2_item_value">已收到全部（或部分）货品</label></div>
                <div class="stage2_item_con"><label class="stage2_item_key">退款金额:</label><label class="stage2_item_value"><span class="stage2_info_color">28.00&nbsp;元</span><span class="stage2_item_flow">(含运费 10.00元)</span></label></div>
                <div class="stage2_item_con"><label class="stage2_item_key">退款原因:</label><label class="stage2_item_value stage2_info_color">大小/尺寸不符+ </label></div>
                <div class="stage2_item_con"><label class="stage2_item_key">退款说明:</label><label class="stage2_item_value">已收到全部品</label></div>
              </div>
              <div class="init stage2_info_order stage3_info_con">
                <div class="stage3_info_con2">
                  <div class="init stage3_info_con2_2 stage3_info_con2_user"><span>联系人信息</span></div>
                  <div class="init stage3_info_con2_3"><span>留言</span></div>
                  <div class="init stage3_info_con2_5"><span>凭证</span></div>
                </div>
                <div class="stage3_info_con2">
                  <div class="init stage3_info_con2_2">
                    <label>买家:conghuaxinxxing</label>
                    <span class="stage2_call_me">给我留言</span>
                    <label class="stage2_item_value">121212；1212： 121</label>
                  </div>
                  <div class="init stage3_info_con2_3">
                    <p class="stage3_info_con2_desc_3">买家申请退款协议，等待卖家确认</p>
                    <div class="stage2_item_con"><label class="stage2_item_key">退款诉求:</label><label class="stage2_item_value">仅退款</label></div>
                    <div class="stage2_item_con"><label class="stage2_item_key">申请原因:</label><label class="stage2_item_value">大小/尺寸不符</label></div>
                    <div class="stage2_item_con"><label class="stage2_item_key">货品情况:</label><label class="stage2_item_value">大小/已收到货</label></div>
                    <div class="stage2_item_con"><label class="stage2_item_key">退款货品金额:</label><label class="stage2_item_value stage2_info_color">28.00</label></div>
                    <div class="stage2_item_con"><label class="stage2_item_key">退款运费金额:</label><label class="stage2_item_value">10.00</label></div>
                    <div class="stage2_item_con"><label class="stage2_item_key">退款说明:</label><label class="stage2_item_value">发发的发生的</label></div>
                  </div>
                  <div class="init stage3_info_con2_5">
                    <a class="stage3_info_con2_5_a"><img class="stage3_info_con2_5_img" src="static/img/mk_logo_login.png"></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="init stage3_seller">
              <div class="stage2_reason_desc stage3_seller_title">卖家信息</div>
              <div class="stage3_seller_con">
                <div class="stage3_seller_box">
                  <div class="stage2_item_con">
                    <label class="stage2_item_key">卖家:</label><label class="stage2_item_value stage2_info_color">从化新兴金属（脚轮）</label>
                  </div>
                  <div class="stage2_item_con">
                    <label class="stage2_item_key">会员登录名:</label><label class="stage2_item_value">从化新兴金属（脚轮）<span class="stage2_call_me">给我留言</span></label>
                  </div>
                  <div class="stage2_item_con">
                    <label class="stage2_item_key">支付宝账户:</label><label class="stage2_item_value">从化新兴金属（脚轮）</label>
                  </div>
                </div>
                <div class="stage3_seller_box">
                  <div class="stage2_item_con">
                    <label class="stage2_item_key">电话:</label><label class="stage2_item_value">从化新兴金属（脚轮）</label>
                  </div>
                  <div class="stage2_item_con">
                    <label class="stage2_item_key">手机:</label><label class="stage2_item_value">从化新兴金属（脚轮）</label>
                  </div>
                  <div class="stage2_item_con">
                    <label class="stage2_item_key">订单号:</label><label class="stage2_item_value stage2_info_color">从化新兴金属（脚轮）</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="init stage3_goods">
              <div class="stage2_reason_desc stage3_seller_title">退款货品列表</div>
              <el-row class="refund_item_row stage3_seller_table">
                <el-col :span="10">货品</el-col>
                <el-col :span="3">单价（元）</el-col>
                <el-col :span="3">数量</el-col>
                <el-col :span="4">可退金额（元）</el-col>
                <el-col :span="4">货品状态</el-col>
              </el-row>
              <div class="refund_grid_box stage3_seller_table">
                <el-row class="refund_grid stage2_grid" type="flex" v-for="i in 3" :key="i">
                  <el-col :span="10" class="refund_desc">
                  <router-link :to="{path: '/detail', query:{goodsId: 111}}" class="a_box">
                    <img class="nest_img" src="static/img/mk_logo_login.png">
                  </router-link>
                  <div class="nest-desc">
                    <router-link :to="{path: '/detail', query:{goodsId: 121212}}">
                      <span class="nest-desc-one stage2_info_color">tttitle</span>
                    </router-link>
                    <span>规格: ll</span>
                  </div>
                  </el-col>
                  <el-col :span="3">￥28.00</el-col>
                  <el-col :span="3">1</el-col>
                  <el-col :span="4">￥28.00</el-col>
                  <el-col :span="4" class="stage3_seller_status"><span>已发货</span><span>已发货</span></el-col>
                </el-row>
              </div>
              <p class="stage3_seller_table stage3_seller_total">退款金额:<span class="stage2_info_color">&nbsp;28:00</span>元(<span class="stage2_info_color">8:00</span>元货品金额&nbsp;+<span class="stage2_info_color">&nbsp;10:00</span>元运费金额)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <pageFooter class="footer"></pageFooter>
  </div>
</template>
<script>
import shortcut from '@/components/shortcutHeader'
import userNav from '@/components/userNav'
import pageFooter from '@/components/pageFooter'
export default {
  data () {
    return {}
  },
  components: { shortcut, userNav, pageFooter },
  methods: {
  }
}
</script>
<style>
/* 取消订单 */
  .orderRefund {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  .footer {
    margin-top: auto;
    border-top: 50px solid #f5f5f5;
  }
  .can_order_box {
  }
  .can_order {
    margin: 0 auto;
    width:660px;
    background:rgba(255,255,255,1);
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
    text-align: left;
  }
  textarea:hover, textarea:focus, select:hover, select:focus, button:hover, button:focus, input:focus, input:hover, label:hover, label:focus, option:focus, option:hover{
    outline: none;
  }
  select:hover, select {
    border: 1px solid #8E8E8E;
  }
  select::-ms-expand{ display: none; }
  input[type="button"], input[type="submit"], input[type="search"], input[type="text"], input[type="reset"], textarea {
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
/* 申请退款提示 */
  .can_pick.refund_btn {
    padding: 10px 0;
  }
  .refund_sub {
    margin-right: 0;
  }
/* 申请退款 */
  .regret_order {
    width: 1226px;
    margin: 0 auto;
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
    text-align: left;
    color: #000;
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
  .refund_grid_box {
    box-sizing: border-box;
    border: 1px solid #CDCDCD;
  }
  .refund_grid {
    padding: 16px 0;
    border-bottom: 1px solid #CDCDCD;
    display: flex;
  }
  .refund_grid:last-child {
    border-bottom: none;
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
/* 退款阶段一底部信息 */
  .refund_tip {
    margin-top: 14px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    font-size: 14px;
    color: #000000;
  }
  .back_box {
    margin-bottom: 10px;
    display: flex;
  }
  .back_box span + span {
    font-size: 13px;
    color: #5B5B5B;
    display: flex;
    align-items: center;
    margin-left: 10px;
  }
  .back_box span + span :nth-child(n){
    cursor: pointer;
  }
  .refund_select_num {
    font-size: 13px;
    color: #5B5B5B;
    margin-bottom: 10px;
  }
  .refund_num {
    color: #E53031;
  }
  .refund_total {
    margin-bottom: 16px;
  }
  .reufnd_other_tip {
    color: #008AFF;
    margin-bottom: 8px;
    font-size: 12px;
    display: flex;
    align-items: center;
  }
  .reufnd_other_radio {
    margin-right: 4px;
    width: 5px;
    height: 5px;
    background: rgba(0, 138, 255, 1);
    border-radius: 50%;
  }
/* 退款阶段二  */
  .stage2_grid {
    padding: 16px 14px;
  }
  .stage2_select_num {
    flex-direction: column;
    align-items: flex-end;
  }
  .stage2_item_num {
    width:90px;
    height:21px;
    border:1px solid rgba(205,205,205,1);
  }
  .stage2_reason {
    padding: 11px 0;
    text-align: left;
  }
  .stage2_reason_desc {
    font-size: 18px;
    color: #000;
    padding-bottom: 13px;
  }
  .stage2_reason_tip {
    font-size: 15px;
    color: #777777
  }
  .stage2_info {
    display: flex;
    background-color: #F7F7F7;
    border: 1px solid #CDCDCD;
  }
  .stage2_info_order {
    width: 426px;
    padding: 19px 20px;
    padding-left: 50px;
    flex-shrink: 0;
  }
  .stage2_info_seller {
    border-left: 1px solid #CDCDCD;
    flex-grow: 1;
  }
  .stage2_info_title {
    padding-left: 28px;
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
    width: 100px;
    text-align: right;
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
  .stage2_pick .stage2_item_key{
    width: 132px;
    color: #000;
    margin-right: 10px;
  }
  #goodsDesc, #goodsDescNot {
    margin: 0 2px;
    margin-top: 4px;
  }
  .stage2_pick_status_tip {
    font-size: 14px;
    color: #4A4A4A;
    padding: 8px 5px;
    background-color: #FFFDD8;
    border:1px dashed rgba(255,210,0,1);
    margin-left: 28px;
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
  .stage2_pick_flow {
    color: #9B9B9B;
    font-size: 14px;
    margin-left: 20px;
    background:rgba(211,227,255,1);
    border:1px solid rgba(155,155,155,1);
    border-radius:10px;
    padding: 0px 8px;
  }
  .stage2_pick_user_flow {
    align-items: flex-start !important;
  }
  .stage2_pick_user_flow  .stage2_item_key{
    flex-shrink: 0;
  }
  .stage_pick_other {
    width: 911px;
    height:135px;
    font-family: "Helvetica Neue", "Microsoft Yahei";
  }
  .stage2_pick_flow_tip {
    font-size: 15px;
    color: #8E8E8E;
    padding: 10px 7px;
  }
  .stage_pick_word {
    margin: 9px 0;
    padding-right: 13px;
    text-align: right;
  }
  .stage2_file {
    background-color: #EEEEEE;
    border:1px solid rgba(151,151,151,1);
    width:911px;
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
  .file_tip_tip {
    margin: 10px 0 30px;
  }
/* 退款阶段三 */
  .stage3_end {
    padding: 20px 15px;
    background:rgba(248,254,255,1);
    border:1px solid rgba(217,217,217,1);
    color: #333333;
  }
  .stage3_end, .stage3_end :nth-child(n), .stage2_reason_desc{
    text-align: left;
  }
  .stage3_end>:nth-child(n) {
    margin-bottom: 10px;
  }
  .stage3_end_time {
    border: 1px dashed #E53031;
    padding: 8px;
  }
  .stage3_end_back {
    margin-left: 8px;
  }
  .stage3_end_back>span:first-child {
    border:1px solid rgba(142,142,142,1);
    background:linear-gradient(0deg,rgba(219,219,219,1) 0%,rgba(255,255,255,1) 100%);
    padding: 3px;
    border-radius: 4px;
    margin-right: 13px;
  }
  .stage3_end_back>span+span {
    color: #3C81FF;
  }
  .stage3_tip {
    padding: 12px 40px;
    background-color: #FFF8F2;
    border: 1px solid #D73331;
  }
  .stage3_tip_handle {
    margin: 13px 0;
  }
  .stage3_info_title {
    width: 469px;
    height: 28px;
    margin-top: 20px;
    border-bottom: 1px solid rgba(172, 172,172,1);
    position: relative;
    z-index: 10;
    margin-bottom: -1px;
  }
  .stage3_info_title_item {
    width: 220px;
    height: 27px;
    text-align: center;
    line-height: 27px;
    float: left;
    border:1px solid rgba(172,172,172,1);
    border-radius:5px 5px 0px 0px;
    border-bottom-color: rgba(172,172,172,1);
    margin-bottom: -1px;
  }
  .stage3_info_title_item + .stage3_info_title_item {
    margin-left: 25px;
  }
  .stage3_info_title_item.stage3_info_title_active {
    border-bottom-color: #FFFFFF;
    color: #E53031;
  }
  .stage3_info_con {
    clear: both;
    flex-shrink: initial;
    width: initial;
    padding: 13px;
    border: 1px solid #ACACAC;
    position: relative;
    z-index: 4;
  }
  .stage3_info_con .stage2_item_key {
    width: 132px;
  }
  .stage3_info_con2 {
    font-size: 15px;
    color: #4F4F4F;
    display: flex;
  }
  .stage3_info_con2:first-child{
    padding-top: 54px;
    border-bottom: 1px solid #B5B5B5;
  }
  .stage3_info_con2 + .stage3_info_con2{
    padding-top: 10px;
  }
  .stage3_info_con2_2 {
    min-width: 18%;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  .stage3_info_con2_2>:nth-child(n) {
    margin-bottom: 10px;
  }
  .stage3_info_con2_3 {
    padding-left: 30px;
    flex-shrink: 0;
    width: 35%;
  }
  .stage3_info_con2_3 .stage2_item_key{
    width: 100px;
    flex-shrink: 0;
  }
  .stage3_info_con2_5 {
    padding-left: 30px;
    flex-grow: 1;
    display: flex;
    flex-wrap: wrap;
  }
  .stage3_info_con2_user {
    text-align: right;
  }
  .stage3_info_con2_desc_3 {
    font-size: 16px;
    margin-bottom: 10px;
  }
  .stage3_info_con2_5_a {
    width: 80px;
    height: 80px;
    overflow: hidden;
  }
  .stage3_info_con2_5_img {
    max-width: 80px;
    max-height: 80px;
  }
  .stage3_seller, .stage3_goods {
    border:1px solid rgba(172,172,172,1);
    border-bottom: none;
    margin-top: 3px;
    padding: 9px 18px;
  }
  .stage3_seller_title {
    border-left: 4px solid #E53031;
    padding-left: 4px;
    padding-bottom: 0;
  }
  .stage3_seller_con {
    display: flex;
    padding: 13px 26px;
  }
  .stage3_seller_box + .stage3_seller_box {
    margin-left: 65px;
  }
  .stage3_seller_con .stage2_item_con .stage2_item_key {
    width: initial;
    font-size: 15px;
  }
  .stage3_seller_con .stage2_item_con .stage2_item_value {
    font-size: 15px;
  }
  .stage3_goods {
    border:1px solid rgba(172,172,172,1);
    border-top: none;
  }
  .stage3_seller_table.refund_item_row.el-row{
    padding: 0 14px;
    color: #000;
  }
  .stage3_seller_status {
    flex-direction: column;
  }
  .stage3_seller_table {
    width: 880px;
  }
  .stage3_seller_total {
    text-align: right;
    padding: 9px 0px 20px 0;
  }
</style>
