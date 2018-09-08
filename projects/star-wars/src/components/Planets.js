import React, {Component} from 'react'
import {connect} from 'react-redux';
import {getPlanets} from '../redux';

class Planets extends Component {

    componentDidMount(){
        this.props.getPlanets()
    }

    render(){
        const mappedPlanets = this.props.planets.map(planets => {
            return (
                <div className="contentBoxes">
                    <h2>{planets.name}</h2> 
                    <span>rotation period: {planets.rotation_period}</span> <br></br>
                    <span>orbital period: {planets.orbital_period}</span> <br></br>
                    <span>diameter: {planets.diameter}</span> <br></br>
                    <span>climate: {planets.climate}</span> <br></br>
                    <span>gravity: {planets.gravity}</span> <br></br>
                    <span>terrain: {planets.terrain}</span> <br></br>
                    <span>surface water: {planets.surface_water}</span> <br></br>
                    <span>population: {planets.population}</span> <br></br>
                </div>

            )
    })

        return (
            <div className="contentWrapper">
                {mappedPlanets}
            </div>
        )
    }
}

export default connect(state => state, {getPlanets})(Planets)