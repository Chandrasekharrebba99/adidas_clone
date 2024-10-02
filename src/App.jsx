// src/App.jsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route,Navigate  } from 'react-router-dom';
import Header from './layouts/Header';
import Outlet from './views/Outlet';
import'./index.css'
import SignupOffer from './components/TopOffersDrawer';
import Cart from './views/Cart';
import Footer from './layouts/Footer';

// import Outlet from './pages/Outlet';
const App = () => {

  
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('fade-down');
      } else {
        navbar.classList.remove('fade-down');
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Router>
      <div className='navbar'>  
         <SignupOffer/>
          <Header />
      </div>
   

      <Routes>
        <Route path="/" element={<Navigate to="/outlet" />} />
        <Route path="/outlet" element={<Outlet />} />
        <Route path="/cart" element={<Cart />} />
      
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
