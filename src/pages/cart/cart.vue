<template>
  <div>
    <cartHeader />
    <mainPage />
    <MiFooter />
  </div>
</template>

<script>
import cartHeader from './cartHeader'
import mainPage from './mainPage/mainPage'
import MiFooter from '@/components/common/MiFooter/MiFooter'

export default {
  components: {
    cartHeader,
    mainPage,
    MiFooter
  }
}
</script>

<style>

</style>