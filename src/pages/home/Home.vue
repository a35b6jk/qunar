<template>
  <div>
    <home-header></home-header>
    <home-swiper :swiper-list="swiperList"></home-swiper>
    <home-icons :icons-list="iconsList"></home-icons>
    <home-recommend :recommend-list="recommendList"></home-recommend>
    <home-weekend :weekend-list="weekendList"></home-weekend>
  </div>

</template>
<script>
  import HomeHeader from './components/Header.vue';
  import HomeSwiper from './components/Swiper.vue';
  import HomeIcons from './components/Icons';
  import HomeRecommend from './components/Recommend';
  import HomeWeekend from './components/Weekend';
  import axios from 'axios';
  export default {
    name: 'Home',
    components: {
      'HomeHeader': HomeHeader,
      'HomeSwiper': HomeSwiper,
      'home-icons': HomeIcons,
      'home-recommend': HomeRecommend,
      'home-weekend': HomeWeekend
    },
    data: function() {
      return {
        lastCity: '',
        swiperList: [],
        iconsList: [],
        recommendList: [],
        weekendList: []
      }
    },
    methods: {
      getHomeInfo: function() {
        axios.get('/api/index.json')
          .then(this.getHomeInfoSuccess)
      },
      getHomeInfoSuccess: function(res) {
        if (res.data.ret && res.data.data) {
          var data = res.data.data;
          this.swiperList = data.swiperList;
          this.iconsList = data.iconsList;
          this.recommendList = data.recommendList;
          this.weekendList = data.weekendList;
          console.log(this.iconsList);
        }
      }
    },
    mounted: function() {
      this.lastCity = this.curCity;
      this.getHomeInfo();
    },
  }
</script>
<style scoped>

</style>
