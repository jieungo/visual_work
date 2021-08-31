<template>
  <div id="app">
    <h1>axios 테스트</h1>
    <input type="text" id="이름 입력..." v-model="name">
    <input type="text" id="주소 입력..." v-model="addr">
    <button @click="send">전송</button>
    <br>
    <button @click="test">테스트</button>
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
    name: 'App2',
    data(){
        return {
            name: "",
            addr: ""
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
        // 폼에 입력한 내용을 오브젝트에 넣는다
        const mem={
            name:this.name,
            addr:this.addr
        };
        // 오브젝트의 내용을 쿼리 문자열로 변환한다
        const data = qs.stringify(mem);
        axios({
            url:"/api/member/insert.do",
            method:"POST",
            headers:{
                "Content-Type":'application/x-www-form-urlencoded'
            },
            data: data
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
