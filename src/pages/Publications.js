import React, { useState } from 'react';
import PublicationCard from '../components/PublicationCard';
import publicationsData from '../data/publications.json';
import './Publications.css';

function Publications() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredPublications = publicationsData.filter(pub => 
    pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pub.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pub.abstract.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="publications-page">
      <div className="container">
        <h1>Publications</h1>
        
        <div className="search-container">
          <input
            type="text"
            placeholder="Search publications..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        
        <div className="publications-list">
          {filteredPublications.length > 0 ? (
            filteredPublications.map(publication => (
              <PublicationCard 
                key={publication.id} 
                publication={publication} 
              />
            ))
          ) : (
            <div className="no-results">
              <p>No publications found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Publications;