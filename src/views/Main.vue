<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
    </div>
</template>

<script>
import HomeHeader from '../components/Header/Header'
import HomeSwiper from '../components/Swiper/Swiper'
import HomeIcons from '../components/Icons/Icons'

export default {
    name: 'Main',
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIcons
    }
}
</script>

<style lang="stylus" scoped>
    
</style>
