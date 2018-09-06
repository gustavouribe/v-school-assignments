import React from 'react';

const Controller = props => {
    return (
        <button onClick={props.handleClick}>{props.op}</button>
    );
};

export default Controller