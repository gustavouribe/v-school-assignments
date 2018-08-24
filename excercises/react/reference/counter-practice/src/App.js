import React, {Component} from 'react';

class App extends Component {
  constructor(){
    super()
    
    //Your state will always be inside of a constructor
    //this.state is simply an object with key value pairs
    this.state = {
      counter: 0
    }

    // this.addNum = this.addNum.bind(this)
  }

  //old syntax
  // addNum() {

  // }

  //This is the method you are creating to add one to your counter
  addNum = () => {
    //this.setState is the built-in method you will use ANYTIME you want to change your state.
    //prevState is the previous value of your state object
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
    this.setState({counter: 0})
  }





  render(){
    return (
      <div>
        {/* To use anything from your state you will call it like the example show below in the h1 tag */}
        <h1>{this.state.counter}</h1>
        <button onClick={this.addNum}>+</button>
        <button onClick={this.subNum}>-</button>
        <button onClick={this.reset}>reset</button>
      </div>
    )
  }
}

export default App;