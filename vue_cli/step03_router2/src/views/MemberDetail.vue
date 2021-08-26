<template>
    <div>
        <h2>{{$route.query.num}} 회원 자세히 보기 페이지 입니다.</h2>
        <p>
            번호 : <strong>{{member.num}}</strong>
            이름 : <strong>{{member.name}}</strong>
            주소 : <strong>{{member.addr}}</strong>
        </p>
    </div>
</template>

<script>

//DB 에 있는 회원 목록이라고 가정하자
let members=[
  {num:1, name:"김구라", addr:"노량진"},
  {num:2, name:"해골", addr:"행신동"},
  {num:3, name:"원숭이", addr:"상도동"}
];

export default {
    name:'MemberDetail',
    data(){
        return {
            members,
            member:members[this.$route.query.num-1] //간단히 번호에서 1을 빼서 인덱스로 사용
        };
    },
    //어떤 값이 바뀌는지 감시 하다가 바뀌면 호출되는 함수 등록 
    watch:{
        '$route.query.num':function(current){
            //함수의 첫번째 인자로 변경된 값이 전달된다. 
           this.member = members[current-1]; //간단히 번호에서 1을 빼서 인덱스로 사용
        }
    }
}
</script>