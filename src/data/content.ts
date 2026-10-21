import {
  SkillItem,
  TimelineItem,
  NextStepItem,
  AboutFundament,
  ProjectPrinciple
} from '../types';

export const siteConfig = {
  projectName: 'IMPACTA',
  tagline: 'Conhecimento que amplia perspectivas.',
  shortDescription: 'O IMPACTA é uma iniciativa educacional que aproxima conhecimentos da Administração do desenvolvimento de competências para a vida pessoal e profissional.',
  complementaryText: 'Porque aprender a planejar, comunicar, organizar e tomar decisões faz diferença em qualquer trajetória.',
  statusBadge: 'Iniciativa Educacional em Desenvolvimento',
  contextNote: 'Nascida no contexto educacional do SENAI',
  
  // Canal de contato: mantido como null enquanto não houver e-mail ou canal oficial autorizado.
  // Nenhum e-mail ou telefone fictício deve ser exibido.
  officialContactEmail: null as string | null,
};

export const heroContent = {
  title: 'Conhecimento que amplia perspectivas.',
  subtitle: 'O IMPACTA é uma iniciativa educacional que aproxima conhecimentos da Administração do desenvolvimento de competências para a vida pessoal e profissional.',
  complementaryText: 'Porque aprender a planejar, comunicar, organizar e tomar decisões faz diferença em qualquer trajetória.',
  primaryCta: {
    label: 'Conheça o IMPACTA',
    href: '#sobre'
  },
  secondaryCta: {
    label: 'Nossa trajetória',
    href: '#trajetoria'
  },
  pillars: [
    { label: 'Origem', value: 'Contexto SENAI' },
    { label: 'Proposta', value: 'Administração & Prática' },
    { label: 'Estágio', value: 'Desenvolvimento Inicial' }
  ]
};

export const challengeContent = {
  tag: 'O Desafio',
  title: 'O conhecimento técnico é essencial. Mas ele não caminha sozinho.',
  paragraphs: [
    'Cada profissão possui conhecimentos próprios, mas existem competências que atravessam diferentes áreas: saber se comunicar, organizar prioridades, trabalhar com pessoas, administrar recursos e tomar decisões.',
    'O IMPACTA surgiu para ajudar a tornar esses conhecimentos mais visíveis, compreensíveis e aplicáveis.'
  ],
  highlight: 'Os conhecimentos da Administração não se limitam ao ambiente administrativo. Planejar, organizar, comunicar e tomar decisões são competências que podem contribuir para diferentes profissões e situações da vida.'
};

export const aboutContent = {
  tag: 'Sobre a Iniciativa',
  title: 'Uma iniciativa que nasceu da educação e busca ir além da sala de aula.',
  paragraphs: [
    'O IMPACTA nasceu no contexto educacional do SENAI, a partir de uma proposta elaborada por estudantes com a participação e orientação docente.',
    'A iniciativa realizou etapas de pesquisa, planejamento e produção de conteúdos educativos voltados à compreensão dos fundamentos de Administração.',
    'Hoje, o projeto busca ampliar as oportunidades de aprendizagem, aproximando estudantes, conhecimentos práticos e experiências reais de profissionais para diferentes trajetórias de vida e carreira.'
  ],
  fundaments: [
    {
      number: '01',
      title: 'Administração para diferentes áreas',
      description: 'Conhecimentos de gestão aplicáveis a diversas profissões e projetos cotidianos.'
    },
    {
      number: '02',
      title: 'Competências humanas e profissionais',
      description: 'Habilidades comportamentais e práticas que complementam o domínio técnico.'
    },
    {
      number: '03',
      title: 'Aprendizagem conectada à realidade',
      description: 'Abordagem com linguagem acessível, exemplos práticos e aplicabilidade real.'
    }
  ] as AboutFundament[],
  principles: [
    {
      title: 'Aprendizado contínuo',
      description: 'Desenvolver a disposição para adquirir novos conhecimentos e rever perspectivas.'
    },
    {
      title: 'Protagonismo',
      description: 'Incentivar participação ativa e responsabilidade pelo próprio desenvolvimento.'
    },
    {
      title: 'Visão sistêmica',
      description: 'Compreender como pessoas, processos, recursos e decisões se relacionam.'
    },
    {
      title: 'Pensamento crítico',
      description: 'Estimular perguntas, reflexão, análise e decisões conscientes.'
    },
    {
      title: 'Desenvolvimento humano',
      description: 'Reconhecer que competências técnicas e humanas podem ser complementares.'
    },
    {
      title: 'Conhecimento acessível',
      description: 'Traduzir conceitos de Administração para situações compreensíveis e aplicáveis.'
    }
  ] as ProjectPrinciple[]
};

