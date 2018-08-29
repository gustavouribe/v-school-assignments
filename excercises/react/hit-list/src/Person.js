import React from 'react';

const Person = (props) => {
    return (
        <div >
                       
                <h2>{props.name}</h2>
                <img className="imgClass" src={props.image} alt=""/>
            
        </div>
    );
};

export default Person;