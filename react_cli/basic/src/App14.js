import { Component } from 'react';

//전역에서 사용할 css import
import './css/bootstrap.css';

//bootstrap.module.css import
import bs from './css/bootstrap.module.css';
import classnames from 'classnames/bind';
// import한 bs를 bind한다
const cx = classnames.bind(bs);


class App14 extends Component {
    render() {
        //bs는  오브젝트 타입이다
        console.log(bs);
        // bs. 방의이름 해서 참조되는 것은 모두 문자열이다
        console.log(bs.container);

        // 모두 같은 것
        const btn1 = bs.btn + '' + bs['btn-primary'];
        const btn2 = `${bs.btn} ${bs['btn-primary']}`;
        const btn3 = [bs.btn, bs['btn-primary']].join(); 
        //cx 함수 테스트
        const btn4 = cx('btn', 'btn-primary');
        const btn5 = cx(['btn', 'btn-primary']);
        const btn6 = cx({'btn':true, 'btn-primary':true});

        return (
            <div className={bs.container}>
                <h1>React css 적용 예제</h1>
                <button className="btn btn-primary">버튼</button>
                <br/>
                <button className={bs.btn + '' + bs['btn-primary']}>버튼</button>
                <button className={btn1}>버튼</button>
                <button className={btn2}>버튼</button>
                <button className={btn3}>버튼</button>
                <button className={btn4}>버튼</button>
                <button className={btn5}>버튼</button>
                <button className={btn6}>버튼</button>
            </div>
        );
    }
}

export default App14;