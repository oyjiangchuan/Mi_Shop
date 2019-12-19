<template>
  <div>
    <div class="header">
      <siteTopbar />
      <siteHeader />
    </div>
  </div>
</template>

<script>
import siteTopbar from "./siteTopbar";
import siteHeader from "./siteHeader";
export default {
  name: "MiHeader",
  components: {
    siteTopbar,
    siteHeader
  }
};
</script>

<style>
</style>