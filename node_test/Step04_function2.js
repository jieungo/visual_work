// lamda 함수 (한줄짜리 함수)
let sum=(a,b)=>a+b;
console.log("10+20="+sum(10,20));

// 일반함수
let getArea = function(width, height) {
    let result=width*height;
    return result;
}

// arrow 함수
let getArea2 = (width, height) => {
    let result = width*height;
    return result;
}

// arrow 함수 중 람다 함수 (return 예약어 생략)
let getArea3 = (window, height) => width*height;

// ex
let names=["김구라", "해골", "원숭이"];
// 배열의 map() 함수 호출하면서 arrow 함수 전달하기
// a에는 아이템, b에는 인덱스넘버 호출됨
names.map((item, index, arr) => {
    console.log(item+"|"+index+"|"+arr);
    console.log(arr);
});