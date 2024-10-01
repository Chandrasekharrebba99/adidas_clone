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
      sx={{ height: 200 }} // Adjust height if needed
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      {/* Plain area, no content here */}
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
