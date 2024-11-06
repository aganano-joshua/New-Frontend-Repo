import React from 'react'
import Header from '../../Components/landing/Header'
import Hero from '../../Components/landing/Hero'
import CloudSect from '../../Components/landing/CloudSect'
import CarouselComp from '../../Components/landing/CarouselComp'
import Accordion from '../../Components/landing/Accordion'
import Footer from '../../Components/landing/Footer'
import { assets } from '../../../Images/asset'



const Landing = () => {
  return (
    <div
      className="body max-800:bg-contain max-800:bg-top max-800:bg-no-repeat"
      style={{
        backgroundImage: `url(${assets.bg})`,
        backgroundPosition: "top center",
      }}
    >
      <Header />
      <Hero />
      <CloudSect />
      <CarouselComp />
      <Accordion />
      <Footer />
    </div>
  )
}

export default Landing
