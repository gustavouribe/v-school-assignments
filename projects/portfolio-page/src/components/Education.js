import React, { Component } from 'react';
import calArts from '../images/education/calArts.png'
import UCSB from '../images/education/UCSBSeal.jpg'
import SBCC from '../images/education/SBCC.jpg'
import VSchool from '../images/education/VSchool.png'

class Education extends Component {
    render() {
        return (
            <div className="eduWrapper">
                <div className="eduBlock">
                    <p>
                        
                        <img className="eduImages" src={VSchool} alt="V School"/><br></br>
                        
                        <span>V School Coding Boot Camp, 2018</span><br></br>	
                        <span>MERN stack web development certificate</span>
                    </p>
                    <p>
                        <img className="eduImages" src={calArts} alt="Cal Arts"/><br></br>
                        <span>California Institute of the Arts, 2012 – 2014</span><br></br>
                        <span>Masters of Fine Arts, Music Composition </span>
                    </p>
                </div>
                <div className="eduBlock">
                    <p>
                        <img className="eduImages" src={UCSB} alt="UCSB"/><br></br>
                        <span>University of California, Santa Barbara, College of Creative Studies, 2009 – 2011</span><br></br>
                        <span>Bachelor of Arts, Music Composition</span>

                    </p>
                    <p>
                        <img className="eduImages" src={SBCC} alt="SBCC"/><br></br>
                        <span>Santa Barbara City College, 2005 – 2009</span><br></br>
                        <span>Associate of Arts, Liberal Studies, Music</span>
    
                    </p>
                </div>
            </div>
        );
    }
}

export default Education;