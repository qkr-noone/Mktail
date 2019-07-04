<template>
  <div class="container_h">
    <div class="sort nav-top">
      <div class="py-container">
        <div class="navitem">
          <h2 class="nav-all">{{cateTitle}}</h2>
          <ul class="nav-ul">
            <li v-for="item in nav" :key="item.title">
              <router-link :to="{path: '/'+item.path}" :class="{active: chooseNav === item.path}">{{item.title}}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      nav: [
        {title: '首页', path: 'home'},
        {title: '品牌站', path: '3DShow'},
        {title: '源工厂', path: 'shops'},
        {title: '商学院', path: 'javascript:;'},
        {title: '服务', path: 'javascript:;'},
        {title: '直播', path: 'javascript:;'},
        {title: '社区', path: 'javascript:;'}
      ],
      chooseNav: ''
    }
  },
  props: {
    cateTitle: {
      type: String,
      default: '全部商品分类'
    }
  },
  mounted () {
    let path = this.$route.path.split('/')[1]
    this.chooseNav = path
  }
}

</script>
<style scoped>
  .container_h {
    background-color: #f4f4f4;
    margin: 0 auto;
    min-width: 990px;
    height: auto;
    overflow: hidden;
  }
  .sort.nav-top{
    background: #fff;
  }
  .sort{
    height: auto;
    background-repeat: no-repeat;
    transition: background-color ease-in 0.4s;
  }
  .py-container {
    width: 1226px;
    margin: 0 auto
  }
/* navitem */
  .navitem {
    display: flex;
    background: #fff;
  }
  .nav-all{
    font-size:22px;
    width: 189px;
    text-align: center;
    height: 39px;
    line-height: 39px;
    background-color: #E71600;
    color: #FFFFFF;
    border-bottom: 1px solid #E71600;
  }
  .nav-ul{ display: flex;flex-wrap: nowrap;font-size: 22px; color: #353535;  flex-grow: 1;}
  .nav-ul >li {margin-left: 50px;line-height: 39px; font-family: "SimHei", "Arial"}
  .nav-ul >li a{color: #353535;}
  .nav-ul >li a.active, .nav-ul >li a:hover{ color: #E71600; cursor: pointer;}
</style>
