import React, { Component } from 'react'

class FilmCard extends Component {
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
                <div className="contentBoxes"  style={{backgroundImage: `url(${this.props.currentImg})`, height: 320, width: 230}} onClick={this.handleClick}>
                        {/* <h2 className="titleText">{this.props.title}</h2>  */}
                        
                    


                </div>
                {this.state.isToggleOn &&
                    <div className="contentBoxesFilm">
                        <span className="adjText">episode: </span> <span>{this.props.episode_id}</span> <br></br>
                        <span className="adjText">opening crawl: </span> <span>{this.props.opening_crawl}</span> <br></br>
                        <span className="adjText">diameter: </span> <span>{this.props.director}</span> <br></br>
                        <span className="adjText">producer: </span> <span>{this.props.producer}</span> <br></br>
                        <span className="adjText">release date: </span> <span>{this.props.release_date}</span> <br></br>
                    </div>
                }
            </div>
        )
    }
}

export default FilmCard