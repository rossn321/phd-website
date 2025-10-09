import React from 'react';
import './Talks.css';
import AnimatedElement from '../components/AnimatedElement';

function Talks() {
  // Sample talks data - replace with actual data from a JSON file later
  const talks = [
    {
      id: 1,
      title: "The Future of AI Governance",
      event: "International Conference on AI Ethics",
      location: "Edinburgh, UK",
      date: "March 15, 2025",
      description: "Presented research on emerging frameworks for governing AI systems across different jurisdictions.",
      slides: "#",
      video: "#"
    },
    {
      id: 2,
      title: "Algorithmic Decision-Making in Public Policy",
      event: "Tech Policy Workshop",
      location: "Online",
      date: "January 20, 2025",
      description: "Discussed the ethical implications of using AI for government decision-making processes.",
      slides: "#",
      video: null
    },
    {
      id: 3,
      title: "Responsible AI Development",
      event: "University Lecture Series",
      location: "University of Edinburgh",
      date: "November 10, 2024",
      description: "Guest lecture on building AI systems with embedded ethical considerations from the ground up.",
      slides: "#",
      video: "#"
    }
  ];

  return (
    <div className="talks-page">
      <div className="container">
        <AnimatedElement animation="fade-in">
          <h1>Talks & Presentations</h1>
          <p className="page-description">
            Selected talks, presentations, and panel discussions on AI governance, ethics, and public policy.
          </p>
        </AnimatedElement>
        
        <div className="talks-list">
          {talks.map((talk, index) => (
            <AnimatedElement key={talk.id} animation="slide-up" delay={index * 0.1}>
              <div className="talk-card">
                <div className="talk-date">{talk.date}</div>
                <div className="talk-content">
                  <h3>{talk.title}</h3>
                  <div className="talk-event">
                    <span className="event-name">{talk.event}</span>
                    <span className="event-location">{talk.location}</span>
                  </div>
                  <p className="talk-description">{talk.description}</p>
                  <div className="talk-links">
                    {talk.slides && (
                      <a href={talk.slides} target="_blank" rel="noopener noreferrer" className="talk-link">View Slides</a>
                    )}
                    {talk.video && (
                      <a href={talk.video} target="_blank" rel="noopener noreferrer" className="talk-link">Watch Recording</a>
                    )}
                  </div>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
        
        <AnimatedElement animation="fade-in" delay={0.3}>
          <div className="upcoming-talks">
            <h2>Upcoming Talks</h2>
            <div className="upcoming-talk">
              <h3>Democratizing AI Governance</h3>
              <p className="upcoming-details">
                <span className="upcoming-event">AI Policy Summit</span>
                <span className="upcoming-date">June 5, 2025</span>
                <span className="upcoming-location">London, UK</span>
              </p>
              <p className="upcoming-description">
                Will be discussing approaches to make AI governance more inclusive and participatory.
              </p>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </div>
  );
}

export default Talks;