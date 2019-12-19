<template>
  <div id="app">
    <transition name="fade-out"> <!-- mode="in-out" 这里需要注意一下mode的作用 -->
      <router-view />
    </transition>
  </div>
</template>

<script>
import "./assets/iconfont/iconfont.css";
export default {
  name: "App"
};
</script>

<style>
@import url("./assets/css/base.css");
.fade-out-enter {
  opacity: 0;
}
.fade-out-leave {
  opacity: 1;
}
.fade-out-enter-active {
  transition: opacity 0.5s;
}
.fade-out-leave-active {
  opacity: 0;
  transition: opacity 0.5s;
}
</style>
