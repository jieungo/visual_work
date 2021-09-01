<template>
  <div id="app">
      <h1>Vue transition 테스트3</h1>
      <input type="checkbox" v-model="isMake">
      <transition enter-active-class="gura"
                  leave-active-class="monkey">
        <div v-if="isMake" class="box"></div>
      </transition> 
  </div>
</template>


<script>

export default {
  name: 'App6',
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
    widows: 100px;
    height: 100px;
    border: 3px solid green;;
  }

  .gura {
    animation: bounceInDown 5s;
  }

  .monkey {
    animation: fadeOut 1s;
  }


</style>