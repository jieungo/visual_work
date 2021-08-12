/*
    array 나 object 안에 저장된 내용을 destruct(분해, 해체)해서 받을 수 있다.
*/

let nums = [10, 20, 30];

let[a, b, c] = nums;

console.log(a+"|"+b+"|"+c);

let mem={num:1, name:"김구라", addr:"노량진"};

let {name, addr} = mem;

console.log(name+"|"+addr);