import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send the form data to a server
    // This is just a simulation
    setFormStatus({
      submitted: true,
      error: false
    });
    
    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      <div className="container">
        <h1>Contact Me</h1>
        
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-card">
              <h3>Get in Touch</h3>
              <p>Please feel free to contact me with any questions, inquiries, or collaboration opportunities.</p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <strong>Email:</strong>
                  <span>bg@ed.ac.uk</span>
                </div>
                
                <div className="contact-item">
                  <strong>Office:</strong>
                  <span>Informatics Forum, Room 1000000</span>
                </div>
                
                <div className="contact-item">
                  <strong>Address:</strong>
                  <span>10 Crichton Street, Edinburgh, EH8 9AB, UK</span>
                </div>
              </div>
              
              <div className="social-links">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://bsky.app/profile/bhargaviganesh.bsky.social" target="_blank" rel="noopener noreferrer">BlueSky</a>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            {formStatus.submitted ? (
              <div className="form-success">
                <h3>Thank you for your message!</h3>
                <p>I will get back to you as soon as possible.</p>
                <button 
                  className="btn btn-primary"
                  onClick={() => setFormStatus({ submitted: false, error: false })}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;