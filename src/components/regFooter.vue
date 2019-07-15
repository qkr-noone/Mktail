<template>
  <div>
    <footer>
      <ul class="footer-list">
        <li class="footer-list-item">
<<<<<<< HEAD
          <a ref="http://www.baidu.com" @click="MK_CODE('关于MKtail')">关于MKtail</a>&nbsp;&nbsp;||
        </li>
        <li class="footer-list-item">
          <a ref="http://www.baidu.com" @click="MK_CODE('联系我们')">联系我们</a>&nbsp;&nbsp;||
        </li>
        <li class="footer-list-item">
          <a ref="http://www.baidu.com" @click="MK_CODE('友情链接')">友情链接</a>&nbsp;&nbsp;||
        </li>
        <li class="footer-list-item">
          <a ref="http://www.baidu.com" @click="MK_CODE('法律声明')">法律声明</a>&nbsp;&nbsp;||
        </li>
        <li class="footer-list-item">
          <a ref="http://www.baidu.com" @click="MK_CODE('用户体验提升计划')">用户体验提升计划</a>&nbsp;&nbsp;||
        </li>
        <li class="footer-list-item">
          <a ref="http://www.baidu.com" @click="MK_CODE('会员认证')">会员认证</a>
        </li>
      </ul>
      <p><span class="compony_copy" @click="MK_CODE('公司版权所有')">MKtail公司版权所有-粤ICP备京公网安备</span><img src="static/img/reg/reg_ghs1.png">&nbsp;&nbsp;&nbsp;&nbsp;粤ICP备18102801号-2</p>
=======
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
>>>>>>> remotes/origin/master
    </footer>
  </div>
</template>
<script>
<<<<<<< HEAD
import { mapMutations } from 'vuex'
=======
>>>>>>> remotes/origin/master
export default {
  name: 'regFooter',
  data () {
    return {}
  },
<<<<<<< HEAD
  props: [],
  methods: {
    ...mapMutations(['MK_CODE'])
  }
=======
  props: []
>>>>>>> remotes/origin/master
}
</script>
<style scoped>
  /*尾部*/
  footer{
    height:133px;
    display: flex;
    flex-direction: column;
    align-items: center;
<<<<<<< HEAD
    justify-content:center;
    font-size: 12px;
    font-family: "Helvetica Neue", Helvetica, Arial, "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
=======
    justify-content:start;
    font-size:15px;
    font-family:SourceHanSansCN-Regular;
>>>>>>> remotes/origin/master
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
<<<<<<< HEAD
  .footer-list-item>a,.compony_copy {
    cursor: pointer;
  }
=======
>>>>>>> remotes/origin/master
  footer img{
    display: inline;
  }
</style>
