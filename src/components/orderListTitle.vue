<template>
  <div id="orderListTitle" class="shop-title">
    <ul>
      <li class="title-item one">宝贝</li>
      <li class="title-item two">单价</li>
      <li class="title-item three">数量</li>
      <li class="title-item four">商品操作</li>
      <li class="title-item five">实付款</li>
      <li class="title-item six">
        <div class="group">
          <el-dropdown trigger="click" @command="tab">
            <span class="el-dropdown-link has_pointer">
              {{listSelectStaus}}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item v-for="item in options"
              :key="item.label" :command="item">{{item.label}}</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </li>
      <li class="title-item seven">交易操作</li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      listSelectStaus: '交易状态',
      options: [
        { label: '全部', index: 0 },
        { label: '待付款', index: 1 },
        { label: '已取消', index: 2 },
        { label: '已付款', index: 3 },
        { label: '已发货', index: 4 },
        { label: '已完成', index: 5 },
        { label: '已退款', index: 6 }
      ]
    }
  },
  props: {
    pageSize: {
      type: [Number],
      default: 1
    }
  },
  methods: {
    tab (command) {
      this.listSelectStaus = command.label
      let arg = {userName: this.$cookies.get('user-key'), pageNum: 1, pageSize: this.pageSize}
      if (command.index) {
        Object.assign(arg, {status: command.index})
      }
      this.API.userOrder(arg).then(res => {
        // 选择的交易状态数据替换所有订单数据、父页面的pageNum
        this.$emit('changePageNum', [res, command.index])
      })
    }
  }
}
</script>
<style scoped>
  .has_pointer {
    cursor: pointer;
  }
  .shop-title {
    width: 1053px;
    height: 40px;
    background: rgba(245, 245, 245, 1);
    border: 1px solid rgba(231, 231, 231, 1);
    margin-top: 10px;
    line-height: 40px;
    color: #7e7e7e;
    font-size: 14px;
  }
  .shop-title ul {
    display: flex;
  }
  .title-item{
    text-align: center;
  }
  .one {
    width: 460px;
  }
  .two, .three, .four {
    width: 85px;
  }
  .five, .six {
    width: 116px;
  }
  .seven {
    flex-grow: 1
   }
</style>
