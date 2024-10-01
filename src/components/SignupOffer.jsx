import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';

export default function SignupOffer() {
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ top: open });
  };

  const drawerContent = () => (
    <Box
      sx={{ height: 450 }} // Adjust height if needed
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <div className='Drawer-content'>
        <div>
          
        </div>
        <div className='Drawer-content-collection'>
            <div>
                <p className='maint-p-tag'>
                SIGN UP & GET 15% OFF
                </p>
                <p>
                Members get more! Like a 15% discount voucher, early access to the sale and access to limited edition products. Sign up now!
                </p>
              <p className='hover-p-tag'>LEARN MORE</p>
            </div>

            <div>
                <p className='maint-p-tag'>
                FREE DELIVERY, RETURN & EXCHANGE
                </p>
                <p>
                Spend over Rs1000/- and your delivery is FREE!
                For all orders, Return & Exchange is offered for free.
                Delivery times for Delhi, Gurgaon: 1-2 Days, Metro Cities: 2-3 Days Others: 3-5 Days.              </p>
              <div className='d-inline'>
              <p className='hover-p-tag'>READ MORE ON DELIVERY</p><br/>
              <p className='hover-p-tag'>READ MORE ON RETURN</p><br/>
              <p className='hover-p-tag'>READ MORE ON EXCHANGE</p>
              </div>
             
            </div>
            <div>
                <p className='maint-p-tag'>
                EXTRA 5% OFF ON PREPAID ORDERS
                </p>
                <p>
                Save 5% Extra on prepaid payments for all orders under Rs 5000/-
                Easy Payments from UPI, Credit Card, and Net-banking</p>
              
            </div>
        </div>
      </div>
    </Box>
  );
  const [text, setText] = React.useState('Hello'); // Initial text

  // Array of text options to cycle through
  const texts = ['SIGN UP & GET 15% OFF', 'FREE DELIVERY, RETURN & EXCHANGE', 'EXTRA 5% OFF ON PREPAID ORDERS'];

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      // Update the text every 3 seconds
      index = (index + 1) % texts.length; // Loop through texts array
      setText(texts[index]);
    }, 2000); // 3000ms = 3 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* <Button >Open Menu</Button> */}
      <div onClick={toggleDrawer(true)} className='topdropbox'>
        <p>{text}</p>
      </div>
      <SwipeableDrawer
        anchor="top"
        open={state.top}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {drawerContent()}
      </SwipeableDrawer>
    </div>
  );
}
