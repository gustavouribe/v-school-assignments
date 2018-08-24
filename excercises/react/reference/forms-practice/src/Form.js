import React, { Component } from 'react';
import List from './List';


class Form extends Component {
    constructor (){
        super() 

        this.state = {
            firstName: '',
            lastName: '',
            age: '',
            location: '',
            names: []
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault()
        // alert(`Name: ${this.state.firstName} ${this.state.lastName}\nAge: ${this.state.age}`)

        this.setState(prevState => {
            const newNames = [ 
                ...prevState.names, 
                {
                    firstName: prevState.firstName, 
                    lastName:prevState.lastName, 
                    age: prevState.age, 
                    location: prevState.location
                } 
            ] 

            return {names: newNames}      
        })
    }

    
    




    render() {
        const displayList = this.state.names.map((data, i) => {
            return <List key={data.name+i}
                           firstName={data.firstName} 
                           lastName={data.lastName} 
                           age={data.age} 
                           location={data.location} />
          })
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <input type="text" name='firstName' placeholder='First Name' value={this.state.firstName} onChange={this.handleChange}  />
                <input type="text" name='lastName' placeholder='Last Name' value={this.state.lastName} onChange={this.handleChange}  />
                <input type="text" name='age' placeholder='Age' value={this.state.age} onChange={this.handleChange} />
                <input type="text" name='location' placeholder='location' value={this.state.location} onChange={this.handleChange}  />
                <button>Submit</button>
                {/* <h1>Age: {this.state.age}</h1> */}
            </form> 
            {displayList}
            </div>
        );
    }
}

export default Form;