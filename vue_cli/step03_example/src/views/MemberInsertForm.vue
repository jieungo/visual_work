<template>
    <div>
        <h2>회원 추가 폼 입니다</h2>
        <form @submit.prevent="onSubmit" 
            action="http://localhost:8888/spring03/api/member/insert.do" 
            method="post"
            ref="insertForm">
            이름<input type="text" name="name" >
            주소<input type="text" name="addr">
            <button type="submit">추가</button>
        </form>
    </div>
</template>

<script>
import {ajaxFormPromise} from '../assets/js/gura_util'
import router from '../router'

export default {
    name:'MemberInsertForm',
    methods:{
        onSubmit(){
            // .prevent 수식어를 사용했기 때문에 기본 이벤트가 막아진다. (폼전송이 막아진다)
            const form=this.$refs.insertForm;
            //ajaxFormPromise(ajax전송할 폼의 참조값)
            ajaxFormPromise(form)
            .then(function(response){
                return response.json();
            })
            .then(function(data){
                console.log(data);
                alert("추가했습니다");
                router.push({name:'Home'});
            });

        }
    }
}
</script>