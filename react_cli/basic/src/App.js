
import './App.css';
//로딩할 css 파일을 import 만 해도 css 가 자동 적용된다.
import './css/bootstrap.css';
//이미지를 출력하려면 역시 import 한다.
import kim from './images/kim1.png';

function App() {
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
    /* 여기는 jsx 영역 입니다. jsx 에서 javascript 영역을 만들려면 {} 를 사용합니다.*/
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

//함수를 리턴하는 함수 기반 컴포넌트
export default App;