import React, {Component} from 'react'
import axios from 'axios'
import Person from './Person'

class App extends Component {
    constructor(){
        super()
        this.state = {
            data: []
        }

    }



    componentDidMount(){
        axios.get('https://swapi.co/api/people').then(response => {
            console.log(response)
            this.setState({
                data: response.data.results
            })
        }).catch(err => {
            console.log(err)
        })
    }
    
    render(){
        const mappedStarwarsFolk = this.state.data.map(person => {
            return (
            //     <Person 
            //         name={person.name} 
            //         key={person.url} 
            //         height={person.height} 
            //         eyeColor={person.eye_color}/>
            // )
            <Person 
                {...person}
                key={person.url}/>
            )
        })
        
        return (
            <div>
                {mappedStarwarsFolk}
            </div>
        )
    }
}

export default App
