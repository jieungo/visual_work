import { Component } from "react";


class App18 extends Component{
    state={

    };

    range = (start, end)=>{
        const arr=[];
        for(let i=start; i<=end; i++){
            arr.push(i);
        }
        return arr;
    }

    render(){
        let nums=[1,2,3,4,5];
        let result = nums.map(item=><li>{item}</li>);
        return (
            <div>
                <h3>1~5 까지 출력</h3>
                <ul>
                    {result}
                </ul>
                <h3>1~5 까지 출력</h3>
                <ul>
                    {nums.map( item => <li>{item}</li> )}
                </ul>
                <h3>1~5 까지 출력</h3>
                <ul>
                    {this.range(1, 5).map( item => <li>{item}</li> )}
                </ul>
                <h3>11~20 까지 출력</h3>
                <ul>
                    {this.range(11, 20).map( item => <li>{item}</li> )}
                </ul>
                <h3>11~20 까지 출력</h3>
                <ul>
                    {_.range(11, 21).map( item => <li key={_.uniqueId()}>{item}</li> )}
                </ul>
            </div>
        );
    }
}

export default App18;