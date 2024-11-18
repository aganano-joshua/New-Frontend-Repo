import React, { useState } from 'react';
import { assets } from '../../../Images/asset';
import { useNavigate } from 'react-router-dom';
import ApiService from '@/serverActions/api';
import { Loader2 } from 'lucide-react';
import { Button } from '../ui/button';

const Signup = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: ''
  })

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    let formErrors = { email: '', password: '', confirmPassword: '' }
    let isValid = true

    if (!firstName) {
      formErrors.firstName = 'First Name is required'
      isValid = false
    }
    if (!lastName) {
      formErrors.lastName = 'Last Name is required'
      isValid = false
    }
    if (!email) {
      formErrors.email = 'Email is required'
      isValid = false
    }

    if (!password) {
      formErrors.password = 'Password is required'
      isValid = false
    } else if (password.length < 8) {
      formErrors.password = 'Password must be at least 8 characters long'
      isValid = false
    }

    if (!confirmPassword) {
      formErrors.confirmPassword = 'Confirm Password is required'
      isValid = false
    } else if (password !== confirmPassword) {
      formErrors.confirmPassword = 'Passwords do not match'
      isValid = false
    }

    setErrors(formErrors)
    if (isValid) {
      setLoading(true)
      setName(firstName + " " + lastName)
      const userData = { firstName, lastName, name, email, password }
      ApiService.registerWithEmail(userData)
        .then((response) => {
          const details = { email: email }
          localStorage.setItem('verifiedEmail', email)
          setLoading(false)
          // navigate('/verification', { state: details })
        })
        .catch((err) => {
          alert('An Error Occured Please Try again')
          window.location.href = '/signup'
          console.error('Error creating user:', err)
        })
    }
  }
  return (
    <div className=" body flex items-center justify-center bg-gray-100">
      <div className="relative bg-white px-8 rounded-lg shadow-lg w-96 max-w-sm border-2 border-teal-500 pb-[15px]">
        <img src={assets.vec} alt="arrow-back" className='absolute top-9 left-9 cursor-pointer' onClick={() => navigate('/')} />


        {/* Logo */}
        <div className="flex justify-center ">
          <img src={assets.logo} alt="Logo" className="h-16" />
        </div>

        {/* Welcome Message */}
        <h2 className="text-2xl font-bold text-teal-600 text-center">Welcome to Cardboard!</h2>
        <p className="text-center text-gray-500 ">Create Account</p>

        {/* Email, Password, and Confirm Password Fields */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <div>
              <label className="block text-gray-600 text-sm mb-2" htmlFor="email">
                Firstname
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your email here"
                onChange={handleFirstNameChange}
                value={firstName}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 mb-[10px]"
              />
              <p className="error-message">{errors.firstName}</p>
            </div>
            <div>
              <label className="block text-gray-600 text-sm mb-2" htmlFor="email">
                Lastname
              </label>
              <input
                type="text"
                id="lastname"
                placeholder="Enter your email here"
                value={lastName}
                onChange={handleLastNameChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 mb-[10px]"
              />
              <p className="error-message">{errors.lastName}</p>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              placeholder="Enter your email here"
              onChange={handleEmailChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 mb-[10px]"
            />
            <p className="error-message">{errors.email}</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="********"
              onChange={handlePasswordChange}
              value={password}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 mb-[10px]"
            />
            <p className="error-message">{errors.password}</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-2" htmlFor="confirm-password">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              placeholder="********"
              value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 mb-[10px]"
            />
            <p className="error-message">{errors.confirmPassword}</p>
          </div>

          <Button
            type="submit"
            disabled={loading}
            variant="outline"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "10px",
              width: "100%",
              height: "47px",
              backgroundColor: "#008183",
              color: "#fff",
              fontWeight: "700",
              fontSize: "20px",
              border: "none",
              borderRadius: "20px",
              cursor: loading ? "not-allowed" : "pointer",
              opacity: loading ? 0.6 : 1,
              transition: "opacity 0.2s ease-in-out"
            }}
          >
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Sign Up
          </Button>
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
          Already a user? <a href="#" className="text-teal-600" onClick={() => navigate('/login')}>Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
