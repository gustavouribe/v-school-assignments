import React, {Component} from 'react'
import {connect} from 'react-redux';
import {getVehicles} from '../redux';

class Vehicles extends Component {

    componentDidMount(){
        this.props.getVehicles()
    }

    render(){
        const mappedVehicles = this.props.vehicles.map(vehicles => {
            return (
                <div className="contentBoxes">
                    <h2>{vehicles.name}</h2> 
                    <span>model: {vehicles.model}</span> <br></br>
                    <span>manufacturer: {vehicles.manufacturer}</span> <br></br>
                    <span>cost in credits: {vehicles.cost_in_credits}</span> <br></br>
                    <span>length: {vehicles.length}</span> <br></br>
                    <span>max atmosphering speed: {vehicles.max_atmosphering_speed}</span> <br></br>
                    <span>crew: {vehicles.crew}</span> <br></br>
                    <span>passengers: {vehicles.passengers}</span> <br></br>
                    <span>cargo capacity: {vehicles.cargo_capacity}</span> <br></br>
                    <span>consumables: {vehicles.consumables}</span> <br></br>
                    <span>vehicle class: {vehicles.vehicle_class}</span> <br></br>
                </div>

            )
    })

        return (
            <div className="contentWrapper">
                {mappedVehicles}
            </div>
        )
    }
}

export default connect(state => state, {getVehicles})(Vehicles)