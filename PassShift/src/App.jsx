import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PassTurn from './components/PassTurn';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <BrowserRouter>
     <PassTurn />
  </BrowserRouter>
);

export default App;
