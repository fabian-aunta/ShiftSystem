import React from "react";
import { BrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <BrowserRouter>
    <Login />
  </BrowserRouter>
);

export default App; // Asegúrate de que esta línea está presente
