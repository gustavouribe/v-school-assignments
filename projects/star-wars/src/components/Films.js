import React, {Component} from 'react'
import {connect} from 'react-redux';
import {getFilms} from '../redux';

class Films extends Component {

    componentDidMount(){
        this.props.getFilms()
    }

    render(){
        const mappedFilms = this.props.films.map(films => {
            return (
                <div className="contentBoxes">
                    <h2>{films.title}</h2> 
                     <span>episode: {films.episode_id}</span> <br></br>
                    <span>opening crawl: {films.opening_crawl}</span> <br></br>
                    <span>diameter: {films.director}</span> <br></br>
                    <span>producer: {films.producer}</span> <br></br>
                    <span>release date: {films.release_date}</span> <br></br>
                </div>

            )
    })

        return (
            <div className="contentWrapper">
                {mappedFilms}
            </div>
        )
    }
}

export default connect(state => state, {getFilms})(Films)