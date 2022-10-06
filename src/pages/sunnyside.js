import React from "react";
import Header from "../components/navigation/Header";
import Footer from "../components/footer/Footer";
import Sunnyside from "./../asset/sunnyside.png";
import Sunny1 from "./../asset/sunny1.png";
import Sunny2 from "./../asset/sunny2.png";
import Sunny3 from "./../asset/sunny3.png";
import Sunny4 from "./../asset/sunny4.png";
import "./styles-sites.css";

function sunnyside() {
  return (
    <div>
      <Header />
      <div className="site">
        <h1>Sunnyside</h1>
        <img src={Sunnyside} alt="site Groupomania" className="firstImg" />
        <div className="description">
          <p>
            Intégration d'une maquette responsive via le site Frntend Mentor
          </p>
          <br />
          <p>Technologies utilisées :</p>
          <br />
          <p className="skillsSite">
            - réalisation de la maquette en HTML CSS et JS
          </p>
        </div>
        <div className="button-site">
          <button>
            <a
              href="https://github.com/Valhallaproject/sunnyside"
              target="blank"
            >
              Github
            </a>
          </button>
          <button>
            <a
              href="https://valhallaproject.github.io/sunnyside/"
              target="blank"
            >
              S i t e
            </a>
          </button>

        </div>
        <div className="otherVignette">
        <img src={Sunny1} alt="site Groupomania" className="otherImg"/>
        <img src={Sunny2} alt="site Groupomania" className="otherImg"/>
        <img src={Sunny3} alt="site Groupomania" className="otherImg"/>
        <img src={Sunny4} alt="site Groupomania" className="otherImg"/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default sunnyside;
