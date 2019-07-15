<template>
  <div class="mk_waiting_box">
    <div class="mk_waiting">
      <i class="el-icon-close mk_waiting_close" @click="MK_CODE('')"></i>
      <img class="mk_waiting_img" src="static/img/mk_waiting.jpg">
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  data () {
    return {}
  },
  methods: {
    ...mapMutations(['MK_CODE'])
  }
}
</script>
<style scoped>
  .mk_waiting_box {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0, 0.1);
    z-index: 1000;
    overflow-y: hidden;
  }
  .mk_waiting {
    position: relative;
    left: 50%;
    top: 50%;
    width: 480px;
    transform: translate(-50%, -50%);
  }
  .mk_waiting_close {
    position: absolute;
    color: red;
    right: 8px;
    top: 8px;
    font-size: 24px;
    cursor: pointer;
  }
  .mk_waiting_img {
    max-height: 100%;
    max-width: 100%;
    border-radius: 8px;
  }
</style>
