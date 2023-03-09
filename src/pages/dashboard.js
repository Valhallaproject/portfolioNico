import React from "react";
import Header from "../components/navigation/Header";
import Footer from "../components/footer/Footer";
import Dashboard from "./../asset/dashboard.png";
import Dashboard1 from "./../asset/dashboard1.png";
import "./styles-sites.css";

function dashboard() {
  return (
    <div>
      <Header />
      <div className="site">
        <h1>Social dashboard</h1>
        <img src={Dashboard} alt="site Groupomania" className="firstImg" />
        <div className="description">
          <p>
            Réalisation d'un dashboard (social) avec mode sombre/clair
          </p>
          <br />
          <p>Technologies utilisées :</p>
          <br />
          <p className="skillsSite">
            - Réalisation du dashboard avec React.js
          </p>
        </div>
        <div className="button-site">
          <button>
            <a
              href="https://github.com/Valhallaproject/dashboard"
              target="blank"
            >
              Github  
            </a>
          </button>
          <button>
            <a
              href="https://dashboard-alpha-red.vercel.app/"
              target="blank"
            >
              S i t e
            </a>
          </button>

        </div>
        <div className="otherVignette">
        <img src={Dashboard} alt="site dashboard" className="otherImg"/>
        <img src={Dashboard1} alt="site dashboard" className="otherImg"/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default dashboard;