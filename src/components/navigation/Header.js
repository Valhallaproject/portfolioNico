import React, { useState } from "react";
import { Link } from "react-router-dom";
import Burger from "./../../asset/menu.png";
import Close from "./../../asset/close-white.png";
import "./Header.css";

const Navbar = () => {
  const [mobileNavIcon, setMobileNavIcon] = useState(Burger);

  const toggleMobileNav = () => {
    let mobileNav = document.querySelector(".navItems");
    mobileNav.classList.toggle("active");
    mobileNav.classList.contains("active")
      ? setMobileNavIcon(Close)
      : setMobileNavIcon(Burger);
  };

  return (
    <nav>
      <Link to="/">
      <div className="logo">
        <p>
          nb<span>.</span>
        </p>
      </div>
      </Link>
      <div className="navItems">
        <ul className="items">
          <li className={window.location.pathname === "/" && "active_nav"}>
            <Link to="/">Home</Link>
          </li>
          <li
            className={window.location.pathname === "/apropos" && "active_nav"}
          >
            <Link to="/apropos">A propos</Link>
          </li>
          <li
            className={window.location.pathname === "/contact" && "active_nav"}
          >
            <Link to="/contact">Contact</Link>
          </li>
          <li
            className={window.location.pathname === "/portfolio" && "active_nav"}
          >
            <Link to="/portfolio">Portfolio</Link>
          </li>
        </ul>
      </div>
      <button className="mobilNav">
        <img
          onClick={toggleMobileNav}
          src={mobileNavIcon}
          alt="mobileNavIcon"
        />
      </button>
    </nav>
  );
};

export default Navbar;
