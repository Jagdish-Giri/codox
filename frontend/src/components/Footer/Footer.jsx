import React from 'react'
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
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Courses</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li><a href="#">Contact</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>📧 Email: info@codox.com</p>
          
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Codox. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
