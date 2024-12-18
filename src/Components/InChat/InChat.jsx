import React, { useEffect, useState } from 'react';
import { assets } from '../../../Images/asset';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaDownload } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const API_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL

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
      const response = await fetch(`${API_BASE_URL}/api/v2/get-image`, {
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
        const response = await fetch(`${API_BASE_URL}/api/v2/send-image`, {
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
