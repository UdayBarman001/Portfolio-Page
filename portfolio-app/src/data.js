// Central content store — edit here to update the whole site.

export const profile = {
  name: 'Uday Barman',
  role: 'Java Full Stack Developer · MERN Stack Developer',
  tagline: 'I build backend systems that don’t fall over — in Java and JavaScript.',
  location: 'Jabalpur, Madhya Pradesh, IN',
  email: 'udaybarman1321@gmail.com',
  githubUsername: 'UdayBarman001',
  github: 'https://github.com/UdayBarman001',
  linkedin: 'https://www.linkedin.com/in/uday-barman-648787250/',
  internshipStart: '2025-06-01',
  summary:
    "Java Full Stack Developer (B.Tech, expected 2026) working across two production stacks: Spring Boot/Java on the backend and the MERN stack (MongoDB, Express, React, Node.js) end to end. I ship production-grade REST APIs, wire LLMs into backend systems with Spring AI, and hold a bar for test coverage and CI/CD automation rather than shipping and hoping.",
};

export const heroStats = [
  { value: 35, suffix: '%', label: 'API latency reduced', detail: 'across 5+ core endpoints' },
  { value: 72, suffix: '%', label: 'test coverage', detail: 'from a 0% baseline' },
  { value: 3, suffix: '×', label: 'faster deploys', detail: 'manual FTP → automated CI/CD' },
  { value: 250, suffix: '+', label: 'DSA problems solved', detail: 'LeetCode, algorithmic rigor' },
];

export const projects = [
  {
    id: 'nexus',
    name: 'Nexus',
    tag: 'AI / RAG SYSTEM',
    tagColor: 'blue',
    stackType: 'JAVA STACK',
    repoHint: 'nexus',
    role: 'Lead Developer',
    oneLiner:
      'An agentic RAG platform that cuts manual document processing time by 40% by automatically ingesting, embedding, and retrieving content from private datasets.',
    metrics: [
      { value: '40%', label: 'less manual doc processing' },
      { value: '25%', label: 'better retrieval accuracy vs. keyword search' },
      { value: '<3 min', label: 'release time (from 20 min)' },
    ],
    stack: ['Java', 'Spring Boot', 'Spring AI', 'PgVector', 'PostgreSQL', 'React', 'Docker', 'GitHub Actions'],
    links: { github: 'https://github.com/UdayBarman001', demo: null },
  },
  {
    id: 'electrotem',
    name: 'Electrotem',
    tag: 'SECURITY-HARDENED',
    tagColor: 'amber',
    stackType: 'JAVA STACK',
    repoHint: 'electrotem',
    role: 'Full Stack Developer',
    oneLiner:
      'A security-hardened e-commerce backend with role-scoped JWT auth and composite-indexed catalog queries, pentested against OWASP Top-10 vectors.',
    metrics: [
      { value: '1.5×', label: 'faster catalog queries' },
      { value: '0', label: 'critical OWASP Top-10 findings' },
      { value: '25', label: 'JUnit/Mockito tests in CI' },
    ],
    stack: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'MySQL', 'React', 'Railway', 'Netlify'],
    links: { github: 'https://github.com/UdayBarman001', demo: null },
  },
  {
    id: 'listing-app',
    name: 'Listing-App',
    tag: 'PERFORMANCE-TUNED',
    tagColor: 'green',
    stackType: 'MERN STACK',
    repoHint: 'listing-app',
    role: 'Full Stack Developer',
    oneLiner:
      'A real-time listings platform where a strict TypeScript migration surfaced 12 silent data-shape bugs and lifted the Lighthouse score from 61 to 78.',
    metrics: [
      { value: '61→78', label: 'Lighthouse performance score' },
      { value: '12', label: 'silent bugs eliminated via TS' },
      { value: '0', label: 'stale-data incidents in UAT' },
    ],
    stack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'TypeScript', 'Tailwind CSS'],
    links: { github: 'https://github.com/UdayBarman001', demo: null },
  },
];

export const experience = {
  company: 'Krishiverse',
  role: 'Software Development Engineer Intern',
  period: 'Jun 2025 – Present',
  location: 'Remote',
  log: [
    {
      type: 'perf',
      text: 'Reduced average API response latency by 35% across 5+ core endpoints by refactoring Spring Boot controller/service layers to eliminate N+1 query patterns.',
    },
    {
      type: 'test',
      text: 'Improved test coverage from 0% to 72% on critical modules, authoring 40+ JUnit 5 and Mockito tests and halving regression defects caught in manual QA.',
    },
    {
      type: 'ci',
      text: 'Cut deployment cycles 3× by configuring a GitHub Actions pipeline: test → build → deploy to Railway in under 5 minutes, replacing manual FTP releases.',
    },
    {
      type: 'feat',
      text: 'Shipped 15+ documented REST endpoints with role-based access control (Spring Security + JWT), unblocking the frontend team to iterate independently.',
    },
    {
      type: 'process',
      text: 'Ran 3 two-week Agile sprints — standups, planning, PR reviews — cutting average review cycles from 3 rounds to 1 through actionable feedback loops.',
    },
  ],
};

export const skills = {
  Languages: ['Java 17+', 'JavaScript (ES6+)', 'TypeScript', 'SQL', 'HTML5', 'CSS3'],
  Backend: ['Spring Boot', 'Spring MVC', 'Spring Security', 'Spring Data JPA', 'Hibernate', 'Node.js', 'Express.js'],
  Frontend: ['React', 'Redux', 'React Native (Expo)', 'Next.js', 'Tailwind CSS'],
  'Testing & QA': ['JUnit 5', 'Mockito', 'Postman', 'Maven Surefire'],
  'DevOps & Tooling': ['Docker', 'GitHub Actions', 'Git', 'Railway', 'Render', 'Netlify'],
  'AI & Emerging': ['Spring AI', 'RAG', 'Agentic Workflows', 'PgVector', 'Ollama'],
  Databases: ['MySQL', 'PostgreSQL', 'MongoDB'],
};

export const education = [
  {
    school: 'Shriram Group of Institutions, Jabalpur',
    degree: 'B.Tech, Computer Science',
    period: 'Expected 2026',
    detail: 'CGPA: 8.1 / 10',
  },
];

export const achievements = [
  'Solved 250+ DSA problems on LeetCode; active in GeeksforGeeks #gfg160 and #geekstreak2024',
  'College Ambassador, Techfest IIT Bombay — directed marketing for Asia’s largest tech festival, +40% campus engagement',
  'Cisco-AICTE Virtual Internship (NIIT Foundation) — 5+ networking/cloud simulations, 10-person remote cohort',
];
