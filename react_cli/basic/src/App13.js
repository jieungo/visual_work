import { Component } from 'react';

//bootstrap.module.css import
import bs from './css/bootstrap.module.css';

//전역에서 사용할 css import
import './css/bootstrap.css';
//지역(App12)에서만 사용할 css import
import styles from './custom_css/App12.module.css';

class App13 extends Component {
    render() {
        //bs는  오브젝트 타입이다
        console.log(bs);
        // bs. 방의이름 해서 참조되는 것은 모두 문자열이다
        console.log(bs.container);

        // 모두 같은 것
        const btn1 = bs.btn + '' + bs['btn-primary'];
        const btn2 = `${bs.btn} ${bs['btn-primary']}`;
        const btn3 = [bs.btn, bs['btn-primary']].join(); 

        return (
            <div className={bs.container}>
                <h1>React css 적용 예제</h1>
                <button className="btn btn-primary">버튼</button>
                <br/>
                <button className={bs.btn + '' + bs['btn-primary']}>버튼</button>
                <button className={btn1}>버튼</button>
                <button className={btn2}>버튼</button>
                <button className={btn3}>버튼</button>
            </div>
        );
    }
}

export default App13;