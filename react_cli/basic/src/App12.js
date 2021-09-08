import { Component } from 'react';

//전역에서 사용할 css import
import './css/bootstrap.css';
//지역(App12)에서만 사용할 css import
import styles from './custom_css/App12.module.css';

class App12 extends Component {
    render() {
        return (
            <div className="container">
                <h1>React css 적용 예제</h1>
                <div className={styles.box}>box</div>
            </div>
        );
    }
}

export default App12;