<template>
  <div>contact</div>
</template>
<script>
export default {
  props: {
    menuCate: {
      type: Array
    },
    scroll: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      storeId: ''
    }
  },
  mounted () {
    this.storeId = this.$route.query.homeShops
    this.$nextTick(() => {
      document.documentElement.scrollTop = this.scroll
    })
  }
}
</script>
<style scoped>
</style>
