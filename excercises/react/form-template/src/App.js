import React, {Component} from 'react'
import Form from './Form'
import InfoCard from './InfoCard' 

class App extends Component{
    constructor(){
        super()
        this.state = {
            ssn: '',
            mothersMaidenName: '',
            firstPet: '',
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
            ssn: this.state.snn,
            mothersMaidenName: this.state.mothersMaidenName,
            firstPet: this.state.firstPet,
        }
        this.setState(prevState => ({
            data: [...prevState.data, newCard],
            ssn: '',
            mothersMaidenName: '',
            firstPet: '',
        }))

    }

    render(){
        return (
            <div>
                <Form 
                    handleChange={this.handleChange} 
                    handleSubmit={this.handleSubmit}
                    snn={this.state.snn}
                    mothersMaidenName={this.state.mothersMaidenName}
                    firstPet={this.state.firstPet}/>
                <div> 
                    {this.state.data.map(info => <InfoCard {...info}/>)}
                </div>
            </div>
        )
    }
}




export default App