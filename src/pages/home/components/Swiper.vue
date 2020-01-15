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
      swiperList: [{
        "id": "0001",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1808/5e/514ce60160e62602.jpg_750x200_9b0074e2.jpg"
      },{
        "id": "0002",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1808/66/55bc874f100c2d02.jpg_750x200_ac7c05d2.jpg"
      },{
        "id": "0003",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1807/c8/2948642fbc3b6802.jpg_750x200_1fc3179f.jpg"
      },{
        "id": "0004",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1808/4a/32f0550116232602.jpg_750x200_43525f4e.jpg"
      }]
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
  height: 100%;
}
</style>
