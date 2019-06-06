<template>
    <div>
        <detail-banner
         :sightName="sightName"
         :bannerImg="bannerImg"
         :gallaryImgs="gallaryImgs"
        ></detail-banner>
        <detail-header></detail-header>
        <detail-list :list="list"></detail-list>
        <div class="content"></div>
    </div>

</template>

<script>
import DetailBanner from '../../src/components/Detail/components/Banner'
import DetailHeader from '../../src/components/Detail/components/Header'
import DetailList from '../../src/components/Detail/components/List'
import axios from 'axios'
export default {
    name: 'Detail',
    components: {
        DetailBanner,
        DetailHeader,
        DetailList
    },
    data () {
        return {
            sightName: '',
            bannerImg: '',
            gallaryImgs: [],
            list: []
        }
    },
    methods: {
        getDetailInfo () {
            axios.get('/mock/detail.json?id=' + this.$route.params.id)
                .then(this.handleGetDataSucc)
        },
        handleGetDataSucc (res) {
            res = res.data
            if (res.ret && res.data) {
                const data = res.data
                this.sightName = data.sightName
                this.bannerImg = data.bannerImg
                this.gallaryImgs = data.gallaryImgs
                this.list = data.categoryList
            }
        }
    },
    mounted () {
        this.getDetailInfo()
    }
}
</script>

<style lang="stylus" scoped>
    .content
        height 50rem
</style>
