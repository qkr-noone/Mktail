<template>
  <div class="con-wrap">
    <div >
      <ul class="top">
        <li class="comment-quantity border">
          <p>待评商品</p>
          <p class="quantity">0</p>
        </li>
        <li class="comment-quantity  evaluated">
          <p>已评商品</p>
          <p class="quantity">0</p>
        </li>
        <li class="comment-tip border">
          <span>发评价，得云钻，积少成多换礼品<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;评价数量已超过0%的用户啦</span>
        </li>
        <li class="comment-tip">
          <p class="tip">评价小贴士</p>
          <span>发表评价就有机会获得云钻云钻详细规则带图或者被评为精华的图片有机会获得更多的云钻手机发表评价更方便</span>
        </li>
      </ul>
    </div>
    <div class="tab">
      <div class="tab-title" :class="{tabTitleActive:assessCommodity===true}" @click="tabTitleChange(true)">待评商品</div>
      <div class="tab-title tab-titleActive" :class="{tabTitleActive:assessCommodity===false}" @click="tabTitleChange(false)">已评商品</div>
      <div class="recovery orientate"  v-show="assessCommodity===false">
        <img src="static/img/user/user_delete1.png">
        <span>回收订单</span>
      </div>
    </div>
    <div class="order-tab" v-show="assessCommodity" >
      <ul>
        <li class="order-item order-itemActive">全部订单</li>
        <li class="order-item">线上订单</li>
        <li class="order-item">门店订单</li>
      </ul>
      <div class="recovery">
        <img src="static/img/user/user_delete1.png">
        <span>回收订单</span>
      </div>
    </div>
    <div class="assess-wares" v-show="assessCommodity1">
      <ul  v-for="item in unevaluatedorders" :key="item.skuId" class="wares-list">
        <li class="wares-item">
          <div class="item-title">
            <ul>
              <li>订单详情</li>
              <li>状态</li>
              <li>操作</li>
            </ul>
          </div>
          <div>
            <ul class="item-info">
              <img src="static/img/user/user_demo1.png">
              <li class="info-title">{{item.title}}</li>
              <li class="info-num">X1</li>
              <li>未评价</li>
              <li>
                <a>订单详情</a><br>
                <a  @click="dialogTableVisible = true"  class="textBlue">添加评价</a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div class="no-order" v-show="noorder">
      <p>您现在还没有未评价订单</p>
    </div>
    <div  class="assess-wares" v-if="assessCommodity2">
      <ul class="wares-list" v-for="item in evaluatedorders" :key="item.skuId" >
        <li class="wares-item">
          <div class="item-title">
            <ul>
              <li>订单详情</li>
              <li>状态</li>
              <li>操作</li>
            </ul>
          </div>
          <div>
            <ul class="item-info">
              <img src="static/img/user/user_demo1.png">
              <li class="info-title">{{item.title}}</li>
              <li class="info-num">X1</li>
              <li><i class="el-icon-warning"></i></li>
              <li>
                <a>订单详情</a><br>
                <a @click="amendcomment" class="textBlue">修改评价</a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div class="no-order" v-show="order">
      <p>您现在还没有已评价订单</p>
    </div>
    <div class="dialog">
    <el-button type="text" @click="openBox()">打开</el-button>
    </div>
    <div class="can_order_box" data-attr="取消订单" v-if="Box">
      <div class="init can_order">
        <div class="init can_con">
          <div class="init can_title">
            <img class="can_title_logo" src="static/img/mk_logo_login.png">
          </div>
          <div v-show="evaluate">
          <div class="can_title_head">货品评价 <span>共有<span>item.num</span>个货品需要评价</span> <span @click="opennote(true)" class="notepj">评价须知</span></div>
            <div class="noteorder">
              <div class="commodity">
                <img  src='/static/img/mk_pay_h_box.png' />
                <span class= 'tz'>大金属通用对拷电动伸 缩门卷帘闸门车库门道 闸遥控器钥匙315/433 </span>
                <span class = fontstyle>
                  ¥28.00
                  </span>
              </div>
              <div class="comment">
                <span class="score">请选择我的评分:</span><el-rate v-model="value1"></el-rate>
                <el-input
                  type="textarea"
                  class="scoreinput"
                  placeholder="写点评价吧，您的评价对其他买家有很大的帮助(最多100字)"
                  v-model="value2"
                  maxlength="100"
                  :autosize="{ minRows: 5, maxRows: 5}"
                  show-word-limit
                >
                </el-input>
                <div style="margin: 20px 0;"></div>
                <div class="upload">
                  <div class="uploadArea">
                    <el-upload
                      v-if="imageUrl.length === 0"
                      action="123"
                      :show-file-list="false"
                      multiple
                      accept='image/jpeg,image/gif,image/png,image/bmp'
                      class="avatar-uploader"
                      :on-success="handleAvatarSuccess"
                      :http-request="httpRequest">
                      <div class="upload">选择文件并上传</div>
                    </el-upload>

                  </div>
                </div>
              </div>
            </div>

