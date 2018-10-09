import React from "react";
import cholo20 from "../images/about/cholo20.jpg";

const About = () => {
  return (
    <div className="about">
      <a
        href="https://open.spotify.com/artist/38EiJG95oYwu4TuTsgtHHa#_=_"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="aboutImg" src={cholo20} alt="cholo20" />
      </a>

      <p>
        <h2>Yo what's up.</h2> When I'm not coding, I'm making beats and
        rapping. My love for music led me down a path in contemporary classical
        music composition, Argenine tango, and Salsa.
      </p>
      <p className="pPad">
        During my studies at CalArts, I took a webdesign class to build my own
        website and ended up building a few for my friends. A few years later, I
        went to V School's full stack program to furthur my skills in web
        development.
      </p>
      <p>
        The mixture of art and problem solving is what drives me. I love
        creating designs that are clean, attractive, and are unique to the
        brand.{" "}
        <h4>
          <b>Let's get this money.</b>
        </h4>
      </p>
    </div>
  );
};

export default About;
