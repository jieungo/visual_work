import {Component} from 'react';

class MsgList extends Component{

    render(){
        //부모 component 에서 전달된 props  (li 에 출력할 데이터만 있는 배열)
        // [{id:1, msg:'xxx'},{id:2, msg:'xxx'},...]
        const msgList=this.props.msgList;
        //ul 에 추가할 jsx 배열을 만든다. 
        /*
        const jsxList=[];
        for(let i=0; i<msgList.length; i++){
            let tmp=msgList[i];
            jsxList.push(<li key={tmp.id}>{tmp.msg}</li>);
        }
        */

        // .map() 이란 함수는 map()안에 전달한 함수가 리턴하는 아이템으로 새롭게 구성한 배열의 참조값을 리턴해준다
        const jsxList2=msgList.map(function(item){
            return <li key={item.id}>{item.msg}</li> ;
        });

        const jsxList3=msgList.map((item)=>{
            return <li key={item.id}>{item.msg}</li> ;
        });

        const jsxList4=msgList.map(item => <li key={item.id}>
            {item.msg}
            <button onClick={()=> {
                this.props.deleteClicked(item.id);
            }}>X</button>
            </li> );
        
        return (
            <ul>
               {jsxList4}
            </ul>
        );
    }

}

export default MsgList;