import React, { Component } from "react";

import starWhores from "../images/websites/starwhores.png";
import ghettoStopWatch from "../images/websites/ghettoStopWatch.png";
import wineFood from "../images/websites/wineFood.png";
import zenGarden from "../images/websites/zenGarden.png";

const Content = () => {
  return (
    <div className="contentWrapper">
      <div className="contentBlock">
        <p>
          <a
            href="http://starwhores.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="contentImages" src={starWhores} alt="Star Whores" />
          </a>
          <br />
          <h3>Star Whores: </h3>
          <span>the ultimate Star Wars database</span>
          <br />
          <span>React front end, SWAPI api</span>
        </p>
      </div>
      <div className="contentBlock">
        <p>
          <a
            href="http://ghettostopwatch.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="contentImages"
              src={ghettoStopWatch}
              alt="Ghetto stop watch"
            />
          </a>
          <br />
          <h3>Ghetto stop watch</h3>
          <span>modeled from Google stop watch</span>
          <br />
          <span>React-Redux app</span>
        </p>
      </div>
      <div className="contentBlock">
        <p>
          <a
            href="http://ghettostopwatch.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="contentImages" src={wineFood} alt="Wine + Food" />
          </a>
          <br />
          <h3>Wine + Food</h3>
          <span>Wine pairing database tool</span>
          <br />
          <span>MERN stack app</span>
        </p>
      </div>
      <div className="contentBlock">
        <p>
          <a
            href="http://csszengarden.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="contentImages"
              src={zenGarden}
              alt="CSS Zen Garden"
            />
          </a>
          <br />
          <h3>CSS Zen Garden</h3>
          <span>csszengarden.com recreated</span>
          <br />
          <span>pure html + css</span>
        </p>
      </div>
    </div>
  );
};

export default Content;
