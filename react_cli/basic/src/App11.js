import { Component } from "react";
//로딩할 css 파일을 import 만 해도 css 가 자동 적용된다.
import './css/bootstrap.css';
import MsgList from './components/MsgList';

class App11 extends Component{
    //컴포넌트에서 사용하는 데이터(model)을 react 에서는 state 로 관리를 한다. 
    state={
       msgs:[] // {id:xxx , msg: xxx}
    };
    id=0;

    //render() 함수에서 jsx 를 리턴해주면 해당 jsx 로 화면 구성을 한다.
    render(){
        
        return (
            <div className="container">
                <h1>목록 출력 예제</h1>
                <input ref={(ref)=>{ this.inputText = ref; }}
                    onKeyUp={this.handleKeyUp}/>
                <button onClick={this.handleClick}>전송</button>
                <MsgList msgList={this.state.msgs}
                    deleteClicked={(id)=>{
                        //1. this.state.msgs 배열을 사용해서 id 에 해당하는 아이템을 삭제한 새로운 배열을 얻어낸다.
                        const newList=this.state.msgs.filter(item => item.id !== id);

                        //위의 filter() 함수가 하는 로직을 표현하면 아래와 같다 
                        //새로운 빈 배열의 참조값을 얻어낸다.
                        const newList2=[];
                        //반복문 돌면서 
                        for(let i=0; i<this.state.msgs.length; i++){
                            //msgs 배열의 아이템을 차례로 불러와서 
                            let tmp=this.state.msgs[i];
                            //만일 삭제할 아이템이 아니면
                            if(tmp.id !== id){
                                //새로운 배열에 아이템을 추가한다. 
                                newList2.push(tmp);
                            }
                        }


                        //2. this.setState() 를 이용해서 새로운 배열의 참조값을 msgs 에 넣어주어서
                        // UI 가 업데이트 되도록 한다.
                        this.setState({
                            msgs:newList
                        });
                    }}/>

                <hr/>

                <MsgList msgList={this.state.msgs}
                    deleteClicked={this.deleteClicked}/>
            </div>
        );
    }

    deleteClicked = (id)=>{
        //1. this.state.msgs 배열을 사용해서 id 에 해당하는 아이템을 삭제한 새로운 배열을 얻어낸다.
        const newList=this.state.msgs.filter(item => item.id !== id);
        //2. this.setState() 를 이용해서 새로운 배열의 참조값을 msgs 에 넣어주어서
        // UI 가 업데이트 되도록 한다.
        this.setState({
            msgs:newList
        });
    }

    handleKeyUp = (e)=>{
        //전달된 이벤트 객체를 이용해서 눌러진 키의 코드값 얻어내기
        let code=e.keyCode;
        if(code == 13){
            this.handleClick();
        }
    }

    handleClick = ()=>{
        //1. input 요소에 입력한 문자열을 읽어와서
        let msg=this.inputText.value;
        //2. id 값을 1 증가 시키고
        this.id++;
        //3. 배열에 저장할 object 를 구성한다.
        let obj = {
            id:this.id,
            msg
        };
        //4. 새로 구성된 object 를 배열에 추가한 새로운 배열을 얻어낸다.
        let newMsgs=this.state.msgs.concat(obj);
        //5. state 를 수정한다.
        this.setState({
            msgs:newMsgs
        });

        //입력창 지우기
        this.inputText.value="";
        //입력창에 포커스 주기
        this.inputText.focus();
    }
}
//class 를 리턴해주는 class 기반 Component 
export default App11;