export const skillsContent = {
  tag: 'Competências em Foco',
  title: 'Competências que acompanham diferentes trajetórias.',
  lead: 'Competências essenciais da Administração que se conectam a desafios reais da formação e da vida cotidiana.',
  skills: [
    {
      id: 'organizacao',
      title: 'Organização',
      application: 'Administrar atividades, recursos e prioridades.',
      iconName: 'organization'
    },
    {
      id: 'planejamento',
      title: 'Planejamento',
      application: 'Estabelecer objetivos e construir caminhos para alcançá-los.',
      iconName: 'planning'
    },
    {
      id: 'comunicacao',
      title: 'Comunicação',
      application: 'Transmitir ideias com clareza, ouvir e colaborar.',
      iconName: 'communication'
    },
    {
      id: 'lideranca',
      title: 'Liderança',
      application: 'Trabalhar com pessoas, assumir responsabilidades e contribuir para objetivos coletivos.',
      iconName: 'leadership'
    },
    {
      id: 'educacao-financeira',
      title: 'Educação Financeira',
      application: 'Compreender decisões relacionadas ao uso de recursos financeiros.',
      iconName: 'finance'
    },
    {
      id: 'pensamento-critico',
      title: 'Pensamento Crítico e Resolução de Problemas',
      application: 'Analisar situações, avaliar alternativas e tomar decisões mais conscientes.',
      iconName: 'criticalThinking'
    }
  ] as SkillItem[],
  note: 'Apresentação conceitual de competências fundamentais, sem emissão ou promessa de certificação formal.'
};

export const timelineContent = {
  tag: 'Nossa Trajetória',
  title: 'De uma ideia em sala de aula a uma iniciativa em desenvolvimento.',
  steps: [
    {
      number: '01',
      title: 'Pesquisa e compreensão',
      description: 'Levantamento inicial e escuta sobre como os conhecimentos de Administração eram percebidos pelos estudantes e como poderiam apoiar diferentes áreas técnicas.'
    },
    {
      number: '02',
      title: 'Produção de conteúdos educativos',
      description: 'Elaboração e organização de materiais educativos práticos, abordando conceitos essenciais de gestão com linguagem clara e conexões com o cotidiano.'
    },
    {
      number: '03',
      title: 'Apresentação e continuidade',
      description: 'Apresentação da proposta no ambiente educacional e estruturação dos próximos passos para consolidar e expandir as ações da iniciativa.'
    }
  ] as TimelineItem[],
  closingMessage: 'Nossa trajetória está apenas começando. Buscamos construir os próximos passos com responsabilidade, aprendizado e diálogo.'
};

export const nextStepsContent = {
  tag: 'Direções Estratégicas',
  title: 'O próximo capítulo do IMPACTA',
  steps: [
    {
      title: 'Encontros com profissionais',
      description: 'Possibilidade de palestras, rodas de conversa e trocas diretas com profissionais atuantes no mercado.',
      tag: 'Direção estratégica'
    },
    {
      title: 'Oficinas práticas',
      description: 'Atividades educativas focadas em situações concretas de organização, resolução de problemas e tomada de decisão.',
      tag: 'Direção estratégica'
    },
    {
      title: 'Projetos integradores',
      description: 'Iniciativas multidisciplinares conectando a aplicação da Administração a desafios de diversas áreas técnicas.',
      tag: 'Direção estratégica'
    }
  ] as NextStepItem[],
  disclaimer: 'Direções estratégicas em estudo e desenvolvimento, pensadas para conectar o aprendizado à prática profissional.'
};

export const invitationContent = {
  tag: 'Diálogo Aberto',
  title: 'Sua experiência também pode contribuir para a formação de alguém.',
  paragraphs: [
    'O IMPACTA busca conhecer profissionais interessados em compartilhar experiências e conhecimentos por meio de possíveis palestras, conversas e atividades educativas com estudantes.',
    'Acreditamos que vivências reais de empresários, consultores, professores e especialistas em gestão, finanças, liderança e carreira enriquecem a formação humana e técnica.',
    'Qualquer atividade futura será planejada e alinhada com os responsáveis institucionais como condição indispensável para a sua confirmação.'
  ],
  supportMessage: 'Cada possibilidade de colaboração deverá ser discutida e alinhada com os responsáveis institucionais antes de sua confirmação.',
  ctaText: 'Conhecer canais de contato'
};

export const contactContent = {
  tag: 'Canais de Comunicação',
  title: 'Diálogo Aberto',
  text: 'O IMPACTA está ampliando o diálogo com pessoas interessadas em conhecer a iniciativa e contribuir com seu desenvolvimento. Um canal de contato próprio está sendo definido.',
  statusTitle: 'Canal em Definição',
  statusExplanation: 'O IMPACTA está ampliando o diálogo com pessoas interessadas em conhecer a iniciativa e contribuir com seu desenvolvimento. Um canal de contato próprio está sendo definido.'
};

export const footerContent = {
  brandName: 'IMPACTA',
  tagline: 'Conhecimento que amplia perspectivas.',
  description: 'Iniciativa educacional que aproxima conhecimentos da Administração do desenvolvimento de competências para a vida pessoal e profissional.',
  disclaimer: 'O IMPACTA é uma iniciativa educacional nascida no contexto do SENAI, atualmente em desenvolvimento. Este é um espaço de apresentação do projeto, não um canal institucional oficial do SENAI.'
};
