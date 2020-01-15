<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
  </div>

</template>
<script>
  import HomeHeader from './components/Header.vue';
  import HomeSwiper from './components/Swiper.vue';
  import HomeIcons from './components/Icons';
  import axios from 'axios'
  export default {
    name: 'Home',
    components: {
      'HomeHeader': HomeHeader,
      'HomeSwiper': HomeSwiper,
      'home-icons': HomeIcons,
    },


  }
</script>
<style scoped>

</style>
