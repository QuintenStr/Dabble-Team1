import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomePage.vue'
import GameView from '../views/GamePage.vue'
import RulesView from '../views/RulesPage.vue'
import SettingsView from '../views/SettingsPage.vue'
import CreatePage from '../views/CreatePage.vue'
import JoinPage from '../views/JoinPage.vue'


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
  },
  {
    path: '/rules',
    name: 'rules',
    component: RulesView
  },
  {
    path: '/create',
    name: 'create',
    component: CreatePage
  },
  {
    path: '/join',
    name: 'join',
    component: JoinPage
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
