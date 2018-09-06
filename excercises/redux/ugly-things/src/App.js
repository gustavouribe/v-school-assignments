import React, {Component} from 'react'
import Form from './components/Form'
import InfoCard from './components/InfoCard' 
import './styles.css'

class App extends Component{
    constructor(){
        super()
        this.state = {
            image: '',
            title: '',
            description: '',
            data: []
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const newCard = {
            image: this.state.image,
            title: this.state.title,
            description: this.state.description,
        }
        this.setState(prevState => ({
            data: [...prevState.data, newCard],
            image: '',
            title: '',
            description: '',
        }))

    }

    render(){
        return (
            <div className="container">
                <div className="header">
                    <h1>ugly thangs</h1>
                </div>
               
                <Form 
                    handleChange={this.handleChange} 
                    handleSubmit={this.handleSubmit}
                    image={this.state.image}
                    title={this.state.title}
                    description={this.state.description}/>


                

                <div > 
                    {this.state.data.map(info => <InfoCard {...info}/>)}
                </div>
            </div>
        )
    }
}




export default App