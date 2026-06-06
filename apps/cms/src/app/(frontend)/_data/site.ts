/**
 * Contenu placeholder de l'accueil + identité (issu de design_handoff_portfolio).
 * ⚠️ Frontière de remplacement : sera câblé à Payload (Global) à l'étape 2.
 */

/** Fragment de texte avec emphase inline optionnelle. */
export type Segment = {
  text: string;
  em?: "b" | "dim" | "accent" | "muted";
};

export const identity = {
  name: "Eric Beaufol",
  role: "Senior Frontend Developer",
  brand: "EB",
  brandSuffix: ".dev",
  location: "Paris, FR",
  year: "2026",
  email: "eric.beaufol@gmail.com",
};

export const nav = {
  links: [
    { idx: "01", label: "À propos", href: "#about" },
    { idx: "02", label: "Projets", href: "#work" },
    { idx: "03", label: "Parcours", href: "#experience" },
    { idx: "04", label: "Stack", href: "#stack" },
  ],
  cta: { label: "Me contacter", href: "#contact" },
};

export const hero = {
  status: "Disponible pour de nouvelles opportunités · 2026",
  titleLine1: "Eric Beaufol",
  titleLine2: { outline: "Frontend", accent: "Senior" },
  lead: [
    { text: "Je conçois et construis des " },
    { text: "interfaces web performantes", em: "b" },
    { text: " et des design systems à grande échelle. " },
    {
      text: "15 ans à transformer des produits complexes en expériences fluides.",
      em: "dim",
    },
  ] as Segment[],
  scrollLabel: "Scroll",
};

export const marqueeItems = [
  "React",
  "TypeScript",
  "Design Systems",
  "Next.js",
  "Animation",
  "Performance",
  "Accessibilité",
  "WebGL",
];

export const about = {
  eyebrow: "01 — À propos",
  paragraphs: [
    [
      { text: "Développeur frontend basé à " },
      { text: "Paris", em: "accent" },
      { text: ", je travaille à l'intersection de " },
      { text: "l'ingénierie et du design", em: "muted" },
      { text: "." },
    ],
    [
      {
        text: "Je produis des interfaces rapides, accessibles et durables — du composant atomique jusqu'au design system complet.",
      },
    ],
  ] as Segment[][],
  stats: [
    { value: "15", suffix: "+", label: "Années d'expérience" },
    { value: "30", suffix: "+", label: "Projets livrés" },
    { value: "12", suffix: "M+", label: "Utilisateurs touchés" },
    { value: "98", suffix: "%", label: "Score Lighthouse moyen" },
  ],
};

export const projectsSection = {
  eyebrow: "02 — Projets sélectionnés",
  title: "Travaux récents",
  count: "[ 04 — études de cas ]",
};

export const experience = {
  eyebrow: "03 — Parcours",
  title: "Expériences",
  items: [
    {
      period: "2025 — Présent",
      role: "Lead Frontend Developer",
      company: "Freelance",
      points: [
        "Mise en place du design system et de la stratégie de tests",
        "Réduction de 45% du temps de chargement initial",
      ],
    },
    {
      period: "2014 — 2025",
      role: "Lead Frontend Developer",
      company: "Marcel — Agence de publicité (groupe Publicis)",
      points: [
        "Direction technique frontend d'une équipe de 5 développeurs",
        "Développement de campagnes digitales pour des clients internationaux (Orange, Burger King, etc...)",
        "Spécialisation animation et expériences interactives",
      ],
    },
    {
      period: "2009 — 2014",
      role: "Frontend Developer",
      company: "DBA — Agence de communication (groupe Commellink)",
      points: [
        "Développement d'interfaces web pour les clients de l'agence",
      ],
    },
  ],
};

export const stack = {
  eyebrow: "04 — Compétences",
  title: "Stack technique",
  cards: [
    {
      n: "/A",
      category: "Langages & Core",
      skills: [
        { name: "TypeScript", level: "Expert" },
        { name: "JavaScript (ES2024)", level: "Expert" },
        { name: "HTML5 / CSS3", level: "Expert" },
        { name: "PHP", level: "Notions" },
      ],
    },
    {
      n: "/B",
      category: "Frameworks",
      skills: [
        { name: "React", level: "Expert" },
        { name: "Next.js", level: "Avancé" },
        { name: "Vue / Nuxt", level: "Avancé" },
        { name: "Astro", level: "Confirmé" },
      ],
    },
    {
      n: "/C",
      category: "Animation & 3D",
      skills: [
        { name: "GSAP", level: "Expert" },
        { name: "Framer Motion", level: "Avancé" },
        { name: "Three.js / WebGL", level: "Confirmé" },
        { name: "Lottie", level: "Avancé" },
      ],
    },
    {
      n: "/D",
      category: "Outils & Méthodes",
      skills: [
        { name: "Design Systems", level: "Expert" },
        { name: "Vite / Turborepo", level: "Avancé" },
        { name: "Testing (Vitest, Playwright)", level: "Avancé" },
        { name: "Figma", level: "Avancé" },
      ],
    },
  ],
};

export const contact = {
  eyebrow: "05 — Contact",
  lines: ["Construisons", "quelque chose"],
  linkText: "ensemble ↗",
  sub: "Ouvert aux missions freelance et aux postes seniors en CDI.",
  links: [
    { label: "Email", href: "mailto:eric.beaufol@gmail.com" },
    { label: "GitHub", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "CV (PDF)", href: "#" },
  ],
};

export const footer = {
  copyright: "© 2026 Eric Beaufol — Tous droits réservés",
  tagline: "Conçu & codé avec soin · Paris, FR",
};
