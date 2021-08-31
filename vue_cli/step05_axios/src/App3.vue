<template>
  <div id="app">
    <h1>axios 테스트</h1>
    <input type="text" id="이름 입력..." v-model="member.name">
    <input type="text" id="주소 입력..." v-model="member.addr">
    <button @click="send">전송</button>
    <p>{{member}}</p>
  </div>
</template>

<script>
//axios import
import axios from 'axios'
//query string import
import qs from 'qs'

//요청 base url 설정
axios.defaults.baseURL="http://localhost:8888/spring03"

export default {
    name: 'App3',
    data(){
        return {
            member:{}
        };
        },
    methods:{
    test(){
        let obj={
            name:"김구라",
            addr:"노량진"
        }
        // 오브젝트에 저장 된 정보를 인코딩까지 해서 쿼리 문자열로 바꾸기
        let result = qs.stringify(obj);
        console.log(result);
    },
    send(){
        axios({
            url:"/api/member/insert.do",
            method:"POST",
            headers:{
                "Content-Type":'application/x-www-form-urlencoded'
            },
            data: qs.stringify(this.member)
        })
        .then(res=>{
            console.log(res.data);
        });
    }
    }
}

</script>

<style>

</style>
