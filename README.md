# IMPACTA — Minissite Institucional

Landing page institucional de página única (*one-page*) da iniciativa educacional **IMPACTA**, desenvolvida para apresentação e diálogo com empresários, consultores, professores e potenciais parceiros durante a **Feira do Empreendedor 2026**.

---

## 🎯 Sobre a Iniciativa

O **IMPACTA** nasceu no ambiente educacional do SENAI com a missão de conectar os fundamentos da Ciência da Administração ao desenvolvimento de competências humanas e profissionais práticas. 

A proposta busca superar a visão redutora de que Administração se restringe a rotinas burocráticas de escritório, transformando seus princípios em ferramentas úteis para carreiras técnicas e para a organização da vida cotidiana (organização pessoal, planejamento, comunicação interpessoal, liderança colaborativa, educação financeira e pensamento crítico).

> **Aviso de integridade institucional:** O IMPACTA é uma iniciativa educacional em estágio inicial de desenvolvimento, nascida no contexto educacional do SENAI. Este minissite destina-se ao compartilhamento conceitual de suas ideias durante a Feira do Empreendedor 2026 e **não representa um canal oficial do SENAI nem do Sebrae**. A iniciativa não afirma parceria formal, aprovação institucional definitiva, patrocínio, chancela de terceiros ou independência jurídica, nem utiliza dados ou fotos fictícias de participantes.

---

## 🛠️ Tecnologias Utilizadas

- **Vite 6** — Ferramenta de build rápida e leve
- **React 19** — Interface declarativa baseada em componentes modulares
- **TypeScript** — Tipagem estática rigorosa para confiabilidade
- **Vanilla CSS (Design Tokens)** — Estilo editorial refinado, alta performance e alto contraste (WCAG AA/AAA)
- **SVG Vetorial Nativo** — Ícones nítidos e leves, sem dependência de bancos de imagem ou ilustrações artificiais

---

## 📁 Estrutura de Pastas

```text
impacta/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Pipeline automatizado de deploy para GitHub Pages (/impacta/)
├── public/
│   └── favicon.svg             # Favicon vetorial textual do IMPACTA
├── src/
│   ├── components/             # Componentes das 10 seções do minissite
│   │   ├── Header.tsx / .css   # Cabeçalho com navegação, menu mobile e skip-link
│   │   ├── Hero.tsx / .css     # Hero com headline marcante, badges e cartões editoriais
│   │   ├── Challenge.tsx / .css# O Desafio (técnica + gestão)
│   │   ├── About.tsx / .css    # O que é o IMPACTA e pilares conceituais
│   │   ├── Skills.tsx / .css   # As 6 competências estruturantes
│   │   ├── Timeline.tsx / .css # Linha do tempo dos marcos reais
│   │   ├── NextSteps.tsx / .css# Próximos passos e possibilidades futuras
│   │   ├── Invitation.tsx / .css# Convite a profissionais e especialistas
│   │   ├── Contact.tsx / .css  # Diálogo institucional e canais em homologação
│   │   ├── Footer.tsx / .css   # Rodapé com disclaimer ético e navegação rápida
│   │   └── Icons.tsx           # Conjunto de ícones vetoriais SVG
│   ├── data/
│   │   └── content.ts          # Centralização de textos, dados e contato institucional
│   ├── App.tsx                 # Composição semântica da página
│   ├── main.tsx                # Entrada React 19
│   ├── types.ts                # Tipos TypeScript do projeto
│   └── index.css               # Design system global e tokens de cor
├── AGENTS.md                   # Diretrizes persistentes de desenvolvimento
├── index.html                  # HTML base com SEO e tipografia editorial
├── package.json                # Dependências e scripts npm
├── tsconfig.json               # Configurações TypeScript
└── vite.config.ts              # Configuração Vite com base path para repositório impacta
```

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- Node.js instalado (versão 18 ou superior).

### 1. Instalar as dependências
```bash
npm install
```

### 2. Iniciar o servidor de desenvolvimento
```bash
npm run dev
```
O Vite iniciará o servidor local (geralmente em `http://localhost:5173/`).

### 3. Compilar para produção e checagem de tipos
```bash
npm run build
```
Os arquivos otimizados serão gerados na pasta `dist/`.

### 4. Visualizar o build de produção localmente
```bash
npm run preview
```

---

## ⚙️ Como Customizar Textos e Contato

Todos os textos e o canal de e-mail institucional estão centralizados no arquivo:
👉 `src/data/content.ts`

Por padrão, `officialContactEmail` está definido como `null`, exibindo uma mensagem transparente de que os canais eletrônicos formais estão em homologação institucional (sem gerar links mailto fictícios nem botões quebrados).

Quando você tiver um e-mail institucional oficial aprovado, basta atualizar o campo:
```typescript
export const siteConfig = {
  // ...
  officialContactEmail: 'contato@seusite.com.br',
};
```
Ao preencher esse valor, o site ativará imediatamente os botões de envio direto e cópia rápida de e-mail com feedback visual.

---

## 🌐 Publicação no GitHub Pages

O projeto está configurado para publicação no repositório `impacta` (`https://<seu-usuario>.github.io/impacta/`).

### Passo a Passo para Publicar (Quando você desejar autorizar):

1. **Crie o repositório no GitHub com o nome `impacta`**.
2. **Vincule o repositório local e envie os arquivos**:
   ```bash
   git add .
   git commit -m "feat: landing page institucional do IMPACTA"
   git remote add origin https://github.com/<seu-usuario>/impacta.git
   git push -u origin main
   ```
3. **No painel do GitHub**:
   - Acesse **Settings** > **Pages**.
   - Na seção **Build and deployment**, em **Source**, selecione **GitHub Actions**.
4. O workflow em `.github/workflows/deploy.yml` será acionado automaticamente e publicará o site no endereço:
   `https://<seu-usuario>.github.io/impacta/`
