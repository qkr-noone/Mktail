<template>
  <div class="tab-pane">
    <div class="tab-title">
      <h4>商品评价</h4>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  props: {
    scroll: {
      type: Object
    }
  },
  mounted () {
    this.$nextTick(() => {
      document.documentElement.scrollTop = this.scroll.scrollTop
    })
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
</style>
