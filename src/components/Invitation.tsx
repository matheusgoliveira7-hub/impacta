import React from 'react';
import { invitationContent } from '../data/content';
import { ArrowRightIcon } from './Icons';
import './Invitation.css';

export const Invitation: React.FC = () => {
  return (
    <section id="convite" className="section invitation-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{invitationContent.tag}</span>
          <h2 className="section-title">
            {invitationContent.title}
          </h2>
          <div className="section-lead-group">
            {invitationContent.paragraphs.map((p, idx) => (
              <p key={idx} className="section-lead">
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* Bloco de Alinhamento e Ação */}
        <div className="invitation-alignment-box">
          <div className="alignment-content">
            <h3 className="alignment-title">Como funciona a aproximação?</h3>
            <p className="alignment-desc">
              {invitationContent.supportMessage}
            </p>
          </div>
          <div className="alignment-cta">
            <a href="#contato" className="btn btn-primary w-full-mobile">
              <span>{invitationContent.ctaText}</span>
              <ArrowRightIcon size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
