<template>
  <div class="home-banner-box">
    <a href="javascript:;">
      <img alt="test" width="1226" height="120" v-lazy="src" />
    </a>
  </div>
</template>

<script>
export default {
  name: "banner-box",
  props: {
    src: {
      type: String,
      default: null
    }
  }
};
</script>

<style>
.home-banner-box {
  height: 120px;
  margin: 22px 0;
  overflow: hidden;
}
</style>