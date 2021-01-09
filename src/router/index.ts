import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Money from '@/views/Money.vue';
import Labels from '@/views/Lables.vue';
import Statistics from '@/views/Statistics.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path:'/',
    redirect:'/Money'
  },
  {
    path:'/Money',
    component:Money
  },
  {
    path:'/Labels',
    component:Labels
  },
  {
    path:'/Statistics',
    component:Statistics
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
