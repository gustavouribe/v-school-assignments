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
                        
                        <h4>V School Coding Boot Camp, 2018</h4>	
                        <span>MERN stack web development certificate</span>
                    </p>
                    <p>
                        <img className="eduImages" src={calArts} alt="Cal Arts"/><br></br>
                        <h4>California Institute of the Arts, 2012 – 2014</h4>
                        <span>Masters of Fine Arts, Music Composition </span>
                    </p>
                </div>
                <div className="eduBlock">
                    <p>
                        <img className="eduImages" src={UCSB} alt="UCSB"/><br></br>
                        <h4>University of California, Santa Barbara, College of Creative Studies, 2009 – 2011</h4>
                        <span>Bachelor of Arts, Music Composition</span>

                    </p>
                    <p>
                        <img className="eduImages" src={SBCC} alt="SBCC"/><br></br>
                        <h4>Santa Barbara City College, 2005 – 2009</h4>
                        <span>Associate of Arts, Liberal Studies, Music</span>
    
                    </p>
                </div>
            </div>
        );
    }
}

export default Education;