import React from "react";
import Groupomania from "./../../asset/groupomania.png";
import Space from "./../../asset/spatial.png";
import Ohmyfood from "./../../asset/ohmyfood.png";
import Sunnyside from "./../../asset/sunnyside.png";
import CultureKids from "./../../asset/cultureKids.png";
import Orinoco from "./../../asset/orinoco.png";
import Volky from "./../../asset/volky.png";
import Reservia from "./../../asset/reservia.png";
import Dashboard from "./../../asset/dashboard.png"
import "./portfolioPage.css";
import { Link } from "react-router-dom";

function portfolioPage() {
  return (
    <div className="container">
      <div className="vignette">
        <Link to="/portfolio-groupomania">
          <img src={Groupomania} alt="site Groupomania" />
        </Link>
        <h2>Groupomania</h2>
      </div>
      <div className="vignette">
        <Link to="/portfolio-space">
          <img src={Space} alt="site Space" />
        </Link>
        <h2>Space</h2>
      </div>
      <div className="vignette">
        <Link to="/portfolio-ohmyfood">
          <img src={Ohmyfood} alt="site OhMyFood" />
        </Link>
        <h2>OhMyFood</h2>
      </div>
      <div className="vignette">
        <Link to="/portfolio-sunnyside">
          <img src={Sunnyside} alt="site SunnySide" />
        </Link>
        <h2>Sunnyside</h2>
      </div>
      <div className="vignette">
        <Link to="/portfolio-culturekids">
          <img src={CultureKids} alt="site CultureKids" />
        </Link>
        <h2>CultureKids</h2>
      </div>
      <div className="vignette">
        <Link to="/portfolio-orinoco">
          <img src={Orinoco} alt="site Orinoco" />
        </Link>
        <h2>Orinoco</h2>
      </div>
      <div className="vignette">
        <Link to="/portfolio-volky">
          <img src={Volky} alt="site Volky" />
        </Link>
        <h2>Volky</h2>
      </div>
      <div className="vignette">
        <Link to="/portfolio-reservia">
          <img src={Reservia} alt="site reservia" />
        </Link>
        <h2>Reservia</h2>
      </div>
      <div className="vignette">
        <Link to="/portfolio-dashboard">
          <img src={Dashboard} alt="site Social Dashboard" />
        </Link>
        <h2>Social Dashboard</h2>
      </div>

    </div>
  );
}

export default portfolioPage;
