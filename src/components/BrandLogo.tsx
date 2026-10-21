import React from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'header' | 'footer' | 'hero';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  variant = 'header'
}) => {
  // Caminho da imagem oficial no diretório public (compatível com dev e prod/GitHub Pages)
  const logoSrc = `${import.meta.env.BASE_URL}brand/impacta-logo.png`;

  return (
    <div className={`brand-identity ${variant} ${className}`}>
      <img
        src={logoSrc}
        alt="Projeto I.M.P.A.C.T.A - Logotipo Oficial"
        className="brand-logo-img"
        width={895}
        height={394}
        loading="eager"
        decoding="async"
      />
    </div>
  );
};
