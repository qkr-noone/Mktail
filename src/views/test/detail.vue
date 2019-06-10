<template>
  <div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  mounted () {
    this.API.testShop().then(res => {
      console.log(res)
    })
  },
  methods: {}
}

</script>
<style scoped>
</style>
