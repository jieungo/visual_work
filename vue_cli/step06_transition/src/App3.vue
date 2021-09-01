<template>
  <div id="app">
      <h1>Vue transition 테스트3</h1>
      <input type="checkbox" v-model="isMake">
      <transition name="gura">
        <div v-if="isMake" class="box"></div>
      </transition> 
  </div>
</template>

<script>

export default {
  name: 'App3',
  data(){
    return {
      isMake:false
    };
  },
  methods:{
   
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
  .gura-enter{
      transform: scale(0.0) rotate(0deg);

  }
  .gura-enter-to{
      transform: scale(3.0) rotate(360deg);
  }
  .gura-enter-active{
      transition: all 5s;
  }

  .gura-leave{
      transform: rotate(0deg);
      opacity: 1;
  }
  .gura-leave-to{
      transform: rotate(720deg);
      opacity: 0;
  }
  .gura-leave-active{
      transition: all 2s
  }

</style>