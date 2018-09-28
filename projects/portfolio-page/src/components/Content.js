import React, { Component } from 'react';

import starWhores from '../images/websites/starwhores.png'
import ghettoStopWatch from '../images/websites/ghettoStopWatch.png'
import wineFood from '../images/websites/wineFood.png'
import zenGarden from '../images/websites/zenGarden.png'

const Content = () => {
        return (
            <div className="contentWrapper">
                <div className="contentBlock">            
                    <p>
                        <img className="contentImages" src={starWhores} alt="Star Whores"/><br></br>
                        <span>V School Coding Boot Camp, 2018</span><br></br>	
                        <span>MERN stack web development certificate</span>
                    </p>
                </div>
                <div className="contentBlock">   
                    <p>
                        <img className="contentImages" src={ghettoStopWatch} alt="Star Whores"/><br></br>
                        <span>V School Coding Boot Camp, 2018</span><br></br>	
                        <span>MERN stack web development certificate</span>
                    </p>
                </div>
                <div className="contentBlock">   
                    <p>
                        <img className="contentImages" src={wineFood} alt="Star Whores"/><br></br>
                        <span>V School Coding Boot Camp, 2018</span><br></br>	
                        <span>MERN stack web development certificate</span>
                    </p>
                </div>
                <div className="contentBlock">  
                    <p>
                        <img className="contentImages" src={zenGarden} alt="Star Whores"/><br></br>
                        <span>V School Coding Boot Camp, 2018</span><br></br>	
                        <span>MERN stack web development certificate</span>
                    </p>
                </div>        
            </div>
        );
}

export default Content

