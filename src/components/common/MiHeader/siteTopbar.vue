<template>
  <div class="site-topbar">
    <div class="container">
      <div class="topbar-nav">
        <a href="javascript:;">小米商城</a>
        <span class="sep">|</span>
        <a href="javascript:;">MIUI</a>
        <span class="sep">|</span>
        <a href="javascript:;">IoT</a>
        <span class="sep">|</span>
        <a href="javascript:;">云服务</a>
        <span class="sep">|</span>
        <a href="javascript:;">金融</a>
        <span class="sep">|</span>
        <a href="javascript:;">有品</a>
        <span class="sep">|</span>
        <a href="javascript:;">小爱开放平台</a>
        <span class="sep">|</span>
        <a href="javascript:;">企业团购</a>
        <span class="sep">|</span>
        <a href="javascript:;">资质证照</a>
        <span class="sep">|</span>
        <a href="javascript:;">协议规则</a>
        <span class="sep">|</span>
        <a
          href="javascript:;"
          class="topbar-download"
          :class="{active: showCode}"
          @mouseenter="showAppCode"
          @mouseleave="hideAppCode"
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
        <a href="javascript:;">Select Location</a>
      </div>
      <div
        class="topbar-cart"
        :class="{'topbar-cart-filled': allProductsItem > 0,'topbar-cart-active': changeBackGround}"
        @mouseenter="getCartList"
        @mouseleave="hideCartList"
      >
        <!-- 购物车样式 -->
        <!-- <router-link tag="a" class="cart-mini" to="/cart"></router-link> 这里用link标签会报错 -->
        <a href="http://localhost:8080/#/cart" class="cart-mini">
          <em class="iconfont icon-gouwuchekong" :class="{hide: allProductsItem > 0}"></em>
          <em class="iconfont icon-gouwucheman" :class="{hide: allProductsItem === 0}"></em>购物车
          <span class="cart-mini-num">({{allProductsItem}})</span>
        </a>
        <div class="cart-menu" ref="cartMenu">
          <div class="menu-content">
            <div class="loading" :class="{hide: showLoding}">
              <div class="loader"></div>
            </div>
            <ul class="cart-list" :class="{hide: allProductsItem === 0}">
              <li v-for="(product, index) in products" :key="index">
                <div class="cart-item clearfix first">
                  <a class="thumb" href="javascript:;">
                    <img :src="product.src" />
                  </a>
                  <a class="name" href="javascript:;">{{product.name}}</a>
                  <span class="price">{{product.price}}元 × {{product.quantity}}</span>
                  <a class="btn-del" href="javascript: void(0);">
                    <em class="iconfont icon-chahao" @click="delProductToCart(product.productid)"></em>
                  </a>
                </div>
              </li>
            </ul>
            <div class="cart-total clearfix" :class="{hide: allProductsItem === 0}">
              <span class="total">
                共
                <em>{{allProducts}}</em> 件商品
                <span class="price">
                  <em>{{allPrice}}</em>元
                </span>
              </span>
              <a href="javascript:;" class="btn btn-primary btn-cart" @click="goCartSettlement">去购物车结算</a>
            </div>
            <div class="msg msg-empty" :class="{hide: allProductsItem > 0}">购物车中还没有商品，赶紧选购吧！</div>
          </div>
        </div>
      </div>
      <div class="topbar-info" v-if="loginStatus">
        <span
          class="user"
          :class="{'user-active': show}"
          @mouseenter="showUser"
          @mouseleave="hideUser"
        >
          <router-link tag="a" to="/portal" class="user-name">
            <span class="name">柚稚</span>
            <i class="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-"></i>
          </router-link>
          <div class="user-menu-wrapper">
            <ul class="user-menu">
              <li>
                <router-link tag="a" to="/portal">个人中心</router-link>
              </li>
              <li>
                <router-link tag="a" to="/portal/detail">评价晒单</router-link>
              </li>
              <li>
                <router-link tag="a" to="/portal/detail">我的喜欢</router-link>
              </li>
              <li>
                <router-link tag="a" to="/portal/detail">小米账户</router-link>
              </li>
              <li>
                <a href="javascript:;" @click="exitStatus">退出登录</a>
              </li>
            </ul>
          </div>
        </span>
        <span class="sep">|</span>
        <span class="message">
          <a href="javascript:void(0);">
            消息通知
            <i></i>
          </a>
        </span>
        <span class="sep">|</span>
        <a class="link link-order" href="//static.mi.com/order/">我的订单</a>
      </div>
      <div class="topbar-info" v-else>
        <router-link class="link" tag="a" to="/login">登录</router-link>
        <span class="sep">|</span>
        <a href="javascript:;" class="link" @click="showToast('toastAgreement')">注册</a>
        <span class="sep">|</span>
        <span class="message">
          <a href="javascript:void(0);">
            消息通知
            <i></i>
          </a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "siteTopbar",
  data() {
    return {
      show: false,
      showCode: false,
      changeBackGround: false,
      showLoding: false,
      timeout: "",
      timeout2: ""
    };
  },
  methods: {
    showToast(type) {
      this.$showToast(type);
    },
    showAppCode() {
      this.showCode = true;
    },
    hideAppCode() {
      this.showCode = false;
    },
    getCartList() {
      this.changeBackGround = true; // 控制背景颜色
      if (this.allProductsItem === 0) {
        this.$refs.cartMenu.style.height = 100 + "px";
        if (this.timeout) {
          clearTimeout(this.timeout); // 清除定时器
        }
        this.timeout = setTimeout(() => {
          this.showLoding = true;
        }, 500);
      } else {
        this.$refs.cartMenu.style.height = 100 + "px";
        if (this.timeout) {
          clearTimeout(this.timeout);
        }
        this.timeout = setTimeout(() => {
          this.showLoding = true;
          this.$refs.cartMenu.style.height = "auto";
        }, 500);
      }
    },
    hideCartList() {
      this.changeBackGround = false;
      this.$refs.cartMenu.style.height = 0 + "px";
      if (this.timeout2) {
        clearTimeout(this.timeout);
      }
      this.timeout2 = setTimeout(() => {
        this.showLoding = false;
      }, 500);
    },
    showUser() {
      this.show = true;
    },
    hideUser() {
      this.show = false;
    },
    goCartSettlement() {
      this.setCheckoutStatusAll(true)
      this.$router.push({path: '/cart'})
    },
    ...mapMutations("user", ["exitStatus"]),
    ...mapActions("cart", ["delProductToCart", "setCheckoutStatusAll"])
  },
  computed: {
    ...mapGetters("user", ["loginStatus"]),
    ...mapGetters("cart", {
      products: "cartProducts",
      allPrice: "allPrice",
      allProducts: "allProducts",
      allProductsItem: "allProductsItem"
    })
  }
};
</script>

