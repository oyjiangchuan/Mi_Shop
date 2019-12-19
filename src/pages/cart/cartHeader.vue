<template>
  <div class="site-mini-header">
    <div class="container">
      <div class="header-logo">
        <router-link class="logo" to="/" title="小米官网">小米官网</router-link>
      </div>
      <div class="header-title">
        <h2>我的购物车</h2>
        <p v-show="loginStatus">温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</p>
      </div>
      <div class="topbar-info" v-if="loginStatus">
        <span
          class="user"
          :class="{'user-active': one}"
          @mouseenter="inEnter"
          @mouseleave="inLeave"
        >
          <router-link tag="a" to="/portal" class="user-name">
            <span class="name">柚稚</span>
            <i class="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-"></i>
          </router-link>
          <div class="user-menu-wrapper">
            <ul class="user-menu">
              <li>
                <router-link to="/portal">个人中心</router-link>
              </li>
              <li>
                <router-link to="/portal/detail">评价晒单</router-link>
              </li>
              <li>
                <router-link to="/portal/detail">我的喜欢</router-link>
              </li>
              <li>
                <router-link to="/portal/detail">小米账户</router-link>
              </li>
              <li>
                <a href="javascript:;" @click="exitStatus">退出登录</a>
              </li>
            </ul>
          </div>
        </span>
        <span class="sep">|</span>
        <router-link tag="a" to="/portal/detail" class="link link-order">我的订单</router-link>
      </div>

      <div class="topbar-info" v-else>
        <router-link class="link" tag="a" to="/login">登录</router-link>
        <span class="sep">|</span>
        <router-link class="link" tag="a" to="/register">注册</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "cartHeader",
  data() {
    return {
      one: false
    };
  },
  computed: mapGetters("user", ["loginStatus"]),
  methods: {
    ...mapMutations("user", ["exitStatus"]),
    inEnter() {
      this.one = true;
    },
    inLeave() {
      this.one = false;
    }
  }
};
</script>

<style scoped>
.site-mini-header {
  font-size: 12px;
  border-bottom: 2px solid #ff6700;
  background: #fff;
  color: #b0b0b0;
  position: relative;
  z-index: 20;
  height: 100px;
}
.site-mini-header .header-logo {
  float: left;
  width: 93px;
  margin-top: 26px;
}
.site-mini-header .logo {
  position: relative;
  display: block;
  width: 48px;
  height: 48px;
  overflow: hidden;
  background-color: #ff6700;
  text-align: left;
  text-indent: -9999em;
  color: #757575;
}

.site-mini-header .logo:before,
.site-mini-header .logo:after {
  width: 48px;
  height: 48px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  content: "";
  transform-origin: 50% 50%;
  transition: all 0.2s;
  transform: translate3d(0, 0, 0);
}

.site-mini-header .logo:before {
  background: url(https://s01.mifile.cn/i/mi-logo.png) no-repeat 50% 50%;
  opacity: 1;
}
.site-mini-header .logo:after {
  background: url(https://s01.mifile.cn/i/mi-home.png) no-repeat 50% 50%;
  opacity: 0;
  margin-left: -55px;
}
.site-mini-header .logo:hover:before {
  opacity: 0;
  transform: translate3d(55px, 0, 0);
}
.site-mini-header .logo:hover:after {
  opacity: 1;
  transform: translate3d(55px, 0, 0);
}

.site-mini-header .header-title {
  float: left;
  margin-top: 26px;
  height: 48px;
}
.site-mini-header .header-title h2,
.site-mini-header .header-title p {
  margin: 0;
  float: left;
}
.site-mini-header .header-title h2 {
  font-size: 28px;
  line-height: 48px;
  font-weight: normal;
  color: #424242;
  margin-bottom: 0;
}
.site-mini-header .header-title p {
  color: #757575;
  height: 20px;
  line-height: 20px;
  margin-top: 20px;
  margin-left: 15px;
}

.site-mini-header .topbar-info {
  margin-top: 30px;
  line-height: 40px;
}

.site-mini-header .topbar-cart,
.site-mini-header .topbar-info {
  position: relative;
  float: right;
  height: 40px;
}
/* 登陆状态的topbar-info样式 */
.site-mini-header .topbar-info .link,
.site-mini-header .topbar-info .user,
.site-mini-header .topbar-info .sep {
  float: left;
}
.site-mini-header .user {
  position: relative;
  width: 110px;
  padding: 0;
  white-space: nowrap;
}
.site-mini-header .user-name {
  position: relative;
  z-index: 5;
  display: block;
  width: 120px;
  height: 40px;
  text-align: center;
}
/* 动态添加user-active类名 */
.site-mini-header .user-active .user-name {
  background: #fff;
}
.site-mini-header .user-active a:hover {
  color: #ff6700;
}
.site-mini-header .user-name .name {
  display: inline-block;
  width: auto;
  max-width: 75px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  vertical-align: text-bottom;
}
.site-mini-header .user-name i {
  font-size: 12px;
  line-height: 24px;
  vertical-align: 12px;
  font-weight: 700;
}
.site-mini-header .user-menu-wrapper {
  position: absolute;
  left: 0;
  top: 40px;
  z-index: 3;
  height: 0;
  overflow: hidden;
  transition: height 0.3s;
  background: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
}
.user.user-active .user-menu-wrapper {
  height: 164px;
}
.site-mini-header .user-menu {
  width: 110px;
  margin: 0;
  padding: 7px 0;
  list-style-type: none;
}

.site-mini-header .user-menu a {
  display: block;
  padding: 3px 30px;
  line-height: 2;
}
/* 动态添加user-active类名 */
.site-mini-header .user-active .user-menu a:hover {
  background-color: #f5f5f5;
}
.site-mini-header .user-active .user-menu a {
  transition: all 0.2s;
}

.site-mini-header .topbar-info .sep {
  color: #e0e0e0;
  margin: 0;
}
.site-mini-header .topbar-info .link {
  padding: 0 5px;
}
</style>