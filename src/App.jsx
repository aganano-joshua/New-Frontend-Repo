import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Audio from './Components/Setting and Profile components/Audio'
import Setting from './Components/Setting and Profile components/Setting'



function App() {

  return (
    <Router>
      <Routes>
        <Route path='/create-art' element={<Setting/>}/>
      </Routes>
    </Router>
  )
}

export default App
