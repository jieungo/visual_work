<template>
  <div class="my">
    <h1>{{ greet }}</h1>
  </div>
</template>

<script>
export default {
    //디버깅의 편의를 위해 이름을 지정하는데 보통 파일의 이름과 같게 짓는다.
  name: 'MyWorld',
  //props: ["greet"] -> greet라는 이름의 String type props를 전달 받는다. 이렇게 작성하면 어느타입이든 받을 수 있다
  props:{
      greet:String //String 타입만 받겠다
  }
}

</script>


<style scoped>
    h1 {
        color: green;
    }
</style>

