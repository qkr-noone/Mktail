<template>
  <div id="addToCart">
    <shortcutHeader></shortcutHeader>
    <div class="py-container">
      <div>
        <div class="add-succ-box">
          <div class="add-succ-info">
            <div class="succ-top">
              <i class="el-icon-circle-check-outline"></i>
              <h2 class="succ-tip">商品已成功加入购物车！</h2>
            </div>
            <div class="succ-item">
              <div class="p-item"><router-link :to="{ path: '/detail', query: {goodsId: goodSkuList.goodsId, skuId: goodSkuList.id}}"><img :src="goodSkuList.image"></router-link></div>
              <div class="p-info">
                <div class="p-name"><a>{{goodSkuList.title}}</a></div>
                <div class="p-extra"><span><strong v-for="(tip, key, index) in spec" :key="index">{{key}}:{{tip}}</strong></span><span>数量：{{num}}</span></div>
              </div>
            </div>
          </div>
          <div class="add-succ-btn">
            <router-link :to="{ path: '/detail', query: {goodsId: goodSkuList.goodsId, skuId: goodSkuList.id}}" class="add-succ-detail">查看商品详情</router-link>
            <router-link :to="{ path: '/cart'}" class="add-summ">去购物车结算 <i class="el-icon-arrow-right"></i></router-link>
          </div>
        </div>
      </div>
      <div class="youlike">
        <h2>{{likeCate.name}}</h2>
        <ul class="youlike-ul">
          <li class="youlike-li" v-for="list in likeList" :key="list.id">
            <router-link :to="{path: '/detail', query: {goodsId: list.url}}" class="youlike-li-a"><img :src="list.pic"></router-link>
            <div class="youlike-li-des">
              <a>{{list.title}}</a>
            </div>
            <p class="youlike-li-pri">¥{{list.price}}</p>
            <span class="youlike-li-com">已有<em>233</em>人评价</span>
          </li>
        </ul>
      </div>
    </div>
    <pageFooter></pageFooter>
    <regFooter></regFooter>
  </div>
</template>
<script>
import shortcutHeader from '@/components/shortcutHeader'
import pageFooter from '@/components/pageFooter'
import regFooter from '@/components/regFooter'
export default {
  data () {
    return {
      goodSkuList: '',
      num: 1,
      goodsName: '',
      spec: '',
      likeList: [],
      likeCate: ''
    }
  },
  components: { shortcutHeader, pageFooter, regFooter },
  activated () {},
  deactivated () {
    this.$destroy()
  },
  mounted () {
    this.API.singleCart({itemId: this.$route.query.skuId || '', num: this.$route.query.num || ''}).then(rtn => {
      this.goodSkuList = rtn.skuInformation
      this.spec = JSON.parse(this.goodSkuList.spec)
      this.num = rtn.num
      this.goodsName = rtn.goodsName
    })
    this.API.detailCon({categoryId: 9}).then(res => {
      this.likeList = res.contentList
      this.likeCate = res.contentCategory
    })
  }
}

</script>
<style scoped>
@import "../../assets/css/cart/add-success.css";
</style>
