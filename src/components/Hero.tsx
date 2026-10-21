import React from 'react';
import { ArrowRightIcon } from './Icons';
import { siteConfig, heroContent, challengeContent } from '../data/content';
import './Hero.css';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          {/* Badge de Contexto */}
          <div className="hero-badge-wrapper">
            <span className="badge-pill badge-amber">
              {siteConfig.statusBadge}
            </span>
            <span className="hero-context-tag">
              {siteConfig.contextNote}
            </span>
          </div>

          {/* Título Principal Fiel */}
          <h1 className="hero-title">
            Conhecimento que amplia <span className="title-highlight">perspectivas.</span>
          </h1>

          {/* Subtítulo Claro e Proposital */}
          <p className="hero-subtitle">
            {heroContent.subtitle}
          </p>

          {/* Texto Complementar Curto */}
          <p className="hero-complementary">
            {heroContent.complementaryText}
          </p>

          {/* Chamadas para Ação Solicitadas */}
          <div className="hero-actions">
            <a href={heroContent.primaryCta.href} className="btn btn-primary">
              <span>{heroContent.primaryCta.label}</span>
              <ArrowRightIcon size={18} />
            </a>
            <a href={heroContent.secondaryCta.href} className="btn btn-secondary">
              <span>{heroContent.secondaryCta.label}</span>
            </a>
          </div>

          {/* Indicadores Qualitativos Honestos */}
          <div className="hero-pillars">
            {heroContent.pillars.map((pillar, idx) => (
              <React.Fragment key={pillar.label}>
                <div className="pillar-item">
                  <span className="pillar-label">{pillar.label}</span>
                  <span className="pillar-value">{pillar.value}</span>
                </div>
                {idx < heroContent.pillars.length - 1 && <div className="pillar-divider" />}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Painel Gráfico Editorial Educativo (sem estética de SaaS/banco) */}
        <div className="hero-visual" aria-hidden="true">
          <div className="editorial-card-main">
            <div className="card-header-badge">
              <span className="dot-indicator" />
              <span>Fundamento Educacional</span>
            </div>

            <div className="editorial-quote-block">
              <span className="quote-label">A Proposta</span>
              <blockquote className="quote-text">
                "{challengeContent.highlight}"
              </blockquote>
            </div>

            <div className="card-framework-grid">
              <div className="framework-badge">
                <span className="fw-num fw-blue">01</span>
                <span className="fw-text">Planejar & Organizar</span>
              </div>
              <div className="framework-badge">
                <span className="fw-num fw-orange">02</span>
                <span className="fw-text">Comunicar & Colaborar</span>
              </div>
              <div className="framework-badge">
                <span className="fw-num fw-red">03</span>
                <span className="fw-text">Decisão Consciente</span>
              </div>
              <div className="framework-badge">
                <span className="fw-num fw-blue">04</span>
                <span className="fw-text">Aprender Continuamente</span>
              </div>
            </div>

            <div className="card-footer-info">
              <span className="caption-editorial">Desenvolvimento Humano & Profissional</span>
              <span className="caption-sub">Competências para a vida cotidiana e carreira</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
