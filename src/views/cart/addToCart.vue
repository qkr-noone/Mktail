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
                <div class="p-name"><a>{{goodsName}}{{goodSkuList.title}}</a></div>
                <div class="p-extra"><span>{{spec}}</span><span>数量：{{num}}</span></div>
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
      <!-- <div class="like">
        <h4 class="kt">猜你喜欢</h4>
        <div class="like-list">
          <ul class="yui3-g">
            <li class="yui3-u-1-6">
              <div class="list-wrap">
                <div class="p-img">
                  <img src="static/img/itemlike01.png" />
                </div>
                  <div class="attr">
                    <em>DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</em>
                  </div>
                  <div class="price">
                    <strong>
                <em>¥</em>
                <i>3699.00</i>
              </strong>
                  </div>
                  <div class="commit">
                    <i class="command">加入购物车</i>
                  </div>
                </div>
            </li>
            <li class="yui3-u-1-6">
              <div class="list-wrap">
                <div class="p-img">
                  <img src="static/img/itemlike02.png" />
                </div>
                  <div class="attr">
                    <em>Apple苹果iPhone 6s/6s Plus 16G 64G 128G</em>
                  </div>
                  <div class="price">
                    <strong>
                <em>¥</em>
                <i>4388.00</i>
              </strong>
                  </div>
                  <div class="commit">
                    <i class="command">加入购物车</i>
                  </div>
                </div>
            </li>
            <li class="yui3-u-1-6">
              <div class="list-wrap">
                <div class="p-img">
                  <img src="static/img/itemlike03.png" />
                </div>
                  <div class="attr">
                    <em>DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</em>
                  </div>
                  <div class="price">
                    <strong>
                <em>¥</em>
                <i>4088.00</i>
              </strong>
                  </div>
                  <div class="commit">
                    <i class="command">加入购物车</i>
                  </div>
                </div>
            </li>
            <li class="yui3-u-1-6">
              <div class="list-wrap">
                <div class="p-img">
                  <img src="static/img/itemlike04.png" />
                </div>
                  <div class="attr">
                    <em>DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</em>
                  </div>
                  <div class="price">
                    <strong>
                <em>¥</em>
                <i>4088.00</i>
              </strong>
                  </div>
                  <div class="commit">
                    <i class="command">加入购物车</i>
                  </div>
                </div>
            </li>
            <li class="yui3-u-1-6">
              <div class="list-wrap">
                <div class="p-img">
                  <img src="static/img/itemlike05.png" />
                </div>
                  <div class="attr">
                    <em>DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</em>
                  </div>
                  <div class="price">
                    <strong>
                <em>¥</em>
                <i>4088.00</i>
              </strong>
                  </div>
                  <div class="commit">
                    <i class="command">加入购物车</i>
                  </div>
                </div>
            </li>
            <li class="yui3-u-1-6">
              <div class="list-wrap">
                <div class="p-img">
                  <img src="static/img/itemlike06.png" />
                </div>
                  <div class="attr">
                    <em>DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</em>
                  </div>
                  <div class="price">
                    <strong>
                <em>¥</em>
                <i>4088.00</i>
              </strong>
                  </div>
                  <div class="commit">
                    <i class="command">加入购物车</i>
                  </div>
                </div>
            </li>
          </ul>
        </div>
      </div> -->
    </div>
    <pageFooter></pageFooter>
  </div>
</template>
<script>
import shortcutHeader from '../../components/shortcutHeader'
import pageFooter from '../../components/pageFooter'
import { apiAxios } from '../../common/utils'
import { api } from '../../common/api'
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
  components: { shortcutHeader, pageFooter },
  activated () {},
  deactivated () {
    this.$destroy()
  },
  mounted () {
    apiAxios.AxiosG({
      url: api.singleCart,
      params: {itemId: this.$route.query.skuId || '', num: this.$route.query.num || ''}
    }, rtn => {
      if (rtn.data.success) {
        this.goodSkuList = rtn.data.data.skuInformation
        this.spec = JSON.parse(this.goodSkuList.spec)
        console.log(this.spec)
        let ts = ''
        // for (let item of this.spec) {
        //   ts += item
        // }
        // console.log(ts)
        for (let val in this.spec) {
          ts += val + '：' + this.spec[val] + '/'
          console.log(val, this.spec, ts, 2)
        }
        this.spec = ts
        console.log(this.spec, 3)
        this.num = rtn.data.data.num
        this.goodsName = rtn.data.data.goodsName
      } else {
        this.$message.warning('显示有误')
      }
    })
    apiAxios.AxiosG({
      url: api.detailCon,
      params: {categoryId: 9}
    }, res => {
      if (res.data.success) {
        this.likeList = res.data.data.contentList
        this.likeCate = res.data.data.contentCategory
      }
    })
  }
}

</script>
<style scoped>
@import "../../assets/css/cart/add-success.css";
/*@import "../../assets/css/detail/pages-item.css"*/
</style>
