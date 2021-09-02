<template>
  <div id="app">
        <h1>Vue transition 테스트13</h1>
        <div>
            <router-link to="/">Home</router-link> |
            <router-link to="/game">Game</router-link> |
            <router-link to="/study">Study</router-link>
        </div>
        <transition enter-active-class="animate__animated animate__fadeIn"
                    leave-active-class="animate__animated animate__fadeOut"
                    mode="out-in">
            <router-view/>
        </transition>
  </div>
</template>

<script>

export default {
  name: 'App13',

  data(){
    return {
       
    };
  },
  methods:{
  
  }
}
</script>
<style scoped>
    /* 외부 css 로딩하기 */
    @import url(https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css);
</style>
<style>
 
</style>