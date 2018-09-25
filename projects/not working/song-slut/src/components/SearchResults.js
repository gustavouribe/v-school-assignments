import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getQuery } from '../redux'
import { getSong } from '../redux'

class SearchResults extends Component {


    // getSong(){
    //     this.props.getSong()
    // }

    handleTitleSelect = (id) => {
        this.props.getSong(id)
    }

    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.songsterr.map(songsterr => {
                     return (
                        <div className='searchList'> 
                            <div onClick={()=> this.handleTitleSelect(songsterr.id)}>{songsterr.title} </div>
                       
                        </div>
                )})}
            </div>
        );
    }
}


export default connect(state=>state, { getQuery, getSong })(SearchResults)

