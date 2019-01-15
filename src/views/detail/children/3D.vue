<template>
  <div class="tab-pane">
    <div class="tab-title">
      <h4>3D展示</h4>
    </div>
    <div class="intro-detail">
      <div class="tab-box">
        <div class="threeD-box">
          <iframe ref="threeDSrc" style="width: 100%; height: 100%;" frameborder="0" scrolling="no"></iframe>
          <a class="threeD-btn" v-show="!is3Ding" @click="threeDUrl(show3d)">
            <img src="static/img/mk_search_play.png">
          </a>
        </div>
      </div>
    </div>
    <!-- <div class="mask" v-show="is3Ding">
      <iframe class="mask_iframe" ref="threeDSrc"  frameborder="0" scrolling="no">
      </iframe>
      <div class="mask_close close_wrap">
        <i class="el-icon-close" @click="threeDclose"></i>
      </div>
    </div> -->
  </div>
</template>
<script>
export default {
  data () {
    return {
      is3Ding: false
    }
  },
  props: {
    show3d: {
      type: String
    }
  },
  methods: {
    threeDUrl (threeDUrl) {
      console.log(threeDUrl)
      this.is3Ding = true
      this.$refs.threeDSrc.src = threeDUrl
      return false
    },
    threeDclose () {
      this.is3Ding = false
      return false
    }
  }
}

</script>
<style scoped>
.tab-title {
    height:50px;
    background:rgba(249,249,249,1);
    border:1px solid rgba(227,227,227,1);
    line-height: 50px;
  }
  .tab-title h4 {
    text-align: left;
    font-size:14px;
    color:rgba(135,135,135,1);
    margin-left: 20px;
  }
  .tab-pane {
    background-color: #fff;
  }
  .tab-box .threeD-box{
    position: relative;
    background-color: #E0E0E0;
    margin: 20px auto;
    width:861px;
    border: 1px solid #ddd;
    height:484px;
    overflow: hidden;
  }
  .threeD-btn{
    position: absolute;
    width: 100px;
    height: 100px;
    top: 50%;
    left: 50%;
    transform: translate(-50px, -50px);
  }
  .threeD-btn img{
    width: 100%;
  }
  /* 3d弹框阴影 */
  .mask{
    position:fixed;top:0;right:0; bottom:0; left:0;height: 100vh;background: rgba(0, 0, 0, 0.7);z-index: 1000;
  }
  .mask_iframe{
    position:absolute;
    width: calc(100% - 600px);
    height: calc(100vh - 300px);
    top: 150px;left: 300px;bottom: 150px;right: 300px;min-width:660px;min-height: 460px;
  }
  .mask_close {
    position:absolute;
    width: calc(100% - 600px);
    /*height: calc(100vh - 300px);*/
    top: 150px;left: 300px;
    /*bottom: 150px;*/
    right: 300px;min-width:660px;
    /*min-height: 460px;*/
  }
  .close_wrap {
    z-index: 1000;
  }
  .close_wrap >i {
    width: 50px; height: 50px;position: absolute;top: 0px; right: 0px;line-height: 50px;color: #ef6c00;font-size: 36px;
  }
</style>
