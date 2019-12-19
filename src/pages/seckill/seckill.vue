<template>
  <div>
    <div class="header">
      <siteTopbar />
      <siteHeader />
    </div>
    <MiFooter />
  </div>
</template>

<script>
import siteTopbar from "../../components/common/MiHeader/siteTopbar";
import siteHeader from "../../components/common/MiHeader/siteHeader";
import MiFooter from "../../components/common/MiFooter/MiFooter";
export default {
  name: "seckill",
  components: {
    siteTopbar,
    siteHeader,
    MiFooter
  },
  beforeCreate() {
    this.$store.dispatch("products/getAllProducts"); // 把页面的数据传递给vuex中
  }
};
</script>

<style>
</style>