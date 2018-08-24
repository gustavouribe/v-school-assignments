import React, {Component} from 'react';

class App extends Component{
    constructor(){
        super()

        this.state={
            counter: 0
        }
    }

    addNum = () => {
        this.setState(prevState => {
            return {
                counter: prevState.counter + 1
            }
        })
    }

    subNum = () => {
        this.setState(prevState => {
            return {
                counter: prevState.counter - 1
            }
        })
    }

    reset = () => {
        this.setState({
            counter:0
        })
    }

    render (){
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.addNum}>+</button>
                <button onClick={this.subNum}>-</button>
                <button onClick={this.reset}>reset</button>
            </div>
        )
    }
}

export default App;

