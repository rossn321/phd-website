import React from 'react';
import './About.css';
import AnimatedElement from '../components/AnimatedElement';

function About() {
  return (
    <div className="about-page">
      <div className="about-container container">
        <AnimatedElement animation="fade-in">
          <div className="about-header">
            <h1>About Me</h1>
          </div>
        </AnimatedElement>
        
        <div className="about-content">
          <AnimatedElement animation="slide-right">
            <div className="profile-section">
              <div className="profile-image">
                {/* Need to replace with real image */}
                <div className="placeholder-image">BG</div>
              </div>
              
              <div className="profile-details">
                <h2>Bhargavi Ganesh</h2>
                <p className="title">PhD Candidate in AI Governance</p>
                <p className="university">University of Edinburgh</p>
                <p className="department">School of Informatics</p>
                <div className="social-links">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  <a href="https://bsky.app/profile/bhargaviganesh.bsky.social" target="_blank" rel="noopener noreferrer">BlueSky</a>
                  <a href="#" target="_blank" rel="noopener noreferrer">Google Scholar</a>
                </div>
              </div>
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="fade-in" delay={0.2}>
            <div className="bio-section">
              <h3>Biography</h3>
              <p>
                I am a PhD candidate at the University of Edinburgh, focusing on AI governance and ethics. 
                My research examines the intersection of artificial intelligence technologies and their broader societal implications, with an emphasis on developing frameworks that promote responsible innovation while safeguarding human values.
              </p>
              <p>
                Through my work, I aim to bridge the gap between technical AI development and ethical considerations, exploring how governance structures can adapt to rapidly evolving technologies while remaining grounded in democratic principles and human rights.
              </p>
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="fade-in" delay={0.3}>
            <div className="research-section">
              <h3>Research Interests</h3>
              <div className="research-tags">
                <span className="research-tag">AI Ethics</span>
                <span className="research-tag">Responsible AI</span>
                <span className="research-tag">AI Governance</span>
                <span className="research-tag">Technology Policy</span>
                <span className="research-tag">Algorithmic Fairness</span>
                <span className="research-tag">Digital Rights</span>
              </div>
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="fade-in" delay={0.4}>
            <div className="education-section">
              <h3>Education</h3>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4>PhD in AI Governance</h4>
                    <p className="institution">University of Edinburgh</p>
                    <p className="years">2021 - Present</p>
                    <p className="description">Research on ethical frameworks for governing advanced AI systems</p>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4>MSc in AI Ethics</h4>
                    <p className="institution">University of Chicago</p>
                    <p className="years">2020 - 2021</p>
                    <p className="description">Thesis on algorithmic fairness in automated decision systems</p>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4>BSc in Computer Science</h4>
                    <p className="institution">New York University</p>
                    <p className="years">2016 - 2020</p>
                    <p className="description">Focus on artificial intelligence and machine learning</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </div>
  );
}

export default About;