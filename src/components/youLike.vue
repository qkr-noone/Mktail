<template>
  <div class="hot-con-li">
    <router-link :to="like.url"><img :src="like.pic"></router-link>
      <h3>{{like.title}}</h3>
      <p>{{like.price}}</p>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  props: ['like']
}

</script>
<style scoped>
.hot-con-li {
  display: flex;
  flex-direction: column;
}

.hot-con-li a {
  width: 196px;
  height: 196px;
  overflow: hidden;
}

.hot-con-li a img {
  width: 100%;
  height: auto;
}

.hot-con-li h3 {
  font-size: 18px;
  color: #353535;
  height: 40px;
  font-size: 18px;
  line-height: 20px;
  width: 196px;
  margin-top: 10px;
  overflow: hidden;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-align: justify;
}

.hot-con-li p {
  color: #FF4707;
  font-size: 22px;
  text-align: center;
  margin-top: 15px;
}

</style>
