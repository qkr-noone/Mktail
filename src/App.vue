<template ref="template">
  <div id="app" ref="app">
    <transition name="router-fade" mode="out-in">
      <!-- 是否缓存 -->
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition name="router-fade" mode="out-in">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
<<<<<<< HEAD
    <MkCode v-if="MKWaiting"></MkCode>
  </div>
</template>
<script>
import MkCode from '@/components/mkCode'
import { debounce } from '@/common/utils'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'app',
  data () {
    return {}
  },
  computed: {
    ...mapState({
      MKWaiting: state => state.user.MKWaiting
    })
  },
  components: { MkCode },
  methods: {
    ...mapMutations(['MK_CODE'])
  },
  watch: {
    MKWaiting (newVal) {
      if (newVal) {
        debounce(() => {
          this.MK_CODE('')
        }, 2500)
      }
=======
  </div>
</template>
<script>
export default {
  name: 'app',
  provide () {
    return {
      reload: this.reload
    }
  },
  data () {
    return {
      isRouterAlive: true
    }
  },
  methods: {
    reload () {
      this.$nextTick(() => {
        this.isRouterAlive = true
      })
>>>>>>> remotes/origin/master
    }
  }
}
</script>
<style scoped>
@import "./assets/css/app.css";
  .router-fade-enter-active, .router-fade-leave-active {
      transition: opacity .3s;
  }
  .router-fade-enter, .router-fade-leave-active {
      opacity: 0;
  }
</style>
