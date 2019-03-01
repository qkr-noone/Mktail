<template>
  <div>
    <footer>
      <ul class="footer-list">
        <li class="footer-list-item">
          <a ref="http://www.baidu.com" >关于MKtail</a>&nbsp;&nbsp;||
        </li>
        <li class="footer-list-item">
          <a ref="http://www.baidu.com" >联系我们</a>&nbsp;&nbsp;||
        </li>
        <li class="footer-list-item">
          <a ref="http://www.baidu.com" >友情链接</a>&nbsp;&nbsp;||
        </li>
        <li class="footer-list-item">
          <a ref="http://www.baidu.com" >法律声明</a>&nbsp;&nbsp;||
        </li>
        <li class="footer-list-item">
          <a ref="http://www.baidu.com" >用户体验提升计划</a>&nbsp;&nbsp;||
        </li>
        <li class="footer-list-item">
          <a ref="http://www.baidu.com" >会员认证</a>
        </li>
      </ul>
      <p>MKtail公司版权所有-粤ICP备京公网安备 <img src="static/img/reg/reg_ghs1.png">11010820220134号-京ICP证110507</p>
    </footer>
  </div>
</template>
<script>
export default {
  name: 'regFooter',
  data () {
    return {}
  },
  props: []
}
</script>
<style scoped>
  /*尾部*/
  footer{
    height:133px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    font-size:15px;
    font-family:Bahnschrift;
    font-weight:400;
  }
  .footer-list{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;
  }
  footer p{
    color:rgba(88,88,88,1);
  }
  .footer-list-item{
    margin-right:10px;
    color:rgba(109,109,109,1);
  }
  footer img{
    display: inline;
  }
</style>
