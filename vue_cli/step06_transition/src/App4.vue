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
  name: 'App4',
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

  .gura-enter-active {
    animation: myAni 1s ease-out;
  }

  @keyframes myAni {
    0% {
      transform: translateY(-500px);
    }
    80% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(0px);
    }
  }

    .gura-leave-active {
      animation: yourAni 1s ease-out;
    }

    @keyframes yourAni {
      0% {
        transform: translateY(0px);
      }

      50% {
        transform: translateY(20px);
      }

      100% {
        opacity: 1.0;
        transform: translateY(-500px);
      }
    }

</style>