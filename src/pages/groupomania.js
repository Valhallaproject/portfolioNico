import React from "react";
import Header from "../components/navigation/Header";
import Footer from "../components/footer/Footer";
import Groupomania from "./../asset/groupomania.png";
import Groupo1 from "./../asset/groupo1.png";
import Groupo2 from "./../asset/groupo2.png";
import Groupo3 from "./../asset/groupo3.png";
import Groupo4 from "./../asset/groupo4.png";
import "./styles-sites.css";

function groupomania() {
  return (
    <div>
      <Header />
      <div className="site">
        <h1>Groupomania</h1>
        <img src={Groupomania} alt="site Groupomania" className="firstImg" />
        <div className="description">
          <p>
            Réalisation d'un réseau social d'entreprise dans le cadre du projet
            7 de la formation Développeur Web OpenClassrooms.
          </p>
          <br />
          <p>Technologies utilisées :</p>
          <br />
          <p className="skillsSite">
            - Réalisation du frontend avec React.js CSS
            <br />
            <br />
            <br />
            - Réalisation d'une API avec Express.js
            <br />
            <br />
            <br />
            - Réalisation d'un server avec Node.js
            <br />
            <br />
            <br />- Réalisation de la base de données avec MySql
          </p>
        </div>
        <div className="button-site">
          <button>
            <a
              href="https://github.com/Valhallaproject/NicolasBictel_7_02082021"
              target="blank"
            >
              Github
            </a>
          </button>
        </div>
        <div className="otherVignette">
        <img src={Groupo1} alt="site Groupomania" className="otherImg"/>
        <img src={Groupo2} alt="site Groupomania" className="otherImg"/>
        <img src={Groupo3} alt="site Groupomania" className="otherImg"/>
        <img src={Groupo4} alt="site Groupomania" className="otherImg"/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default groupomania;
