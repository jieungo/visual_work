//상속

class Phone{
    constructor(owner) {
        this._owner=owner;
    }
    call() {
        console.log("전화를 걸어요!");
    }
}

class HandPhone extends Phone {
    constructor(owner) {
        super(owner);
    }
    mobileCall() {
        console.log("이동중에 전화를 걸어요");
    }
    printOwner() {
        console.log("소유자:"+this._owner);
    }
}

let p1 = new HandPhone("김구라");
p1.call();
p1.mobileCall();
p1.printOwner();