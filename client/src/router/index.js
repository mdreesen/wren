import Vue from 'vue'
import Router from 'vue-router'

// Importing pages
import Landing from '@/pages/Landing'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    }
  ]
})
