/*
    ..spread (펼침) 연산자
*/

const nums=[10, 20, 30];

function test(a,b,c) {
    console.log(a+"|"+b+"|"+c);
}

test(nums[0], nums[1], nums[2]);
// nums 배열안에 있는 내용을 펼쳐서 전달할 수 있다
test(...nums);

//기존 배열의 값을 새로운 배열에 병합시킬때 활용할 수 있다.
const nums2=[...nums, 40, 50];
console.log(nums2);