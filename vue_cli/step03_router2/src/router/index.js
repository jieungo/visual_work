import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Detail from '../views/Detail.vue';
import Detail2 from '../views/Detail2.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/detail',
    name:'Detail',
    component: Detail
  },
  {
    path:'/detail2/:num',
    name:'Detail2',
    component:Detail2
  },
  {
    path:'/member/detail',
    name:'MemberDetail',
    component: () => import( /* webpackChunkName: "member" */ '../views/MemberDetail.vue')
  }
]

const router = new VueRouter({
  //mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router