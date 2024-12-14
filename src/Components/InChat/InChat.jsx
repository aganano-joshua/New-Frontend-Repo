// // import React from 'react'
// // import { assets } from '../../../Images/asset'

// // const InChat = () => {
// //   return (
// //     <div className='body flex justify-center items-center overflow-hidden'>
// //         <div className="box bg-white p-8 rounded-lg h-96 shadow-lg w-full max-w-md border-2 border-teal-500 overflow-y-auto">
// //         <img src={assets.vec} alt="arrow-back"  className='absolute top-6 left-9 cursor-pointer'/>

// //         <div className="chat-cont flex flex-col">
// //         <div className='flex justify-center items-center gap-6  '>
// //             <img src={assets.doll} alt="user" className='h-8 w-8 text-center' style={{borderRadius: '50%'}}/>
// //         <h2 className='font-bold text-2x text-center'>Akorede Joy</h2>
// //         </div>

// //         <div className="incoming flex justify-start mt-14 gap-4 relative">
// //         <img src={assets.doll} alt="user" className='h-8 w-8' style={{borderRadius: '50%'}}/>
// //         <img src={assets.dolly} alt="user" className='h-32 w-32' />

// //         </div>


// //         <div className="outgoing flex flex-row-reverse justify-start mt-14 gap-4 relative ">
// //         <img src={assets.doll} alt="user" className='h-8 w-8' style={{borderRadius: '50%'}}/>
// //         <img src={assets.dolly} alt="user" className='h-32 w-32' />

// //         </div>
// //         </div>
// //         </div>
// //     </div>
// //   )
// // }

// // export default InChat

// import React, { useEffect, useState } from 'react';
// import { assets } from '../../../Images/asset';

// const InChat = () => {
//   const [images, setImages] = useState([]); // Store fetched images
//   const [selectedImage, setSelectedImage] = useState(null); // Store selected image

//   // Fetch image data (replace with your actual API)
//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const response = await fetch('http://localhost:8080/api/v1/images'); // Replace with your API URL
//         if (!response.ok) {
//           throw new Error('Failed to fetch images');
//         }
//         const data = await response.json();
//         setImages(data); // Assuming the response is an array of image URLs or objects
//       } catch (err) {
//         console.error(err.message);
//       }
//     };

//     fetchImages();
//   }, []);

//   return (
//     <div className="body flex justify-center items-center overflow-hidden">
//       <div className="box bg-white p-8 rounded-lg h-96 shadow-lg w-full max-w-md border-2 border-teal-500 overflow-y-auto">
//         <img
//           src={assets.vec}
//           alt="arrow-back"
//           className="absolute top-6 left-9 cursor-pointer"
//         />

//         <div className="chat-cont flex flex-col">
//           <div className="flex justify-center items-center gap-6">
//             <img
//               src={assets.doll}
//               alt="user"
//               className="h-8 w-8 text-center"
//               style={{ borderRadius: '50%' }}
//             />
//             <h2 className="font-bold text-2x text-center">Akorede Joy</h2>
//           </div>

//           {/* Incoming Image */}
//           <div className="incoming flex justify-start mt-14 gap-4 relative">
//             <img
//               src={assets.doll}
//               alt="user"
//               className="h-8 w-8"
//               style={{ borderRadius: '50%' }}
//             />
//             {selectedImage ? (
//               <img
//                 src={selectedImage}
//                 alt="selected"
//                 className="h-32 w-32"
//               />
//             ) : (
//               <p>No image selected</p>
//             )}
//           </div>

//           {/* Outgoing Image */}
//           <div className="outgoing flex flex-row-reverse justify-start mt-14 gap-4 relative">
//             <img
//               src={assets.doll}
//               alt="user"
//               className="h-8 w-8"
//               style={{ borderRadius: '50%' }}
//             />
//             {selectedImage && (
//               <img src={selectedImage} alt="selected" className="h-32 w-32" />
//             )}
//           </div>

