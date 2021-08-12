const mem={num:1, name:"김구라", addr:"노량진"};

function printInfo(num, name, addr) {
    console.log("번호:"+num);
    console.log("이름:"+name);
    console.log("주소:"+addr);
}

// 에러발생 (함수 호출할때는 펼쳐서 전달할 수 없다)
// printInfo(...mem);

// 새로운 오브젝트를 만들때 기존 오브젝트를 확장해서 만들 때 사용 가능하다
const mem2={...mem, isMan:true};
console.log(mem2);