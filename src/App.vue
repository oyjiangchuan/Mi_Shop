<template>
  <div id="app">
    <!-- <i class="iconfont icon-icon-test-copy"></i> -->
    <Header />
    <router-view />
  </div>
</template>

<script>
import './assets/iconfont/iconfont.css'
import Header from '@/components/common/header/header'
export default {
  name: "App",
  components: {
    Header
  }
}
</script>

<style>
body {
  font: 14px/1.5 Helvetica Neue, Helvetica, Arial, Microsoft Yahei,Hiragino Sans GB, Heiti SC, WenQuanYi Micro Hei, sans-serif;
  color: #333;
  background-color: #fff;
  min-width: 1226px;
}
</style>
