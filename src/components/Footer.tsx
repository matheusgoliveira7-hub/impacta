import React from 'react';
import { footerContent } from '../data/content';
import { ShieldAlertIcon } from './Icons';
import { BrandLogo } from './BrandLogo';
import './Footer.css';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          {/* Identificação da Iniciativa */}
          <div className="footer-brand-column">
            <BrandLogo variant="footer" />
            <span className="footer-brand-tagline">
              {footerContent.tagline}
            </span>
            <p className="footer-brand-desc">
              {footerContent.description}
            </p>
          </div>

          {/* Navegação Rápida */}
          <div className="footer-nav-column">
            <h4 className="footer-column-heading">Navegação</h4>
            <nav aria-label="Navegação secundária no rodapé">
              <ul className="footer-nav-list">
                <li><a href="#hero">Início</a></li>
                <li><a href="#desafio">O Desafio</a></li>
                <li><a href="#sobre">Sobre o IMPACTA</a></li>
                <li><a href="#competencias">Competências</a></li>
                <li><a href="#trajetoria">Nossa Trajetória</a></li>
                <li><a href="#futuro">Próximos Passos</a></li>
                <li><a href="#convite">Convite a Profissionais</a></li>
                <li><a href="#contato">Contato</a></li>
              </ul>
            </nav>
          </div>

          {/* Contexto Institucional e Transparência */}
          <div className="footer-context-column">
            <h4 className="footer-column-heading">Contexto Institucional</h4>
            <div className="footer-disclaimer-card">
              <ShieldAlertIcon size={20} className="footer-alert-icon" />
              <p className="footer-disclaimer-text">
                {footerContent.disclaimer}
              </p>
            </div>
          </div>
        </div>

        {/* Linha Inferior de Copyright */}
        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; {currentYear} IMPACTA. Todos os direitos reservados. Proposta educacional focada no desenvolvimento de competências.
          </p>
          <p className="footer-meta">
            Iniciativa em desenvolvimento contínuo
          </p>
        </div>
      </div>
    </footer>
  );
};
