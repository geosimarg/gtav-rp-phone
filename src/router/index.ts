import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import PhoneView from '@/views/phone/PhoneView.vue';
import LookView from '@/views/look/LookView.vue';
import AboutView from '@/views/about/AboutView.vue';
import Screen0View from '@/views/screen0/Screen0View.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'screen0',
    component: Screen0View,
    meta: { whiteIcons: true, hideClock: true }
  }, {
    path: '/home',
    name: 'home',
    component: PhoneView,
    meta: { whiteIcons: true }
  }, {
    path: '/look',
    name: 'look-screen',
    component: LookView,
    meta: { whiteIcons: true }
  }, {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: { whiteIcons: false }
  }, {
    path: '/apps/calculator',
    name: 'apps-calculator',
    component: () => import('@/apps/calculator/app/AppCalculator.vue'),
    meta: { whiteIcons: true }
  }, {
    path: '/apps/clock',
    name: 'apps-clock',
    component: () => import('@/apps/clock/app/AppClock.vue'),
    meta: { whiteIcons: true }
  }, {
    path: '/apps/caller',
    name: 'apps-caller',
    component: () => import('@/apps/caller/app/AppCaller.vue'),
    meta: { whiteIcons: false }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
