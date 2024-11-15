/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import SigninBg from '@/components/Siginbg/Siginbg/SiginBg'
import React, { useState } from 'react'
import { assets } from '../../../Images/asset'
import InputF from '@/components/InputField'
import SignInOption from '@/components/SignInOption'
import UserNO from '@/components/UserNO'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'
import Popup from '../Popup'

const API_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL

const Signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [emptyPasswordError, setEmptyPasswordError] = useState('')
  const [errors, setErrors] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const navigate = useNavigate()
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
      // navigate('/dashboard');
      const token = response.data.token
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

  const linkToLogin = '/dashboard'

  return (
    <div
      className="body"
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}
    >
      <SigninBg />
      <div
        style={{
          zIndex: '20',
          height: '95%',
          width: '40rem',
          background: 'white',
          marginLeft: '30px',
          border: '5px solid rgba(0, 158, 161, 1)',
          marginRight: '30px',
        }}
      >
        <div className="signupLogo">
          <img src={assets.logo} alt="logo" width={150} height={90} />
        </div>
        <div
          className=""
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            fontSize: '1.5rem',
          }}
        >
          <h3
            className="flex justify-center items-center text-center"
            style={{ color: '#009EA1', fontWeight: 'bold' }}
          >
            Welcome to Cardboard
          </h3>
          <p style={{ fontSize: '1rem' }}>Sign to Cardboard</p>
        </div>
        <div>
          {errors && <p style={{ color: 'red' }}>{errors}</p>}
          <form
            onSubmit={handleSubmit}
            style={{
              padding: '5px',
              display: 'flex',
              alignItems: 'center',
              marginTop: '20px',
            }}
          >
            <div className="input-sign">
              <InputF
                error={emailError}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                label="Enter Email"
                placeHolder="johndeo@gmail.com"
              />
            </div>
            <div className="input-sign">
              <InputF
                error={passwordError}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                label="Enter Password"
                placeHolder="***********"
              />
              <div className="forgot">
                <p>
                  <Link to="/reset-password">forgot password</Link>
                </p>
              </div>
            </div>
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
                width: '195px',
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

            {/* </div> */}
            {message && <p>{message}</p>}
            <SignInOption />
            <UserNO linkTo="/signup" info="New User" linkName="Sign Up" />
          </form>
        </div>
      </div>
      {popup && (
        <Popup
          subject="Login Successful"
          buttonText="Proceed to Cardboard"
          linkTo={linkToLogin}
        />
      )}
    </div>
  )
}

export default Signin
