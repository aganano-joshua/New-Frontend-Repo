import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './Pages/Drawing/Dashboard'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/create-art' element={<Dashboard/>}/>
      </Routes>
    </Router>
  )
}

export default App
