<template>
  <div id="reg-legal">
    <div class="container">
      <regComFooter></regComFooter>
      <div class="middle">
        <div class="title">
          <p class="title-text">法律声明</p>
          <router-link :to="{path: '/register', query: tem}" style="color: #ffd704">返回注册</router-link>
          <span class="effective-date">生效日期 ：2018年12月25日</span>
        </div>
        <div class="middle-content">
          <p><strong>权利归属</strong><br>
            &nbsp;&nbsp;除非猴尾巴网另行声明，猴尾巴网推出的所有官方产品、技术、软件、程序、数据及其他信息（包括文字、图标、图片、照片、音频、视频、图表、色彩组合、版面设计等）
            的所有权利（包括著作权、商标权、专利权、商业秘密及其他相关权利）均归猴尾巴公司及/或其关联公司所有。未经猴尾巴公司及/或其关联公司事先许可，任何人擅自使用上述内容和信息，
            可能会侵犯猴尾巴公司及/或其关联公司的权利，我公司将会追究侵权者的法律责任。如有宣传、展示等任何使用需要，您务必取得猴尾巴公司及/或其关联公司的事先许可。
          </p>
          <p><strong>责任限制</strong><br>
            鉴于猴尾巴网提供的信息发布服务属于电子公告牌（BBS）性质，猴尾巴网上的店铺、商品信息（包括但不限于店铺名称、公司名称、联系人及联络信息、产品的描述和说明、相关图片、视频等）
            由用户自行提供并上传，由用户对其提供并上传的信息承担相应法律责任。猴尾巴网服务提供者对此另有约定的，将在相关的协议或其他法律文本中与您进行明确。
          </p>
          <p>猴尾巴网转载的作品（包括论坛内容）出于传递更多信息之目的，并不意味我们赞同其观点或已经证实其内容的真实性。</p>
          <p><strong>知识产权保护</strong><br>
              我们尊重知识产权，反对并打击侵犯知识产权的行为。知识产权权利人若认为猴尾巴网内容
            （包括但不限于猴尾巴网用户发布的商品信息）侵犯其合法权益的，可以通过客服平台进行投诉，我们将在收到投诉通知后依据相应的法律法规以及平台规则及时处理。
          </p>
        </div>
      </div>
      <regFooter></regFooter>
    </div>
  </div>
</template>
<script>
import regComFooter from '@/components/regComFooter'
import regFooter from '@/components/regFooter'
export default {
  data () {
    return {
      tem: {}
    }
  },
  components: { regComFooter, regFooter },
  mounted () {
    this.tem = this.$route.query
  }
}
</script>
<style scoped>
  @import '../../../assets/css/user/reg.css';
</style>
