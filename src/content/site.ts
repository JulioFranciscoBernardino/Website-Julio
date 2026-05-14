export const siteConfig = {
  fullName: "Julio Francisco Bernardino",
  tagline: "Desenvolvedor Full Stack com foco em Backend",
  birthDate: "2005-07-31",
  location: "Mauá, SP",
  email: "juliofranciscobernardino@gmail.com",
  phone: "(11) 99655-6155",
  photoSrc: "/imgs/Julio.png",
  githubUser: "JulioFranciscoBernardino",
  links: {
    linkedin: "https://www.linkedin.com/in/julio-bernardino-979a25277/",
    github: "https://github.com/JulioFranciscoBernardino",
    instagram: "https://www.instagram.com/jb__designer__grafico/",
  },
  cvDownloads: [
    { label: "Currículo (PDF)", href: "/cv/curriculo-julio.pdf" },
    { label: "Currículo profissional (PDF)", href: "/cv/curriculo-profissional.pdf" },
  ],
  nav: [
    { id: "sobre", label: "Sobre" },
    { id: "experiencia", label: "Experiência" },
    { id: "formacao", label: "Formação" },
    { id: "automacao", label: "Automação" },
    { id: "projetos", label: "Projetos" },
    { id: "objetivos", label: "Objetivos" },
    { id: "contato", label: "Contato" },
  ],
  profile: {
    title: "Perfil",
    paragraphs: [
      "Sou desenvolvedor full stack com foco em backend, atuando na construção de APIs REST, arquitetura em camadas (MVC), automação de processos e integração entre sistemas.",
      "Trabalho com Node.js, JavaScript, MySQL e ferramentas de automação como n8n. Busco soluções escaláveis e organizadas, com boas práticas, autenticação segura (Argon2), suporte técnico, modelagem e otimização de consultas, correção de bugs e melhoria contínua de performance.",
      "Perfil analítico, proativo e orientado a resolver problemas.",
    ],
    stack: [
      "Node.js",
      "JavaScript",
      "TypeScript",
      "MySQL",
      "REST APIs",
      "MVC",
      "n8n",
      "Argon2",
      "PHP",
      "SQL",
    ],
  },
  experience: [
    {
      role: "Estagiário em Automação de Processos (n8n)",
      company: "TwoBrain LTDA",
      period: "Mai/2025 – Fev/2026",
      highlights: [
        "Suporte e desenvolvimento de soluções de TI",
        "Automação de processos e organização de fluxos digitais",
        "Integração de sistemas (CRMs, formulários, APIs e bancos de dados)",
        "Criação e manutenção de scripts em JavaScript, SQL e PHP",
        "Diagnóstico técnico, validação de dados e otimização de performance",
        "Documentação técnica",
      ],
    },
    {
      role: "Atendente de lanchonete",
      company: "Hamburgueria Julão's Burger",
      period: "2024 – 2025",
      highlights: [
        "Atendimento presencial, WhatsApp e iFood",
        "Operação de PDV (TopMaster e Cplug), Excel e gestão de caixa",
        "Treinamento de novos colaboradores e controle de estoque",
      ],
    },
  ],
  education: {
    degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas (ADS)",
    school:
      "Universidade Municipal de São Caetano do Sul (USCS) — Campus Conceição",
    period: "2022 – atual",
    courses: [
      "Lógica aplicada à computação",
      "Arquitetura de computadores",
      "Redes de computadores",
      "Algoritmos e linguagens de programação",
      "Sistemas operacionais",
      "Programação orientada a objetos",
      "Organização, estruturas e projeto de banco de dados",
      "Programação avançada e estrutura de dados",
    ],
  },
  objectives: {
    title: "Objetivos",
    items: [
      "Evoluir como engenheiro de software com forte base em backend, integrações e automação.",
      "Contribuir em times que valorizem qualidade, observabilidade e boas práticas de segurança.",
      "Aprimorar continuamente TypeScript, testes e arquitetura de APIs em ambientes de produção.",
    ],
  },
  automation: {
    title: "Automação e integração",
    description:
      "Experiência prática em orquestrar etapas entre fontes de dados, APIs e sistemas — no mesmo espírito de fluxos low-code como n8n, com código quando necessário.",
  },
} as const

export type SiteConfig = typeof siteConfig
