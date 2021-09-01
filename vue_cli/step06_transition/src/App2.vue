<template>
  <div id="app">
      <h1>Vue transition 테스트2</h1>
      <button @click="remove">제거</button>
      <transition name="gura">
        <div v-if="isMake" class="box"></div>
      </transition> 
  </div>
</template>

<script>

export default {
  name: 'App2',
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

  .gura-leave{
      transform: scale(1.5);
  }

  .gura-leave-to{
      transform: scale(0.0);
  }

  .gura-leave-active{
      transition: transform 1s;
  }
  
</style>