//  number type num 이라는 변수를 만들고 숫자 대입하기 (명시적 타입)
let num:number = 10;

// num 이라는 변수를 만들고 숫자를대입하여 number type으로 만들기 (묵시적 타입)
let num2 = 20;

let myName:string ="김구라";
let yourName = "해골";

//number type 에 string type 대입불가
//num1 = "kim";

let a : any = 10;

a = "kim";
a = true;

type Point={
    x:number;
    y:number;
} // 컴파일하면 사라짐

function useObj(arg:Point){

}

useObj({
    x: 10,
    y: 20,
});

console.log(myName);