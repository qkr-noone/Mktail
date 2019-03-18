<template>
  <div>
    <shortcut></shortcut>
    <live3Dheader :title="liveTitel" :goodsId="goodsId"></live3Dheader>
    <div class="live-con">
      <div>
        <div class="live-box">
          <div class="page-select">
            <h4>直播画面</h4>
            <span class="span-li page-item" @mouseenter="isShowLayout()" @mouseleave="isHiddenLayout()">
              <span>画面布局</span>
                <a href="javascript:;"><img v-show="choosePage==='page1'" src="static/img/mk_page_1.png">
                <img v-show="choosePage==='page4'" src="static/img/mk_page_4.png">
                <img v-show="choosePage==='page9'" src="static/img/mk_page_9.png"></a>
              <ul class="page-ul" v-show="isLayout">
                <li class="page-li"><a href="javascript:;" @click="choosePage='page1'"><img src="static/img/mk_page_1_1.png"></a></li>
                <li class="page-li"><a href="javascript:;" @click="choosePage='page4'"><img src="static/img/mk_page_4_4.png"></a></li>
                <li class="page-li"><a href="javascript:;" @click="choosePage='page9'"><img src="static/img/mk_page_9_9.png"></a></li>
              </ul>
            </span>
            <span class="span-li"><span>弹屏</span><a href="javascript:;"><img src="static/img/mk_live_tanping.png"></a></span>
            <span class="span-li"><a href="javascript:;"><img src="static/img/mk_live_service.png"></a><span>客服</span></span>
          </div>
          <div class="live">
            <div class="live-ul" data-attr='page1' v-if="choosePage === 'page1' ">
              <div class="live-list live-page1">
                <a><iframe class="live_iframe" ref="iframe0" v-bind:src="liveSource1" frameborder="0" scrolling="no"></iframe>
                  <div class="iframeMask" @click="activePage($event, 'liveSource1')">
                  </div>
                </a>
              </div>
            </div>
            <div class="live-ul"  data-attr='page4' v-if="choosePage === 'page4' ">
              <div class="live-list">
                <a><iframe class="live_iframe" data-dd='1' ref="iframe0" v-bind:src="liveSource1" frameborder="0" scrolling="no"></iframe>
                  <div class="iframeMask" @click="activePage($event, 'liveSource1')">
                  </div>
                </a>
              </div>
              <div class="live-list">
                <a><iframe class="live_iframe" ref="iframe1" v-bind:src="liveSource2" frameborder="0" scrolling="no"></iframe>
                  <div class="iframeMask" @click="activePage($event, 'liveSource2')">
                  </div>
                </a>
              </div>
              <div class="live-list">
                <a><iframe class="live_iframe" ref="iframe2" v-bind:src="liveSource3" frameborder="0" scrolling="no"></iframe>
                  <div class="iframeMask" @click="activePage($event, 'liveSource3')">
                  </div>
                </a>
              </div>
              <div class="live-list">
                <a><iframe class="live_iframe" ref="iframe3" v-bind:src="liveSource4" frameborder="0" scrolling="no"></iframe>
                  <div class="iframeMask" @click="activePage($event, 'liveSource4')">
                  </div>
                </a>
              </div>
            </div>
            <div class="live-ul"  data-attr='page9' v-if="choosePage === 'page9' ">
              <div class="live-list live-page9">
                <a><iframe id="frame1" name="1" class="live_iframe" ref="iframe0" v-bind:src="liveSource1" frameborder="0" scrolling="no"></iframe>
                  <div class="iframeMask" @click="activePage($event, 'liveSource1')">
                  </div>
                </a>
              </div>
              <div class="live-list live-page9 ">
                <a><iframe class="live_iframe" ref="iframe1" v-bind:src="liveSource2" frameborder="0" scrolling="no"></iframe>
                  <div class="iframeMask" @click="activePage($event, 'liveSource2')">
                  </div>
                </a>
              </div>
              <div class="live-list live-page9 ">
                <a><iframe class="live_iframe" ref="iframe2" v-bind:src="liveSource3" frameborder="0" scrolling="no"></iframe>
                  <div class="iframeMask" @click="activePage($event, 'liveSource3')">
                  </div>
                </a>
              </div>
              <div class="live-list live-page9">
                <a><iframe class="live_iframe" ref="iframe4" v-bind:src="liveSource4" frameborder="0" scrolling="no"></iframe>
                  <div class="iframeMask" @click="activePage($event, 'liveSource4')">
                  </div>
                </a>
              </div>
              <div class="live-list live-page9">
                <a><iframe class="live_iframe" ref="iframe5" v-bind:src="liveSource5" frameborder="0" scrolling="no"></iframe>
                  <div class="iframeMask" @click="activePage($event, 'liveSource5')">
                  </div>
                </a>
              </div>
              <div class="live-list live-page9">
                <a><iframe class="live_iframe" ref="iframe6" v-bind:src="liveSource6" frameborder="0" scrolling="no"></iframe>
                  <div class="iframeMask" @click="activePage($event, 'liveSource6')">
                  </div>
                </a>
              </div>
              <div class="live-list live-page9">
                <a><iframe class="live_iframe" ref="iframe7" v-bind:src="liveSource7" frameborder="0" scrolling="no"></iframe>
                  <div class="iframeMask" @click="activePage($event, 'liveSource7')">
                  </div>
                </a>
              </div>
              <div class="live-list live-page9">
                <a><iframe class="live_iframe" ref="iframe8" v-bind:src="liveSource8" frameborder="0" scrolling="no"></iframe>
                  <div class="iframeMask" @click="activePage($event, 'liveSource8')">
                  </div>
                </a>
              </div>
              <div class="live-list live-page9">
                <a><iframe class="live_iframe" ref="iframe9" v-bind:src="liveSource9" frameborder="0" scrolling="no"></iframe>
                  <div class="iframeMask" @click="activePage($event, 'liveSource9')">
                  </div>
                </a>
              </div>
            </div>
            <div class="source-li">
              <div class="source-select">
                <a href="javascript:;">选择画面</a>
                <div class="source-box">
                  <div class="source-scroll">
                    <ul class="source-ul">
                      <a v-for="(list, index) in sourceList" :key="index" class="source-a" href="javascript:;" @click="sourcePlay(list, index)">{{index+1}}</a>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="threeD-list">
            <div class="threeD-title">
              <a href=""><img src="static/img/mk_live_xingxin.png"></a>
              <h3 class="name">广州新兴金属（脚轮）制品有限公司</h3>
            </div>
            <ul class="threeD-ul">
              <li class="threeD-li">
                <a class="threeD-li-a Center" href="javascript:;" @click="threeDUrl('http://192.168.0.33:8080/qn18/index.html?spuid=10111054')">
                  <img src="/static/img/3D_show2.png">
                </a>
                <h5 class="threeD-li-h">4寸PU电泳旱冰轮</h5>
              </li>
               <li class="threeD-li">
                <a class="threeD-li-a Center" href="javascript:;" @click="threeDUrl('http://192.168.0.33:8080/qn18/index.html?spuid=10112269')">
                  <img src="/static/img/3D_show4.png">
                </a>
                <h5 class="threeD-li-h">2寸白PU大班轮</h5>
              </li>
              <li class="threeD-li">
                <router-link :to="{path: '/detail', query: {goodsId: 149187842867963}}" class="threeD-li-a Center" href="javascript:;" @click="threeDUrl('http://192.168.0.33:8080/qn18/index.html?spuid=10112268')">
                  <img src="/static/img/3D_show3.png">
                </router-link>
                <h5 class="threeD-li-h">4寸M12丝杆PVC单轴动轮(蓝色</h5>
              </li>
            </ul>
            <div class="change Center"><i class="el-icon-arrow-down"></i><i class="el-icon-arrow-up"></i></div>
          </div>
        </div>
      </div>
    </div>
    <div class="write">
      <a href="javascript:;"><img src="static/img/test/test1.jpg"></a>
      <div>
        <h3 class="comment-title"><img src="static/img/mk_live_talkyouthink.png"></h3>
        <textarea  class="write-info" type="textarea" name="" v-model="writeDesc"></textarea>
        <div class="comment-attr">
          <div class="comment-other">
            <a href="javascript:;"><img src="static/img/mk_live_commentsmile.png"></a>
            <a href="javascript:;"><i class="el-icon-picture-outline"></i></a>
          </div>
          <a href="javascript:;" class="comment-submit">评论</a>
        </div>
      </div>
    </div>
    <div class="comment">
      <div class="sort">
        <span class="hot-sort">按热度排序</span>
        <span class="time-sort">按时间排序</span>
      </div>
      <div class="comment-list">
        <ul class="comment-list">
          <li class="list-item">
            <img src="static/img/test/test1.jpg">
            <div class="comment-info">
              <span class="comment-text">
                <span class="user_name">MKT121:</span>
                头天下单，第二天就到了，发货很快，一起买的工具还没到，箱子先到了。箱子很厚但是一点也不沉
              <br><span class="comment-date">2019-01-17<span class="comment-time"> 09.55</span></span>
              </span>
            </div>
            <span class="point">
              <a>回复</a> |
              <img src="static/img/test/test2.jpg">
              <span class="point-num">11</span>
            </span>
          </li>
          <li class="list-item">
            <img src="static/img/test/test1.jpg">
            <div class="comment-info">
              <span class="comment-text">
                <span class="user_name">MKT121:</span>
                头天下单，第二天就到了，发货很快，一起买的工具还没到，箱子先到了。箱子很厚但是一点也不沉，质量很好，完全不用担心会破！
                前面还有凹槽的地方可以上锁,再也不用担心工具被偷了,以前都是用布兜子，工具经常丢，也很乱，经朋友介绍买了这家的箱子，很好，很满意！
              <br><span class="comment-date">2019-01-17<span class="comment-time"> 09.55</span></span>
              </span>
            </div>
            <span class="point">
              <a>回复</a> |
              <img src="static/img/test/test2.jpg">
              <span class="point-num">11</span>
            </span>
          </li>
          <li class="list-item">
            <img src="static/img/test/test1.jpg">
            <div class="comment-info">
              <span class="comment-text">
                <span class="user_name">MKT121:</span>
                头天下单，第二天就到了，发货很快，一起买的工具还没到，箱子先到了。箱子很厚但是一点也不沉，质量很好，完全不用担心会破！
                前面还有凹槽的地方可以上锁,再也不用担心工具被偷了,以前都是用布兜子，工具经常丢，也很乱，经朋友介绍买了这家的箱子，很好，很满意！
                以前都是用布兜子，工具经常丢，也很乱，也很乱，经朋友介绍买了这家的箱子，很好，很满意！以前都是用布兜子，工具经常丢，也很乱，经朋友介绍买了这家的箱子，很好，很满意！
                 头天下单，第二天就到了，发货很快，一起买的工具还没到，箱子先到了。箱子很厚但是一点也不沉，质量很好，完全不用担心会破！
                前面还有凹槽的地方可以上锁,再也不用担心工具被偷了,以前都是用布兜子，工具经常丢，也很乱，经朋友介绍买了这家的箱子，很好，很满意！
                以前都是用布兜子，工具经常丢，也很乱，也很乱，经朋友介绍买了这家的箱子，很好，很满意！以前都是用布兜子，工具经常丢，也很乱，经朋友介绍买了这家的箱子，很好，很满意！
              <br><span class="comment-date">2019-01-17<span class="comment-time"> 09.55</span></span>
              </span>
            </div>
            <span class="point">
              <a>回复</a> |
              <img src="static/img/test/test2.jpg">
              <span class="point-num">11</span>
            </span>
          </li>
        </ul>
      </div>
    </div>
    <pageFooter></pageFooter>
  </div>
</template>
<script>
import shortcut from '@/components/shortcutHeader'
import live3Dheader from '@/components/live3Dheader'
import pageFooter from '@/components/pageFooter'
export default {
  data () {
    return {
      liveSource: '',
      liveSource1: '',
      liveSource2: '',
      liveSource3: '',
      liveSource4: '',
      liveSource5: '',
      liveSource6: '',
      liveSource7: '',
      liveSource8: '',
      liveSource9: '',
      goodsId: '149187842867965',
      cutover: 'liveSource1', // 判断当前放的直播源到哪一个画面
      isLayout: false,
      choosePage: 'page9',
      liveTitel: 'MKTail直播',
      writeDesc: '',
      // http://192.168.1.11/hls/test"+i+".m3u8  直播源
      sourceList: ['http://192.168.1.11/hls/test.m3u8', 'http://192.168.1.11/hls/test.m3u8',
        'http://192.168.1.11/hls/test.m3u8', 'http://192.168.1.11/hls/test.m3u8', 'http://192.168.1.11/hls/test.m3u8', 'http://192.168.1.11/hls/test.m3u8',
        'http://192.168.1.11/hls/test.m3u8', 'http://192.168.1.11/hls/test.m3u8',
        'http://192.168.1.11/hls/test.m3u8'
      ],
      randomObj: {
        select: 'select' // 先定义随机ID
      }
    }
  },
  components: { shortcut, live3Dheader, pageFooter },
  created  () {
    console.log(this['liveSource' + 1])
  },
  mounted () {
    this.$nextTick(() => {
      document.documentElement.scrollTop = 133
      document.body.scrollTop = 133
    })
    window[this.randomObj.select] = function (page) {
      this.activeChildPage(page)
    }.bind(this)
  },
  methods: {
    sourcePlay (list, index) {
      let height = this.$refs.iframe0.offsetHeight
      console.log(this.cutover, index, this.cutover === ('liveSource' + (index + 1)))
      // if (this.cutover === ('liveSource' + (index + 1))) {
      //   this['liveSource' + (index + 1)] = '../static/live.html?' + 'source=' + list + '&height=' + height + '&page=liveSource' + (index + 1)
      //   this.$refs.iframe[index].parentElement.children[1].style.display = 'none'
      // }
      if (this.cutover === 'liveSource1') {
        this.liveSource1 = '../static/live.html?' + 'source=' + list + '&height=' + height + '&page=liveSource1'
        this.$refs.iframe0.parentElement.children[1].style.display = 'none'
      } else if (this.cutover === 'liveSource2') {
        this.liveSource2 = '../static/live.html?' + 'source=' + list + '&height=' + height + '&page=liveSource2'
        this.$refs.iframe1.parentElement.children[1].style.display = 'none'
      } else if (this.cutover === 'liveSource3') {
        this.liveSource3 = '../static/live.html?' + 'source=' + list + '&height=' + height + '&page=liveSource3'
        console.log(this.$refs.iframe2)
        this.$refs.iframe2.parentElement.children[1].style.display = 'none'
      } else if (this.cutover === 'liveSource4') {
        this.liveSource4 = '../static/live.html?' + 'source=' + list + '&height=' + height + '&page=liveSource4'
        console.log(this.$refs.iframe3)
        this.$refs.iframe3.parentElement.children[1].style.display = 'none'
      } else if (this.cutover === 'liveSource5') {
        this.liveSource5 = '../static/live.html?' + 'source=' + list + '&height=' + height + '&page=liveSource5'
        this.$refs.iframe4.parentElement.children[1].style.display = 'none'
      } else if (this.cutover === 'liveSource6') {
        this.liveSource6 = '../static/live.html?' + 'source=' + list + '&height=' + height + '&page=liveSource6'
        this.$refs.iframe5.parentElement.children[1].style.display = 'none'
      } else if (this.cutover === 'liveSource7') {
        this.liveSource7 = '../static/live.html?' + 'source=' + list + '&height=' + height + '&page=liveSource7'
        this.$refs.iframe6.parentElement.children[1].style.display = 'none'
      } else if (this.cutover === 'liveSource8') {
        this.liveSource8 = '../static/live.html?' + 'source=' + list + '&height=' + height + '&page=liveSource8'
        this.$refs.iframe7.parentElement.children[1].style.display = 'none'
      } else if (this.cutover === 'liveSource9') {
        this.liveSource9 = '../static/live.html?' + 'source=' + list + '&height=' + height + '&page=liveSource9'
        this.$refs.iframe8.parentElement.children[1].style.display = 'none'
      }
    },
    activePage (event, page) {
      console.log(page, '画布')
      if (this.cutover === page) return false
      else {
        this.cutover = page
      }
    },
    isShowLayout () {
      this.isLayout = true
    },
    isHiddenLayout () {
      this.isLayout = false
    },
    initLive () {
      this.liveSource = ''
      this.liveSource1 = ''
      this.liveSource2 = ''
      this.liveSource3 = ''
      this.liveSource4 = ''
      this.liveSource5 = ''
      this.liveSource6 = ''
      this.liveSource7 = ''
      this.liveSource8 = ''
      this.liveSource9 = ''
      for (let i = 0; i < 9; i++) {
        if (this.$refs[`iframe${i}`] !== undefined) {
          this.$refs[`iframe${i}`].parentElement.children[1].style.display = 'block'
        }
      }
    },
    vueFunc () {
      // this.$el.getElementsByTagName('iframe')[0].contentWindow.touch()
      // this.$refs.iframe0.contentWindow.changeHeight(11)
    },
    activeChildPage (page) {
      console.log(page)
      this.cutover = page
    }
  },
  watch: {
    choosePage (newState, oldState) {
      if (newState !== oldState) {
        this.initLive()
      }
    }
  }
}

</script>
<style scoped>
  .live-con{
    min-width: 1226px;
  }
/* 直播*/
  .live-box{
    width:100vw;
    min-width: 1226px;
    height: calc(100vh - 16px);
    min-height:900px;
    position: relative;
    border: 1px solid #ddd;
    border-top: 16px solid #353535;
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: space-between;
    position: relative;
  }
  .live {
    min-width: 880px;
    flex-grow: 1
  }
  .live-ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    height: calc(100% - 50px);
  }
  .live-list {
    width: calc(50% - 2px);
    height: calc(50% - 2px);
    border:1px solid #a4a4a4;
  }
  .live-list.live-page1{
    width: calc(100% - 2px);
    height: calc(100% - 2px);
  }
  .live-list.live-page9{
    width: calc(33.3% - 2px);
    height: calc(33.3% - 2px);
  }
  .live-list a, .live_iframe {
    width: 100%;
    height: 100%;
  }
  .live-list a {
    position: relative;
  }
  .iframeMask {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    background-color: transparent;
  }
