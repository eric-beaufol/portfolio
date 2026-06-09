/**
 * Couleurs inline du thème, partagées entre l'éditeur lexical (TextStateFeature,
 * cf. payload.config) et le rendu front (LexicalContent). Mappe une valeur de
 * state vers une couleur CSS (variables du design system).
 */
export const textStateColors = {
  color: {
    accent: { label: 'Accent', css: { color: 'var(--accent)' } },
    dim: { label: 'Atténué', css: { color: 'var(--fg-dim)' } },
  },
} as const

/** Mapping plat valeur → couleur CSS, pour le convertisseur de rendu. */
export const colorCss: Record<string, string> = Object.fromEntries(
  Object.entries(textStateColors.color).map(([key, v]) => [key, v.css.color]),
)
