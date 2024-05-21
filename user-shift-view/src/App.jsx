import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import CurrentShift from "./components/CurrentShift";
import "./index.css"; // Asegúrate de que este archivo contenga estilos globales

function App() {
  return (
    <Router>
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Navigate to="/current-shift" />} />
          <Route path="/current-shift" element={<CurrentShift />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
