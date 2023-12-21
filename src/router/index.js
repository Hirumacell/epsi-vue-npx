import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { Chart } from 'chart.js'
import BarChart from '@/views/BarChart.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/destination/:pays',
      name: 'destination',

      component: () => import('../views/DestinationView.vue')
    },
    {
      path: '/stats',
      name: 'stats',
      component: BarChart
    },
    {
      path: '/classement/clubs',
      name: 'classment-clubs',
      component: () => import('../views/MainView.vue')
    }
  ]
})

export default router
