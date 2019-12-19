<template>
  <div class="page-main home-main">
    <div class="container">
      <flashsale />
      <commonSection v-for="(item, index) in allData" :key="index" :allData='item' />
      <videoBox />
    </div>
  </div>
</template>

<script>
import commonSection from "../commonSection/commonSection";
import videoBox from "./videoBox";
import flashsale from "./flashsale/flashsale";

export default {
  name: "mianPage",
  data() {
    return {
      allData: []
    };
  },
  created() {
    this.$http('/mainPage').then(res => {
      // console.log(res)
      this.allData = res.data.list.list
    })
  },
  components: {
    commonSection,
    flashsale,
    videoBox
  }
};
</script>

<style>
.home-main {
  padding-top: 4px;
  padding-bottom: 12px
}
</style>