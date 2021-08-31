<template>
  <div id="app">
    <h1>axios 테스트</h1>
    <button @click="getMembers">회원 목록 불러오기</button>
    <br>
    <button @click="getMember">회원 한명의 정보 불러오기</button>
    <br>
    <button @click="getMember2">회원 한명의 정보 불러오기2</button>
  </div>
</template>

<script>
//axios import
import axios from 'axios'
//요청 base url 설정
axios.defaults.baseURL="http://localhost:8888/spring03"

export default {
  name: 'App',
  methods:{
    getMember2(){
      axios({
        url:"/api/member/detail.do",
        method:"GET",
        //get 방식 파라미터는 params 라는 방에 오브젝트 전달하면 된다
        params:{num:1723}
      })
      .then(res=>{
        console.log(res);
      })
      .catch(err=>{
        console.log(err);
      });
    },
    getMember(){
      axios({
        url:"/api/member/detail.do?num=1723",
        method:"GET"
      })
      .then(res=>{
        console.log(res);
      })
      .catch(err=>{
        console.log(err);
      });
    },
    getMembers(){
      axios({
        url:"/api/member/list.do",
        method:"GET"
      })
      .then(res=>{
        //res 는 응답된 정보를 담고있는 오브젝트이다.
        console.log(res);
        //res.data에는 응답된 json 문자열이 object 혹은 array로 바껴서 들어있다.
        console.log(res.data);
      })
      .catch(err=>{
        console.log(err);
      });
    }
  }

}
</script>

<style>

</style>
