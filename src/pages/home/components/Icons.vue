<!-- The ref attr used to find the swiper instance -->
<template>
  <div class="icons-wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="(page, idx) in pages" :key="idx">
        <div class="icon-box"
             v-for="item in page"
             :key="item.id">
          <div class="icon-img-box">
            <img class="icon-img" :src="item.imgUrl"  />
          </div>
          <p class="icon-desc">{{ item.description }}</p>
        </div>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data: function() {
    return {
      swiperOption: {
        autoplay: false,
        pagination: '.swiper-pagination',
      },
      "iconsList": [{
        "id": "0001",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
        "description": "景点门票"
      }, {
        "id": "0002",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png",
        "description": "水上乐园"
      }, {
        "id": "0003",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
        "description": "成都必游"
      }, {
        "id": "0004",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png",
        "description": "夏日玩水"
      }, {
        "id": "0005",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png",
        "description": "亲子游"
      }, {
        "id": "0006",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png",
        "description": "海洋馆"
      }, {
        "id": "0007",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
        "description": "一日游"
      }, {
        "id": "0008",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png",
        "description": "游乐场"
      }, {
        "id": "0009",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1804/95/8d02011d149bdb02.png",
        "description": "直通车"
      }, {
        "id": "0010",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png",
        "description": "全部玩乐"
      }]
    }
  },
  computed: {
    pages: function() {
      var pages = [];
      this.iconsList.forEach(function(item, idx) {
        var page = Math.floor(idx / 8);
        if(!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item)
      })

      return pages;
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl';
@import '~styles/mixins.styl';
.icons-wrapper {
  width: 100%;
  height: 0;
  padding-bottom: 50%;
  overflow: hidden;
  margin: .2rem 0;
}

.icons-wrapper .icon-box {
  position: relative;
  float: left;
  width: 25%;
  height: 0;
  padding-bottom: 25%;
}

.icons-wrapper .icon-box .icon-img-box {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: .44rem;
}

.icons-wrapper .icon-box .icon-img-box .icon-img {
  display: block;
  height: 100%;
  margin: 0 auto;
}

.icons-wrapper .icon-box .icon-desc {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: .44rem;
  line-height: .44rem;
  text-align: center;
  color: $darkTxtColor;
  ellipsis();
}
</style>
