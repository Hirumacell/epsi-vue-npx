import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ClubClassement from '@/views/ClubClassement.vue'
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
      path: '/ClubClassement',
      name: 'ClubClassement',
      component: ClubClassement
    },
    {
      path: '/PaysClassement',
      name: 'PaysClassement',
    }
  ]
})

export default router
