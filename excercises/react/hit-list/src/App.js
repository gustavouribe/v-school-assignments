import React, {Component} from 'react'
import axios from 'axios'
import Person from'./Person'

import './styles.css'


class App extends Component {
    constructor(){
        super()
        this.state ={
            data: []
        }
    }

    componentDidMount(){
        axios.get('http://api.vschool.io:6543/hitlist.json').then(response => {
            this.setState({data: response.data})    
        }).catch(err => {
            console.log(err)
        })
    }

    render(){
        console.log(this.state)
        const hitList = this.state.data.map((hit, i)=> <Person key={hit.name + i}
                                                               name={hit.name}
                                                               image={hit.image} />)
       
        return (
            <div className="container">
                <div className="header"><h1>*The Hit List</h1></div>
                <div className="content">
                    {hitList}
                </div>

            </div>
        )
    }

}

export default App