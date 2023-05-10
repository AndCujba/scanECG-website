import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="ecg__navbar">
      <div className="ecg__navbar-links">
        <div className="ecg__navbar-links_logo">
          <h1>ScanECG</h1>
        </div>
        <div className="ecg__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#ecg">What is ScanECG?</a></p>
          <p><a href="#features">Library</a></p>
          <p><a href="#blog">Blog</a></p>
          <p><a href="#prices">Prices</a></p>
        </div>
      </div>
      
      <div className="ecg__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="ecg__navbar-menu_container scale-up-center">
          <div className="ecg__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#ecg">What is ScanECG?</a></p>
            <p><a href="#features">Library</a></p>
            <p><a href="#blog">Blog</a></p>
            <p><a href="#prices">Prices</a></p>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;