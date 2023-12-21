import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ClassementClub from '@/components/ClassementClub.vue'

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
      component: ClassementClub
    },
    {
      path: '/PaysClassement',
      name: 'PaysClassement',
    },
    {
      path: '/NuagePoint',
      name: 'NuagePoint',

    }
  ]
})

export default router
