import React, { useState } from 'react'
import { assets } from '../../../Images/asset'
import { useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { Button } from '../ui/button';
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL

const SignIn = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [emptyPasswordError, setEmptyPasswordError] = useState('')
  const [errors, setErrors] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [popup, setPopup] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    let isValid = true

    // Email Validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
    if (!email) {
      setEmailError('Email is required')
      isValid = false
    } else if (!email.match(emailPattern)) {
      setEmailError('Invalid email address')
      isValid = false
    } else {
      setEmailError('')
    }

    // Password Validation
    if (!password) {
      setEmptyPasswordError('Password is required')
      setPasswordError('')
      isValid = false
    } else if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long')
      setEmptyPasswordError('')
      isValid = false
    } else {
      setPasswordError('')
      setEmptyPasswordError('')
    }

    if (isValid) {
      handleLogin()
    }
  }

  const handleLogin = async () => {
    setLoading(true)
    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/v1/auth/login`,
        null,
        {
          params: { email: email, password: password },
        }
      )
      setLoading(false)
      setMessage('Login successful!')
      // window.location.href = '/dashboard'
      console.log('Redirecting........')
      navigate('/home-page');
      const token = response.data.token
      console.log(response.data.token)
      if (response.status === 200) {
        localStorage.setItem('jwttoken', token)
        showPopUp()
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          setMessage(error.response.data)
        } else {
          setMessage('Wrong username or password please try again')
        }
      } else {
        setMessage('Network error. Please check your connection.')
      }
    } finally {
      setLoading(false)
    }
  }

  const showPopUp = () => {
    setPopup(true)
  }

  const linkToLogin = '/home-page'
  return (
    <div className="flex items-center justify-center h-96 w-96 bg-gray-100">
      <div className="relative bg-white pl-8 pr-8 rounded-lg shadow-lg w-full max-w-sm border-2 border-teal-500">
      <img src={assets.vec} alt="arrow-back"  className='absolute top-9 left-9 cursor-pointer' onClick={() => navigate('/')} />

        
        {/* Logo */}
        <div className="flex justify-center mb-1">
          <img src={assets.logo} alt="Logo" className="h-16" />
        </div>
        
        {/* Welcome Message */}
        <h2 className="text-2xl font-bold text-teal-600 text-center">Welcome to Cardboard!</h2>
        <p className="text-center text-gray-500 mb-1">Sign in to account</p>

        {/* Email and Password Fields */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email here"
              value={email}
                onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <p className="error-message">{emailError}</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="********"
              value={password}
                onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <p className="error-message">{passwordError}</p>
            <div className="text-right mt-1">
              <a href="#" className="text-teal-600 text-sm">Forgot password</a>
            </div>
          </div>

          {/* Login Button */}
          <Button
              type="submit"
              disabled={loading}
              variant="outline"
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '10px',
                width: '100%',
                height: '47px',
                backgroundColor: '#008183',
                color: '#fff',
                fontWeight: '700',
                fontSize: '20px',
                border: 'none',
                borderRadius: '20px',
                cursor: loading ? 'not-allowed' : 'pointer',
                opacity: loading ? 0.6 : 1,
                transition: 'opacity 0.2s ease-in-out',
              }}
            >
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Login
            </Button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="px-3 text-gray-500 text-sm">or</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        {/* Social Login Buttons */}
        <div className="flex justify-center space-x-4 mb-4">
          <button className="flex items-center justify-center w-10 h-10 bg-gray-100">
            <img src={assets.apple} alt="Apple" className="h-6" />
          </button>
          <button className="flex items-center justify-center w-10 h-10 bg-gray-100 ">
            <img src={assets.google} alt="Google" className="h-6" />
          </button>
        </div>

        {/* Sign Up Link */}
        <p className="text-center text-sm text-gray-500">
          New user? <a href="#" className="text-teal-600" onClick={() => navigate('/signup')}>Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
