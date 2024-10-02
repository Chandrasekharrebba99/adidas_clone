import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TuneIcon from '@mui/icons-material/Tune';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import CloseIcon from '@mui/icons-material/Close';
const FilterDrawer = () => {
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
      <button className='filter-btn' onClick={toggleDrawer(true)}>
        FILTER&nbsp; &&nbsp; SORT &nbsp; <TuneIcon/>
      </button>

      {/* Right-side drawer */}
      <Drawer
        anchor="right" // Drawer slides from the right
        open={open} // Drawer is open if `open` state is true
        onClose={toggleDrawer(false)} // Close the drawer if user clicks outside
      >
        {/* Content inside the drawer */}
        <Box
          sx={{ width: 350 }} // Width of the drawer
          role="presentation"
        >
          
          
          <div className='cross-icon-cont'>
          <div>
          <h3>Filter & Sort </h3>
          </div>

          <CloseIcon onClick={toggleDrawer(false)} className='cross-btn'/>

          </div>
         
          

          <div>
            <Accordion sx={{ boxShadow: 'none', marginBottom: 0 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Sort by</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ margin: 0 }}>
                <Typography>You can return any item within 30 days of purchase.</Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ boxShadow: 'none', marginBottom: 0 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>FEARUTES</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ margin: 0 }}>
                <Typography>You can track your order using the tracking link provided in your confirmation email.</Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ boxShadow: 'none', marginBottom: 0 }} >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>MEMBERS EXCLUSIVE-EXTRA 15% OFF</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ margin: 0 }}>
                <Typography>You can track your order using the tracking link provided in your confirmation email.</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ boxShadow: 'none', marginBottom: 0 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>DIVISION</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ margin: 0 }}>
                <Typography>You can track your order using the tracking link provided in your confirmation email.</Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ boxShadow: 'none', marginBottom: 0 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>PRODUCT TYPE</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ margin: 0  }}>
                <Typography>You can track your order using the tracking link provided in your confirmation email.</Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ boxShadow: 'none', marginBottom: 0 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>SIZE</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ margin: 0  }}>
                <Typography>You can track your order using the tracking link provided in your confirmation email.</Typography>
              </AccordionDetails>
            </Accordion>


            <Accordion sx={{ boxShadow: 'none', marginBottom: 0 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>COLOUR</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ margin: 0  }}>
                <Typography>You can track your order using the tracking link provided in your confirmation email.</Typography>
              </AccordionDetails>
            </Accordion>


            <Accordion sx={{ boxShadow: 'none', marginBottom: 0 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>DISCOUNT</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ margin: 0  }}>
                <Typography>You can track your order using the tracking link provided in your confirmation email.</Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ boxShadow: 'none', marginBottom: 0 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>GENDER</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ margin: 0  }}>
                <Typography>You can track your order using the tracking link provided in your confirmation email.</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ boxShadow: 'none', marginBottom: 0 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>SPORTS</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ margin: 0  }}>
                <Typography>You can track your order using the tracking link provided in your confirmation email.</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ boxShadow: 'none', marginBottom: 0 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>BRAND</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ margin: 0  }}>
                <Typography>You can track your order using the tracking link provided in your confirmation email.</Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ boxShadow: 'none', marginBottom: 0 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>TEAM</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ margin: 0  }}>
                <Typography>You can track your order using the tracking link provided in your confirmation email.</Typography>
              </AccordionDetails>
            </Accordion>


            <Accordion sx={{ boxShadow: 'none', marginBottom: 0 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>COLLECTIONS</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ margin: 0  }}>
                <Typography>You can track your order using the tracking link provided in your confirmation email.</Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ boxShadow: 'none', marginBottom: 0 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>SUSTAINABILITY</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ margin: 0  }}>
                <Typography>You can track your order using the tracking link provided in your confirmation email.</Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ boxShadow: 'none', marginBottom: 0 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>PRICE</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ margin: 0  }}>
                <Typography>You can track your order using the tracking link provided in your confirmation email.</Typography>
              </AccordionDetails>
            </Accordion>
            {/* Add more Accordion items if needed */}
          </div>
          <div className='Checkout-cont'>
                   <h1>APPLY </h1>
                   <ArrowRightAltIcon/>
                </div>
        </Box>
      </Drawer>
    </div>
  );
};

export default FilterDrawer;
