import React from 'react'
import Header from '../../Components/LandingPage/Header'
import Hero from '../../Components/LandingPage/Hero'

const Landing = () => {
  return (
    <div className='max-800:bg-contain bg-no-repeat bg-center w-full' style={{backgroundImage: "url( Images/background.svg)", backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh'}}>
     <Header />
     <Hero />
    </div>
  )
}

export default Landing