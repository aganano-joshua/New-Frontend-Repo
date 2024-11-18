import React from 'react';
import { assets } from '../../../Images/asset'; // Adjust the path as needed
import { useNavigate } from 'react-router-dom';

const MyRank = () => {
  const navigate = useNavigate()
  return (
    <div className="body flex justify-center min-h-screen py-12">
      <div className=" relative bg-white border-2 border-teal-500 rounded-lg shadow-lg px-8 w-full b  max-w-md md:max-w-lg">
        <img src={assets.vec} alt="arrow-back"  className='absolute top-9 left-9 cursor-pointer' onClick={() => navigate('/account')} />
        {/* Logo */}
        <div className="flex justify-center mb-1">
          <img src={assets.logo} alt="Logo" className="h-16" />
        </div>
        
        {/* Rank Header */}
        <h2 className="text-2xl font-bold text-teal-600 text-center mb-6">MY RANK</h2>
        
        {/* Rank List */}
        <div className="flex flex-wrap justify-around gap-3">
          {/* Rank Item */}
          <div className="flex flex-col items-center">
            <img src={assets.rec} alt="Beginner" className="w-24 h-24 rounded-full object-cover mb-2" />
            <p className="text-gray-700">Beginner</p>
          </div>
          <div className="flex flex-col items-center relative">
            <img src={assets.rec1} alt="Intermediate" className="w-24 h-24 rounded-full object-cover mb-2" />
            <p className="text-gray-700">Intermediate</p>
            <p className="text-sm text-gray-500">30 XP</p>
            <div className="lock bg-blue-600  ">
            <img src={assets.Vector} alt="lock" className='absolute bottom-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 h-10 w-10' />
            </div>
          </div>
          <div className="flex flex-col items-center relative">
            <img src={assets.rec2} alt="Creative Boss" className="w-24 h-24 rounded-full object-cover mb-2" />
            <p className="text-gray-700">Creative Boss</p>
            <p className="text-sm text-gray-500">50 XP</p>
            <div className="lock bg-blue-600  ">
            <img src={assets.Vector} alt="lock" className='absolute bottom-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 h-10 w-10' />
            </div>
          </div>
          <div className="flex flex-col items-center relative">
            <img src={assets.mask} alt="Expert" className="w-24 h-24 rounded-full object-cover mb-2" />
            <p className="text-gray-700">Expert</p>
            <p className="text-sm text-gray-500">75 XP</p>
            <div className="lock bg-blue-600  ">
            <img src={assets.Vector} alt="lock" className='absolute bottom-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 h-10 w-10' />
            </div>
          </div>
          <div className="flex flex-col items-center relative">
            <img src={assets.dolly} alt="WhizKid" className="w-24 h-24 rounded-full object-cover mb-2" />
            <p className="text-gray-700">WhizKid</p>
            <p className="text-sm text-gray-500">100 XP</p>
            <div className="lock bg-blue-600  ">
            <img src={assets.Vector} alt="lock" className='absolute bottom-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 h-10 w-10' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyRank;
