import React, { Component } from 'react'

class StarshipCard extends Component {
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
                <div className="contentBoxes"  style={{backgroundImage: `url(${this.props.currentImg})`, height: 360, width: 330}} onClick={this.handleClick}>
                        <h2 className="titleText">{this.props.name}</h2> 
                        
                    


                </div>
                {this.state.isToggleOn &&
                    <div className="contentBoxes">
                        <span className="adjText">model: </span> <span>{this.props.model}</span> <br></br>
                        <span className="adjText">manufacturer: </span> <span>{this.props.manufacturer}</span> <br></br>
                        <span className="adjText">cost in credits: </span> <span>{this.props.cost_in_credits}</span> <br></br>
                        <span className="adjText">length: </span> <span>{this.props.length}</span> <br></br>
                        <span className="adjText">max atmosphering speed: </span> <span>{this.props.max_atmosphering_speed}</span> <br></br> 
                        <span className="adjText">crew: </span> <span>{this.props.crew}</span> <br></br>
                        <span className="adjText">passengers: </span> <span>{this.props.passengers}</span> <br></br>
                        <span className="adjText">cargo capacity: </span> <span>{this.props.cargo_capacity}</span> <br></br> 
                        <span className="adjText">consumables: </span> <span>{this.props.consumbales}</span> <br></br>
                        <span className="adjText">hyperdrive rating: </span> <span>{this.props.hyperdrive_rating}</span> <br></br> 
                        <span className="adjText">MGLT: </span> <span>{this.props.MGLT}</span> <br></br>
                        <span className="adjText">starship class: </span> <span>{this.props.starship_class}</span> <br></br>
                    </div>
                }
            </div>
        )
    }
}

export default StarshipCard