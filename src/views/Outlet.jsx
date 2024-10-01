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
      <div className='FilterContent'>
        <FilterDrawer/>
      </div>
      <hr/>
      <div className='all-products'>
      <div className='all-products-maincont'>
        {items.map((item)=>{
          return(
            <div className='item-img-container'>
              <img src={item.image} className='itemimg'/>
              <div className='product-content'>
              <p className='price-red'>${item.price}</p>
              <div className='make-flex'>  <p className='original-price'>${Math.floor(item.price+item.price*0.3)}</p>
              
              <span>: -30%  Original price</span>
              </div>
              <br/>
              <span className='item-cat'>{item.category}</span>
              <p>{item.title.slice(0,10)}</p>
              <p>{Math.floor(Math.random()*10)+1} colors</p>
              <button className='addToCartBtn'>Add to Cart</button>
              {/* <p>{item.rating.rate}people:<span>{item.rating.count}</span></p> */}
              </div>
        
            </div>
          )
        })}
       
      </div>
      </div>

    </div>

  </div>;
};

export default Outlet;
