<template ref="template">
  <div id="index">
    <!-- 头部、登陆、标语、直播、3D -->
    <div class="container_h">
      <div class="header">
        <div class="title" @click="onTest">
          <div class="logo_info">
              <div class="logo"><img src="../../../static/img/logo.png?width=50px"></div>
              <div class="logo_hopes"><img src="../../../static/img/HOPES_logo.png?width=50px"></div>
          </div>
          <div class="link_info">
            <p class="hopes_fonts">XINXING:OEM</p>
            <div class="link">
              <div><img class="phone_img" src="../../../static/img/phone.png"><p>86-020-87937688</p></div>
              <div><img class="phone_img email" src="../../../static/img/email.png"><p>hopes@icaster.xin</p></div>
            </div>
          </div>
        </div>
        <form class="sign_in" action="" method="get">
          <h2>SIGN IN:</h2>
          <div class="sign_in_input">
            <a><img src="../../../static/img/user.png?width=20px"></a><input type="text" name="" placeholder="User name/email">
          </div>
          <div class="sign_in_input">
            <a><img src="../../../static/img/password.png?width=20px"></a><input type="text" name="">
          </div>
          <input id="submit" type="button" value="Submit" />
          <router-link :to="{ path: '/test/index' }">test</router-link>
        </form>
      </div>
  <div class="sort">
    <div class="py-container">
      <div class="yui3-g SortList ">
        <div class="yui3-u Left all-sort-list">
          <div class="all-sort-list2">
            <div class="item bo" >
              <h3><a href="">图书、音像、数字商品</a></h3>
              <div class="item-list clearfix" >
                <div class="subitem">
                  <dl class="fore1">
                    <dt><a href="">电子书</a></dt>
                    <dd><a href="">免费</a><a href="">小说</a><a href="">婚恋/两性</a><a href="">文学</a><a href="">经管</a><a href="">畅读VIP</a></dd>
                  </dl>
                  <dl class="fore2">
                    <dt><a href="">数字音乐</a></dt>
                    <dd><a href="">通俗流行</a><a href="">古典音乐</a><a href="">摇滚说唱</a><a href="">爵士蓝调</a><a href="">乡村民谣</a><a href="">有声读物</a></dd>
                  </dl>
                  <dl class="fore3">
                    <dt><a href="">音像</a></dt>
                    <dd><a href="">音乐</a><a href="">影视</a><a href="">教育音像</a><a href="">游戏</a></dd>
                  </dl>
                  <dl class="fore4">
                    <dt><a href="">文艺</a></dt>
                    <dd><a href="">小说</a><a href="">文学</a><a href="">青春文学</a><a href="">传记</a><a href="">艺术</a></dd>
                  </dl>
                  <dl class="fore5">
                    <dt><a href="">人文社科</a></dt>
                    <dd><a href="">历史</a><a href="">心理学</a><a href="">政治/军事</a><a href="">国学/古籍</a><a href="">哲学/宗教</a><a href="">社会科学</a></dd>
                  </dl>
                  <dl class="fore6">
                    <dt><a href="">经管励志</a></dt>
                    <dd><a href="">经济</a><a href="">金融与投资</a><a href="">管理</a><a href="">励志与成功</a></dd>
                  </dl>
                  <dl class="fore7">
                    <dt><a href="">生活</a></dt>
                    <dd><a href="">家庭与育儿</a><a href="">旅游/地图</a><a href="">烹饪/美食</a><a href="">时尚/美妆</a><a href="">家居</a><a href="">婚恋与两性</a><a href="">娱乐/休闲</a><a href="">健身与保健</a><a href="">动漫/幽默</a><a href="">体育/运动</a></dd>
                  </dl>
                </div>
              </div>
            </div>
            <div class="item">
              <h3><a href="">家用电器</a></h3>
              <div class="item-list clearfix">
                <div class="subitem">
                  <dl class="fore1">
                    <dt><a href="">电子书1</a></dt>
                    <dd><a href="">免费</a><a href="">小说</a><a href="">励志与成功</a><a href="">婚恋/两性</a><a href="">文学</a><a href="">经管</a><a href="">畅读VIP</a></dd>
                  </dl>
                  <dl class="fore2">
                    <dt><a href="">数字音乐</a></dt>
                    <dd><a href="">通俗流行</a><a href="">古典音乐</a><a href="">摇滚说唱</a><a href="">爵士蓝调</a><a href="">乡村民谣</a><a href="">有声读物</a></dd>
                  </dl>
                  <dl class="fore3">
                    <dt><a href="">音像</a></dt>
                    <dd><a href="">音乐</a><a href="">影视</a><a href="">教育音像</a><a href="">游戏</a></dd>
                  </dl>
                  <dl class="fore4">
                    <dt>文艺</dt>
                    <dd><a href="">小说</a><a href="">文学</a><a href="">青春文学</a><a href="">传记</a><a href="">艺术</a></dd>
                  </dl>
                  <dl class="fore5">
                    <dt>人文社科</dt>
                    <dd><a href="">历史</a><a href="">心理学</a><a href="">政治/军事</a><a href="">国学/古籍</a><a href="">哲学/宗教</a><a href="">社会科学</a></dd>
                  </dl>
                  <dl class="fore6">
                    <dt>经管励志</dt>
                    <dd><a href="">经济</a><a href="">金融与投资</a><a href="">管理</a><a href="">励志与成功</a></dd>
                  </dl>
                  <dl class="fore7">
                    <dt>生活</dt>
                    <dd><a href="">家庭与育儿</a><a href="">旅游/地图</a><a href="">烹饪/美食</a><a href="">时尚/美妆</a><a href="">家居</a><a href="">婚恋与两性</a><a href="">娱乐/休闲</a><a href="">健身与保健</a><a href="">动漫/幽默</a><a href="">体育/运动</a></dd>
                  </dl>
                  <dl class="fore8">
                    <dt>科技</dt>
                    <dd><a href="">科普</a><a href="">IT</a><a href="">建筑</a><a href="">医学</a><a href="">工业技术</a><a href="">电子/通信</a><a href="">农林</a><a href="">科学与自然</a></dd>
                  </dl>
                  <dl class="fore9">
                    <dt>少儿</dt>
                    <dd><a href="">少儿</a><a href="">0-2岁</a><a href="">3-6岁</a><a href="">7-10岁</a><a href="">11-14岁</a></dd>
                  </dl>
                </div>
              </div>
            </div>
            <div class="item">
              <h3><a href="">手机、数码</a></h3>
              <div class="item-list clearfix">
                <div class="subitem">
                  <dl class="fore1">
                    <dt><a href="">电子书2</a></dt>
                    <dd><a href="">免费</a><a href="">小说</a><a href="">励志与成功</a><a href="">婚恋/两性</a><a href="">文学</a><a href="">经管</a><a href="">畅读VIP</a></dd>
                  </dl>
                  <dl class="fore2">
                    <dt><a href="">数字音乐</a></dt>
                    <dd><a href="">通俗流行</a><a href="">古典音乐</a><a href="">摇滚说唱</a><a href="">爵士蓝调</a><a href="">乡村民谣</a><a href="">有声读物</a></dd>
                  </dl>
                  <dl class="fore3">
                    <dt><a href="">音像</a></dt>
                    <dd><a href="">音乐</a><a href="">影视</a><a href="">教育音像</a><a href="">游戏</a></dd>
                  </dl>
                  <dl class="fore4">
                    <dt>文艺</dt>
                    <dd><a href="">小说</a><a href="">文学</a><a href="">青春文学</a><a href="">传记</a><a href="">艺术</a></dd>
                  </dl>
                  <dl class="fore5">
                    <dt>人文社科</dt>
                    <dd><a href="">历史</a><a href="">心理学</a><a href="">政治/军事</a><a href="">国学/古籍</a><a href="">哲学/宗教</a><a href="">社会科学</a></dd>
                  </dl>
                </div>
              </div>
            </div>
            <div class="item">
              <h3><a href="">电脑、办公</a></h3>
              <div class="item-list clearfix">
                <div class="subitem">
                  <dl class="fore1">
                    <dt><a href="">电子书3</a></dt>
                    <dd><a href="">免费</a><a href="">小说</a><a href="">励志与成功</a><a href="">婚恋/两性</a><a href="">文学</a><a href="">经管</a><a href="">畅读VIP</a></dd>
                  </dl>
                  <dl class="fore2">
                    <dt><a href="">数字音乐</a></dt>
                    <dd><a href="">通俗流行</a><a href="">古典音乐</a><a href="">摇滚说唱</a><a href="">爵士蓝调</a><a href="">乡村民谣</a><a href="">有声读物</a></dd>
                  </dl>
                  <dl class="fore3">
                    <dt><a href="">音像</a></dt>
                    <dd><a href="">音乐</a><a href="">影视</a><a href="">教育音像</a><a href="">游戏</a></dd>
                  </dl>
                  <dl class="fore4">
                    <dt>文艺</dt>
                    <dd><a href="">小说</a><a href="">文学</a><a href="">青春文学</a><a href="">传记</a><a href="">艺术</a></dd>
                  </dl>
                  <dl class="fore5">
                    <dt>人文社科</dt>
                    <dd><a href="">历史</a><a href="">心理学</a><a href="">政治/军事</a><a href="">国学/古籍</a><a href="">哲学/宗教</a><a href="">社会科学</a></dd>
                  </dl>
                  <dl class="fore6">
                    <dt>经管励志</dt>
                    <dd><a href="">经济</a><a href="">金融与投资</a><a href="">管理</a><a href="">励志与成功</a></dd>
                  </dl>
                  <dl class="fore7">
                    <dt>生活</dt>
                    <dd><a href="">家庭与育儿</a><a href="">旅游/地图</a><a href="">烹饪/美食</a><a href="">时尚/美妆</a><a href="">家居</a><a href="">婚恋与两性</a><a href="">娱乐/休闲</a><a href="">健身与保健</a><a href="">动漫/幽默</a><a href="">体育/运动</a></dd>
                  </dl>
                  <dl class="fore8">
                    <dt>科技</dt>
                    <dd><a href="">科普</a><a href="">IT</a><a href="">建筑</a><a href="">医学</a><a href="">工业技术</a><a href="">电子/通信</a><a href="">农林</a><a href="">科学与自然</a></dd>
                  </dl>
                  <dl class="fore9">
                    <dt>少儿</dt>
                    <dd><a href="">少儿</a><a href="">0-2岁</a><a href="">3-6岁</a><a href="">7-10岁</a><a href="">11-14岁</a></dd>
                  </dl>
                  <dl class="fore10">
                    <dt>教育</dt>
                    <dd><a href="">教材教辅</a><a href="">考试</a><a href="">外语学习</a></dd>
                  </dl>
                  <dl class="fore11">
                    <dt>其它</dt>
                    <dd><a href="">英文原版书</a><a href="">港台图书</a><a href="">工具书</a><a href="">套装书</a><a href="">杂志/期刊</a></dd>
                  </dl>
                </div>
              </div>
            </div>
            <div class="item">
              <h3><a href="">家居、家具、家装、厨具</a></h3>
              <div class="item-list clearfix">
                <div class="subitem">
                  <dl class="fore1">
                    <dt><a href="">电子书4</a></dt>
                    <dd><a href="">免费</a><a href="">小说</a><a href="">励志与成功</a><a href="">婚恋/两性</a><a href="">文学</a><a href="">经管</a><a href="">畅读VIP</a></dd>
                  </dl>
                  <dl class="fore2">
                    <dt><a href="">数字音乐</a></dt>
                    <dd><a href="">通俗流行</a><a href="">古典音乐</a><a href="">摇滚说唱</a><a href="">爵士蓝调</a><a href="">乡村民谣</a><a href="">有声读物</a></dd>
                  </dl>
                  <dl class="fore3">
                    <dt><a href="">音像</a></dt>
                    <dd><a href="">音乐</a><a href="">影视</a><a href="">教育音像</a><a href="">游戏</a></dd>
                  </dl>
                  <dl class="fore4">
                    <dt>文艺</dt>
                    <dd><a href="">小说</a><a href="">文学</a><a href="">青春文学</a><a href="">传记</a><a href="">艺术</a></dd>
                  </dl>
                  <dl class="fore5">
                    <dt>人文社科</dt>
                    <dd><a href="">历史</a><a href="">心理学</a><a href="">政治/军事</a><a href="">国学/古籍</a><a href="">哲学/宗教</a><a href="">社会科学</a></dd>
                  </dl>
                  <dl class="fore6">
                    <dt>经管励志</dt>
                    <dd><a href="">经济</a><a href="">金融与投资</a><a href="">管理</a><a href="">励志与成功</a></dd>
                  </dl>
                  <dl class="fore7">
                    <dt>生活</dt>
                    <dd><a href="">家庭与育儿</a><a href="">旅游/地图</a><a href="">烹饪/美食</a><a href="">时尚/美妆</a><a href="">家居</a><a href="">婚恋与两性</a><a href="">娱乐/休闲</a><a href="">健身与保健</a><a href="">动漫/幽默</a><a href="">体育/运动</a></dd>
                  </dl>
                  <dl class="fore8">
                    <dt>科技</dt>
                    <dd><a href="">科普</a><a href="">IT</a><a href="">建筑</a><a href="">医学</a><a href="">工业技术</a><a href="">电子/通信</a><a href="">农林</a><a href="">科学与自然</a></dd>
                  </dl>
                  <dl class="fore9">
                    <dt>少儿</dt>
                    <dd><a href="">少儿</a><a href="">0-2岁</a><a href="">3-6岁</a><a href="">7-10岁</a><a href="">11-14岁</a></dd>
                  </dl>
                </div>
              </div>
            </div>
            <div class="item">
              <h3><a href="">服饰内衣</a></h3>
              <div class="item-list clearfix">
                <div class="subitem">
                  <dl class="fore1">
                    <dt><a href="">电子书5</a></dt>
                    <dd><a href="">免费</a><a href="">小说</a><a href="">励志与成功</a><a href="">婚恋/两性</a><a href="">文学</a><a href="">经管</a><a href="">畅读VIP</a></dd>
                  </dl>
                  <dl class="fore2">
                    <dt><a href="">数字音乐</a></dt>
                    <dd><a href="">通俗流行</a><a href="">古典音乐</a><a href="">摇滚说唱</a><a href="">爵士蓝调</a><a href="">乡村民谣</a><a href="">有声读物</a></dd>
                  </dl>
                  <dl class="fore3">
                    <dt><a href="">音像</a></dt>
                    <dd><a href="">音乐</a><a href="">影视</a><a href="">教育音像</a><a href="">游戏</a></dd>
                  </dl>
                  <dl class="fore4">
                    <dt>文艺</dt>
                    <dd><a href="">小说</a><a href="">文学</a><a href="">青春文学</a><a href="">传记</a><a href="">艺术</a></dd>
                  </dl>
                  <dl class="fore5">
                    <dt>人文社科</dt>
                    <dd><a href="">历史</a><a href="">心理学</a><a href="">政治/军事</a><a href="">国学/古籍</a><a href="">哲学/宗教</a><a href="">社会科学</a></dd>
                  </dl>
                  <dl class="fore6">
                    <dt>经管励志</dt>
                    <dd><a href="">经济</a><a href="">金融与投资</a><a href="">管理</a><a href="">励志与成功</a></dd>
                  </dl>
                  <dl class="fore7">
                    <dt>生活</dt>
                    <dd><a href="">家庭与育儿</a><a href="">旅游/地图</a><a href="">烹饪/美食</a><a href="">时尚/美妆</a><a href="">家居</a><a href="">婚恋与两性</a><a href="">娱乐/休闲</a><a href="">健身与保健</a><a href="">动漫/幽默</a><a href="">体育/运动</a></dd>
                  </dl>
                  <dl class="fore8">
                    <dt>科技</dt>
                    <dd><a href="">科普</a><a href="">IT</a><a href="">建筑</a><a href="">医学</a><a href="">工业技术</a><a href="">电子/通信</a><a href="">农林</a><a href="">科学与自然</a></dd>
                  </dl>
                </div>
              </div>
            </div>
            <div class="item">
              <h3><a href="">个护化妆</a></h3>
              <div class="item-list clearfix">
                <div class="subitem">
                  <dl class="fore1">
                    <dt><a href="">电子书6</a></dt>
                    <dd><a href="">免费</a><a href="">小说</a><a href="">励志与成功</a><a href="">婚恋/两性</a><a href="">文学</a><a href="">经管</a><a href="">畅读VIP</a></dd>
                  </dl>
                  <dl class="fore2">
                    <dt><a href="">数字音乐</a></dt>
                    <dd><a href="">通俗流行</a><a href="">古典音乐</a><a href="">摇滚说唱</a><a href="">爵士蓝调</a><a href="">乡村民谣</a><a href="">有声读物</a></dd>
                  </dl>
                  <dl class="fore3">
                    <dt><a href="">音像</a></dt>
                    <dd><a href="">音乐</a><a href="">影视</a><a href="">教育音像</a><a href="">游戏</a></dd>
                  </dl>
                  <dl class="fore4">
                    <dt>文艺</dt>
                    <dd><a href="">小说</a><a href="">文学</a><a href="">青春文学</a><a href="">传记</a><a href="">艺术</a></dd>
                  </dl>
                  <dl class="fore5">
                    <dt>人文社科</dt>
                    <dd><a href="">历史</a><a href="">心理学</a><a href="">政治/军事</a><a href="">国学/古籍</a><a href="">哲学/宗教</a><a href="">社会科学</a></dd>
                  </dl>
                  <dl class="fore6">
                    <dt>经管励志</dt>
                    <dd><a href="">经济</a><a href="">金融与投资</a><a href="">管理</a><a href="">励志与成功</a></dd>
                  </dl>
                  <dl class="fore7">
                    <dt>生活</dt>
                    <dd><a href="">家庭与育儿</a><a href="">旅游/地图</a><a href="">烹饪/美食</a><a href="">时尚/美妆</a><a href="">家居</a><a href="">婚恋与两性</a><a href="">娱乐/休闲</a><a href="">健身与保健</a><a href="">动漫/幽默</a><a href="">体育/运动</a></dd>
                  </dl>
                  <dl class="fore8">
                    <dt>科技</dt>
                    <dd><a href="">科普</a><a href="">IT</a><a href="">建筑</a><a href="">医学</a><a href="">工业技术</a><a href="">电子/通信</a><a href="">农林</a><a href="">科学与自然</a></dd>
                  </dl>
                  <dl class="fore9">
                    <dt>少儿</dt>
                    <dd><a href="">少儿</a><a href="">0-2岁</a><a href="">3-6岁</a><a href="">7-10岁</a><a href="">11-14岁</a></dd>
                  </dl>
                  <dl class="fore10">
                    <dt>教育</dt>
                    <dd><a href="">教材教辅</a><a href="">考试</a><a href="">外语学习</a></dd>
                  </dl>
                  <dl class="fore11">
                    <dt>其它</dt>
                    <dd><a href="">英文原版书</a><a href="">港台图书</a><a href="">工具书</a><a href="">套装书</a><a href="">杂志/期刊</a></dd>
                  </dl>
                </div>
              </div>
            </div>
            <div class="item">
              <h3><a href="">运动健康</a></h3>
              <div class="item-list clearfix">
                <div class="subitem">
                  <dl class="fore1">
                    <dt><a href="">电子书7</a></dt>
                    <dd><a href="">免费</a><a href="">小说</a><a href="">励志与成功</a><a href="">婚恋/两性</a><a href="">文学</a><a href="">经管</a><a href="">畅读VIP</a></dd>
                  </dl>
                  <dl class="fore2">
                    <dt><a href="">数字音乐</a></dt>
                    <dd><a href="">通俗流行</a><a href="">古典音乐</a><a href="">摇滚说唱</a><a href="">爵士蓝调</a><a href="">乡村民谣</a><a href="">有声读物</a></dd>
                  </dl>
                  <dl class="fore3">
                    <dt><a href="">音像</a></dt>
                    <dd><a href="">音乐</a><a href="">影视</a><a href="">教育音像</a><a href="">游戏</a></dd>
                  </dl>
                  <dl class="fore4">
                    <dt>文艺</dt>
                    <dd><a href="">小说</a><a href="">文学</a><a href="">青春文学</a><a href="">传记</a><a href="">艺术</a></dd>
                  </dl>
                </div>
                <div class="cat-right">
                  <dl class="categorys-brands" clstag="homepage|keycount|home2013|0601d">
                    <dt>推荐品牌出版商</dt>
                    <dd>
                      <ul>
                        <li>
                          <a href="">中华书局</a>
                        </li>
                        <li>
                          <a href="">人民邮电出版社</a>
                        </li>
                      </ul>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div class="item">
              <h3><a href="">汽车用品</a></h3>
              <div class="item-list clearfix">
                <div class="subitem">
                  <dl class="fore1">
                    <dt><a href="">电子书8</a></dt>
                    <dd><a href="">免费</a><a href="">小说</a><a href="">励志与成功</a><a href="">婚恋/两性</a><a href="">文学</a><a href="">经管</a><a href="">畅读VIP</a></dd>
                  </dl>
                  <dl class="fore2">
                    <dt><a href="">数字音乐</a></dt>
                    <dd><a href="">通俗流行</a><a href="">古典音乐</a><a href="">摇滚说唱</a><a href="">爵士蓝调</a><a href="">乡村民谣</a><a href="">有声读物</a></dd>
                  </dl>
                  <dl class="fore3">
                    <dt><a href="">音像</a></dt>
                    <dd><a href="">音乐</a><a href="">影视</a><a href="">教育音像</a><a href="">游戏</a></dd>
                  </dl>
                  <dl class="fore4">
                    <dt>文艺</dt>
                    <dd><a href="">小说</a><a href="">文学</a><a href="">青春文学</a><a href="">传记</a><a href="">艺术</a></dd>
                  </dl>
                  <dl class="fore5">
                    <dt>人文社科</dt>
                    <dd><a href="">历史</a><a href="">心理学</a><a href="">政治/军事</a><a href="">国学/古籍</a><a href="">哲学/宗教</a><a href="">社会科学</a></dd>
                  </dl>
                  <dl class="fore6">
                    <dt>经管励志</dt>
                    <dd><a href="">经济</a><a href="">金融与投资</a><a href="">管理</a><a href="">励志与成功</a></dd>
                  </dl>
                  <dl class="fore7">
                    <dt>生活</dt>
                    <dd><a href="">家庭与育儿</a><a href="">旅游/地图</a><a href="">烹饪/美食</a><a href="">时尚/美妆</a><a href="">家居</a><a href="">婚恋与两性</a><a href="">娱乐/休闲</a><a href="">健身与保健</a><a href="">动漫/幽默</a><a href="">体育/运动</a></dd>
                  </dl>
                  <dl class="fore8">
                    <dt>科技</dt>
                    <dd><a href="">科普</a><a href="">IT</a><a href="">建筑</a><a href="">医学</a><a href="">工业技术</a><a href="">电子/通信</a><a href="">农林</a><a href="">科学与自然</a></dd>
                  </dl>
                </div>
              </div>
            </div>
            <div class="item">
              <h3><a href="">彩票、旅行</a></h3>
            </div>
            <div class="item">
              <h3><a href="">理财、众筹</a></h3>
            </div>
            <div class="item">
              <h3><a href="">母婴、玩具</a></h3>
            </div>
            <div class="item">
              <h3><a href="">箱包</a></h3>
            </div>
            <div class="item">
              <h3><a href="">运动户外</a></h3>
            </div>
            <div class="item">
              <h3><a href="">箱包</a></h3>
            </div>
          </div>
        </div>
        <div class="yui3-u Center banerArea">
          <!--banner轮播-->
          <div id="myCarousel" data-ride="carousel" data-interval="4000" class="sui-carousel slide">
            <!-- <ol class="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="{{$index}}" class="{{$index==0?'active':''}}" ng-repeat="item in contentList[1]"></li>
            </ol> -->
            <div class="carousel-inner">
              <!-- <div class="{{$index==0?'active':''}} item" ng-repeat="item in contentList[1]">
              <a href="{{item.url}}">
                <img src="{{item.pic}}"  width="730" height="454"/>
                </a>
              </div> -->
            </div><a href="#myCarousel" data-slide="prev" class="carousel-control left">‹</a><a href="#myCarousel" data-slide="next" class="carousel-control right">›</a>
          </div>
        </div>
        <!-- <div class="yui3-u Right">
          <div class="news">
            <h4><em class="fl">MKtail快报<span class="fr tip">更多 ></span></h4>
            <div class="clearix"></div>
            <ul class="news-list unstyled">
              <li>
                <span class="bold">[特惠]</span>备战开学季 全民半价购数码
              </li>
              <li>
                <span class="bold">[公告]</span>备战开学季 全民半价购数码
              </li>
              <li>
                <span class="bold">[特惠]</span>备战开学季 全民半价购数码
              </li>
              <li>
                <span class="bold">[公告]</span>备战开学季 全民半价购数码
              </li>
              <li>
                <span class="bold">[特惠]</span>备战开学季 全民半价购数码
              </li>
            </ul>
          </div>
          <ul class="yui3-g Lifeservice">
            <li class="yui3-u-1-4 life-item tab-item">
              <i class="list-item list-item-1"></i>
              <span class="service-intro">话费</span>
            </li>
            <li class="yui3-u-1-4 life-item tab-item">
              <i class="list-item list-item-2"></i>
              <span class="service-intro">机票</span>
            </li>
            <li class="yui3-u-1-4 life-item tab-item">
              <i class="list-item list-item-3"></i>
              <span class="service-intro">电影票</span>
            </li>
            <li class="yui3-u-1-4 life-item tab-item">
              <i class="list-item list-item-4"></i>
              <span class="service-intro">游戏</span>
            </li>
            <li class="yui3-u-1-4 life-item notab-item">
              <i class="list-item list-item-5"></i>
              <span class="service-intro">彩票</span>
            </li>
            <li class="yui3-u-1-4 life-item notab-item">
              <i class="list-item list-item-6"></i>
              <span class="service-intro">加油站</span>
            </li>
            <li class="yui3-u-1-4 life-item notab-item">
              <i class="list-item list-item-7"></i>
              <span class="service-intro">酒店</span>
            </li>
            <li class="yui3-u-1-4 life-item notab-item">
              <i class="list-item list-item-8"></i>
              <span class="service-intro">火车票</span>
            </li>
            <li class="yui3-u-1-4 life-item  notab-item">
              <i class="list-item list-item-9"></i>
              <span class="service-intro">众筹</span>
            </li>
            <li class="yui3-u-1-4 life-item notab-item">
              <i class="list-item list-item-10"></i>
              <span class="service-intro">理财</span>
            </li>
            <li class="yui3-u-1-4 life-item notab-item">
              <i class="list-item list-item-11"></i>
              <span class="service-intro">礼品卡</span>
            </li>
            <li class="yui3-u-1-4 life-item notab-item">
              <i class="list-item list-item-12"></i>
              <span class="service-intro">白条</span>
            </li>
          </ul>
          <div class="life-item-content">
            <div class="life-detail">
              <i class="close">关闭</i>
              <p>话费充值</p>
              <form action="" class="sui-form form-horizontal">
                号码：<input type="text" id="inputphoneNumber" placeholder="输入你的号码" />
              </form>
              <button class="sui-btn btn-danger">快速充值</button>
            </div>
            <div class="life-detail">
              <i class="close">关闭</i> 机票
            </div>
            <div class="life-detail">
              <i class="close">关闭</i> 电影票
            </div>
            <div class="life-detail">
              <i class="close">关闭</i> 游戏
            </div>
          </div>
          <div class="ads">
          </div>
        </div> -->
      </div>
    </div>
  </div>
      <div class="nav">
        <div class="nav_con">
          <div class="nav_detail">
            <el-menu
              :default-active="activeIndex"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
              background-color=transparent
              text-color="#fff"
              active-text-color="#FF8C00">
              <el-menu-item index="1">Home</el-menu-item>
              <el-submenu index="2">
                <template slot="title">Product Categorise</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
                <el-submenu index="2-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="2-4-1">选项1</el-menu-item>
                  <el-menu-item index="2-4-2">选项2</el-menu-item>
                  <el-menu-item index="2-4-3">选项3</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-submenu index="3">
                <template slot="title">Product Categorise</template>
                <el-menu-item index="3-1">选项1</el-menu-item>
                <el-menu-item index="3-2">选项2</el-menu-item>
                <el-menu-item index="3-3">选项3</el-menu-item>
                <el-submenu index="3-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="3-4-1">选项1</el-menu-item>
                  <el-menu-item index="3-4-2">选项2</el-menu-item>
                  <el-menu-item index="3-4-3">选项3</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-menu-item index="4"><a href="">Contacts</a></el-menu-item>
            </el-menu>
          </div>
          <div class="nav_search">
            <form action="#" id="search_form">
              <div class="search_box">
                <div class="search_ipt" id="search_ipt_box">
                    <input type="text" id="search_ipt" placeholder="search product">
                </div>
                <a class="search_btn bolder" id="search_btn"><img src="../../../static/img/search.png"></a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- 标语、3D 直播 -->
      <div class="pro_info">
        <div class="pro_tip">
          <h2>power</h2>
          <p>Production Capacity</p>
          <h1>2000,000 <a>Pcs/M</a></h1>
        </div>
        <!-- 3D 直播 -->
        <div class="pro_show">
          <div class="pro_show_part">
            <h1>24-Hour Online Audit</h1>
            <div class="live">
              <div class="pro_show_dec">
                <p>If Necessary, Please Contact Us To Ask About</p>
                <p>The Monitoring Method.</p>
              </div>
              <div class="pro_show_live">
                <a>
                  <iframe class="live_iframe" ref="live_iframe" id="live_iframe" v-bind:src="liveSource" width="360" height="300" frameborder="0" scrolling="no"></iframe>
                </a>
                <!-- <a><img class="wrap" src="../../../static/img/fur_model_2.png"></a> -->
              </div>
            </div>
          </div>
          <div class="pro_show_part">
            <h1>3D Modeling Exploded View</h1>
            <div class="live">
              <div class="pro_show_dec">
                <p>3D Model Diagram1:1 Physical Production， Maximum Limit To  Restore The Authenticity Of The Object And The Pictureodel Diagram1:1 Physical Production， Maximum Limit To  Restore The Authenticity Of The Object And The Picture</p>
              </div>
              <div class="pro_show_live">
                <div class="three_d">
                  <a  @click="threeUrl('http://120.79.93.197/we1/')">
                    <img class="wrap" src="../../../static/img/fur_model_3.png">
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 邮件留言反馈 -->
    <div class="cla">
      <div class="con_title">
        <h2>PLEASE CONTACT OUR SALES TO GET MORE INFORMATION THANKS</h2>
      </div>
      <div class="con_info">
        <div class="con_detail">
          <p class="con_tip">Send message to supplier</p>
          <p class="con_name">To:&nbsp;&nbsp;sean lee</p>
          <div class="con_mes">
          <el-form ref="form" :model="formMessage" label-width="80px">
            <el-form-item label="Message">
              <el-input type="textarea" placeholder="Eneter your inquiry details such as product name,color,size,quantity,material,etc" v-model="formMessage.desc"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button class="form_cha" type="primary" @click="onSubmit">SEND</el-button>
            </el-form-item>
            <div class="form_ag_ku">
              <input class="form_agree" type="checkbox" value="agree" v-model="formMessage.agree" >
              <label>I agree to share my Business Card to the supplier</label>
            </div>
          </el-form>
          </div>
        </div>
      </div>
    </div>
    <!-- 产品系列 -->
    <div class="series">
      <div class="series_title"></div>
      <!-- 家具系列 furniture -->
      <proListBox :data="item" v-for="item in proList"  :key="item.id" :data-index="item.id"></proListBox>
      <!-- <div class="fur">
        <div class="fur_detail">
          <div class="fur_detail_class">
            <a href=""><img class="wrap" src="../../../static/img/fur_class.png"></a>
            <a href=""><img class="wrap" src="../../../static/img/fur_class.png"></a>
            <a href=""><img class="wrap" src="../../../static/img/fur_class.png"></a>
            <a href=""><img class="wrap" src="../../../static/img/fur_class.png"></a>
          </div>
        </div>
      </div> -->
    </div>
    <div class="mask" v-show="is3Ding">
      <iframe class="mask_iframe" ref="threeDSrc"  frameborder="0" scrolling="no">
      </iframe>
      <div class="mask_iframe close_wrap">
        <i class="el-icon-close" @click="threeDclose"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { apiAxios } from '../../common/utils'
