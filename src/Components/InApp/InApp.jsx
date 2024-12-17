// // import React, { useEffect, useState } from 'react'
// // import { assets } from '../../../Images/asset'

// // const InApp = () => {
// //   const [data, setData] = useState(null); // To store the fetched data
// //   const [error, setError] = useState(null); // To store any error that occurs
// //   const [loading, setLoading] = useState(false); // To indicate loading state

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       setLoading(true);
// //       try {
// //         const response = await fetch('http://localhost:8080/api/v1/users'); // Replace with your API URL
// //         if (!response.ok) {
// //           throw new Error(`HTTP error! Status: ${response.status}`);
// //         }
// //         const result = await response.json(); // Parse JSON response
// //         setData(result);
// //       } catch (err) {
// //         setError(err.message);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchData();
// //   }, []); // Empty dependency array means this will run only once when the component mounts

// //   if (loading) return <p>Loading...</p>;
// //   if (error) return <p>Error: {error}</p>;
// //   return (
// //     <div className='body max-800:bg-contain flex flex-col justify-start py-5'>
// //         <img src={assets.vec} alt="arrow-back"  className='absolute top-9 left-9 cursor-pointer'/>

// //         <div className="inapp-content w-full px-11 text-center">
// //            <div className="inapp-head flex-col flex justify-center items-center gap-3 px-16">
// //            <h4 className='font-bold text-2xl text-center'>Share With Friends</h4>
// //            <input type="search" placeholder='Search with Friends Name' className='w-full px-3 py-2 border-2 border-black outline-none'/>
// //            </div>

// //            <div className="inapp-friends mt-5">
// //             <div className='friends-cont flex flex-row justify-start items-center gap-4 border-b-2 border-black py-4'>
// //                 <div className="status rounded-full bg-green-600 h-2 w-2" style={{borderRadius: '50%'}}></div>
// //                 <div className="profile-cont flex justify-start items-center gap-3">
// //                     <div className="img bg-white" style={{borderRadius: '50%'}}>
// //                     <img src={assets.users} alt="User Profile" className='h-14 w-14' />
// //                     </div>
// //                     <h4 className='text-2x font-bold'>John Doe (You)</h4>
// //                     <h1>Fetched Data</h1>
// //       {data ? <pre>{JSON.stringify(data.name, null, 2)}</pre> : <p>No data available</p>}
// //                 </div>
// //             </div>
            
// //            </div>
// //         </div>
// //     </div>
// //   )
// // }

// // export default InApp


// import React, { useEffect, useState } from 'react';
// import { assets } from '../../../Images/asset';

// const InApp = () => {
//   const [data, setData] = useState([]); // To store the fetched data
//   const [error, setError] = useState(null); // To store any error that occurs
//   const [loading, setLoading] = useState(false); // To indicate loading state

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch('http://localhost:8080/api/v1/users'); // Replace with your API URL
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const result = await response.json(); // Parse JSON response
//         setData(result);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []); // Runs once on component mount

//   // Loading and Error states
//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div className="body max-800:bg-contain flex flex-col justify-start py-5">
//       <img 
//         src={assets.vec} 
//         alt="arrow-back" 
//         className="absolute top-9 left-9 cursor-pointer" 
//       />

//       <div className="inapp-content w-full px-11 text-center">
//         <div className="inapp-head flex flex-col justify-center items-center gap-3 px-16">
//           <h4 className="font-bold text-2xl text-center">Share With Friends</h4>
//           <input 
//             type="search" 
//             placeholder="Search with Friends Name" 
//             className="w-full px-3 py-2 border-2 border-black outline-none" 
//           />
//         </div>

//         <div className="inapp-friends mt-5">
//           {data.length > 0 ? (
//             data.map((user) => (
//               <div 
//                 key={user.id} 
//                 className="friends-cont flex flex-row justify-start items-center gap-4 border-b-2 border-black py-4"
//               >
//                 <div 
//                   className="status rounded-full bg-green-600 h-2 w-2" 
//                   style={{ borderRadius: '50%' }}
//                 ></div>
//                 <div className="profile-cont flex justify-start items-center gap-3">
//                   <div 
//                     className="img bg-white" 
//                     style={{ borderRadius: '50%' }}
//                   >
//                     <img 
//                       src={assets.users} 
//                       alt="User Profile" 
//                       className="h-14 w-14" 
//                     />
//                   </div>
//                   <div>
//                     <h4 className="text-xl font-bold">{user.name}</h4>
//                     <p className="text-sm text-gray-500">{user.email}</p>
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p>No friends to display</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InApp;


