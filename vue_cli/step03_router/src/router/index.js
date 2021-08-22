import Vue from "vue";
// vue 공식 라우터를 import
import VueRouter from "vue-router";
import Home from "../views/Home";
import Game from "../views/Game";
import Study from "../views/Study";

// vue 에서 라우터를 사용 가능하게 설정
Vue.use(VueRouter);

// 라우팅 목록
const routes=[
    {path: '/', name:'Home', component: Home},
    {path: '/game', name:'Game', component: Game},
    {path: '/study', name:'Study', component: Study}
];

// 라우팅을 해줄 수 있는 라우터 객체를 생성해서
const router=new VueRouter({
    mode:'history',
    base: process.env.BASE_URL,
    routes
});

// 기본으로 라우터 객체를 리턴해 준다.
export default router;

