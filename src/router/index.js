import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import { apply } from 'file-loader';



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    }
  ]
})