//           {/* Image Selection */}
//           <div className="image-selection mt-10">
//             <h3 className="font-bold text-center mb-4">Select an Image:</h3>
//             <div className="grid grid-cols-3 gap-4">
//               {images.map((image, index) => (
//                 <img
//                   key={index}
//                   src={image.url} // Assuming `image.url` contains the image URL
//                   alt={`Option ${index + 1}`}
//                   className={`h-20 w-20 border-2 cursor-pointer ${
//                     selectedImage === image.url ? 'border-teal-500' : 'border-gray-300'
//                   }`}
//                   onClick={() => setSelectedImage(image.url)}
//                   style={{ borderRadius: '8px' }}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InChat;


// import React, { useEffect, useState } from 'react';
// import { assets } from '../../../Images/asset';
// import { useNavigate } from 'react-router-dom';

// const InChat = () => {
//   const [images, setImages] = useState([]); // Store fetched images
//   const [selectedImage, setSelectedImage] = useState(null); // Store selected image
//   const [error, setError] = useState(null); // Store error message
//   const [loading, setLoading] = useState(false); // Loading state
//   const navigate = useNavigate();

//   // Retrieve JWT token from localStorage or other storage
//   const jwtToken = localStorage.getItem('jwttoken'); // Adjust based on your storage method

//   // Fetch image data (replace with your actual API)
//   useEffect(() => {
//     const fetchImages = async () => {
//       if (!jwtToken) {
//         setError('No JWT token found');
//         return;
//       }

//       setLoading(true);
//       try {
//         const response = await fetch('http://localhost:8080/api/v2/image', {
//           headers: {
//             'Authorization': `Bearer ${jwtToken}`,
//           },
//         });

//         if (!response.ok) {
//           throw new Error('Failed to fetch images');
//         }

//         const data = await response.json();
//         setImages(data); // Assuming the response is an array of image URLs or objects
//         console.log(data)
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchImages();
//   }, [jwtToken]);

//   // Loading and Error states
//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div className="body flex justify-center items-center overflow-hidden">
//       <div className="box bg-white p-8 rounded-lg h-96 shadow-lg w-full max-w-md border-2 border-teal-500 overflow-y-auto">
//         <img
//           src={assets.vec}
//           alt="arrow-back"
//           className="absolute top-6 left-9 cursor-pointer"
//           onClick={() => navigate('/in-app')}
//         />
//       </div>
//     </div>
//   );
// };

// export default InChat;

// import React, { useEffect, useState } from 'react';
// import { assets } from '../../../Images/asset';
// import { useNavigate } from 'react-router-dom';

// const InChat = () => {
//   const [images, setImages] = useState([]); // Store fetched images
//   const [selectedImage, setSelectedImage] = useState(null); // Store selected image
//   const [error, setError] = useState(null); // Store error message
//   const [loading, setLoading] = useState(false); // Loading state
//   const navigate = useNavigate();

//   // Retrieve JWT token from localStorage or other storage
//   const jwtToken = localStorage.getItem('jwttoken'); // Adjust based on your storage method

//   // Fetch image data (replace with your actual API)
//   useEffect(() => {
//     if (!jwtToken) {
//       navigate('/login'); // Redirect if no token
//       return;
//     }

//     const fetchImages = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch('http://localhost:8080/api/v2/image', {
//           headers: {
//             'Authorization': `Bearer ${jwtToken}`,
//           },
//         });

//         if (!response.ok) {
//           throw new Error('Failed to fetch images');
//         }

//         const data = await response.json();
//         setImages(data); // Assuming the response is an array of image URLs or objects
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchImages();
//   }, [jwtToken, navigate]);

