import React, { Component } from 'react';
import axios from 'axios'


class EditForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            image: this.props.editPerson.image,
            firstName: this.props.editPerson.firstName,
            lastName: this.props.editPerson.lastName,
            bountyAmount: this.props.editPerson.bountyAmount,
            type: this.props.editPerson.type,
            living:this.props.editPerson.living
        }
    }


    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        // e.preventDefault()
        let obj = this.state

        axios.put(`/bounty/${this.props.editPerson.id}`, obj).then(res =>{
            console.log(res)
        })
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

export default EditForm;