import React from 'react'
import Form from './Form'

const List = (props) => {
    return (
        <div>
            <h3>{props.firstName}</h3>
            <h3>{props.lastName}</h3>
            <h3>{props.age}</h3>
            <h3>{props.location}</h3> 
        </div>
    )
}

export default List;