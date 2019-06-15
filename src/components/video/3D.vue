<template>
  <div id="threeD">
    <div class="threeD_box">
      <a class="threeD_link" href="" target="_blank">
        <img src="static/img/tem.jpeg">
      </a>
    </div>
  </div>
</template>
<script>
export default {
  // 3D模块和行业化海报  industry 差不多
  name: 'threeD',
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
  #threeD {
    max-width: 1226px;
    width: 100%;
  }
  .threeD_box {
  }
  .threeD_link {
    background-color: transparent;
  }
  .threeD_link img {
    display: block;
    max-width: 100%;
  }
</style>
