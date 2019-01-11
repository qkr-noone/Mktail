<template ref="template">
  <div id="app" ref="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {}
  }
}
</script>
<style scoped>
@import "./assets/css/app.css";
/*@import "../static/css/app.css";*/
</style>
