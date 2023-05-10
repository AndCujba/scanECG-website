import React from 'react';
import logo6 from '../../assets/logo6.png';
import people from '../../assets/people.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple } from '@fortawesome/free-brands-svg-icons'
import { faCloudArrowDown } from '@fortawesome/free-solid-svg-icons'
import './header.css';   
 
const Header = () => (
  <div className="ecg__header section__padding" id="home">
    <div className="ecg__header-content">
      <h1 className="gradient__text">Build to provide home monitoring ECG</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam turpis leo, scelerisque a consectetur vitae, venenatis eu tortor. Nunc malesuada at odio at mattis. Duis id consequat justo.</p>

      <div className="ecg__header-content__input">
        <button type="button">Download <FontAwesomeIcon icon={faCloudArrowDown} style={{color: "#000000",}}/></button>
        <button className='button-apple' type="button">Download <FontAwesomeIcon  icon={faApple} size='lg' style={{color: "#000000",}} /></button>
      </div>

      <div className="ecg__header-content__people">
        <img src={people} />
        <p>2,800 people already downloaded the app</p>
      </div> 
    </div> 

    <div className="ecg__header-image">
      <img src={logo6} /> 
    </div>  
  </div>
);

export default Header;