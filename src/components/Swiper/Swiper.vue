<template>
    <div class="wrapper">
        <swiper :options="swiperOption" >
        <!-- slides -->
        <swiper-slide v-for="item of iconList" :key="item.id">
            <img  class="swiper-img" :src="item.imgUrl" >
        </swiper-slide>

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
        },
        iconList: [{
            id: '0001',
            imgUrl: require('./img/qianggou.jpg')
        },{
            id: '0002',
            imgUrl: require('./img/mulantianchi.jpg')
        }]
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

