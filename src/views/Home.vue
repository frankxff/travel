<template>
    <div>
        <home-header :city="city"></home-header>
        <home-swiper :list="swiperList"></home-swiper>
        <home-icons :list="iconList"></home-icons>
        <home-recommend :list="recommendList"></home-recommend>
        <home-weekday :list="weekendList"></home-weekday>
    </div>
</template>

<script>
import HomeHeader from '../components/Header/Header'
import HomeSwiper from '../components/Swiper/Swiper'
import HomeIcons from '../components/Icons/Icons'
import HomeRecommend from '../components/Recommend/Recommend'
import HomeWeekday from '../components/Weekday/Weekday'
import axios from 'axios'

export default {
    name: 'Home',
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekday
    },
    data () {
        return {
            city: '',
            swiperList: [],
            iconList: [],
            recommendList: [],
            weekendList: []
        }
    },
    methods: {
        getHomeInfo () {
            axios.get('/mock/index.json')
                .then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc (res) {
            res = res.data
            if (res.ret && res.data) {
                this.city = res.city
                const data = res.data
                this.swiperList = data.swiperList
                this.iconList = data.iconList
                this.recommendList = data.recommendList
                this.weekendList = data.weekendList
            }
        }
    },
    mounted () {
        this.getHomeInfo()
    }
}
</script>

<style lang="stylus" scoped>
    
</style>
