<template>
  <div id="app">
        <h1>Vue transition 테스트14</h1>
        <div>
            <router-link to="/">Home</router-link> |
            <router-link to="/game">Game</router-link> |
            <router-link to="/study">Study</router-link>
        </div>
        <transition enter-active-class="animate__animated animate__fadeIn"
                    leave-to-class="animate__animated animate__fadeOut"
                    mode="out-in"
                    v-on:before-enter="beforeEnter"
                    v-on:enter="enter"
                    v-on:after-enter="afterEnter"
                    @before-leave="beforeLeave"
                    @leave="leave"
                    @after-leave="afterLeave">
            <router-view/>
        </transition>
  </div>
</template>

<script>

export default {
  name: 'App14',

  data(){
    return {
       
    };
  },
  methods:{
      beforeEnter(el){
          console.log(el);
          console.log("beforeEnter");
      },
      enter(){
          console.log("enter");
      },
      afterEnter(){
          console.log("afterEnter");
      },
      beforeLeave(){
          console.log("beforeLeave");
      },
      leave(){
          console.log("leave");
      },
      afterLeave(){
          console.log("afterLeave");
      }
  }
}
</script>
<style scoped>
    /* 외부 css 로딩하기 */
    @import url(https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css);
</style>
<style>

</style>