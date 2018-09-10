import React, { Component } from 'react'

class SpeciesCard extends Component {
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
                    <span className="adjText">classification: </span> <span>{this.props.classification}</span> <br></br>
                    <span className="adjText">designation: </span> <span>{this.props.designation}</span> <br></br>
                    <span className="adjText">average height: </span> <span>{this.props.average_height}</span> <br></br>
                    <span className="adjText">skin colors: </span> <span>{this.props.skin_colors}</span> <br></br>
                    <span className="adjText">hair colors: </span> <span>{this.props.hair_colors}</span> <br></br>
                    <span className="adjText">eye colors: </span> <span>{this.props.eye_colors}</span> <br></br>
                    <span className="adjText">average lifespan: </span> <span>{this.props.average_lifespan}</span> <br></br>
                    </div>
                }
            </div>
        )
    }
}

export default SpeciesCard