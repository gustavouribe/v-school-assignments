import React from 'react'

const Badge = () => {
    return (
        <div className="badge">
            
            <h1>this bitch: </h1>
            <div className="badgeRows"><span className="badgeOutputs">Name: </span><span  className="badgeOutputs">Phone: </span></div>
            <div className="badgeRows"><span className="badgeOutputs">Place of Birth: </span><span  className="badgeOutputs">Favorite food: </span></div>
            <div className="badgeRows"><span className="badgeOutputs">Email: </span></div>
            <div className="formArea"><textarea className="formText" placeholder="your info"></textarea></div>  
        </div>
    )
}

export default Badge