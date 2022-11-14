import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footerLogo">
        <Link to="/">
        <div className="round">
          <p>
            nb<span>.</span>
          </p>
        </div>
        </Link>
        <h2>
          Web
          <br /> développeur
          <br /> full stack
        </h2>
      </div>
      <div className="footerMenu">
        <ul className="footerItems">
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
            className={
              window.location.pathname === "/portfolio" && "active_nav"
            }
          >
            <Link to="/portfolio">Portfolio</Link>
          </li>
        </ul>
      </div>
      <div className="footerContact">
        <p><Link to="/contact">nicolas.bictel@yahoo.com</Link></p>
        <p>07 81 09 43 75</p>
      </div>
    </div>
  );
}

export default Footer;
