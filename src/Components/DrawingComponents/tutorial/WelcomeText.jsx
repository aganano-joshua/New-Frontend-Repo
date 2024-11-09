import { Button } from '@/Components/ui/button'
import React from 'react'

const WelcomeText = ({onClick}) => {
  return (
    <div className='absolute top-0 w-full h-full flex justify-center items-center flex-col font-bold bg-[#0000006d] z-10'>
      <div className='flex flex-col w-[20rem] h-[15rem] rounded-[1rem] justify-center items-center bg-white'>
        <p className='flex flex-wrap  w-[15rem] text-center text-[#096566]'>Hey Art Buddies !! <br /> Welcome To Carbord App to get Started Please take a Tour</p>
        <Button className='text-[0.7rem] w-[4.5rem] h-[2rem] mt-[20px] bg-[#096566]' onClick={onClick}>Take A Tour</Button>
      </div>
    </div>
  )
}

export default WelcomeText