<template>
  <div class="page-main">
    <div class="container">
      <fullCart v-if="loginStatus"/>
      <emptyCart v-else/>
      <cartRecommend />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import emptyCart from './emptyCart'
import fullCart from './fullCart'
import cartRecommend from './cartRecommend'
export default {
  name: 'mainPage',
  components: {
    emptyCart,
    fullCart,
    cartRecommend
  },
  computed: {
    ...mapGetters('user', ['loginStatus'])
  },
  // methods: mapActions('cart', ['changLoginStatus'])
}
</script>

<style>
.page-main {
    padding-top: 38px;
    padding-bottom: 38px;
    background: #f5f5f5;
}
</style>