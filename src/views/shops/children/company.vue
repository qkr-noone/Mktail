<template>
  <div class="all_page">
    <div class="contain">
      <aside>
        <div>
          <ul>
            <li class="con_li">
              <a class="con_title" href="">
                <i class="el-icon-office-building"></i>
                <span>企业信息</span>
              </a>
            </li>
            <li class="con_li">
              <a class="con_title" href="">
                <i class="el-icon-s-flag"></i>
                <span>推荐产品</span>
              </a>
            </li>
            <li class="con_li">
              <a class="con_title" href="">
                <i class="el-icon-s-marketing"></i>
                <span>企业产能</span>
              </a>
            </li>
            <li class="con_li">
              <a class="con_title" href="">
                <i class="el-icon-s-data"></i>
                <span>研发能力</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
      <content>
        <div class="com_sign">
          <div class="com_main_img"><img src=""></div>
          <div class="com_main_info">
            <h3 class="com_main_title">12345</h3>
            <div class="com_main_desc">
              <p class="com_main_word"></p>
            </div>
          </div>
        </div>
        <div class="com_info">
          <div class="com_table"></div>
          <div class="com_advantage">
            <p>公司核心优势描述：</p>
            <div>
              <p>。。。。。。。。。。</p>
            </div>
          </div>
          <div class="com_recom">
            <div class="com_recom_title"></div>
            <div class="com_recom_con"></div>
          </div>
          <div class="com_goods">
            <div class="com_recom_title com_good_title"></div>
            <div class="com_good_table"></div>
          </div>
          <div class="com_resea">
            <div class="com_recom_title com_good_title"></div>
          </div>
        </div>
      </content>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    menuCate: {
      type: Array
    },
    scroll: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      storeId: ''
    }
  },
  mounted () {
    this.storeId = this.$route.query.homeShops
    this.$nextTick(() => {
      document.documentElement.scrollTop = this.scroll
    })
  }
}
</script>
<style scoped>
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
}
/* aside */
  .all_page {
    background: #F5F5F5;
    min-height: 100%;
  }
  .contain {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    width: 1226px;
    margin: 0 auto;
    padding-top: 25px;
  }
  aside {
    width: 220px;
    box-shadow:0px 0px 5px 0px rgba(11,3,6,0.09);
    border-radius: 8px;
    padding: 10px 22px;
    font-size: 16px;
    color: #5E5E5E;
    background-color: #FFFFFF;
  }
  .con_li {
    padding: 15px 0;
  }
  .con_title {
    color: #5E5E5E;
    line-height: 22px;
    text-align: left;
    width: 100%;
  }
/* content */
  content {
    flex-grow: 1;
  }
  .com_sign {
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
  }
  .com_main_img {}
  .com_main_info {
    background-color: #FFFFFF;
  }
</style>
