/*
    배열의 다양한 함수 활용
    .map()
    .find()
    .filter()
    .concat()
    .reduce()
    등등..
*/
const nums = [1,2,3,4,5,6,7,8,9,10];

nums.map((item, index)=>{
    console.log(item+"|"+index);
});

// map()함수는 map함수안에 전달된 함수에서 리턴하는 아이템을 이용해서 새로운 배열 구성해서 리턴해줌
const result = nums.map((item)=>{
    return item**2; //거듭제곱
});

console.log(result);

const names=["김구라", "해골", "원숭이"];
const result2 = names.map((item)=>item+"님");
console.log(result2);