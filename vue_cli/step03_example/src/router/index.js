import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MemberDetail from '../views/MemberDetail.vue'
import MemberInsertForm from '../views/MemberInsertForm.vue'
import MemberUpdateForm from '../views/MemberUpdateForm.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/member/detail',
    name: 'MemberDetail',
    component : MemberDetail 
  },
  {
    path: '/member/insertform',
    name: 'MemberInsertForm',
    component:MemberInsertForm
  },
  {
    path: '/member/updateform',
    name: 'MemberUpdateForm',
    component:MemberUpdateForm
  }
]

const router = new VueRouter({
  routes
})

export default router