<style>
.loading {
  padding: 20px 0;
}

.loader {
  position: relative;
  margin: 0 auto;
  width: 4px;
  height: 20px;
  background: #ff6700;
  overflow: visible;
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
}

.loader,
.loader:after,
.loader:before {
  -webkit-transform-origin: 50% 50%;
  -ms-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  -webkit-animation-name: loader;
  animation-name: loader;
  -webkit-animation-duration: 0.3s;
  animation-duration: 0.3s;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  animation-direction: alternate-reverse;
}

.loader:after,
.loader:before {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 4px;
  height: 20px;
  content: "";
  background: #ff6700;
}

.loader:before {
  margin: -10px 0 0 -10px;
  -webkit-animation-delay: 0.25s;
  animation-delay: 0.25s;
  -webkit-transform: scaleY(0.3);
  -ms-transform: scaleY(0.3);
  transform: scaleY(0.3);
}

.loader:after {
  margin: -10px 0 0 6px;
  -webkit-animation-delay: 0.5s;
  animation-delay: 0.5s;
  -webkit-transform: scaleY(0.5);
  -ms-transform: scaleY(0.5);
  transform: scaleY(0.5);
}

.loader-white,
.loader-white:after,
.loader-white:before {
  background: #fff;
}

.loader-gray,
.loader-gray:after,
.loader-gray:before {
  background: rgba(0, 0, 0, 0.3);
}

@-webkit-keyframes loader {
  0% {
    -webkit-transform: scaleY(0.5);
    opacity: 0.2;
  }

  to {
    -webkit-transform: scale(1);
    opacity: 1;
  }
}

