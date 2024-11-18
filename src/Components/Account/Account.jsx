import React from 'react'
import { assets } from '../../../Images/asset' // Adjust path as necessary
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const navigate = useNavigate()
  return (
    <div className="body flex justify-center items-center min-h-screen">
      <div className=" relative bg-white p-8 rounded-lg shadow-lg w-full max-w-md border-2 border-teal-500">
      <img src={assets.vec} alt="arrow-back"  className='absolute top-9 left-9 cursor-pointer'/>

        
        {/* Logo */}
        <div className="flex justify-center">
          <img src={assets.logo} alt="Logo" className="h-10" />
        </div>

        {/* Profile Header */}
        <h2 className="text-2xl font-bold text-teal-600 text-center">My Account</h2>
        <p className="text-center text-gray-500 mb-6">
          This is where you can review your account and update details when necessary.
        </p>

        {/* Profile Picture and Info */}
        <div className="flex flex-col items-center mb-6">
          <img
            src={assets.doll} // Replace with the actual profile picture URL
            alt="User Avatar"
            className="w-24 h-24 rounded-full mb-2 border-2 border-teal-500"
          />
          <h3 className="text-xl font-semibold">Claire</h3>
          <p className="text-gray-500">claire@gmail.com</p>
          <button className="mt-2 px-3 py-1 text-sm text-teal-600 border border-teal-600 rounded-lg">
            Edit
          </button>
        </div>

        {/* Account Options */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-gray-700" onClick={() => navigate('/rank')}>
            <span>My Rank</span>
            <span className="text-xl">&gt;</span>
          </div>
          <div className="flex items-center justify-between text-gray-700" onClick={() => navigate('/reset')}>
            <span>Change Password</span>
            <span className="text-xl">&gt;</span>
          </div>
          <div className="flex items-center justify-between text-gray-700" onClick={() => navigate('/login')}>
            <span>Logout</span>
            <span className="text-xl">&gt;</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
