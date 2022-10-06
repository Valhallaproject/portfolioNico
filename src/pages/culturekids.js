import React from "react";
import Header from "../components/navigation/Header";
import Footer from "../components/footer/Footer";
import Culturekids from "./../asset/cultureKids.png";
import Culture1 from "./../asset/culture1.png";
import Culture2 from "./../asset/culture2.png";
import Culture3 from "./../asset/culture3.png";
import Culture4 from "./../asset/culture4.png";
import "./styles-sites.css";

function culturekids() {
  return (
    <div>
      <Header />
      <div className="site">
        <h1>CultureKids</h1>
        <img src={Culturekids} alt="site Groupomania" className="firstImg" />
        <div className="description">
          <p>
            Réalisation de templates pour le CMS Quintyss
          </p>
          <br />
          <p>Technologies utilisées :</p>
          <br />
          <p className="skillsSite">
            - Réalisation des templates avec Next.js et Tailwind
            <br />
            <br />
            <br />
            - Intégration des pages sur AWS
            <br />
            <br />
            <br />
            - Intégration de Widgets
          </p>
        </div>
        <div className="button-site">
          <button>
            <a
              href="https://culturekids.quintyss.com/home"
              target="blank"
            >
              S i t e
            </a>
          </button>
          <button>
            <a
              href="https://quintyss.com/"
              target="blank"
            >
              Quintyss
            </a>
          </button>

        </div>
        <div className="otherVignette">
        <img src={Culture1} alt="site Groupomania" className="otherImg"/>
        <img src={Culture2} alt="site Groupomania" className="otherImg"/>
        <img src={Culture3} alt="site Groupomania" className="otherImg"/>
        <img src={Culture4} alt="site Groupomania" className="otherImg"/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default culturekids;
