import React, { Component } from 'react';
import Results from './Result'
import {connect} from 'react-redux'


class InfoCard extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div key={this.props.result.itemName}>
                            
                            {this.props.result.itemName}
                            {this.props.result.type}
                            {this.props.result.winePairings}
                            {this.props.result.foodPairings}

                            <button onClick={this.props.handleClick}>edit</button>

            </div>
        );
    }
}

export default InfoCard