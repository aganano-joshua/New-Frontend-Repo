import React from 'react'
import HomeHead from '../../Components/HomePage/HomeHead'
import HeroSection from '../../Components/HomePage/HeroSection'
import HeroIcon from '../../Components/HomePage/HeroIcon'
import { assets } from '../../../Images/asset'

const HomePage = () => {
  return (
    <div className='body'>
        <HomeHead />
        <HeroSection />
        <HeroIcon />
        <img src={assets.share} alt="share" style={{position:'absolute', top: '15%', right: '5%', width: '100px'}} className='max-800:absolute max-800:top-0 max-800:left-24' />
    </div>
  )
}

export default HomePage