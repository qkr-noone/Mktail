<template>
  <div>
    <div>testDetail</div>
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
</style>
