import React, { Component } from 'react';
import Form from './components/Form'
// import EditForm from './components/EditForm'
// import axios from "axios"
import {connect} from 'react-redux';
import {getBounty} from './redux/index'
import InfoCard from './components/InfoCard'


class App extends Component {
    constructor(){
        super()
        this.state = {
            open: false
        }
    }




    componentDidMount(){
        this.props.getBounty()
    }

    render() {

        return (
            <div>
                <h1>yoooo</h1>
                <Form/>
                {this.props.bounty.map((person, i) => {
                    return (
                      <InfoCard key={i} person={person}/>  
                    )
                })}
            </div>
        );
    }
}

export default connect(state => state, {getBounty})(App)
