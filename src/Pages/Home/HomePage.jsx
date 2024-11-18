// // import React from 'react'
// import HomeHead from '../../Components/HomePage/HomeHead'
// import HeroSection from '../../Components/HomePage/HeroSection'
// import HeroIcon from '../../Components/HomePage/HeroIcon'
// import { assets } from '../../../Images/asset'
// import { useEffect, useState } from 'react'
// import ApiService from '@/serverActions/api'

// const HomePage = () => {
//   const [data, setData] = useState(null);
//   let fullName;
//   useEffect(() => {
//     const fetchUserData = async () => {
//       try{
//           const response = await ApiService.getUserInfo();
//           console.log(response.data)
//           setData(response.data)
//           fullName = (response.data.email);
//           console.log(fullName)
//           console.log(setData(response.data))
//       } catch (err) {
//           console.log("Error fetching user info", err);
//           // setError('Failed to fetch User Info')
//       }
//   };

//   fetchUserData();
//         const intervalId = setInterval(() => {
//           fetchUserData();
//         }, 5000);
//         return () => clearInterval(intervalId);
//   }, [])
  
  
//   return (
//     <div className='body'>
//         <HeroSection />
//         <HeroIcon />
//         <img src={assets.share} alt="share" style={{position:'absolute', top: '15%', right: '5%', width: '100px'}} className='max-800:absolute max-800:top-0 max-800:left-24' />
//     </div>
//   )
// }

// export default HomePage

import React, { useEffect, useState } from 'react';
import HomeHead from '../../Components/HomePage/HomeHead';
import HeroSection from '../../Components/HomePage/HeroSection';
import HeroIcon from '../../Components/HomePage/HeroIcon';
import { assets } from '../../../Images/asset';
import ApiService from '@/serverActions/api';

const HomePage = () => {

  return (
    <div className="body">
      {/* Conditional rendering to avoid accessing `data.email` when `data` is null */}
      {/* {data ? <HomeHead fullName={data.name} /> : <div>Loading...</div>} */}
      <HomeHead/>
      <HeroSection />
      <HeroIcon />
      <img
        src={assets.share}
        alt="share"
        style={{ position: 'absolute', top: '15%', right: '5%', width: '100px' }}
        className="max-800:absolute max-800:top-0 max-800:left-24"
      />
    </div>
  );
};

export default HomePage;
