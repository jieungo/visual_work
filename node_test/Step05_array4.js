const nums=[1,2,3,4,5,6,7,8,9,10];

//누적되는 함수
//acc는 누산된 값, curr는 현재값
let result = nums.reduce((acc,curr)=>{
    console.log(acc+"|"+curr);
    return acc+curr;
});

console.log(result);