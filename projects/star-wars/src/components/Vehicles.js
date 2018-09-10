import React, {Component} from 'react'
import {connect} from 'react-redux';
import {getVehicles} from '../redux';
import VehiclesCard from './VehiclesCard'
import sandCrawlerImg from '../assets/images/vehicles/4.jpg'
import T16Img from '../assets/images/vehicles/6.jpg'
import X34Img from '../assets/images/vehicles/7.jpg'
import TIEImg from '../assets/images/vehicles/8.jpg'
import snowSpeederImg from '../assets/images/vehicles/14.jpg'
import tieBomberImg from '../assets/images/vehicles/16.jpg'
import ATATImg from '../assets/images/vehicles/18.jpg'
import ATSTImg from '../assets/images/vehicles/19.jpg'
import stormIVImg from '../assets/images/vehicles/20.jpg'
import sailBargeImg from '../assets/images/vehicles/24.jpg'


class Vehicles extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
    
        // This binding is necessary to make `this` work in the callback
      }

    componentDidMount(){
        this.props.getVehicles()
    }

    render(){
        const mappedVehicles = this.props.vehicles.map(vehicles => {
            let currentImg = ''
            if (vehicles.name === "Sand Crawler"){
                currentImg = sandCrawlerImg
            } else if (vehicles.name === "T-16 skyhopper"){
                currentImg = T16Img
            } else if (vehicles.name === "X-34 landspeeder"){
                currentImg = X34Img
            } else if (vehicles.name === "TIE/LN starfighter"){
                currentImg = TIEImg
            } else if (vehicles.name === "Snowspeeder"){
                currentImg = snowSpeederImg
            } else if (vehicles.name === "TIE bomber"){
                currentImg = tieBomberImg
            } else if (vehicles.name === "AT-AT"){
                currentImg = ATATImg
            } else if (vehicles.name === "AT-ST"){
                currentImg = ATSTImg
            } else if (vehicles.name === "Storm IV Twin-Pod cloud car"){
                currentImg = stormIVImg
            } else if (vehicles.name === "Sail barge"){
                currentImg = sailBargeImg
            } 
        
            return <VehiclesCard currentImg={currentImg} {...vehicles}/>
    })

        return (
            <div className="contentWrapper">
                {mappedVehicles}
            </div>
        )
    }
}

export default connect(state => state, {getVehicles})(Vehicles)