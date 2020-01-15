<!-- The ref attr used to find the swiper instance -->
<template>
  <div class="sw-wrapper">
    <swiper :options="swiperOption" >
      <!-- slides -->
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data: function() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList:[
        {
          id: '1',
          imgUrl: 'https://p0.meituan.net/200.0/travel/7b785c69730cad40f45fba28da977218632226.png'
        },
        {
          id: '2',
          imgUrl:'https://p0.meituan.net/200.0/tdctraveldark/9a2e3d404c5d03c8a20315b5b9ce34ae342363.jpg'
        }
      ]
    }
  },
  computed: {
    isSwiperShow: function() {
      return this.swiperList.length
    }
  }
}
</script>

<style lang="stylus" scoped>
.sw-wrapper >>> .swiper-pagination-bullet-active {
  background-color: #fff;
}

.sw-wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 26.67%;
  background-color: #eee;
}

.sw-wrapper .swiper-img {
  width: 100%;
  height: 100px;
}
</style>
