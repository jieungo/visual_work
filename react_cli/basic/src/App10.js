import { Component } from "react";
//로딩할 css 파일을 import 만 해도 css 가 자동 적용된다.
import './css/bootstrap.css';
import MyComponent from './components/MyComponent';
import FortuneComponent from "./components/FortuneComponent";

class App10 extends Component{
    //컴포넌트에서 사용하는 데이터(model)을 react 에서는 state 로 관리를 한다. 
    state={
        fortune:'동쪽으로 가면 귀인을 만나요'
    };
    //render() 함수에서 jsx 를 리턴해주면 해당 jsx 로 화면 구성을 한다.
    render(){
        
        return (
            <div className="container">
                <h1>Component 테스트</h1>
                <MyComponent/>
                <FortuneComponent fortuneToday={'동쪽으로 가면 귀인을 만나요'}/>
                <FortuneComponent fortuneToday={this.state.fortune}/>
                <button onClick={()=>{
                    this.setState({
                        fortune:'다음주면 수료를 하게 될거에요!'
                    });
                }}>운세 바꾸기</button>
                <FortuneComponent fortuneToday={this.state.fortune}
                    likeClicked={()=>{
                        alert("좋아요?");
                    }}/>
                <FortuneComponent fortuneToday={this.state.fortune}
                    likeClicked={this.likeClicked}/>
                <FortuneComponent fortuneToday={this.state.fortune}
                    likeClicked={this.likeClicked}
                    send={(data)=>{
                        alert(data);
                    }}/>         
            </div>
        );
    }
    //자식 컴포넌트에게 전달할 함수 미리 만들어 놓기 
    likeClicked = ()=>{
        alert("좋아요?2");
    }
}
//class 를 리턴해주는 class 기반 Component 
export default App10;