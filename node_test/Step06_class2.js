class MemberDto{
    //생성자
    constructor(num, name, addr) {
        this._num=num;
        this._name=name;
        this._addr=addr;
    }
}

let mem1 = new MemberDto();
console.log(mem1._num);