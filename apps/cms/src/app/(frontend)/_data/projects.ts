/**
 * Contenu placeholder des projets (issu de design_handoff_portfolio).
 * ⚠️ Frontière de remplacement : à l'étape 2 (Payload), ce module sera remplacé
 * par une lecture de la Local API ; les types ci-dessous restent la source de
 * vérité du rendu.
 */

export type Stat = {
  /** Valeur cible du compteur (string pour préserver les décimales, ex. "2.1"). */
  value: string;
  /** Suffixe accentué (%, +, fps, s…). Optionnel. */
  suffix?: string;
  caption: string;
};

export type Project = {
  slug: string;
  /** Catégorie affichée en eyebrow mono (ex. "SaaS · Data-viz"). */
  category: string;
  title: string;
  /** Accroche du case hero. */
  lead: string;
  /** Description courte de la ligne projet (accueil). */
  cardDescription: string;
  /** Tags affichés sur l'accueil ET dans la meta strip "Stack". */
  tags: string[];
  meta: {
    role: string;
    year: string;
    duration: string;
  };
  context: { heading: string; body: string };
  challenge: { heading: string; items: string[] };
  /** 3 légendes de placeholders visuels (1 large + 2 demi). */
  gallery: string[];
  approach: { heading: string; body: string; points: string[] };
  results: { heading: string; stats: Stat[] };
};

