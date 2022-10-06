import React from "react";
import { Link } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Groupomania from "./../../asset/groupomania.png";
import Space from "./../../asset/spatial.png";
import Ohmyfood from "./../../asset/ohmyfood.png";
import Sunnyside from "./../../asset/sunnyside.png";
import CultureKids from "./../../asset/cultureKids.png";
import Orinoco from "./../../asset/orinoco.png";
import "./portfolio.css";

const handleDragStart = (e) => e.preventDefault();

function portfolio() {

  const items = [
    <Link to="/portfolio">
      <img
        src={Groupomania}
        alt="Groupomania"
        onDragStart={handleDragStart}
      ></img>
    </Link>,
    <Link to="/portfolio">
      <img
        src={Space}
        alt="Space"
        onDragStart={handleDragStart}
      />
    </Link>,
    <Link to="/portfolio">
      <img
        src={Ohmyfood}
        alt="Ohmyfood"
        onDragStart={handleDragStart}
      />
    </Link>,
    <Link to="/portfolio">
      <img
        src={Sunnyside}
        alt="Sunnyside"
        onDragStart={handleDragStart}
      />
    </Link>,
    <Link to="/portfolio">
      <img
        src={CultureKids}
        alt="CultureKids"
        onDragStart={handleDragStart}
      />
    </Link>,
    <Link to="/portfolio">
      <img
        src={Orinoco}
        alt="Orinoco"
        onDragStart={handleDragStart}
      />
    </Link>,
  ];

  return (
    <div>
      <h2>
        portfolio<span>.</span>
      </h2>
      <div className="carousel">
        <AliceCarousel
          responsive={{
            0: {
              items: 1,
            },
            1024: {
              items: 2,
            },
          }}
          //mouseTracking
          items={items}
        />
      </div>
    </div>
  );
}

export default portfolio;
