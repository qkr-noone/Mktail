<template>
  <div id="index">
  <div id="header">
  <shortcut id="headTop"></shortcut>
  <headerNav></headerNav>
  <homeNav></homeNav>
  </div>
    <div class="content">
      <transition>
        <keep-alive>
          <router-view/>
        </keep-alive>
      </transition>
    </div>
  </div>
</template>
<script>
import shortcut from '@/components/shortcutHeader'
import headerNav from '@/components/headerNav'
import homeNav from '@/components/homeNav'
export default {
  data () {
    return {
    }
  },
  components: { shortcut, headerNav, homeNav }
}
</script>

<style scoped>
  /*@import "../../assets/css/app.css";*/
  .content {
    display: flex;
  }
  #index {
    /*background-color: #F4F4F4;*/
  }
</style>
