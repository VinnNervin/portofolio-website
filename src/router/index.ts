import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/home-view.vue';
import Notfound from '@/views/not-found.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: Notfound,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});



export default router;