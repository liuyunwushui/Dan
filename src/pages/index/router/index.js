import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Reg from '@/components/reg'
import Home from '@/pages/index/home'
import TaskHall from '@/pages/index/task-hall'

Vue.use(Router)

import axios from 'axios'
Vue.prototype.$axios = axios

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/reg',
      name: 'Reg',
      component: Reg
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/task',
      name: 'taskHall',
      component: TaskHall
    },
  ]
})
