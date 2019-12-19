<template>
  <div class="home-hero-container container">
    <div class="home-hero">
      <swiper :options="swiperOption" ref="mySwiper" class="home-hero-swiper">
        <!-- slides -->
        <swiper-slide v-for="(item, index) in list.Swiper_img" :key="index">
          <a href="javascript:;">
            <img :src="item.imgUrl" alt />
          </a>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>

      <div class="home-hero-sub row">
        <div class="span4">
          <ul class="home-channel-list clearfix">
            <li v-for="(item, index) in list.channel_img" :key="index">
              <a href="javascript:;">
                <img v-lazy="item.imgUrl" :alt="item.content" />
                {{item.content}}
              </a>
            </li>
          </ul>
        </div>
        <div class="span16">
          <ul class="home-promo-list clearfix">
            <li
              :class="{'first': index === 0}"
              v-for="(item, index) in list.promo_img"
              :key="index"
            >
              <a href="javascript:;">
                <img v-lazy="item.imgUrl" alt />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navigation",
  data() {
    return {
      swiperOption: {
        speed: 800,
        pagination: {
          el: ".swiper-pagination",
          clickable: true // 允许点击小圆点跳转
        },
        autoplay: {
          delay: 6000,
          disableOnInteraction: false // 手动切换之后继续自动轮播
        },
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        effect: "fade"
      },
      list: {
        Swiper_img: [
          {
            imgUrl:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/87974cd6cc4edcba673ef51a81fff3de.jpg?w=2452&h=920"
          },
          {
            imgUrl:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a012edbf0cf3bf3b1de22b78c19ad050.jpg?thumb=1&w=1226&h=460&f=webp&q=90"
          },
          {
            imgUrl:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a845ff7f63615deed337967fd1d412e7.jpg?thumb=1&w=1533&h=575&f=webp&q=90"
          },
          {
            imgUrl:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ecac78f468f95f59996ab7978c1de8e3.jpg?thumb=1&w=1226&h=460&f=webp&q=90"
          },
          {
            imgUrl:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/865c55ca45c08d6ce59b69ecadb4384f.jpg?thumb=1&w=1226&h=460&f=webp&q=90"
          }
        ],
        channel_img: [
          {
            imgUrl:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82abdba456e8caaea5848a0cddce03db.png?w=48&amp;h=48",
            content: "小米秒杀"
          },
          {
            imgUrl:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/806f2dfb2d27978e33fe3815d3851fa3.png?w=48&amp;h=48",
            content: "企业团购"
          },
          {
            imgUrl:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eded6fa3b897a058163e2485532c4f10.png?w=48&amp;h=48",
            content: "F码通道"
          },
          {
            imgUrl:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/43a3195efa6a3cc7662efed8e7abe8bf.png?w=48&amp;h=48",
            content: "米粉卡"
          },
          {
            imgUrl:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f4846bca6010a0deb9f85464409862af.png?w=48&amp;h=48",
            content: "以旧换新"
          },
          {
            imgUrl:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9a76d7636b08e0988efb4fc384ae497b.png?w=48&amp;h=48",
            content: "话费充值"
          }
        ],
        promo_img: [
          {
            imgUrl:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/19e6f9722925fe548c3a966fca65f1a7.jpg?w=632&amp;h=340"
          },
          {
            imgUrl:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f45b9b74dcbf557aa2ed9a6915ddc1c5.jpg?w=632&amp;h=340"
          },
          {
            imgUrl:
              "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/816a66edef10673b4768128b41804cae.jpg?w=632&amp;h=340"
          }
        ]
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    this.swiper.slideTo(3, 1000, false);
  }
};
</script>

<style scoped>
.home-hero-container {
  position: relative;
  z-index: 10;
}

.home-hero {
  position: relative;
  margin-bottom: 26px;
}

.home-hero .home-hero-sub {
  margin-top: 14px;
}

.home-channel-list {
  margin: 0;
  padding: 3px;
  list-style-type: none;
  font-size: 12px;
  text-align: center;
  background: #5f5750;
}

.home-channel-list li {
  position: relative;
  float: left;
  width: 70px;
  height: 82px;
  padding: 0 3px;
}

.home-channel-list li:after,
.home-channel-list li:before {
  position: absolute;
  content: "";
  background: #665e57;
}

.home-channel-list li:before {
  top: -1px;
  left: 6px;
  width: 64px;
  height: 1px;
}

.home-channel-list li:after {
  top: 6px;
  left: 0;
  width: 1px;
  height: 70px;
}

.home-channel-list li.left:after,
.home-channel-list li.top:before {
  display: none;
}

.home-channel-list a {
  display: block;
  padding-top: 18px;
  text-overflow: ellipsis;
  color: #fff;
  opacity: 0.7;
  -webkit-transition: opacity 0.2s;
  transition: opacity 0.2s;
}

.home-channel-list a:hover {
  opacity: 1;
}

.home-channel-list img {
  display: block;
  width: 24px;
  height: 24px;
  margin: 0 auto 4px;
}

.home-promo-list {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.home-promo-list li {
  float: left;
  width: 316px;
  height: 170px;
  margin-left: 15px;
  -webkit-transition: -webkit-box-shadow 0.2s linear;
  transition: -webkit-box-shadow 0.2s linear;
  transition: box-shadow 0.2s linear;
  transition: box-shadow 0.2s linear, -webkit-box-shadow 0.2s linear;
}

.home-promo-list li:hover {
  z-index: 2;
  -webkit-box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.home-promo-list li.first {
  margin-left: 0;
}

.home-promo-list a {
  display: block;
  height: 170px;
  background: url(//i1.mifile.cn/f/i/2014/cn/placeholder-80.png) no-repeat 50%;
}

.home-promo-list img {
  display: block;
  width: 316px;
  height: 170px;
}
/* 自定义swiper样式 */
.home-hero-swiper {
  position: relative;
  height: 460px;
  overflow: hidden;
}

.home-hero-swiper .swiper-slide {
  width: 1226px;
  height: 460px;
  text-align: right;
}

.home-hero-swiper .swiper-slide a {
  display: block;
  background: url(//i1.mifile.cn/f/i/2014/cn/placeholder-220.png) no-repeat
    620px;
}

.home-hero-swiper .swiper-slide img {
  display: block;
  width: 1226px;
  height: 460px;
}

.home-hero-swiper .swiper-button-prev {
  left: 234px;
}

.home-hero-swiper .swiper-pagination {
  width: 400px;
  left: auto;
  right: 30px;
  bottom: 20px;
  text-align: right;
}

.home-hero-swiper .swiper-pagination-bullet {
  width: 6px;
  height: 6px;
  border: 2px solid #fff;
  border-color: hsla(0, 0%, 100%, 0.3);
  border-radius: 10px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.4);
  opacity: 1;
}

.home-hero-swiper .swiper-pagination-bullet:focus {
  outline: 0;
}

.home-hero-swiper .swiper-pagination-bullet-active,
.home-hero-swiper .swiper-pagination-bullet:hover {
  background: hsla(0, 0%, 100%, 0.4);
  border-color: rgba(0, 0, 0, 0.4);
}

.swiper-button-next,
.swiper-button-prev {
  position: absolute;
  top: 50%;
  width: 41px;
  height: 69px;
  margin-top: -35px;
  z-index: 10;
  cursor: pointer;
  outline: none;
}

.swiper-button-prev,
.swiper-container-rtl .swiper-button-next {
  background: url(//i1.mifile.cn/f/i/2014/cn/icon/icon-slides.png) no-repeat -84px
    50%;
  left: 0;
  right: auto;
}
.swiper-button-prev:hover,
.swiper-container-rtl .swiper-button-next:hover {
  background-position: 0 50%;
}

.swiper-button-next,
.swiper-container-rtl .swiper-button-prev {
  background: url(//i1.mifile.cn/f/i/2014/cn/icon/icon-slides.png) no-repeat -125px
    50%;
  right: 0;
  left: auto;
}
.swiper-button-next:hover,
.swiper-container-rtl .swiper-button-prev:hover {
  background-position: -42px 50%;
}
</style>