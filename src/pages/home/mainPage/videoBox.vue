<template>
  <div class="home-video-box xm-plain-box">
    <boxHeader :boxHdData="boxHdData" />
    <div class="box-bd clearfix">
      <ul class="video-list clearfix">
        <li
          class="video-item"
          v-for="(item, index) in boxHdData.type.list[0].item_2"
          :key="index"
          @click="open('toastVideo', item)"
        >
          <a href="javascript: void(0);" title="点击播放视频">
            <div class="figure figure-img">
              <img width="296" height="180" :alt="item.title" v-lazy="item.img" />
              <span class="play">
                <i class="iconfont icon-bofang"></i>
              </span>
            </div>
            <h3 class="title">{{item.title}}</h3>
            <p class="desc">{{item.desc}}</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import boxHeader from "../commonSection/box-hd";
export default {
  data() {
    return {
      boxHdData: {
        title: "视频",
        type: {
          list: [
            {
              item_2: [
                {
                  title: "小米MIX Alpha 开箱视频",
                  img:
                    "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b4004fc968de331f702585d58b15aba2.jpg?thumb=1&w=296&h=180&f=webp&q=90",
                  src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7f49c1ccd75f76ec86b52c9ae4c4a082.mp4"
                },
                {
                  title: "小米5G新品手机发布会",
                  img:
                    "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/395fdedf0f40206032397e33beed756e.jpg?thumb=1&w=296&h=180&f=webp&q=90",
                  src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1443581f88b733750c7763b2b3d67c52.mp4"
                },
                {
                  title: "Redmi Note 8 系列发布会",
                  img:
                    "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3a134c9f8fffb85a47ac397e7eeba7e8.jpg?thumb=1&w=296&h=180&f=webp&q=90",
                  src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/df3dc1da003b7db992e902f653326476.mp4"
                },
                {
                  title: "小米CC9",
                  desc: "深蓝星球",
                  img:
                    "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1541da85ac8b204056374641eee24726.jpg?thumb=1&w=296&h=180&f=webp&q=90",
                  src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7a2e31bf18e8fb5abd2a32ea93f0d46b.mp4"
                }
              ]
            }
          ]
        }
      }
    };
  },
  methods: {
    open(type, item) {
      this.$showToast(type, item);
    }
  },
  components: {
    boxHeader
  }
};
</script>

<style scoped>
.home-video-box .video-list {
  width: 1240px;
  height: 285px;
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.home-video-box .video-item {
  position: relative;
  float: left;
  width: 296px;
  height: 285px;
  margin-left: 14px;
  margin-bottom: 14px;
  text-align: center;
  background: #fff;
  -webkit-transition: all 0.2s linear;
  transition: all 0.2s linear;
}

.home-video-box .video-item:first-child {
  margin-left: 0;
}

.home-video-box .video-item:hover {
  z-index: 2;
  -webkit-box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  -webkit-transform: translate3d(0, -2px, 0);
  transform: translate3d(0, -2px, 0);
}

.home-video-box .video-item .figure-img {
  position: relative;
  width: 296px;
  height: 180px;
  margin: 0 0 28px;
}

.home-video-box .video-item .figure-img:hover .play {
  background-color: #ff6700;
  border-color: #ff6700;
}

.home-video-box .video-item .figure-img a {
  display: block;
  height: 180px;
}

.home-video-box .video-item .figure-img img {
  width: 296px;
  height: 180px;
}

.home-video-box .video-item .play {
  position: absolute;
  left: 20px;
  bottom: 10px;
  width: 32px;
  height: 20px;
  border: 2px solid #fff;
  border-radius: 12px;
  background-color: #424242;
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  overflow: hidden;
}

.home-video-box .video-item .play i {
  font-size: 13px;
  line-height: 20px;
}

.home-video-box .video-item .title {
  margin: 0 14px 6px;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  color: #333;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.home-video-box .video-item .title a {
  color: #333;
}

.home-video-box .video-item .title a:hover {
  color: #ff6700;
}

.home-video-box .video-item .desc {
  height: 18px;
  margin: 0 14px;
  font-size: 12px;
  color: #b0b0b0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>