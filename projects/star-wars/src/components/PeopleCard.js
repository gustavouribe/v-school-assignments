import React, { Component } from 'react'

class PeopleCard extends Component {
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
                        <span className="adjText">height:</span> <span>{this.props.height}</span> <br></br>
                        <span className="adjText">mass: </span> <span>{this.props.mass}</span> <br></br>
                        <span className="adjText">hair color: </span> <span>{this.props.hair_color}</span> <br></br>
                        <span className="adjText">skin color: </span> <span>{this.props.skin_color}</span> <br></br>
                        <span className="adjText">eye color: </span> <span>{this.props.eye_color}</span> <br></br>
                        <span className="adjText">birth year: </span> <span>{this.props.birth_year}</span> <br></br>
                        <span className="adjText">gender: </span> <span>{this.props.gender}</span> <br></br> 
                    </div>
                }
            </div>
        )
    }
}

export default PeopleCard