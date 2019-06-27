<template>
  <div class="content" data-attr="three 待收货">
    <orderListSearch v-if="waitConfirm.total" :status="status" :pageNum="pageNum" @search="changeValue($event)"></orderListSearch>
    <div class="shop">
      <orderListTitle></orderListTitle>
      <div class="shop-handle">
        <div class="choose" v-if="waitConfirm.total">
          <input class="has_pointer" type="checkbox" @click="selectAll" v-model="isChecked"/><span>全选</span>
          <button class="confirm-btn">批量确认收货</button>
        </div>
        <div class="page">
          <button class="page-btn">上一页</button>
          <button class="page-btn forbidden">下一页</button>
        </div>
      </div>
      <div class="shop-list" v-for="list in waitConfirm.rows" :key="list.id">
        <orderListContentHead :list="list" :selectArr="selectArr" @toggle="toggle($event)"></orderListContentHead>
        <orderListContent :list="list"></orderListContent>
      </div>
      <div v-if="!waitConfirm.total" class="shop-list not-data">没有符合条件的商品</div>
    </div>
    <el-pagination  v-if="waitConfirm.total"
      :page-size="15"
      layout="prev, pager, next, jumper"
      :total="waitConfirm.total">
    </el-pagination>
  </div>
</template>
<script>
import orderListTitle from '@/components/orderListTitle'
import orderListContentHead from '@/components/orderListContentHead'
import orderListContent from '@/components/orderListContent'
import orderListSearch from '@/components/orderListSearch'
export default {
  data () {
    return {
      waitConfirm: '', // 待收货
      pageNum: 1,
      status: 4,
      selectArr: [],
      isChecked: false
    }
  },
  components: { orderListTitle, orderListContentHead, orderListContent, orderListSearch },
  mounted () {
    // 待收货
    this.API.userOrder({userName: this.$cookies.get('user-key'), status: this.status, pageNum: this.pageNum, pageSize: 15}).then(res => {
      this.waitConfirm = res
    })
  },
  methods: {
    changeValue (data) {
      this.pageNum = data[1]
      this.waitConfirm = data[0]
    },
    // 全选
    selectAll (event) {
      if (!event.currentTarget.checked) this.selectArr = []
      else {
        this.selectArr = []
        this.waitConfirm.rows.forEach(item => {
          this.selectArr.push(item)
        })
      }
    },
    // 选择、切换
    toggle (item) {
      if (this.selectArr.indexOf(item) >= 0) {
        this.$delete(this.selectArr, this.selectArr.indexOf(item))
        this.isChecked = false
      } else {
        this.selectArr.push(item)
        if (this.selectArr.length === this.waitConfirm.rows.length) this.isChecked = true
      }
    }
  },
  watch: {
    pageNum (newPage) {
      // 初始化
      this.selectArr = []
      this.isChecked = false
    }
  }
}
</script>
<style scoped>
  .has_pointer {
    cursor: pointer;
  }
  .not-data {
    height: 130px;
    line-height: 130px;
    text-align: center;
    border: none !important;
  }
  .el-pagination {
    display: flex;
    justify-content: flex-end;
    padding-right: 30px;
    margin-top: 30px;
  }
  .content .shop {
    margin:0 14px;
    font-weight: 300;
  }
  /* 选择 合并 上下页*/
  .shop .shop-handle {
    height: 30px;
    line-height: 30px;
    margin-top: 10px;
    font-size: 14px;
    color: rgba(98, 98, 98, 1);
  }
  .shop-handle .choose {
    float: left;
    display: flex;
    align-items: center;
  }
  .shop .shop-handle input {
    height: 15px;
    width: 15px;
    margin-right: 10px;
  }
  .shop .shop-handle .page {
    display: inline-block;
    float: right;
  }
  .shop .shop-handle .confirm-btn {
    padding: 0 15px;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(199, 199, 199, 1);
    border-radius: 3px;
    line-height: 24px;
    margin: 0 0px 0 10px;
    font-size: 14px;
    color: rgba(98, 98, 98, 1);
    cursor: pointer;
  }
  .shop .shop-handle .page-btn {
    width: 59px;
    height: 20px;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(239, 239, 239, 1);
    border-radius: 3px;
    font-size: 13px;
    color: rgba(206, 206, 206, 1);
  }
  .shop .forbidden {
    background: rgba(244, 244, 244, 1) !important;
    color: rgba(98, 98, 98, 1);
  }
  .shop .shop-list {
    margin-top: 14px;
    width: 1065px;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(191, 191, 191, 1);
    color: #414141;
    font-size: 13px;
  }
  .shop .shop-list li:first-child {
    width: 719px;
    border-left: none;
    display: flex;
  }
</style>
