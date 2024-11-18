import React from 'react'
import { assets } from '../../../Images/asset'

const InApp = () => {
  return (
    <div className='body max-800:bg-contain flex flex-col justify-start py-5'>
        <img src={assets.vec} alt="arrow-back"  className='absolute top-9 left-9 cursor-pointer'/>

        <div className="inapp-content w-full px-11 text-center">
           <div className="inapp-head flex-col flex justify-center items-center gap-3 px-16">
           <h4 className='font-bold text-2xl text-center'>Share With Friends</h4>
           <input type="search" placeholder='Search with Friends Name' className='w-full px-3 py-2 border-2 border-black outline-none'/>
           </div>

           <div className="inapp-friends mt-5">
            <div className='friends-cont flex flex-row justify-start items-center gap-4 border-b-2 border-black py-4'>
                <div className="status rounded-full bg-green-600 h-2 w-2" style={{borderRadius: '50%'}}></div>
                <div className="profile-cont flex justify-start items-center gap-3">
                    <div className="img bg-white" style={{borderRadius: '50%'}}>
                    <img src={assets.users} alt="User Profile" className='h-14 w-14' />
                    </div>
                    <h4 className='text-2x font-bold'>John Doe (You)</h4>
                </div>
            </div>
            
           </div>
        </div>
    </div>
  )
}

export default InApp