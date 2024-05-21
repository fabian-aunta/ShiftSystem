import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "navbar/Navbar";

import "./index.css";

const App = () => (
  <BrowserRouter>
  <Navbar/>
  <Routes>
  </Routes>
</BrowserRouter>
);
ReactDOM.createRoot(document.getElementById("app")).render(<App />);
