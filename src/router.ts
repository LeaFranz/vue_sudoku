import { createRouter, createWebHistory } from 'vue-router'
import PlayScreen from './components/PlayScreen.vue'
import SplashScreen from './components/SplashScreen.vue'

const routes = [
  { path: '/', component: SplashScreen },
  { path: '/play', component: PlayScreen }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
