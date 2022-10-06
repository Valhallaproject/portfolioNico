import React from "react";
import Header from "../components/navigation/Header";
import Footer from "../components/footer/Footer";
import Reservia from "./../asset/reservia.png";
import Reservia1 from "./../asset/reservia1.png";
import Reservia2 from "./../asset/reservia2.png";
import "./styles-sites.css";

function reservia() {
  return (
    <div>
      <Header />
      <div className="site">
        <h1>Reservia</h1>
        <img src={Reservia} alt="site Groupomania" className="firstImg" />
        <div className="description">
          <p>
            Intégration d'une maquette dans le cadre du projet
            1 de la formation Développeur Web OpenClassrooms.
          </p>
          <br />
          <p>Technologies utilisées :</p>
          <br />
          <p className="skillsSite">
            - Intégration en HTML CSS
            <br />
            <br />
            <br />
            - Responsive design
          </p>
        </div>
        <div className="button-site">
          <button>
            <a
              href="https://github.com/Valhallaproject/NicolasBictel_2_04052021"
              target="blank"
            >
              Github
            </a>
          </button>
          <button>
            <a
              href="https://valhallaproject.github.io/NicolasBictel_2_04052021/"
              target="blank"
            >
              S i t e
            </a>
          </button>

        </div>
        <div className="otherVignette">
        <img src={Reservia1} alt="site Groupomania" className="otherImg"/>
        <img src={Reservia2} alt="site Groupomania" className="otherImg"/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default reservia;
