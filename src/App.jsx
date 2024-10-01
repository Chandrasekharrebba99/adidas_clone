// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Outlet from './views/Outlet';
import'./index.css'
import SignupOffer from './components/SignupOffer';

// import Outlet from './pages/Outlet';
const App = () => {
  return (
    <Router>
      <SignupOffer/>
      <Header />

      <Routes>
        <Route path="/outlet" element={<Outlet />} />
        {/* <Route path="/outlet" element={<Outlet />} /> */}
      
      </Routes>
    </Router>
  );
};

export default App;
