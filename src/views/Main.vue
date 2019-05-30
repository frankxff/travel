<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
        <home-recommend></home-recommend>
        <home-weekday></home-weekday>
    </div>
</template>

<script>
import HomeHeader from '../components/Header/Header'
import HomeSwiper from '../components/Swiper/Swiper'
import HomeIcons from '../components/Icons/Icons'
import HomeRecommend from '../components/Recommend/Recommend'
import HomeWeekday from '../components/Weekday/Weekday'

export default {
    name: 'Main',
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekday
    }
}
</script>

<style lang="stylus" scoped>
    
</style>
