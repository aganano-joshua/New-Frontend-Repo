import React from 'react'
import { assets } from '../../../Images/asset'

const HomeHead = () => {
  return (
    <div className="flex flex-row justify-between items-center p-5  max-800:items-start max-800:gap-6 select-none">
      <div>
        <img src={assets.logo} alt="Company Logo" className="w-20 h-20" draggable={false}/>
      </div>

      {/* Add both `mt-8` and `text-center` for better responsiveness */}
      <h2 className="max-800:absolute max-800:top-56 max-800:left-46 max-800:text-center" style={{ fontSize: '50px', color: 'black', fontWeight: 'bolder' }}>
        Let's get <span style={{ color: '#008183' }}>Creative</span>
      </h2>

      <div className="flex flex-row justify-between items-center gap-2 max-800:mt-4">
        <img src={assets.doll} alt="doll logo" className="w-8 h-8" style={{ borderRadius: '50%' }} draggable={false}/>
        <div className="name" style={{ border: '1px solid #008183', padding: '10px 12px', borderRadius: '20px', fontWeight: 'bolder' }}>
          hi, Julia
        </div>
        <img src={assets.music} alt="music logo" className="w-10 h-10" draggable={false}/>
      </div>
    </div>
  )
}

export default HomeHead
