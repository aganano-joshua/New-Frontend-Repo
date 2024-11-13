import React from 'react'
import { assets } from '../../../Images/asset'

const Footer = () => {
  return (
    <div className='bg-teal-600 text-white py-8 px-4 mt-5'>
         <div className="max-w-6xl mx-auto flex flex-col items-center space-y-8">
         <div className="text-3xl font-bold">
          Card<span className="text-teal-200">Board</span>

        </div>
        <ul className='flex flex-row justify-between items-center gap-7'>
            <li><a href="#">Draw</a></li>
            <li><a href="#">Paint</a></li>
            <li><a href="#">Faq</a></li>
            <li><a href="#">Learn</a></li>
            <li><a href="#">Support</a></li>
        </ul>
        <div className="flex justify-between items-center gap-7">
            <img src={ assets.x} alt="Twitter" />
            <img src={ assets.fb} alt="facebook" />
            <img src={ assets.ig} alt="instagram" />
            <img src={ assets.ldi} alt="linkedin" />
         </div>
        <div className="flex gap-3">
        <p className='font-bold text-black'>Send Your Feedback : </p>
        <p className='text-black'> cardboard@Atti</p>
        </div>
        <p>© 2024 Cardboard All rights reserved.</p>
         </div>
         
    </div>
  )
}

export default Footer