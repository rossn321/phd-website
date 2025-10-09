import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: bg@ed.ac.uk</p>
          <p>Office: Informatics Forum, Room 1000000</p>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/publications">Publications</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Connect</h3>
          <div className="social-links">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://bsky.app/profile/bhargaviganesh.bsky.social" target="_blank" rel="noopener noreferrer">BlueSky</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Google Scholar</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© {currentYear} Bhargavi Ganesh. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;