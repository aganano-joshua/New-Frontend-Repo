import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './Pages/Drawing/Dashboard'
import HomePage from './Pages/Home/HomePage'
import Audio from './Components/Setting and Profile components/Audio'
import Landing from './Pages/landing/Landing'
import CookiesConsentModal from './Components/Cookies/Cookies'
import SignIn from './Pages/SignIn/SignIn'
import SignUp from './Components/Signup/SignUp'
import ChangePwd from './Pages/Reset/ChangePwd'
import Account from './Pages/Account/Account'
import Rank from './Pages/Rank/Rank'
import EditAccount from './Components/EditAccount/EditAccount'
import InApp from './Components/InApp/InApp'
import InChat from './Components/InChat/InChat'
import DrawingHistory from './Components/DrawingHistory/DrawingHistory'

function App() {
  return (
    <Router>
      <CookiesConsentModal/>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/create-art" element={<Dashboard />} />
        <Route path="/audio" element={<Audio />} />
        <Route path="/home-page" element={<HomePage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/reset" element={<ChangePwd />} />
        <Route path="/account" element={<Account />} />
        <Route path="/rank" element={<Rank />} />
        <Route path="/in-app" element={<InApp />} />
        <Route path="/edit-acc" element={<EditAccount />} />
        <Route path="/in-chat" element={<InChat />} />
        <Route path="/history" element={<DrawingHistory />} />
      </Routes>
    </Router>
  );
}

export default App;
