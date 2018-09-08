import React, {Component} from 'react'
import {connect} from 'react-redux';
import {getSpecies} from '../redux';

class Species extends Component {

    componentDidMount(){
        this.props.getSpecies()
    }

    render(){
        const mappedSpecies = this.props.species.map(species => {
            return (
                <div className="contentBoxes">
                    <h2>{species.name}</h2> 
                    <span>classification: {species.classification}</span> <br></br>
                    <span>designation: {species.designation}</span> <br></br>
                    <span>average height: {species.average_height}</span> <br></br>
                    <span>skin colors: {species.skin_colors}</span> <br></br>
                    <span>hair colors: {species.hair_colors}</span> <br></br>
                    <span>eye colors: {species.eye_colors}</span> <br></br>
                    <span>average lifespan: {species.average_lifespan}</span> <br></br>
                </div>

            )
    })

        return (
            <div className="contentWrapper">
                {mappedSpecies}
            </div>
        )
    }
}

export default connect(state => state, {getSpecies})(Species)