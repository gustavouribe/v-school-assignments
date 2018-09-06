import React from 'react';
import Controller from './Controller'
import View from './View'
import { connect } from 'react-redux'
import { addOne, subOne, mult, divide } from '../redux'


const App = props => {
    return (
        <div>
            <View />
            <Controller handleClick={props.addOne} op="+"/>
            <Controller handleClick={props.subOne} op="-"/>
            <Controller handleClick={props.mult} op="*"/>
            <Controller handleClick={props.divide} op="/"/>
        </div>
    );
};

export default connect(null, { addOne, subOne, mult, divide})(App)