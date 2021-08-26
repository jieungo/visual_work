<template>
    <div>
        <h2>자세히 보기 페이지</h2>
        <p>{{$route.query.num}}번 상품의 정보 입니다.</p>
    </div>
</template>

<script>
export default {
    name:"Detail",
    create(){
        console.log(this.$route.query.num+"번 상품의 정보를 얻어오기");
    },
    beforeUpdate(){
        console.log(this.$route.query.num+"번 상품의 정보를 얻어오기");
    }
}
</script>