// import React, { useEffect, useState } from 'react';
// import { assets } from '../../../Images/asset';

// const InApp = () => {
//   const [data, setData] = useState([]); // Store fetched data
//   const [error, setError] = useState(null); // Store error message
//   const [loading, setLoading] = useState(false); // Loading state
//   const [searchTerm, setSearchTerm] = useState(''); // Store search input

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch('http://localhost:8080/api/v1/users'); // Replace with your API URL
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const result = await response.json(); // Parse JSON response
//         setData(result);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []); // Runs once on component mount

//   // Filter data based on the search term
//   const filteredData = data.filter((user) =>
//     user.name.toLowerCase().includes(searchTerm.toLowerCase()) // Adjust based on your data structure
//   );

//   // Loading and Error states
//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div className="body max-800:bg-contain flex flex-col justify-start py-5">
//       <img 
//         src={assets.vec} 
//         alt="arrow-back" 
//         className="absolute top-9 left-9 cursor-pointer" 
//       />

//       <div className="inapp-content w-full px-11 text-center">
//         <div className="inapp-head flex flex-col justify-center items-center gap-3 px-16">
//           <h4 className="font-bold text-2xl text-center">Share With Friends</h4>
//           <input 
//             type="search" 
//             placeholder="Search with Friends Name" 
//             value={searchTerm} // Controlled input
//             onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm
//             className="w-full px-3 py-2 border-2 border-black outline-none" 
//           />
//         </div>

//         <div className="inapp-friends mt-5">
//           {filteredData.length > 0 ? (
//             filteredData.map((user) => (
//               <div 
//                 key={user.id} 
//                 className="friends-cont flex flex-row justify-start items-center gap-4 border-b-2 border-black py-4"
//               >
//                 <div 
//                   className="status rounded-full bg-green-600 h-2 w-2" 
//                   style={{ borderRadius: '50%'}}
//                 ></div>
//                 <div className="profile-cont flex justify-start items-center gap-3">
//                   <div 
//                     className="img bg-white" 
//                     style={{ borderRadius: '50%' }}
//                   >
//                     <img 
//                       src={user.picture} 
//                       alt="User Profile" 
//                       className="h-14 w-14 rounded-[50%]" 
//                     />
//                   </div>
//                   <div>
//                     <h4 className="text-xl font-bold">{user.name}</h4>
//                     <p className="text-sm text-gray-500">{user.email}</p>
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p>No friends match your search</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InApp;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import { assets } from '../../../Images/asset';

const API_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL

const InApp = () => {
  const [data, setData] = useState([]); // Store fetched data
  const [error, setError] = useState(null); // Store error message
  const [loading, setLoading] = useState(false); // Loading state
  const [searchTerm, setSearchTerm] = useState(''); // Store search input
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${API_BASE_URL}/api/v1/users`); // Replace with your API URL
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json(); // Parse JSON response
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Runs once on component mount

  // Filter data based on the search term
  const filteredData = data.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to handle user click
  const handleUserClick = (user) => {
    navigate('/chat', { state: { user } }); // Navigate to /chat with user details
  };

  // Loading and Error states
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="body max-800:bg-contain flex flex-col justify-start py-5">
      <img 
        src={assets.vec} 
        alt="arrow-back" 
        className="absolute top-9 left-9 cursor-pointer" 
        onClick={() => navigate('/home-page')}
      />

      <div className="inapp-content w-full px-11 text-center">
        <div className="inapp-head flex flex-col justify-center items-center gap-3 px-16">
          <h4 className="font-bold text-2xl text-center">Share With Friends</h4>
          <input 
            type="search" 
            placeholder="Search with Friends Name" 
            value={searchTerm} // Controlled input
            onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm
            className="w-full px-3 py-2 border-2 border-black outline-none" 
          />
        </div>

        <div className="inapp-friends mt-5">
          {filteredData.length > 0 ? (
            filteredData.map((user) => (
              <div 
                key={user.email} 
                className="friends-cont flex flex-row justify-start items-center gap-4 border-b-2 border-black py-4 cursor-pointer"
                onClick={() => handleUserClick(user)} // Navigate to /chat on click
              >
                <div 
                  className="status rounded-full bg-green-600 h-2 w-2" 
                  style={{ borderRadius: '50%'}}
                ></div>
                <div className="profile-cont flex justify-start items-center gap-3">
                  <div 
                    className="img bg-white" 
                    style={{ borderRadius: '50%' }}
                  >
                    <img 
                      src={user.picture} 
                      alt="User Profile" 
                      className="h-14 w-14 rounded-[50%]" 
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">{user.name}</h4>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No friends match your search</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default InApp;
