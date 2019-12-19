<template>
  <div
    class="header-nav-menu header-nav-menu-active"
    ref="headerNavMenu" 
    @mouseenter="enter"
    @mouseleave="leave"
    :class="show ? 'slide-down' : 'slide-up' "
  >
    <div class="container">
      <ul class="children-list clearfix" v-for="(item, index) in list" :key="index" v-show="currentIndex.index === index">
        <li :class="inIndex === 0 ? 'first' : '' " v-for="(inItem, inIndex) in item" :key="inIndex">
          <a :href="inItem.src" target="_blank">
            <div class="figure figure-thumb">
              <img :src="inItem.img" :alt="inItem.title" width="160" height="110" />
            </div>
            <div class="title">{{inItem.title}}<br/>{{inItem.content}}</div>
            <p class="price" v-show="inItem.price">{{inItem.price}}</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "navMenu",
  data() {
    return {
      show: false,
      list: []
    };
  },
  created() {
    this.$http("/navMenu").then(res => {
      // console.log(res);
      this.list = res.data.list
    });
  },
  props: {
    currentIndex: {
      type: Object,
      default: null
    }
  },
  watch: {
    currentIndex(newValue, oldValue) {
      if (
        newValue.show === false ||
        !newValue.show ||
        newValue.index === 7 ||
        newValue.index === 8
      ) {
        this.$refs.headerNavMenu.className =
          "header-nav-menu header-nav-menu-active slide-up";
      } else {
        this.$refs.headerNavMenu.className =
          "header-nav-menu header-nav-menu-active slide-down";
      }
    }
  },
  methods: {
    enter() {
      this.show = true;
    },
    leave() {
      this.show = false;
    }
  }
};
</script>

<style>
.site-header .header-nav-menu {
  position: absolute;
  top: 100px;
  left: 0;
  z-index: 24;
  width: 100%;
  height: 0;
  background: #fff;
  overflow: hidden
}

.site-header .header-nav-menu.slide-up.header-nav-menu-active {
  height: 0
}

.site-header .header-nav-menu.slide-down.header-nav-menu-active {
  box-sizing: border-box;
  height: 229px;
  border-top: 1px solid #e0e0e0;
}

.site-header .header-nav-menu .children-list {
  margin: 0;
  padding: 0;
  list-style-type: none;
  font-size: 12px
}

.site-header .header-nav-menu .children-list li {
  position: relative;
  float: left;
  width: 180px;
  padding: 35px 12px 0;
  text-align: center
}

.site-header .header-nav-menu .children-list li:before {
  position: absolute;
  left: 0;
  top: 35px;
  z-index: 1;
  width: 1px;
  height: 100px;
  content: "";
  background-color: #e0e0e0
}

.site-header .header-nav-menu .children-list .first:before {
  display: none
}

.site-header .header-nav-menu .figure-thumb {
  width: 160px;
  height: 110px;
  margin: 0 auto 16px;
  text-align: center
}

.site-header .header-nav-menu .figure-thumb img {
  width: 160px;
  height: 110px
}

.site-header .header-nav-menu .figure-thumb a {
  display: block
}

.site-header .header-nav-menu .title {
  margin: 0;
  line-height: 20px;
  color: #333
}

.site-header .header-nav-menu .title,.site-header .header-nav-menu .title a {
  color: #333
}

.site-header .header-nav-menu .price {
  margin: 0;
  line-height: 20px;
  color: #ff6700
}

.site-header .header-nav-menu .flags {
  position: absolute;
  top: -1px;
  left: 0;
  z-index: 1;
  width: 100%;
  font-size: 12px;
  text-align: center
}

.site-header .header-nav-menu .flag {
  display: inline-block;
  height: 18px;
  padding: 1px 20px;
  border: 1px solid #ff6700;
  color: #ff6700
}

.site-header .header-nav-menu-active {
  border-bottom: 1px solid\9;
  -webkit-box-shadow: 0 3px 4px rgba(0,0,0,.18);
  box-shadow: 0 3px 4px rgba(0,0,0,.18);
  -webkit-transition: height .3s,-webkit-box-shadow .2s;
  transition: height .3s,-webkit-box-shadow .2s;
  transition: box-shadow .2s,height .3s;
  transition: box-shadow .2s,height .3s,-webkit-box-shadow .2s
}
</style>