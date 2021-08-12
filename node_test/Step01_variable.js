/*
    변수를 선언하는 방법은 두가지가 있다.

    1. 함수 scope 로 만드는 방법
    2. brace scope 로 만드는 방법
*/

// var 이라는 예약어를 이용해서 변수 만들기
var myName="김구라";
// let 이라는 예약어를 이용해서 변수 만들기
let yourName="원숭이";

console.log("myName:"+myName);
console.log("yourName:"+yourName);

if(true){
    var ourName="acorn";
    //let 으로 변수를 만들면 {} 안에서만 사용할수 있다.
    let ourName2="acorn2"; 
}

console.log("ourName:"+ourName);
// ourName2 는 사용 불가 
//console.log("ourName2:"+ourName2);

function test(){
    var num1=10;
    let num2=20;
}

//함수 안에 선언한 내용을 함수 바깥에서 참조 할수 없다. 
//console.log(num1);
//console.log(num2);

for(var i=0; i<5; i++){
    console.log(i);
}

console.log("for 문 실행후 i:"+i);

for(let j=0; j<5; j++){
    console.log(j);
}

//j 는 참조 불가
//console.log("for 문 실행후 j:"+j);
