// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Header.scss"; // Correct
 // Import the SCSS styles
//  import { IconUser } from '@tabler/icons-react';
//  import { IconHeart } from '@tabler/icons-react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import SearchIcon from '@mui/icons-material/Search';
const Header = () => {
  return (
    <header className="header">
      <div className='nav-help'>
      <div className='help-container'>
        <ul className='row-elements'>
          <li className='list-item-help'>help</li>
          <li className='list-item-help'>wishlist</li>
          <li className='list-item-help'>orders and returns</li>
          <li className='list-item-help'>welcome back user</li>
        </ul>
      </div>
      </div>

      <div className='nav-main-cont'>
        <div className="logo">
          <img src="https://static.vecteezy.com/system/resources/previews/047/758/486/original/adidas-logo-transparent-background-free-png.png" alt="Adidas Logo" />
        </div>
        <div className="menu">
          <div className="categories">
            <Link to="/men">MEN</Link>
            <Link to="/women">WOMEN</Link>
            <Link to="/kids">KIDS</Link>
            <Link to="/sports">SPORTS</Link>
            <Link to="/lifestyle">LIFESTYLE</Link>
            <Link to="/sale">SALE</Link>
          </div>
      
        </div>

        <div className='search-container'>

        <div className="user-actions">
          <div className='serch-cont'>
          <input type="text" placeholder="Search" className="search-bar" />
          <SearchIcon/>
          </div>
           
            <button className="search-button"><PersonOutlineIcon/></button>
            <button className="search-button"><FavoriteBorderIcon/></button>
            <Link to="/cart"> <button className="search-button"><LocalMallIcon/></button>
            </Link>
           
            {/* <div className="profile"><IconUser stroke={2} /></div> */}
            {/* <div className="wishlist"><IconHeart stroke={2} /></div> */}
            <div className="cart"></div>
          </div>
        </div>
      </div>


    </header>
  );
};

export default Header;
