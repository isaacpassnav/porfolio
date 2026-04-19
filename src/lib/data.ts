export const profile = {
  name: "Isaac Pasapera",
  fullName: "Isaac Lehi Pasapera Navarro",
  title: "Full-Stack Developer",
  subtitle: "AI Integration",
  location: "Lima, Peru",
  email: "pasapera279@gmail.com",
  phone: "+51 967906070",
  github: "https://github.com/isaacpassnav",
  linkedin: "https://www.linkedin.com/in/isaac-pasapera-navarro/",
  instagram: "https://www.instagram.com/isaacpasapera/",
  available: true,
  bio: "Full-Stack Developer with 2 years of experience building scalable web applications, RESTful APIs, and AI-integrated solutions. Currently working with global teams at Springboard. Violinist, climber, builder.",
  tagline: "I build things that work — and make them fast.",
}

export const skills = {
  backend: ["Node.js", "Next.js", "TypeScript", "PHP"],
  frontend: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind"],
  databases: ["PostgreSQL", "SQL"],
  ai: ["Claude API", "OpenAI API", "GitHub Copilot"],
  devops: ["Git", "GitHub", "Vercel", "Railway", "Docker"],
  tools: ["VS Code", "Postman", "Jest", "WordPress"],
}

// Tech stack for orbit animation — logos via devicon CDN
const D = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons"

export const techStack = [
  // Orbit 1 — innermost, fastest
  { name: "Node.js",    logo: `${D}/nodejs/nodejs-original.svg`,           orbit: 1, angle: 0   },
  { name: "Next.js",    logo: `${D}/nextjs/nextjs-original.svg`,           orbit: 1, angle: 90  },
  { name: "TypeScript", logo: `${D}/typescript/typescript-original.svg`,   orbit: 1, angle: 180 },
  { name: "PHP",        logo: `${D}/php/php-original.svg`,                 orbit: 1, angle: 270 },
  // Orbit 2 — middle
  { name: "React",      logo: `${D}/react/react-original.svg`,             orbit: 2, angle: 0   },
  { name: "Tailwind",   logo: `${D}/tailwindcss/tailwindcss-original.svg`, orbit: 2, angle: 72  },
  { name: "PostgreSQL", logo: `${D}/postgresql/postgresql-original.svg`,   orbit: 2, angle: 144 },
  { name: "Docker",     logo: `${D}/docker/docker-original.svg`,           orbit: 2, angle: 216 },
  { name: "Git",        logo: `${D}/git/git-original.svg`,                 orbit: 2, angle: 288 },
  // Orbit 3 — outermost, slowest
  { name: "GitHub",     logo: `${D}/github/github-original.svg`,           orbit: 3, angle: 0   },
  { name: "Vercel",     logo: "/logos/vercel.svg",                         orbit: 3, angle: 90  },
  { name: "OpenAI",     logo: "/logos/openai.svg",                         orbit: 3, angle: 180 },
  { name: "Claude",     logo: "/logos/claude.svg",                         orbit: 3, angle: 270 },
]

export const experience = [
  {
    role: "AI Data Entry Specialist (Full-Stack Developer)",
    company: "Springboard",
    period: "March 2026 – Present",
    type: "Remote · Global Team",
    current: true,
    highlights: [
      "Review and optimize AI-generated code across multiple languages",
      "Quality control for AI model outputs — data labeling and validation",
      "Full-time in English with teams across Americas, Europe, Asia",
    ],
    tech: ["AI Tools", "Code Review", "Data Validation", "Multi-language"],
  },
  {
    role: "Independent Full-Stack Developer",
    company: "Dacreaciones",
    period: "2025 – Present",
    type: "Contract · Lima, Peru",
    current: true,
    highlights: [
      "8+ custom web applications — 100% on-time delivery",
      "WordPress performance improvements of 40% via optimization",
      "25% faster development using reusable component libraries",
    ],
    tech: ["Next.js", "WordPress", "Shopify", "WooCommerce", "SEO"],
  },
  {
    role: "Web Development Intern",
    company: "Isocal E.I.R.L",
    period: "Aug 2025 – Dec 2025",
    type: "Lima, Peru",
    current: false,
    highlights: [
      "Secure RESTful APIs with JWT — 15% reduction in unauthorized access",
      "SQL optimization — 20% faster average response time",
      "PHP + Dotenv backend integration, reducing integration errors by 10%",
    ],
    tech: ["Node.js", "PHP", "SQL", "JWT", "REST APIs", "Git"],
  },
  {
    role: "Information Analyst",
    company: "DIRIS Lima Centro",
    period: "Feb 2025 – Jun 2025",
    type: "Lima, Peru",
    current: false,
    highlights: [
      "Coordinated data reports from 14+ health inspectors — 20% accuracy gain",
      "Optimized workflows — 15% reduction in average reporting time",
      "Maintained weekly public health database compliance with regional standards",
    ],
    tech: ["SQL", "Excel", "Data Analysis", "Compliance"],
  },
  {
    role: "Technical Intern",
    company: "Digital Buho SAC",
    period: "May 2024 – Aug 2024",
    type: "Lima, Peru",
    current: false,
    highlights: [
      "Resolved hosting and SSL issues — 20% less client wait time",
      "Frontend updates with HTML, CSS, and JavaScript",
      "Git/GitHub version control — 20% fewer merge conflicts",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Git", "GitHub"],
  },
]

export const projects = [
  {
    title: "E-commerce Platform",
    description: "Full inventory management and payment integration with Shopify/WooCommerce. Real-time stock updates and automated order processing.",
    tech: ["Next.js", "WooCommerce", "Shopify", "REST API"],
    type: "E-commerce",
    metrics: "100% on-time delivery",
  },
  {
    title: "Travel Booking System",
    description: "Real-time availability search, multi-provider booking, and automated confirmation emails for a Lima-based travel agency.",
    tech: ["Node.js", "PostgreSQL", "REST API", "Email Automation"],
    type: "Booking System",
    metrics: "Automated confirmations",
  },
  {
    title: "AI Code Review Tool",
    description: "Quality control pipeline for AI-generated code outputs — systematic validation, accuracy scoring, and feedback loops.",
    tech: ["Python", "Claude API", "Data Validation", "CI/CD"],
    type: "AI Integration",
    metrics: "Production at Springboard",
  },
  {
    title: "Business CMS Platform",
    description: "Custom WordPress solution with proprietary theme and plugins. 50%+ improvement in search rankings and 40% performance gain.",
    tech: ["WordPress", "PHP", "MySQL", "SEO"],
    type: "CMS",
    metrics: "+50% SEO · +40% perf",
  },
  {
    title: "RESTful API Suite",
    description: "Secure, scalable API infrastructure with JWT authentication for e-commerce transactions. 15% reduction in unauthorized access.",
    tech: ["Node.js", "PHP", "JWT", "SQL", "Postman"],
    type: "Backend",
    metrics: "−15% security incidents",
  },
  {
    title: "Health Data System",
    description: "Reporting and analytics system for 14+ health inspectors. Improved accuracy by 20% through validation workflows.",
    tech: ["SQL", "Excel", "Data Analysis", "Compliance"],
    type: "Data Systems",
    metrics: "+20% reporting accuracy",
  },
]
