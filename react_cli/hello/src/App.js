import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import kim1 from './images/kim1.png';

// class 기반으로 App 구성하기
class App extends Component{

  state={
    fortuneToday:"동쪽으로 가면 귀인을 만나요"
  };

  //사용자 정의 함수 (마음대로 추가하는 함수)
  clicked(){
    alert("버튼을 눌렀네요?");
  }
  
  //App.js 를 이용해서 화면 구성을 할때 호출되는 메소드
  render(){

    let myName = '김구라';

    // render 함수에서는 JSX를 리턴해준다.
    return (
      <div className="container">
        <h1>Hello React!</h1>
        <p>내 이름은 : {myName}</p>
        <button onClick={()=>{
          alert('버튼을 눌렀네요?');
        }}>눌러보셈</button>
        <br/>
        <button onClick={this.clicked}>눌러보셈2</button>
        <p>오늘의 운세 : {this.state.fortuneToday}</p>
        <img src={kim1} alt="김구라 이미지"/>
      </div>
    );
  }
}

export default App;