/* 设置画布*/
 .page-select{
    position: absolute;
    top: 0;
    left: 0;
    height:47px;
    background-color: rgba(52,52,52,0.4);
    display: flex;
    align-items: center;
    width: calc(100% - 340px);
    min-width: 886px;
    font-size:16px;
    font-family:SourceHanSansCN-Light;
    font-weight:300;
    color:rgba(228,228,228,1);
    z-index: 20;
  }
  .page-select h4{
    font-size:30px;
    height: 30px;
    line-height: 27px;
    font-family:SourceHanSansCN-Medium;
    font-weight:500;
    color:rgba(255,255,255,1);
    padding-left: 18px;
  }
  .span-li {
    margin-left: 35px;
    cursor: pointer;
  }
  .span-li > :nth-child(1) {
    margin-right: 10px;
  }
  .page-item {
    position: relative;
    height: 100%;
    line-height: 47px;
  }
  .page-item:hover .page-ul{
    /*display: block;*/
  }
  .page-ul {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    bottom: -135px;
    right: -7px;
    width:39px;
    height:135px;
    background-color: rgba(52,52,52,0.69);
  }
  .page-li {
    margin: 0;
  }
/* 选择直播源*/
  .source-li{
    background-color: #353535;
    text-align: right;
  }
  .source-select{
    position: relative;
    display: inline-block;
    width: 116px;
    text-align: center;
    margin-right: 20px;
  }
  .source-select>a {
    font-size:18px;
    font-family:SourceHanSansCN-Normal;
    font-weight:400;
    color:rgba(255,255,255,1);
    height: 50px;
    line-height: 50px;
  }
  .source-box {
    position: absolute;
    left: -20px;
    top: -110px;
    width: 137px;
    height:109px;
    border: 1px solid #15191C;
    background:rgba(255,255,255,1);
    z-index: 20;
  }
  .source-scroll{
    overflow: hidden;
    text-align: center;
    display: inline-block;
  }
  .source-ul {
    display: flex;
    flex-wrap: wrap;
    margin: 11px;
    overflow: hidden;
    overflow-y: auto;
    height: 98px;
    width: 116px;
  }
  a.source-a {
    width:26px;
    height:26px;
    line-height: 27px;
    border:1px solid #D2D2D2;
    border-radius:50%;
    color: #000;
    font-size: 16px;
  }
  a.source-a {
    margin-left: 4px;
  }
  a.source-a:nth-child(3n +1 ) {
    /*margin-left: 0px;*/
  }
  a.source-a:nth-child(n+4){
    margin-top: 5px;
  }
