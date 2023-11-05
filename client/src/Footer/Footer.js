import React from 'react';
import './Footer.css'; // Create a CSS file for Footer styling
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'; // Import icons from FontAwesome

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/news">News</a>
          <a href="/whyus">Why Choose Us</a>
          <a href="/contact">Contact Us</a>
        </div>
        <div className="contact-details">
          <p>Contact us at: contact@example.com</p>
          <p>123 Street Name, City, Country</p>
        </div>
        <div className="social-icons">
          <a href="https://www.instagram.com/yourinstagram" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
