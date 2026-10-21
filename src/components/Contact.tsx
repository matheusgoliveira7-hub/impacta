import React, { useState } from 'react';
import { MailIcon, CopyIcon, CheckIcon, InfoIcon } from './Icons';
import { siteConfig, contactContent } from '../data/content';
import './Contact.css';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = siteConfig.officialContactEmail;

  const handleCopyEmail = () => {
    if (!email) return;

    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }).catch(() => {
      const textArea = document.createElement('textarea');
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <section id="contato" className="section contact-section">
      <div className="container">
        <div className="contact-box-wrapper">
          <div className="contact-box">
            <span className="section-tag">{contactContent.tag}</span>
            <h2 className="contact-title">{contactContent.title}</h2>
            
            <p className="contact-lead">
              {contactContent.text}
            </p>

            {email ? (
              /* Bloco com e-mail oficial (habilitado somente se houver endereço formal configurado) */
              <div className="email-display-card">
                <div className="email-info">
                  <span className="email-label">E-mail para Contato Institucional:</span>
                  <span className="email-address">{email}</span>
                </div>

                <div className="email-actions">
                  <a
                    href={`mailto:${email}?subject=Contato%20-%20Iniciativa%20IMPACTA`}
                    className="btn btn-primary btn-email"
                  >
                    <MailIcon size={18} />
                    <span>Escrever mensagem</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="btn btn-secondary btn-copy"
                    aria-label="Copiar endereço de e-mail institucional"
                  >
                    {copied ? (
                      <>
                        <CheckIcon size={18} />
                        <span>Copiado!</span>
                      </>
                    ) : (
                      <>
                        <CopyIcon size={18} />
                        <span>Copiar e-mail</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            ) : (
              /* Conteúdo puramente informativo e honesto sem formulário quebrado ou contato fictício */
              <div className="contact-status-card" role="region" aria-label="Status dos canais de comunicação">
                <div className="status-notice-box">
                  <InfoIcon size={20} className="status-icon" />
                  <div className="status-notice-text">
                    <strong>{contactContent.statusTitle}:</strong>
                    <span>{contactContent.statusExplanation}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
