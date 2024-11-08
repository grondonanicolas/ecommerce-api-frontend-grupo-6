import React from 'react';
import './ImageComponent.css';
import backgroundImage from '../images/Imagen.png';
import logo from '../images/logo.png';
import facebookIcon from '../images/facebook.svg';
import instagramIcon from '../images/instagram.svg';
import twitterIcon from '../images/twitter.svg';

const ImageComponent = () => {
  return (
    <div className="image-component">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
       
      </div>
      <div className="social-icons">
        <img src={facebookIcon} alt="Facebook" />
        <img src={instagramIcon} alt="Instagram" />
        <img src={twitterIcon} alt="Twitter" />
      </div>
    </div>
  );
};

export default ImageComponent;