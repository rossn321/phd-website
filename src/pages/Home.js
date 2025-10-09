import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import AnimatedElement from '../components/AnimatedElement';

function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Bhargavi Ganesh</h1>
          <h2 className="hero-subtitle">PhD Researcher in AI Governance</h2>
          <p className="hero-text">
            Exploring the ethical implications and governance frameworks for artificial intelligence at the University of Edinburgh.
          </p>
          <div className="hero-buttons">
            <Link to="/about" className="btn btn-primary">About Me</Link>
            <Link to="/publications" className="btn btn-secondary">Publications</Link>
          </div>
        </div>
      </section>
      
      <section className="home-section">
        <div className="container">
          <div className="section-grid">
            <div className="section-content">
              <h2>Research Focus</h2>
              <p>
                My research examines the intersection of artificial intelligence, ethics, and public policy. I focus on developing governance frameworks that promote responsible AI innovation while protecting human values and rights.
              </p>
              <Link to="/about" className="text-link">Learn more about my research →</Link>
            </div>
            <div className="research-areas">
              <div className="research-area">
                <h3>AI Ethics</h3>
                <p>Exploring ethical frameworks for artificial intelligence development and deployment.</p>
              </div>
              <div className="research-area">
                <h3>Governance</h3>
                <p>Developing policy recommendations for effective AI governance.</p>
              </div>
              <div className="research-area">
                <h3>Responsible AI</h3>
                <p>Investigating methods to ensure AI systems respect human values and rights.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="home-section latest-publications">
        <div className="container">
          <h2>Latest Publication</h2>
          <div className="publication-highlight">
            <h3>Study of Cute Scottish Boys</h3>
            <p className="authors">Ganesh, Bhargavi</p>
            <p className="journal">Journal of Examples, 2025</p>
            <p className="abstract-preview">Observing the behavior of cute Scottish boys in their natural habitat.</p>
            <Link to="/publications" className="text-link">View all publications →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;