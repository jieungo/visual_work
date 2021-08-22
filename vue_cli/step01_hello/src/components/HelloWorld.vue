<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    //msg라는 이름의 String type props를 전달 받는다.
    msg: String
  }
}
</script>


<style scoped>

</style>
