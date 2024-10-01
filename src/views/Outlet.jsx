// src/pages/Home.jsx
import React from 'react';
import Outletnav from '../components/Outletnav';
import SaleOffer from '../components/SaleOffer';
import SignupOffer from '../components/SignupOffer';
import FilterDrawer from '../components/filter';

import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/slices/productSlice';

const Outlet = () => {
  return <div>
    <SaleOffer/>
    <div>
      <FilterDrawer/>
      <hr/>
      <div>
        
      </div>
    </div>

  </div>;
};

export default Outlet;
