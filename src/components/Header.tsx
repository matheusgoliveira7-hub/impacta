import React, { useState, useEffect } from 'react';
import { MenuIcon, CloseIcon, ArrowRightIcon } from './Icons';
import { BrandLogo } from './BrandLogo';
import './Header.css';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Rastrear a seção atualmente visível na rolagem (Scroll Spy)
  useEffect(() => {
    const sectionIds = ['desafio', 'sobre', 'competencias', 'trajetoria', 'futuro', 'convite', 'contato'];

    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 120; // offset considerando o cabeçalho fixo

      let current = '';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            current = id;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    handleScrollSpy();
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  // Fechar menu mobile com tecla Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Travar rolagem do body quando menu mobile estiver aberto
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Link de acessibilidade para pular direto ao conteúdo */}
      <a href="#conteudo-principal" className="skip-to-content">
        Pular para o conteúdo principal
      </a>

      <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
        <div className="container header-container">
          {/* Marca Oficial IMPACTA */}
          <a href="#hero" className="brand-logo" aria-label="IMPACTA - Página Inicial">
            <BrandLogo variant="header" />
          </a>

          {/* Navegação Desktop */}
          <nav className="desktop-nav" aria-label="Navegação Principal">
            <ul className="nav-list">
              <li>
                <a
                  href="#desafio"
                  className={`nav-link ${activeSection === 'desafio' ? 'is-active' : ''}`}
                >
                  O Desafio
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  className={`nav-link ${activeSection === 'sobre' ? 'is-active' : ''}`}
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#competencias"
                  className={`nav-link ${activeSection === 'competencias' ? 'is-active' : ''}`}
                >
                  Competências
                </a>
              </li>
              <li>
                <a
                  href="#trajetoria"
                  className={`nav-link ${activeSection === 'trajetoria' ? 'is-active' : ''}`}
                >
                  Trajetória
                </a>
              </li>
              <li>
                <a
                  href="#futuro"
                  className={`nav-link ${activeSection === 'futuro' ? 'is-active' : ''}`}
                >
                  Próximos Passos
                </a>
              </li>
              <li>
                <a
                  href="#convite"
                  className={`nav-link ${activeSection === 'convite' ? 'is-active' : ''}`}
                >
                  Convite
                </a>
              </li>
            </ul>
          </nav>

          {/* Ação Direta Desktop */}
          <div className="header-actions">
            <a href="#contato" className={`btn btn-primary btn-header ${activeSection === 'contato' ? 'btn-active' : ''}`}>
              <span>Contato</span>
              <ArrowRightIcon size={16} />
            </a>

            {/* Botão Mobile Hamburguer */}
            <button
              type="button"
              className="mobile-toggle"
              onClick={toggleMobileMenu}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            >
              {mobileMenuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>

        {/* Menu Mobile Overlay */}
        {mobileMenuOpen && (
          <div className="mobile-menu-overlay" onClick={closeMobileMenu} role="dialog" aria-modal="true" aria-label="Menu de navegação">
            <nav
              className="mobile-menu-drawer"
              onClick={e => e.stopPropagation()}
              aria-label="Navegação Mobile"
            >
              <div className="mobile-menu-header">
                <BrandLogo variant="header" />
                <button
                  type="button"
                  className="close-btn"
                  onClick={closeMobileMenu}
                  aria-label="Fechar menu"
                >
                  <CloseIcon size={22} />
                </button>
              </div>
              <ul className="mobile-nav-list">
                <li>
                  <a
                    href="#desafio"
                    className={activeSection === 'desafio' ? 'is-active' : ''}
                    onClick={closeMobileMenu}
                  >
                    O Desafio
                  </a>
                </li>
                <li>
                  <a
                    href="#sobre"
                    className={activeSection === 'sobre' ? 'is-active' : ''}
                    onClick={closeMobileMenu}
                  >
                    Sobre o IMPACTA
                  </a>
                </li>
                <li>
                  <a
                    href="#competencias"
                    className={activeSection === 'competencias' ? 'is-active' : ''}
                    onClick={closeMobileMenu}
                  >
                    Competências
                  </a>
                </li>
                <li>
                  <a
                    href="#trajetoria"
                    className={activeSection === 'trajetoria' ? 'is-active' : ''}
                    onClick={closeMobileMenu}
                  >
                    Nossa Trajetória
                  </a>
                </li>
                <li>
                  <a
                    href="#futuro"
                    className={activeSection === 'futuro' ? 'is-active' : ''}
                    onClick={closeMobileMenu}
                  >
                    Próximos Passos
                  </a>
                </li>
                <li>
                  <a
                    href="#convite"
                    className={activeSection === 'convite' ? 'is-active' : ''}
                    onClick={closeMobileMenu}
                  >
                    Convite a Profissionais
                  </a>
                </li>
              </ul>
              <div className="mobile-menu-footer">
                <a href="#contato" className="btn btn-primary w-full" onClick={closeMobileMenu}>
                  Contato
                </a>
                <p className="mobile-badge-text">Iniciativa Educacional em Desenvolvimento</p>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
