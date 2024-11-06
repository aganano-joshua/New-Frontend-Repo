import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Audio from "./Components/Setting and Profile components/Hint";
import Landing from './Pages/Landing/Landing'
import Dashboard from "./Pages/Drawing/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/create-art" element={<Dashboard />} />
        <Route path="/audio" element={<Audio />} />
      </Routes>
    </Router>
  );
}

export default App;
