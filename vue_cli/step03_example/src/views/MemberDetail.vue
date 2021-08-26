<template>
    <div>
        <h2>회원 자세히 보기 페이지</h2>
        <p>
            번호 : <strong>{{member.num}}</strong>
            이름 : <strong>{{member.name}}</strong>
            주소 : <strong>{{member.addr}}</strong>
        </p>
        <router-link to="/">목록보기</router-link>
        <br>
        <!-- :to="{path:'/'}" 를 줄여서 to="/"로 작성할수 있다 -->
        <router-link v-bind:to="{name:'Home'}">목록보기</router-link>
        <br>
        <router-link v-bind:to="{path:'/'}">목록보기</router-link>
        <br>
        <button @click="goList">목록보기</button>
        <br>
        <button @click="goBack">뒤로가기</button>
    </div>
</template>

<script>
import {ajaxPromise} from '../assets/js/gura_util';
import router from '../router'

export default {
    name:'MemberDetail',
    created(){
        let self=this;
        //query 문자열로 넘어오는 자세히 보여줄 회원의 번호 얻어오기  
        const num = this.$route.query.num;
        //ajax 요청을 이용해서 자세히 보여줄 회원의 정보를 얻어온다.
        ajaxPromise("http://localhost:8888/spring03/api/member/detail.do","GET","num="+num)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            self.member=data;
        });
    },
    data(){
        return {
            member:{}
        };
    },
    methods:{
        goList(){
            //javascript 로 특정 경로로 이동하게 하기 위해서는 router 객체가 필요하다.
            router.push({name:'Home'});
        },
        goBack(){
            //history 에서 한칸 뒤로 가기 
            router.go(-1);
        }
    }
}
</script>