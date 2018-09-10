import React, {Component} from 'react'
import {connect} from 'react-redux';
import {getFilms} from '../redux';
import FilmCard from './FilmCard'
import episode1Img from '../assets/images/films/4.jpg'
import episode2Img from '../assets/images/films/5.jpg'
import episode3Img from '../assets/images/films/6.jpg'
import episode4Img from '../assets/images/films/1.jpg'
import episode5Img from '../assets/images/films/2.jpg'
import episode6Img from '../assets/images/films/3.jpg'
import episode7Img from '../assets/images/films/4.jpg'



class Films extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
    
        // This binding is necessary to make `this` work in the callback
      }

    componentDidMount(){
        this.props.getFilms()
    }

    render(){
        const mappedFilms = this.props.films.map(films => {
            let currentImg = ''
            if (films.episode_id === 1){
                currentImg = episode1Img
            } else if (films.episode_id === 2){
                currentImg = episode2Img
            } else if (films.episode_id === 3){
                currentImg = episode3Img
            } else if (films.episode_id === 4){
                currentImg = episode4Img
            } else if (films.episode_id === 5){
                currentImg = episode5Img
            } else if (films.episode_id === 6){
                currentImg = episode6Img
            } else if (films.episode_id === 7){
                currentImg = episode7Img
            } 
        
            return <FilmCard currentImg={currentImg} {...films}/>
    })

        return (
            <div className="contentWrapper">
                {mappedFilms}
            </div>
        )
    }
}

export default connect(state => state, {getFilms})(Films)