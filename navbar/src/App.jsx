import React from "react";
import ReactDOM from "react-dom/client";
import NavbarComponent from "./components/NavbarComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";

const App = () => (
  <>
    <BrowserRouter>
      <NavbarComponent/>
    </BrowserRouter>
   
  </>
);
ReactDOM.createRoot(document.getElementById("app")).render(<App />);
