import React from "react";
import Header from "../components/navigation/Header";
import Footer from "../components/footer/Footer";
import Orinoco from "./../asset/orinoco.png";
import Orinoco1 from "./../asset/orinoco1.png";
import Orinoco2 from "./../asset/orinoco2.png";
import Orinoco3 from "./../asset/orinoco3.png";
import Orinoco4 from "./../asset/orinoco4.png";
import "./styles-sites.css";

function orinoco() {
  return (
    <div>
      <Header />
      <div className="site">
        <h1>Orinoco</h1>
        <img src={Orinoco} alt="site Groupomania" className="firstImg" />
        <div className="description">
          <p>
            Réalisation du frontend pour le e-commerce Orinoco dans le cadre du
            projet 5 de la formation Développeur Web OpenClassrooms.
          </p>
          <br />
          <p>Technologies utilisées :</p>
          <br />
          <p className="skillsSite">
            - Intégration des maquettes avec HTML/CSS
            <br />
            <br />
            <br />- Interaction avec le backend en JavaScript
          </p>
        </div>
        <div className="button-site">
          <button>
            <a
              href="https://github.com/Valhallaproject/NicolasBictel_5_26052021"
              target="blank"
            >
              Github
            </a>
          </button>
        </div>
        <div className="otherVignette">
          <img src={Orinoco1} alt="site Groupomania" className="otherImg" />
          <img src={Orinoco2} alt="site Groupomania" className="otherImg" />
          <img src={Orinoco3} alt="site Groupomania" className="otherImg" />
          <img src={Orinoco4} alt="site Groupomania" className="otherImg" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default orinoco;
