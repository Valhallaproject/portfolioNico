import React from "react";
import Header from "../components/navigation/Header";
import Footer from "../components/footer/Footer";
import Space from "./../asset/spatial.png";
import Spatial1 from "./../asset/spatial1.png";
import Spatial2 from "./../asset/spatial2.png";
import Spatial3 from "./../asset/spatial3.png";
import Spatial4 from "./../asset/spatial4.png";
import "./styles-sites.css";

function space() {
  return (
    <div>
      <Header />
      <div className="site">
        <h1>Space</h1>
        <img src={Space} alt="site Groupomania" className="firstImg" />
        <div className="description">
          <p>
          Intégration d'une maquette multipages via le site Frontend mentor.
          </p>
          <br />
          <p>Technologies utilisées :</p>
          <br />
          <p className="skillsSite">
          - Intégration de la maquette avec React.js CSS
          </p>
        </div>
        <div className="button-site">
          <button>
            <a
              href="https://github.com/Valhallaproject/spatial"
              target="blank"
            >
              Github
            </a>
          </button>
          <button>
            <a
              href="https://spatial-travel.herokuapp.com/"
              target="blank"
            >
              S i t e
            </a>
          </button>
        </div>
        <div className="otherVignette">
        <img src={Spatial1} alt="site Groupomania" className="otherImg"/>
        <img src={Spatial2} alt="site Groupomania" className="otherImg"/>
        <img src={Spatial3} alt="site Groupomania" className="otherImg"/>
        <img src={Spatial4} alt="site Groupomania" className="otherImg"/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default space;