//   // Loading and Error states
//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="spinner border-t-4 border-teal-500 border-solid rounded-full w-16 h-16 animate-spin"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="text-center">
//         <p>Error: {error}</p>
//         <button onClick={() => window.location.reload()} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
//           Retry
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="body flex justify-center items-center overflow-hidden">
//       <div className="box bg-white p-8 rounded-lg h-96 shadow-lg w-full max-w-md border-2 border-teal-500 overflow-y-auto">
//         <img
//           src={assets.vec}
//           alt="arrow-back"
//           className="absolute top-6 left-9 cursor-pointer"
//           onClick={() => navigate('/in-app')}
//         />
//         <div className="image-list">
//           {images.length > 0 ? (
//             images.map((image, index) => (
//               <img
//                 key={index}
//                 src={image.url || image}
//                 alt={`Image ${index}`}
//                 className="w-full h-32 object-cover rounded-lg mb-4"
//                 onClick={() => setSelectedImage(image)}
//               />
//             ))
//           ) : (
//             <p>No images available</p>
//           )}
//         </div>
//       </div>

//       {/* Modal for viewing the selected image */}
//       {selectedImage && (
//         <div className="modal fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//           <div className="modal-content bg-white p-4 rounded-lg">
//             <img src={selectedImage.url || selectedImage} alt="Selected" className="max-w-full max-h-screen" />
//             <button onClick={() => setSelectedImage(null)} className="mt-4 px-4 py-2 bg-red-500 text-white rounded">
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default InChat;


// import React, { useEffect, useState } from 'react';
// import { assets } from '../../../Images/asset';
// import { useLocation, useNavigate } from 'react-router-dom';

// const InChat = () => {
//   const [images, setImages] = useState([]);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation(); // Access state passed via navigate

//   const jwtToken = localStorage.getItem('jwttoken');
//   const receiverId = location.state?.receiverId; // Get receiverId from navigation state

//   useEffect(() => {
//     if (!receiverId) {
//       setError('No receiver selected');
//       return;
//     }
//     fetchImages();
//   }, [receiverId]);

//   const fetchImages = async () => {
//     if (!jwtToken || !receiverId) return;

//     setLoading(true);
//     try {
//       const response = await fetch('http://localhost:8080/api/v2/get-image', {
//         method: 'POST',
//         headers: {
//           'Authorization': `Bearer ${jwtToken}`,
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ receiverId }), // Pass receiverId
//       });

//       if (!response.ok) throw new Error('Failed to fetch images');

//       const data = await response.json();
//       setImages(data);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (!file) return;

//     const reader = new FileReader();
//     reader.onloadend = async () => {
//       const base64String = reader.result;
//       try {
//         const response = await fetch('http://localhost:8080/api/v2/send-image', {
//           method: 'POST',
//           headers: {
//             'Authorization': `Bearer ${jwtToken}`,
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             receiverId,
//             image: base64String,
//           }),
//         });

//         if (!response.ok) throw new Error('Failed to send image');

//         fetchImages(); // Refresh images
//       } catch (err) {
//         setError(err.message);
//       }
//     };

//     reader.readAsDataURL(file);
//   };

//   if (loading) {
//     return <div className="spinner">Loading...</div>;
//   }

//   if (error) {
//     return <div className="error">Error: {error}</div>;
//   }

//   return (
//     <div className="body flex justify-center items-center overflow-hidden">
//       <div className="box bg-white p-8 rounded-lg h-96 shadow-lg w-full max-w-md border-2 border-teal-500 overflow-y-auto">
//         <img
//           src={assets.vec}
//           alt="arrow-back"
//           className="absolute top-6 left-9 cursor-pointer"
//           onClick={() => navigate('/user-list')}
//         />

//         <p className="text-center mb-4">Chat with: {receiverId}</p>

//         <input
//           type="file"
//           accept="image/*"
//           onChange={handleFileChange}
//           className="mb-4"
//         />

//         <div className="image-list">
//           {images.length > 0 ? (
//             images.map((image, index) => (
//               <img
//                 key={index}
//                 src={image.url || image}
//                 alt={`Image ${index}`}
//                 className="w-full h-32 object-cover rounded-lg mb-4"
//               />
//             ))
//           ) : (
//             <p>No images available</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InChat;

