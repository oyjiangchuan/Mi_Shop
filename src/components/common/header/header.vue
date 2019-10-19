<template>
  <div class="header">
    <div class="site-topbar">
      <div class="container">
        <div class="topbar-nav">
          <a
            rel="nofollow"
            href="//www.mi.com/index.html"
            data-stat-id="e0f893c4337cbe4d"
            onclick="_msq.push(['trackEvent', '81190ccc4d52f577-e0f893c4337cbe4d', '//www.mi.com/index.html', 'pcpid', '']);"
          >小米商城</a>
          <span class="sep">|</span>
          <a
            rel="nofollow"
            href="https://www.miui.com/"
            target="_blank"
            data-stat-id="e8f3be65bcd64056"
            onclick="_msq.push(['trackEvent', '81190ccc4d52f577-e8f3be65bcd64056', 'https://www.miui.com/', 'pcpid', '']);"
          >MIUI</a>
          <span class="sep">|</span>
          <a
            rel="nofollow"
            href="https://iot.mi.com/index.html"
            target="_blank"
            data-stat-id="5c36ef2c7949130f"
            onclick="_msq.push(['trackEvent', '81190ccc4d52f577-5c36ef2c7949130f', 'https://iot.mi.com/index.html', 'pcpid', '']);"
          >IoT</a>
          <span class="sep">|</span>
          <a
            rel="nofollow"
            href="https://i.mi.com/"
            target="_blank"
            data-stat-id="ebd1cdc33da63373"
            onclick="_msq.push(['trackEvent', '81190ccc4d52f577-ebd1cdc33da63373', 'https://i.mi.com/', 'pcpid', '']);"
          >云服务</a>
          <span class="sep">|</span>
          <a
            rel="nofollow"
            href="https://jr.mi.com?from=micom"
            target="_blank"
            data-stat-id="723557842cc02160"
            onclick="_msq.push(['trackEvent', '81190ccc4d52f577-723557842cc02160', 'https://jr.mi.comfrom=micom', 'pcpid', '']);"
          >金融</a>
          <span class="sep">|</span>
          <a
            rel="nofollow"
            href="https://youpin.mi.com/"
            target="_blank"
            data-stat-id="58f2e9d257e215d1"
            onclick="_msq.push(['trackEvent', '81190ccc4d52f577-58f2e9d257e215d1', 'https://youpin.mi.com/', 'pcpid', '']);"
          >有品</a>
          <span class="sep">|</span>
          <a
            rel="nofollow"
            href="https://xiaoai.mi.com/"
            target="_blank"
            data-stat-id="eeac918590e8a7f3"
            onclick="_msq.push(['trackEvent', '81190ccc4d52f577-eeac918590e8a7f3', 'https://xiaoai.mi.com/', 'pcpid', '']);"
          >小爱开放平台</a>
          <span class="sep">|</span>
          <a
            rel="nofollow"
            href="//qiye.mi.com/"
            target="_blank"
            data-stat-id="32c0e284e07a20b7"
            onclick="_msq.push(['trackEvent', '81190ccc4d52f577-32c0e284e07a20b7', '//qiye.mi.com/', 'pcpid', '']);"
          >企业团购</a>
          <span class="sep">|</span>
          <a
            rel="nofollow"
            href="//www.mi.com/aptitude/list/?id=41"
            target="_blank"
            data-stat-id="b5d607800f475922"
            onclick="_msq.push(['trackEvent', '81190ccc4d52f577-b5d607800f475922', '//www.mi.com/aptitude/list/id=41', 'pcpid', '']);"
          >资质证照</a>
          <span class="sep">|</span>
          <a
            rel="nofollow"
            href="//www.mi.com/aptitude/list/"
            target="_blank"
            data-stat-id="5270b943f12ff2a8"
            onclick="_msq.push(['trackEvent', '81190ccc4d52f577-5270b943f12ff2a8', '//www.mi.com/aptitude/list/', 'pcpid', '']);"
          >协议规则</a>
          <span class="sep">|</span>
          <a
            rel="nofollow"
            href="//www.mi.com/appdownload/"
            target="_blank"
            id="J_siteDownloadApp"
            class="topbar-download"
            :class="isShow ? 'active' : '' "
            data-stat-id="2ee8da1ec4b2c331"
            onclick="_msq.push(['trackEvent', '81190ccc4d52f577-2ee8da1ec4b2c331', '//www.mi.com/appdownload/', 'pcpid', '']);"
            @mouseenter="enter"
            @mouseleave="leave"
          >
            下载app
            <span class="appcode">
              <img
                src="//i1.mifile.cn/f/i/17/appdownload/download.png?1"
                alt="小米商城"
                width="90"
                height="90"
              />
              小米商城APP
            </span>
          </a>
          <span class="sep">|</span>
          <a
            rel="nofollow"
            href="javascript:;"
            class="J_siteGlobalRegion"
            data-stat-id="000b5c569d67e5ba"
            onclick="_msq.push(['trackEvent', '81190ccc4d52f577-000b5c569d67e5ba', 'javascript:', 'pcpid', '']);"
          >Select Location</a>
        </div>
        <div id="J_miniCartTrigger" class="topbar-cart">
          <a
            rel="nofollow"
            id="J_miniCartBtn"
            href="//static.mi.com/cart/"
            class="cart-mini"
            data-stat-id="5a8e52565991ec85"
            onclick="_msq.push(['trackEvent', '81190ccc4d52f577-5a8e52565991ec85', '//static.mi.com/cart/', 'pcpid', '']);"
          >
            <em class="iconfont icon-gouwuchekong"></em>
            <em class="iconfont-cart-full hide"></em>购物车
            <span class="cart-mini-num J_cartNum">（0）</span>
          </a>
          <div id="J_miniCartMenu" class="cart-menu">
            <div class="menu-content">
              <div class="loading">
                <div class="loader"></div>
              </div>
              <ul id="J_miniCartList" class="cart-list hide"></ul>
              <div id="J_miniCartListTotal" class="cart-total clearfix hide"></div>
              <div class="msg msg-error hide"></div>
              <div class="msg msg-empty hide">购物车中还没有商品，赶紧选购吧！</div>
            </div>
          </div>
        </div>
        <div id="J_siteUserInfo" class="topbar-info">
          <a
            rel="nofollow"
            href="javascript:void(0);"
            data-agreement="true"
            data-login="true"
            class="link"
            data-href="//order.mi.com/site/login?redirectUrl=https://www.mi.com/"
            data-stat-id="2f616d176624bee4"
            onclick="_msq.push(['trackEvent', '81190ccc4d52f577-2f616d176624bee4', 'javascript:void0', 'pcpid', '']);"
          >登录</a>
          <span class="sep">|</span>
          <a
            rel="nofollow"
            href="javascript:void(0);"
            data-agreement="true"
            data-register="true"
            class="link"
            data-href="//account.xiaomi.com/pass/register"
            data-stat-id="14045e83c802f684"
            onclick="_msq.push(['trackEvent', '81190ccc4d52f577-14045e83c802f684', 'javascript:void0', 'pcpid', '']);"
          >注册</a>
          <span class="sep">|</span>
          <span class="message">
            <a
              rel="nofollow"
              href="javascript:void(0);"
              data-href="//order.mi.com/message/list"
              class="J_needAgreement"
              data-login="true"
              data-agreement="true"
              data-stat-id="ca8b77dced082d07"
              onclick="_msq.push(['trackEvent', '81190ccc4d52f577-ca8b77dced082d07', 'javascript:void0', 'pcpid', '']);"
            >
              消息通知
              <i class="J_miMessageTotal"></i>
            </a>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    enter() {
      this.isShow = true
    },
    leave() {
      this.isShow = false
    }
  }
};
</script>

