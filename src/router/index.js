import Vue from 'vue'
import Router from 'vue-router'
import Vuefify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import Home from '@/components/Home'
import About from '@/components/About'
import Videos from '@/components/Videos'
import NotFound from '@/components/NotFound'

Vue.use(Vuefify, {
  theme: {
    primary: '#b71c1c',
    secondary: '#b0bec5',
    accent: '#8c9eff',
    error: '#b71c1c'
  }
})
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      component: NotFound
    }, {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/about',
      name: 'About',
      component: About
    }, {
      path: '/videos',
      name: 'Videos',
      component: Videos
    }
  ]
})
