import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/home/home')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('@/pages/cart/cart')
    },
    {
      path: '/seckill',
      name: 'seckill',
      component: () => import('@/pages/seckill/seckill')
    },
    {
      path: '/phone',
      name: 'phone',
      component: () => import('@/pages/phone/phone')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/pages/login/login')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/pages/register/register')
    },
    {
      path: '/portal',
      name: 'portal',
      meta: { requireAuth: true },
      component: () => import('@/pages/portal/portal'),
      children: [
        {
          path: '/portal/detail',
          name: 'detail',
          component: () => import('@/pages/portal/childSectionPages/detail')
        }
      ]
    }
  ]
})
