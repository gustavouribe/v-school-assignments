import React, { Component } from 'react';

import {connect} from 'react-redux'
import { postBounty } from '../redux';

class Form extends Component {
    constructor(){
        super()
        this.state = {
            image: '',
            firstName: '',
            lastName: '',
            bountyAmount: '',
            type: '',
            living: ''
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.postBounty(this.state)
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' placeholder='image url' name="image" value={this.state.image} onChange={this.handleChange}></input>
                <input type='text' placeholder='first name' name="firstName" value={this.state.firstName} onChange={this.handleChange}></input>
                <input type='text' placeholder='last name' name="lastName" value={this.state.lastName} onChange={this.handleChange}></input>
                <input type='number' placeholder='bountyAmount' name="bountyAmount" value={this.state.bountyAmount} onChange={this.handleChange}></input>
                <select name="type" value={this.state.type} onChange={this.handleChange}> <option value="Jedi">Jedi</option> <option value="Sith" >Sith</option></select>
                <select name="living" value={this.state.type} onChange={this.handleChange}> <option value="true">Alive</option> <option value="False">Dead</option></select>
                <button>submit</button>
            </form>
        );
    }
}

export default connect(state => state, {postBounty})(Form)