import { Component } from "react";
import './css/bootstrap.css';
import cn from 'classnames';

class App19 extends Component{
    state={

    };


    render(){

        const btnStyle='btn btn-primary';
        return (
            <div>
                <h1>classnames 모듈사용</h1>
                <button className="btn btn-primary">버튼</button>
                <button className={btnStyle}>버튼</button>
                <button className={cn('btn btn-primary')}>버튼</button>
            </div>
        );
    }
}

export default App19;