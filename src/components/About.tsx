import React from 'react';
import { aboutContent } from '../data/content';
import './About.css';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="section section-alt about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{aboutContent.tag}</span>
          <h2 className="section-title">
            {aboutContent.title}
          </h2>
          <div className="section-lead-group">
            {aboutContent.paragraphs.map((p, idx) => (
              <p key={idx} className="section-lead">
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* Três Fundamentos da Proposta */}
        <div className="about-fundaments-grid">
          {aboutContent.fundaments.map(item => (
            <div key={item.number} className="about-fundament-card">
              <span className="fundament-num">{item.number}</span>
              <h3 className="fundament-title">{item.title}</h3>
              <p className="fundament-desc">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Princípios Orientadores (Apresentados como base da proposta) */}
        <div className="about-principles-wrapper">
          <h3 className="principles-section-title">Princípios que orientam a proposta</h3>
          <div className="principles-grid">
            {aboutContent.principles.map(principle => (
              <div key={principle.title} className="principle-item">
                <h4 className="principle-name">{principle.title}</h4>
                <p className="principle-desc">{principle.description}</p>
              </div>
            ))}
          </div>
          <p className="principles-note">
            Diretrizes conceituais que norteiam as atividades e o desenvolvimento contínuo da iniciativa.
          </p>
        </div>
      </div>
    </section>
  );
};
