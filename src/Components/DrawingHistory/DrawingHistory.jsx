import React, { useState } from 'react';
import { assets } from '../../../Images/asset';
const images = [
  { id: 1, src: assets.ellipse1, title: 'This Month' },
  { id: 2, src: assets.ellipse, title: 'Pumpkin' },
  { id: 3, src: assets.ellipse2, title: 'Fish' },
  // Add more images as needed
];

function HistoryComponent() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImagePopup = (image) => {
    setSelectedImage(image);
  };

  const closeImagePopup = () => {
    setSelectedImage(null);
  };

  return (
    <div className="body flex flex-col items-center min-h-screen py-8 px-4 ">
              <img src={assets.vec} alt="arrow-back"  className='absolute top-9 left-9 cursor-pointer'/>

      {/* Header */}
      <header className="flex flex-col items-center mb-8">
        <img src={assets.logo} alt="Logo" className="w-12 h-12 mb-2" />
        <h1 className="text-2xl font-bold text-blue-800">HISTORY</h1>
      </header>

      {/* Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4 bg-white rounded-lg shadow-lg border-2 border-teal-500">
        {images.map((image) => (
          <button
            key={image.id}
            onClick={() => openImagePopup(image)}
            className="w-full h-16 sm:h-20 md:h-24 border border-gray-300 rounded-lg overflow-hidden"
          >
            <img src={image.src} alt={image.title} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      {/* Popup */}
      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg shadow-lg relative max-w-xs w-full sm:max-w-md md:max-w-lg">
            <button
              onClick={closeImagePopup}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            >
              &times;
            </button>
            <img src={selectedImage.src} alt={selectedImage.title} className="w-full rounded-lg mb-4" />
            <div className="flex justify-around mt-4">
              {/* Add icons or buttons for download, share, and other actions */}
              <button className="text-gray-600 hover:text-gray-900">🔗 Share</button>
              <button className="text-gray-600 hover:text-gray-900">📥 Download</button>
              <button className="text-gray-600 hover:text-gray-900">❤️ Favorite</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HistoryComponent;
