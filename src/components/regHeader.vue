<template>
<<<<<<< HEAD
  <div class="top" ref='logoIsCursor'>
    <router-link :to="{path: isHome}" ><img src="static/img/reg/reg_logo-118-69.png"></router-link>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isHome: ''
    }
=======
    <div class="top">
      <router-link :to="{path: isHome}" ><img src="static/img/reg/reg_logo-118-69.png"></router-link>
    </div>
</template>
<script>
export default {
  name: 'regHeader',
  data () {
    return {}
>>>>>>> remotes/origin/master
  },
  props: [],
  created () {
    let curRoute = this.$route.path
    this.isHome = (curRoute === '/home' ? '' : '/home')
<<<<<<< HEAD
=======
    // curRoute === '/shops' ? this.isShops = true : this.isShops = false
>>>>>>> remotes/origin/master
  },
  mounted () {
    if (!this.isHome) {
      this.$refs.logoIsCursor.children[0].style.cursor = 'default'
    }
  }
}
</script>
<style scoped>
  /*头部*/
.top{
<<<<<<< HEAD
    height:90px;
    padding-left: 70px;
    padding-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
=======
    height:95px;
    border-bottom: 2px solid #FFD704;
    padding-bottom: 6px;
    text-align: left !important;
  }
.top img{
    width:110px;
    height:63px;
    margin:19px 0 0 70px;
>>>>>>> remotes/origin/master
  }
</style>
