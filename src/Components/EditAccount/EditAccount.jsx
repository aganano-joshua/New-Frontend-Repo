import React from 'react'
import { assets } from '../../../Images/asset'

const EditAccount = () => {
  return (
    <div className='body flex justify-center items-center min-h-screen'>
        <div className="box relative bg-white p-8 rounded-lg shadow-lg w-full max-w-md border-2 border-teal-500">
        <img src={assets.vec} alt="arrow-back"  className='absolute top-6 left-9 cursor-pointer'/>

         {/* Logo */}
         <div className="flex justify-center mb-4">
          <img src={assets.logo} alt="Logo" className="h-10" />
        </div>

        {/* Header Text */}
        <h2 className="text-2xl font-bold text-teal-600 text-center mb-2">Edit your Account</h2>
        <p className="text-center text-gray-500 mb-6">Make Changes to Your Account here</p>





        {/* Input Tags */}
        <div>
            <div className="email">
                <label htmlFor="Name">Name</label>
                <input type="text"  placeholder='John Doe' className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500'/>
            </div>
            <div className="password">
                <label htmlFor="pwd">Password</label>
                <input type="password"  placeholder='********' className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500'/>
            </div>
            <button
            type="submit"
            className="w-full mt-3 py-2 bg-teal-500 text-white rounded-lg font-semibold hover:bg-teal-600 transition duration-200"
          >
           Save Changes
          </button>
        </div>





        </div>
        
    </div>
  )
}

export default EditAccount