/*店铺推荐*/
  .threeD-list{
    display: flex;
    flex-direction: column;
    width: 300px;
    margin-right: 20px;
    padding: 0 10px;
    flex-shrink: 0;
  }
  .threeD-title {
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #fff;
  }
  .name {
    font-size:16px;
    line-height: 18px;
    font-family:SourceHanSansCN-Light;
    font-weight:300;
    color:rgba(48,48,48,1);
    padding: 10px 0px;
    text-align: left;
  }
  .threeD-ul {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
  }
  .threeD-li {
    width:272px;
    position: relative;
  }
  .threeD-li-a {
    width: 100%;
    height: 206px;
    overflow: hidden;
  }
  .Center{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .threeD-li-a img{
    width: 100%;
    height: auto;
  }
  .threeD-li-h {
    height:27px;
    line-height: 27px;
    text-align: center;
    background-color: rgba(0,0,0,0.14);
    font-size:16px;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(39,39,39,1);
    overflow: hidden;
    white-space: nowrap;
    padding: 0 8px;
  }
  .change {
    font-size: 40px;
    color: #3A3A3A;
    height: 70px;
  }
  .change i + i{
    margin-left: 47px;
  }
/* 评论*/
 img,.list-item>.comment-info{
    display: inline-block;
  }
  #test{
    width:1224px;
    margin: 100px auto;
    font-family:SourceHanSansCN-Medium;
  }
  #test hr{
    color:#CACACA;
    opacity: 0.4;
    margin-bottom: 9px;
  }
  .sort{
    margin-bottom: 51px;
    font-size:14px;
  }
  .sort .hot-sort{
    font-weight:bold;
    color:rgba(30,30,30,1);
    margin-right: 10px;
  }
  .sort .time-sort{
    font-weight:400;
    color:rgba(117,117,117,1);
  }
  .comment{
    padding-left: 9px;
    text-align: left;
    font-weight:300;
    font-size: 13px;
    width: 1226px;
    margin: 0 auto;
  }
  .comment-list{
    display: flex;
    flex-direction: column;
  }
  .comment .user_name{
    font-size: 15px;
    color:#429FE6;
    margin-right: 10px;
  }
  .list-item{
    position: relative;
    display: flex;
  }
  .list-item >img{
    width: 60px;
    height: 60px;
  }
  li.list-item:first-child {
    margin-bottom: 36px;
  }
  li.list-item +li {
    margin: 36px 0;
  }
  .point{
    position: absolute;
    bottom: 0px;
    right:88px;
  }
  .comment-info{
    margin-left:10px;
    font-size:14px;
    color:#4F4F4F;
    width:1050px;
  }
  .comment-date{
    font-weight:300;
    color:rgba(136,136,136,1);
    margin-top: 10px;
  }
  .comment-time {
    margin-left: 10px;
  }
