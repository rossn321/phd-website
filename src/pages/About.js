// src/pages/About.js
import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <div className="about-container">
        <div className="about-header">
          <h1>About Me</h1>
        </div>
        
        <div className="about-content">
          <div className="profile-section">
            <div className="profile-image">
              {/* Need to replace with real image */}
              <div className="placeholder-image">BG</div>
            </div>
            
            <div className="profile-details">
              <h2>Bhargavi Ganesh</h2>
              <p className="title">PhD Candidate in AI Governance</p>
              <p className="university">University of Edinburgh</p>
              <p className="department">Schhol of Informatics</p>
              <div className="social-links">
                {/* Add social media or academic profile links here */}
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://bsky.app/profile/bhargaviganesh.bsky.social" target="_blank" rel="noopener noreferrer">BlueSky</a>
              </div>
            </div>
          </div>
          
          <div className="bio-section">
            <h3>Biography</h3>
            <p>
              I am a PhD candidate at the University of Edinburgh, focusing on AI governance and ethics. 
              My research examines bla bla bla bla bla bla bla bla bla bla bla bla bla bla blaaaaaaaaaaaaaaaa
            </p>
            <p>
              Next Paragraph
            </p>
          </div>
          
          <div className="research-section">
            <h3>Research Interests</h3>
            <ul>
              <li>AI Ethics and Governance</li>
              <li>Responsible AI</li>
              <li>etc.</li>
            </ul>
          </div>
          
          <div className="education-section">
            <h3>Education</h3>
            <div className="education-item">
              <p className="degree">PhD in being cute</p>
              <p className="institution">University of Edinburgh</p>
              <p className="years">2021 - Present</p>
            </div>
            <div className="education-item">
              <p className="degree">MSc</p>
              <p className="institution">University of Chicago?</p>
              <p className="years">2020 - 2021?</p>
            </div>
            <div className="education-item">
              <p className="degree">BSc</p>
              <p className="institution">New York University?</p>
              <p className="years">99BC - 1</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;