// src/pages/Home.jsx
import React from 'react';
import Outletnav from '../components/Outletnav';
import SaleOffer from '../components/SaleOffer';
import SignupOffer from '../components/SignupOffer';
import FilterDrawer from '../components/filter';

import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/slices/productslice';
import {useEffect} from 'react'


const Outlet = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts()); // Dispatch the thunk to fetch products
    }
    console.log(items,"Items")
  }, [dispatch, status]);

  
  return <div>
    <SaleOffer/>
    <div>
      <FilterDrawer/>
      <hr/>
      <div className='all-products-maincont'>
        {items.map((item)=>{
          return(
            <div className='item-img-container'>
              <img src={item.image} className='itemimg'/>
              <p>${item.price}</p>
              <p>${item.price+item.price*0.3}:-30% original price</p>
              <p>{item.title.slice(0,10)}</p>
              <p>{item.category}</p>
              <p>{item.rating.rate}people:<span>{item.rating.count}</span></p>
            </div>
          )
        })}
       
      </div>
    </div>

  </div>;
};

export default Outlet;
