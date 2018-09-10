import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className="about">
                <br></br>
                <p>This webpage was created with React + Redux. The styling is pure css and Flex Wrap is used display the content. The heading was fine tuned with about 7 media screen queries.</p>
                <p>credits:</p>
                <ul>
                    <li>fonts: <a href="https://www.dafont.com/star-jedi.font" target="_blank" rel="noopener noreferrer">Star Jedi </a> and <a href="https://www.wfonts.com/font/itc-serif-gothic-std" target="_blank" rel="noopener noreferrer">ITC Serif Gothic Std</a> </li>
                    <li>intro scroll: <a href="https://codepen.io/donovanh/pen/pJzwEw" target="_blank" rel="noopener noreferrer">Star Wars: The Force Awakens in CSS</a></li>
                    <li>data API: <a href="https://swapi.co/" target="_blank" rel="noopener noreferrer">SWAPI</a></li>
                    <li>website modeled after: <a href="https://starwars-visualguide.com/" target="_blank" rel="noopener noreferrer">Star Wars - visual guide</a></li>

                </ul>
                <p>Star Wars and all associated names and/or images are copyright Lucasfilm Ltd</p>
                
            </div>
        );
    }
}

export default About;