<template>
  <div>
    <img src="@/assets/images/kim1.png" v-if="show"><br>
    <button v-on:click="clicked">숨기기</button> 

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return {
      show:false
    };
  },
  methods:{
    clicked(){
      this.show = ! this.show;
    }
  }
}
</script>
