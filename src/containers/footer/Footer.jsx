import React from 'react';
import './footer.css';

const Footer = () => (
  <div className="ecg__footer section__padding">
    <div className="ecg__footer-heading">
      <h1 className="gradient__text">It'sa new beggining, so let's make history</h1>
    </div>

    <div className="ecg__footer-btn">
      <p>Leave a comment</p>
    </div>
    <div className="ecg__footer-links">
      <div className="ecg__footer-links_div">
        <h4>Links</h4>
        <p>Social Media</p>
        <p>Contact</p>
        <p>Website</p>
      </div>
      <div className="ecg__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="ecg__footer-links_div">
        <h4>Get in touch</h4>
        <p>Lorem Ipsum</p>
        <p>0222222222</p>
        <p>123@gmail.com</p>
      </div>
    </div>

    <div className="ecg__footer-copyright">
      <p>@2023 ScanECG. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;