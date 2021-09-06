import { Component } from "react";
//로딩할 css 파일을 import 만 해도 css 가 자동 적용된다.
import './css/bootstrap.css';

class App7 extends Component{
    //컴포넌트에서 사용하는 데이터(model)을 react에서는 state로 관리한다.
    state={

    };

    //render() 함수에서 jsx 를 리턴해주면 해당 jsx 로 화면 구성을 한다.
    render(){
        // 여러개의 목록을 출력할땐 아이디 역할을 할 수 있는 키값을 넣어줌 (일단 임시로 넣음)
        let jsxList=[(<li key={0}>김구라</li>),(<li key={1}>해골</li>),(<li key={2}>원숭이</li>)] //()괄호 빼도 가능
        //jsx 안에 넣을 내용을 가지고 있는 배열
        let names=['김구라', '해골', '원숭이']
        let jsxList2=[];
        for(let i=0; i<names.length; i++) {
            //jsx 객체를 만들어서
            let tmp = (<li key={i}>{names[i]}</li>);
            //배열에 누적 시키기
            jsxList2.push(tmp);
        }
        // 배열의 .map()함수를 이용해서 새로운 배열을 얻어낸다
        let jsxList3 = names.map((item, index)=> {
            return (<li key={index}>{item}</li>);
        })

        let jsxList4 = names.map((item, index) => (<li key={index}>{item}</li>));

        return (
            <div className="container">
                <h1>친구목록</h1>
                <ul>
                    {jsxList}
                </ul>
                <h1>친구목록 2</h1>
                <ul>
                    {jsxList2}
                </ul>
                <h1>친구목록 3</h1>
                <ul>
                    {jsxList3}
                </ul>
                <h1>친구목록 4</h1>
                <ul>
                    {jsxList4}
                </ul>
                <h1>친구목록 5</h1>
                <ul>
                    {names.map((item, index) => (<li key={index}>{item}</li>))}
                </ul>
            </div>
        );
    }
}

//class 를 리턴해주는 class 기반 Component 
export default App7;