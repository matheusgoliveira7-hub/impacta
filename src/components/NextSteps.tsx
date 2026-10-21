import React from 'react';
import { nextStepsContent } from '../data/content';
import { NextStepItem } from '../types';
import { InfoIcon } from './Icons';
import './NextSteps.css';

export const NextSteps: React.FC = () => {
  return (
    <section id="futuro" className="section section-alt next-steps-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{nextStepsContent.tag}</span>
          <h2 className="section-title">
            {nextStepsContent.title}
          </h2>
        </div>

        {/* Grade das 3 Possibilidades em Estudo */}
        <div className="next-steps-grid">
          {nextStepsContent.steps.map((step: NextStepItem) => (
            <div key={step.title} className="next-step-card">
              <div className="card-top-row">
                <span className="badge-pill badge-neutral">{step.tag}</span>
              </div>

              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Nota Discreta de Alinhamento */}
        <div className="alignment-disclaimer">
          <InfoIcon size={18} className="disclaimer-icon" />
          <p className="disclaimer-text">
            {nextStepsContent.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
};
