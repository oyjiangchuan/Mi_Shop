<template>
  <div class="home-tool-bar" :class="large ? 'home-tool-bar-large' : 'home-tool-bar-small' ">
    <a class="item item-image" href="javascript:;">
      <div class="icon">
        <img
          src="https://i8.mifile.cn/b2c-mimall-media/98a23aae70f25798192693f21c4d4039.png"
          class="static"
        />
        <img
          src="https://i8.mifile.cn/b2c-mimall-media/74c4fcb4475af8308e9a670db9c01fdf.png"
          class="hover"
        />
      </div>
      <span data-v-53f12c84 class="text">手机APP</span>
      <div class="pop-content">
        <img src="https://i8.mifile.cn/b2c-mimall-media/93650133310ec1c385487417a472a26c.png" />
        <span class="desc">手机扫一扫一分赢好礼</span>
      </div>
    </a>
    <router-link tag="a" :to="item.href" class="item" v-for="(item, index) in List" :key="index">
      <div class="icon">
        <img v-lazy="item.static_img" alt class="static" />
        <img v-lazy="item.hover_img" alt class="hover" />
      </div>
      <span class="text">{{item.text}}</span>
      <span class="cart-num" v-show=" item.text==='购物车' && allProducts > 0">{{allProducts}}</span>
    </router-link>

    <div class="item backtop" :class="{'active': isShow}" @click="backTop">
      <div class="icon">
        <img src="//i1.mifile.cn/f/i/2018/home/totop.png" alt class="static" />
        <img src="//i1.mifile.cn/f/i/2018/home/totop_hover.png" alt class="hover" />
      </div>
      <span class="text">回顶部</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "toolBar",
  data() {
    return {
      List: [
        {
          text: "个人中心",
          static_img:
            "https://i8.mifile.cn/b2c-mimall-media/55cad219421bee03a801775e7309b920.png",
          hover_img:
            "https://i8.mifile.cn/b2c-mimall-media/41f858550f42eb1770b97faf219ae215.png",
          href: "/portal"
        },
        {
          text: "售后服务",
          static_img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/12eb0965ab33dc8e05870911b90f3f13.png",
          hover_img:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/95fbf0081a06eec7be4d35e277faeca0.png",
          href: "/"
        },
        {
          text: "人工客服",
          static_img:
            "https://i8.mifile.cn/b2c-mimall-media/4f036ae4d45002b2a6fb6756cedebf02.png",
          hover_img:
            "https://i8.mifile.cn/b2c-mimall-media/5e9f2b1b0da09ac3b3961378284ef2d4.png",
          href: "/"
        },
        {
          text: "购物车",
          static_img:
            "https://i8.mifile.cn/b2c-mimall-media/d7db56d1d850113f016c95e289e36efa.png",
          hover_img:
            "https://i8.mifile.cn/b2c-mimall-media/692a6c3b0a93a24f74a29c0f9d68ec71.png",
          href: "/cart"
        }
      ],
      isShow: false,
      large: true,
      scrollTop: 0,
      screenWidth: null
    };
  },
  computed: {
    ...mapGetters("cart", { allProducts: "allProducts" })
  },
  mounted() {
    window.addEventListener("scroll", this.scrollToTop);
    // 拿到刚进来的浏览器宽度
    this.screenWidth = window.innerWidth;
    window.onresize = () => {
      return (() => {
        this.screenWidth = window.innerWidth;
      })();
    };
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop);
    window.onresize = null;
  },
  watch: {
    screenWidth(newVal) {
      this.screenWidth = newVal;
      if (this.screenWidth > 1460) {
        this.large = true;
      } else {
        this.large = false;
      }
    }
  },
  methods: {
    // 点击图片回到顶部方法，加计时器是为了过渡顺滑
    backTop() {
      const that = this;
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 10);
        document.documentElement.scrollTop = document.body.scrollTop =
          that.scrollTop + ispeed;
        if (that.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 16);
    },
    // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
    scrollToTop() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.scrollTop = scrollTop;
      if (this.scrollTop > 1000) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    }
  }
};
</script>

<style scoped>
.home-tool-bar {
  position: fixed;
  bottom: 70px;
  right: 0;
  z-index: 99;
}

.home-tool-bar .item {
  position: relative;
  display: block;
  width: 82px;
  height: 90px;
  margin-top: -1px;
  background-color: #fff;
  border: 1px solid #f5f5f5;
  text-align: center;
}

.home-tool-bar .item:hover .text {
  color: #ff6700;
}

.home-tool-bar .item:hover .static {
  opacity: 0;
}

.home-tool-bar .item:hover .hover {
  opacity: 1;
}

