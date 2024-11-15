import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './Pages/Drawing/Dashboard'
import HomePage from './Pages/Home/HomePage'
import Audio from './Components/Setting and Profile components/Audio'
import Landing from './Pages/landing/Landing'
import CookiesConsentModal from './Components/Cookies/Cookies'
import Signin from './Pages/Signin/Signin'
import SignupForm from './Pages/SignUp/SignUp'
function App() {
  return (
    <Router>
      <CookiesConsentModal/>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/create-art" element={<Dashboard />} />
        <Route path="/audio" element={<Audio />} />
        <Route path="/home-page" element={<HomePage />} />
        <Route path='/login' element={<Signin/>} />
        <Route path='/signup' element={<SignupForm/>}/>
      </Routes>
    </Router>
  );
}

export default App;
