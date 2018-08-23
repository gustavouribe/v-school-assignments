import React from 'react'
import "./index.css";


const Article = (props) => {
    return (
        <div className="articleText" >
            <h1>{props.title}</h1>
            <h2>{props.subTitle}</h2>
            <p>Posted by {props.author} on {props.datePosted}</p>  
        </div>
    )
}
export default Article