import proListBox from '../../components/proListBox'
export default {
  data () {
    return {
      activeIndex: '1',
      formMessage: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        agree: false
      },
      is3Ding: false,
      liveSource: '',
      proList: '',
      cateMenuItem: '',
      isShowNav: '' // 二级菜单显示状态
    }
  },
  components: { proListBox },
  created () {
    apiAxios.Axios({
      url: '/getGoods/itemCat'
    }, (rtn) => {
      console.log(rtn.data)
    })
    apiAxios.Axios({
      url: '/getProList'
    }, (rtn) => {
      this.proList = rtn.data.data
      console.log(this.proList)
      // if (rtn.data.success) {
      //   this.proList = rtn.data.data
      // }
    })
  },
  computed: {
  },
  mounted () {
    // 为iframe点击可触发点击事件
    let IframeOnClick = {
      resolution: 200,
      iframes: [],
      interval: null,
      Iframe: function () {
        this.element = arguments[0]
        this.cb = arguments[1]
        this.hasTracked = false
      },
      track: function (element, cb) {
        this.iframes.push(new this.Iframe(element, cb))
        if (!this.interval) {
          let _this = this
          this.interval = setInterval(function () { _this.checkClick() }, this.resolution)
        }
      },
      checkClick: function () {
        if (document.activeElement) {
          let activeElement = document.activeElement
          for (let i in this.iframes) {
            if (activeElement === this.iframes[i].element) { // user is in this Iframe
              if (this.iframes[i].hasTracked === false) {
                this.iframes[i].cb.apply(window, [])
                this.iframes[i].hasTracked = true
              }
            } else {
              this.iframes[i].hasTracked = false
            }
          }
        }
      }
    }
    // 获取iframe 框架下的body节点并且监听
    let iframeDom = this.$el.getElementsByTagName('iframe')[0].contentWindow.document.body
    this.iframeDom = iframeDom
    if (this.iframeDom.offsetHeight) {
      this.iframeDom.addEventListener('click', (e) => {
        this.liveSource = '../static/live.html'
        return false
      })
    } else { // 火狐 body高度为0 无法触发body点击事件
      IframeOnClick.track(this.$refs.live_iframe, () => {
        this.liveSource = '../static/live.html'
        return false
      })
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    onTest () {
      apiAxios.Axios({
        url: '/test/live/url'
      }, (rtn) => {
        this.playerOptions.HLS = rtn.data.data.url_hls
        console.log(this.playerOptions.HLS)
      })
    },
    onSubmit () {
      // console.log(IP)
      if (this.formMessage.agree && this.formMessage.desc) {
        console.log('submit!')
      } else {
        console.log('请同意', this.formMessage)
      }
    },
    liveShow () {
      this.liveSource = '../static/live.html'
    },
    threeDclose () {
      this.is3Ding = false
      return false
    },
    threeUrl (threeUrl) {
      this.is3Ding = true
      this.$refs.threeDSrc.src = threeUrl
      return false
    }
  }
}
</script>
<style scoped>
@import "../../assets/css/app.css";
/*@import "../static/css/app.css";*/
</style>
