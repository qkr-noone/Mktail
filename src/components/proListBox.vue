<template>
  <li class="fur" :style="{backgroundImage: 'url('+ data.image +')'}">
    <div class="fur_detail">
      <div class="fur_detail_class">
        <router-link :to="{ path:'/test/detail' }" v-for="(list, index) in data.prolist"  :key="index">
          <img class="wrap" :src="list['image']">
        </router-link>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'proListBox',
  data () {
    return {}
  },
  props: ['data']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .wrap {
    width: 100%;
    height: auto;
    overflow: hidden;
  }
  .fur {
    margin: 0 auto;
    background-image: url("static/img/bg_series.png");
    background-size: cover;
    background-position:top center;
  }
  .fur_detail {
    width: 990px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    /*height: 228px;*/
  }
  .fur_detail >h1{
    font-size: 39px;
    line-height: 33px;
    margin-top: 7px;
    text-align: left;
  }
  .fur_detail_class {
    display: flex;
    justify-content: center;
    margin-bottom:48px;
    margin-top: 510px;
  }
  .fur_detail_class a {
    width:152px;
    height:182px;
    border:1px solid rgba(236,27,26,0.19);
    background: #fff;
    /*opacity:0.19;*/
  }
  .fur_detail_class a + a{
    margin-left: 16px;
  }
</style>
