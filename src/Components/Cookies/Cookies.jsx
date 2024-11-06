// CookiesConsentModal.jsx
import React, { useState, useEffect } from 'react'
import "./Cookies.css"

const CookiesConsentModal = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookiesAccepted')
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true')
    setIsVisible(false)
  }

  const handleDecline = () => {
    setIsVisible(false)
  }


  return (
    isVisible && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white w-full max-w-lg rounded-lg shadow-lg p-6 md:p-8 lg:p-10 text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            🍪 We Value Your Privacy
          </h2>
          <p className="text-gray-600 mb-6">
            We use cookies to enhance your browsing experience, provide
            personalized content, and analyze site traffic. By accepting, you
            agree to our use of cookies. Read more in our{' '}
            <a href="#" className="text-teal-600 hover:underline">
              Privacy Policy
            </a>
            .
          </p>
          <button
            onClick={handleAccept}
            className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-8 rounded-full transition-colors"
          >
            Accept Cookies
          </button>
          <button
            onClick={handleDecline}
            className="bg-gray-100 text-gray-600 px-4 py-2 ml-4 rounded-md shadow hover:bg-gray-200 transition-colors"
          >
            Decline
          </button>
        </div>
      </div>
    )
  )
}

export default CookiesConsentModal
