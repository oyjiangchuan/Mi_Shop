<template>
  <div class="header-nav">
    <ul class="nav-list clearfix">
      <navCategory />
      <li
        class="nav-item"
        v-for="(item, index) in list"
        :key="index"
        @mouseenter="changeClass($event, index)"
        @mouseleave="removeClass($event, index)"
      >
        <a :href="item.src ? item.src : 'javascript: void(0);'" class="link">
          <span class="text">{{item.title}}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import navCategory from "./navCategory";
export default {
  name: "siteHeaderNav",
  data() {
    return {
      list: [
        { title: "小米手机" },
        { title: "Redmi 红米" },
        { title: "电视" },
        { title: "笔记本" },
        { title: "家电" },
        { title: "路由器" },
        { title: "智能硬件" },
        { title: "服务", src: "https://www.mi.com/service/" },
        { title: "社区", src: "http://www.xiaomi.cn/" }
      ]
    };
  },
  components: {
    navCategory
  },
  methods: {
    changeClass($event, index) {
      $event.currentTarget.className = "nav-item nav-item-active";
      this.$emit("currentIndex", { index: index, show: true });
    },
    removeClass($event, index) {
      this.$emit("currentIndex", { index: index, show: false });
      $event.currentTarget.className = "nav-item";
    }
  }
};
</script>

<style>
.site-header .header-nav {
  float: left;
  width: 850px;
}
.site-header .nav-list {
  position: relative;
  z-index: 10;
  float: left;
  width: 1100px;
  height: 88px;
  margin: 0;
  padding: 12px 0 0 30px;
  list-style-type: none;
  font-size: 16px;
}

.site-header .nav-item {
  float: left;
}

.site-header .nav-item .link {
  display: block;
  padding: 26px 10px 38px;
  *padding: 26px 8px 38px;
  color: #333;
  -webkit-transition: color 0.2s;
  transition: color 0.2s;
}

.site-header .nav-item .link:focus {
  outline: 0;
}
.site-header .nav-item-active {
  position: relative;
}

.site-header .nav-item-active .link {
  color: #ff6700;
}

.site-header .nav-item-active:after {
  position: absolute;
  top: 50px;
  left: 50%;
  width: 600px;
  height: 40px;
  margin-left: -300px;
  content: "";
  background-color: rgba(0, 0, 0, 0);
}
</style>