import React from 'react';
import './Awards.css';
import AnimatedElement from '../components/AnimatedElement';

function Awards() {
  // Sample awards data - replace with actual data from a JSON file later
  const awards = [
    {
      id: 1,
      title: "Cutest PhD Student",
      organization: "University of Edinburgh",
      year: "2025",
      description: "Awarded for exceptional cuteness while conducting doctoral research."
    },
    {
      id: 2,
      title: "Cutest PhD Student",
      organization: "University of Edinburgh",
      year: "2024",
      description: "Recognized for maintaining high standards of cuteness in academic settings."
    },
    {
      id: 3,
      title: "Outstanding Research Paper",
      organization: "International Conference on AI Ethics",
      year: "2024",
      description: "Awarded for the paper 'Ethical Frameworks for AI Governance in Public Policy'."
    },
    {
      id: 4,
      title: "Young Researcher Fellowship",
      organization: "AI Policy Foundation",
      year: "2023",
      description: "Competitive fellowship awarded to promising early-career researchers in AI governance."
    }
  ];

  // Group awards by year
  const groupedAwards = awards.reduce((acc, award) => {
    if (!acc[award.year]) {
      acc[award.year] = [];
    }
    acc[award.year].push(award);
    return acc;
  }, {});

  // Sort years in descending order
  const sortedYears = Object.keys(groupedAwards).sort((a, b) => b - a);

  return (
    <div className="awards-page">
      <div className="container">
        <AnimatedElement animation="fade-in">
          <h1>Awards & Honors</h1>
          <p className="page-description">
            Recognition received for research, academic excellence, and contributions to the field of AI ethics and governance.
          </p>
        </AnimatedElement>
        
        <div className="awards-timeline">
          {sortedYears.map((year, yearIndex) => (
            <div key={year} className="awards-year-group">
              <AnimatedElement animation="slide-right" delay={yearIndex * 0.1}>
                <div className="year-marker">
                  <span>{year}</span>
                </div>
              </AnimatedElement>
              
              <div className="year-awards">
                {groupedAwards[year].map((award, awardIndex) => (
                  <AnimatedElement key={award.id} animation="fade-in" delay={yearIndex * 0.1 + awardIndex * 0.1 + 0.2}>
                    <div className="award-card">
                      <h3>{award.title}</h3>
                      <p className="award-organization">{award.organization}</p>
                      <p className="award-description">{award.description}</p>
                    </div>
                  </AnimatedElement>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <AnimatedElement animation="fade-in" delay={0.4}>
          <div className="other-recognition">
            <h2>Other Recognition</h2>
            <ul className="recognition-list">
              <li>Invited speaker at the Global AI Policy Summit (2024)</li>
              <li>Member of the Scottish AI Ethics Working Group (2023-present)</li>
              <li>Graduate Student Representative, University of Edinburgh School of Informatics (2022-2023)</li>
            </ul>
          </div>
        </AnimatedElement>
      </div>
    </div>
  );
}

export default Awards;