<template>
  <transition name="dialog-fade">
    <div class="mi-popup" style="z-index: 100;" v-show="visiable">
      <div class="mi-popup__mask mi-modal"></div>
      <div class="mi-dialog__wrapper home-video-dialog" style="width: 880px;">
        <div class="mi-dialog">
          <div class="mi-dialog__header">
            <span class="mi-dialog__title">小米MIX Alpha 开箱视频</span>
          </div>
          <a class="mi-dialog__headerbtn" @click="close">
            <i class="mi-dialog__close iconfont icon-shanchu"></i>
          </a>
          <div class="mi-dialog__body">
            <video-player
              class="vjs-custom-skin"
              ref="videoPlayer"
              :options="playerOptions"
              :playsinline="true"
            ></video-player>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      playerOptions: {
        // video的配置
        autoplay: false,
        controls: true,
        muted: false,
        language: "en",
        height: "495",
        width: "880",
        playbackRates: [0.7, 1.0, 1.5, 2.0], // 播放速度
        sources: [
          {
            type: "video/mp4", // mp4
            src: `${this.item.src}`
          }
        ],
        poster: `${this.item.img}`
      }
    };
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    }
  },
  created() {
    setTimeout(() => {
      this.player.muted(false);
    }, 5000);
  },
  props: {
    visiable: {
      type: Boolean,
      required: true
    },
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    close() {
      this.$closeToast();
    }
  }
};
</script>

<style>
@import url(./common.css);
.mi-dialog__wrapper.home-video-dialog .mi-dialog .mi-dialog__body {
  padding: 0;
  background-color: #000;
}
.video-js .vjs-big-play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 90px;
  height: 90px;
  margin-top: -45px;
  margin-left: -45px;
  cursor: pointer;
  z-index: 2;
  font-size: 6.5em;
  line-height: 90px;
  border: none;
  border-radius: 50%;
}
.video-js .vjs-play-progress {
  background-color: #ff6a03;
}
.video-js .vjs-volume-level {
  background-color: #ff6a03;
}
.vjs-slider-horizontal .vjs-volume-level:before {
  top: -0.333em;
}
.vjs-play-control.vjs-control.vjs-button.vjs-paused:hover {
  color: #ff6a03;
}
.vjs-play-control.vjs-control.vjs-button.vjs-playing:hover {
  color: #ff6a03;
}
.vjs-button > .vjs-icon-placeholder:before {
  font-size: 2.3em;
  line-height: 1.5;
}
.vjs-playback-rate .vjs-playback-rate-value {
  line-height: 2.4;
}
</style>