// import React, { useEffect, useState } from 'react';
// import { assets } from '../../../Images/asset';
// import { useLocation, useNavigate } from 'react-router-dom';

// const InChat = () => {
//   const [images, setImages] = useState([]); // Store fetched images
//   const [selectedImage, setSelectedImage] = useState(null); // Store selected image
//   const [error, setError] = useState(null); // Error message
//   const [loading, setLoading] = useState(false); // Loading state
//   const navigate = useNavigate();
//   const location = useLocation(); // Access navigation state
//   const jwtToken = localStorage.getItem('jwttoken');
//   const receiverId = location.state?.receiverId; // Get receiverId from navigation state

//   // Fetch images when component mounts or receiverId changes
//   useEffect(() => {
//     if (!receiverId) {
//       setError('No receiver selected');
//       return;
//     }
//     fetchImages();
//   }, [receiverId]);

//   // Fetch images from the server
//   const fetchImages = async () => {
//     if (!jwtToken || !receiverId) return;

//     setLoading(true);
//     try {
//       const response = await fetch('http://localhost:8080/api/v2/get-image', {
//         method: 'POST',
//         headers: {
//           'Authorization': `Bearer ${jwtToken}`,
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ receiverId }), // Pass receiverId
//       });

//       if (!response.ok) throw new Error('Failed to fetch images');

//       const data = await response.json();
//       setImages(data); // Assume response is an array of image URLs or objects
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Handle file selection and send image to the server
//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (!file) return;

//     const reader = new FileReader();
//     reader.onloadend = async () => {
//       const base64String = reader.result; // Convert image to base64 string
//       console.log("Base is: ", base64String)
//       try {
//         const response = await fetch('http://localhost:8080/api/v2/send-image', {
//           method: 'POST',
//           headers: {
//             'Authorization': `Bearer ${jwtToken}`,
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             receiverId,
//             image: base64String,
//           }),
//         });

//         if (!response.ok) throw new Error('Failed to send image');

//         fetchImages(); // Refresh images after successful upload
//       } catch (err) {
//         setError(err.message);
//       }
//     };

//     reader.readAsDataURL(file); // Read the selected file as a Base64 string
//   };

//   // Render loading and error states
//   if (loading) {
//     return <div className="spinner">Loading...</div>;
//   }

//   if (error) {
//     return <div className="error">Error: {error}</div>;
//   }

//   return (
//     <div className="body flex justify-center items-center overflow-hidden">
//       <div className="box bg-white p-8 rounded-lg h-96 shadow-lg w-full max-w-md border-2 border-teal-500 overflow-y-auto">
//         {/* Back Button */}
//         <img
//           src={assets.vec}
//           alt="arrow-back"
//           className="absolute top-6 left-9 cursor-pointer"
//           onClick={() => navigate('/in-app')} // Navigate back to the user list
//         />

//         {/* Header */}
//         <p className="text-center mb-4">Chat with: {receiverId}</p>

//         {/* File Input */}
//         <input
//           type="file"
//           accept="image/*"
//           onChange={handleFileChange}
//           className="mb-4"
//         />

//         {/* Display Fetched Images */}
//         <div className="image-list">
//           {images.length > 0 ? (
//             images.map((image, index) => (
//               <img
//                 key={index}
//                 src={image.url || image} // Assuming the response contains a URL or base64 string
//                 alt={`Image ${index}`}
//                 className="w-full h-32 object-cover rounded-lg mb-4"
//               />
//             ))
//           ) : (
//             <p>No images available</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InChat;


