import React from 'react'
import Header from '../components/navigation/Header'
import Footer from '../components/footer/Footer'
import AboutMePage from '../components/aboutMe/aboutMePage'
import AboutMePageText from '../components/aboutMe/aboutMePageText'


function apropos() {
  return (
    <>
        <Header />
        <AboutMePage />
        <AboutMePageText />
        <Footer />
    </>
  )
}

export default apropos