<style lang="stylus" scoped>
.site-topbar {
    position: relative;
    z-index: 30;
    height: 40px;
    font-size: 12px;
    color: #b0b0b0;
    background: #333;
}
.container {
    width: 1226px;
    margin-right: auto;
    margin-left: auto;
}
.site-topbar .topbar-nav {
    float: left;
    height: 40px;
    line-height: 40px;
}
.site-topbar a {
    color: #b0b0b0;
    line-height: 40px;
    display: inline-block;
}
.site-topbar a:hover {
    color: #fff;
}
.site-topbar .sep {
    margin: 0 .3em;
    color: #424242;
}

.site-topbar .topbar-download {
    position: relative;
}
.site-topbar .topbar-download .appcode {
    position: absolute;
    top: 40px;
    left: 50%;
    width: 124px;
    height: 0;
    background: #fff;
    margin-left: -55px;
    -webkit-box-shadow: #aaa 0 1px 5px;
    box-shadow: 0 1px 5px #aaa;
    text-align: center;
    font-size: 14px;
    color: #333;
    line-height: 1;
    overflow: hidden;
    -webkit-transition: height .3s;
    transition: height .3s;
}
.site-topbar .topbar-download img {
    display: block;
    margin: 18px auto 12px;
}

.site-topbar .topbar-download.active .appcode {
    height: 148px;
}
.site-topbar .topbar-download.active:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0;
    margin-left: -8px;
    border-width: 0 8px 8px;
    border-style: solid;
    border-color: rgba(0,0,0,0) rgba(0,0,0,0) #fff;
}


// 购物车
.site-topbar .topbar-cart {
    position: relative;
    float: right;
    width: 120px;
    height: 40px;
    margin-left: 15px;
    -webkit-transition: all .2s;
    transition: all .2s;
    font-size: 12px;
}
.site-topbar .cart-mini {
    position: relative;
    z-index: 32;
    display: block;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #b0b0b0;
    background: #424242;
}
.site-topbar .cart-mini em {
    margin-right: 4px;
    font-size: 20px;
    line-height: 20px;
    vertical-align: -4px;
}
.hide {
    display: none!important;
}
.site-topbar .cart-menu {
    position: absolute;
    right: 0;
    top: 40px;
    z-index: 31;
    width: 316px;
    height: 0;
    color: #424242;
    background: #fff;
    -webkit-box-shadow: 0 2px 10px rgba(0,0,0,.15);
    box-shadow: 0 2px 10px rgba(0,0,0,.15);
    overflow: hidden;
    -webkit-transition: height .3s;
    transition: height .3s;
}
.site-topbar .cart-menu .menu-content {
    padding: 20px 0 0;
}

.site-topbar .cart-menu .loading, .site-topbar .cart-menu .msg {
    margin: 0 20px 20px;
    text-align: center;
}
.loading {
    padding: 20px 0;
}
</style>