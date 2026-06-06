/**
 * Contenu placeholder du Global « home », consommé par src/seed/index.ts.
 * Les champs richText (hero.lead, about.body) sont décrits en segments
 * ({ text, bold?, color? }) ; le script les convertit au format lexical.
 */

export type Seg = { text: string; bold?: boolean; color?: "accent" | "dim" };

export const seedHome = {
  identity: {
    name: "Eric Beaufol",
    role: "Senior Frontend Developer",
    brand: "EB",
    brandSuffix: ".dev",
    location: "Paris, FR",
    year: "2026",
    email: "eric.beaufol@gmail.com",
  },
  hero: {
    status: "Disponible pour de nouvelles opportunités · 2026",
    titleLine1: "Eric Beaufol",
    titleOutline: "Frontend",
    titleAccent: "Senior",
    scrollLabel: "Scroll",
    lead: [
      { text: "Je conçois et construis des " },
      { text: "interfaces web performantes", bold: true },
      { text: " et des design systems à grande échelle. " },
      {
        text: "15 ans à transformer des produits complexes en expériences fluides.",
        color: "dim",
      },
    ] as Seg[],
  },
  marquee: [
    "React",
    "TypeScript",
    "Design Systems",
    "Next.js",
    "Animation",
    "Performance",
    "Accessibilité",
    "WebGL",
  ],
  about: {
    eyebrow: "01 — À propos",
    paragraphs: [
      [
        { text: "Développeur frontend basé à " },
        { text: "Paris", color: "accent" },
        { text: ", je travaille à l'intersection de " },
        { text: "l'ingénierie et du design", color: "dim" },
        { text: "." },
      ],
      [
        {
          text: "Je produis des interfaces rapides, accessibles et durables — du composant atomique jusqu'au design system complet.",
        },
      ],
    ] as Seg[][],
    stats: [
      { value: "15", suffix: "+", label: "Années d'expérience" },
      { value: "30", suffix: "+", label: "Projets livrés" },
      { value: "12", suffix: "M+", label: "Utilisateurs touchés" },
      { value: "98", suffix: "%", label: "Score Lighthouse moyen" },
    ],
  },
  projects: {
    eyebrow: "02 — Projets sélectionnés",
    title: "Travaux récents",
  },
  experience: {
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
        points: ["Développement d'interfaces web pour les clients de l'agence"],
      },
    ],
  },
  stack: {
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
  },
  contact: {
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
  },
  footer: {
    copyright: "© 2026 Eric Beaufol — Tous droits réservés",
    tagline: "Conçu & codé avec soin · Paris, FR",
  },
};
