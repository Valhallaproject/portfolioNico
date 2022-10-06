import React from 'react'
import { useLocation } from "react-router-dom";
import Header from '../components/navigation/Header'
import Footer from '../components/footer/Footer'


function portfolioSite() {
const location = useLocation();
  const state = location.state.site;
  return (
    <div>
        <Header />
        <div className="title">
          <div className="text">
            <h1>{state.title}</h1>
            <p>{state.description}</p>
          </div>
            
            <img src={state.image1} alt=""/>
        </div>
        <Footer />
    </div>

  )
}

export default portfolioSite