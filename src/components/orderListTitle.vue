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
            <span class="el-dropdown-link">
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
      ],
      pageNum: 1
    }
  },
  props: [],
  methods: {
    tab (command) {
      console.log(command, 'tab')
      this.listSelectStaus = command.label
      // 修改父页面的pageNum
      this.$emit('changePageNum', 1)
      this.pageNum = 1
      this.API.userOrder({userName: this.$cookies.get('user-key'), status: command.index, pageNum: this.pageNum, pageSize: 15}).then(res => {
        // 选择的交易状态数据替换所有订单数据
        this.all = res
      })
    }
  }
}
</script>
<style scoped>
  .shop-title {
    width: 1065px;
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
  .six {
    width: 116px;
  }
  .five, .seven {
    flex-grow: 1
   }
</style>
