import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('./views/Home.vue')
    },{
      path: '/city',
      name: 'city',
      component: () => import('./views/City.vue')
    },{
      path: '/detail/:id',
      name: 'Detail',
      component: () => import('./views/Detail.vue')
    }],
    // eslint-disable-next-line no-unused-vars
    scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
})
