import { Component } from "react";
//로딩할 css 파일을 import 만 해도 css 가 자동 적용된다.
import './css/bootstrap.css';

class App3 extends Component{
    //컴포넌트에서 사용하는 데이터(model)을 react에서는 state로 관리한다.
    state={
        myName:"김구라"
    };

    //render() 함수에서 jsx 를 리턴해주면 해당 jsx 로 화면 구성을 한다.
    render(){

        return (
            <div className="container">
                <p>내 이름은 : {this.state.myName}</p>
                <button onClick={()=>{
                    //state 값을 직접 수정하면 안된다.
                    //this.state.myName = "원숭이";

                    /* state 값을 수정하기 위해서는 component로 부터 상속받은
                    메소드 setState() 를 이용해서 수정해야 한다.
                    */

                    this.setState({
                        myName:"원숭이"
                    });
                }}>이름 바꾸기</button>
            </div>
        );
    }
}

//class 를 리턴해주는 class 기반 Component 
export default App3;