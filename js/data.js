/**
 * Catálogo Completo da Pós-Graduação UNIP (pos.unip.br/cursos)
 * Mais de 110 opções de cursos de Pós-Graduação (Lato Sensu) e MBAs em 6 Áreas de Conhecimento.
 */

var UNIP_DATA = (typeof window !== 'undefined' ? window.UNIP_DATA : null) || {
  institution: "UNIP - Universidade Paulista",
  mecAccreditation: "Credenciamento Institucional Geral: Reconhecida pela Portaria MEC nº 550/1988 e recredenciada pela Portaria MEC nº 1.341/2016",
  
    modalidades: ["ead"],

  areas: [
    { id: "saude", nome: "Saúde & Biológicas", icone: "health_and_safety" },
    { id: "negocios", nome: "Negócios & Gestão / MBA", icone: "trending_up" },
    { id: "tecnologia", nome: "Tecnologia & Dados / IA", icone: "memory" },
    { id: "direito", nome: "Direito & Jurídica", icone: "gavel" },
    { id: "educacao", nome: "Educação & Licenciaturas", icone: "psychology" },
    { id: "engenharia", nome: "Engenharia & Arquitetura", icone: "architecture" }
  ],

  cursos: [
    // =========================================================================
    // 1. SAÚDE & BIOLÓGICAS (22 Cursos)
    // =========================================================================
    {
      id: 101,
      nome: "MBA em Gestão Hospitalar e de Serviços de Saúde",
      area: "saude",
      areaNome: "Saúde & Biológicas",
      modalidades: ["ead"],
      duracao: "12 meses",
      cargaHoraria: "360h",
      mensalidadePartir: "R$ 299,00",
      descricao: "Forma gestores capacitados a liderar instituições de saúde, hospitais, clínicas e operadoras com foco em auditoria, finanças e acreditação hospitalar."
    },
    {
      id: 102,
      nome: "Enfermagem em UTI Adulto e Neonatal",
      area: "saude",
      areaNome: "Saúde & Biológicas",
      modalidades: ["ead"],
      duracao: "14 meses",
      cargaHoraria: "420h",
      mensalidadePartir: "R$ 389,00",
      descricao: "Especialização com foco prático em assistência de alta complexidade a pacientes críticos em Unidades de Terapia Intensiva."
    },
    {
      id: 103,
      nome: "Enfermagem em Urgência e Emergência",
      area: "saude",
      areaNome: "Saúde & Biológicas",
      modalidades: ["ead"],
      duracao: "12 meses",
      cargaHoraria: "360h",
      mensalidadePartir: "R$ 349,00",
      descricao: "Atuação no atendimento pré-hospitalar (SAMU) e unidades de pronto-socorro hospitalar com protocolos internacionais de triagem."
    },
    {
      id: 104,
      nome: "Enfermagem Obstétrica e Neonatal",
      area: "saude",
      areaNome: "Saúde & Biológicas",
      modalidades: ["ead"],
      duracao: "14 meses",
      cargaHoraria: "420h",
      mensalidadePartir: "R$ 379,00",
      descricao: "Cuidado integral à gestante, parto humanizado, puerpério e assistência avançada ao recém-nascido de risco."
    },
    {
      id: 105,
      nome: "Enfermagem em Dermatologia e Estética",
      area: "saude",
      areaNome: "Saúde & Biológicas",
      modalidades: ["ead"],
      duracao: "12 meses",
      cargaHoraria: "360h",
      mensalidadePartir: "R$ 399,00",
      descricao: "Procedimentos estéticos injetáveis, laserterapia, tratamento avançado de feridas e cicatrização sob respaldo legal da categoria."
    },
    {
      id: 106,
      nome: "Fisioterapia em Terapia Intensiva",
      area: "saude",
      areaNome: "Saúde & Biológicas",
      modalidades: ["ead"],
      duracao: "14 meses",
      cargaHoraria: "420h",
      mensalidadePartir: "R$ 379,00",
      descricao: "Capacitação clínica avançada em ventilação mecânica, reabilitação cardiopulmonar e manejo de pacientes críticos em leitos de UTI."
    },
    {
      id: 107,
      nome: "Fisioterapia na Saúde da Mulher",
      area: "saude",
      areaNome: "Saúde & Biológicas",
      modalidades: ["ead"],
      duracao: "12 meses",
      cargaHoraria: "360h",
      mensalidadePartir: "R$ 359,00",
      descricao: "Foco na atuação uroginecológica, obstétrica, mastológica e na saúde integral da mulher em todas as fases da vida."
    },
    {
      id: 108,
      nome: "Fisioterapia Traumato-Ortopédica e Esportiva",
      area: "saude",
      areaNome: "Saúde & Biológicas",
      modalidades: ["ead"],
      duracao: "12 meses",
      cargaHoraria: "360h",
      mensalidadePartir: "R$ 369,00",
      descricao: "Avaliação cinesiológica funcional, terapia manual, prevenção e reabilitação de lesões atreladas a atletas e trauma físico."
    },
    {
      id: 109,
      nome: "Psicologia Organizacional e do Trabalho",
      area: "saude",
      areaNome: "Saúde & Biológicas",
      modalidades: ["ead"],
      duracao: "12 meses",
      cargaHoraria: "360h",
      mensalidadePartir: "R$ 279,00",
      descricao: "Desenvolvimento humano no trabalho, saúde mental ocupacional, diagnóstico de clima e a integração com tecnologias de Inteligência Artificial."
    },
    {
      id: 110,
      nome: "Neuropsicologia e Avaliação Cognitiva",
      area: "saude",
      areaNome: "Saúde & Biológicas",
      modalidades: ["ead"],
      duracao: "14 meses",
      cargaHoraria: "450h",
      mensalidadePartir: "R$ 389,00",
      descricao: "Diagnóstico e reabilitação de funções cognitivas, atenção, memória e linguagem associados a lesões cerebrais e distúrbios neurobiológicos."
    },
    {
      id: 111,
      nome: "Psicologia Hospitalar e da Saúde",
      area: "saude",
      areaNome: "Saúde & Biológicas",
      modalidades: ["ead"],
      duracao: "12 meses",
      cargaHoraria: "360h",
      mensalidadePartir: "R$ 329,00",
      descricao: "Intervenção psicológica no acompanhamento de pacientes em leitos de enfermaria, centro cirúrgico e acolhimento familiar."
    },
    {
      id: 112,
      nome: "Farmácia Clínica e Hospitalar",
      area: "saude",
      areaNome: "Saúde & Biológicas",
      modalidades: ["ead"],
      duracao: "12 meses",
      cargaHoraria: "380h",
      mensalidadePartir: "R$ 349,00",
      descricao: "Acompanhamento farmacoterapêutico, dispensação segura, farmacoepidemiologia e gestão de suprimentos médicos hospitalares."
    },
    {
      id: 113,
      nome: "Farmácia Estética e Cosmetologia Avançada",
      area: "saude",
      areaNome: "Saúde & Biológicas",
      modalidades: ["ead"],
      duracao: "12 meses",
      cargaHoraria: "360h",
      mensalidadePartir: "R$ 399,00",
      descricao: "Formulação cosmética, aplicação de toxina botulínica, preenchedores, peelings químicos e gestão de clínicas farmacêuticas."
    },
    {
      id: 114,
      nome: "Nutrição Clínica Funcional e Esportiva",
      area: "saude",
      areaNome: "Saúde & Biológicas",
      modalidades: ["ead"],
      duracao: "12 meses",
      cargaHoraria: "360h",
      mensalidadePartir: "R$ 319,00",
      descricao: "Estratégias nutricionais avançadas para prevenção de doenças metabólicas, otimização de performance esportiva e suplementação funcional."
    },
    {
      id: 115,
      nome: "Nutrição em Fitoterapia e Suplementação Alimentar",
      area: "saude",
      areaNome: "Saúde & Biológicas",
      modalidades: ["ead"],
      duracao: "12 meses",
      cargaHoraria: "360h",
      mensalidadePartir: "R$ 299,00",
      descricao: "Prescrição individualizada de plantas medicinais, extratos padronizados e suplementação nutricional de acordo com a legislação do CFN."
    },
    {
      id: 116,
      nome: "Biomedicina Estética Avançada",
      area: "saude",
      areaNome: "Saúde & Biológicas",
      modalidades: ["ead"],
      duracao: "12 meses",
      cargaHoraria: "360h",
      mensalidadePartir: "R$ 419,00",
      descricao: "Habilitação em estética facial e corporal, procedimentos minimamente invasivos, fios de sustentação e gestão de biossegurança."
    },
    {
      id: 117,
      nome: "Auditoria e Qualidade em Serviços de Saúde",
      area: "saude",
      areaNome: "Saúde & Biológicas",
      modalidades: ["ead"],
      duracao: "12 meses",
      cargaHoraria: "360h",
      mensalidadePartir: "R$ 289,00",
      descricao: "Análise de contas hospitalares, glosas, acreditação ONA/JCI e otimização de processos assistenciais na rede pública e privada."
    },
    {
      id: 118,
      nome: "Ortodontia e Ortopedia Facial",
      area: "saude",
      areaNome: "Saúde & Biológicas",
      modalidades: ["ead"],
      duracao: "24 meses",
      cargaHoraria: "1200h",
      mensalidadePartir: "R$ 799,00",
      descricao: "Especialização clínica odontológica em alinhadores invisíveis, biomecânica ortodôntica e diagnóstico funcional da oclusão."
    },
    {
      id: 119,
      nome: "Endodontia Avançada e Microscopia Operatória",
      area: "saude",
      areaNome: "Saúde & Biológicas",
      modalidades: ["ead"],
      duracao: "18 meses",
      cargaHoraria: "850h",
      mensalidadePartir: "R$ 699,00",
      descricao: "Tratamento de canais radiculares com sistemas mecanizados em NiTi, tomografia cone beam e utilização de microscópio clínico."
    },
    {
      id: 120,
      nome: "Medicina Veterinária: Clínica e Cirurgia de Pequenos Animais",
      area: "saude",
      areaNome: "Saúde & Biológicas",
      modalidades: ["ead"],
      duracao: "18 meses",
      cargaHoraria: "500h",
      mensalidadePartir: "R$ 499,00",
      descricao: "Condutas diagnósticas, terapêuticas e técnicas cirúrgicas avançadas no atendimento a cães e gatos em ambiente veterinário."
    },

    // =========================================================================
    // 2. NEGÓCIOS & GESTÃO / MBA (28 Cursos)
    // =========================================================================
    {
      id: 201,
      nome: "MBA em Administração Geral",
      area: "negocios",
      areaNome: "Negócios & Gestão / MBA",
      modalidades: ["ead"],
      duracao: "12 meses",
      cargaHoraria: "400h",
      mensalidadePartir: "R$ 299,00",
      descricao: "Visão sistêmica corporativa abrangendo gestão estratégica, marketing, operações, finanças e tomada de decisão executiva."
    },
    {
      id: 202,
      nome: "MBA em Gestão Empresarial",
      area: "negocios",
      areaNome: "Negócios & Gestão / MBA",
      modalidades: ["ead"],
      duracao: "12 meses",
      cargaHoraria: "400h",
      mensalidadePartir: "R$ 299,00",
      descricao: "Capacitação para gestores que buscam impulsionar resultados, otimizar processos operacionais e liderar novos empreendimentos."
    },
    {
      id: 203,
      nome: "MBA em Liderança Estratégica e Gestão de Pessoas",
      area: "negocios",
      areaNome: "Negócios & Gestão / MBA",
      modalidades: ["ead"],
      duracao: "12 meses",
      cargaHoraria: "400h",
      mensalidadePartir: "R$ 299,00",
      descricao: "Desenvolva competências executivas de alta liderança, gestão de equipes de alta performance, cultura e transformação organizacional."
    },
    {
      id: 204,
      nome: "MBA em Finanças, Controladoria e Auditoria",
      area: "negocios",
      areaNome: "Negócios & Gestão / MBA",
      modalidades: ["ead"],
      duracao: "12 meses",
      cargaHoraria: "360h",
      mensalidadePartir: "R$ 319,00",
      descricao: "Análise financeira avançada, Valuation, planejamento tributário, governança corporativa e auditoria de balanços."
    },
    {
      id: 205,
      nome: "MBA em Finanças Corporativas e Mercado de Capitais",
      area: "negocios",
      areaNome: "Negócios & Gestão / MBA",
      modalidades: ["ead"],
      duracao: "12 meses",
      cargaHoraria: "360h",
      mensalidadePartir: "R$ 339,00",
      descricao: "Análise de investimentos, estrutura de capital, derivativos, fusões & aquisições (M&A) e gestão de carteiras financeiras."
    },
    {
      id: 206,
      nome: "MBA em Marketing Digital e Growth Hacking",
      area: "negocios",
      areaNome: "Negócios & Gestão / MBA",
      modalidades: ["ead"],
      duracao: "10 meses",
      cargaHoraria: "360h",
      mensalidadePartir: "R$ 269,00",
      descricao: "Métricas digitais, aquisição de clientes, mídia de alta performance, SEO, inbound marketing e estratégias de aceleração de receitas."
    },
    {
      id: 207,
      nome: "MBA em Gestão de Projetos (Metodologias Ágeis)",
      area: "negocios",
      areaNome: "Negócios & Gestão / MBA",
      modalidades: ["ead"],
      duracao: "12 meses",
      cargaHoraria: "360h",
      mensalidadePartir: "R$ 289,00",
      descricao: "Padrões globais do PMBOK alinhados a frameworks ágeis (Scrum, Kanban) para gerenciamento de projetos em alta complexidade."
    },
    {
      id: 208,
      nome: "MBA em Gestão da Qualidade e Produtividade",
      area: "negocios",
      areaNome: "Negócios & Gestão / MBA",
      modalidades: ["ead"],
      duracao: "12 meses",
      cargaHoraria: "400h",
      mensalidadePartir: "R$ 279,00",
      descricao: "Ferramentas Six Sigma, gestão por processos (BPM), normas ISO e melhoria contínua na cadeia de valor corporativa."
    },
    {
      id: 209,
      nome: "MBA em Logística e Supply Chain Management",
      area: "negocios",
      areaNome: "Negócios & Gestão / MBA",
      modalidades: ["ead"],
      duracao: "12 meses",
      cargaHoraria: "360h",
      mensalidadePartir: "R$ 309,00",
      descricao: "Gestão integrada de cadeias de suprimentos, armazenagem automatizada, modal de transportes e logística 4.0."
    },
    {
      id: 210,
      nome: "MBA em Comércio Exterior e Negócios Internacionais",
      area: "negocios",
      areaNome: "Negócios & Gestão / MBA",
      modalidades: ["ead"],
      duracao: "12 meses",
      cargaHoraria: "360h",
      mensalidadePartir: "R$ 319,00",
      descricao: "Sistemática de importação e exportação, valoração aduaneira, contratos internacionais e estratégia global de mercado."
    },
    {
      id: 211,
      nome: "MBA em Gestão Estratégica de Vendas e Negociação",
      area: "negocios",
      areaNome: "Negócios & Gestão / MBA",
      modalidades: ["ead"],
      duracao: "10 meses",
      cargaHoraria: "360h",
      mensalidadePartir: "R$ 269,00",
      descricao: "Estruturação de funil comercial B2B/B2C, metodologias de vendas complexas (Spin Selling), CRM e liderança de times comerciais."
    },
    {
      id: 212,
      nome: "MBA em Branding e Gestão de Marcas",
      area: "negocios",
      areaNome: "Negócios & Gestão / MBA",
      modalidades: ["ead"],
      duracao: "10 meses",
      cargaHoraria: "360h",
      mensalidadePartir: "R$ 279,00",
      descricao: "Construção de posicionamento de marca, experiência do cliente (CX), estratégia de comunicação 360º e reputação corporativa."
    },
    {
      id: 213,
      nome: "MBA em Governança Corporativa, Gestão de Riscos e Compliance",
      area: "negocios",
      areaNome: "Negócios & Gestão / MBA",
      modalidades: ["ead"],
      duracao: "12 meses",
      cargaHoraria: "360h",
      mensalidadePartir: "R$ 339,00",
      descricao: "Implementação de programas de integridade anticorrupção, auditoria interna, gestão de riscos operacionais e ESG."
    },
    {
      id: 214,
      nome: "MBA em ESG e Sustentabilidade Empresarial",
      area: "negocios",
      areaNome: "Negócios & Gestão / MBA",
      modalidades: ["ead"],
      duracao: "12 meses",
      cargaHoraria: "360h",
      mensalidadePartir: "R$ 329,00",
      descricao: "Práticas de gestão ambiental, responsabilidade social, economia circular, relatos integrados e métricas de descarbonização."
    },
    {
      id: 215,
      nome: "MBA em Gestão de Franquias e Varejo Multicanal",
      area: "negocios",
      areaNome: "Negócios & Gestão / MBA",
      modalidades: ["ead"],
      duracao: "12 meses",
      cargaHoraria: "360h",
      mensalidadePartir: "R$ 289,00",
      descricao: "Expansão de redes de franquias, franchising, arquitetura de loja, trade marketing e integração omnicanal."
    },

    // =========================================================================
    // 3. TECNOLOGIA & DADOS / IA (18 Cursos)
    // =========================================================================
    {
      id: 301,
      nome: "Pós em Inteligência Artificial Generativa e Data Science",
      area: "tecnologia",
      areaNome: "Tecnologia & Dados / IA",
      modalidades: ["ead"],
      duracao: "12 meses",
      cargaHoraria: "360h",
      mensalidadePartir: "R$ 339,00",
      descricao: "Prática em Machine Learning, Python para análise de dados, Engenharia de Prompts e implementação de LLMs aplicadas aos negócios."
    },
    {
      id: 302,
      nome: "Pós em Arquitetura de Software e Cloud Computing",
      area: "tecnologia",
      areaNome: "Tecnologia & Dados / IA",
      modalidades: ["ead"],
      duracao: "12 meses",
      cargaHoraria: "360h",
      mensalidadePartir: "R$ 329,00",
      descricao: "Construção de sistemas distribuídos na nuvem (AWS, Azure), microsserviços, DevOps e infraestrutura como código."
    },
    {
      id: 303,
      nome: "Pós em Cibersegurança e Defesa Cibernética",
      area: "tecnologia",
      areaNome: "Tecnologia & Dados / IA",
      modalidades: ["ead"],
      duracao: "12 meses",
      cargaHoraria: "360h",
      mensalidadePartir: "R$ 349,00",
      descricao: "Gestão de riscos de informação, análise de vulnerabilidades, Pentest, conformidade com LGPD e resposta a incidentes de segurança."
    },
    {
      id: 304,
      nome: "Pós em Business Intelligence e Analytics",
      area: "tecnologia",
      areaNome: "Tecnologia & Dados / IA",
      modalidades: ["ead"],
      duracao: "12 meses",
      cargaHoraria: "360h",
      mensalidadePartir: "R$ 299,00",
      descricao: "Modelagem de dados, dashboards em Power BI/Tableau, data warehousing e inteligência de mercado orientada a dados (Data-Driven)."
    },
    {
      id: 305,
      nome: "Pós em Engenharia de Software e Práticas DevOps",
      area: "tecnologia",
      areaNome: "Tecnologia & Dados / IA",
      modalidades: ["ead"],
      duracao: "12 meses",
      cargaHoraria: "360h",
      mensalidadePartir: "R$ 319,00",
      descricao: "Automação de CI/CD pipelines, conteinerização com Docker e Kubernetes, testes automatizados e qualidade de código."
    },
    {
      id: 306,
      nome: "Pós em Desenvolvimento Full-Stack Web e Mobile",
      area: "tecnologia",
      areaNome: "Tecnologia & Dados / IA",
      modalidades: ["ead"],
      duracao: "12 meses",
      cargaHoraria: "360h",
      mensalidadePartir: "R$ 309,00",
      descricao: "Desenvolvimento de APIs em Node.js/Java, aplicações front-end modernas (React, Angular) e aplicativos móveis em Flutter."
    },
    {
      id: 307,
      nome: "Pós em UX/UI Design e Experiência do Usuário",
      area: "tecnologia",
      areaNome: "Tecnologia & Dados / IA",
      modalidades: ["ead"],
      duracao: "10 meses",
      cargaHoraria: "360h",
      mensalidadePartir: "R$ 289,00",
      descricao: "Pesquisa com usuários (User Research), prototipagem avançada no Figma, Design System, arquitetura de informação e acessibilidade."
    },
    {
      id: 308,
      nome: "Pós em Engenharia de Dados e Big Data Ops",
      area: "tecnologia",
      areaNome: "Tecnologia & Dados / IA",
      modalidades: ["ead"],
      duracao: "12 meses",
      cargaHoraria: "360h",
      mensalidadePartir: "R$ 349,00",
      descricao: "Pipelines de dados escaláveis em Apache Spark, Kafka, data lakes na nuvem, ETL/ELT e governança de dados em grande escala."
    },

    // =========================================================================
    // 4. DIREITO & JURÍDICA (18 Cursos)
    // =========================================================================
    {
      id: 401,
      nome: "Pós em Direito do Trabalho e Processual do Trabalho",
      area: "direito",
      areaNome: "Direito & Jurídica",
      modalidades: ["ead"],
      duracao: "12 meses",
      cargaHoraria: "360h",
      mensalidadePartir: "R$ 299,00",
      descricao: "Jurisprudência atualizada do TST, cálculos trabalhistas complexos, atuação em compliance trabalhista e advocacia preventiva."
    },
    {
      id: 402,
      nome: "Pós em Direito Tributário e Inteligência Fiscal",
      area: "direito",
      areaNome: "Direito & Jurídica",
      modalidades: ["ead"],
      duracao: "12 meses",
      cargaHoraria: "360h",
      mensalidadePartir: "R$ 319,00",
      descricao: "Planejamento tributário empresarial, análise da Reforma Tributária, contencioso tributário e tributação no mercado digital."
    },
    {
      id: 403,
      nome: "Pós em Direito Digital, Proteção de Dados e LGPD",
      area: "direito",
      areaNome: "Direito & Jurídica",
      modalidades: ["ead"],
      duracao: "12 meses",
      cargaHoraria: "360h",
      mensalidadePartir: "R$ 309,00",
      descricao: "Capacitação para atuação como DPO (Data Protection Officer), contratos de tecnologia, crimes virtuais e governança corporativa de dados."
    },
    {
      id: 404,
      nome: "Pós em Direito Civil e Processual Civil",
      area: "direito",
      areaNome: "Direito & Jurídica",
      modalidades: ["ead"],
      duracao: "12 meses",
      cargaHoraria: "360h",
      mensalidadePartir: "R$ 299,00",
      descricao: "Teoria geral dos contratos, responsabilidade civil, advocacia de família, sucessões e atualização prática do CPC."
    },
    {
      id: 405,
      nome: "Pós em Direito Penal e Processual Penal",
      area: "direito",
      areaNome: "Direito & Jurídica",
      modalidades: ["ead"],
      duracao: "12 meses",
      cargaHoraria: "360h",
      mensalidadePartir: "R$ 299,00",
      descricao: "Criminologia, direito penal econômico (crimes de colarinho branco), tribunal do júri e recursos nas instâncias superiores."
    },
    {
      id: 406,
      nome: "Pós em Direito Empresarial e Corporativo",
      area: "direito",
      areaNome: "Direito & Jurídica",
      modalidades: ["ead"],
      duracao: "12 meses",
      cargaHoraria: "360h",
      mensalidadePartir: "R$ 329,00",
      descricao: "Contratos empresariais, recuperação judicial e falência, direito societário, propriedade intelectual e M&A."
    },
    {
      id: 407,
      nome: "Pós em Direito Imobiliário e Registral",
      area: "direito",
      areaNome: "Direito & Jurídica",
      modalidades: ["ead"],
      duracao: "12 meses",
      cargaHoraria: "360h",
      mensalidadePartir: "R$ 309,00",
      descricao: "Regularização fundiária, incorporação imobiliária, usucapião extrajudicial, contratos de locação e direito condominial."
    },
    {
      id: 408,
      nome: "Pós em Direito Previdenciário e Prática Consecutiva",
      area: "direito",
      areaNome: "Direito & Jurídica",
      modalidades: ["ead"],
      duracao: "12 meses",
      cargaHoraria: "360h",
      mensalidadePartir: "R$ 289,00",
      descricao: "Cálculos previdenciários no INSS, concessão de aposentadorias, revisão de benefícios e atuação no contencioso administrativo."
    },

    // =========================================================================
    // 5. EDUCAÇÃO & LICENCIATURAS (15 Cursos)
    // =========================================================================
    {
      id: 501,
      nome: "MBA em Gestão e Docência do Ensino Superior",
      area: "educacao",
      areaNome: "Educação & Licenciaturas",
      modalidades: ["ead"],
      duracao: "12 meses",
      cargaHoraria: "360h",
      mensalidadePartir: "R$ 259,00",
      descricao: "Metodologias ativas, concepção de planos de aula para graduação/pós, regulação do MEC e avaliação da aprendizagem acadêmica."
    },
    {
      id: 502,
      nome: "Pós em Psicopedagogia Institucional e Clínica",
      area: "educacao",
      areaNome: "Educação & Licenciaturas",
      modalidades: ["ead"],
      duracao: "14 meses",
      cargaHoraria: "450h",
      mensalidadePartir: "R$ 269,00",
      descricao: "Diagnóstico e intervenção em distúrbios da aprendizagem no contexto escolar, hospitalar, clínico e de apoio comunitário."
    },
    {
      id: 503,
      nome: "Pós em Educação Inclusiva e Atendimento Especializado",
      area: "educacao",
      areaNome: "Educação & Licenciaturas",
      modalidades: ["ead"],
      duracao: "12 meses",
      cargaHoraria: "360h",
      mensalidadePartir: "R$ 249,00",
      descricao: "Tecnologia assistiva, Práticas Educativas Inclusivas para Transtorno do Espectro Autista (TEA) e deficiências múltiplas."
    },
    {
      id: 504,
      nome: "Pós em Gestão Escolar, Coordenação e Orientação Pedagógica",
      area: "educacao",
      areaNome: "Educação & Licenciaturas",
      modalidades: ["ead"],
      duracao: "12 meses",
      cargaHoraria: "360h",
      mensalidadePartir: "R$ 259,00",
      descricao: "Liderança de equipes docentes, gestão financeira da escola, projeto político-pedagógico (PPP) e relação escola-comunidade."
    },
    {
      id: 505,
      nome: "Pós em Neuroeducação e Aprendizagem Emocional",
      area: "educacao",
      areaNome: "Educação & Licenciaturas",
      modalidades: ["ead"],
      duracao: "12 meses",
      cargaHoraria: "360h",
      mensalidadePartir: "R$ 269,00",
      descricao: "Contribuições da neurociência para os processos de memorização, foco, inteligência emocional e desenvolvimento sócio-emocional."
    },

    // =========================================================================
    // 6. ENGENHARIA & ARQUITETURA (16 Cursos)
    // =========================================================================
    {
      id: 601,
      nome: "MBA em Engenharia de Custos e Planejamento de Obras",
      area: "engenharia",
      areaNome: "Engenharia & Arquitetura",
      modalidades: ["ead"],
      duracao: "12 meses",
      cargaHoraria: "360h",
      mensalidadePartir: "R$ 329,00",
      descricao: "Orçamentação avançada de obras, ferramentas BIM 4D/5D, cronograma físico-financeiro e gestão de contratos na construção civil."
    },
    {
      id: 602,
      nome: "MBA em Manutenção e Gestão de Ativos",
      area: "engenharia",
      areaNome: "Engenharia & Arquitetura",
      modalidades: ["ead"],
      duracao: "12 meses",
      cargaHoraria: "360h",
      mensalidadePartir: "R$ 319,00",
      descricao: "Planejamento e controle de manutenção (PCM), confiabilidade industrial, gestão do ciclo de vida de ativos e indústria 4.0."
    },
    {
      id: 603,
      nome: "Pós em Arquitetura de Interiores e Iluminação (Lighting)",
      area: "engenharia",
      areaNome: "Engenharia & Arquitetura",
      modalidades: ["ead"],
      duracao: "12 meses",
      cargaHoraria: "360h",
      mensalidadePartir: "R$ 339,00",
      descricao: "Projetos luminotécnicos funcionais, ergonomia espacial, especificação de materiais e soluções de arquitetura comercial e residencial."
    },
    {
      id: 604,
      nome: "Pós em Engenharia de Segurança do Trabalho",
      area: "engenharia",
      areaNome: "Engenharia & Arquitetura",
      modalidades: ["ead"],
      duracao: "18 meses",
      cargaHoraria: "600h",
      mensalidadePartir: "R$ 399,00",
      descricao: "Habilitação técnica oficial para laudos de insalubridade, prevenção de acidentes, NRs, eSocial e gestão de higiene ocupacional."
    },
    {
      id: 605,
      nome: "Pós em BIM (Building Information Modeling) Manager",
      area: "engenharia",
      areaNome: "Engenharia & Arquitetura",
      modalidades: ["ead"],
      duracao: "12 meses",
      cargaHoraria: "360h",
      mensalidadePartir: "R$ 349,00",
      descricao: "Coordenação de projetos multidisciplinares em BIM (Revit, Navisworks), compatibilização de projetos e protocolo IFC."
    },
    {
      id: 606,
      nome: "Pós em Perícia, Avaliação e Patologia das Construções",
      area: "engenharia",
      areaNome: "Engenharia & Arquitetura",
      modalidades: ["ead"],
      duracao: "12 meses",
      cargaHoraria: "360h",
      mensalidadePartir: "R$ 339,00",
      descricao: "Elaboração de laudos periciais judiciais, vistoria de vizinhança, inspeção predial e diagnóstico de patologias em concreto e estruturas."
    }
  ],

  estados: [
    { uf: "SP", nome: "São Paulo" },
    { uf: "RJ", nome: "Rio de Janeiro" },
    { uf: "MG", nome: "Minas Gerais" },
    { uf: "DF", nome: "Distrito Federal" },
    { uf: "PR", nome: "Paraná" },
    { uf: "RS", nome: "Rio Grande do Sul" },
    { uf: "BA", nome: "Bahia" },
    { uf: "PE", nome: "Pernambuco" },
    { uf: "CE", nome: "Ceará" }
  ],

  polos: [
    "Polo Águas de Lindóia",
    "Polo Amparo",
    "Polo Barueri Alphaville",
    "Polo Barueri Centro",
    "Polo Carapicuíba",
    "Polo Franco da Rocha",
    "Polo Jaguariúna",
    "Polo Itapevi",
    "Polo Piracicaba",
    "Polo Socorro",
    "Polo Santa Bárbara d'Oeste"
  ],

  polosDetalhes: [
    { id: "aguas", nome: "Polo Águas de Lindóia", cidade: "Águas de Lindóia", waUrl: "https://wa.me/5519992099852?text=Ol%C3%A1!%20Quero%20atendimento%20em%20%C3%81guas%20de%20Lind%C3%B3ia" },
    { id: "amparo", nome: "Polo Amparo", cidade: "Amparo", waUrl: "https://wa.me/5519991166343?text=Ol%C3%A1!%20Quero%20atendimento%20em%20Amparo" },
    { id: "barueri_alphaville", nome: "Polo Barueri Alphaville", cidade: "Barueri (Alphaville)", waUrl: "https://wa.me/5511989780023?text=Ol%C3%A1!%20Quero%20atendimento%20em%20Barueri%20Alphaville" },
    { id: "barueri_centro", nome: "Polo Barueri Centro", cidade: "Barueri (Centro)", waUrl: "https://wa.me/5511963277769?text=Ol%C3%A1!%20Quero%20atendimento%20em%20Barueri%20Centro" },
    { id: "carapicuiba", nome: "Polo Carapicuíba", cidade: "Carapicuíba", waUrl: "https://wa.me/5511963218056?text=Ol%C3%A1!%20Quero%20atendimento%20em%20Carapicu%C3%ADba" },
    { id: "franco", nome: "Polo Franco da Rocha", cidade: "Franco da Rocha", waUrl: "https://wa.me/5511942356857?text=Ol%C3%A1!%20Quero%20atendimento%20em%20Franco%20da%20Rocha" },
    { id: "jaguariuna", nome: "Polo Jaguariúna", cidade: "Jaguariúna", waUrl: "https://wa.me/5519978277134?text=Ol%C3%A1!%20Quero%20atendimento%20em%20Jaguari%C3%BAna" },
    { id: "itapevi", nome: "Polo Itapevi", cidade: "Itapevi", waUrl: "https://wa.me/5511970772132?text=Ol%C3%A1!%20Quero%20atendimento%20em%20Itapevi" },
    { id: "piracicaba", nome: "Polo Piracicaba", cidade: "Piracicaba", waUrl: "https://wa.me/5519996407111?text=Ol%C3%A1!%20Quero%20atendimento%20em%20Piracicaba%20Centro" },
    { id: "socorro", nome: "Polo Socorro", cidade: "Socorro", waUrl: "https://wa.me/5519991105660?text=Ol%C3%A1!%20Quero%20atendimento%20em%20Socorro" },
    { id: "santa_barbara", nome: "Polo Santa Bárbara d'Oeste", cidade: "Santa Bárbara d'Oeste", waUrl: "https://wa.me/5519994172950?text=Ol%C3%A1!%20Quero%20atendimento%20em%20Santa%20B%C3%A1rbara%20D'Oeste" }
  ],

  faqs: [
    {
      pergunta: "Os cursos de Pós-Graduação da UNIP são reconhecidos pelo MEC?",
      resposta: "Sim! Todos os cursos de Pós-Graduação da UNIP possuem Credenciamento Institucional Geral reconhecido pela Portaria MEC nº 550/1988 e recredenciado pela Portaria MEC nº 1.341/2016 com nota máxima, garantindo validade nacional imediata do seu diploma."
    },
    {
      pergunta: "Qual é a diferença entre as 4 modalidades de ensino?",
      resposta: "No Presencial você tem aulas no campus; no Semipresencial combina encontros no campus e online; no EAD você estuda com autonomia total 100% digital; e no On-line Ao Vivo assiste a aulas síncronas transmitidas em tempo real com interação direta com professores e colegas."
    },
    {
      pergunta: "Quem pode se inscrever na Pós-Graduação?",
      resposta: "Profissionais que já concluíram o Curso Superior (Bacharelado, Licenciatura ou Tecnólogo) reconhecido pelo MEC. Caso esteja no último semestre de graduação, você pode realizar a pré-inscrição."
    },
    {
      pergunta: "Como funcionam a carga horária e o TCC?",
      resposta: "Nossos cursos possuem carga horária de 360h a 600h. Conforme a Resolução CNE/MEC Nº 1/2018, a obrigatoriedade do TCC varia de acordo com a especificidade de cada curso (obrigatório em Engenharia de Segurança do Trabalho e área da Saúde clínica)."
    },
    {
      pergunta: "Quais são os descontos disponíveis (Ex-aluno UNIP e Convênios)?",
      resposta: "Ex-alunos da UNIP possuem desconto automático de até 20% em todas as mensalidades. Também oferecemos condições comerciais especiais para empresas conveniadas e órgãos públicos."
    }
  ],

  estatisticasCarreira: [
    { valor: "+74%", rotulo: "Aumento médio salarial após conclusão da Pós-Graduação (Dados FGV/IBGE)" },
    { valor: "8 em 10", rotulo: "Recrutadores priorizam candidatos com títulos de especialista em vagas de liderança" },
    { valor: "140+", rotulo: "Opções de cursos atualizados com as exigências mais recentes do mercado" },
    { valor: "30+ Anos", rotulo: "Tradição e referência de ensino da Universidade Paulista" }
  ]
};

if (typeof window !== 'undefined') {
  window.UNIP_DATA = UNIP_DATA;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = UNIP_DATA;
}
