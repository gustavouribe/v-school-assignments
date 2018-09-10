import React, {Component} from 'react'
import {connect} from 'react-redux';
import {getPlanets} from '../redux';
import PlanetCard from './PlanetCard'
import alderaanImg from '../assets/images/planets/2.jpg'
import yavinIVImg from '../assets/images/planets/3.jpg'
import hothImg from '../assets/images/planets/4.jpg'
import dagobahImg from '../assets/images/planets/5.jpg'
import bespinImg from '../assets/images/planets/6.jpg'
import endorImg from '../assets/images/planets/7.jpg'
import nabooImg from '../assets/images/planets/8.jpg'
import coruscantImg from '../assets/images/planets/9.jpg'
import kaminoImg from '../assets/images/planets/10.jpg'
import geonosisImg from '../assets/images/planets/11.jpg'

class Planets extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
    }

    componentDidMount(){
        this.props.getPlanets()
    }

    render(){
        const mappedPlanets = this.props.planets.map(planets => {
            let currentImg = ''
            if (planets.name === "Alderaan"){
                currentImg = alderaanImg
            } else if (planets.name === "Yavin IV"){
                currentImg = yavinIVImg
            } else if (planets.name === "Hoth"){
                currentImg = hothImg
            } else if (planets.name === "Dagobah"){
                currentImg = dagobahImg
            } else if (planets.name === "Bespin"){
                currentImg = bespinImg
            } else if (planets.name === "Endor"){
                currentImg = endorImg
            } else if (planets.name === "Naboo"){
                currentImg = nabooImg
            } else if (planets.name === "Coruscant"){
                currentImg = coruscantImg
            } else if (planets.name === "Kamino"){
                currentImg = kaminoImg
            } else if (planets.name === "Geonosis"){
                currentImg = geonosisImg
            } 
        
            return <PlanetCard currentImg={currentImg} {...planets}/>            
            
    })

        return (
            <div className="contentWrapper">
                {mappedPlanets}
            </div>
        )
    }
}

export default connect(state => state, {getPlanets})(Planets)