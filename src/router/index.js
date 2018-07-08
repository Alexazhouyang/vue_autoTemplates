import Vue from 'vue'
import Router from 'vue-router'
import User from '@/components/User'
import Product from '@/components/Product'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Home from '@/view/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
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
