const nums = [1,2,3,4,5,6,7,8,9,10];

const result = nums.filter((item)=>{
    return true;
});


const result2 = nums.filter((item)=>{
    return false;
});


const result3 = nums.filter((item)=>{
    return item%2==0;
});

console.log(result);
console.log(result2);
console.log(result3);

const members=[
    {num:1, name:"김구라", isMan:true},
    {num:2, name:"해골", isMan:false},
    {num:3, name:"원숭이", isMan:true}
];

//위의 members 배열을 이용해서 남자의 정보만 담고 있는 새로운 배열을 만들어보세요

const result4 = members.filter((item)=> {
    return item.isMan==true;
});

const result5 = members.filter((item)=> {
    return item.isMan; //굳이 비교 안해도 안에 이미 true, false가 들어있음!
});

const result6 = members.filter((item)=> item.isMan);

const result7 = members.filter( item => item.isMan); //람다함수

console.log(result4);
console.log(result5);
console.log(result6);
console.log(result7);


//filter() 함수를 사용하지 않는 일반적인 자바스크립트 로직은 다음과 같다
let result8=[];
for (let i=0; i<members.length; i++) {
    let tmp=members[i];
    if(tmp.isMan){
        result8.push(tmp);
    }
}

let result9 = members.map((item)=> {
    item.name = item.name+"님";
    return item;
}).filter(item=>item.isMan);

console.log(result9);

/*
위의 nums 배열에서 각각의 아이템 숫자를 제곱하고
제곱한 결과 중에서 50 이상인 숫자로 구성된 새로운 배열을 얻어내보세요
*/

let result10 = nums.map((item)=> item**2).filter(item=>item>=50);

console.log(result10);

