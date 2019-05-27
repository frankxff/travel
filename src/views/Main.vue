<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>

    </div>
</template>

<script>
import HomeHeader from '../components/Header/Header'
import HomeSwiper from '../components/Swiper/Swiper'

export default {
    name: 'Main',
    components: {
        HomeHeader,
        HomeSwiper
    }
}
</script>

<style lang="stylus" scoped>
    
</style>
