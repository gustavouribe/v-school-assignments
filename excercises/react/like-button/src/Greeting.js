import React from 'react'

const Greeting = (props) => {
    return (
        <div>
            {props.phrase === 'hello' ?
            <h1>Hello</h1>
            :
            <h1>LIKE ME BITCH!!!</h1>}
        </div>
    )
};

export default Greeting;