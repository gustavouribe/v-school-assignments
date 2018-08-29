import React, { Component } from 'react';
import Greeting from './Greeting';
import Follow from './Follow';

class App extends Component {
  constructor(){
    super()

    this.state = {
      status: true
    }
  }

  handleClick = e => {
    this.setState(prevState =>{
      return {
        status: !prevState.status
      }
    })
  }

  render() {
    return (
      <div>
        <Greeting phrase='bye' />
        <Follow status={this.state.status} handleClick={this.handleClick}/>
      </div>
    );
  }
}

export default App;