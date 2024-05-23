import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import ShiftTable from "./components/ShiftTable";
import "./index.css";

const App = () => {
  return (
    <Router>
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Navigate to="/shifts" />} />
          <Route path="/shifts" element={<ShiftTable />} />
        </Routes>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
