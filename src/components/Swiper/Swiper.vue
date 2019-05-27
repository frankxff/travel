<template>
    <div class="wrapper">
        <swiper :options="swiperOption" >
        <!-- slides -->
        <swiper-slide><img class="swiper-img" src="./img/qianggou.jpg" alt="一元抢购"></swiper-slide>
        <swiper-slide><img class="swiper-img" src="./img/mulantianchi.jpg" alt="木兰天池活动"></swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeSwiper',
    data () {
      return {
        swiperOption: {
            autoplay:true,
            pagination: {
                el: '.swiper-pagination'
            },
            loop: true
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
    .wrapper >>>.swiper-pagination-bullet-active
        background #ffffff
    .wrapper
        overflow hidden
        width 100%
        height 0
        padding-bottom 27%
        background #eee
        .swiper-img
            width: 100%
</style>

