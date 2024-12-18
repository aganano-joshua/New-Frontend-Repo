import React, { useEffect, useState } from 'react'
import { assets } from '../../../Images/asset'
import ApiService from '@/serverActions/api';
import { Button } from '../ui/button';

const HomeHead = () => {

  const [data, setData] = useState();

  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       const response = await ApiService.getUserInfo();
  //       console.log(response.data);
  //       setData(response.data);
  //     } catch (err) {
  //       console.error("Error fetching user info", err);
  //     }
  //   };

  //   fetchUserData();
  //   const intervalId = setInterval(() => {
  //     fetchUserData();
  //   }, 5000);
  //   return () => clearInterval(intervalId);
  // }, []);

  let userNaame = null; // Local variable to store the response
  let userEmail = null;
  let userPicture = null;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await ApiService.getUserInfo();
        console.log(response.data);
        setData(response.data)
        console.log("Response is",  setData(response.data))
        userNaame = response.data.email; // Assign email directly to local variable
        userEmail = response.data.name; // Assign email directly to local variable
        userPicture = response.data.userPicture;
        localStorage.setItem("email", userNaame);
        localStorage.setItem("picture", userPicture);
        console.log(userEmail)
      } catch (err) {
        console.error('Error fetching user info', err);
      }
    };

    fetchUserData();

    // Polling the API every 5 seconds
    const intervalId = setInterval(() => {
      fetchUserData();
    }, 5000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  const userInfo = localStorage.getItem("email")
  const userPics = localStorage.getItem("picture")

  return (
    <div className="flex flex-row justify-between items-center p-5  max-800:items-start max-800:gap-6 select-none">
      <div>
        <img src={assets.logo} alt="Company Logo" className="w-20 h-20" draggable={false}/>
      </div>

      {/* Add both `mt-8` and `text-center` for better responsiveness */}
      <h2 className="max-800:absolute max-800:top-56 max-800:left-46 max-800:text-center" style={{ fontSize: '50px', color: 'black', fontWeight: 'bolder' }}>
        Let&apos;s get <span style={{ color: '#008183' }}>Creative</span>
      </h2>

      <div className="flex flex-row justify-between items-center gap-2 max-800:mt-4">
        <img src={userPics} alt="doll logo" className="w-8 h-8" style={{ borderRadius: '50%' }} draggable={false}/>
        <div className="name" style={{ border: '1px solid #008183', padding: '10px 12px', borderRadius: '20px', fontWeight: 'bolder' }}>
          hi, {userInfo}
        </div>
        <img src={assets.music} alt="music logo" className="w-10 h-10" draggable={false}/>
      </div>
    </div>
  )
}

export default HomeHead
