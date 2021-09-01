<template>
  <div id="app">
    <h1>Vue transition test12</h1>
    <input type="text" v-model="inputMsg">
    <button @click="add">추가</button>
    <button @click="remove">삭제</button>
    <button @click="shuffle">섞기</button>
    <transition-group tag="ul" enter-active-class="animate__animated animate__slideInLeft"
                              leave-active-class="animate__animated animate__slideOutRight">
      <li v-for="(tmp, index) in msgs" :key="index">{{tmp}}</li>
    </transition-group>

  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'App12',
  data(){
    return{
      msgs:["하나", "둘"],
      inputMsg:""
    };
  },
  methods:{
    add(){
      // 입력한 문자열을 배열에 추가한다.
      this.msgs.push(this.inputMsg);
    },
    remove(){
      // 제일 마지막 index의 item 삭제
      this.msgs.splice(this.msgs.length-1);
    },
    shuffle(){
      this.msgs=_.shuffle(this.msgs);
    }
  },
  created(){
    console.log(_)
  }
}
</script>
<style scoped>
  @import url(https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css);
</style>
<style>
  .box{
    width: 100px;
    height: 100px;
    border: 1px solid red;
    background-color: yellow;
  }



</style>