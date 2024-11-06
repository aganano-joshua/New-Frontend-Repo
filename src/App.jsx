import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './Pages/Drawing/Dashboard'
import Homepage from './Pages/HomePage/HomePage'
import Landing from './Pages/Landing/Landing'


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/create-art' element={<Dashboard/>}/>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home-page' element={<Homepage/>}/>
        
      </Routes>
    </Router>
  )
}

export default App
