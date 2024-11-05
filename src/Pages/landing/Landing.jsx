import React from 'react'
import Header from '../../Components/LandingPage/Header'
import Hero from '../../Components/LandingPage/Hero'
import CloudSect from '../../Components/LandingPage/CloudSect'
import CarouselComp from '../../Components/LandingPage/CarouselComp'
import Accordion from '../../Components/LandingPage/Accordion'
import Footer from '../../Components/LandingPage/Footer'
import { assets } from '../../../Images/asset'


const Landing = () => {
  return (
    <div className='body max-800:bg-contain max-800:bg-top max-800:bg-no-repeat'
    
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

