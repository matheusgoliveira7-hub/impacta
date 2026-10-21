import React from 'react';
import { timelineContent } from '../data/content';
import { TimelineItem } from '../types';
import './Timeline.css';

export const Timeline: React.FC = () => {
  return (
    <section id="trajetoria" className="section timeline-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{timelineContent.tag}</span>
          <h2 className="section-title">
            {timelineContent.title}
          </h2>
        </div>

        {/* Linha do Tempo Fiel às 3 Etapas */}
        <div className="timeline-wrapper">
          <div className="timeline-track" />

          <div className="timeline-items">
            {timelineContent.steps.map((item: TimelineItem) => (
              <div key={item.number} className="timeline-entry">
                <div className="timeline-marker">
                  <span className="marker-number">{item.number}</span>
                </div>

                <div className="timeline-body">
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mensagem de Fechamento da Seção */}
        <div className="timeline-closing-card">
          <p className="timeline-closing-text">
            {timelineContent.closingMessage}
          </p>
        </div>
      </div>
    </section>
  );
};
