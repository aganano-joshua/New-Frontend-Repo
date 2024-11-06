import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Audio from "./Components/Setting and Profile components/Hint";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/create-art" element={<Audio />} />
      </Routes>
    </Router>
  );
}

export default App;
