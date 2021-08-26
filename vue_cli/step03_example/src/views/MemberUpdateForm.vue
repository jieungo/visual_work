<template>
    <div>
        <h2>회원 정보 수정 폼</h2>
        <form @submit.prevent="onSubmit"
            action="http://localhost:8888/spring03/api/member/update.do"
            method="post" 
            ref="updateForm">
            <input type="hidden" name="num" v-bind:value="member.num"> 
            <br>
            이름 <input type="text" name="name" v-bind:value="member.name" >
            <br>
            주소 <input type="text" name="addr" :value="member.addr">
            <br>
            <button type="submit">수정확인</button>
        </form>
    </div>
</template>

<script>
// import 경로에 @ 는 src 폴더를 가리킨다.
import {ajaxPromise, ajaxFormPromise} from '@/assets/js/gura_util'
import router from '@/router'

export default {
    name:'MemberUpdateForm',
    created(){
        //query 문자열로 넘어오는 자세히 보여줄 회원의 번호 얻어오기  
        const num = this.$route.query.num;
        //ajax 요청을 이용해서 자세히 보여줄 회원의 정보를 얻어온다.
        ajaxPromise("http://localhost:8888/spring03/api/member/detail.do","GET","num="+num)
        .then(response => response.json())
        .then((data)=>{
            console.log(data);
            this.member=data;
        });        
    },
    data(){
        return {
            member:{}
        };
    },
    methods:{
        onSubmit(){
            //수정폼의 참조값
            let form = this.$refs.updateForm;
            ajaxFormPromise(form)
            .then(response=>response.json())
            .then(data=>{
                console.log(data);
                alert("수정확인");
                //router.push({name:'MemberList'}); 목록으로 보내기
                router.push({name:'MemberDetail', query:{name: this.$route.query.num}}) //디테일로 보내
                //router.push하면 자바스크립트로 이동가능
            });
        }
    }
}
</script>