import React, { useState } from 'react';
import { assets } from '../../../Images/asset'; // adjust the path if needed
import { useNavigate } from 'react-router-dom';

const ChangePwd = () => {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate()
  return (
    <div className="body flex justify-center items-center min-h-screen">
      <div className=" relative bg-white p-8 rounded-lg shadow-lg w-full max-w-md border-2 border-teal-500">
      <img src={assets.vec} alt="arrow-back"  className='absolute top-9 left-9 cursor-pointer' onClick={() => navigate('/account')}/>

        
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src={assets.logo} alt="Logo" className="h-10" />
        </div>

        {/* Header Text */}
        <h2 className="text-2xl font-bold text-teal-600 text-center mb-2">Create new password</h2>
        <p className="text-center text-gray-500 mb-6">At least 8 characters</p>

        {/* Password Form */}
        <form>
          <div className="mb-4 relative ">
            <label className="block text-gray-600 text-sm mb-2" htmlFor="newPassword">
              New one
            </label>
            <input
              type={showNewPassword ? "text" : "password"}
              id="newPassword"
              placeholder="●●●●●●●●"
              className=" w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-3 top-3 flex items-center justify-center h-full text-gray-500"
              onClick={() => setShowNewPassword(!showNewPassword)}
            >
              {showNewPassword ? '🙈' : '👁️'}
            </button>
          </div>
          
          <div className="mb-6 relative">
            <label className="block text-gray-600 text-sm mb-2" htmlFor="confirmPassword">
              Confirm new one
            </label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              placeholder="●●●●●●●●"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-3 top-3 flex items-center justify-center h-full text-gray-500"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? '🙈' : '👁️'}
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-teal-500 text-white rounded-lg font-semibold hover:bg-teal-600 transition duration-200"
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePwd;
