import { Component } from "react";

// bootstrap.module.css import
import bs from './css/bootstrap.module.css';
// classnames/bind import
import classnames from 'classnames/bind';
// import 한 bs 를 bind 한다. 
const cx = classnames.bind(bs);

class App16 extends Component{
    state={
        isLogin:false
    };

    getContent = ()=>{
        if(this.state.isLogin){
            return <p>xxx 로그인중...</p>;
        }else{
            return <p>로그인이 필요 합니다.</p>
        }
    }

    render(){
        return (
            <div className={bs.container}>
                <h1>조건부 렌더링</h1>
                <button onClick={()=>{
                    this.setState({isLogin:true});
                }}>로그인</button>
                {
                   this.state.isLogin ? <p>xxx 로그인중...</p> : <p>로그인이 필요합니다.</p>
                }
                <hr/>
                {this.getContent()}
                <hr/>
                {
                    this.state.isLogin && <p>xxx 로그인중...</p>
                }
                {
                    !this.state.isLogin && <p>로그인이 필요 합니다.</p>
                }
            </div>
        );
    }
}

export default App16;