<template>
  <div id="app">
      <h1>Vue transition 테스트3</h1>
      <input type="checkbox" v-model="isMake">
      <transition name="gura">
        <span v-if="isMake" class="box box1">오늘</span>
      </transition> 
  </div>
</template>


<script>

export default {
  name: 'App5',
  data(){
    return {
      isMake:false
    };
  },
  methods:{
   
  }
}
</script>
<style scoped>
  /* 외부  css 로딩하기 */
  @import url(https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css);
</style>
<style>

  .box{
    font-size: 40px;
    font-weight: 700;
  }

  .gura-enter-active {
    animation: slideindown 1s ease-out;
  }

  .gura-leave-active {
    animation: bounceOutRight 0.5s ease-out;
  }


</style>