/* 写评论*/
  .write {
    width: 1226px;
    margin: 36px auto;
    display: flex;
    align-items: center;
  }
  .write >a {
    width: 70px;
    height: 70px;
    margin-bottom: 60px;
  }
  .write >a img{
    width: 100%;
    height: 100%;
  }
  .write-info {
    flex-grow: 1;
    width:1001px;
    height:131px;
    background:rgba(249,249,249,1);
    box-shadow:0px 0px 3px 0px rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    margin-left: 26px;
  }
  .comment-title{
    margin-left: 26px;
    text-align: left;
    height:50px;
    font-size:22px;
    font-family:HYShangWeiShouShuW-Regular;
    font-weight:400;
    color:#666;
    line-height:50px;
  }
  .comment-attr {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 26px;
    margin-top: 18px;
    margin-bottom: 18px;
    height: 30px;
  }
  .comment-other {
    display: flex;
    align-items: center;
  }
  .comment-other a +a {
    margin-left: 15px;
    font-size: 18px;
    color: #00A0E9;
  }
  .comment-submit{
    width:80px;
    height:30px;
    line-height: 30px;
    background:rgba(255,124,10,1);
    border-radius:5px;
    font-size:16px;
    font-weight:400;
    color:rgba(255,255,255,1);
    align-self: flex-end;
  }
</style>
