import Vue from 'vue';
import Router from 'vue-router';
import goods from '@/components/goods/goods.vue';
import ratings from '@/components/ratings/ratings.vue';
import saller from '@/components/saller/saller.vue';

Vue.use(Router);

const routes = [
  {
    path: '/goods',
    name: 'goods',
    component: goods
  },
  {
    path: '/ratings',
    name: 'ratings',
    component: ratings
  },
  {
    path: '/saller',
    name: 'saller',
    component: saller
  }
];

const router = new Router({
  routes
});
export default router;
