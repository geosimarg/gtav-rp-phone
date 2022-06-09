import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import PhoneView from '@/views/phone/PhoneView.vue';
import LookView from '@/views/look/LookView.vue';
import AboutView from '@/views/about/AboutView.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: PhoneView
  },
  {
    path: '/look',
    name: 'look',
    component: LookView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
