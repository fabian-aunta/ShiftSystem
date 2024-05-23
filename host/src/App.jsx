import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


const Navbar = React.lazy(() => import("navbar/Navbar"));
const Login = React.lazy(() => import("login/Login"));
const Register = React.lazy(() => import("register/Register"));

function parseJwt (token) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
}

let tokenExistAndStillValid = (parseJwt(localStorage.getItem('login')).exp * 1000 > Date.now());

const App = () => (
  <React.Suspense fallback="Loading...">
    <BrowserRouter>
      <>{tokenExistAndStillValid ?
      <> <Navbar />
      </> : <Login /> }</>
      <Routes>
        <Route path="/login" element={<Navbar />} />
        <Route path="/register" element={<Register />} />
        {/* Otras rutas pueden ser agregadas aquí */}
      </Routes>
    </BrowserRouter>
  </React.Suspense>
);

ReactDOM.createRoot(document.getElementById("app")).render(<App />);