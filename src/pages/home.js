import React from 'react'
import AboutMe from '../components/aboutMe/aboutMe'
import Contact from '../components/contact/Contact'
import Divider from '../components/divider/divider'
import Header from '../components/navigation/Header'
import Portfolio from '../components/portfolio/portfolio'
import Footer from '../components/footer/Footer'

function home() {
  return (
    <div>
        <Header />
        <AboutMe />
        <Divider />
        <Portfolio />
        <Divider />
        <Contact />
        <Footer />
    </div>
  )
}

export default home