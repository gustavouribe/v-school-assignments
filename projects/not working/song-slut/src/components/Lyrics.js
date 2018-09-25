import React from 'react'
import { connect } from 'react-redux'


const Lyrics = (props) => {
    return (
        <div>
            {props.songsterr}
        </div>
    )
}

export default connect(state=>state, {})(Lyrics);