@keyframes loader {
  0% {
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    opacity: 0.2;
  }

  to {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}
/* 顶部样式 */
.site-topbar {
  position: relative;
  z-index: 30;
  height: 40px;
  font-size: 12px;
  color: #b0b0b0;
  background: #333
}

.site-topbar a {
  color: #b0b0b0;
  line-height: 40px;
  display: inline-block
}

.site-topbar a:hover {
  color: #fff
}

.site-topbar .sep {
  margin: 0 .3em;
  color: #424242
}

.site-topbar .topbar-nav {
  float: left;
  height: 40px;
  line-height: 40px
}

.site-topbar .topbar-download {
  position: relative
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
  transition: height .3s
}

.site-topbar .topbar-download img {
  display: block;
  margin: 18px auto 12px
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
  border-color: rgba(0,0,0,0) rgba(0,0,0,0) #fff
}

.site-topbar .topbar-download.active .appcode {
  height: 148px
}



.site-topbar .topbar-info {
  position: relative;
  float: right;
  height: 40px;
  line-height: 40px
}

.site-topbar .topbar-info .link,.site-topbar .topbar-info .message,.site-topbar .topbar-info .sep,.site-topbar .topbar-info .user {
  float: left
}

.site-topbar .topbar-info .link {
  padding: 0 5px;
  text-align: center
}

.site-topbar .topbar-info .link-order {
  width: 70px
}

.site-topbar .topbar-info .sep {
  margin: 0
}

.site-topbar .user {
  position: relative;
  width: 110px;
  padding: 0;
  white-space: nowrap
}

.site-topbar .user-name {
  position: relative;
  z-index: 5;
  display: block;
  width: 110px;
  height: 40px;
  text-align: center
}

.site-topbar .user-name .name {
  display: inline-block;
  width: auto;
  max-width: 75px;
  text-overflow: ellipsis;
  vertical-align: text-bottom;
  overflow: hidden
}

.site-topbar .user-name i {
  font-size: 14px;
  line-height: 14px;
  vertical-align: 12px;
  font-weight: 700;
}

.site-topbar .user-menu-wrapper {
  position: absolute;
  left: 0;
  top: 40px;
  z-index: 3;
  height: 0;
  overflow: hidden;
  -webkit-transition: height .3s;
  transition: height .3s;
  background: #fff;
  -webkit-box-shadow: 0 2px 10px rgba(0,0,0,.15);
  box-shadow: 0 2px 10px rgba(0,0,0,.15)
}

.user.user-active .user-menu-wrapper{
  height: 164px;
}



.site-topbar .user-menu {
  width: 110px;
  margin: 0;
  padding: 7px 0;
  list-style-type: none
}

.site-topbar .user-menu a {
  display: block;
  padding: 3px 30px;
  line-height: 2
}

.site-topbar .user-active a {
  color: #424242
}

.site-topbar .user-active a:hover {
  color: #ff6700
}

.site-topbar .user-active .user-name {
  background: #fff
}

.site-topbar .user-active .user-menu {
  display: block
}

.site-topbar .user-active .user-menu a {
  -webkit-transition: all .2s;
  transition: all .2s
}

.site-topbar .user-active .user-menu a:hover {
  background-color: #f5f5f5
}

.site-topbar .message {
  padding: 0 10px
}

.site-topbar .message i {
  font-style: normal
}

.site-topbar .topbar-cart {
  position: relative;
  float: right;
  width: 120px;
  height: 40px;
  margin-left: 15px;
  -webkit-transition: all .2s;
  transition: all .2s;
  font-size: 12px
}

.site-topbar .topbar-cart-filled .cart-mini {
  color: #fff;
  background: #ff6700
}

.site-topbar .topbar-cart-active .cart-mini {
  color: #ff6700;
  background: #fff
}

.site-topbar .cart-mini {
  position: relative;
  z-index: 32;
  display: block;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #b0b0b0;
  background: #424242
}

.site-topbar .cart-mini em {
  margin-right: 4px;
  font-size: 20px;
  line-height: 20px;
  vertical-align: -4px
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
  transition: height .3s
}


.site-topbar .cart-menu .menu-content {
  padding: 20px 0 0
}

.site-topbar .cart-menu .loading,.site-topbar .cart-menu .msg {
  margin: 0 20px 20px;
  text-align: center
}

.site-topbar .cart-menu .msg {
  padding: 20px 0 20px
}

.site-topbar .cart-list {
  margin: 0;
  padding: 0;
  list-style-type: none
}

.site-topbar .cart-list li {
  position: relative;
  height: 80px;
  padding: 0 20px
}

.site-topbar .cart-list li.first .cart-item,.site-topbar .cart-list li:first-child .cart-item {
  border-top: 0
}

.site-topbar .cart-item {
  position: relative;
  height: 60px;
  padding: 10px 0;
  border-top: 1px solid #e0e0e0;
  line-height: 20px
}

.site-topbar .cart-item:hover .btn-del {
  opacity: 1
}

.site-topbar .cart-item .thumb {
  float: left;
  margin-right: 10px
}

.site-topbar .cart-item .thumb img {
  width: 60px;
  height: 60px
}

.site-topbar .cart-item .name {
  float: left;
  width: 95px;
  height: 40px;
  line-height: 20px;
  margin: 10px 0;
  color: #424242;
  overflow: hidden
}

.site-topbar .cart-item .tag {
  color: #e53935
}

.site-topbar .cart-item a.name:hover {
  color: #ff6700
}

.site-topbar .cart-item .price {
  float: right;
  margin: 20px 20px 0 5px
}

.site-topbar .cart-item .btn-del {
  position: absolute;
  top: 20px;
  right: 0;
  font-size: 16px;
  opacity: 0;
  -webkit-transition: all .2s;
  transition: all .2s
}

.site-topbar .cart-item .btn-del:hover {
  color: #424242
}

.site-topbar .cart-total {
  padding: 15px 20px;
  background: #fafafa
}

.site-topbar .cart-total em {
  font-style: normal
}

.site-topbar .cart-total .total {
  float: left;
  width: 135px;
  color: #757575
}

.site-topbar .cart-total .price {
  display: block;
  font-weight: 400;
  color: #ff6700
}

.site-topbar .cart-total .price em {
  font-size: 24px;
  line-height: 1
}

.site-topbar .cart-total .btn-cart {
  float: right;
  width: 130px;
  padding: 0;
  font-size: 14px;
  line-height: 40px;
  text-align: center;
  color: #f5f5f5;
  background: #ff6700
}
</style>