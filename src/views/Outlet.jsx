// src/pages/Home.jsx
import React, { useState } from 'react';
import Outletnav from '../components/OutletNav';
import SaleCategories  from '../components/SaleCategories';
import SignupOffer from '../components/TopOffersDrawer';
import FilterDrawer from '../components/filter';

import { useSelector, useDispatch } from 'react-redux';
import {useEffect} from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { fetchProducts,addToCart } from '../redux/slices/productslice';
// import { fetchProducts,addToCart } from '../redux/slices/productSlice';



const Outlet = () => {
  const dispatch = useDispatch();
  const { items, cart, error } = useSelector((state) => state.products);
  const [addItem,setAddItem] = useState({})

  useEffect(() => {
   
      dispatch(fetchProducts()); // Dispatch the thunk to fetch products
     
     console.log(cart)
  }, [dispatch]);
 
  const handleAddItem = (product) => {
    // setAddItem(item)
    dispatch(addToCart(product));
    console.log("item added",product)
  }

  return <div>
    <SaleCategories/>
    <div>
      <div className='FilterContent'>
        
        <FilterDrawer/>
      </div>
      <hr/>
      <div className='all-products'>
      <div className='all-products-maincont'>
        {items.map((item)=>{
          return(
            <div className='item-img-container' key={item.id}>
              <img src={item.image} className='itemimg'/>
              <div className='product-content'>
              <p className='price-red'>${item.price}</p>
              <div className='make-flex'>  <p className='original-price'>${Math.floor(item.price+item.price*0.3)}</p>
              
              <span>: -30%  Original price</span>
              </div>
              <br/>
              <span className='item-cat'>{item.category.toUpperCase()}</span>
              <p>{item.title.slice(0,10)}</p>
              <p>{Math.floor(Math.random()*10)+1} colors</p>
            
                <button className='addToCartBtn dropdown-cont ' onClick={(e)=>handleAddItem(item)} >Add to Cart  &nbsp; <ArrowForwardIcon/></button>
              
             
              
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
