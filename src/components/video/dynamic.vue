<template>
  <div id="dynamic">
    <div class="dynamic_box">
      <div class="dynamic_player">
        <div class="dynamic_player_bg">
          <video preload="metadata" muted width="100%" height="100%" loop="false" style="display: block; background-color: #000;" :src="dataUrl" controls></video>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'dynamic',
  props: {
    dataUrl: {
      type: [String, Number],
      defaul: null
    }
  },
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
  #dynamic {
    max-width: 1226px;
    width: 100%;
  }
  .dynamic_box {
    min-height: 600px;
    max-height: 817px;
    overflow: hidden;
  }
  .dynamic_player {
    width: 100%;
    width: auto;
  }
  .dynamic_player_bg {
    width: 100%;
    height: 100%;
  }
</style>
