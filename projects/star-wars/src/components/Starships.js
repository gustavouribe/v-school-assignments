import React, {Component} from 'react'
import {connect} from 'react-redux';
import {getStarships} from '../redux';

class Starships extends Component {

    componentDidMount(){
        this.props.getStarships()
    }

    render(){
        const mappedStarships = this.props.starships.map(starships => {
            return (
                <div className="contentBoxes">
                    <h2>{starships.name}</h2> 
                    <span>model: {starships.model}</span> <br></br>
                    <span>manufacturer: {starships.manufacturer}</span> <br></br>
                    <span>cost in credits: {starships.cost_in_credits}</span> <br></br>
                    <span>length: {starships.length}</span> <br></br>
                    <span>max atmosphering speed: {starships.max_atmosphering_speed}</span> <br></br> 
                    <span>crew: {starships.crew}</span> <br></br>
                    <span>passengers: {starships.passengers}</span> <br></br>
                    <span>cargo capacity: {starships.cargo_capacity}</span> <br></br> 
                    <span>consumables: {starships.consumbales}</span> <br></br>
                    <span>hyperdrive rating: {starships.hyperdrive_rating}</span> <br></br> 
                    <span>MGLT: {starships.MGLT}</span> <br></br>
                    <span>starship class: {starships.starship_class}</span> <br></br> 
                </div>

            )
    })

        return (
            <div className="contentWrapper">
                {mappedStarships}
            </div>
        )
    }
}

export default connect(state => state, {getStarships})(Starships)