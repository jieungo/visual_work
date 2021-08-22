<template>
  <div class="container">
    <img alt="Vue logo" src="./assets/logo.png">
    <br>
    <button v-on:click="clicked" class="btn btn-primary">눌러보셈</button>
    <br>
    <p>{{msg}}</p>
    <input type="text" v-model="msg">
    <hello-world :msg="'자식 컴포넌트야 안뇽'"></hello-world>
    <my-world :greet=" '오늘의 인사' "></my-world>
    <h1>root component의 요소입니당</h1>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import MyWorld from './components/MyWorld.vue';

export default {
  components: { HelloWorld, MyWorld },
  name: 'App',
  data(){
    //data() 함수에서 리턴하는 오브젝트가 model 목록이 된다.
    return {
      msg:"안녕하세요!",
      greet:"우왕!"
    };
  },
  methods:{
    clicked(){
      alert("버튼을 눌렀습니다");
    }
  }
}
</script>

<style>

</style>
