import React from 'react'

const Person = props => {
    return (
        <div>
            <h3>{props.name}</h3> 
            <h3>{props.image}</h3> 
            <h3>{props.eyeColor}</h3> 
        </div>


    )


}

export default Person