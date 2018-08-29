import React from 'react'
import Header from './Header'
import Body from '.Body'
import Footer from './Footer'
// import data from './data.json'

// function App(props){
//     console.log(props)
//     return <h1>Hello! {props.person.firstName} {props.person.lastName}, you are {props.person.age} years old. {props.clownShoes}</h1>
// }


// class-based component = state and lifecycle methods

// function App(){
//     return (
//         <div>
//             <Header />
//             <Body />
//             <Footer />
//         </div>
//     )
// }

// class App extends React.Component {
//     construtor(){
//         super()
//         this.state={

//         }
//     }

//     myCoolMethod(){

//     }

//     render(){
//         return (
//             <div>
//                 <Header />
//                 <Body />
//                 <Footer />
//             </div>
//         )
//     }
// }

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            age: 0
        }
        this.ageUp = this.ageUp.bind(this)
    }

    ageUp(){
        this.setState(prevState => {
            return {age: prevState.age + 1}
        })
    }

    // alternative without bind
    // ageUp = () => {
    //     this.setState({age: 1})
    // }




    // render(){
    //     return (
    //         <div>
    //             <h1>{this.state.name}, you are {this.state.age} years old</h1>
    //             <button onClick={this.ageUp}>Birthday!</button>
    //         </div>
    //     )
    // }

        this.setState = {
            firstName: ''
        }
    
    handleChange = event => {
        // console.log(event.target.name)
        this.setState({
            [e.targe.name]: e.target.value,
        })
    }

    handleSubmit = event => {
        // alert("heeey")
        e.preventDefault()
        alert(`First Name: ${this.state.firstName}`)
    }

    render(){
        return(
            <form onSubmit={}>
                <input  
                    type="text"
                    onChange={this.handleChange}
                    name="firstName"
                    placeholder="First Name"
                    value={this.firstName}/>
                <input
                    type="checkbox"
                    onChange={this.handleChange}
                    checked={this.state.isAlive}/>
                <button>Submit</button>
            </form>
        )
    }

}



export default App