
function showInfo(mem){
    console.log(mem1.num+"|"+mem1.name);
}

class Member{
    // num에 대한 setter 메소드
    set num(num){
        this._num=num;
    }
    // num에 대한 getter 메소드
    get num(){
        return this._num;
    }

    set name(name) {
        if(name == undefined || name == null) {
            name="아무게";
        }
        this._name=name;
    }
    // name 에 대한 getter 메소드
    get name() {
        return this._name+"님";
    }

    //setter getter는 조작 할 여지를 준다는 것.
}

let mem1 = new Member();
mem1.num=1;
mem1.name=null;

showInfo(mem1);
