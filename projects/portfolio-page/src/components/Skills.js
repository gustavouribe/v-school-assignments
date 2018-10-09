import React, { Component } from 'react';
import bootStrap from '../images/skills/bootStrap.png'
import css from '../images/skills/css.svg'
import html from '../images/skills/html.svg'
import javaScript from '../images/skills/javaScript.svg'
import lightRoom from '../images/skills/lightRoom.svg'
import linuxMint from '../images/skills/linuxMint.png'
import materialDesign from '../images/skills/materialDesign.svg'
import node from '../images/skills/node.svg'
import photoShop from '../images/skills/photoShop.svg'
import premier from '../images/skills/premier.svg'
import react from '../images/skills/react.svg'
import VSCode from '../images/skills/VSCode.png'

class Skills extends Component {
    render() {
        return (
            <div className="skills">
             
                <p>
                    <h3>preferred environment:</h3>
                    <img className="skillsImages" src={linuxMint} alt="Linux Mint"/>
                    <img className="skillsImages" src={react} alt="React"/>
                    <img className="skillsImages" src={VSCode} alt="VS Code"/>
                </p>
                <p>
                    <h3>web dev toolkit:</h3>
                    <img className="skillsImages" src={html} alt="html"/>
                    <img className="skillsImages" src={css} alt="css"/>
                    <img className="skillsImages" src={javaScript} alt="Java Script"/>
                    <img className="skillsImages" src={node} alt="Node.js"/>
                </p>

                <p>
                    <h3>design skills:</h3>
                    {/* <img className="skillsImages" src={bootStrap} alt="Boot Strap"/>
                    <img className="skillsImages" src={materialDesign} alt="Material Design"/> */}
                    <img className="skillsImages" src={photoShop} alt="Adobe Photoshop"/>
                    <img className="skillsImages" src={lightRoom} alt="Adobe Light Room"/>
                    <img className="skillsImages" src={premier} alt="Premier"/> 
                </p>

            </div>
        );
    }
}

export default Skills

