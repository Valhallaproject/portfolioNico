import React, { useRef} from "react";
import "./App.css";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Apropos from "./pages/apropos";
import Portfolio from "./pages/portfolio";
import Blog from "./pages/blog";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PortfolioSite from "./pages/portfolioSite"
import Groupomania from "./pages/groupomania";
import Space from "./pages/space";
import Ohmyfood from "./pages/ohmyfood";
import Sunnyside from "./pages/sunnyside";
import Culturekids from "./pages/culturekids";
import Orinoco from "./pages/orinoco";
import Volky from "./pages/volky";




function App() {

  let curseurRef = useRef();

  const mousePos = e => {
    curseurRef.current.setAttribute('style', `top:${e.pageY - -10}px; left:${e.pageX - -10}px;`)
  }

  return (
    <div onMouseMove={mousePos} className="App" >
      <div ref={curseurRef} className="curseur-perso">

      </div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="apropos" element={<Apropos />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="blog" element={<Blog />} />
          <Route path="portfolioSite" element={<PortfolioSite />} />
          <Route path="portfolio-groupomania" element={<Groupomania />} />
          <Route path="portfolio-space" element={<Space />} />
          <Route path="portfolio-ohmyfood" element={<Ohmyfood />} />
          <Route path="portfolio-sunnyside" element={<Sunnyside />} />
          <Route path="portfolio-culturekids" element={<Culturekids />} />
          <Route path="portfolio-orinoco" element={<Orinoco />} />
          <Route path="portfolio-volky" element={<Volky />} />


        </Routes>
      </Router>
    </div>
  );
}

export default App;
