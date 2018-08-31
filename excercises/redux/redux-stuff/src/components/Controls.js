import React from 'react'
import { connect } from 'react-redux'
import { addOne } from '../redux'

const Controls = props => {
    return (
        <div>
            <button onClick={ props.addOne }>Add One</button>
        </div>
    )
}

export default connect(null, { addOne })(Controls)