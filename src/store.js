import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: '武汉'
  },
  mutations: {
    changeCityTo (state, city) {
      state.city = city
    }
  },
  actions: {
    changeCity (ctx, city) {
      ctx.commit('changeCityTo', city)
    }
  }
})
