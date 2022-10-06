import React from "react";
import Photo from "./../../asset/photoprofil.jpg";
import "./aboutMe.css";

function aboutMePage() {
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
        <img src={Photo} alt="" />
      </div>
    </div>
  );
}

export default aboutMePage;
