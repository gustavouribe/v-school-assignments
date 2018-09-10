import React, {Component} from 'react'
import {connect} from 'react-redux';
import {getSpecies} from '../redux';
import SpeciesCard from './SpeciesCard'
import huttImg from '../assets/images/species/5.jpg'
import yodasImg from '../assets/images/species/6.jpg'
import trandoshanImg from '../assets/images/species/7.jpg'
import monCalamariImg from '../assets/images/species/8.jpg'
import ewokImg from '../assets/images/species/9.jpg'
import sullustanImg from '../assets/images/species/10.jpg'
import neimodianImg from '../assets/images/species/11.jpg'
import gunganImg from '../assets/images/species/12.jpg'
import toydarianImg from '../assets/images/species/13.jpg'
import dugImg from '../assets/images/species/14.jpg'

class Species extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
    
        // This binding is necessary to make `this` work in the callback
      }

    componentDidMount(){
        this.props.getSpecies()
    }

    render(){
        const mappedSpecies = this.props.species.map(species => {
            // const picture = json.filter(img => people.name == img.name)
            let currentImg = ''
            if (species.name === "Hutt"){
                currentImg = huttImg
            } else if (species.name === "Yoda's species"){
                currentImg = yodasImg
            } else if (species.name === "Trandoshan"){
                currentImg = trandoshanImg
            } else if (species.name === "Mon Calamari"){
                currentImg = monCalamariImg
            } else if (species.name === "Ewok"){
                currentImg = ewokImg
            } else if (species.name === "Sullustan"){
                currentImg = sullustanImg
            } else if (species.name === "Neimodian"){
                currentImg = neimodianImg
            } else if (species.name === "Gungan"){
                currentImg = gunganImg
            } else if (species.name === "Toydarian"){
                currentImg = toydarianImg
            } else if (species.name === "Dug"){
                currentImg = dugImg
            } 
        
            return <SpeciesCard currentImg={currentImg} {...species}/>
    })

        return (
            <div className="contentWrapper">
                {mappedSpecies}
            </div>
        )
    }
}

export default connect(state => state, {getSpecies})(Species)