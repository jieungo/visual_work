<template>
  <div class="home">
    <img src="../assets/images/kim1.png" alt="">
    <img src="@/assets/images/kim1.png" alt="">
    <br>
      <router-link to="/member/insertform">회원 추가</router-link>
      <h1>회원 목록입니다.</h1>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>이름</th>
            <th>주소</th>
            <th>수정</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="tmp in members" v-bind:key="tmp.num">
            <td>{{tmp.num}}</td>
            <td>
              <router-link v-bind:to="{name:'MemberDetail', query:{num:tmp.num}}">{{tmp.name}}</router-link>
            </td>
            <td>{{tmp.addr}}</td>
            <td>
              <router-link :to="{name:'MemberUpdateForm', query:{num:tmp.num}}">수정</router-link>
            </td>
            <td>
              <a @click="deleteMember(tmp.num)" href="javascript:">삭제</a>
            </td>
          </tr>
        </tbody>
      </table>
  </div>
</template>


<script>

import { ajaxPromise } from '../assets/js/gura_util'

export default {
  name: 'Home',
  created(){
    this.updateList();
  },
  data(){
    return {
      members:[]
    };
  },
  methods:{
    updateList(){
      let self=this;
      //회원 목록을 받아와서 members 에 넣어주기
      ajaxPromise("http://localhost:8888/spring03/api/member/list.do")
      .then(function(response){
        return response.json();
      })
      .then(function(data){
        console.log(data);
        self.members=data;
      });
    },
    deleteMember(num){
      let isDelete=confirm(num+'번 회원을 삭제 하시겠습니까?');
      let self=this;
      if(isDelete){
        console.log("삭제 합니다.");
        ajaxPromise("http://localhost:8888/spring03/api/member/delete.do","POST","num="+num)
        .then(function(response){
          return response.json();
        })
        .then(function(data){
          console.log(data);
          //목록을 다시 받아와서 화면을 업데이트 한다.
          self.updateList();
        });
      }
    }
  }
}
</script>