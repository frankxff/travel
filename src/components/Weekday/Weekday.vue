<template>
    <div>
    <div class="weekday-title">周末去哪儿</div>
        <ul>
            <li border-bottom v-for="item of weekdayList" :key="item.id">
                <div item-img-swiper>
                    <img class="item-img" :src="item.imgUrl" >
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeWeekday',
    data () {
        return {
            weekdayList: [{
                id: '0001',
                imgUrl: require('./img/huanghelou.jpg'),
                title: '武汉出游必打卡',
                desc: '到武汉感受神奇的热干面之都'
            },{
                id: '0002',
                imgUrl: require('./img/sanxiarenjia.jpg'),
                title: '三峡人家',
                desc: '感受三峡的水三峡的情怀，自古至今，无数骚人留下千古绝唱'
            },{
                id: '0003',
                imgUrl: require('./img/zhoumoyou.jpg'),
                title: '开启亲子时光',
                desc: '远离都市喧嚣，带孩子去一个幽静、清新的天空'
            }]
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '../../assets/styles/mixins.styl'
    .weekday-title
        line-height .8rem
        background #eee
        text-indent .2rem
        margin-top .2rem
    .item-img-swiper
        overflow hidden
        height 0
        padding-bottom 33.9%
    .item-img
        width 100%
    .item-info
        padding .1rem
        min-width 0
        .item-title
            line-height .54rem
            font-size .32rem
            ellipsis()
        .item-desc
            line-height .4rem
            color #ccc
            ellipsis()
</style>
