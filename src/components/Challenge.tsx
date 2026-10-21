import React from 'react';
import { challengeContent } from '../data/content';
import './Challenge.css';

export const Challenge: React.FC = () => {
  return (
    <section id="desafio" className="section challenge-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{challengeContent.tag}</span>
          <h2 className="section-title">
            {challengeContent.title}
          </h2>
          <div className="section-lead-group">
            {challengeContent.paragraphs.map((para, index) => (
              <p key={index} className="section-lead">
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* Mensagem em Destaque Solicitada */}
        <div className="challenge-highlight-card">
          <div className="highlight-indicator" />
          <p className="highlight-statement">
            "{challengeContent.highlight}"
          </p>
        </div>
      </div>
    </section>
  );
};
