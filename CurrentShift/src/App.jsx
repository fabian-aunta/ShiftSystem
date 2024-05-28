import React from "react";
import { BrowserRouter } from "react-router-dom";
import CurrentShift from "./components/CurrentShift";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <BrowserRouter>
    <CurrentShift />
  </BrowserRouter>
);

export default App;
