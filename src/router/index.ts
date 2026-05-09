import { createRouter, createMemoryHistory } from 'vue-router'
import HomeView from '@/views/home-view.vue';
import Notfound from '@/views/not-found.vue'
const routes = [
   { path: '/', name: 'Home', component: HomeView },
   {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: Notfound,
   },
]

const router = createRouter({
   history: createMemoryHistory(),
   routes,
   scrollBehavior(to) {
      if (to.hash) {
         return {
            el: to.hash,
            behavior: 'smooth'
         }
      }
   }
});



export default router;