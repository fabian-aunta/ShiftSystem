import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./components/Login";

import "./index.css";

const App = () => (
  <>
    <Login/>
  </>
);
ReactDOM.createRoot(document.getElementById("app")).render(<App />);
