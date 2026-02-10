import { createRouter, createWebHistory } from 'vue-router'
import PlayerPages from '@/pages/PlayerPages.vue'
import TeamPage from '@/pages/TeamPage.vue'

const router = [
  {
    path: '/players',
    name: 'players',
    component: PlayerPages,
  },
  {
    path: '/teams',
    name: 'teams',
    component: TeamPage,
  },
]

export default router
