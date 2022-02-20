<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="dd"></div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner.vue'
import DetailHeader from './components/Header.vue'
export default {
name:'Detail',
components:{
    DetailBanner,
    DetailHeader
}
}
</script>

<style lang="stylus" scoped>
.dd
 height: 40rem
</style>