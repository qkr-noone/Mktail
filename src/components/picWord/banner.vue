<template>
  <div id="banner">
    <div class="full_box">
      <el-carousel :interval="4000" arrow="always" indicator-position="" height="100%" style="width: 100%; height: 100%;" v-if="hack">
        <el-carousel-item v-for="item in list" :key="item.id" class="full_item">
          <a class="full_link" :href="item.link || null" target="_blank">
            <img :src="item.url">
          </a>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
export default {
  name: 'banner',
  props: {
    list: {
      type: Array
    }
  },
  data () {
    return {
      hack: true
    }
  },
  methods: {},
  watch: {
    list: {
      handler (val, oldV) {
        this.hack = false
        this.$nextTick(() => {
          this.hack = true
        })
      },
      deep: true
    }
  }
}

</script>
<style lang="scss" scoped>
body, div, span, header, footer, nav, section, aside, article, ul, dl, dt, dd, li, a, p, h1, h2, h3, h4, h5, h6, i, b, textarea, button, input, select, figure, figcaption {
  padding: 0;
  margin: 0;
  list-style: none;
  font-style: normal;
  text-decoration: none;
  border: none;
  font-family: "Microsoft Yahei";
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  &:hover {
    outline: none;
  }
  &:focus {
    outline: none;
  }
}
input[type="button"], input[type="submit"], input[type="search"], input[type="reset"] {
  -webkit-appearance: none;
}
table, tr, td {
  border-spacing: 0;
}
textarea {
  -webkit-appearance: none;
}
  #banner {
    max-width: 1226px;
    width: 100%;
  }
  .full_box {
    width: 100%;
    height: 180px;
  }
  .full_item {
    height: 100%;
  }
  .full_link {
    background-color: transparent;
    display: block;
    width: 100%;
    height: 100%;
  }
  .full_link img {
    display: block;
    width: 100%;
    max-height: 100%;
  }
  /deep/ .el-carousel__arrow--left {
  }
  /deep/ .el-carousel__arrow--right {
  }
  /deep/ .el-carousel__arrow--right:hover, /deep/ .el-carousel__arrow--left:hover {
    background-color: rgba(0, 0, 0, 0.6);
  }
  /deep/ .el-carousel__indicators--horizontal{
    border-radius: 8px;
  }
  /deep/ .el-carousel__button {
    background-color: #fff;
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }
  /deep/ .el-carousel__arrow--left, /deep/ .el-carousel__arrow--right {
    height: 60px;
    border-radius: initial;
    font-size: 40px;
    background-color: rgba(0, 0, 0, 0.2);
    color: #fff;
  }
</style>
