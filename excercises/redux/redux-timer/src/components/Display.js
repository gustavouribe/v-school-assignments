import React from 'react'
import { connect } from 'react-redux'

const Display = props => {
    return (
        <div className="display">
            <div className="marginWrapper">
                <span className="displayText">{props.minutes}{props.seconds}</span><span className="displayText milli">s {props.milliSeconds}</span>
            </div>
        </div>
    )
}
            // 1: What do you want from your store
            // 2: What methods do I need
export default connect(state=>state, {})(Display)
