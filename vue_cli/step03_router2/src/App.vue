<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/detail?num=1">1번 자세히 보기</router-link> |
      <router-link to="/detail?num=2">2번 자세히 보기</router-link> |
      <router-link to="/detail2/1">1번 자세히 보기</router-link> |
      <router-link to="/detail2/2">2번 자세히 보기</router-link> |
      <!--
        router/index.js 에 routes 의 router name 을 이용해서 링크를 바인딩 한다.
      -->
      <router-link v-bind:to="{name:'Detail', query:{num:myNum}}">{{myNum}}번 자세히 보기</router-link> |
      <router-link v-bind:to="{name:'Detail2', params:{num:myNum}}">{{myNum}} 자세히 보기</router-link>
    </div>
    <h1>회원 목록 입니다.</h1>
    <ul>
        <li v-for="tmp in members" v-bind:key="tmp.num">
          <router-link :to="{name:'MemberDetail', query:{num:tmp.num}}">{{tmp.name}}</router-link>
        </li>
    </ul>
    <router-view/>
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
  name:'App',
  data(){
    return {
      myNum:999,
      members
    };
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>