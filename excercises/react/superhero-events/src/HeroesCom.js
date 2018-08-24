import React from 'react'
import "./index.css";


const HeroesCom = (props) => {
    const getPhrase = () => {
        alert(props.catchPhrase)
    }

    return (
        <div className="heroBox" >
            <h1>{props.name}</h1>
            <img src={props.image}/>
            <button className='App' onClick={getPhrase}>
                Get Catchphrase!
            </button>
        </div>
    )
}
export default HeroesCom