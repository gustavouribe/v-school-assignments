import React, { Component } from 'react';
import InfoCard from './InfoCard';


class Result extends Component {
    constructor(){
        super()
        this.state = {
            filteredResults: [],
            isToggleOn: true
        }
    }

    handleClick = () => {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
          }));
    }

    render() {
        return (
            <div>
                {this.state.isToggleOn ?
                <h3 onClick={this.handleClick}>{this.props.result.itemName}</h3>
                :
                <InfoCard handleClick={this.handleClick} result={this.props.result}/>
                }
            </div>
           
        );
    }
}

export default Result