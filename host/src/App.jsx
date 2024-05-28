import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import NavbarComponent from "navbar/Navbar";
import Login from "login/Login";
import Register from "register/Register";
import CurrentShift from "currentShift/CurrentShift";
import ShiftTable from "shiftTable/ShiftTable";
import WelcomeCard from "welcomeCard/WelcomeCard";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <React.Suspense fallback="Loading...">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Layout />}>
          <Route path="/listTurn" element={<ShiftTable />} />
          <Route path="/turn" element={<CurrentShift />} />
          <Route path="/welcome" element={<WelcomeCard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.Suspense>
);

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
