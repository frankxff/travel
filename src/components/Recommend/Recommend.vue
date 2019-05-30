<template>
    <div>
    <div class="recommend-title">热销推荐</div>
        <ul>
            <li class="item" border-bottom v-for="item of recommendList" :key="item.id">
                <img class="item-img" :src="item.imgUrl" >
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomeRecommend',
    data () {
        return {
            recommendList: [{
                id: '0001',
                imgUrl: require('./img/haiyangguan.jpg'),
                title: '武汉海昌极地海洋公园',
                desc: '冰雪世界，美不胜收'
            },{
                id: '0002',
                imgUrl: require('./img/jingligou.jpg'),
                title: '锦里沟',
                desc: '枫叶红于二月花，锦鲤来袭'
            },{
                id: '0003',
                imgUrl: require('./img/mulantianchi.jpg'),
                title: '木兰天池',
                desc: '天池风光，风景如画'
            }]
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '../../assets/styles/mixins.styl'
    .recommend-title
        line-height .4rem
        background #eee
        text-indent .15rem
        margin-top .2rem
    .item
        overflow hidden
        display flex
        height 1.9rem
        .item-img
            width 1.7rem
            height 1.7rem
            padding .1rem
        .item-info
            flex 1
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
            .item-button
                line-height .44rem
                margin-top .16rem
                background #ff9300
                padding 0 .1rem
                border-radius .06rem
                color #fff
</style>
