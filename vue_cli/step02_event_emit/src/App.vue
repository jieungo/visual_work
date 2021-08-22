<template>
  <div>
    <h1>event emit 예제 in vue_cli</h1>
    <friend-component 
      :list="members" 
      @delete="deleteMember"></friend-component>
  </div>
</template>

<script>
import FriendComponent from './components/FriendComponent.vue'


export default {
  components: { FriendComponent },
  name: 'App',
  data(){
       return {
          members:['김구라','해골','원숭이']
       };
  },
  methods:{
      deleteMember(index){
          this.members.splice(index, 1);
      }
  }
}
</script>

<style>

</style>