
// 함수에 전달된 인자의 default 값을 지정할수 있다
function showInfo(num=0, name="누구게", addr="어디게") {
    console.log(num+"|"+name+"|"+addr);
}

showInfo();
showInfo(1);
showInfo(1, "김구라");
showInfo(1, "김구라", "노량진");
showInfo(null, null, null);
showInfo(undefined, undefined, undefined);
//전달하지않거나 언디파인드일때 기본값 지정이 가능하다

//showInfo(name="원숭이",..) 이렇게는 사용하지 않는다

// 함수에 편한 파라미터 (Rest Parameter) 를 선언할 수 있다
function test(...args) {
    //args 는 배열이다.
    console.log(args);
}

test();
test(10);
test(10,20);
test(10,20,30);