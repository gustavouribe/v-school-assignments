import React from "react"

const Box = (props) => {
    
    const styles = {
        color: props.color,
        backgroundColor: "#060606",
        textAlign: "center",
  
        

    
    }
    return (
        <div className="red titleWrap" style={styles}>
            <p>{props.greeting}</p>
            <p>{props.title}</p>
            <p>{props.subtitle}</p>
            <p>{props.description}</p> 
        </div>
    )
}

export default Box