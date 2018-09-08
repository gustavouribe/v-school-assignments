import React, {Component} from 'react'
import {connect} from 'react-redux';
import {getPeople} from '../redux';

class People extends Component {

    componentDidMount(){
        this.props.getPeople()
    }

    render(){
        const mappedPeople = this.props.people.map(people => {
            return (
                <div className="contentBoxes">
                    <h1>{people.name}</h1> 
                    <span>height: {people.height}</span> <br></br>
                    <span>mass: {people.mass}</span> <br></br>
                    <span>hair color: {people.hair_color}</span> <br></br>
                    <span>skin color: {people.skin_color}</span> <br></br>
                    <span>eye color: {people.eye_color}</span> <br></br>
                    <span>birth year: {people.birth_year}</span> <br></br>
                    <span>gender: {people.gender}</span> <br></br>

                </div>

            )
    })

        return (
            <div className="contentWrapper">
                {mappedPeople}
            </div>
        )
    }
}

export default connect(state => state, {getPeople})(People)