import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Navbar = React.lazy(() => import("navbar/Navbar"));
const Login = React.lazy(() => import("login/Login"));
const Register = React.lazy(() => import("register/Register"));

import "./index.css";

const App = () => (
  <React.Suspense fallback="Loading...">
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Otras rutas pueden ser agregadas aquí */}
      </Routes>
    </BrowserRouter>
  </React.Suspense>
);

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
