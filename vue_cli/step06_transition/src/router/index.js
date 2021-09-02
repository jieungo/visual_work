import Vue from 'vue'
import VueRouter  from 'vue-router'
import Home from '../views/Home'
import Game from '../views/Game'
import Study from '../views/Study'

//Vue 에서 라우터를 사용 가능하게 설정
Vue.use(VueRouter)

//라우팅 목록
const routes=[
  {path:'/', name:'Home', component: Home},
  {path:'/game', name:'Game', component: Game},
  {path:'/study', name:'Study', component: Study}
];

const router=new VueRouter({
  base: process.env.BASE_URL,
  routes
});

export default router;