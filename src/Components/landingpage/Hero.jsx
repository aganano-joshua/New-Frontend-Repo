import React from 'react'
import { assets } from '../../../Images/asset'

const Hero = () => {
  return (
    <div className='flex flex-row justify-between items-center'>
    <div className="herotext mt-10 w-96 ml-52">
        <h2 className="text-2xl font-bold">
            Unleash your <span style={{color: '#008183'}}>Imagination: Create</span> your own adventure
        </h2>
        <p className="mt-4 ">
            Get ready to bring your wildest ideas to life! Grab your crayons, markers, or pencils and let your creativity soar. Every drawing tells a story—what will yours be?
        </p>
        <div className="btn border-black">
        <button style={{backgroundColor: '#008183', padding: '10px 12px', borderRadius: '15px', color: '#fff', fontWeight: 'bold'}}>Create Art</button>

        </div>

    </div>
    <div className="hero-img flex space-x-0 relative">
      <img src={assets.group} alt=""  className='h-96 w-96 m-0 p-0 absolute' style={{zIndex: '-1'}}/>
      <img src={assets.groups} alt="" className='h-96 w-96 m-0 p-0'/>
    </div>
</div>

  )
}

export default Hero