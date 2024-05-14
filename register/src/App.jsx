import React from "react";
import ReactDOM from "react-dom/client";
import Register from "./components/Register";

import "./index.css";

const App = () => (
  <>
    <Register/>
  </>
);
ReactDOM.createRoot(document.getElementById("app")).render(<App />);
