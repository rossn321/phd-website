import React, { useState } from 'react';
import './PublicationCard.css';

function PublicationCard({ publication }) {
  const [expanded, setExpanded] = useState(false);
  
  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  
  const copyToClipboard = () => {
    const citation = `${publication.authors} (${publication.year}). ${publication.title}. ${publication.journal}. DOI: ${publication.doi}`;
    navigator.clipboard.writeText(citation);
    alert('Citation copied to clipboard!');
  };

  return (
    <div className="publication-card">
      <div className="publication-year">
        <span>{publication.year}</span>
      </div>
      
      <div className="publication-content">
        <h3>{publication.title}</h3>
        <p className="authors">{publication.authors}</p>
        <p className="journal">{publication.journal}</p>
        <p className="doi">DOI: <a href={`https://doi.org/${publication.doi}`} target="_blank" rel="noopener noreferrer">{publication.doi}</a></p>
        
        <div className={`abstract-container ${expanded ? 'expanded' : ''}`}>
          <p className="abstract">{publication.abstract}</p>
        </div>
        
        <div className="publication-actions">
          <button className="btn-text" onClick={toggleExpand}>
            {expanded ? 'Show Less' : 'Show Abstract'}
          </button>
          <button className="btn-text" onClick={copyToClipboard}>
            Copy Citation
          </button>
        </div>
      </div>
    </div>
  );
}

export default PublicationCard;