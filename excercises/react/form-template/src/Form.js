import React from 'react'

const Form = props => {
    console.log(props)
    return (
        <form onSubmit={props.handleSubmit}>
            <input 
                type="text" 
                name="ssn" 
                value={props.snn} 
                onChange={props.handleChange}/>
            <input 
                type="text" 
                name="mothersMaidenName" 
                value={props.mothersMaidenName} 
                onChange={props.handleChange}/>
            <input 
                type="text" 
                name="firstPet" 
                value={props.firstPet} 
                onChange={props.handleChange}/>
            <button>Submit</button>
        </form>
    )
}

export default Form