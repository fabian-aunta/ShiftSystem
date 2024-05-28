import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomeCard from './components/WelcomeCard';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<WelcomeCard userName="John Doe" turnNumber="A123" />} />
    </Routes>
  </Router>
);

export default App;
