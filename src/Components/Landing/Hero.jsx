import React from 'react'
import { assets } from '../../../Images/asset'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const navigate = useNavigate();

  const createArt = () => {
    navigate("/create-art")
  }
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center mt-11 max-w-[800px] mx-auto px-4 overflow-hidden">
  <div className="herotext mt-10 md:mt-0 w-full  md:ml-10">
    <h2 className="text-3xl md:text-5xl font-bold overflow-hidden">
      Unleash your <span style={{ color: '#008183' }}>Imagination: Create</span> your own adventure
    </h2>
    <p className="mt-4 text-base md:text-lg">
      Get ready to bring your wildest ideas to life! Grab your crayons, markers, or pencils and let your creativity soar. Every drawing tells a story—what will yours be?
    </p>
    <div className="btn w-full mt-3 flex items-center justify-center">
      <button
        style={{
          backgroundColor: '#008183',
          padding: '10px 12px',
          borderRadius: '20px',
          color: '#fff',
          fontWeight: 'bold'
        }}
        onClick={createArt}
      >
        Create Art
      </button>
    </div>
  </div>
  <div className="hero-img flex space-x-0 relative mt-8 md:mt-0">
    <img
      src={assets.group}
      alt=""
      className="h-64 w-64 md:h-96 md:w-96 m-0 p-0 max-800:hidden md:block"
      
    />
    <img
      src={assets.groups}
      alt=""
      className="h-64 w-64 md:h-96 md:w-96 m-0 p-0 max-800:hidden md:block"
    />
  </div>
</div>
  <div className='box flex flex-col gap-4 p-4 justify-center items-center text-2xl' style={{backgroundColor: '#008183', fontWeight: 'bold', color: '#fff'}}>
    <h4>40,000+ Users are Satisfied with Cardboard</h4>
    
    <button style={{backgroundColor: '#15DEE1', color: '#fff', padding: '10px 12px', borderRadius: '20px'}}> Join Now </button>
    
  </div>
</div>

  )
}

export default Hero