import React, { Component } from 'react'

class Form extends Component {
    constructor(){
        super()
        this.state = {
            firstName: '',
            lastName: '',
            isDandy: false,
            favFood: ''
        }
    }

    handleChange = e => {
        const value = e.target.type === "checkbox" 
                                    ? e.target.checked 
                                    : e.target.value
        const { name } = e.target
        this.setState({
            [name]: value,
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        alert(`First Name: ${this.state.firstName}\n,
                Last Name: ${this.state.lastName}\n
                Dandy?:  ${this.state.isDandy}`)
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <input 
                onChange={this.handleChange}
                name="firstName"
                placeholder="First Name"
                value={this.state.firstName}/>
            <input 
                name="lastName" 
                value={this.state.lastName}
                onChange={this.handleChange}
                placeholder="Last Name"/>
            <label>Feeling Dandy?:
                <input 
                    type="checkbox" 
                    onChange={this.handleChange}
                    checked={this.state.isDandy}
                    name="isDandy"/>
            </label>
            <select onChange={this.handleChange} value={this.state.favFood} name="favFood">
                <option value="-">---</option>
                <option value="Pizza"> Pizza </option>
                <option value="Creamed Herring"> Creamed Herring </option>
                <option value="Ice Cream"> Ice Cream </option>
            </select>
              <button>Submit</button>
            </form>
        )
    }    
}

export default Form;