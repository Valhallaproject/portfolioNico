import React from "react";
import "./aboutMe.css";

function aboutMe() {
  return (
    <div className="aboutme">
      <div className="left" data-scroll-container >
        <h1 data-scroll data-scroll-speed="5" data-scroll-position="top">
          Web</h1>
          <h1 data-scroll data-scroll-speed="3" data-scroll-position="top" > développeur</h1>
          <h1 data-scroll data-scroll-speed="1" data-scroll-position="top" > full stack
        </h1>
        <div className="aboutRound"></div>
      </div>
      <div className="right">
        <p>
          Je réalise vos sites web ou intégre vos maquettes<span> .</span>
          <br />
          <br />
          Je vous accompagne dans la réalisation de vos projets<span> .</span>
          <br />
          <br />
          Mais ne me croyez pas sur parole, consultez mon
          <span>
            <a href="/portfolio"> portfolio</a>
          </span>
          <span> .</span>
        </p>
      </div>
    </div>
  );
}

export default aboutMe;
