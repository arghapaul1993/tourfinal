import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai';

import {  Box, Tooltip, IconButton, Avatar } from "@mui/material";
import Styles from "./navabar.module.css"
import trip from "../image/trip.svg"
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaBars } from 'react-icons/fa';
import Musicpage from '../home/music/Musicpage';
import './Navbar.css'
import { useNavigate } from 'react-router-dom';





  
const Navbar = () => {
  const [hide, setHide] = useState(false);
  const [click, setClick] = useState(false);
  const navigate = useNavigate();
  const name = localStorage.getItem('first_name');
  const isLogin = localStorage.getItem('isLogin');

  const handleOpenUserMenu = () => {
    if (isLogin) {
      navigate('/profileForm');
    } else {
      navigate('/form');
      window.alert('You have to login first');
    }
  };

  const handleClick = () => setClick(!click);

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      if (isLogin) {
        console.log('po');
        localStorage.clear();
      }
    }
  };

  return (
    <div className="header">
      <div className="container">
        <div className={Styles.left}>
          <Link to="/">
            <img width="60%" src={trip} alt="Logo" />
          </Link>
        </div>
        <div className="navv">
          <nav>
            <ul className="containerr">
              <li>
                <div className="search-bar">
                  <input type="text" placeholder="Where to" style={{ width: '150px', height: '10px' }} />
                  <button type="submit">
                    <AiOutlineSearch />
                  </button>
                </div>
              </li>
              <li>
                <Link to="/" >
                  Home
                </Link>
              </li>
              <li>
                <Link to="/Advanture" >
                  Adventure
                </Link>
               
              </li>
              <Link to="/contact"><button className={Styles.butt}> Contact Us</button></Link>
              <li>
<li>
<Link to="/contact"><button className={Styles.butt}> About Us</button></Link>
</li>
                        </li>
              <li>
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 2 }}>
                      <h6>{name ? `Hi!! ${name}` : 'Hi Guest!!'}</h6>
                    </IconButton>
                  </Tooltip>
                </Box>
              </li>
              {isLogin ? (
                <li>
                  <Link to="/form" onClick={handleLogout} style={{ textDecoration: 'none' }}>
                    Logout
                  </Link>
                </li>
              ) : (
                <li>
                  <Link to="/form" style={{ textDecoration: 'none' }}>
                    Sign In
                  </Link>
                </li>
              )}
            </ul>

    <ul className={click ? 'nav active' : 'nav'} style={{ listStyle: 'none' }}>
          <li>
            <a href="/contact" style={{ textDecoration: 'none' }}>ContectUs</a>
          </li>
          <li>
            <a href='/' style={{ textDecoration: 'none' }}>Destination</a>
          </li>
          <li>
            <a href='/' style={{ textDecoration: 'none' }}>Review</a>
          </li>
          <li>
            <a href='/' style={{ textDecoration: 'none' }}>Alert</a>
          </li>
          <li>
            <a href='/' style={{ textDecoration: 'none' }}>Trip</a>
          </li>
          <li>
            <a href='/' style={{ textDecoration: 'none' }}>Basket</a>
          </li>
        </ul>
        </nav>
    
        </div>
        
         <Musicpage />
         <FaBars onClick={handleClick} size={20} />
    

        
    </div>

    </div>
  )
}

export default Navbar