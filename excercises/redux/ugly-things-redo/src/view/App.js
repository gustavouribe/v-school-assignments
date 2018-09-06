import React, { Component } from 'react';
import Form from '../controller/Form.js'
import InfoCard from './InfoCard.js'



class App extends Component {
    render() {
        return (
            <div className="container">
                <header>
                    <h1>ugly things</h1>
                </header>
                <Form/>
                <content >
                    <InfoCard />
                </content>
                
            </div>
        );
    }
}

export default App;
