import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../../../Images/asset'

const Delete = ({ isVisible, onClose }) => {
    const navigate = useNavigate()
    const handleYesClick = () => {
        navigate('/dashboard');
        // window.
    }
    if (!isVisible) return null;
  return (
    <div className='flex p-[10px] absolute bottom-[10rem] right-[40px] z-50 flex-col bg-[#096566] w-[12rem]' style={{borderRadius: "20px"}}>
        <p className='text-[#9BDDED] text-[1.2rem]' style={{fontFamily: "Irish Grover"}}>Clear Drawing?</p>
        <div className='flex flex-row items-center justify-center gap-[25px]'>
        <button onClick={onClose}><img src={assets.delCancelBtn} className='w-[4rem]'/></button>
        <button onClick={handleYesClick}><img src={assets.confirmDelBtn} className='w-[4rem]'/></button>
        </div>
    </div>
  )
}

export default Delete