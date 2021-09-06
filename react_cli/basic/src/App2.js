import { Component } from "react";
//로딩할 css 파일을 import 만 해도 css 가 자동 적용된다.
import './css/bootstrap.css';
//이미지를 출력하려면 역시 import 한다.
import kim from './images/kim1.png';

class App2 extends Component{

    //render() 함수에서 jsx 를 리턴해주면 해당 jsx 로 화면 구성을 한다.
    render(){
        //함수안에 상수 or 변수 만들기
        const myName="김구라";
        //적용할 inline css 를 object 로 작성을 한다. 
        const myStyle={
            color:"red",
            width:"100px",
            height:"100px",
            border:"1px solid red",
            backgroundColor:"yellow"
        };

        return (
            <div className="container">
                <h1>Hello React!</h1>
                <img src={kim} alt="김구라 이미지"/>
                <p>내이름은 : <strong>{myName}</strong></p>
                <button className="btn btn-primary" onClick={()=>{
                    alert("버튼을 눌렀네요?");
                }}>눌러보셈</button>
                <div style={{
                    color:"red",
                    width:"100px",
                    height:"100px",
                    border:"1px solid red",
                    backgroundColor:"yellow"
                }}>div1</div>

                <div style={myStyle}>div2</div>
            </div>
        );
    }
}

//class 를 리턴해주는 class 기반 Component 
export default App2;