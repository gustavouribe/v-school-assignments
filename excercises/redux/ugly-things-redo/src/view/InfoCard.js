import React from 'react';
import { connect } from 'react-redux'





const InfoCard = (props) =>{
    // console.log(props.data)
    const displayData = props.data.map(info => {





        return <div className="infoWrapper">
                    <h2>{info.title}</h2>
                    <h3>{info.description}</h3>
                    <img className="img" src={info.image} alt="img"/>
                    <button onClick={props.deleteBtn}>delete</button>
                </div>
    })

    return (
        <div >
                {displayData}

        </div>
    );
    
}

// export default InfoCard;
export default connect(state => state, {})(InfoCard)