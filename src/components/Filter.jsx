import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';

const FilterDrawer = ()=> {

  const [open, setOpen] = useState(false);

  const toggleDrawer = (isOpen) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(isOpen);
  };

  return (
    <div>
      {/* Button to open the drawer */}

      <button className='filter-btn'   onClick={toggleDrawer(true)}>
      FILTER & SORT
      </button>

      {/* Right-side drawer */}
      <Drawer
        anchor="right" // Drawer slides from the right
        open={open} // Drawer is open if `open` state is true
        onClose={toggleDrawer(false)} // Closes the drawer when clicking outside
      >
        {/* Empty box inside the drawer */}
        <Box
          sx={{ width: 450 }} // Width of the drawer
          role="presentation"
          onClick={toggleDrawer(false)} // Closes the drawer when clicking inside
          onKeyDown={toggleDrawer(false)} // Closes the drawer when using keyboard navigation
        >
          {/* Empty content */}
        </Box>
      </Drawer>
    </div>
  );
}

export default FilterDrawer