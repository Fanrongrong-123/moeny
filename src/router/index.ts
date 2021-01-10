import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router';
import Money from '@/views/Money.vue';
import Labels from '@/views/Labels.vue';
import Statistics from '@/views/Statistics.vue';
import NotFount from '@/views/NotFount.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/Money'
  },
  {
    path: '/Money',
    component: Money
  },
  {
    path: '/Labels',
    component: Labels
  },
  {
    path: '/Statistics',
    component: Statistics
  },
  {
    path: '/:pathMatch(.*)*', //新写法直接用'*'报错
    component: NotFount
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});


export default router;
