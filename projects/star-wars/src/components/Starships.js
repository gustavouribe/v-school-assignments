import React, {Component} from 'react'
import {connect} from 'react-redux';
import {getStarships} from '../redux';
import StarshipCard from './StarshipCard'
import executerImg from '../assets/images/starships/15.jpg'
import sentinelImg from '../assets/images/starships/5.jpg'
import deathStarImg from '../assets/images/starships/9.jpg'
import mFalconImg from '../assets/images/starships/10.jpg'
import yWingImg from '../assets/images/starships/11.jpg'
import xWingImg from '../assets/images/starships/12.jpg'
import tieX1Img from '../assets/images/starships/13.jpg'
import slaveImg from '../assets/images/starships/21.jpg'
import impShuttleImg from '../assets/images/starships/22.jpg'
import EF76Img from '../assets/images/starships/23.jpg'



class Starships extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
    
        // This binding is necessary to make `this` work in the callback
      }

    componentDidMount(){
        this.props.getStarships()
    }

    render(){
        const mappedStarships = this.props.starships.map(starships => {
            let currentImg = ''
            if (starships.name === "Executor"){
                currentImg = executerImg
            } else if (starships.name === "Sentinel-class landing craft"){
                currentImg = sentinelImg
            } else if (starships.name === "Death Star"){
                currentImg = deathStarImg
            } else if (starships.name === "Millennium Falcon"){
                currentImg = mFalconImg
            } else if (starships.name === "Y-wing"){
                currentImg = yWingImg
            } else if (starships.name === "X-wing"){
                currentImg = xWingImg
            } else if (starships.name === "TIE Advanced x1"){
                currentImg = tieX1Img
            } else if (starships.name === "Slave 1"){
                currentImg = slaveImg
            } else if (starships.name === "Imperial shuttle"){
                currentImg = impShuttleImg
            } else if (starships.name === "EF76 Nebulon-B escort frigate"){
                currentImg = EF76Img
            } 
        
            return <StarshipCard currentImg={currentImg} {...starships}/>
    })


        return (
            <div className="contentWrapper">
                {mappedStarships}
            </div>
        )
    }
}

export default connect(state => state, {getStarships})(Starships)