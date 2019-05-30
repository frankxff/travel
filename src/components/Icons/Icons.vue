<template>
    <div class="icons">
        <swiper>
            <swiper-slide v-for="(page, index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id" >
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl" >
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
    name: "HomeIcons",
    data () {
        return {
            iconList: [{
                id: '0001',
                imgUrl: require('./img/jingdian.png'),
                desc: '景点门票'
            },{
                id: '0002',
                imgUrl: require('./img/yiriyou.png'),
                desc: '一日游'
            },{
                id: '0003',
                imgUrl: require('./img/wuhan.png'),
                desc: '武汉必游'
            },{
                id: '0004',
                imgUrl: require('./img/qingziyou.png'),
                desc: '亲子游'
            },{
                id: '0005',
                imgUrl: require('./img/mulantianchi.png'),
                desc: '木兰天池'
            },{
                id: '0006',
                imgUrl: require('./img/dongzhiwu.png'),
                desc: '动植物园'
            },{
                id: '0007',
                imgUrl: require('./img/taqing.png'),
                desc: '踏青赏花'
            },{
                id: '0008',
                imgUrl: require('./img/huanlegu.png'),
                desc: '欢乐谷'
            },{
                id: '0009',
                imgUrl: require('./img/jidihaiyang.png'),
                desc: '极地海洋世界大冒险'
            }]
        }
    },
    computed: {
        pages () {
            const pages = []
            this.iconList.forEach((item, index) => {
                const page = Math.floor(index / 8)
                if (!pages[page]) {
                    pages[page] = []
                }
                pages[page].push(item)
            })
            return pages
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '../../assets/styles/varibles.styl'
    @import '../../assets/styles/mixins.styl'
    .icons >>> .swiper-container
        height 0
        padding-bottom 50%
    .icon
        position relative
        overflow hidden
        float left 
        width 25%
        height 0
        padding-bottom 25%
        .icon-img
            position absolute
            top 0
            left 0
            right 0
            bottom .44rem
            box-sizing border-box
            padding 0.1rem
            .icon-img-content
                display block
                margin 0 auto
                height 100%
        .icon-desc
            position absolute
            left 0
            right 0
            bottom 0
            height .44rem
            line-height .44rem
            text-align center
            color $darkTextColor
            ellipsis()
                
</style>
