import { createRouter, createWebHistory } from 'vue-router'
import NBAPlayerPage from '@/views/nbaplayerpage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: NBAPlayerPage,
    },
    {
      path: '/team',
      name: 'Your Team',
      component: () => import('@/views/nbateam.vue'),
    },
  ],
})

export { router }
