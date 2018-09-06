import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submit } from '../model/';

class Form extends Component {
    constructor(){
        super()

        this.state = {
            image: '',
            title: '',
            description: '',

        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(e.target.value)
    }

    handleSubmit = e => {
        e.preventDefault()
        
        let post = {
            image: this.state.image,
            title: this.state.title,
            description: this.state.description
        }
        this.props.submit(post)
        
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
              <h3>this form</h3>
                <input 
                    placeholder="URL"
                    type="text" 
                    name="image" 
                    value={this.state.image}
                    onChange={this.handleChange}
                />
                <input 
                    placeholder="title"
                    type="text" 
                    name="title"
                    value={this.state.title} 
                    onChange={this.handleChange}
                />
                <input 
                    placeholder="description"
                    type="text" 
                    name="description"
                    value={this.state.description}
                    onChange={this.handleChange}
                />
                <button>Submit</button>
            </form>
        );
    }
}

// export default Form;
export default connect(null, { submit})(Form)