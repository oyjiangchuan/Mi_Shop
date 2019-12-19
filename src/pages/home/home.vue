<template>
  <div>
    <MiHeader />
    <Navigaition />
    <mainPage />
    <ToolBar />
    <MiFooter />
  </div>
</template>

<script>
import MiHeader from "@/components/common/MiHeader/MiHeader";
import MiFooter from "@/components/common/MiFooter/MiFooter";
import Navigaition from "./navigation/navigation";
import mainPage from "./mainPage/mainPage";
import ToolBar from "./toolBar";
export default {
  beforeCreate() {
    this.$store.dispatch("products/getAllProducts"); // 把页面的数据传递给vuex中
  },
  components: {
    MiHeader,
    Navigaition,
    MiFooter,
    ToolBar,
    mainPage
  }
};
</script>

<style>
</style>