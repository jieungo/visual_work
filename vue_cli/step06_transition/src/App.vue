<template>
  <div id="app">
      <h1>Vue transition 테스트</h1>
      <button @click="remove">제거</button>
      <transition name="gura">
        <div v-if="isMake" class="box"></div>
      </transition> 
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      isMake:true
    };
  },
  methods:{
    remove(){
      this.isMake=false;
    }
  }
}
</script>

<style>
  .box{
    width: 100px;
    height: 100px;
    border: 1px solid red;
    background-color: yellow;
  }

  /* 등장하기(만들어지기 or 보여지기) 직전에 추가되는 클래스 */
  .gura-enter{
    background-color: pink;
  }

  .gura-enter-to{
    background-color: red;
    transform: translateX(100px);
  }

  /* 등장하는(만들어지기 or 보여지기) 동안에 추가되는 클래스  */
  .gura-enter-active{
    transition: all 5s;
  }
  
</style>