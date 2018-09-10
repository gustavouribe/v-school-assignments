import React, { Component } from 'react'

class PlanetCard extends Component {
    constructor(){
        super()
        this.state = {
            isToggleOn: false
        }
    }

    handleClick = () => {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
          }));
    }

    render(){
        return (
            <div>
                <div className="contentBoxes"  style={{backgroundImage: `url(${this.props.currentImg})`, height: 280, width: 230}} onClick={this.handleClick}>
                        <h2 className="titleText">{this.props.name}</h2> 
                        
                    


                </div>
                {this.state.isToggleOn &&
                    <div className="contentBoxes">
                        <span className="adjText">rotation period: </span> <span>{this.props.rotation_period}</span> <br></br>
                        <span className="adjText">orbital period: </span> <span>{this.props.orbital_period}</span> <br></br>
                        <span className="adjText">diameter: </span> <span>{this.props.diameter}</span> <br></br>
                        <span className="adjText">climate: </span> <span>{this.props.climate}</span> <br></br>
                        <span className="adjText">gravity: </span> <span>{this.props.gravity}</span> <br></br>
                        <span className="adjText">terrain: </span> <span>{this.props.terrain}</span> <br></br>
                        <span className="adjText">surface water: </span> <span>{this.props.surface_water}</span> <br></br>
                        <span className="adjText">population: </span> <span>{this.props.population}</span> <br></br>
                    </div>
                }
            </div>
        )
    }
}

export default PlanetCard