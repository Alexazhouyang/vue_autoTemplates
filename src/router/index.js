import Vue from 'vue'
import Router from 'vue-router'
import User from '@/components/User'
import Product from '@/components/Product'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/User',
      name: 'User',
      component: User
    },
    {
      path: '/Product',
      name: 'Product',
      component: Product
    }
  ]
})
