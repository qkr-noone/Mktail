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
             <el-select v-model="value2" placeholder="请选择" size="mini" class="short">
              <el-option
                v-for="item in options2"
                :key="item.value2"
                :label="item.label"
                :value="item.value2">
              </el-option>
            </el-select>
          </span>
          <span class="group">
            <label>从：</label>
             <el-date-picker
               v-model="startTime"
               type="datetime"
               size="mini"
               placeholder="选择日期时间"
               default-time="12:00:00" class="long">
             </el-date-picker>
            <label>到：</label>
             <el-date-picker
               v-model="endTime"
               type="datetime"
               size="mini"
               placeholder="选择日期时间"
               default-time="12:00:00" class="long">
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
          <span class="group">
              <label>垫付状态：</label>
               <el-select v-model="value4" placeholder="请选择" size="mini" class="long">
                <el-option
                  v-for="item in options4"
                  :key="item.value4"
                  :label="item.label"
                  :value="item.value4">
                </el-option>
              </el-select>
            </span>
          <span class="group">
              <label>小二介入：</label>
               <input class="long" type="text" placeholder="全部">
            </span>
      </div>
        <button>提交</button>
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
              <span>2018-12-05 20:59:00</span>
              <span>定单号300382019621354414</span>
              <span>飞科旗舰店 <img src="static/img/user/user_part.png"></span>
            </p>
            <div class="item-info">
              <img src="static/img/user/user_demo2.png">
              <p class="info-title">
                <span>飞科(FLYCO)电吹风机家用FH6232大功率吹风筒  2000W</span>
                <span class="color-type">颜色分类：01</span>
              </p>
              <span class="textColorOrange">¥45.00</span>
              <span class="info-date">2018-12-01 15:21:43</span>
              <span>仅退款</span>
              <span class="textColorBlue">退款成功</span>
              <span>服务详情</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      startTime: '2018-10-19 12:25:03',
      endTime: '2018-12-19 13:12:03',
      value1: '全部',
      value2: '最近申请',
      value3: '全部',
      value4: '全部',
      options1: [
        {value1: '选项1', label: '全部'},
        {value1: '选项2', label: '售中退款'},
        {value1: '选项3', label: '售后退款'}],
      options2: [
        {value2: '选项1', label: '最近申请'},
        {value2: '选项2', label: '全部'},
        {value2: '选项3', label: '售后退款'}],
      options3: [
        {value3: '选项1', label: '全部'},
        {value3: '选项2', label: '进行中的订单'},
        {value3: '选项3', label: '退款待处理'},
        {value3: '选项4', label: '已拒绝退款'},
        {value3: '选项5', label: '待买家发货'},
        {value3: '选项6', label: '待商家发货'},
        {value3: '选项7', label: '退款关闭'},
        {value3: '选项8', label: '退款成功'}],
      options4: [
        {value4: '选项1', label: '全部'},
        {value4: '选项2', label: '先行垫付，待商家处理'},
        {value4: '选项3', label: '先行垫付，退款成功'},
        {value4: '选项4', label: '先行垫付，退款关闭'},
        {value4: '选项5', label: '先行垫付，商家拒绝退款'}]
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
   width:180px;
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
 .group ul,ul>li{
   display: block !important;
 }
</style>
