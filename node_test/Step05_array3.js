const names = ['김구라', '해골', '원숭이', '주뎅이', '덩어리'];

// 0번째 인덱스부터 탐색하면서 가장 먼저 트루를 리턴한 인덱스의 아이템을 리턴
let result = names.find((item)=>{
    return item == '원숭이';
});

console.log(result);

let result2 = names.find(item=>item=='원숭이');

console.log(result);
console.log(result2);

//이걸 어디다 사용하느냐? {num:1, name:"김구라", addr:"노량진"} 등 회원정보가 있는 오브젝트가 여러 개 있을 때
//아이디 하나를 이용해서 나머지 이름, 주소 등 정보를 같이 가져올 수 있도록 함