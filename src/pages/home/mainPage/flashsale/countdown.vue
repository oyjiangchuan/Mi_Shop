<template>
  <div class="flashsale-countdown rainbow-item-4 span4">
    <div class="round">{{Racetime}} 场</div>
    <img src="../../../../../static/image/seckill.png" alt="小米闪购" />
    <div class="desc">{{msg}}</div>
    <div class="countdown clearfix">
      <span>{{h}}</span>
      <i>:</i>
      <span>{{m}}</span>
      <i>:</i>
      <span>{{s}}</span>
    </div>
  </div>
</template>

<script>
export default {
  // time: '12:30' 结束时间,  notTimes: '10:00' 开始时间
  props: ["time", "notTimes", "Racetime"],
  data() {
    return {
      h: "00",
      m: "00",
      s: "00",
      difference: 0,
      timess: null,
      flag: false,
      msg: '距离结束还有'
    };
  },
  watch: {
    time(val) {
      this.startTime();
      this.flag = false;
      this.timeDown();
    }
  },
  created() {
    this.startTime();
    this.timeDown();
  },
  methods: {
    // 初始化时间
    startTime() {
      let nowTime = new Date();
      let Y = nowTime.getFullYear();
      let M = nowTime.getMonth() + 1;
      let D = nowTime.getDate();
      let time = Y + "/" + M + "/" + D + " " + this.time + ":00";
      let nowTime2 = Y + "/" + M + "/" + D + " " + this.notTimes.split(".")[0];
      let beginTime = new Date(nowTime2);
      let endTime = new Date(time);
      this.difference = parseInt(
        (endTime.getTime() - beginTime.getTime()) / 1000
      );
      // if (this.difference === 0 || this.difference === -1) {
      //   this.$emit("timeEnd");
      // }
    },
    // 倒计时
    timeDown() {
      // 切换清除之前的定时器
      clearInterval(this.timess);
      this.timess = setInterval(() => {
        if (this.flag === true) {
          clearInterval(this.timess);
        }
        this.difference = this.difference - 1;
        if (this.difference > 0) {
          this.h = this.format(parseInt((this.difference / (60 * 60)) % 24));
          this.m = this.format(parseInt((this.difference / 60) % 60));
          this.s = this.format(parseInt(this.difference % 60));
        } else {
          this.h = "00";
          this.m = "00";
          this.s = "00";
          this.flag = true;
          this.msg = '本场已结束'
        }
      }, 1000);
    },
    // 时间格式
    format(time) {
      if (time >= 10) {
        return time;
      } else {
        return `0${time}`;
      }
    }
  }
};
</script>

<style scoped>
.home-flashsale .flashsale-countdown {
  height: 300px;
  padding-top: 39px;
  border-top-width: 1px;
  border-top-style: solid;
  background: #f1eded;
  text-align: center;
}

.home-flashsale .flashsale-countdown .round {
  font-size: 21px;
  color: #ef3a3b;
  padding-top: 15px;
}

.home-flashsale .flashsale-countdown img {
  margin: 25px auto;
}

.home-flashsale .flashsale-countdown .desc {
  color: rgba(0, 0, 0, 0.54);
  font-size: 15px;
}

.home-flashsale .flashsale-countdown .countdown {
  width: 168px;
  margin: 28px auto 0;
}

.home-flashsale .flashsale-countdown .countdown span {
  width: 46px;
  height: 46px;
  background: #605751;
  color: #fff;
  font-size: 24px;
  line-height: 46px;
  float: left;
}

.home-flashsale .flashsale-countdown .countdown i {
  width: 15px;
  float: left;
  height: 46px;
  line-height: 46px;
  color: #605751;
  font-size: 28px;
  font-style: normal;
}

.home-flashsale .flashsale-countdown.failed {
  padding-top: 60px;
}
</style>