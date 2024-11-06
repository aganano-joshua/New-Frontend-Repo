import React from 'react'
import { assets } from '../../../Images/asset'

const  CloudSect= () => {
  return (
    <div className="max-w-[800px] mx-auto flex gap-5 items-center md:flex-row md:justify-around">
  <img src={assets.draw} alt="draw" className='w-28' />
  <img src={assets.sketch} alt="sketch" className='w-28'/>
  <img src={assets.paint} alt="paint" className='w-28'/>
</div>

  )
}

export default CloudSect