<template>
  <div class="con-wrap">
    <p class="userPageTitle">退款维权</p>
    <p class="userPageTab">
      <span class="pageTabActive">退款管理</span>
    </p>
    <div class="content">
      <div class="choose">
        <div class="choose-item">
          <span class="group">
            <label>退款类型：</label>
            <el-select v-model="value1" placeholder="请选择" size="mini" class="short">
              <el-option
                v-for="item in options1"
                :key="item.value1"
                :label="item.label"
                :value="item.value1">
              </el-option>
            </el-select>
          </span>
          <span class="group">
            <label>退款时间：</label>
    <el-date-picker
      v-model="stime"
      type="datetimerange"
      value-format = "yyyy-MM-dd HH:mm:ss"
      :picker-options="pickerOptions"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      align="right">
    </el-date-picker>
          </span>
        </div>
        <div class="choose-item">
          <span class="group">
            <label>退款状态：</label>
              <el-select v-model="value3" placeholder="请选择" size="mini" class="short">
              <el-option
                v-for="item in options3"
                :key="item.value3"
                :label="item.label"
                :value="item.value3">
              </el-option>
            </el-select>
          </span>
<!--          <span class="group">-->
<!--              <label>垫付状态：</label>-->
<!--               <el-select v-model="value4" placeholder="请选择" size="mini" class="long">-->
<!--                <el-option-->
<!--                  v-for="item in options4"-->
<!--                  :key="item.value4"-->
<!--                  :label="item.label"-->
<!--                  :value="item.value4">-->
<!--                </el-option>-->
<!--              </el-select>-->
<!--            </span>-->
          <span class="group">
              <label>小二介入：</label>
                           <el-select v-model="value2" placeholder="请选择" size="mini" class="short">
              <el-option
                v-for="item in options2"
                :key="item.value2"
                :label="item.label"
                :value="item.value2">
              </el-option>
            </el-select>
            </span>
      </div>
        <button @click="ComprehensiveQuery">提交</button>
      </div>
      <div class="refund">
        <ul class="refund-title">
          <li>宝贝</li>
          <li>退款金额</li>
          <li>申请时间</li>
          <li>服务类型</li>
          <li>退款状态</li>
          <li>交易操作</li>
        </ul>
        <ul class="refund-list">
          <li class="refund-item">
            <p class="item-title">
              <span></span>
              <span>订单号</span>
              <span>飞科旗舰店 <img src="static/img/user/user_part.png"></span>
            </p>
            <div class="item-info">
              <img src="static/img/user/user_demo2.png">
              <p class="info-title">
                <span>飞科(FLYCO)电吹风机家用FH6232大功率吹风筒  2000W</span>
                <span class="color-type">颜色分类：01</span>
              </p>
              <span class="textColorOrange">¥4</span>
              <span class="info-date">2018-12-01 15:21:43</span>
              <span>仅退款</span>
              <span class="textColorBlue">退款成功</span>
              <span>服务详情</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="can_order_box" data-attr="取消订单" v-if="Box">
      <div class="init can_order">
        <div class="init can_con">
          <div class="init can_title">
            <img class="can_title_logo" src="static/img/mk_logo_login.png"><span>退款退货</span>
          </div>
          <div v-show="evaluate">
            <div class="noteorder">
              <div class="stepsnew">
                <ul>
                  <li :class="successimg=0 ? navs : navs1">1、申请退货退款</li>
                  <li :class="successimg=1 ? navs : navs1">2、填写退货原因、退款金额</li>
                  <li :class="successimg=2 ? navs : navs1">3、退货处理</li>
                  <li :class="successimg=3 ? navs : navs1">4、退货完成</li>
                </ul>
              </div>
              <div class="Switchtab">
                <span :class="successimg=0 ? switchspan1 : switchspan2">卖家已发的货品</span><span :class="successimg=1 ? switchspan1 : switchspan2">卖家未发的货品</span>
              </div>
              <div class="shoplist">
                <table>
                  <tr>
                    <td>货品</td>
                    <td>单价（元）</td>
                    <td>数量</td>
                    <td>优惠（元）</td>
                    <td>可付金额（元）</td>
                    <td>货品状态</td>
                    <td>退款数量</td>
                  </tr>
                  <tr style="border: 1px solid #CDCDCD">
                    <td>商品图片|商品介绍</td>
                    <td>￥28.00</td>
                    <td>1</td>
                    <td>￥00.00</td>
                    <td>￥28.00</td>
                    <td>已发货</td>
                    <td><input type="number"></td>
                  </tr>
                </table>
              </div>
            <div class="init can_pick">
              <button class="init can_btn btn_sub_set" @click="closeevaluate">确定</button>
            </div>
          </div>
          <div class="can_close"><i class="el-icon-close" @click="closeevaluate"></i></div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      stime: '',
      beginTime: '',
      endTime: '',
      pageNum: 1, // 选择当前页
      pageSize: 8, // 页上的条数
      evaluate: false,
      Box: false, // 退款弹窗
      username: '',
      Authorization: this.$cookies.get('token'),
      successimg: 0, // 样式切换
      navs: 'navs', // 选中
      navs1: 'navs1',
      switchspan1: 'switchspan1',
      switchspan2: 'switchspan2',
      userid: '',
      list: '',
      options1: [
        {value1: '0', label: '全部'},
        {value1: '1', label: '售中退款'},
        {value1: '2', label: '售后退款'}],
      options2: [
        {value2: '0', label: '否 '},
        {value2: '1', label: '是 '},
        {value2: '2', label: '全部'}],
      options3: [
        {value3: '0', label: '全部'},
        {value3: '1', label: '待卖家同意'},
        {value3: '2', label: '待卖家发货'},
        {value3: '3', label: '待买家退货'},
        {value3: '4', label: '待卖家确认收货'},
        {value3: '5', label: '退款/退货成功'},
        {value3: '6', label: '退款/退货关闭'}]
      // options4: [
      //   {value4: '选项1', label: '全部'},
      //   {value4: '选项2', label: '先行垫付，待商家处理'},
      //   {value4: '选项3', label: '先行垫付，退款成功'},
      //   {value4: '选项4', label: '先行垫付，退款关闭'},
      //   {value4: '选项5', label: '先行垫付，商家拒绝退款'}]
    }
  },
  mounted () {
    this.username = this.$store.state.user.userInfo.username
  },
  methods: {
    openevaluate () {
      this.Box = true
      this.evaluate = true
    },
    closeevaluate () {
      this.Box = false
      this.evaluate = false
    },
    // 根据综合条件进行查询
    ComprehensiveQuery () {
      // this.beginTime = this.stime[0].replace('+', ' ')
      // this.endTime = this.stime[1].replace('+', ' ')
      this.API.ComprehensiveQuery({Authorization: this.Authorization, beginTime: this.beginTime, endTime: this.endTime, buyerId: this.username, refundStatus: this.value1, intervention: this.value2, saleStatus: this.value3}).then(res => {
        if (res.success === false) {
        }
        this.list = res
        console.log(this.list)
      })
    },
    // 根据退款状态查询退单
    Refundstatusinquiryrefund () {
      this.API.Refundstatusinquiryrefund({pageNum: this.pageNum, pageSize: this.pageSize, saleStatus: this.value3}).then(res => {
        if (res.success === false) {
        }
      })
    },
    // 根据退款类型查询退单
    RefundTypeInquiryReturnForm () {
      this.API.RefundTypeInquiryReturnForm({pageNum: this.pageNum, pageSize: this.pageSize, refundStatus: this.value1}).then(res => {
        if (res.success === false) {
        }
      })
    },
    // 根据退款时间查询订单
    Refundtimeinquiryorder () {
      this.API.Refundtimeinquiryorder({pageNum: this.pageNum, pageSize: this.pageSize, beginTime: this.stime[0], enddTime: this.stime[1], buyerId: this.username}).then(res => {
        if (res.success === false) {
        }
      })
    },
    // 根据小二是否介入查询
    findIntervention () {
      this.API.findIntervention({pageNum: this.pageNum, pageSize: this.pageSize, intervention: this.value2, buyerId: this.username}).then(res => {
        if (res.success === false) {
        }
      })
    }
  }
}
</script>
<style scoped>
 @import "../../../assets/css/user/user-homePage.css";
  .con-wrap{
    height:1124px;
    font-size:14px;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
  }
  .content{
    padding: 30px 0 0 30px;
    text-align: left;
  }
  .choose .choose-item{
    margin-bottom: 20px;
  }
  .choose .group{
    margin-right: 20px;
    color:#878787;
  }
  .choose .group>input{
    width:180px;
    height:28px;
    border:2px solid rgba(227,227,227,1);
    border-radius:2px;
    padding-left: 10px;
  }
  .choose .short{
    width:120px;
  }
 .choose .long{
   width:188px;
 }
  .choose>button{
    width:150px;
    height:30px;
    background:rgba(255,70,6,1);
    border-radius:2px;
    color:rgba(255,255,255,1);
  }
  .refund .refund-title{
    width:1023px;
    height:40px;
    background:rgba(244,244,244,1);
    border:1px solid rgba(227,227,227,1);
    margin: 30px 0 20px 0;
    line-height: 40px;
    font-weight:300;
    color:rgba(135,135,135,1);
    display: flex;
    justify-content: space-around;
  }
 .refund .refund-title >li:first-child{
   margin: 0 160px 0 100px;
 }
  .refund .refund-item{
    width:1023px;
    height:134px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(227,227,227,1);
    margin-bottom: 20px;
  }
 .refund .item-title{
   width:1023px;
   height:31px;
   background:rgba(244,244,244,1);
   color:rgba(163,163,163,1);
   line-height: 31px;
   padding-left: 24px;
 }
 .refund .item-title>span{
   margin-right: 20px;
 }
 .refund  .item-info{
   font-size: 13px;
   padding: 10px 0px 0 20px;
   display: flex;
   justify-content: space-between;
 }
  .refund .info-title{
    width: 249px !important;
    text-align: left !important;
    margin-left: 20px;
  }
 .refund .info-title .color-type{
   margin-top: 5px;
   color:#A3A3A3;
 }
 .refund  .item-info>span{
   width:130px;
   text-align: center;
 }
  .textColorOrange{
    color:#FF4606;
  }
 .textColorBlue{
   color:#7A9DF6;
 }
 /*.group ul,ul>li{*/
 /*  display: block !important;*/
 /*}*/
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
   width:1184px;
   height:1100px;
   background:rgba(255,255,255,1);
   border:10px solid rgba(142, 142, 142, 0.26);
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
 .can_title span {
   width: 120px;
   height: 45px;
   font-size: 24px;
   line-height: 45px;
   border-left: 1px solid #6A6A6A;
 }
 .can_title_logo {
   max-width: 70px;
   max-height: 40px;
 }
 .can_title_head {
   color: #4E4E4E;
   font-size: 18px;
   font-family:SourceHanSansCN-Regular;
   font-weight:400;
 }
 .can_title_head span{
   font-size:14px;
   font-family:SourceHanSansCN-Regular;
   font-weight:400;
   color:rgba(78,78,78,1);
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
 }
 .stepsnew {
   margin-top: 30px;
 }
 .stepsnew ul {
   width: 1100px;
   height: 40px;
 }
 .shoplist table{
   margin-top: -10px;
   width: 1062px;
   height: 139px;
   border-collapse: collapse;
 }
 .Switchtab {
  text-align: left;
   margin-top: 20px;
 }
 .switchspan1 {
   width:141px;
   height:21px;
   font-size:16px;
   font-family:SourceHanSansCN-Regular;
   font-weight:400;
   color:rgba(0,0,0,1);
   line-height:20px;
   border:1px dashed rgba(215,51,49,1);
   border-radius:11px;
   margin-top: 20px;
   text-align: center;
 }
 .switchspan2{
   width:141px;
   height:21px;
   font-size:16px;
   font-family:SourceHanSansCN-Regular;
   font-weight:400;
   color: #FFFFFF;
   line-height:20px;
   background:rgba(215,51,49,1);
   border-radius:11px;
   margin-top: 20px;
   text-align: center;
 }
 .navs {
   width: 220px;
   padding: 0px 10px 0 20px;
   line-height: 40px;
   background: #D6D6D6;
   display: inline-block;
   color: #000000;
   font-size: 15px;
   font-weight: 400;
   position: relative;
 }
 .navs:after {
   content: '';
   display: block;
   border-top: 20px solid #D6D6D6;
   border-bottom: 20px solid #D6D6D6;
   border-left: 20px solid #fff;
   position: absolute;
   right: -20px;
   top: 0;
 }
 .navs:after{
   content: '';
   display: block;
   border-top: 20px solid transparent;
   border-bottom: 20px solid transparent;
   border-left: 20px solid #D6D6D6;
   position: absolute;
   right: -20px;
   top: 0;
   z-index: 10;
 }
 .navs:before {
   content: '';
   display: block;
   border-top: 20px solid #D6D6D6;
   border-bottom: 20px solid #D6D6D6;
   border-left: 20px solid #fff;
   position: absolute;
   left: 0px;
   top: 0;
 }
 .navs:first-child {
   border-radius: 4px 0 0 4px;
   padding-left: 25px;
 }

 .navs:last-child,
 .cssNavEnd {
   border-radius: 0px 4px 4px 0px;
   padding-right: 25px;
 }

 .navs:first-child:before {
   display: none;
 }

 .navs:last-child:after,
 .cssNavEnd:after {
   display: none;
 }

 .navs.active {
   background-color: #ef72b6;
 }

 .navs.active:after {
   border-left-color: #ef72b6;
 }
 .navs1  {
   width: 220px;
   padding: 0px 10px 0 20px;
   line-height: 40px;
   background: #E53031;
   display: inline-block;
   color: #FFFFFF;
   font-size: 15px;
   font-weight: 400;
   position: relative;
 }
 .navs1 img {
   width: 18px;
   height: 18px;
   position: relative;
   top:2px;
 }
 .navs1:after {
   content: '';
   display: block;
   border-top: 20px solid #E53031;
   border-bottom: 20px solid #E53031;
   border-left: 20px solid #fff;
   position: absolute;
   right: -20px;
   top: 0;
 }

 .navs1:after{
   content: '';
   display: block;
   border-top: 20px solid transparent;
   border-bottom: 20px solid transparent;
   border-left: 20px solid #E53031;
   position: absolute;
   rightright: -20px;
   top: 0;
   z-index: 10;
 }
 .navs1:before {
   content: '';
   display: block;
   border-top: 20px solid #E53031;
   border-bottom: 20px solid #E53031;
   border-left: 20px solid #fff;
   position: absolute;
   left: 0px;
   top: 0;
 }

 .navs1:first-child {
   border-radius: 4px 0 0 4px;
   padding-left: 25px;
 }

 .navs1:last-child,
 .cssNavEnd {
   border-radius: 0px 4px 4px 0px;
   padding-right: 25px;
 }

 .navs1:first-child:before {
   display: none;
 }

 .navs1:last-child:after,
 .cssNavEnd:after {
   display: none;
 }

 .navs1.active {
   background-color: #ef72b6;
 }

 .navs1.active:after {
   border-left-color: #ef72b6;
 }
</style>
