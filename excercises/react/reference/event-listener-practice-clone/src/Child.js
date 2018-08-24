import React from "react"

const Child = (props) => {
    return (
        <button className="App" onClick={props.runThis}>
            Click Me!
        </button>

    )
}
export default Child