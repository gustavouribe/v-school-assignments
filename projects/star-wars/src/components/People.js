import React, {Component} from 'react'
import {connect} from 'react-redux';
import {getPeople} from '../redux';
import PeopleCard from './PeopleCard'
import lukeImg from '../assets/images/characters/1.jpg'
import c3POImg from '../assets/images/characters/2.jpg'
import R2D2Img from '../assets/images/characters/3.jpg'
import darthImg from '../assets/images/characters/4.jpg'
import leiaImg from '../assets/images/characters/5.jpg'
import owenImg from '../assets/images/characters/6.jpg'
import beruImg from '../assets/images/characters/7.jpg'
import R5D4Img from '../assets/images/characters/8.jpg'
import biggsImg from '../assets/images/characters/9.jpg'
import obiImg from '../assets/images/characters/10.jpg'




class People extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
    
        // This binding is necessary to make `this` work in the callback
      }


    componentDidMount(){
        this.props.getPeople()
    }

   

    


  
    render(){
        //const picture = json.filter(img => json.name == people.name)
        
        // { picture }
        const mappedPeople = this.props.people.map(people => {
            // const picture = json.filter(img => people.name == img.name)
            let currentImg = ''
            if (people.name === "Luke Skywalker"){
                currentImg = lukeImg
            } else if (people.name === "C-3PO"){
                currentImg = c3POImg
            } else if (people.name === "R2-D2"){
                currentImg = R2D2Img
            } else if (people.name === "Darth Vader"){
                currentImg = darthImg
            } else if (people.name === "Leia Organa"){
                currentImg = leiaImg
            } else if (people.name === "Owen Lars"){
                currentImg = owenImg
            } else if (people.name === "Beru Whitesun lars"){
                currentImg = beruImg
            } else if (people.name === "R5-D4"){
                currentImg = R5D4Img
            } else if (people.name === "Biggs Darklighter"){
                currentImg = biggsImg
            } else if (people.name === "Obi-Wan Kenobi"){
                currentImg = obiImg
            } 
        
            return <PeopleCard currentImg={currentImg} {...people}/>
    })

        return (
            <div className="contentWrapper">
                {mappedPeople}  
            </div>
        )
    }
}

export default connect(state => state, {getPeople})(People)