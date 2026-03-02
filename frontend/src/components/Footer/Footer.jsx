import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-content">
        <div className="footer-section">
          <div className='logodiv'>
            <h1 className='footer-logo'>Codox<span className='color'>.</span></h1>
          </div>
          <p className='footer-description'>Learn coding from the best instructors and transform your career.</p>
          <div className="social-links">
            <a href="#" className="social-icon"><BsInstagram /></a>
            <a href="#" className="social-icon"><FaFacebookF /></a>
            <a href="#" className="social-icon"><FaTwitter /></a>
            <a href="#" className="social-icon"><FaYoutube /></a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About Us</Link></li>
            <li><Link to='/services'>Services</Link></li>
            <li><Link to='/courses'>Courses</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/faq'>FAQ</Link></li>
            <li><Link to='/privacy'>Privacy Policy</Link></li>
            <li><Link to='/terms'>Terms & Conditions</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>� 123 Main Street, City, Country</p>
          <p>📧 Email: info@codox.com</p>
          <p>📞 Phone: +1 (123) 456-7890</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Codox. All rights reserved. | Designed with ❤️</p>
      </div>
    </footer>
  )
}

export default Footer