import React, { useEffect, useState } from 'react';
import { assets } from '../../../Images/asset';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaDownload } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const InChat = () => {
  const [images, setImages] = useState([]); // Store fetched images
  const [error, setError] = useState(null); // Error message
  const [loading, setLoading] = useState(false); // Loading state
  const [fileName, setFileName] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();
  const location = useLocation(); // Access navigation state
  const jwtToken = localStorage.getItem('jwttoken');
  const user = location.state?.user; // Get receiverId from navigation state
  console.log(user)
  const receiverId = user.email
  const name = user.name
  const pics = user.picture

  // Fetch images when component mounts or receiverId changes
  useEffect(() => {
    if (!receiverId) {
      setError('No receiver selected');
      return;
    }
    fetchImages();
  }, [receiverId]);

  // Fetch images from the server
  const fetchImages = async () => {
    if (!jwtToken || !receiverId) return;

    setLoading(true);
    try {
      const response = await fetch('http://localhost:8080/api/v2/get-image', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${jwtToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ receiverId }), // Pass receiverId
      });

      if (!response.ok) throw new Error('Failed to fetch images');

      const data = await response.json();
      console.log(data)
      // Assume data is an array of objects with a `content` field (Base64 string)
      setImages(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Handle file selection and send image to the server
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    setFileName(file.name); // Set the file name in the state

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64String = reader.result; // Convert image to base64 string
      console.log(base64String)
      try {
        const response = await fetch('http://localhost:8080/api/v2/send-image', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${jwtToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            receiverId,
            image: base64String,
          }),
        });

        console.log(response)

        if (!response.ok) throw new Error('Failed to send image');

        fetchImages(); // Refresh images after successful upload
      } catch (err) {
        setError(err.message);
      }
    };

    reader.readAsDataURL(file); // Read the selected file as a Base64 string
  };

  // Render loading and error states
  if (loading) {
    return <div className="spinner">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  const handleDownload = (imageContent) => {
    // Create a link to trigger the download
    const link = document.createElement('a');
    link.href = imageContent;
    link.download = 'image.png'; // You can change this to any extension if needed
    link.click();
  };

  const handleImageClick = (imageContent) => {
    setSelectedImage(imageContent);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="body flex justify-center items-center overflow-hidden">
      <div className="box bg-white p-8 rounded-lg h-96 shadow-lg w-full max-w-md border-2 border-teal-500 overflow-y-auto">
        {/* Back Button */}
        <img
          src={assets.vec}
          alt="arrow-back"
          className="absolute top-6 left-9 cursor-pointer"
          onClick={() => navigate('/in-app')} // Navigate back to the user list
        />

        {/* Header */}
        <div className='flex justify-center items-center flex-row'>
          <div className='w-10rem'><img src={pics} className='w-[1rem] rounded-[50%]' alt="" /></div>
          <p className="text-center pl-[10px]">{name}</p>
        </div>

        {/* File Input */}
        <div className="flex items-center justify-center space-x-4 mt-[15px]">
          <label htmlFor="file-upload" className="cursor-pointer bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition duration-200">
            Select Image
          </label>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
          {fileName && (
            <p className="text-teal-500 text-sm">{fileName}</p>
          )}
        </div>

        {/* Display Fetched Images */}
        <div className="image-list">
          {images.length > 0 ? (
            images.map((image, index) => (
              <div key={index} className="relative mb-4">
                <img
                  src={image.content}
                  alt={`Image ${index}`}
                  className="w-full h-32 object-cover rounded-lg cursor-pointer"
                  onClick={() => handleImageClick(image.content)} // Open modal on click
                />
                <button
                  onClick={() => handleDownload(image.content)}
                  className="absolute top-2 right-2 bg-teal-500 text-white p-2 rounded-full hover:bg-teal-600"
                >
                  <FaDownload/>
                </button>
              </div>
            ))
          ) : (
            <p>No Chat so Far</p>
          )}
        </div>
      </div>
      {/* Modal for image expansion */}
      {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-4 rounded-lg">
              <img
                src={selectedImage}
                alt="Expanded"
                className="max-w-full max-h-full"
              />
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-white bg-black p-2 rounded-full"
              >
                <IoClose/>
              </button>
            </div>
          </div>
        )}
    </div>
  );
};

export default InChat;
