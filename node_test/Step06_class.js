/*
    java처럼 클래스를 정의할 수 있다
*/

class Car{
    //생성자
    constructor(name){
        //생성자의 인자로 전달된 내용을 _name 이라는 필드에 저장
        this._name=name //필드를 미리 선언할 필요는 없다
        console.log("Car 생성자 호출됨");
    }

    //class 메소드
    drive() {
        console.log(this._name+"달려요!");
    }

    //static 메소드
    static showInfo() {
        console.log("Car 클래스의 static 메소드 입니다.");
    }
}

let c1 = new Car("소나타");
c1.drive();
let c2=new Car("아반떼 N");
c2.drive();

Car.showInfo();