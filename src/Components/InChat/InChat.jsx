import React from 'react'
import { assets } from '../../../Images/asset'

const InChat = () => {
  return (
    <div className='body flex justify-center items-center overflow-hidden'>
        <div className="box bg-white p-8 rounded-lg h-96 shadow-lg w-full max-w-md border-2 border-teal-500 overflow-y-auto">
        <img src={assets.vec} alt="arrow-back"  className='absolute top-6 left-9 cursor-pointer'/>

        <div className="chat-cont flex flex-col">
        <div className='flex justify-center items-center gap-6  '>
            <img src={assets.doll} alt="user" className='h-8 w-8 text-center' style={{borderRadius: '50%'}}/>
        <h2 className='font-bold text-2x text-center'>Akorede Joy</h2>
        </div>

        <div className="incoming flex justify-start mt-14 gap-4 relative">
        <img src={assets.doll} alt="user" className='h-8 w-8' style={{borderRadius: '50%'}}/>
        <img src={assets.dolly} alt="user" className='h-32 w-32' />
        
        </div>


        <div className="outgoing flex flex-row-reverse justify-start mt-14 gap-4 relative ">
        <img src={assets.doll} alt="user" className='h-8 w-8' style={{borderRadius: '50%'}}/>
        <img src={assets.dolly} alt="user" className='h-32 w-32' />

        </div>
        </div>
        </div>
    </div>
  )
}

export default InChat