export const projects: Project[] = [
  {
    slug: "aurora-analytics",
    category: "SaaS · Data-viz",
    title: "Aurora Analytics",
    lead: "Refonte complète d'un dashboard d'analytique temps réel : visualisations de données performantes, mode collaboratif multi-curseurs et un design system maison.",
    cardDescription:
      "Refonte complète d'un dashboard SaaS temps réel : visualisations de données, mode collaboratif et design system maison.",
    tags: ["React", "TypeScript", "D3.js", "WebSockets"],
    meta: { role: "Lead Frontend", year: "2024", duration: "9 mois" },
    context: {
      heading: "Vue d'ensemble",
      body: "Aurora est une plateforme d'analytique B2B utilisée par des équipes data pour explorer des millions d'événements en temps réel. L'ancienne interface souffrait de lenteurs sur les gros volumes et d'une expérience fragmentée. J'ai piloté la refonte frontend de bout en bout.",
    },
    challenge: {
      heading: "Problématiques",
      items: [
        "Rendu fluide de graphiques avec plus de 100 000 points sans bloquer le thread principal.",
        "Synchronisation temps réel de l'état entre plusieurs utilisateurs simultanés.",
        "Cohérence visuelle absente : chaque écran réinventait ses composants.",
      ],
    },
    gallery: [
      "aperçu — aurora-analytics-01.png",
      "aperçu — aurora-analytics-02.png",
      "aperçu — aurora-analytics-03.png",
    ],
    approach: {
      heading: "Solution mise en œuvre",
      body: "J'ai mis en place une couche de rendu basée sur la virtualisation et un offload des calculs lourds via Web Workers. Les visualisations D3 ont été enveloppées dans des composants React déclaratifs, et l'état collaboratif repose sur un flux WebSocket avec résolution de conflits optimiste.",
      points: [
        "Architecture de composants atomiques documentée dans Storybook.",
        "Web Workers pour l'agrégation, gardant l'UI à 60 fps.",
        "Mode collaboratif avec curseurs distants et présence temps réel.",
      ],
    },
    results: {
      heading: "Impact mesuré",
      stats: [
        { value: "45", suffix: "%", caption: "Temps de chargement initial" },
        { value: "60", suffix: "fps", caption: "Rendu sur gros volumes" },
        { value: "120", suffix: "+", caption: "Composants systématisés" },
      ],
    },
  },
  {
    slug: "maison-verte",
    category: "E-commerce · Brand",
    title: "Maison Verte",
    lead: "Site e-commerce immersif pour une marque éco-responsable : direction animation au scroll, storytelling produit et un tunnel d'achat repensé pour la conversion.",
    cardDescription:
      "Site e-commerce immersif pour une marque éco-responsable, animations au scroll et tunnel d'achat optimisé (+34% conversion).",
    tags: ["Next.js", "GSAP", "Shopify", "SSR"],
    meta: { role: "Senior Frontend", year: "2023", duration: "5 mois" },
    context: {
      heading: "Vue d'ensemble",
      body: "Maison Verte vend des produits d'entretien rechargeables. La marque voulait une expérience qui incarne ses valeurs : sobriété, transparence et désir. L'objectif business : augmenter le taux de conversion sans sacrifier la richesse narrative.",
    },
    challenge: {
      heading: "Problématiques",
      items: [
        "Concilier animations riches et performance / SEO sur un site marchand.",
        "Réduire l'abandon de panier sur un tunnel historiquement trop long.",
        "Intégrer Shopify tout en gardant une couche de présentation sur-mesure.",
      ],
    },
    gallery: [
      "aperçu — maison-verte-01.png",
      "aperçu — maison-verte-02.png",
      "aperçu — maison-verte-03.png",
    ],
    approach: {
      heading: "Solution mise en œuvre",
      body: "Architecture Next.js en rendu hybride (SSR + ISR) pour garder l'indexation et la vitesse. Les animations GSAP sont déclenchées au scroll avec un budget strict, désactivées sous prefers-reduced-motion. Le checkout a été condensé en trois étapes claires connectées à l'API Shopify.",
      points: [
        "Scroll-telling avec révélations séquencées et parallaxe maîtrisée.",
        "Tunnel d'achat raccourci de 6 à 3 étapes.",
        "Headless Shopify pour découpler présentation et commerce.",
      ],
    },
    results: {
      heading: "Impact mesuré",
      stats: [
        { value: "34", suffix: "%", caption: "Hausse de conversion" },
        { value: "98", caption: "Score Lighthouse perf" },
        { value: "22", suffix: "%", caption: "Baisse d'abandon panier" },
      ],
    },
  },
  {
    slug: "pulse-design-system",
    category: "Design System · Plateforme",
    title: "Pulse Design System",
    lead: "Conception et maintien d'un design system multi-marques utilisé par six équipes produit : 120+ composants, tokens, documentation vivante et tests visuels automatisés.",
    cardDescription:
      "Conception et maintien d'un design system multi-marques utilisé par 6 équipes — 120+ composants, docs et tests visuels.",
    tags: ["Storybook", "Tokens", "a11y", "Monorepo"],
    meta: { role: "DS Lead", year: "2022 — 24", duration: "En continu" },
    context: {
      heading: "Vue d'ensemble",
      body: "Pulse est le socle UI partagé par l'ensemble des produits de l'entreprise. Avant son existence, chaque équipe maintenait ses propres composants, générant incohérences et dette. J'ai conçu et fait vivre le système.",
    },
    challenge: {
      heading: "Problématiques",
      items: [
        "Servir plusieurs marques avec un seul socle technique.",
        "Garantir l'accessibilité (WCAG AA) sur tous les composants.",
        "Éviter les régressions visuelles à chaque release.",
      ],
    },
    gallery: [
      "aperçu — pulse-design-system-01.png",
      "aperçu — pulse-design-system-02.png",
      "aperçu — pulse-design-system-03.png",
    ],
    approach: {
      heading: "Solution mise en œuvre",
      body: "Le système repose sur une architecture de design tokens à trois niveaux (primitifs, sémantiques, composants) permettant le theming multi-marques. Chaque composant est testé en accessibilité et capturé en tests de régression visuelle dans la CI.",
      points: [
        "Tokens thémables exportés vers web, iOS et Figma.",
        "Tests a11y automatisés sur chaque PR.",
        "Documentation interactive et versionnée dans Storybook.",
      ],
    },
    results: {
      heading: "Impact mesuré",
      stats: [
        { value: "6", caption: "Équipes équipées" },
        { value: "120", suffix: "+", caption: "Composants maintenus" },
        { value: "100", suffix: "%", caption: "Couverture a11y AA" },
      ],
    },
  },
  {
    slug: "orbit-studio",
    category: "Expérimental · WebGL",
    title: "Orbit Studio",
    lead: "Site portfolio expérimental pour un studio créatif : scènes WebGL interactives, transitions de page fluides et une direction artistique pensée comme une démo technique.",
    cardDescription:
      "Site portfolio expérimental avec scènes WebGL interactives et transitions de page fluides pour un studio créatif.",
    tags: ["Three.js", "WebGL", "Framer Motion", "GLSL"],
    meta: { role: "Creative Dev", year: "2023", duration: "3 mois" },
    context: {
      heading: "Vue d'ensemble",
      body: "Orbit Studio voulait un site qui soit lui-même une preuve de savoir-faire. Le brief : impressionner sans nuire à l'usage, avec des scènes 3D interactives servant la présentation des projets plutôt que la décoration.",
    },
    challenge: {
      heading: "Problématiques",
      items: [
        "Maintenir 60 fps avec des scènes WebGL sur un large parc d'appareils.",
        "Transitions de page sans rupture entre contenus 2D et 3D.",
        "Dégradation gracieuse quand WebGL n'est pas disponible.",
      ],
    },
    gallery: [
      "aperçu — orbit-studio-01.png",
      "aperçu — orbit-studio-02.png",
      "aperçu — orbit-studio-03.png",
    ],
    approach: {
      heading: "Solution mise en œuvre",
      body: "Une scène Three.js persistante vit au-dessus du DOM, pilotée par le scroll et les routes. Les shaders GLSL sur-mesure gèrent les effets de distorsion, avec un système de qualité adaptative selon le device. Un fallback statique élégant prend le relais sans WebGL.",
      points: [
        "Shaders GLSL custom pour les transitions de hero.",
        "Qualité adaptative pilotée par les perfs runtime.",
        "Fallback DOM complet sans WebGL.",
      ],
    },
    results: {
      heading: "Impact mesuré",
      stats: [
        { value: "60", suffix: "fps", caption: "Sur desktop & mobile récent" },
        { value: "3", caption: "Prix design remportés" },
        { value: "2.1", suffix: "s", caption: "Time-to-interactive" },
      ],
    },
  },
];

const pad2 = (n: number) => String(n).padStart(2, "0");

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);

/** Index 1-based (ex. "01") d'un projet, pour l'affichage. */
export const getProjectNumber = (slug: string): string => {
  const i = projects.findIndex((p) => p.slug === slug);
  return pad2(i + 1);
};

/** Projet suivant (boucle sur le premier après le dernier). */
export const getNextProject = (slug: string): Project => {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
};

export const totalProjects = (): string => pad2(projects.length);
