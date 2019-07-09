<template>
  <div class="layout_page" data-id="page-main">
    <div class="content_bg" data-title="内容主体背景"></div>
    <div class="layout_m" v-for="(list, index) in tree" :key="index">
      <div class="pre_item_wrap">
        <!-- 组件内容...窄栏 -->
        <div class="pre_module" style="z-index: 2;" v-if="list.passModuleDataList&&!list.passModuleDataList.length">
          <!-- 窄栏数据遍历 -->
          <div class="pre_module_con" v-for="item in list.narrowModuleDataList" :key="item.id" :data-template="item.templateName">
            <!-- 窄栏项模板>>组件 -->
            <component :is="item.template" :list="item.dataList" :dataUrl="item.data" :menuCate="menuCate" :storeId="storeId"></component>
          </div>
        </div>
        <!-- 组件内容...宽栏 -->
        <div class="pre_module" v-if="list.passModuleDataList&&!list.passModuleDataList.length">
          <!-- 宽栏数据遍历 -->
          <div class="pre_module_con"  v-for="item in list.widthModuleDataList" :key="item.id" :data-template="item.templateName">
            <!-- 宽栏项模板>>组件 -->
            <component :is="item.template" :list="item.dataList" :dataUrl="item.data"></component>
          </div>
        </div>
        <!-- 组件内容...通栏 -->
        <div class="pre_module" style="width: 100%;" v-if="list.passModuleDataList&&list.passModuleDataList.length">
          <!-- 通栏数据遍历 -->
          <div class="pre_module_con" v-for="item in list.passModuleDataList" :key="item.id" :data-template="item.templateName">
            <!-- 通栏项模板=>>组件 -->
            <component :is="item.template" :list="item.dataList" :dataUrl="item.data" :videoCover="item.config"></component>
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
      tree: []
    }
  },
  components: {
    /* 菜单和模板 */
    pingpuP: () => import('@/components/goods/pingpu_p'),
    pingpuW: () => import('@/components/goods/pingpu_w'),
    pingpuN: () => import('@/components/goods/pingpu_n'),
    chuchuangP: () => import('@/components/goods/chuchuang_p'),
    chuchuangW: () => import('@/components/goods/chuchuang_w'),
    daileimuP: () => import('@/components/goods/daileimu_p'),
    // 智能产品与重点推荐一样布局
    zhongdiantuijianP: () => import('@/components/goods/zhongdiantuijian_p'),
    danpinP: () => import('@/components/goods/danpin_p'),
    zhuyingleimuP: () => import('@/components/goods/zhuyingleimu_p'),
    smart: () => import('@/components/goods/zhongdiantuijian_p'),
    chanpinfenleiN: () => import('@/components/goods/chanpinfenlei_n'),
    industry: () => import('@/components/picWord/industry'),
    fullScreen: () => import('@/components/picWord/fullScreen'),
    banner: () => import('@/components/picWord/banner'),
    dynamic: () => import('@/components/video/dynamic'),
    live: () => import('@/components/video/live'),
    threeD: () => import('@/components/video/3D'),
    // 客服模块 通栏 宽栏一样布局
    customer: () => import('@/components/office/customer'),
    customerN: () => import('@/components/office/customer_n')
  },
  mounted () {
    this.storeId = this.$route.query.homeShops
    // dom树
    this.API.initShops({ sellerId: this.storeId }).then(res => {
      this.tree = res
      // this.$nextTick(() => {
      //   document.documentElement.scrollTop = this.scroll
      // })
    })
  }
}
</script>
<style scoped lang="scss">
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
  .content_bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    min-height: 100%;
    z-index: 1;
    background-color: rgb(253, 253, 253);
    /* background-image: url(//sc01.alicdn.com/kf/HTB1z.roUOLaK1RjSZFxq6ymPFXaW.jpg); */
    background-repeat: no-repeat;
    background-position: center top;
    zoom: 1;
  }
</style>
