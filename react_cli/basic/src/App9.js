import { Component } from "react";
//로딩할 css 파일을 import 만 해도 css 가 자동 적용된다.
import './css/bootstrap.css';

class App9 extends Component{
    //컴포넌트에서 사용하는 데이터(model)을 react 에서는 state 로 관리를 한다. 
    state={
        key:0,
        msgs:[]  //li 로 구성된 jsx 목록
    };
    //render() 함수에서 jsx 를 리턴해주면 해당 jsx 로 화면 구성을 한다.
    render(){
        
        return (
            <div className="container">
                <h1>목록 출력 예제</h1>
                <input ref={(ref)=>{ this.inputText = ref; }}
                    onKeyUp={this.handleKeyUp}/>
                <button onClick={this.handleClick}>전송</button>
                <ul>
                    {this.state.msgs}
                </ul>
            </div>
        );
    }

    handleKeyUp = (e) => {
        //전달된 이벤트 객체를 이용해서 눌러진 키의 코드값 얻어내기
        let code=e.keyCode;
        if(code == 13) {
            this.handleClick();
        }
    }

    handleClick = ()=>{
        //1. input 요소에 입력한 문자열을 읽어와서
        let msg=this.inputText.value;
        //2. 입력한 문자열을 li 안에 포함한 jsx 를 만들어서 msgs 에 추가 되도록 한다.
        // 관리되는 키값을 1 증가시키고
        this.setState({key:this.state.key+1});
        // li요소의 key 값도 전달하기
        let tmp = (<li key={this.state.key}>{msg}</li>);
        //3. 배열에 추가
        //this.state.msgs.push(tmp);

        //기존 배열의 아이템을 펼치고 새로운 아이템을 추가해서 새로운 배열의 참조값 얻어내기
        //let arr=[...this.state.msgs, tmp];
        //기존 배열에 새로운 아이템을 추가한 새로운 배열의 참조값 얻어내기 
        let arr=this.state.msgs.concat(tmp);
        this.setState({
            msgs:arr
        });
        //입력창 지우기
        this.inputText.value='';
        //입력창에 포커스 주기
        this.inputText.focus();
    }
}
//class 를 리턴해주는 class 기반 Component 
export default App9;