<!--          <div class="init can_item">-->
<!--            <p class="can_tip">您确定要取消该订单吗？取消订单后，不能恢复。</p>-->
<!--            <div class="init can_select_box">-->
<!--              <label class="init">请选择取消订单的理由:&nbsp;</label>-->
<!--              <select class="init can_select">-->
<!--                <option value="请选择关闭理由">请选择关闭理由</option>-->
<!--                <option value="我不想买了">我不想买了</option>-->
<!--                <option value="信息填写错误，重新拍">信息填写错误，重新拍</option>-->
<!--                <option value="卖家缺货">卖家缺货</option>-->
<!--                <option value="同城见面交易">同城见面交易</option>-->
<!--                <option value="付款遇到问题（如余额不足、不知道怎么付款等）">付款遇到问题（如余额不足、不知道怎么付款等）</option>-->
<!--                <option value="拍错了">拍错了</option>-->
<!--                <option value="其他原因">其他原因</option>-->
<!--              </select>-->
<!--            </div>-->
<!--            &lt;!&ndash; <textarea class="init can_other" type="textarea" maxlength="100" placeholder="取消订单其他原因..."></textarea> &ndash;&gt;-->
<!--          </div>-->
          <div class="init can_pick">
            <button class="init can_btn btn_sub_set" @click="closeBox">确定</button>
            <button class="init can_btn btn_set" @click="closeBox">取消</button>
          </div>
        </div>
          <div class="notefont" v-show="note">
            <p>&nbsp; &nbsp;  &nbsp;  &nbsp; 用户在成功完成在线交易后，对每一笔交易，交易双方均有权对对方的交易情况作出
            评价，评价记录是猴尾巴用户交易状况的重要标记，用户在进行评价时应保证所作评价公
            正、客观、真实。货品满意度：即采购商对单个交易货品的总体评价，共分为五个星级
            （一星—五星）。货品文字评价：即采购商对交易货品进行具体的文字评价。评价期限：
            订单在线交易成功（指该订单变为交易成功状态）后的30天内。系统自动默认的评价，用
            户不能进行修改。所有评价都以匿名的形式展现。</p>

          </div>
          <p class="noteReturn" @click="opennote(false)" v-show="note">《 返回</p>
        <div class="can_close"><i class="el-icon-close" @click="closeBox"></i></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // import axios from '@axios'
  data () {
    return {
      assessCommodity: true,
      assessCommodity1: false, // 未评价商品显示
      assessCommodity2: false, // 已评价商品显示
      order: false, // 没有已评价订单
      noorder: true, // 没有未评价订单
      loginName: '',
      Box: false, // 弹窗
      evaluate: false, // 商品评价
      note: false, // 评价须知
      unevaluatedorders: [], // 未评价商品列表
      evaluatedorders: [], // 已评价商品列表
      dialogTableVisible: false,
      value1: '',
      value2: '',
      imageUrl: [],
      imageName: [],
      file: [],
      available: '', // 可用
      used: '', // 使用
      imageBox: '',
      progress: 0,
      intercept: false, // 拦截
      listNum: null,
      files: []
    }
  },
  mounted () {
    let upload = {
      // 上传前的判断
      // 参数 DOM上传upload的节点，uploadFiles 上传的文件， num 限定的数量，hasFiles 已存在的文件, size 单张图片限定大小（M, typeList 限定数据格式
      handleUpload: (DOM, uploadFiles, num = 5, hasFiles = [], SIZE_M = 5, typeList = []) => {
        return new Promise(resolve => {
          if (uploadFiles.length + hasFiles.length > num) {
            Notification.warning({
              title: '提示',
              message: '普通上传一次最多可上传' + num + '张'
            })
            return
          }
          // 判断图片大小 、格式
          for (let i = 0; i < uploadFiles.length; i++) {
            let size = uploadFiles[i].size
            if (size > SIZE_M * 1024 * 1024) {
              Notification.warning({
                title: '提示',
                message: uploadFiles[i].name + '这张图片大于' + SIZE_M + 'M'
              })
              return
            }
            if (typeList.length > 0 && typeList.indexOf(uploadFiles[i].type.split('/')[1]) < 0) {
              Notification.warning({
                title: '提示',
                message: uploadFiles[i].name + '这张图片格式不支持'
              })
              return
            }
          }
          for (let i = 0; i < uploadFiles.length; i++) {
            let obj = Object.assign({ blobUrl: URL.createObjectURL(uploadFiles[i]) }, { file: uploadFiles[i] })
            hasFiles.push(obj)
          }
          // 可以重复上传 继续触发change
          DOM.value = ''
          resolve(hasFiles)
        })
      },
      // 过滤图片尺寸 超过HEIGH WIDTH时 等比例缩放
      // file上传的数据，HEIGH 限定的高 WIDTH 限定的宽
      filterWH (file, WIDTH = 1920, HEIGH = 1920) {
        return new Promise(resolve => {
          let reader = new FileReader()
          reader.readAsDataURL(file)
          reader.onload = function (e) {
            // this.result 图片的base64数据
            let img = new Image()
            img.src = this.result
            img.onload = function () { // 事件是异步
              if (this.height > HEIGH || this.width > WIDTH) {
                let [height, width] = []
                if (this.height > this.width) {
                  let rate = this.width / this.height
                  height = HEIGH
                  width = rate * HEIGH
                } else {
                  let rate = this.height / this.width
                  width = WIDTH
                  height = rate * WIDTH
                }
                let canvas = document.createElement('canvas')
                let context = canvas.getContext('2d')
                canvas.width = width
                canvas.height = height
                context.drawImage(this, 0, 0, width, height)
                // canvas => blob
                canvas.toBlob(blob => {
                  resolve(blob)
                }, file.type)
              } else {
                resolve(false)
              }
            }
          }
        })
      },
      // 上传图片
      // papers 上传文件，reqUrl 请求地址， diskId相册id, Authorization 权限验证， callback 回调
      async submitFile (papers, reqUrl, diskId, Authorization, callback, WIDTH = 1920, HEIGH = 1920) {
        let formData = new FormData()
        for (let i = 0; i < papers.length; i++) {
          let file = papers[i].file
          // 判断图片的宽高
          await upload.filterWH(file, WIDTH, HEIGH).then(theBlob => {
            let temFile = file
            if (theBlob) {
              // blob => file
              temFile = new File([theBlob], file.name, { type: theBlob.type })
            }
            formData.append('file', temFile)
          })
        }
      }
    }
    // 获取登录用户名称
    this.API.getUsername().then(res => {
      this.loginName = res.loginName
      // 查询未评价商品列表
      this.API.Unevaluatedorders({userName: res.loginName}).then(rtn => {
        if (rtn.success === false) {
          this.noorder = true
          this.assessCommodity = true
          this.assessCommodity1 = false
        }
        this.unevaluatedorders = rtn
        console.log(rtn)
        this.noorder = false
        this.assessCommodity1 = true
      })
      // 查询评价商品列表
      this.API.Evaluatedorders({userName: res.loginName}).then(red => {
        this.evaluatedorders = red
      })
    })
  },
  methods: {
    tabTitleChange (val) {
      if (val === true) {
        // 查询未评价商品列表
        this.API.Unevaluatedorders({userName: this.loginName}).then(rtn => {
          if (rtn.success === false) {
            this.noorder = true
            this.order = false
            this.assessCommodity1 = false
          }
          this.noorder = false
          this.order = false
          this.assessCommodity = true
          this.assessCommodity1 = true
          this.assessCommodity2 = false
          this.evaluatedorders = rtn
        })
      } else {
        // 查询评价商品列表
        this.API.Evaluatedorders({userName: this.loginName}).then(rtn => {
          if (rtn.success === false) {
            this.noorder = false
            this.order = true
            this.assessCommodity2 = false
          }
          this.noorder = false
          this.order = false
          this.assessCommodity = false
          this.assessCommodity1 = false
          this.assessCommodity2 = true
          this.unevaluatedorders = rtn
        })
      }
    },
    openBox () {
      this.Box = true
      this.evaluate = true
    },
    closeBox () {
      this.Box = false
      this.evaluate = false
      this.note = false
    },
    opennote (e) {
      if (e === true) {
        this.note = true
      } else {
        this.note = false
      }
    },
    // 点击文件列表中已上传的文件时的方法
    handlePictureCardPreview () {
    },
    // 文件上传成功时的钩子
    handleAvatarSuccess () {
    },
    // 文件超出个数限制时的钩子
    chooseImg () {
    },
    // 文件上传失败时的钩子
    updataerror () {
    }
  }
}
</script>
<style scoped>
  ul,ul>li,img,.recovery{
    display: inline-block;
  }
  div,ul,ul>li{
    box-sizing: border-box;
  }
  .con-wrap{
    font-size:14px;
    font-family:SourceHanSansCN-Light;
    font-weight:300;
    text-align: left;
  }
  /**/
  .top{
    height:118px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(231,231,231,1);
    margin: -4px 0 10px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color:#484848;
  }
  .top>li{
    margin-left: -50px;
  }
  .top .comment-quantity{
    width:150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height:56px;
  }
  .top .comment-tip{
    width:260px;
    text-align: left;
    height:66px;
  }
  .top .evaluated{
    width:60px;
    margin-left: -105px;
  }
  .top .quantity{
    font-size:32px;
    font-family:SimHei;
    font-weight:400;
    color:rgba(255,153,0,1);
    margin-top: 10px;
  }
  .border{
    border-right: 1px solid #C2C2C2;
  }
  .top .tip{
    font-weight:500;
    color:#181818;
    margin:-15px 0 10px -20px;
  }
  .top .tip:before{
    content: '*';
    color:#E71600;
  }
  /**/
  .tab{
    height:56px;
    background:rgba(244,244,244,1);
    border:1px solid rgba(224,224,224,1);
    padding-left: 18px;
    padding-top: 12px;
    text-align: left;
    font-size:20px;
    font-family:SimSun;
    font-weight:bold;
    position:relative ;
  }
  .tab-title{
    width:158px;
    height:44px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    display: inline-block;
    line-height: 44px;
    text-align: center;
    color:#454545;
    border: none;
    background: none;
  }
  .tab .orientate{
    position: absolute;
    top:18px;
    right:18px;
    color:rgba(98,98,98,1) !important;
    font-weight:300;
  }
  .tabTitleActive{
    border:1px solid rgba(224,224,224,1);
    color:rgba(255,153,0,1);
    border-bottom: 1px solid #FFFFFF;
    background:rgba(255,255,255,1);
  }
  .order-tab{
    height:56px;
    background:#FFFFFF;
    border:1px solid rgba(224,224,224,1);
    border-top: none;
    line-height: 56px;
    margin-bottom: 5px;
  }
  .order-item{
    width:79px;
    height:25px;
    margin-left: 26px;
    line-height: 25px;
    text-align: center;
    font-size:15px;
    color:#424242;
  }
  .order-itemActive{
    color:#FF9900;
    border:1px solid #FF9900;
  }
  .recovery{
    width:93px;
    height:22px;
    border:1px solid rgba(231,231,231,1);
    border-radius:4px;
    line-height: 20px;
    text-align: center;
    margin-left:650px;
    font-size:13px;
    color:rgba(98,98,98,1);
  }
  .recovery img{
    margin-top: -5px;
  }
  .no-order{
    height:345px;
    border:1px solid rgba(231,231,231,1);
    background:#FFFFFF url('../../../../static/img/user/user_logoBack.png') no-repeat center;
    line-height: 345px;
  }
  .no-order p{
    font-size:18px;
    font-weight:400;
    color:rgba(52,52,52,1);
    text-align: center;
  }
  .assess-wares{
    height:404px;
    border:1px solid rgba(224,224,224,1);
    background: #FFFFFF;
    border-top: none;
  }
  .wares-list{
    display: flex;
    flex-direction: column;
    padding:34px 20px 0 20px;
  }
  .assess-wares .wares-item{
    height:152px;
    border:1px solid #E7E7E7;
    color:#686868;
    margin-bottom: 17px;
  }
  .wares-item .item-title{
    height:41px;
    background:rgba(244,244,244,1);
    line-height: 41px;
  }
  .wares-item .item-title li:first-child{
    margin:0 356px 0 227px;
  }
  .wares-item .item-title li:nth-child(2){
    margin-right: 210px;
  }
  .wares-item .item-info{
    height:111px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 100px 0 17px;
    color:#676767;
  }
  .wares-item .item-info .info-title{
    width:248px;
    margin-left: -80px;
  }
  .wares-item .item-info li a{
    color:#686868;
    margin-bottom: 5px;
  }
  .textBlue{
    color:#3D8AEA !important;
  }
  .wares-item .item-info .info-num{
    margin-left: -100px;
  }
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
    width:1000px;
    height:555px;
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
    border-bottom:  1px solid #6a6a6a;
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
  .notefont{
    width:719px;
    height:197px;
    font-size:18px;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(78,78,78,1);
    line-height:36px;
    text-align: center;
    margin-left: 90px;
  }
  .noteReturn{
    font-weight:400;
    vertical-align: bottom;
    margin-top: 100px;
    margin-left: 20px;
    align-self: flex-end;
  }
  .notepj {
    vertical-align: bottom;
    margin-left: 850px;
    align-self: flex-end;
  }
  .commodity {
    width: 122px;
    height: 200px;
  }
  .commodity img{
    width: 120px;
    height: 120px;
  }
  .commodity span {
    width: 120px;
    height: 45px;
  }
  .noteorder {
    display: flex;
    text-align: left;
  }
  .score {
    float: left;
  }
  .comment {
    width: 500px;
    height: 20px;
    text-align:left;
    margin-left: 50px;
  }
  .scoreinput {
    width: 689px;
    height: 45px;
  }
  .imgstlye{
    width: 400px;
    height: 94px;
    float: left;
    justify-content: space-between;
    /*!*border: 1px solid #8A8A8A;*!*/
    /*margin-right:12px;*/
    margin-top: 80px;
  }
  .imgstlye i{
    float: right;
    width: 66px;
    height: 50px;
    display: block;
    text-align: center;
    padding-top: 42px;
    margin-right: 12px;
    border: 1px solid #8A8A8A;
  }
</style>
