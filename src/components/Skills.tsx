import React from 'react';
import {
  OrganizationIcon,
  PlanningIcon,
  CommunicationIcon,
  LeadershipIcon,
  FinanceIcon,
  CriticalThinkingIcon
} from './Icons';
import { skillsContent } from '../data/content';
import { SkillItem } from '../types';
import './Skills.css';

const iconMap = {
  organization: OrganizationIcon,
  planning: PlanningIcon,
  communication: CommunicationIcon,
  leadership: LeadershipIcon,
  finance: FinanceIcon,
  criticalThinking: CriticalThinkingIcon
};

export const Skills: React.FC = () => {
  return (
    <section id="competencias" className="section skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{skillsContent.tag}</span>
          <h2 className="section-title">
            {skillsContent.title}
          </h2>
          <p className="section-lead">
            {skillsContent.lead}
          </p>
        </div>

        {/* Grade das 6 Competências */}
        <div className="skills-grid">
          {skillsContent.skills.map((skill: SkillItem) => {
            const IconComponent = iconMap[skill.iconName];
            return (
              <div key={skill.id} className="skill-card">
                <div className="skill-icon-wrapper">
                  <IconComponent size={24} className="skill-icon" />
                </div>
                <h3 className="skill-title">{skill.title}</h3>
                <p className="skill-application-text">
                  {skill.application}
                </p>
              </div>
            );
          })}
        </div>

        {/* Nota de Integridade Pedagógica */}
        <div className="skills-note-box">
          <p className="skills-note-text">
            {skillsContent.note}
          </p>
        </div>
      </div>
    </section>
  );
};
