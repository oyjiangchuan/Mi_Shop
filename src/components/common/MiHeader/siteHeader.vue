<template>
  <div class="site-header">
    <div class="container">
      <!-- logo部分 -->
      <div class="header-logo">
        <router-link tag="a" to="/" title="小米官网" class="logo ir"></router-link>
      </div>
      <!-- 导航栏 -->
      <siteHeaderNav @currentIndex="getIndex" />
      <!-- 通过导航栏组件控制下拉菜单 -->
      <!-- 搜索框 -->
      <search />
    </div>
    <!-- 动态下拉的导航菜单 -->
    <navMenu :currentIndex="currentIndex" />
  </div>
</template>

<script>
import navMenu from "./navMenu";
import siteHeaderNav from "./siteHeaderNav";
import search from "./search";
export default {
  name: "siteHeader",
  data() {
    return {
      currentIndex: {}
    };
  },
  methods: {
    getIndex(index) {
      // console.log(index)
      this.currentIndex = index;
    }
  },
  components: {
    search,
    navMenu,
    siteHeaderNav
  }
};
</script>

<style scoped>
.site-header {
  z-index: 20;
  height: 100px
}

.site-header,.site-header .container {
  position: relative
}

.site-header .header-logo {
  float: left;
  width: 62px;
  margin-top: 22px
}

.site-header .logo {
  position: relative;
  display: block;
  width: 55px;
  height: 55px;
  overflow: hidden;
  background-color: #ff6700;
  *background: url(/i/logo.png) no-repeat 50% 50%
}

.site-header .logo:after,.site-header .logo:before {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  width: 55px;
  height: 55px;
  content: "";
  -webkit-transform-origin: 50% 50%;
  -ms-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  -webkit-transition: all .2s;
  transition: all .2s
}

.site-header .logo:before {
  background: url(//s02.mifile.cn/assets/static/image/mi-logo.png) no-repeat 50% 50%;
  opacity: 1
}

.site-header .logo:after,.site-header .logo:before {
  -webkit-transform: translateZ(0);
  transform: translateZ(0)
}

.site-header .logo:after {
  background: url(//s02.mifile.cn/assets/static/image/mi-home.png) no-repeat 50% 50%;
  opacity: 0;
  margin-left: -55px
}

.site-header .logo:focus {
  outline: 0
}

.site-header .logo:hover:after,.site-header .logo:hover:before {
  -webkit-transform: translate3d(55px,0,0);
  transform: translate3d(55px,0,0)
}
.site-header .logo:hover:before {
  opacity: 0
}
.site-header .logo:hover:after {
  opacity: 1
}

.site-header .logo:active:after {
  -webkit-transform: translate3d(55px,0,0) scale(.9);
  transform: translate3d(55px,0,0) scale(.9)
}
</style>