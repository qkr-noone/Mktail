<template>
  <div id="shops-index">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <shortcutHeader></shortcutHeader>
    <div>shops</div>
    <pageFooter></pageFooter>
  </div>
</template>
<script>
import shortcutHeader from '../../components/shortcutHeader'
import pageFooter from '../../components/pageFooter'
export default {
  data () {
    return {}
  },
  components: { shortcutHeader, pageFooter }
}

</script>
<style scoped>
</style>
