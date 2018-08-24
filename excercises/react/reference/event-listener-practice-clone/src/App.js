import React, {Component} from 'react';
import Child from ".Child"

class App extends Component {
    runThis = () => {
        console.log("hello")
    }
    render(){
        return (
            <div>
                <Child runThis={this.runThis}/>
            </div>
        );
    }
}
export default App;