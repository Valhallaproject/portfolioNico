import React from "react";
import Header from "../components/navigation/Header";
import Footer from "../components/footer/Footer";
import Volky from "./../asset/volky.png";
import Volky1 from "./../asset/volky1.png";
import Volky2 from "./../asset/volky2.png";
import Volky3 from "./../asset/volky3.png";
import Volky4 from "./../asset/volky4.png";
import "./styles-sites.css";

function volky() {
  return (
    <div>
      <Header />
      <div className="site">
        <h1>Volky</h1>
        <img src={Volky} alt="site Groupomania" className="firstImg" />
        <div className="description">
          <p>
            Intégration d'une maquette Figma pour Volky
          </p>
          <br />
          <p>Technologies utilisées :</p>
          <br />
          <p className="skillsSite">
            - Réalisation du frontend avec React.js CSS
          </p>
        </div>
        <div className="button-site">
          <button>
            <a
              href="https://github.com/Valhallaproject/volky"
              target="blank"
            >
              Github
            </a>
          </button>
        </div>
        <div className="otherVignette">
        <img src={Volky1} alt="site Groupomania" className="otherImg"/>
        <img src={Volky2} alt="site Groupomania" className="otherImg"/>
        <img src={Volky3} alt="site Groupomania" className="otherImg"/>
        <img src={Volky4} alt="site Groupomania" className="otherImg"/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default volky;
