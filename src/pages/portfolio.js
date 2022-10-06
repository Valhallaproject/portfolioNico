import React from 'react'
import Header from '../components/navigation/Header'
import Footer from '../components/footer/Footer'
import AboutMe from '../components/aboutMe/aboutMe'
import PortfolioPage from '../components/portfolio/portfolioPage'

function portfolio() {
  return (
    <>
        <Header />
        <AboutMe />
        <PortfolioPage />
        <Footer />
    </>
  )
}

export default portfolio