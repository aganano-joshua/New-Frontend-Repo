import axios from 'axios'
import { jwtDecode } from 'jwt-decode'

const API_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL
const GOOGLE_URI = import.meta.env.VITE_GOOGLE_OAUTH_REDIRECT_URL
const AUTH_URL = import.meta.env.VITE_AUTH_URL_SERVER

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
})

const getToken = localStorage.getItem('jwttoken')
const headers = {
  Authorization: `Bearer ${getToken}`,
}

const ApiService = {
  saveAndGetGoogleUserInfo: () => {
    return api.get(`/${AUTH_URL}/auth/user-info`)
  },

  loginWithGoogle: () => {
    window.location.href = `${API_BASE_URL}/${GOOGLE_URI}`
  },

  registerWithEmail: (userData) => {
    return api.post(`/${AUTH_URL}/register`, userData)
  },

  verifyEmail: () => {
    return api.get(`/${AUTH_URL}/verifyEmail`)
  },

  verifyAccount: (formData) => {
    return api.put(`/${AUTH_URL}/verify-account`, formData)
  },

  regenerateOtp: (formData) => {
    return api.put(`/${AUTH_URL}/regenerate-otp`, formData)
  },

  loginWithEmail: (userData) => {
    return api.post(`${API_BASE_URL}/api/v1/auth/login`, userData)
  },

  getUserInfo: () => {
    return api.get(`${API_BASE_URL}/api/v2/user-info`, { headers })
  },

  saveDrawing: (image, headers) => {
    return api.post(
      `${API_BASE_URL}/api/v2/saveDrawing`,
      { image },
      { headers }
    )
  },

  savePassword: (userDate) => {
    return api.patch(`${API_BASE_URL}/api/v1/auth/save-new-password`, userDate)
  },

  getUserToMessage: (message) => {
    return api.post(`${API_BASE_URL}/api/v1/messages/send`, message, {
      headers,
    })
  },

  getUserToMessageHistory: () => {
    return api.get(`${API_BASE_URL}/api/v1/messages/history`, { headers })
  },

  getAllUser: () => {
    return api.get(`${API_BASE_URL}/api/v1/users`)
  },
}

const checkTokenExpiration = () => {
  const token = localStorage.getItem('jwttoken')
  if (token) {
    const decodedToken = jwtDecode(token)
    const currentTime = Date.now() / 1000
    if (decodedToken.exp > currentTime) {
      // window.location.href = '/dashboard'
      // navigate('/dashboard')
    }
    if (decodedToken.exp < currentTime) {
      localStorage.removeItem('jwttoken')
      window.location.href = '/login'
    }
  }
}

checkTokenExpiration()

export default ApiService
