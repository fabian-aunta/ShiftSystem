import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import CurrentShift from "./components/CurrentShift";
import "./index.css"; // Asegúrate de que este archivo contenga estilos globales

const App = () => {
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
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
