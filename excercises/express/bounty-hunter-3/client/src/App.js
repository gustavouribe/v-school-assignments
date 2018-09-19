import React, { Component } from 'react';
import Form from './components/Form'
import EditForm from './components/EditForm'
import axios from "axios"
import {connect} from 'react-redux';
import {getBounty} from './redux/index'
import InfoCard from './components/InfoCard'


class App extends Component {
    constructor(){
        super()
        this.state = {
            bounty: [],
            open: false
        }
    }




    componentDidMount(){
        // axios.get('/bounty').then(res => {
        //     console.log(res)
        //     this.setState({
                
        //         bounty: res.data
        //     })
        // })
        this.props.getBounty()
        this.setState({bounty: this.props.bounty})
    }

    render() {
        console.log(this.state.bounty)
        return (
            <div>
                
                <h1>yoooo</h1>
                <Form/>
                {this.props.bounty.map(person => {
                    return (
                      <InfoCard person={person}/>  
                    )
                })}
            </div>
        );
    }
}

export default connect(state => state, {getBounty})(App)
