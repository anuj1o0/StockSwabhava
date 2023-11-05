import React from 'react';
import './Footer.css'; // Create a CSS file for Footer styling
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'; // Import icons from FontAwesome

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/news">Try Now</a>
          {/* <a href="/whyus">Why Choose Us</a> */}
          <a href="/contact">Contact Us</a>
        </div>
        <div className="contact-details">
          <p>Contact us at: contact@INVESTORस्वाभाव.com</p>
          <p>@ all right reserved, INVESTORस्वाभाव</p>
        </div>
        <div className="social-icons">
          <a href="https://www.instagram.com/yourinstagram" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
