import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getQuery } from '../redux'

class Search extends Component {
        constructor(){
        super()
        this.state = {
            query: ''
        }
    }


    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        
        this.setState(prevState => ({
            query: ''
        }))
        this.props.getQuery(this.state.query)
    }


    render() {
        return (
            <form >
                <input type='text' placeholder="song title or artist name" onChange={this.handleChange} value={this.state.query} name="query"/>
                <i className="fas fa-search" onClick={this.handleSubmit}></i>
            </form>
            
        );
    }
}

export default connect(null, { getQuery })(Search);
