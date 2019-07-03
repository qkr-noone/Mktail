<template>
  <!-- 提交工单 -->
  <div class="submit efSubmit" v-show="close">
    <div class="submit-title">
      创建工单
      <i class="el-icon-close" @click="close = false"></i>
    </div>
    <div class="submit-main">
      <div>
        <div>工单名称:</div>
        <input type="text" v-model="submit.workName">
      </div>
      <div>
        <div>单位:</div>
        <input type="text" v-model="submit.unit">
      </div>
      <div>
        <div>联系人:</div>
        <input type="text" v-model="submit.linkman">
      </div>
      <div>
        <div>联系方式:</div>
        <input type="text" v-model="submit.phone">
      </div>
      <div>
        <div>电子邮件:</div>
        <input type="text" v-model="submit.email">
      </div>
      <div>
        <div>工单描述:</div>
        <el-input
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 4}"
          placeholder="请输入内容"
          v-model="submit.description">
        </el-input>
      </div>
      <div>
        <div style="line-height: 20px;">文件上传:</div>
        <div>
          <div>
            <i class="el-icon-folder" style="font-size: 20px;color: #000;"></i>
            <el-upload
              class="upload-demo"
              :show-file-list="false"
              action="https://mktail.oss-cn-shenzhen.aliyuncs.com"
              multiple
              :limit="5"
              :http-request="httpRequest">
              <span style="font-size: 13px;">CAD图纸/图片上传</span>
            </el-upload>
            <span style="font-size: 10px;margin-top: 4px;">支持jpg/png/dwg</span>
          </div>
          <div>
            <div class="image" v-for="(item, i) in submit.images" :key="i">
              <img :src="item" alt="">
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>完工日期:</div>
        <el-date-picker
          v-model="submit.endTime"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
      </div>
      <div>
        <div>期待价格:</div>
        <input type="text" style="width: 56px;" v-model="submit.price">
        <span style="margin: 0 7px;">-</span>
        <input type="text" style="width: 56px;" v-model="submit.prices">
        <span style="margin-left: 7px;">元</span>
      </div>
    </div>
    <div class="submit-footer" @click="submitBtn">
      提交
    </div>
  </div>
</template>

<script>
import { uuid } from '@/common/utils'
import { url } from '@/common/oss'

export default {
  props: {
    submitNum: {
      type: Number
    }
  },
  data () {
    return {
      close: false,
      submit: {
        description: '', // 工单描述
        email: '', // 电子邮箱
        endTime: '', // 完成日期
        images: [], // 图片丶文件
        linkman: '', // 联系人
        phone: '', // 联系方式
        price: '', // 期待价格(最低)
        prices: '', // 期待价格(最高)
        unit: '', // 单位
        workName: '', // 工单名称
        sellerId: this.$route.query.seller
      }
    }
  },
  methods: {
    httpRequest (file) { // 提交工单文件上传
      let data = new FormData()
      this.API.policy().then(res => {
        data.append('OSSAccessKeyId', res.accessKeyId)
        data.append('policy', res.policy)
        data.append('Signature', res.signature)
        data.append('key', 'file/' + uuid())
        data.append('callback', res.callback)
        data.append('file', file.file)
        url(data, (progress, loaded, total) => {
          // this.showProgress(progress, loaded, total)
        }).then(res => {
          this.submit.images.push(res.filename)
        })
      })
    },
    submitBtn () { // 添加工单
      this.API.addWorkOrder(this.submit).then(res => {
        this.close = false
        Object.assign(this.$data.submit, this.$options.data().submit)
        this.$message({
          message: '创建工单成功',
          type: 'success'
        })
      })
    }
  },
  watch: {
    submitNum () {
      this.close = true
    }
  }
}

</script>
<style lang="scss" scoped>
.submit{
  width: 366px;
  background: #f6f6f6;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .submit-title{
    height: 26px;
    background: #ff4646;
    color: #fff;
    line-height: 26px;
    display: flex;
    justify-content: flex-end;
    padding-right: 9px;
    font-size: 14px;
    i{
      margin-left: 137px;
      line-height: 26px;
      cursor: pointer;
    }
  }
  .submit-main{
    padding-top: 18px;
    >div{
      display: flex;
      margin-bottom: 14px;
      >div{
        &:nth-of-type(1){
          width: 111px;
          text-align: right;
          margin-right: 8px;
        }
        &:nth-of-type(2){
          >div{
            display: flex;
            &:nth-of-type(1){
              margin-bottom: 8px;
            }
            &:nth-of-type(2){
              width: 200px;
              display: flex;
              flex-wrap: wrap;
              .image{
                width: 60px;
                height: 60px;
                border: 1px solid #e3e3e3;
                padding: 2px;
                margin: 0 6px 4px 0;
                position: relative;
                img{
                  max-width: 58px;
                  max-height: 58px;
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%,-50%);
                }
                &:nth-last-child(1),&:nth-last-child(2){
                  margin-bottom: 0;
                }
              }
            }
          }
        }
      }
      >input{
        width: 167px;
        height: 18px;
        border: 1px solid #a3a3a3;
      }
    }
  }
  .submit-footer{
    width: 72px;
    height: 23px;
    background: #31a9bd;
    margin: 0 auto 16px;
    color: #000;
    text-align: center;
    line-height: 23px;
    cursor: pointer;
  }
  .upload-demo{
    padding-top: 2px;
    margin-right: 6px;
    span{
      text-decoration: underline;
    }
  }
}
</style>
<style lang="scss">
.efSubmit{
  .el-textarea{
    width: 167px;
    .el-textarea__inner{
      border: 1px solid #a3a3a3;
      border-radius: 0;
      padding: 0;
    }
  }
  .el-date-editor.el-input{
    width: 167px;
    height: 18px;
    .el-input__inner{
      height: 18px;
      border: 1px solid #a3a3a3;
      border-radius: 0;
    }
    i{
      line-height: 16px;
    }
  }
}
</style>
