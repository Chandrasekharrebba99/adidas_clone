// src/pages/Home.jsx
import React from 'react';
import Outletnav from '../components/Outletnav';
import SaleOffer from '../components/SaleOffer';
import SignupOffer from '../components/SignupOffer';
import FilterDrawer from '../components/filter';

import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/slices/productslice';

const Outlet = () => {
  // const dispatch = useDispatch();
  // const { items, status, error } = useSelector((state) => state.products);

  // useEffect(() => {
  //   if (status === 'idle') {
  //     dispatch(fetchProducts()); // Dispatch the thunk to fetch products
  //   }
  //   console.log(items,"Items")
  // }, [dispatch, status]);

  
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
