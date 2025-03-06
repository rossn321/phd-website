import React from 'react';
import './PublicationCard.css';

function PublicationCard({ publication }) {
  return (
    <div className="publication-card">
      <h3>{publication.title}</h3>
      <p className="authors">{publication.authors}</p>
      <p className="journal">{publication.journal}, {publication.year}</p>
      <p className="doi">DOI: {publication.doi}</p>
      <p className="abstract">{publication.abstract}</p>
    </div>
  );
}

export default PublicationCard;