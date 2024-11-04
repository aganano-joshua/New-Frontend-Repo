import React from 'react'
import HomeHead from '../../components/HomePage/HomeHead'
import HeroSection from '../../components/HomePage/HeroSection'
import HeroIcon from '../../components/HomePage/HeroIcon'
import { assets } from '../../../Images/asset'

const HomePage = () => {
  return (
    <div className='max-800:bg-contain bg-no-repeat bg-center w-full' style={{backgroundImage: "url( Images/background.svg)", backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh'}}>
        <HomeHead />
        <HeroSection />
        <HeroIcon />
        <img src={assets.share} alt="share" style={{position:'absolute', top: '15%', right: '5%', width: '100px'}} className='max-800:absolute max-800:top-0 max-800:left-24' />
    </div>
  )
}

export default HomePage