<template>
    <div>
        <router-link to="/">
            <div
             class="header-abs"
             v-show="showAbs"
            >
                <div class="iconfont abs-back-icon">&#xe624;</div>
            </div>
        </router-link>
        <div
         class="header-fixed"
          v-show="!showAbs"
          :style="opacityStyle"
        >
            <router-link to="/">
                <div class="iconfont header-fixed-back">&#xe624;</div>
            </router-link>
            景点详情
        </div>
    </div>

</template>

<script>
export default {
    name: 'DetailHeader',
    data () {
        return {
            showAbs: true,
            opacityStyle: 0
        }
    },
    methods: {
        handleScroll () {
            const top = document.documentElement.scrollTop
            if (top > 60) {
                let opacity = top / 140
                opacity = (opacity > 1) ? 1: opacity
                this.opacityStyle = { opacity }
                this.showAbs = false
            } else {
                this.showAbs = true
            }
        }
    },
    activated () {
        window.addEventListener('scroll', this.handleScroll)
    },
    //全局事件解绑
    deactivated () {
        window.removeEventListener('scroll', this.handleScroll)
    }
}
</script>

<style lang="stylus" scoped>
    @import '../../../assets/styles/varibles.styl'
    .header-abs
        position absolute
        left .2rem
        top .2rem
        width .8rem
        height .8rem
        line-height .8rem
        text-align center
        border-radius .4rem
        background rgba(0,0,0,.8)
        .abs-back-icon
            font-size .4rem
            color #fff
    .header-fixed
        z-index 9
        position fixed
        top 0
        left 0
        right 0
        overflow hidden
        height $headerHeight
        line-height $headerHeight
        text-align center
        color #ffffff
        background $bgColor
        font-size .32rem
        .header-fixed-back
            position absolute
            top 0
            left 0
            width .64rem
            font-size .4rem
            text-align center
            color white
</style>
