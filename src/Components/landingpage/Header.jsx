import React from 'react'
import { assets } from '../../../Images/asset'

const Header = ({}) => {
    return (
      <div className='flex flex-row gap justify-between items-center h-11 px-14 max-800:px-0 max-800:h-30' >
        <div>
          <img src={assets.logo} alt="Company Logo" className='w-8 h-8'/>
        </div>
        <ul className='flex flex-row gap-20 justify-between items-center h-70px max-800:hidden'>
            <li><a href="#home" className='font-bold'>Home</a></li>
            <li><a href="#learn" className='font-bold'>Learn</a></li>
            <li><a href="#faq" className='font-bold'>FAQ</a></li>
            <li><a href="#about" className='font-bold'>About Us</a></li>
        </ul>

        <div className='flex flex-row justify-between items-center gap-4'>
            <button style={ {backgroundColor: "#008183", padding: "10px 15px", borderRadius: "10px", color: "white", fontWeight: "bold"} }>Sign Up</button>
            <button style={ {border: "1px solid #008183", color: "#000", padding: "10px 15px", borderRadius: "10px", fontWeight: "bold"} }>Log In</button>
            <img src={assets.music} alt="music Logo" className='w-8 h-8'/>
        </div>
      </div>
    );
  };
  
  export default Header;
  

; 
