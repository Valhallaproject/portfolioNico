import React from 'react'
import Header from '../components/navigation/Header'
import Footer from '../components/footer/Footer'
import AboutMePage from '../components/aboutMe/aboutMePage'
import Contact from '../components/contact/Contact'


function contact() {
  return (
    <>
        <Header />
        <AboutMePage />
        <Contact />
        <Footer />
    </>
  )
}

export default contact