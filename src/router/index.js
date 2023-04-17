import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomePage.vue'
import GameView from '../views/GamePage.vue'
import SettingsView from '../views/SettingsPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/game',
    name: 'game',
    component: GameView
  },
  {
    path: '/settings',
    name: 'settings',
    component: SettingsView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
