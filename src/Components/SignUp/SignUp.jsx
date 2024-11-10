import React from 'react';
import { assets } from '../../../Images/asset';

const SignUp = () => {
  return (
    <div className=" body flex items-center justify-center bg-gray-100">
      <div className="relative bg-white px-8 rounded-lg shadow-lg w-96 max-w-sm border-2 border-teal-500">
      <img src={assets.vec} alt="arrow-back"  className='absolute top-9 left-9 cursor-pointer'/>

        
        {/* Logo */}
        <div className="flex justify-center ">
          <img src={assets.logo} alt="Logo" className="h-16" />
        </div>
        
        {/* Welcome Message */}
        <h2 className="text-2xl font-bold text-teal-600 text-center">Welcome to Cardboard!</h2>
        <p className="text-center text-gray-500 ">Create Account</p>

        {/* Email, Password, and Confirm Password Fields */}
        <form>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email here"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="********"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-2" htmlFor="confirm-password">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              placeholder="********"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full py-2 bg-teal-500 text-white rounded-lg font-semibold hover:bg-teal-600 transition duration-200"
          >
            Signup
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="px-3 text-gray-500 text-sm">or</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        {/* Social Login Buttons */}
        <div className="flex justify-center mb-1">
          <button className="flex items-center justify-center w-10 h-10 bg-gray-100">
            <img src={assets.apple} alt="Apple" className="h-6" />
          </button>
          <button className="flex items-center justify-center w-10 h-10 bg-gray-100">
            <img src={assets.google} alt="Google" className="h-6" />
          </button>
        </div>

        {/* Sign In Link */}
        <p className="text-center text-sm text-gray-500">
          Already a user? <a href="#" className="text-teal-600">Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
