import React, { useState } from 'react'
import { assets } from '../../../Images/asset'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL

const EditAccount = () => {
  const navigate = useNavigate()
  const [name, setName] = useState();
  const [loading, setLoading] = useState();

  const formSubmit = async (e) => {
    e.preventDefault();
    // const userDetails = {
      const email = localStorage.getItem("verifiedEmail")
      console.log(email)
      console.log(name)
    //   // password: password,
    // // }
    // const sendPassword = ApiService.savePassword({email, password});
    setLoading(true)
    try {
      const response = await axios.patch(
        `${API_BASE_URL}/api/v1/auth/save-new-name`,
        null,
        {
          params: { email: email, name: name },
        }
      )
      console.log(response)
      setLoading(false)
      // window.location.href = '/dashboard'
      console.log('Redirecting........')
      navigate('/account');
    } catch (error) {
      if (error.response) {
        console.log(error)
      }
    } finally {
      setLoading(false)
    }

  }
  return (
    <div className='body flex justify-center items-center min-h-screen'>
        <div className="box relative bg-white p-8 rounded-lg shadow-lg w-full max-w-md border-2 border-teal-500">
        <img src={assets.vec} alt="arrow-back"  className='absolute top-6 left-9 cursor-pointer' onClick={() => navigate('/account')}/>

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
                <input type="text"  placeholder='John Doe' className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500' value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            {/* <div className="password">
                <label htmlFor="pwd">Password</label>
                <input type="password"  placeholder='********' className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500'/>
            </div> */}
            <button
            type="submit"
            className="w-full mt-3 py-2 bg-teal-500 text-white rounded-lg font-semibold hover:bg-teal-600 transition duration-200"
            onClick={formSubmit}
            disabled={loading}
          >
           {loading ? 'Loading .....' : 'Save Changes'}
          </button>
        </div>





        </div>
        
    </div>
  )
}

export default EditAccount