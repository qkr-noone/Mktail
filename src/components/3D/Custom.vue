<template>
  <div class="custom" v-if="close">
    <div>
      <div class="header">
        <div>自定义商品</div>
        <i class="el-icon-close" @click="close = false"></i>
      </div>
      <div class="main">
        <div class="main-left">
          <p>搜索商品</p>
          <div class="search">
            <input type="text" v-model="name"><button @click="findThreeDGoodsByProductTypeIdAndNameF">搜索</button>
          </div>
          <p>产品分类</p>
          <div class="treeBox">
            <el-tree
              :data="tree"
              :props="defaultProps"
              accordion
              @node-click="handleNodeClick">
            </el-tree>
          </div>
        </div>
        <div class="main-right">
          <div v-for="(item, i) in goodsList" :key="i" class="goodsList">
            <div class="imgBox">
              <img :src="item.smallPic" alt="">
            </div>
            <div class="goodsName">
              <p>{{item.goodsName}}</p><button @click="chooseBtn(item)" :class="item.id === chooseId ? 'btn':''">{{ item.id === chooseId ? '取消':'选择'}}</button>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <button @click="btn">确定</button>
        <button @click="close = false">取消</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    customNum: {
      type: Number
    }
  },
  data () {
    return {
      close: false,
      tree: [],
      goodsList: [],
      defaultProps: {
        children: 'children',
        label: 'name'
      },
      name: '',
      productTypeId: '',
      chooseId: '',
      threeId: ''
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.API.findProductTypeComboList({ sellerId: this.$route.query.seller }).then(res => {
        this.tree = res
      })
      this.findThreeDGoodsByProductTypeIdAndNameF()
    },
    findThreeDGoodsByProductTypeIdAndNameF () {
      this.API.findThreeDGoodsByProductTypeIdAndName({ name: this.name, productTypeId: this.productTypeId, sellerId: this.$route.query.seller }).then(res => {
        this.goodsList = res
      })
    },
    handleNodeClick (data) {
      this.productTypeId = data.id
      this.findThreeDGoodsByProductTypeIdAndNameF()
    },
    chooseBtn (item) {
      if (this.chooseId === item.id) {
        this.chooseId = ''
        this.threeId = ''
      } else {
        this.chooseId = item.id
        this.threeId = item.threeId
      }
    },
    btn () {
      if (this.threeId !== '') {
        this.$emit('custom', this.threeId)
      }
      this.close = false
    }
  },
  watch: {
    customNum () {
      this.close = true
    }
  }
}
</script>
<style lang="scss" scoped>
.custom{
  width: 824px;
  height: 564px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  background: rgba(0, 0, 0, .3);
  padding: 5px 0 0 7px;
  >div{
    width: 808px;
    height: 552px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    background: #fff;
    .header{
      display: flex;
      justify-content: space-between;
      height: 38px;
      border-bottom: 1px solid #e6e6e6;
      background: #f7f7f7;
      font-size: 13px;
      padding: 0 12px;
      line-height: 37px;
      i{
        line-height: 37px;
        font-size: 18px;
        cursor: pointer;
      }
    }
    .main{
      padding: 12px 32px 0 27px;
      display: flex;
      border-bottom: 1px solid #e7e7e7;
      margin-bottom: 18px;
      .main-left{
        width: 294px;
        height: 400px;
        border-right: 1px dashed #c1c1c1;
        .search{
          width: 229px;
          height: 26px;
          background: #f3f3f3;
          padding: 3px 0 0 3px;
          margin-bottom: 8px;
          input{
            width: 173px;
            height: 20px;
            border: 1px solid #b0b0b0;
          }
          button{
            width: 51px;
            height: 22px;
            border: 1px solid #b0b0b0;
            background: linear-gradient(#fff, #dcdcdc);
            transform: translate(-1px,1px);
          }
        }
        p{
          margin-bottom: 10px;
          font-size: 12px;
        }
        .treeBox{
          height: 314px;
          overflow:auto;
        }
      }
      .main-right{
        padding-left: 20px;
        width: 436px;
        height: 412px;
        overflow: auto;
        .goodsList{
          display: flex;
          height: 83px;
          .imgBox{
            width: 52px;
            height: 52px;
            border: 1px solid #d9d9d9;
            margin-right: 20px;
            position: relative;
            margin-top: 16px;
            img{
              max-width: 50px;
              max-height: 50px;
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%,-50%);
            }
          }
          .goodsName{
            width: 324px;
            border-bottom: 1px dashed #bdbdbd;
            display: flex;
            justify-content: space-between;
            padding: 30px 6px 0 0;
            p{
              width: 204px;
              height: 42px;
              word-break:break-all;
              display:-webkit-box;
              -webkit-box-orient:vertical;
              -webkit-line-clamp:2;
              overflow:hidden;
              transform: translateY(-10px);
            }
            button{
              width: 51px;
              height: 20px;
              background: linear-gradient(#fff, #ddd);
              border: 1px solid #b0b0b0;
              border-radius: 2px;
            }
            .btn{
              border-color: skyblue;
              background: linear-gradient(#f6fdff, #96badd);
            }
          }
        }
      }
    }
    .footer{
      display: flex;
      justify-content: flex-end;
      padding-right: 34px;
      button{
        width: 62px;
        height: 32px;
        font-size: 12px;
        border-radius: 4px;
        margin-left: 13px;
        &:nth-of-type(1){
          border: 1px solid #627ffe;
          background: linear-gradient(#b8c6fe, #7a8bce);
          color: #fff;
        }
        &:nth-of-type(2){
          border: 1px solid #a8a8a8;
          background: linear-gradient(#fff, #e6e6e6);
        }
      }
    }
  }
}
</style>
