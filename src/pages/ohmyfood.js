import React from "react";
import Header from "../components/navigation/Header";
import Footer from "../components/footer/Footer";
import Ohmyfood from "./../asset/ohmyfood.png";
import Omf1 from "./../asset/omf1.png";
import Omf2 from "./../asset/omf2.png";
import Omf3 from "./../asset/omf3.png";
import Omf4 from "./../asset/omf4.png";
import "./styles-sites.css";

function ohmyfood() {
  return (
    <div>
      <Header />
      <div className="site">
        <h1>Ohmyfood</h1>
        <img src={Ohmyfood} alt="site Groupomania" className="firstImg" />
        <div className="description">
          <p>
          intégration d'une maquette pour l'application OhMyFood dans le cadre du projet 3 de la formation Développeur Web OpenClassrooms.
          </p>
          <br />
          <p>Technologies utilisées :</p>
          <br />
          <p className="skillsSite">
          - Intégration de la maquette avec HTML / SASS
          </p>
        </div>
        <div className="button-site">
          <button>
            <a
              href="https://github.com/Valhallaproject/NicolasBictel_3_06052021"
              target="blank"
            >
              Github
            </a>
          </button>
          <button>
            <a
              href="https://valhallaproject.github.io/NicolasBictel_3_06052021/"
              target="blank"
            >
              S i t e
            </a>
          </button>
        </div>
        <div className="otherVignette">
        <img src={Omf1} alt="site Groupomania" className="otherImg"/>
        <img src={Omf2} alt="site Groupomania" className="otherImg"/>
        <img src={Omf3} alt="site Groupomania" className="otherImg"/>
        <img src={Omf4} alt="site Groupomania" className="otherImg"/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ohmyfood;
