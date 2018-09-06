import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getSong } from '../redux'

class Search extends Component {
        constructor(){
        super()
        this.state = {
            songTitle: '',
            artistName: '',
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
            songTitle: '',
            artistName: '',
            query: ''
        }))
        this.props.getSong(this.state.songTitle, this.state.artistName, this.state.query)
    }

    render() {
        return (
            <form >
                {/* <input type='text' placeholder="song title" onChange={this.handleChange} value={this.state.songTitle} name="songTitle"/> */}
                {/* <input type='text' placeholder="artist name" onChange={this.handleChange} value={this.state.artistName} name="artistName"/>  */}
                <input type='text' placeholder="song title or artist name" onChange={this.handleChange} value={this.state.query} name="query"/>

                <i className="fas fa-search" onClick={this.handleSubmit}></i>
            </form>
            
        );
    }
}

export default connect(null, { getSong })(Search);