.home-tool-bar .item:hover .pop-content {
  -webkit-transform: translate3d(-110%, 0, 0);
  transform: translate3d(-110%, 0, 0);
  opacity: 1;
  visibility: visible;
}

.home-tool-bar .item .icon {
  position: relative;
  width: 30px;
  height: 30px;
  margin: 0 auto 8px;
  padding-top: 18px;
}

.home-tool-bar .item .icon img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 30px;
  height: 30px;
  -webkit-transition: opacity 0.3s;
  transition: opacity 0.3s;
}

.home-tool-bar .item .static {
  opacity: 1;
}

.home-tool-bar .item .hover {
  opacity: 0;
}

.home-tool-bar .item .text {
  color: #757575;
  -webkit-transition: color 0.3s;
  transition: color 0.3s;
}

.home-tool-bar .item .pop-content {
  position: absolute;
  left: 0;
  top: 0;
  padding: 14px;
  background: #fff;
  border: 1px solid #f5f5f5;
  -webkit-transition: opacity 0.3s;
  transition: opacity 0.3s;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  opacity: 0;
  visibility: hidden;
}

.home-tool-bar .item .pop-content:after,
.home-tool-bar .item .pop-content:before {
  content: "";
  position: absolute;
  top: 21%;
  width: 0;
  height: 0;
  border-width: 10px;
  border-style: solid;
  overflow: hidden;
}

.home-tool-bar .item .pop-content:after {
  right: -18px;
  border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #fff;
  z-index: 2;
}

.home-tool-bar .item .pop-content:before {
  right: -19px;
  border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #f5f5f5;
  z-index: 1;
}

.home-tool-bar .item .pop-content img {
  display: block;
  width: 100px;
  height: 100px;
  margin: 6px auto;
}

.home-tool-bar .item .pop-content .desc {
  display: block;
  width: 82px;
  margin: 14px auto 0;
  color: #757575;
  text-align: center;
}

.home-tool-bar .item .cart-num {
  position: absolute;
  right: 14px;
  top: 18px;
  padding: 0 5px;
  height: 14px;
  line-height: 14px;
  color: #fff;
  font-size: 10px;
  background-color: #ff6700;
  border: 2px solid #fff;
  border-radius: 9px;
}
.home-tool-bar .item.backtop {
  cursor: pointer;
}
.home-tool-bar .backtop {
  margin-top: 14px;
  border-top: 1px solid #f5f5f5;
  visibility: hidden;
}

.home-tool-bar .backtop.active {
  visibility: visible;
}

.home-tool-bar-small {
  left: 50%;
  right: auto;
  margin-left: 613px;
  bottom: 40px;
}

.home-tool-bar-small.mini {
  right: 0;
  left: auto;
  margin-left: 0;
}

.home-tool-bar-small .item {
  width: 25px;
  height: 40px;
}

.home-tool-bar-small .item:hover .text {
  display: block;
  -webkit-transform: translate3d(-115%, -50%, 0);
  transform: translate3d(-115%, -50%, 0);
  color: #757575;
}

.home-tool-bar-small .item-image:hover .text {
  display: none;
}

.home-tool-bar-small .item .icon {
  width: 20px;
  height: 20px;
  padding-top: 10px;
}

.home-tool-bar-small .item .icon img {
  width: 20px;
  height: 20px;
}

.home-tool-bar-small .item .text {
  display: none;
  position: absolute;
  left: 0;
  top: 50%;
  height: 28px;
  line-height: 28px;
  padding: 0 8px;
  background-color: #fff;
  border: 1px solid #f5f5f5;
  text-align: center;
  white-space: nowrap;
}

.home-tool-bar-small .item .text:after,
.home-tool-bar-small .item .text:before {
  content: "";
  position: absolute;
  top: 50%;
  width: 0;
  height: 0;
  margin-top: -6px;
  border-width: 6px;
  border-style: solid;
  overflow: hidden;
}

.home-tool-bar-small .item .text:after {
  border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #fff;
  right: -12px;
  z-index: 2;
}

.home-tool-bar-small .item .text:before {
  border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #f5f5f5;
  right: -13px;
  z-index: 1;
}

.home-tool-bar-small .item .text i {
  font-style: normal;
}

.home-tool-bar-small .item .pop-content:after,
.home-tool-bar-small .item .pop-content:before {
  top: 10px;
  border-width: 6px;
}

.home-tool-bar-small .item .pop-content:after {
  right: -12px;
}

.home-tool-bar-small .item .pop-content:before {
  right: -13px;
}

.home-tool-bar-small .item .cart-num {
  right: 0;
  top: 8px;
  width: 6px;
  height: 6px;
  padding: 0;
  border-radius: 6px;
  text-indent: -9999em;
}
</style>