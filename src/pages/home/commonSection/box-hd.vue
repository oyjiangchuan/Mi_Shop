<template>
  <div class="box-hd clearfix">
    <h2 class="title">{{boxHdData.title}}</h2>
    <div class="more">
      <a href="javascript:;" class="more-link" v-if="boxHdData.type.list.length <= 1">
        查看全部
        <i class="iconfont icon-jiantou"></i>
      </a>
      <ul class="tab-list" v-else>
        <li
          :class="showIndex === index ? 'tab-active' : ''"
          @mouseenter="showChange(index)"
          v-for="(item, index) in boxHdData.type.list"
          :key="index"
        >{{item.content}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "box-hd",
  data() {
    return {
      showIndex: 0
    };
  },
  props: {
    boxHdData: {
      type: Object,
      default: null
    }
  },
  methods: {
    // 动态改变index的值 传递给父组件 再传递给brickList组件 实现动态切换的效果
    showChange(index) {
      this.showIndex = index;
      this.$emit("toIndex", this.showIndex);
    }
  }
};
</script>

<style scoped>
.xm-plain-box .box-hd {
  position: relative;
  height: 58px;
  -webkit-font-smoothing: antialiased;
}

.xm-plain-box .box-hd .title {
  margin: 0;
  font-size: 22px;
  font-weight: 200;
  line-height: 58px;
  color: #333;
}

.xm-plain-box .box-hd .title small {
  margin-left: 10px;
  font-size: 14px;
}

.xm-plain-box .box-hd .title .tip {
  color: #757575;
}

.xm-plain-box .box-hd .more {
  position: absolute;
  top: 0;
  right: 0;
}

.xm-plain-box .box-hd .more .more-link {
  font-size: 16px;
  line-height: 58px;
  color: #424242;
  -webkit-transition: all 0.4s;
  transition: all 0.4s;
}

.xm-plain-box .box-hd .more .more-link:hover {
  color: #ff6700;
}

.xm-plain-box .box-hd .more .more-link:hover .iconfont {
  background: #ff6700;
}

.xm-plain-box .box-hd .more .more-link .iconfont {
  width: 12px;
  height: 12px;
  padding: 4px;
  margin-left: 8px;
  border-radius: 16px;
  font-size: 12px;
  line-height: 12px;
  background: #b0b0b0;
  color: #fff;
  vertical-align: 1px;
  -webkit-transition: all 0.4s;
  transition: all 0.4s;
}

.xm-plain-box .box-hd .more .control {
  margin-left: -1px;
}

.xm-plain-box .box-hd .more .tab-list {
  margin: 0;
  padding: 16px 0 0;
  list-style-type: none;
  font-size: 16px;
}

.xm-plain-box .box-hd .more .tab-list li {
  display: inline-block;
  padding: 0;
  margin: 0 0 0 30px;
  color: #424242;
  border-bottom: 2px solid #f5f5f5;
  border-bottom: 2px solid rgba(0, 0, 0, 0);
  -webkit-transition: border 0.3s;
  transition: border 0.3s;
  cursor: pointer;
}

.xm-plain-box .box-hd .more .tab-list li.tab-active,.xm-plain-box .box-hd .more .tab-list li:hover {
  color: #ff6700;
  border-bottom: 2px solid #ff6700
}
</style>