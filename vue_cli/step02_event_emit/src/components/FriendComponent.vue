<template>
    <ul>
        <li v-for="(item, index) in list" v-bind:key="index">
            {{item}} 
            <button v-on:click="deleteItem(index)">삭제</button>
        </li>
    </ul>  
</template>
<script>
export default {
    name:'FriendComponent',
    props:["list"],
    methods:{
        deleteItem(i){
            this.$emit("delete", i);
        }
    }
}
</script>