import React from 'react';
import PublicationCard from '../components/PublicationCard';
import publicationsData from '../data/publications.json';
import './Publications.css';

function Publications() {
  return (
    <div className="publications-page">
      <h1>Publications</h1>
      <div className="publications-list">
        {publicationsData.map(publication => (
          <PublicationCard 
            key={publication.id} 
            publication={publication} 
          />
        ))}
      </div>
    </div>
  );
}

export default Publications;