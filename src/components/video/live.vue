<template>
  <div id="live">
    <div class="live_box">
      <a class="live_link" href="" target="_blank">
        <img src="static/img/tem.jpeg">
      </a>
    </div>
  </div>
</template>
<script>
export default {
  // 直播模块和行业化海报  industry 差不多
  name: 'live',
  data () {
    return {
    }
  },
  methods: {
  },
  watch: {
  }
}

</script>
<style lang="" scoped>
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
  #live {
    max-width: 1226px;
    width: 100%;
  }
  .live_box {
  }
  .live_link {
    background-color: transparent;
  }
  .live_link img {
    display: block;
    max-width: 100%;
  }
</style>
