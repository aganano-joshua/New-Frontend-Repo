import React from 'react'
import { assets } from '../../../Images/asset'
import Header from '../../Components/landingpage/Header'
import Hero from '../../Components/landingpage/Hero'





const HeroSection = () => {
    

  return (
    <div style={{backgroundImage: `url(${assets.bg})`, width: "100%", backgroundPosition: "center", backgroundSize: "cover", height: "100vh"}}>
        <Header/>
        <Hero/>
    </div>
  )
}

export default HeroSection