import React from 'react'

const Follow = (props) => {


    const imgStyle = {
        width: "100px"
    }

    return (
        <div>
            {props.status ?
            <button onClick={props.handleClick}><img style={imgStyle} src="https://files.slack.com/files-pri/T03Q59F9G-FCFG66124/800px_colourbox13074937.jpg"></img></button>
            :
            <button onClick={props.handleClick}><img style={imgStyle} src="https://cdn.iconscout.com/icon/free/png-256/angel-face-fairy-tale-fantasy-halo-innocent-smile-emoji-happy-37651.png"></img></button>
            }
        </div>
    )
}

export default Follow;