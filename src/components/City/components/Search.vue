<template>
<div>
    <div class="search">
        <input class="searchBtn" 
               type="text" 
               placeholder="输入城市名或拼音"
               v-model="keyword" 
        >
    </div>
    <div class="search-content" 
         ref="search"
         v-show="keyword"
    >
        <ul>
            <li class="search-item border-bottom"
                v-for="item of list"
                :key="item.id"
                @click="handleCityClick(item.name)"
            >
                {{item.name}}
            </li>
            <li class="search-item border-bottom"
                v-show="hasNoData"
            >
                没有找到匹配数据
            </li>
        </ul>
    </div>
</div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
    name: 'CitySearch',
    props: {
        cities: Object
    },
    methods: {
        handleCityClick (city) {
            this.$store.dispatch('changeCity', city)
            this.$router.push('/')
        }
    },
    data () {
        return {
            keyword: '',
            list: [],
            timer: null
        }
    },
    computed: {
        hasNoData () {
            return !this.list.lenght
        }
    },
    watch: {
        keyword() {
            if (this.timer) {
                clearTimeout(this.timer)
            }
            if (!this.keyword) {
                this.list = []
            }
            this.timer = setTimeout(() => {
                const result = []
                for (let i in this.cities) {
                    this.cities[i].forEach((value) => {
                        if (value.spell.indexOf(this.keyword) > -1 || 
                            value.name.indexOf(this.keyword) > -1) {
                                result.push(value)
                            }
                    })
                }
                this.list = result
            },100)
        }
    },
    mounted () {
        this.scroll = new Bscroll(this.$refs.search)
    }
}
</script>

<style lang="stylus" scoped>
    @import '~@/assets/styles/varibles.styl'
   .search
       height .72rem
       background $bgColor
       padding 0 .1rem
       .searchBtn
           line-height .62rem
           height .62rem
           width 100%
           text-align center
           border-radius .06rem
           color #666
           box-sizing border-box
           padding 0 .1rem
    .search-content
        z-index 1
        overflow hidden
        position: absolute
        top: 1.5rem
        left 0
        right 0
        bottom 0
        background #eee
        .search-item
            line-height .62rem
            padding-left .2rem
            color #666
            background #fff
</style>
