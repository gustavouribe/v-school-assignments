import React, {Component} from 'react'

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
        const {name} = e.target
        this.setState({
            [name]: value,
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        alert(`First Name: ${this.state.firstName}\n,
                Last Name: ${this.state.lastName}\n
                Dandy?: ${this.state.isDandy}`)
    }


    handleSubmit = e => {
        e.preventDefault()
        alert(`First Name: ${this.state.firstName}\n`)
    }




}