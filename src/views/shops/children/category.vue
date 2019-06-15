<template>
  <div class="layout_page" data-id="page-main">
    <div class="store_form">
      <div class="store_search">
        <input type="search" name="" placeholder="请输入关键词" v-model="searchKey" @keyup.enter="searchSet()">
        <span class="search_btn" @click="searchSet()"><i class="el-icon-search"></i></span>
      </div>
    </div>
    <div class="layout_m">
      <div class="pre_item_wrap">
        <!-- 组件内容...窄栏 -->
        <div class="pre_module" style="z-index: 2;">
          <!-- 窄栏数据遍历 -->
          <div class="pre_module_con">
            <!-- 窄栏项模板>>组件 -->
            <chanpinfenleiN :menuCate="menuCate"></chanpinfenleiN>
          </div>
          <div class="pre_module_con">
            <pingpuN :list="NewSet"></pingpuN>
          </div>
        </div>
        <!-- 组件内容...宽栏 -->
        <div class="pre_module">
          <!-- 宽栏数据遍历 -->
          <div class="pre_module_con" v-show="Object.keys(dataset).length && dataset.total">
            <!-- 宽栏项模板>>组件 -->
            <pingpuW :list="dataset.rows"></pingpuW>
          </div>
          <div v-show="!Object.keys(dataset).length || !dataset.total">
            <p class="search_not">没找到符合条件的商品,换个条件或关键词试试吧。</p>
          </div>
        </div>
      </div>
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
      storeId: '',
      dataset: {},
      page: 1,
      rows: 10000,
      NewSet: [],
      searchKey: ''
    }
  },
  components: {
    /* 菜单和模板 */
    pingpuN: () => import('@/components/goods/pingpu_n'),
    pingpuW: () => import('@/components/goods/pingpu_w'),
    chanpinfenleiN: () => import('@/components/goods/chanpinfenlei_n')
  },
  mounted () {
    this.storeId = this.$route.query.homeShops
    let cateId = this.$route.query.cateId || ''

    this.API.getShopNew({ sellerId: this.storeId }).then(res => {
      this.NewSet = res
    })

    this.searchSet(cateId)
    this.$nextTick(() => {
      document.documentElement.scrollTop = this.scroll
    })
  },
  methods: {
    searchSet (cateId = '') {
      this.API.getShopCate({ page: this.page, rows: this.rows, sellerId: this.storeId, keyWord: this.searchKey, productTypeId: cateId }).then(res => {
        this.dataset = res
      })
    }
  },
  watch: {
    $route (newV, oldV) {
      this.searchSet(newV.query.cateId)
    }
  }
}
</script>
<style scoped lang="scss">
  .store_form {
    margin: 20px auto;
    width: 1226px;
  }
  .store_search {
    width: 220px;
    text-align: left;
    display: flex;
    align-item: center;
    input {
      display: block;
      width: 168px;
      height: 28px;
      border-radius: 4px;
      text-decoration: none;
      border: none;
      border: 1px solid #aaa;
      -webkit-appearance: none;
      &:hover {
        outline: none;
      }
      &:focus {
        outline: none;
      }
    }
    input[type="search"]::-webkit-search-cancel-button {
      display: none;
    }
    .search_btn {
      padding-left: 10px;
      font-size: 20px;
      line-height: 28px;
      color: #333;
      cursor: pointer;
    }
  }
  .search_not {
    color: #333;
  }
  .layout_page {
    width: 100%;
    position: relative;

    .layout_m {
      width: 1226px;
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      margin-bottom: 0px;

      .pre_item_wrap {
        position: relative;
        width: 100%;
        margin-top: 0;
        min-height: 50px;
        z-index: 1;
        display: flex;
        justify-content: space-between;

        .pre_module {
          height: auto;
          z-index: 1;
          position: relative;

          .pre_module_con {
            position: relative;
            zoom: 1;
            margin-bottom: 20px;
            min-height: 50px;
            &>:nth-child(n) {
              background: #fff;
            }
          }
        }
      }
    }
  }
</style>
