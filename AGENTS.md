# Diretrizes do Projeto IMPACTA

Este arquivo estabelece as regras persistentes e padrões de desenvolvimento para o minissite institucional do IMPACTA.

## 1. Idioma e Comunicação
- Todo o conteúdo do site, interfaces, documentação e explicações devem ser estritamente em **português brasileiro** (pt-BR).

## 2. Contexto do Projeto
- **Projeto**: Site institucional do **IMPACTA**, iniciativa educacional em estágio inicial de desenvolvimento nascida no contexto do SENAI.
- **Objetivo**: Conectar conhecimentos de Administração ao desenvolvimento de competências humanas e profissionais para carreiras técnicas e vida cotidiana.
- **Público-alvo**: Empresários, consultores (ex.: Sebrae), professores, especialistas, possíveis palestrantes e parceiros educacionais (em especial durante a Feira do Empreendedor 2026).

## 3. Tecnologias
- **Stack**: Vite, React, TypeScript e Vanilla CSS.
- **Filosofia técnica**: Dependências mínimas, projeto estático, veloz, sem backend, sem banco de dados, sem envio server-side.
- **Qualidade de código**: Organizado, modular, acessível (WAI-ARIA, contraste adequado), responsivo e de fácil manutenção.

## 4. Diretrizes de Conteúdo e Integridade
- **Sem fotos ou vídeos de participantes**: Não utilizar fotos reais de pessoas, vídeos, bancos de imagens comerciais com rostos ou ilustrações artificiais genéricas geradas por IA. Utilizar design editorial com tipografia expressiva, elementos geométricos discretos e ícones vetoriais SVG limpos.
- **Sem dados inventados**: Jamais inventar métricas, estatísticas, números de alunos, depoimentos, indicadores de impacto mensurados, prêmios ou certificações.
- **Sem parcerias ou chancelas não confirmadas**: Não afirmar parceria formal, patrocínio ou chancela institucional do SENAI ou Sebrae. Não utilizar logotipos oficiais de terceiros.
- **Visão de futuro honesta**: Atividades futuras (palestras com profissionais convidados, oficinas práticas e projetos integradores multidisciplinares) devem ser apresentadas com clareza como propostas/possibilidades em fase de desenvolvimento e alinhamento institucional, não como algo já executado ou garantido.
- **Privacidade e segurança**: Não expor dados pessoais ou nomes de indivíduos sem necessidade explícita. Manter canais de contato com placeholders configuráveis até fornecimento oficial.

## 5. Governança e Publicação
- Toda ação de publicação, deploy, `git push`, exclusão de arquivos ou alterações destrutivas requer **autorização expressa do usuário**.
- Manter o projeto compatível com **GitHub Pages** (base path relativo configurado, build estático limpo e workflow de GitHub Actions pronto para uso quando autorizado).
