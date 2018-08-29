import React from 'react';

const Greeting = (props) => {
    return (
        <div>
            {props.phrase === 'hello' ?
            <h1>Hello</h1> 
            :
            <h1>Goodbye</h1>}
        </div>
    )


    // if (props.phrase === 'hello'){
    //     return (
    //         <div>
    //             <h1>Hello</h1>
    //         </div>
    //     )
    // }else {
    //     return (
    //         <div>
    //             <h1>Goodbye</h1>
    //         </div>
    //     )
    // }
};

export default Greeting;