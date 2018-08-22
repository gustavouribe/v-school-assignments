import React from 'react'

const Pet = (props) => {
    console.log(props)
    return (
        <div>
            <h5>name: {props.name}</h5>
            <h5>breed: {props.breed}</h5>
        </div>
    )
}

export default Pet;~