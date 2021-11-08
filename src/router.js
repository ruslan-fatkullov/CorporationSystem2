import Vue from 'vue'
import Router from 'vue-router'
import Register from './components/Registration.vue'
import Profile from './components/Profile.vue'
import Autorization from './components/Autorization.vue'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/',
      name: '',
      component: Autorization
    },
    // {
    //   path: '/secure',
    //   name: 'secure',
    //   component: Secure,
    //   meta: { 
    //     requiresAuth: true
    //   }
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: About
    // }
  ]
})

export default router