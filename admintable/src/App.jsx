import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import ShiftTable from "./components/ShiftTable";
import "./index.css"; // Asegúrate de que este archivo contenga estilos globales

function App() {
  return (
    <Router>
      <div className="main-container"> {/* Agrega esta clase al div principal */}
        <Routes>
          <Route path="/" element={<Navigate to="/shifts" />} />
          <Route path="/shifts" element={<ShiftTable />} />
          {/* Otras rutas pueden ser agregadas aquí */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;