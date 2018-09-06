import React from 'react'

const InfoCard = props => {
    return (
        <div className="contentWrapper">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <img className="img" src={props.image} alt=""/>
        </div>
    )
}

export default InfoCard