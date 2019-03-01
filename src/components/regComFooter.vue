<template>
  <div ref='logoIsCursor' class="go">
    <router-link :to="{path: isHome}">
      <img src="static/img/reg/reg_logo-118-69.png">
    </router-link>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isHome: ''
    }
  },
  props: [],
  mounted () {
    let curRoute = this.$route.path
    this.isHome = (curRoute === '/home' ? '' : '/home')
    if (!this.isHome) {
      this.$refs.logoIsCursor.children[0].style.cursor = 'default'
    }
  }
}
</script>
<style scoped>
  .go{
    height:95px;
    padding-left: 70px;
    padding-right: 10px;
    display: flex;
    align-items: center;
    border-bottom: 2px solid #FFD704;
  }
</style>
