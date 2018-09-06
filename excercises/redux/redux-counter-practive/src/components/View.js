import React from 'react';
import { connect } from 'react-redux'

const View = props => {
    return (
        <div>
            <h1>{props.count}</h1>
        </div>
    );
};

export default connect(state => state, {})(View)