import React from 'react';

const Follow = (props) => {
    return (
        <div>
            {props.status ?
            <button onClick={props.handleClick}>Follow</button>
            :
            <button onClick={props.handleClick}>Following</button>
        }
        </div>
    );
};

export default Follow;